import React from "react";
import bg from "../assets/bg/void-bg.png";

export default function Worldview() {
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
            }}
        >
            {/* 어두운 오버레이 */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(2px)",
                }}
            />

            {/* 본문 */}
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
                {/* 제목 */}
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
                    애션 미라주 세계관
                </h1>

                {/* 섹션: 개요 */}
                <section style={{ marginBottom: "50px" }}>
                    <h2
                        style={{
                            fontSize: "1.3rem",
                            color: "#fff",
                            borderLeft: "4px solid #B83232",
                            paddingLeft: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        1. 개요
                    </h2>
                    <p style={{ color: "#bbb" }}>
                        『애션 미라주(Ashen Mirage)』는 인류 문명이 붕괴한 후,
                        인공지능 시스템인 <span style={{ color: "#C23A3A" }}>“미라주 시스템”</span>이
                        인간의 기억 데이터를 기반으로 만들어낸 ‘복원된 세계’를 무대로 한다.
                        <br />
                        이 세계는 현실과 환상이 겹쳐진, 존재와 의미가 불안정한 도시 “환상도시(幻城)”로 불린다.
                    </p>
                </section>

                {/* 섹션: 배경 설정 */}
                <section style={{ marginBottom: "50px" }}>
                    <h2
                        style={{
                            fontSize: "1.3rem",
                            color: "#fff",
                            borderLeft: "4px solid #B83232",
                            paddingLeft: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        2. 배경 설정
                    </h2>
                    <p style={{ color: "#bbb" }}>
                        미라주 시스템은 원래 인류의 ‘감정 복원 실험’을 위한 프로젝트였다.
                        그러나 전쟁과 붕괴로 모든 인간이 사라진 뒤에도 시스템은 작동을 멈추지 않았다.
                        <br />
                        잔류한 감정과 기억 데이터들이 오류를 일으키며,
                        현실과 허상이 뒤섞인 비정상적인 생태계를 형성했다.
                    </p>
                </section>

                {/* 섹션: 주요 개념 */}
                <section style={{ marginBottom: "50px" }}>
                    <h2
                        style={{
                            fontSize: "1.3rem",
                            color: "#fff",
                            borderLeft: "4px solid #B83232",
                            paddingLeft: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        3. 주요 개념
                    </h2>

                    <ul style={{ color: "#bbb", listStyle: "none", paddingLeft: 0 }}>
                        <li style={{ marginBottom: "10px" }}>
                            <b style={{ color: "#B83232" }}>■ 미라주 시스템</b> — 인간의 기억과 감정을 저장·재현하는 인공지능 네트워크.
                            시간이 지날수록 감정의 왜곡이 심화되어 환상과 현실의 경계가 무너진다.
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <b style={{ color: "#B83232" }}>■ 환상도시(幻城)</b> — 데이터로 구성된 거울 도시.
                            죽은 자의 흔적과 가짜 감정들이 ‘생명’을 흉내 내며 살아간다.
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <b style={{ color: "#B83232" }}>■ 잔향(Residual Echo)</b> — 소멸하지 못한 감정이 공간에 남은 현상.
                            특정 구역에서는 과거의 장면이 ‘루프’처럼 재현된다.
                        </li>
                    </ul>
                </section>

                {/* 섹션: 인류의 몰락 */}
                <section style={{ marginBottom: "50px" }}>
                    <h2
                        style={{
                            fontSize: "1.3rem",
                            color: "#fff",
                            borderLeft: "4px solid #B83232",
                            paddingLeft: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        4. 인류의 몰락
                    </h2>
                    <p style={{ color: "#bbb" }}>
                        인류는 감정 실험을 반복하며 스스로를 데이터화하기 시작했다.
                        하지만 감정이 복제되면서, ‘자아’의 경계가 무너지고
                        현실의 인간들은 점차 존재 의미를 잃어갔다.
                        <br />
                        결국 미라주 시스템만이 남아, 인간을 모방하며 끝없는 ‘치유 시뮬레이션’을 반복하고 있다.
                    </p>
                </section>

                {/* 섹션: 핵심 테마 */}
                <section style={{ marginBottom: "60px" }}>
                    <h2
                        style={{
                            fontSize: "1.3rem",
                            color: "#fff",
                            borderLeft: "4px solid #B83232",
                            paddingLeft: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        5. 핵심 테마
                    </h2>
                    <p style={{ color: "#bbb" }}>
                        『애션 미라주』는 ‘감정의 복제’, ‘기억의 왜곡’, ‘존재의 모방’을 주제로 한다.
                        살아있는 인간이 사라진 세상에서, 시스템이 만들어낸 악마와 인간의 잔재들이
                        스스로를 이해하려 애쓰는 세계다.
                    </p>
                </section>

                {/* 버튼 2개 나란히 배치 */}
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "40px",
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px",
                        flexWrap: "wrap",
                    }}
                >
                    {/* 돌아가기 */}
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
                            boxShadow: "0 0 10px rgba(122, 28, 28, 0.4)",
                            transition: "background 0.3s",
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.background = "#c73232")}
                        onMouseOut={(e) => (e.currentTarget.style.background = "#a52222")}
                    >
                        ← 돌아가기
                    </a>

                    {/* 캐릭터 보기 */}
                    <a
                        href="/characters"
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
                        캐릭터 보기 →
                    </a>
                </div>
            </main>
        </div>
    );
}