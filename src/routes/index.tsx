import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { About } from '../pages/About'

import { Header } from '../shared/components/Header'

interface Props {
  handleTheme(): void 
}

export const RouterApp: FC<Props> = ({ handleTheme }) => {
  return (
    <BrowserRouter>
      <Header handleTheme={ handleTheme } />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}