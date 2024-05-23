import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import './PostPage.css'
import './LoginStyle.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Mude para TheBlog */}
    <BrowserRouter basename="/">
    <App />
    </BrowserRouter >
  </React.StrictMode>,
)
