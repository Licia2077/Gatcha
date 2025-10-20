export default function MemoList({ memos, setMemos }) {
  const groupMemos = () => {
    const groups = { today: [], yesterday: [], week: [], older: [] };
    const now = new Date();
    const today = now.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);

    memos.forEach((m) => {
      const memoDate = new Date(m.date);
      if (isNaN(memoDate)) return;

      if (memoDate.toDateString() === today) {
        groups.today.push(m);
      } else if (memoDate.toDateString() === yesterday.toDateString()) {
        groups.yesterday.push(m);
      } else if ((now - memoDate) / (1000 * 60 * 60 * 24) <= 7) {
        groups.week.push(m);
      } else {
        groups.older.push(m);
      }
    });

    return groups;
  };

  const grouped = groupMemos();

  const handleDelete = (id) => {
    const updated = memos.filter((m) => m.id !== id);
    setMemos(updated);
    localStorage.setItem("memos", JSON.stringify(updated));
  };

  const renderMemo = (m) => (
    <div key={m.id} className="memo-item">
      <div>
        <p>{m.text}</p>
        <span className="text-xs text-gray-400">
          {new Date(m.date).toLocaleString()}
        </span>
        {m.tags?.length > 0 && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {m.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => handleDelete(m.id)}
        className="text-sm text-red-500 hover:underline ml-3"
      >
        삭제
      </button>
    </div>
  );

  return (
    <div className="space-y-6 text-left">
      {grouped.today.length > 0 && (
        <div>
          <h2 className="font-bold text-lg mb-2">오늘</h2>
          {grouped.today.map(renderMemo)}
        </div>
      )}
      {grouped.yesterday.length > 0 && (
        <div>
          <h2 className="font-bold text-lg mb-2">어제</h2>
          {grouped.yesterday.map(renderMemo)}
        </div>
      )}
      {grouped.week.length > 0 && (
        <div>
          <h2 className="font-bold text-lg mb-2">지난 주</h2>
          {grouped.week.map(renderMemo)}
        </div>
      )}
      {grouped.older.length > 0 && (
        <div>
          <h2 className="font-bold text-lg mb-2">그 이전</h2>
          {grouped.older.map(renderMemo)}
        </div>
      )}
      {memos.length === 0 && (
        <p className="text-gray-500">저장된 메모가 없습니다.</p>
      )}
    </div>
  );
}
