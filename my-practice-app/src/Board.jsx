import React, { useState } from "react";

export default function Board() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");

    const addPost = () => {
        if (input.trim() !== "") {
            setPosts([...posts, input]);
            setInput("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="글을 입력하세요"
            />
            <button onClick={addPost}>등록</button>
            <ul>
                {posts.map((p, idx) => (
                    <li key={idx}>{p}</li>
                ))}
            </ul>
        </div>
    );
}
