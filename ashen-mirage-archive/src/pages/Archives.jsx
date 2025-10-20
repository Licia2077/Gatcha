import React from "react";

export default function Archives() {
    const logs = [
        {
            id: "0321-A",
            title: "데이모스 재활성화",
            desc: "실험체 0321-A. '공포'를 기반으로 한 감정 자극 반응이 관찰됨. 의례 수행 중 생명 신호 이상 없음.",
            date: "2077.03.21",
        },
        {
            id: "0410-B",
            title: "리시아 각성",
            desc: "실험체 303번. 심장 정지 후 재가동. 잔향형 혼돈 반응이 발생하며, 에너지 파동이 급증함.",
            date: "2077.04.10",
        },
        {
            id: "0527-C",
            title: "미라주 시스템 오류 보고서",
            desc: "시스템 내부에서 '자각 개체' 다수 발생. 데이터 균열로 인해 가상 구역이 붕괴되는 현상 확인됨.",
            date: "2077.05.27",
        },
        {
            id: "0630-D",
            title: "사자(使者) 출현 기록",
            desc: "붕괴된 구역에서 독립 행동을 하는 존재들이 발견됨. 인간과 유사한 의지를 보이나, 기원 불명.",
            date: "2077.06.30",
        },
    ];

    return (
        <div className="p-8 text-gray-200">
            <h1 className="text-4xl font-bold text-[#B83232] mb-6">기록실 (Archives)</h1>
            <p className="text-gray-400 mb-8">
                『애션 미라주』 세계의 실험 로그, 관찰 기록, 붕괴 보고서를 보관하는 공간.
                모든 데이터는 “미라주 시스템”의 메모리에서 추출되었다.
            </p>

            <div className="grid gap-6">
                {logs.map((log) => (
                    <div
                        key={log.id}
                        className="border border-[#2b2b2b] rounded-lg bg-black bg-opacity-40 hover:border-[#B83232] transition p-5"
                    >
                        <h2 className="text-xl font-semibold text-[#B83232] mb-2">
                            {log.title}
                        </h2>
                        <p className="text-sm text-gray-400 mb-2">
                            {log.date} / 기록 코드: {log.id}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">{log.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}