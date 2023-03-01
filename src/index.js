import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';
import App from './App'
import createRoot from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'


// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root')); // this is new with react v18

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)