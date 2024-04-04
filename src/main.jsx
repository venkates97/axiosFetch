import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApiMemberProvider } from './ContextAPI/ApiMemberProvide.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ApiMemberProvider>
<App />
</ApiMemberProvider>
</BrowserRouter>
)
