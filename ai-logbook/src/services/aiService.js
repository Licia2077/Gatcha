// 추후 OpenAI API 붙일 자리
export async function analyzeText(text) {
    // 예시: 태그 자동 생성
    return {
        summary: text.slice(0, 30) + "...",
        tags: ["#AI", "#분석"],
        sentiment: "긍정",
    };
}