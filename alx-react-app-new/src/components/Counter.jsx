import { useState } from 'react';

function Counter() {
  // 🟦 Number box starts at 0.
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>

      {/* 🟩 Adds 1 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* 🟥 Subtracts 1 */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {/* 🟨 Resets to 0 */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
