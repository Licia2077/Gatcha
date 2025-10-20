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
            color: "#c23a3a",
            image: RawnImg,
            profile: {
                title: "암살자 (Assassin)",
                symbol: "엇갈린 쌍단검과 초승달 그림자",
                loss: "촉각 상실 — 체온, 통증, 바람을 느끼지 못함",
                weapon: "흑비(黑匕) — 피를 흡수하면 무게가 증가하는 쌍단도",
                age: "27세 추정 / 여성",
                desc: "냉정하고 감정 절제형. 하지만 살인과 죽음을 두려워하지 않는 이유는 단순히 '느낄 수 없기 때문'이다.",
                ability: [
                    "〈그림자 융합〉 — 자신의 그림자 속으로 이동하거나 물질화",
                    "〈심장 표식〉 — 심장 그림자에 표식을 남겨 원거리 급소 추적",
                    "〈무음 궤적〉 — 주변 공기 흐름을 정지시켜 소리를 완전히 제거",
                ],
                relation: [
                    "제인 — 피를 나눈 의형제이자 협공 파트너.",
                    "릴리엔 — 운명실로 감각 상실의 대가를 보완하는 동반자.",
                    "데이모스 — 감정 없는 리더로서 냉철한 판단의 파트너.",
                ],
                quote: "피도, 고통도, 온기도. 다 잃었는데… 아직 죽지 않았다는 게 웃기지?",
            },
        },
        {
            id: 2,
            name: "제인",
            en: "Zane",
            color: "#b83232",
            image: ZaneImg,
            profile: {
                title: "혈사자 (Blood Hunter)",
                symbol: "피의 룬이 새겨진 손바닥",
                loss: "후각 상실 / 피 1방울마다 기억 N초 상실",
                weapon: "흉정의 바늘 / 응혈병",
                age: "29세 / 남성",
                desc: "완벽주의자이자 연구광. 피의 흐름 속에서 세계의 순환 구조를 해석하려 한다.",
                ability: [
                    "〈혈계서약〉 — 피로 맹세한 대상의 능력을 일시적으로 복제",
                    "〈응혈 인장〉 — 피로 만든 룬문으로 공간 봉쇄 및 능력 억제",
                    "〈사냥 표식〉 — 피의 잔향으로 생체 신호 추적",
                ],
                relation: [
                    "라운 — 심장과 피로 이어진 동맹.",
                    "릴리엔 — 예언과 과학을 결합한 실험 파트너.",
                    "데이모스 — 죽은 자의 실험 불가로 자주 대립.",
                ],
                quote: "네 피가 말하겠지. 피들은 날 거부하지 못하거든.",
            },
        },
        {
            id: 3,
            name: "릴리엔",
            en: "Lilien",
            color: "#e5c07b",
            image: LilienImg,
            profile: {
                title: "마녀 (Witch)",
                symbol: "삼단 달과 운명실이 얽힌 문장",
                loss: "이름을 잃음 — 시간이 지나면 타인은 그녀의 존재를 잊음",
                weapon: "흑목 지팡이 / 운명추",
                age: "24세 / 여성",
                desc: "운명을 실로 짜는 예술가. 잊히는 운명조차 아름답다고 여긴다.",
                ability: [
                    "〈악운의 실〉 — 불운을 엮어 행운을 역전",
                    "〈달의 비의〉 — 달의 위상에 따라 능력 강화 (보름달 = 2배)",
                    "〈돌려막기〉 — 저주를 다른 대상에게 이전",
                ],
                relation: [
                    "라운 — 서로의 결손을 보완하는 존재.",
                    "제인 — 실험 파트너로, 예언과 피를 결합한 의식 수행.",
                    "데이모스 — 죽음과 운명의 경계를 함께 탐구.",
                ],
                quote: "잊히는 게 두렵지 않아. 다만 그 전에, 내 실로 네 길을 엮을 뿐이야.",
            },
        },
        {
            id: 4,
            name: "데이모스",
            en: "Deimos",
            color: "#999",
            image: DeimosImg,
            profile: {
                title: "사령술사 (Necromancer)",
                symbol: "불타는 해골 왕관",
                loss: "꿈을 꾸지 못함 — 수면 시 뇌파 정지 상태",
                weapon: "장송의 종 / 흑장",
                age: "외견상 20대 초반 / 성별 불명",
                desc: "논리적이며 감정이 봉인된 존재. 죽음의 완전한 통제를 목표로 한다.",
                ability: [
                    "〈영혼 지배〉 — 죽은 자의 영혼에 나비를 부여해 지배",
                    "〈귀환의 나비〉 — 죽기 직전의 기억을 되돌려 생환",
                    "〈장송의 불꽃〉 — 붉은 불꽃으로 망령 실체화",
                ],
                relation: [
                    "라운 — 감각을 되찾으려는 자를 ‘인간성의 잔재’로 판단.",
                    "제인 — 피보다 재가 더 순수하다고 말하며 견제.",
                    "릴리엔 — 죽음과 운명 연구의 조력자.",
                ],
                quote: "죽음은 공평하지 않지. 그렇기에 내가 대신 공평하게 만들어줄 뿐이야.",
            },
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
                    사중의 관 인물 기록
                </h1>

                {/* 캐릭터 카드 */}
                {characters.map((ch) => (
                    <div
                        key={ch.id}
                        style={{
                            backgroundColor:
                                active === ch.id
                                    ? "rgba(40,40,40,0.85)"
                                    : "rgba(25,25,25,0.6)",
                            border: `1px solid ${active === ch.id ? ch.color : "rgba(255,255,255,0.1)"}`,
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
                                <img
                                    src={ch.image}
                                    alt={ch.name}
                                    style={{
                                        width: "160px",
                                        height: "160px",
                                        objectFit: "contain",
                                        borderRadius: "10px",
                                        backgroundColor: "rgba(255,255,255,0.05)",
                                        border: `1px solid ${ch.color}33`,
                                    }}
                                />

                                <div style={{ flex: 1, minWidth: "250px" }}>
                                    <p style={{ color: "#bbb" }}>
                                        <b style={{ color: ch.color }}>자관:</b> {ch.profile.title}
                                        <br />
                                        <b style={{ color: ch.color }}>결손:</b> {ch.profile.loss}
                                        <br />
                                        <b style={{ color: ch.color }}>무기:</b> {ch.profile.weapon}
                                        <br />
                                        <b style={{ color: ch.color }}>연령/성별:</b>{" "}
                                        {ch.profile.age}
                                    </p>
                                    <p style={{ color: "#ccc", marginTop: "8px" }}>
                                        {ch.profile.desc}
                                    </p>

                                    <h4 style={{ color: ch.color, marginTop: "15px" }}>⚙️ 능력</h4>
                                    <ul style={{ color: "#bbb", marginTop: "-5px" }}>
                                        {ch.profile.ability.map((a, i) => (
                                            <li key={i}>{a}</li>
                                        ))}
                                    </ul>

                                    <h4 style={{ color: ch.color, marginTop: "15px" }}>🧩 관계</h4>
                                    <ul style={{ color: "#bbb", marginTop: "-5px" }}>
                                        {ch.profile.relation.map((r, i) => (
                                            <li key={i}>{r}</li>
                                        ))}
                                    </ul>

                                    <blockquote
                                        style={{
                                            marginTop: "20px",
                                            color: "#ccc",
                                            fontStyle: "italic",
                                            borderLeft: `3px solid ${ch.color}`,
                                            paddingLeft: "10px",
                                        }}
                                    >
                                        “{ch.profile.quote}”
                                    </blockquote>
                                </div>
                            </div>
                        )}
                    </div>
                ))}

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