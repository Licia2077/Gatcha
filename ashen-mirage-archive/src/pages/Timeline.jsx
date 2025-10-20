import React from "react";

export default function Timeline() {
    const events = [
        {
            year: "2068",
            title: "미라주 시스템 가동",
            desc: "인류의 기억을 기반으로 한 가상 복원 프로젝트 시작. 인류 멸종 후에도 의식 데이터를 보존하기 위한 실험이 개시된다.",
        },
        {
            year: "2070",
            title: "제1차 붕괴",
            desc: "기억 데이터의 오류로 인해 일부 영역이 ‘공백화’됨. 첫 번째 사자(使者) 집단이 자각하며, 현실의 경계가 무너진다.",
        },
        {
            year: "2072",
            title: "혼돈 전파",
            desc: "리시아가 잔향의 검을 휘둘러 실험 구역을 해방시킴. 이 사건을 기점으로 혼돈 에너지가 시스템 전역에 확산된다.",
        },
        {
            year: "2073",
            title: "데이모스 각성",
            desc: "의례 실패로 봉인되었던 데이모스가 재활성화. 공포의 잔재가 ‘치유’를 목적으로 행동하기 시작한다.",
        },
        {
            year: "2075",
            title: "환상도시의 형성",
            desc: "붕괴된 데이터 구역들이 하나로 융합되어 ‘환상도시(幻城)’가 형성된다. 살아남은 자들은 이곳을 ‘가짜 낙원’이라 부른다.",
        },
        {
            year: "2077",
            title: "관측자의 귀환",
            desc: "‘비올라’가 잃어버린 기록을 복원하며 세계의 진실을 노트에 남김. 미라주 시스템의 마지막 루프가 시작된다.",
        },
    ];

    return (
        <div className="p-8 text-gray-200">
            <h1 className="text-4xl font-bold text-[#B83232] mb-6">붕괴 연표 (Timeline)</h1>
            <p className="text-gray-400 mb-8">
                『애션 미라주』 세계가 형성되기까지의 주요 사건들을 기록한 연대기.
                시간의 흐름은 직선이 아닌, 붕괴와 반복의 궤적 위에 존재한다.
            </p>

            <div className="border-l border-[#B83232] pl-6">
                {events.map((e) => (
                    <div key={e.year} className="mb-8 relative">
                        <div className="absolute -left-3 top-1 w-5 h-5 rounded-full bg-[#B83232]" />
                        <h2 className="text-xl font-semibold text-[#B83232] mb-1">
                            {e.year} — {e.title}
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed">{e.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}