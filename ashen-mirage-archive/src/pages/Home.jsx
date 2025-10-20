import React, { useEffect, useState } from "react";
import bg from "../assets/bg/void-bg.png";
import logo from "../assets/icons/ashen-logo.png";

export default function Home() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // 페이지 진입 후 페이드인 효과 시작
        const timer = setTimeout(() => setVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                textAlign: "center",
                overflow: "hidden",
                margin: 0,
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

            {/* 본문 */}
            <main
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: "900px",
                    padding: "80px 20px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0px)" : "translateY(40px)",
                    transition: "opacity 1.5s ease, transform 1.5s ease",
                }}
            >
                <img
                    src={logo}
                    alt="Ashen Mirage Logo"
                    style={{
                        width: "70px",
                        opacity: 0.9,
                        marginBottom: "30px",
                        animation: "pulseGlow 3s infinite ease-in-out",
                    }}
                />

                {/* 🔥 시그니처 타이틀 확대 */}
                <h1
                    style={{
                        fontSize: "2.4rem", // 크게 확대
                        color: "#B83232",
                        fontWeight: "800",
                        letterSpacing: "2px",
                        marginBottom: "12px",
                        textShadow: "0 0 12px rgba(184, 50, 50, 0.4)",
                        animation: "fadeIn 2.5s ease",
                    }}
                >
                    ASHEN MIRAGE ARCHIVE
                </h1>

                <p
                    style={{
                        fontSize: "1.4rem", // 부제도 키움
                        color: "#eee",
                        marginBottom: "50px",
                        fontWeight: "500",
                        letterSpacing: "1px",
                        animation: "fadeIn 3s ease",
                    }}
                >
                    애션 미라주
                </p>

                <hr
                    style={{
                        border: "none",
                        height: "1px",
                        background: "rgba(255,255,255,0.3)",
                        margin: "0 auto 30px",
                        width: "65%",
                    }}
                />

                {/* 🔥 본문 글씨 확대 */}
                <p
                    style={{
                        fontSize: "1.2rem",
                        color: "#ccc",
                        lineHeight: "2",
                        marginBottom: "50px",
                        animation: "fadeIn 3s ease",
                    }}
                >
                    “신은 사라졌지만, 신의 자리는 아직 비어 있다.”
                    <br />
                    <br />
                    <span style={{ color: "#fff" }}>『애션 미라주』</span>는 인류의 기억 데이터를 기반으로 복원된
                    잿빛 도시 <span style={{ color: "#888" }}>아르카시아</span>를 배경으로 한다.
                    <br />
                    인간이 잃은 감정을 되찾기 위해, 집단
                    <span style={{ color: "#B83232" }}> ‘황혼회’</span>는
                    신의 감각을 복원하려 했다.
                    <br />
                    그리고 그 중심에는 죽은 신의 심장을 품은 치료사,
                    <span style={{ color: "#fff" }}> 데이모스</span>가 있었다.
                    <br />
                    <br />
                    <span style={{ color: "#B83232" }}>
                        “공포는 병이다. 치료에는 절개가 필요하지.”
                    </span>
                    <br />
                    <br />
                    신 없는 세계를 치료하려는 그의 시도는,
                    결국 부활과 파멸을 동시에 불러왔다.
                    <br />
                    붉게 물든 도시 속, 종소리만이 남았다 —
                    세상의 마지막 맥박처럼.
                </p>

                {/* 버튼 두 개 — 세계관 / 이벤트 */}
                <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                    <a
                        href="/worldview"
                        style={{
                            display: "inline-block",
                            padding: "14px 32px",
                            backgroundColor: "#a52222",
                            color: "#fff",
                            borderRadius: "8px",
                            fontSize: "1.05rem",
                            textDecoration: "none",
                            fontWeight: "600",
                            boxShadow: "0 0 10px rgba(122,28,28,0.4)",
                            transition: "all 0.3s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.background = "#c73232")}
                        onMouseOut={(e) => (e.currentTarget.style.background = "#a52222")}
                    >
                        세계관 바로 가기 →
                    </a>
                </div>

                <p
                    style={{
                        marginTop: "80px",
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.4)",
                    }}
                >
                    © 2077 Ashen Mirage Archive
                </p>
            </main>

            {/* 애니메이션 keyframes */}
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulseGlow {
            0% { filter: drop-shadow(0 0 2px rgba(255,0,0,0.3)); }
            50% { filter: drop-shadow(0 0 10px rgba(255,0,0,0.6)); }
            100% { filter: drop-shadow(0 0 2px rgba(255,0,0,0.3)); }
          }
        `}
            </style>
        </div>
    );
}