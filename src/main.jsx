import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))
const browser =
    <h4> Browser's detail: {navigator.userAgent} </h4>
root.render(browser)