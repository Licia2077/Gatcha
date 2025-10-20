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
                    backgroundColor: "rgba(0,0,0,0.75)",
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
                    lineHeight: "1.9",
                }}
            >
                {/* 제목 */}
                <h1
                    style={{
                        fontSize: "2.2rem",
                        color: "#B83232",
                        textAlign: "center",
                        fontWeight: "700",
                        letterSpacing: "1px",
                        marginBottom: "40px",
                    }}
                >
                    『애션 미라주 (Ashen Mirage)』
                </h1>
                {/* 1. 개요 */}
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
                        『애션 미라주(Ashen Mirage)』는 신이 사라진 뒤,<br/> 인간의 기억과 감정 데이터를 기반으로
                        복원된 거울 도시 <span style={{ color: "#C23A3A" }}>〈아르카시아〉</span>를 무대로 한다.
                        <br />
                        인간은 감정을 잃고, 세계는 신의 부재로 균열되었다.<br/>
                        잔존한 시스템과 신의 잔재들은 새로운 질서를 세우려 하지만,
                        그 과정에서 또다른 붕괴가 시작된다.
                    </p>
                </section>

                {/* 2. 세계 구조 */}
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
                        2. 세계 구조
                    </h2>
                    <p style={{ color: "#bbb" }}>
                        시대는 <span style={{ color: "#B83232" }}>신성왕조 붕괴 200년 후</span>.
                        <br />
                        마계·인계·영계가 교차하는 거대한 도시 국가
                        <span style={{ color: "#C23A3A" }}> 〈아르카시아〉</span>가 중심 무대다.
                        이곳은 신의 잔재가 남은 세계이자, 금빛 어둠의 시대.<br/>
                        인간은 신의 껍데기인 ‘<b>자관(職觀)</b>’을 이어받아 완전한 존재가 되려 하지만,
                        그 힘은 언제나 감정의 결손을 대가로 한다.
                    </p>
                </section>

                {/* 3. 자관 시스템 */}
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
                        3. 자관(職觀) 시스템
                    </h2>
                    <ul style={{ color: "#bbb", listStyle: "none", paddingLeft: 0 }}>
                        <li style={{ marginBottom: "10px" }}>
                            <b style={{ color: "#B83232" }}>■ 정의</b> — 영혼과의 계약으로 각자의 본질을 구현하는 관념적 능력.
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <b style={{ color: "#B83232" }}>■ 의식</b> — 기억 한 조각과 자신의 혈흔, 그리고 신의 이름이 새겨진 서판으로
                            개방된다.
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <b style={{ color: "#B83232" }}>■ 결손</b> — 힘을 쓸수록 감정·기억·감각이 하나씩 사라진다.
                        </li>
                        <li style={{ marginBottom: "10px" }}>
                            <b style={{ color: "#B83232" }}>■ 금기</b> — 각 자관에는 반드시 넘지 말아야 할 한계가 존재하며,
                            위반 시 관이 역류해 자신을 파괴한다.
                        </li>
                    </ul>
                </section>

                {/* 4. 황혼회 */}
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
                        4. 황혼회 (Twilight Assembly)
                    </h2>
                    <p style={{ color: "#bbb" }}>
                        “빛이 꺼질 때, 새로운 신이 깨어난다.”
                        <br />
                        금빛 왕조 붕괴 후, 신성의 후예를 자처한 자들이 만든 비밀결사.
                        목표는 신의 부재를 끝내고 <span style={{ color: "#B83232" }}>‘새로운 신’을 창조</span>하는 것.
                        <br />
                        그들의 연구는 인간의 감정을 관념화한 ‘자관’ 실험으로 이어졌다.
                    </p>
                </section>

                {/* 5. 사중의 관 — 시스템 중심 서술 */}
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
                        5. 사중의 관 (The Fourfold Vessel)
                    </h2>
                    <p style={{ color: "#bbb" }}>
                        ‘사중의 관(四重之觀)’은 네 개의 자관이 하나의 의식 체계로 결합된 형태로,
                        신의 감각을 복원하기 위한 <b>최종 결박 시스템</b>이다.
                        <br />
                        각 자관은 감정·감각·기억·꿈 중 하나를 잃은 존재로 이루어지며,
                        네 결손이 합쳐질 때 신의 완전한 자각이 복원된다고 전해진다.
                        <br />
                        <br />
                        이 결박체의 구성 인물들은
                        <a href="/characters" style={{ color: "#B83232", textDecoration: "underline" }}>
                            {' '}
                            [캐릭터 페이지]
                        </a>
                        에서 확인할 수 있다.
                    </p>
                </section>

                {/* 6. 핵심 테마 */}
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
                        6. 핵심 테마
                    </h2>
                    <p style={{ color: "#bbb" }}>
                        『애션 미라주』는 <b>감정의 결손</b>과 <b>존재의 복제</b>를 주제로 한다.
                        신이 없는 세상에서 인간은 스스로를 복제하며 신의 자리를 흉내 내고,
                        그 과정에서 세계는 점차 붉은 재로 물들어간다.
                        <br />
                        공포, 피, 기억, 이름, 그리고 꿈 — 그것들은 곧 ‘치유’의 재료이자,
                        신의 재탄생을 위한 의식이다.
                    </p>
                </section>

                {/* 버튼 */}
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