import React, { useState } from "react";
import bg from "../assets/bg/void-bg.png";

// 🖼️ 캐릭터 이미지
import RawnImg from "../assets/characters/Rawn.png";
import ZaneImg from "../assets/characters/Zane.png";
import LilienImg from "../assets/characters/Lilien.png";
import DeimosImg from "../assets/characters/Deimos.png";

export default function Characters() {
    const [active, setActive] = useState(null);

    const characters = [
        {
            id: 1,
            name: "라운",
            en: "Rawn",
            color: "#d4a373",
            image: RawnImg,
            desc: [
                "‘감각이 없다’는 병적 무감각에 시달리는 전투병.",
                "한때 인간이었으나, 미라주 시스템에 의식이 통째로 업로드되어 감정이 마비됨.",
                "전투 시, 자신이 다치고 있다는 사실조차 느끼지 못한다.",
                "무표정하지만, 내부엔 타인의 감정을 모방하려는 이상한 갈망이 있다.",
            ],
        },
        {
            id: 2,
            name: "제인",
            en: "Zane",
            color: "#b83232",
            image: ZaneImg,
            desc: [
                "‘감정을 숫자로 본다’는 인지 왜곡을 가진 분석자.",
                "모든 감정을 데이터로 계산해 통제하려 하지만, 자신만의 감정은 잃어버렸다.",
                "시스템 오류 구역 ‘CODE: L-77’의 잔재 실험체.",
                "냉철하지만 내면은 파편화된 기억으로 가득하다.",
            ],
        },
        {
            id: 3,
            name: "릴리엔",
            en: "Lilien",
            color: "#e5c07b",
            image: LilienImg,
            desc: [
                "‘이름이 없다’ — 정체성 자체가 미라주 시스템에서 누락된 존재.",
                "데이터상 ‘고스트 오브젝트(비인식 영역)’로 분류되어 감시당하지 않는다.",
                "자신이 실제로 존재하는가를 끊임없이 의심하며, 감정의 모조를 탐닉한다.",
            ],
        },
        {
            id: 4,
            name: "데이모스",
            en: "Deimos",
            color: "#a0a0a0",
            image: DeimosImg,
            desc: [
                "‘공포의 주파수’를 다루는 실험체이자 잔류 의식.",
                "환상도시의 심층부 ‘심해 구역’에서 감정의 파동을 증폭시킨다.",
                "두려움 그 자체로서 존재하지만, 동시에 가장 인간적인 감정을 탐한다.",
            ],
        },
    ];

    const toggleCharacter = (id) => {
        setActive(active === id ? null : id);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                color: "#ddd",
                fontFamily: "Pretendard, sans-serif",
                position: "relative",
                overflowX: "hidden",
            }}
        >
            {/* 어두운 오버레이 */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(3px)",
                }}
            />

            <main
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "100px 20px 60px 20px",
                    lineHeight: "1.8",
                }}
            >
                <h1
                    style={{
                        fontSize: "2rem",
                        color: "#B83232",
                        textAlign: "center",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        marginBottom: "40px",
                    }}
                >
                    애션 미라주 인물 기록
                </h1>

                {/* 캐릭터 목록 */}
                <div>
                    {characters.map((ch) => (
                        <div
                            key={ch.id}
                            style={{
                                backgroundColor:
                                    active === ch.id
                                        ? "rgba(40,40,40,0.8)"
                                        : "rgba(25,25,25,0.6)",
                                border: `1px solid ${active === ch.id ? ch.color : "rgba(255,255,255,0.1)"
                                    }`,
                                borderRadius: "12px",
                                padding: "18px 20px",
                                marginBottom: "16px",
                                boxShadow:
                                    active === ch.id
                                        ? `0 0 15px ${ch.color}55`
                                        : "0 0 8px rgba(0,0,0,0.4)",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                            }}
                            onClick={() => toggleCharacter(ch.id)}
                        >
                            {/* 이름 */}
                            <h2
                                style={{
                                    color: ch.color,
                                    fontSize: "1.2rem",
                                    fontWeight: "600",
                                    margin: "0 0 10px 0",
                                }}
                            >
                                {ch.name} <span style={{ color: "#aaa" }}>({ch.en})</span>
                            </h2>

                            {/* 토글 내용 */}
                            {active === ch.id && (
                                <div
                                    style={{
                                        marginTop: "10px",
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: "20px",
                                        flexWrap: "wrap",
                                        animation: "fadeIn 0.4s ease",
                                    }}
                                >
                                    {/* 이미지 */}
                                    <img
                                        src={ch.image}
                                        alt={ch.name}
                                        style={{
                                            width: "150px",
                                            height: "150px",
                                            objectFit: "contain",
                                            borderRadius: "8px",
                                            backgroundColor: "rgba(255,255,255,0.05)",
                                            border: `1px solid ${ch.color}33`,
                                        }}
                                    />

                                    {/* 설명 */}
                                    <div style={{ flex: 1, minWidth: "250px" }}>
                                        {ch.desc.map((line, idx) => (
                                            <p key={idx} style={{ margin: "4px 0", color: "#bbb" }}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 하단 버튼 */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px",
                        marginTop: "60px",
                        flexWrap: "wrap",
                    }}
                >
                    <a
                        href="/worldview"
                        style={{
                            display: "inline-block",
                            padding: "10px 22px",
                            backgroundColor: "#444",
                            color: "#fff",
                            borderRadius: "6px",
                            fontSize: "0.9rem",
                            textDecoration: "none",
                            boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                            transition: "background 0.3s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.background = "#666")}
                        onMouseOut={(e) => (e.currentTarget.style.background = "#444")}
                    >
                        ← 세계관으로 돌아가기
                    </a>

                    <a
                        href="/"
                        style={{
                            display: "inline-block",
                            padding: "10px 22px",
                            backgroundColor: "#a52222",
                            color: "#fff",
                            borderRadius: "6px",
                            fontSize: "0.9rem",
                            textDecoration: "none",
                            boxShadow: "0 0 10px rgba(122,28,28,0.4)",
                            transition: "background 0.3s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.background = "#c73232")}
                        onMouseOut={(e) => (e.currentTarget.style.background = "#a52222")}
                    >
                        🏠 홈으로
                    </a>
                </div>
            </main>
        </div>
    );
}