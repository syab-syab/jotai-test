import React from 'react'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const localTest = atomWithStorage("localJotaiTest", false)

const Local = () => {
  const [darkMode, setDarkMode] = useAtom(localTest)

  return (
    <>
      <p>Welcome to {darkMode ? 'dark' : 'light'} mode!</p>
      <button onClick={() => setDarkMode(!darkMode)}>toggle theme</button>
    </>
  )
}

export default Local