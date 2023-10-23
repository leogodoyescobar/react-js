// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import styles from "./app.module.css"
import { HookUseState } from './components/HookUseState/HookUseState'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'


export const App = () => {
  return (
    <>
    <div>
    {/* <h1 className={styles.Titulo2} >Bienvenido a Tales Petshop</h1> */}
    <h1 className={`${styles.Titulo} ${styles.FZT} `} >Tales Petshop</h1>
    <NavBar/>
    </div>
    <ItemListContainer greeting="Bienvenido a Tales Petshop"/>
    {/* <HookUseState/> */}
    </>
  )
}

