export const scenario = {
    title: "Ashen Mirage — 사중의 관",
    acts: [
        {
            id: 1,
            name: "프롤로그 — 금빛 어둠",
            narration: [
                "도시는 네온 불빛이 간신히 살아남은 폐허다.",
                "신의 자리는 공허하게 비어 있다.",
                "라운, 제인, 릴리엔, 데이모스. 네 자관자가 서 있다.",
                "그 순간, 제인의 꿈 속에 네 목소리가 번져 들어간다."
            ],
            options: [
                { text: "아무 말도 하지 않고 바라본다 (독자+1)", effect: { reader: +1 } },
                { text: "속삭임을 이어간다 (오류+1, 붕괴+1)", effect: { error: +1, collapse: +1 } }
            ]
        },
        {
            id: 2,
            name: "Ⅰ막 — 균열의 시작",
            narration: [
                "황혼회의 거울의 거리에 들어서자, 라운의 손끝이 떨린다.",
                "제인은 피 냄새를 맡지 못한다.",
                "거울에 비친 모습은 일그러져 네 시선을 따라 고개를 돌린다.",
                "NPC들이 속삭인다. '누군가… 우리를 보고 있다.'"
            ],
            options: [
                { text: "속삭임 전달 (오류+1, 붕괴+1)", effect: { error: +1, collapse: +1 } },
                { text: "불빛 깜빡이기 (오류+2, 붕괴+1)", effect: { error: +2, collapse: +1 } },
                { text: "기록만 한다 (독자+1)", effect: { reader: +1 } }
            ]
        },
        {
            id: 3,
            name: "흑해의 파편",
            narration: [
                "붉은 바다의 파편이 공기 중으로 흩어진다.",
                "검은 점액이 길 위를 기어오르고, 그림자 생물들이 튀어나온다.",
                "라운과 제인은 전투를 시작하지만 결손 때문에 정확하지 않다.",
                "네 개입이 없다면 그들은 무너질지도 모른다."
            ],
            options: [
                { text: "라운에게 속삭임 (오류+1)", effect: { error: +1 } },
                { text: "제인에게 길 안내 (오류+1, 붕괴+1)", effect: { error: +1, collapse: +1 } },
                { text: "개입하지 않는다 (독자+1)", effect: { reader: +1 } }
            ]
        },
        {
            id: 4,
            name: "Ⅱ막 — 자각의 그림자",
            narration: [
                "폐허 연구소 안, 릴리엔이 입술을 떨며 말한다.",
                "…내 이름이 기억나지 않아.",
                "그녀는 네 시선을 향해 묻는다.",
                "'당신이 나를 불러줄 수 있습니까?'"
            ],
            options: [
                { text: "릴리엔의 이름을 불러준다 (오류+3)", effect: { error: +3 } },
                { text: "침묵한다 (독자+2)", effect: { reader: +2 } }
            ]
        },
        {
            id: 5,
            name: "공명 실패",
            narration: [
                "사중의 관이 서로 얽히며 불안정한 빛을 토한다.",
                "공명은 실패했고, 흑해가 도시를 삼킨다.",
                "NPC들이 동시에 외친다. '지켜만 보지 말고, 말해라!'"
            ],
            options: [
                { text: "공명을 돕는다 (오류+2, 붕괴+1)", effect: { error: +2, collapse: +1 } },
                { text: "지켜본다 (독자+1)", effect: { reader: +1 } }
            ]
        },
        {
            id: 6,
            name: "Ⅱ막 후반 — 선택",
            narration: [
                "NPC들은 네게 다가와 묻는다.",
                "'너는 누구인가? 관찰자인가, 개입자인가?'"
            ],
            options: [
                { text: "관찰자라 말한다 (독자+2)", effect: { reader: +2 } },
                { text: "개입자라 말한다 (오류+2, 붕괴+1)", effect: { error: +2, collapse: +1 } }
            ]
        },
        {
            id: 7,
            name: "Ⅲ막 — 붕괴하는 왕좌",
            narration: [
                "붉은 바다가 들끓는다. 왕좌 점화 계획이 실행된다.",
                "데이모스는 꿈을 잃고, 망령을 불러내 적과 아군을 향해 던진다.",
                "NPC들이 절규한다. '관찰자여, 이제 네가 선택하라!'"
            ],
            options: [
                { text: "전투 개입 (오류+5, 붕괴+2)", effect: { error: +5, collapse: +2 } },
                { text: "환경 조율 (오류+3)", effect: { error: +3 } },
                { text: "관찰만 한다 (독자+2, 붕괴+1)", effect: { reader: +2, collapse: +1 } }
            ]
        },
        {
            id: 8,
            name: "Ⅳ막 — 사중의 결말",
            narration: [
                "사중의 관이 하나로 합쳐져 심연 속에서 눈동자가 떠오른다.",
                "그것은 네게 속삭인다.",
                "'신은 사라졌지만, 자리만은 남아 있다. 너는 그 자리를 차지하겠는가?'"
            ],
            options: [
                { text: "끝까지 관찰자 (독자 엔딩)", effect: { reader: +3 } },
                { text: "NPC와 함께 구원 (구원 엔딩)", effect: { error: +2 } },
                { text: "시스템 장악 (지배 엔딩)", effect: { error: +5, collapse: +2 } },
                { text: "흑해 융합 (오염 엔딩)", effect: { collapse: +10 } }
            ]
        }
    ]
};
