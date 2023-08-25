// import { useState } from 'react'

// import './App.css'
import "./assets/styles/main.scss";
import { GlobalContextProvider } from "./context";
import { HomePage } from "./pages";

function App() {

  return (
    <GlobalContextProvider>
      <HomePage />
    </GlobalContextProvider>
  )
}

export default App
