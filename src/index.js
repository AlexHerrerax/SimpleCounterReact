import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getAllByAltText } from '@testing-library/dom';
import '@fortawesome/fontawesome-free/css/all.min.css';



let contador=0



setInterval( function () {
    let a=Math.floor(contador);
let b=Math.floor(contador/10);
let c=Math.floor(contador/100);
let d=Math.floor(contador/1000);
    contador++;
ReactDOM.render(
<App 
one={a}
two={b}
three={c}
four={d}
 />,document.getElementById('root'));

}, 1000); 

