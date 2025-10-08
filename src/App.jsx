// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import SearchBar from './components/SearchBar'
// import SelectMenu from './components/SelectMenu'
// import CountriesList from './components/CountriesList'
import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router'
import ThemeProvider from './store/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App

//lifting the state up - if one state is available at parent component and gets managed by it and used by 2 or more child components then it is known as lifting the state up