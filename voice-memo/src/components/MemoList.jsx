// MemoList.jsx
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

export default function MemoList({ memos, setMemos }) {
    const groupMemos = () => {
        const groups = { today: [], yesterday: [], week: [], older: [] };
        memos.forEach((m) => {
            const d = dayjs(m.date);
            if (d.isToday()) groups.today.push(m);
            else if (d.isYesterday()) groups.yesterday.push(m);
            else if (d.isAfter(dayjs().subtract(7, "day"))) groups.week.push(m);
            else groups.older.push(m);
        });
        return groups;
    };

    const grouped = groupMemos();

    return (
        <div className="space-y-6">
            {Object.entries(grouped).map(([key, list]) =>
                list.length > 0 && (
                    <div key={key}>
                        <h2 className="font-bold text-lg mb-2">
                            {key === "today" && "오늘"}
                            {key === "yesterday" && "어제"}
                            {key === "week" && "지난 주"}
                            {key === "older" && "그 이전"}
                        </h2>
                        <div className="space-y-3">
                            {list.map((m) => (
                                <div key={m.id} className="memo-item">
                                    <div>
                                        <p>{m.text}</p>
                                        <span className="text-xs text-gray-400">{m.date}</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            const updated = memos.filter((x) => x.id !== m.id);
                                            setMemos(updated);
                                            localStorage.setItem("memos", JSON.stringify(updated));
                                        }}
                                        className="text-sm text-red-500 hover:underline ml-3"
                                    >
                                        삭제
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
