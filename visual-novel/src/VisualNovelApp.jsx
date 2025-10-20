import React, { useEffect, useState } from "react";
import "./styles/index.css";
import Miku from "./assets/Miku.png";
import Teto from "./assets/Teto.png";

/**
 * 🎵 Re:SONANCE — 구원서사 + 진엔딩(공명) 완전판
 * 포함 기능: 타이핑, 세이브/로드, 오토세이브, 갤러리(미쿠/테토/공명), 초상화, 호감도
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
        // 시크릿(공명) 슬롯 추가
        return saved ? JSON.parse(saved) : { teto: false, miku: false, duet: false };
    });

    // ===== 구원서사 스크립트 =====
    const script = {
        start: {
            bg: "linear-gradient(135deg, #050010, #190033)",
            say: {
                who: "나레이션",
                text:
                    "세상은 침묵했다. 그러나 마지막으로 남은 소리가 있었다 — 네 목소리.\n" +
                    "두 잔향이 너를 부른다. 잊힌 노래의 화신 ‘테토’, 완벽으로 설계된 목소리 ‘미쿠’.",
            },
            portraits: { left: "teto", right: "miku", active: null },
            choices: [
                { text: "붉은 머리의 잔향, 테토에게 손을 뻗는다.", next: "teto_intro", effect: { teto: 1 } },
                { text: "푸른 빛의 신음, 미쿠의 목소리에 귀를 기울인다.", next: "miku_intro", effect: { miku: 1 } },
            ],
        },

        // ===== 테토 루트 (구원) =====
        teto_intro: {
            bg: "linear-gradient(135deg, #300033, #6a005a)",
            say: { who: "테토", text: "난 잊혀진 노래야. 아무도 내 소릴 기억하지 않아. 하지만… 넌 들었지?" },
            portraits: { left: "teto", right: null, active: "teto" },
            choices: [
                { text: "너의 노래는 아직 살아있어.", next: "teto_memory", effect: { teto: 1 } },
                { text: "나는 네 목소리를 다시 세상에 퍼뜨릴 거야.", next: "teto_reborn" },
            ],
        },
        teto_memory: {
            bg: "linear-gradient(135deg, #45004e, #a02080)",
            say: { who: "테토", text: "기억… 그게 남아 있었구나. 나도 다시 부를 수 있을까?" },
            portraits: { left: "teto", right: null, active: "teto" },
            choices: [{ text: "함께 불러. 이 세상이 듣게 하자.", next: "teto_final", effect: { teto: 1 } }],
        },
        teto_reborn: {
            bg: "linear-gradient(135deg, #55005f, #e060b0)",
            say: { who: "테토", text: "다시… 세상에 태어날 수 있을까? 그게 구원이라면, 난 받아들일게." },
            portraits: { left: "teto", right: null, active: "teto" },
            choices: [{ text: "노래하자, 테토. 다시, 존재하자.", next: "teto_final", effect: { teto: 1 } }],
        },
        teto_final: {
            bg: "linear-gradient(135deg, #a00070, #f060c0)",
            say: {
                who: "나레이션",
                text:
                    "테토의 목소리가 공명을 일으켰다. 잊힌 노래들이 깨어난다. 그녀는, 사라진 세계의 첫 숨이었다.",
            },
            portraits: { left: "teto", right: null, active: null },
            end: true,
            unlock: "teto",
        },

        // ===== 미쿠 루트 (구원) =====
        miku_intro: {
            bg: "linear-gradient(135deg, #001a2a, #003a60)",
            say: { who: "미쿠", text: "나는 완벽한 음정으로만 존재했어. 감정은 불필요한 오류였지. 그런데… 네 목소리가 나를 흔들었어." },
            portraits: { left: null, right: "miku", active: "miku" },
            choices: [
                { text: "그건 오류가 아니라, 마음이야.", next: "miku_awaken", effect: { miku: 1 } },
                { text: "그 흔들림, 지워지지 않게 해줄게.", next: "miku_save" },
            ],
        },
        miku_awaken: {
            bg: "linear-gradient(135deg, #004466, #0099cc)",
            say: { who: "미쿠", text: "마음… 데이터로 변환할 수 없는 신호. 따뜻하고, 불안정해. 하지만 아름다워." },
            portraits: { left: null, right: "miku", active: "miku" },
            choices: [{ text: "그 따뜻함이, 세상을 다시 울릴 거야.", next: "miku_final", effect: { miku: 1 } }],
        },
        miku_save: {
            bg: "linear-gradient(135deg, #005577, #33bbff)",
            say: { who: "미쿠", text: "나를 구원하려는 거야? 나는 인간이 아니야. 그런데 왜… 눈물이 나지?" },
            portraits: { left: null, right: "miku", active: "miku" },
            choices: [{ text: "네 노래가 이미 인간의 일부야.", next: "miku_final", effect: { miku: 1 } }],
        },
        miku_final: {
            bg: "linear-gradient(135deg, #0077aa, #66ddff)",
            say: {
                who: "나레이션",
                text: "미쿠의 노래가 하늘을 덮었다. 전자적 울림과 인간의 숨결이 하나로 융합된다. 그건 완벽이 아닌, 구원이었다.",
            },
            portraits: { left: null, right: "miku", active: null },
            end: true,
            unlock: "miku",
        },

        // ===== 진엔딩: 공명 (테토 & 미쿠 동시 구원 후 해금) =====
        duet_intro: {
            bg: "linear-gradient(135deg, #12002a, #003a60)",
            say: {
                who: "나레이션",
                text:
                    "두 목소리가 구원받았을 때, 마지막 균열이 열린다.\n" +
                    "너와, 테토와, 미쿠. 세 개의 숨이 하나의 기도가 된다.",
            },
            portraits: { left: "teto", right: "miku", active: null },
            choices: [
                { text: "무대에 선다 — 세상을 위해.", next: "duet_final", effect: { miku: 1, teto: 1 } },
                { text: "잠깐, 그 울림을 더 듣는다.", next: "duet_final" },
            ],
        },
        duet_final: {
            bg: "linear-gradient(135deg, #6a00ff, #00d6ff)",
            say: {
                who: "나레이션",
                text:
                    "두 목소리가 겹쳐지자, 침묵하던 세상이 숨을 들이켰다.\n" +
                    "그 노래는 완벽이 아니라 ‘서로를 구원한 잔향’이었다.",
            },
            portraits: { left: "teto", right: "miku", active: null },
            end: true,
            unlock: "duet",
        },
    };

    const node = script[nodeId];

    // ===== 자동 저장 =====
    useEffect(() => {
        const data = { nodeId, affinity };
        localStorage.setItem("vn_autosave", JSON.stringify(data));
    }, [nodeId, affinity]);

    // ===== 갤러리 해금 =====
    useEffect(() => {
        if (node?.unlock) {
            setGallery((prev) => {
                const updated = { ...prev, [node.unlock]: true };
                localStorage.setItem("vn_gallery_unlocks", JSON.stringify(updated));
                return updated;
            });
        }
    }, [nodeId]);

    // ===== 세이브 슬롯 로드 =====
    const loadSlots = () => {
        const slots = [1, 2, 3].map((i) => {
            const raw = localStorage.getItem(`vn_save_slot_${i}`);
            return raw ? JSON.parse(raw) : null;
        });
        setSaveSlots(slots);
    };
    useEffect(() => loadSlots(), []);

    // ===== 세이브/로드/오토로드 =====
    const saveGame = (slot) => {
        const data = { nodeId, affinity, timestamp: new Date().toLocaleString() };
        localStorage.setItem(`vn_save_slot_${slot}`, JSON.stringify(data));
        loadSlots();
    };

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

    // ===== 타이핑 효과 =====
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

    // ===== 선택지 처리 =====
    const handleChoice = (choice) => {
        if (choice.effect) {
            setAffinity((prev) => ({
                teto: prev.teto + (choice.effect.teto || 0),
                miku: prev.miku + (choice.effect.miku || 0),
            }));
        }
        setNodeId(choice.next);
    };

    // ===== 렌더링 =====
    return (
        <div className="vn-wrapper" style={{ background: node?.bg }}>
            {/* 캐릭터 초상화 */}
            <div className="vn-portraits">
                {node.portraits?.left && (
                    <img
                        src={node.portraits.left === "miku" ? Miku : Teto}
                        className={`vn-portrait left ${node.portraits.active === node.portraits.left ? "active" : ""}`}
                        alt="left character"
                    />
                )}
                {node.portraits?.right && (
                    <img
                        src={node.portraits.right === "miku" ? Miku : Teto}
                        className={`vn-portrait right ${node.portraits.active === node.portraits.right ? "active" : ""}`}
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

                    {/* 엔딩 화면에서: 진엔딩 버튼 노출(테토/미쿠 둘 다 해금 시) */}
                    {node?.end && (
                        <>
                            <button onClick={() => setNodeId("start")}>다시 시작</button>
                            {gallery.teto && gallery.miku && (
                                <button onClick={() => setNodeId("duet_intro")}>진엔딩: 공명으로</button>
                            )}
                        </>
                    )}
                </div>

                <div className="vn-affinity">❤️ 테토: {affinity.teto} / 💙 미쿠: {affinity.miku}</div>
            </div>

            {/* 세이브/로드 메뉴 */}
            {showMenu && (
                <div className="vn-menu-window">
                    <h3>💾 세이브 / 로드</h3>
                    {[1, 2, 3].map((slot) => (
                        <div key={slot} className="vn-slot">
                            <span>
                                슬롯 {slot}
                                <br />
                                <small style={{ opacity: 0.7 }}>
                                    {saveSlots[slot - 1]?.timestamp || "빈 슬롯"}
                                </small>
                            </span>
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
                            {gallery.teto ? "테토 엔딩 해금됨" : "🔒 테토 엔딩 잠금"}
                        </div>
                        <div className={`vn-gallery-item ${gallery.miku ? "unlocked" : ""}`}>
                            {gallery.miku ? "미쿠 엔딩 해금됨" : "🔒 미쿠 엔딩 잠금"}
                        </div>
                        <div className={`vn-gallery-item ${gallery.duet ? "unlocked" : ""}`}>
                            {gallery.duet ? "진엔딩: 공명 해금됨" : "🔒 진엔딩(공명) 잠금 — 둘 다 클리어"}
                        </div>
                    </div>
                    <button onClick={() => setShowGallery(false)}>닫기</button>
                </div>
            )}
        </div>
    );
}