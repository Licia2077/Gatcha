import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const increments = [1, 5, 10, 15, 20];

    return (
        <div>
            <p>현재 값: {count}</p>
            <div>
                {increments.map((inc, idx) => (
                    <button key={idx} onClick={() => setCount(count + inc)}>
                        +{inc}
                    </button>
                ))}
            </div>
            <div>
                {increments.map((inc, idx) => (
                    <button key={idx} onClick={() => setCount(count - inc)}>
                        -{inc}
                    </button>
                ))}
            </div>
            <button className="danger" onClick={() => setCount(0)}>리셋</button>
        </div>
    );
}
