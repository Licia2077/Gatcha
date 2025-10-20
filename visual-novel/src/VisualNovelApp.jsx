import React, { useEffect, useState } from "react";
import "./styles/index.css";
import Miku from "./assets/Miku.png";
import Teto from "./assets/Teto.png";

/**
 * 🎵 Re:SONANCE — 완전판
 * 기능: 타이핑, 세이브/로드, 오토세이브, 갤러리, 초상화, 호감도
 */

export default function VisualNovelApp() {
    const [nodeId, setNodeId] = useState("start");
    const [affinity, setAffinity] = useState({ teto: 0, miku: 0 });
    const [textShown, setTextShown] = useState("");
    const [typingDone, setTypingDone] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [saveSlots, setSaveSlots] = useState([null, null, null]);
    const [gallery, setGallery] = useState(() => {
        const saved = localStorage.getItem("vn_gallery_unlocks");
        return saved ? JSON.parse(saved) : { teto: false, miku: false };
    });

    // 시나리오 데이터
    const script = {
        start: {
            bg: "linear-gradient(135deg, #0f001a, #28002a)",
            say: { who: "나레이션", text: "보컬로이드 프로젝트 ‘Re:SONANCE’. 당신은 미쿠와 테토의 보컬 트레이너로 합류했다." },
            portraits: { left: "teto", right: "miku", active: null },
            choices: [
                { text: "하츠네 미쿠와 먼저 이야기한다", next: "miku_intro", effect: { miku: 1 } },
                { text: "카사네 테토와 먼저 이야기한다", next: "teto_intro", effect: { teto: 1 } },
            ],
        },
        teto_intro: {
            bg: "linear-gradient(135deg, #2a003a, #45005e)",
            say: { who: "테토", text: "난 미쿠처럼 완벽하지 않지만, 그래도 노래하고 싶어!" },
            portraits: { left: "teto", right: null, active: "teto" },
            choices: [
                { text: "그게 네 힘이야.", next: "teto_end", effect: { teto: 2 } },
                { text: "그럼 연습부터 해보자.", next: "teto_end", effect: { teto: 1 } },
            ],
        },
        teto_end: {
            bg: "linear-gradient(135deg, #42005f, #a040b0)",
            say: { who: "나레이션", text: "테토의 불안정한 진심이 무대를 울렸다." },
            portraits: { left: "teto", right: null, active: null },
            end: true,
            unlock: "teto",
        },
        miku_intro: {
            bg: "linear-gradient(135deg, #001a2a, #00384a)",
            say: { who: "미쿠", text: "완벽한 음을 찾아야 해요. 감정은… 오차니까요." },
            portraits: { left: null, right: "miku", active: "miku" },
            choices: [
                { text: "감정이 진짜 음악이에요.", next: "miku_end", effect: { miku: 2 } },
                { text: "그럼 네 방식으로 해보자.", next: "miku_end", effect: { miku: 1 } },
            ],
        },
        miku_end: {
            bg: "linear-gradient(135deg, #004466, #00bbee)",
            say: { who: "나레이션", text: "완벽보다 진심을 택한 미쿠의 노래가 무대를 채웠다." },
            portraits: { left: null, right: "miku", active: null },
            end: true,
            unlock: "miku",
        },
    };

    const node = script[nodeId];

    // 자동 저장
    useEffect(() => {
        const data = { nodeId, affinity };
        localStorage.setItem("vn_autosave", JSON.stringify(data));
    }, [nodeId, affinity]);

    // 갤러리 해금
    useEffect(() => {
        if (node?.unlock) {
            setGallery((prev) => {
                const updated = { ...prev, [node.unlock]: true };
                localStorage.setItem("vn_gallery_unlocks", JSON.stringify(updated));
                return updated;
            });
        }
    }, [nodeId]);

    // 세이브 슬롯 로드
    const loadSlots = () => {
        const slots = [1, 2, 3].map((i) => {
            const raw = localStorage.getItem(`vn_save_slot_${i}`);
            return raw ? JSON.parse(raw) : null;
        });
        setSaveSlots(slots);
    };
    useEffect(() => loadSlots(), []);

    // 세이브
    const saveGame = (slot) => {
        const data = { nodeId, affinity };
        localStorage.setItem(`vn_save_slot_${slot}`, JSON.stringify(data));
        loadSlots();
    };

    // 로드
    const loadGame = (slot) => {
        const data = JSON.parse(localStorage.getItem(`vn_save_slot_${slot}`));
        if (data) {
            setNodeId(data.nodeId);
            setAffinity(data.affinity);
        }
    };

    const autoLoad = () => {
        const auto = JSON.parse(localStorage.getItem("vn_autosave"));
        if (auto) {
            setNodeId(auto.nodeId);
            setAffinity(auto.affinity);
        }
    };

    // 타이핑
    useEffect(() => {
        let i = 0;
        setTextShown("");
        setTypingDone(false);
        const timer = setInterval(() => {
            setTextShown(node?.say?.text?.slice(0, i));
            i++;
            if (i > (node?.say?.text?.length || 0)) {
                setTypingDone(true);
                clearInterval(timer);
            }
        }, 25);
        return () => clearInterval(timer);
    }, [nodeId]);

    const handleChoice = (choice) => {
        if (choice.effect) {
            setAffinity((prev) => ({
                teto: prev.teto + (choice.effect.teto || 0),
                miku: prev.miku + (choice.effect.miku || 0),
            }));
        }
        setNodeId(choice.next);
    };

    return (
        <div className="vn-wrapper" style={{ background: node?.bg }}>
            {/* 캐릭터 초상화 */}
            <div className="vn-portraits">
                {node.portraits.left && (
                    <img
                        src={node.portraits.left === "miku" ? Miku : Teto}
                        className={`vn-portrait left ${node.portraits.active === node.portraits.left ? "active" : ""
                            }`}
                        alt="left character"
                    />
                )}
                {node.portraits.right && (
                    <img
                        src={node.portraits.right === "miku" ? Miku : Teto}
                        className={`vn-portrait right ${node.portraits.active === node.portraits.right ? "active" : ""
                            }`}
                        alt="right character"
                    />
                )}
            </div>

            {/* 대화 UI */}
            <div className="vn-dialogue-box">
                <div className="vn-header">
                    <div className="vn-name">{node?.say?.who}</div>
                    <div className="vn-menu">
                        <button onClick={autoLoad}>자동로드</button>
                        <button onClick={() => setShowGallery(true)}>갤러리</button>
                        <button onClick={() => setShowMenu(!showMenu)}>메뉴</button>
                    </div>
                </div>

                <div className="vn-text">
                    {textShown}
                    {!typingDone && <span className="cursor">▌</span>}
                </div>

                <div className="vn-choices">
                    {node?.choices?.map((c, i) => (
                        <button key={i} onClick={() => handleChoice(c)}>
                            {c.text}
                        </button>
                    ))}
                    {node?.end && (
                        <button onClick={() => setNodeId("start")}>다시 시작</button>
                    )}
                </div>

                <div className="vn-affinity">
                    ❤️ 테토: {affinity.teto} / 💙 미쿠: {affinity.miku}
                </div>
            </div>

            {/* 메뉴창 */}
            {showMenu && (
                <div className="vn-menu-window">
                    <h3>💾 세이브 / 로드</h3>
                    {[1, 2, 3].map((slot) => (
                        <div key={slot} className="vn-slot">
                            <span>슬롯 {slot}</span>
                            <div>
                                <button onClick={() => saveGame(slot)}>저장</button>
                                <button onClick={() => loadGame(slot)}>로드</button>
                            </div>
                        </div>
                    ))}
                    <button onClick={() => setShowMenu(false)}>닫기</button>
                </div>
            )}

            {/* 갤러리 */}
            {showGallery && (
                <div className="vn-gallery">
                    <h2>🖼️ CG 갤러리</h2>
                    <div className="vn-gallery-grid">
                        <div className={`vn-gallery-item ${gallery.teto ? "unlocked" : ""}`}>
                            {gallery.teto ? "테토 엔딩 CG 해금됨" : "🔒 잠금"}
                        </div>
                        <div className={`vn-gallery-item ${gallery.miku ? "unlocked" : ""}`}>
                            {gallery.miku ? "미쿠 엔딩 CG 해금됨" : "🔒 잠금"}
                        </div>
                    </div>
                    <button onClick={() => setShowGallery(false)}>닫기</button>
                </div>
            )}
        </div>
    );
}
