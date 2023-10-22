// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import styles from "./app.module.css"
import { HookUseState } from './components/HookUseState/HookUseState'
import { NavBar } from './components/NavBar/NavBar'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

export const App = () => {
  return (
    <>
    <div className={`${styles.Border1 }`}>
    {/* <h1 className={styles.Titulo2} >Bienvenido a Tales Petshop</h1> */}
    <h1 className={`${styles.Titulo} ${styles.FZT}`} >Bienvenido a Tales Petshop</h1>
    <NavBar/>
    <HookUseState/>
    </div>
    {/* <div>
      <ul className={`${styles.lista} ${styles.FZC}`}>
        <li>test</li>
        <li>test</li>
      </ul>
    </div> */}
    </>
  )
}

