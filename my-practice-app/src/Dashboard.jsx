import React, { useState } from "react";

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [pokemon, setPokemon] = useState(null);
    const [quote, setQuote] = useState("");
    const [weather, setWeather] = useState(null);
    const [tarotSpread, setTarotSpread] = useState([]);

    const fetchPokemon = async () => {
        const id = Math.floor(Math.random() * 151) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon({ name: data.name, img: data.sprites.front_default });
    };

    const fetchQuote = () => {
        const quotes = [
            "행동은 모든 성공의 기초이다.",
            "오늘은 두 번 다시 오지 않는다.",
            "작은 습관이 큰 변화를 만든다.",
            "도전 없는 성장은 없다.",
            "끝날 때까지는 끝난 게 아니다."
        ];
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    const fetchWeather = async () => {
        const apiKey = "YOUR_OPENWEATHER_API_KEY"; // ⚠️ 발급받은 키 입력
        const city = "Seoul";
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kr`
        );
        const data = await res.json();
        setWeather({
            city: data.name,
            temp: data.main.temp,
            desc: data.weather[0].description
        });
    };

    // 🎴 메이저 아르카나 (예시 일부)
    const tarotDeck = [
        { name: "0. 바보", upright: "새로운 시작, 자유, 모험", reversed: "무모함, 방황, 책임 회피", img: "https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg" },
        { name: "I. 마법사", upright: "의지, 창조, 가능성", reversed: "속임수, 자만, 실패", img: "https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg" },
        { name: "II. 여사제", upright: "직관, 지혜, 비밀", reversed: "억압, 무지, 혼란", img: "https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg" },
        { name: "III. 여황제", upright: "풍요, 모성, 안정", reversed: "과잉 간섭, 의존, 불안정", img: "https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg" },
        { name: "IV. 황제", upright: "권위, 질서, 책임", reversed: "폭정, 고집, 억압", img: "https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg" },
        { name: "V. 교황", upright: "전통, 신뢰, 조언", reversed: "독단, 위선, 거부", img: "https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg" },
        { name: "VI. 연인", upright: "사랑, 조화, 선택", reversed: "갈등, 불화, 잘못된 선택", img: "https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg" },
        { name: "VII. 전차", upright: "승리, 추진력, 정복", reversed: "패배, 우유부단, 방황", img: "https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg" },
        { name: "VIII. 힘", upright: "용기, 인내, 자기 통제", reversed: "약함, 불안, 충동", img: "https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg" },
        { name: "IX. 은둔자", upright: "고독, 성찰, 탐구", reversed: "고립, 고집, 방향 상실", img: "https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg" },
        { name: "X. 운명의 수레바퀴", upright: "변화, 기회, 행운", reversed: "불운, 저항, 지연", img: "https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg" },
        { name: "XI. 정의", upright: "균형, 진실, 공정", reversed: "불균형, 불공정, 거짓", img: "https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg" },
        { name: "XII. 매달린 자", upright: "희생, 새로운 관점", reversed: "무의미한 희생, 지체, 거부", img: "https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg" },
        { name: "XIII. 죽음", upright: "종말, 변화, 재생", reversed: "정체, 미련, 두려움", img: "https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg" },
        { name: "XIV. 절제", upright: "조화, 균형, 인내", reversed: "극단, 불균형, 무절제", img: "https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg" },
        { name: "XV. 악마", upright: "유혹, 속박, 집착", reversed: "해방, 거부, 단절", img: "https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg" },
        { name: "XVI. 탑", upright: "붕괴, 충격, 해방", reversed: "두려움, 저항, 불필요한 집착", img: "https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg" },
        { name: "XVII. 별", upright: "희망, 영감, 치유", reversed: "실망, 불신, 좌절", img: "https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg" },
        { name: "XVIII. 달", upright: "환상, 불안, 착각", reversed: "진실 발견, 두려움 극복", img: "https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg" },
        { name: "XIX. 태양", upright: "행복, 성공, 활력", reversed: "거짓된 행복, 좌절, 불확실", img: "https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg" },
        { name: "XX. 심판", upright: "부활, 용서, 자각", reversed: "부정, 회피, 지연", img: "https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg" },
        { name: "XXI. 세계", upright: "완성, 성취, 통합", reversed: "미완성, 지연, 방해", img: "https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg" }
    ];

    const drawTarotSpread = () => {
        const spread = ["과거", "현재", "미래"].map((pos) => {
            const card = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
            const isReversed = Math.random() < 0.5;
            return { ...card, isReversed, position: pos };
        });
        setTarotSpread(spread);
    };

    return (
        <>
            <button className="menu-btn" onClick={() => setOpen(true)}>☰</button>
            {open && (
                <div className="overlay">
                    <div className="popup">
                        <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
                        <h2>📊 대시보드</h2>

                        <div>
                            <h3>🎲 랜덤 포켓몬</h3>
                            <button onClick={fetchPokemon}>뽑기</button>
                            {pokemon && (
                                <div>
                                    <p>{pokemon.name}</p>
                                    <img src={pokemon.img} alt={pokemon.name} />
                                </div>
                            )}
                        </div>

                        <div>
                            <h3>☁ 날씨</h3>
                            <button onClick={fetchWeather}>확인</button>
                            {weather && (
                                <p>{weather.city} {weather.temp}°C, {weather.desc}</p>
                            )}
                        </div>

                        <div>
                            <h3>💡 오늘의 명언</h3>
                            <button onClick={fetchQuote}>새로고침</button>
                            <p>{quote}</p>
                        </div>

                        <div>
                            <h3>🔮 오늘의 타로 (3장 스프레드)</h3>
                            <button onClick={drawTarotSpread}>뽑기</button>
                            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                {tarotSpread.map((card, i) => (
                                    <div key={i} style={{ textAlign: "center", width: "30%" }}>
                                        <p><b>{card.position}</b></p>
                                        <p>{card.name}</p>
                                        <p>{card.isReversed ? card.reversed + " (역)" : card.upright}</p>
                                        <img
                                            src={card.img}
                                            alt={card.name}
                                            style={{
                                                width: "100%",
                                                borderRadius: "8px",
                                                transform: card.isReversed ? "rotate(180deg)" : "none",
                                                transition: "transform 0.3s ease"
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}