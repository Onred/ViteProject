import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  const [hideNumber, toggleHideNumber] = useState(false);

  return (
    <>
    <h1 className={hideNumber ? 'hidden' : ''}>{count}</h1>

    <button type="button" onClick={() => setCount(count + 1)}>
      +1
    </button>

    <button type="button" onClick={() => setCount(count + 5)}>
      +5
    </button>

    <button type="button" onClick={() => setCount(0)}>
      Reset
    </button>

    <button type="button" onClick={() => toggleHideNumber(!hideNumber)}>
      {hideNumber ? 'Unhide' : 'Hide'}
    </button>
    </>
  )
}
