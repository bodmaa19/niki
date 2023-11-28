import React, { useState } from 'react';
import './Counter.css';
function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className="counter-container">
            <p data-testid="count" id={"count"}>{count}</p>
            <button
                data-testid="increment"
                id={"increment"}
                className="counter-button"
                onClick={increment}
            >
                Increment
            </button>
        </div>
    );
}

export default Counter;
