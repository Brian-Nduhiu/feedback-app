import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//
//Previous way of rendering the DOM
//

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root'));