import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function CalendarView({ entries }) {
    const [value, setValue] = useState(new Date());

    // 날짜별 기록 존재 여부 체크
    const hasEntry = (date) => {
        const dateKey = date.toISOString().slice(0, 10);
        return entries.some((e) => e.date === dateKey);
    };

    return (
        <div className="card">
            <h2>📅 캘린더</h2>
            <Calendar
                value={value}
                onChange={setValue}
                tileClassName={({ date }) =>
                    hasEntry(date) ? "highlight-day" : ""
                }
            />
        </div>
    );
}
