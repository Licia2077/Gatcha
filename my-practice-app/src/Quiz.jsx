import React, { useState } from "react";
import "./Quiz.css";

export default function Quiz() {
    const questions = [
        {
            q: "포켓몬 피카츄의 타입은?",
            options: ["불꽃", "전기", "풀", "물"],
            answer: "전기"
        },
        {
            q: "React에서 상태 관리를 위해 사용하는 Hook은?",
            options: ["useData", "useState", "useClass", "useLoop"],
            answer: "useState"
        },
        {
            q: "마계학교 이루마군의 주인공 이름은?",
            options: ["아스모데우스", "데이모스", "스즈키 이루마", "클라라"],
            answer: "스즈키 이루마"
        },
        {
            q: "HTML에서 가장 큰 제목 태그는?",
            options: ["<h6>", "<h5>", "<h3>", "<h1>"],
            answer: "<h1>"
        },
        {
            q: "자바스크립트에서 배열의 길이를 구하는 속성은?",
            options: [".count", ".size", ".length", ".index"],
            answer: ".length"
        }
    ];

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (option) => {
        if (option === questions[current].answer) {
            setScore(score + 1);
        }
        const next = current + 1;
        if (next < questions.length) {
            setCurrent(next);
        } else {
            setFinished(true);
        }
    };

    return (
        <div className="quiz-container">
            <h2>🎮 퀴즈 게임</h2>

            {finished ? (
                <div className="quiz-result">
                    <p>퀴즈 완료!</p>
                    <h3>점수: {score} / {questions.length}</h3>
                    <button className="quiz-btn" onClick={() => {
                        setCurrent(0); setScore(0); setFinished(false);
                    }}>
                        다시 하기
                    </button>
                </div>
            ) : (
                <div className="quiz-card">
                    <p className="quiz-question">
                        문제 {current + 1}. {questions[current].q}
                    </p>
                    <div className="quiz-options">
                        {questions[current].options.map((opt, idx) => (
                            <button
                                key={idx}
                                className="quiz-btn"
                                onClick={() => handleAnswer(opt)}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                    <div className="quiz-progress">
                        <div
                            className="quiz-bar"
                            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                    <p>{current + 1} / {questions.length} 문제</p>
                </div>
            )}
        </div>
    );
}
