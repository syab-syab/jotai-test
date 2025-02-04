// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Sub from './Sub'
import { atom, useAtom } from 'jotai'

export const countAtom = atom(0)

function App() {

  const [count, setCount] = useAtom(countAtom)

  return (
    <div>
      App
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>プラス</button>|
      <button onClick={() => setCount(count-1)}>マイナス</button>
      <Sub />
    </div>
  )
}

export default App
