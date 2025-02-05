import Sub from './Sub'
import Test from './components/Test'
import { atom, useAtom } from 'jotai'
import { countTest } from './components/Test'
import Local from './components/Local'

export const countAtom = atom(0)

function App() {

  const [count, setCount] = useAtom(countAtom)
  const [count2, setCount2] = useAtom(countTest)

  return (
    <div>
      App
      <p>App Count = {count}</p>
      <button onClick={() => setCount(count+1)}>プラス</button>|
      <button onClick={() => setCount(count-1)}>マイナス</button>
      <p>From Test Count = {count2}</p>
      <button onClick={() => setCount2(count+1)}>プラス</button>|
      <button onClick={() => setCount2(count-1)}>マイナス</button>
      <Sub />
      <Test />
      <Local />
    </div>
  )
}

export default App
