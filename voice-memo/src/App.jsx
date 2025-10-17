import { useState, useEffect } from "react";
import MemoList from "./components/MemoList";

export default function App() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [memos, setMemos] = useState([]);

  // 브라우저 음성인식
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.lang = "ko-KR";
  recognition.continuous = true;
  recognition.interimResults = true;

  useEffect(() => {
    recognition.onresult = (event) => {
      let text = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }
      setTranscript(text);
    };

    recognition.onend = () => {
      if (listening) recognition.start();
    };
  }, [listening]);

  const handleStart = () => {
    setListening(true);
    recognition.start();
  };

  const handleStop = () => {
    setListening(false);
    recognition.stop();
  };

  const handleSave = () => {
    if (!transcript.trim()) return;
    const newMemo = { id: Date.now(), text: transcript, date: new Date().toLocaleString() };
    const updated = [newMemo, ...memos];
    setMemos(updated);
    localStorage.setItem("memos", JSON.stringify(updated));
    setTranscript("");
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("memos") || "[]");
    setMemos(saved);
  }, []);

  return (
    <div className="card">
      <h1 className="text-3xl font-extrabold mb-6 text-purple-900">
        🎤 음성 → 텍스트 메모장
      </h1>

      <textarea
        className="w-full h-40 border border-gray-300 rounded-xl p-4 mb-4"
        value={transcript}
        readOnly
        placeholder="말하면 여기 텍스트가 나옵니다..."
      />

      <div className="flex justify-center gap-3 mb-6">
        {!listening ? (
          <button onClick={handleStart} className="btn btn-green">시작</button>
        ) : (
          <button onClick={handleStop} className="btn btn-red">중지</button>
        )}
        <button onClick={handleSave} className="btn btn-blue">저장</button>
      </div>

      <MemoList memos={memos} setMemos={setMemos} />
    </div>
  );
}
