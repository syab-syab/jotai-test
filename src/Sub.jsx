import React from 'react'
import { countAtom } from './App'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

const Sub = () => {
  const [count, setCount] = useAtom(countAtom)
  // const setCount = useSetAtom(countAtom)
  return (
    <div>
      Sub
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>プラス</button>|
      <button onClick={() => setCount(count-1)}>マイナス</button>
    </div>
  )
}

export default Sub