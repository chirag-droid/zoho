import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ZohoSurvey, ZohoSurveyProps, useSurvey } from '@zoho/survey'
import { useState } from 'react'

function App() {
  const { isOpen, toggleSurvey, openSurvey } = useSurvey()
  const [position, setPosition] = useState<ZohoSurveyProps['position']>()

  return (
    <>
      <ZohoSurvey id="HLC6Vg" height="600px" width="340px" position={position} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="flex">
          <button onClick={toggleSurvey}>
            {isOpen ? "Close" : "Open"} Survey
          </button>
          <button onClick={() => {
            openSurvey()
            setPosition("topRight")
          }}>
            Top Right
          </button>
          <button onClick={() => {
            openSurvey()
            setPosition("bottomLeft")
          }}>
            Bottom Left
          </button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
