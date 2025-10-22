import React, { useState } from "react";
import InputPanel from "./components/InputPanel";
import Timeline from "./components/Timeline";
import CalendarView from "./components/CalendarView";

export default function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full space-y-10">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 tracking-tight drop-shadow-lg">
          🪞 AI 로그북
        </h1>
        <InputPanel onAdd={addEntry} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Timeline entries={entries} />
          <CalendarView entries={entries} />
        </div>
      </div>
    </div>
  );
}
