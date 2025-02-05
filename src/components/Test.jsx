import React from 'react'
import { atom, useAtom } from 'jotai'

export const countTest = atom(0)

const Test = () => {
  const [count, setCount] = useAtom(countTest)
  return (
    <div>
      <p>Test</p>
      <p>Test Count = {count}</p>
      <button onClick={() => setCount(count+1)}>プラス</button>|
      <button onClick={() => setCount(count-1)}>マイナス</button>
    </div>
  )
}

export default Test