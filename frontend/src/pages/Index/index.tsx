import React from 'react';
import { useHistory } from 'react-router-dom';

import ProgramingImg from '../../assets/webprograming.jpg';

import './index.css';



//Root Page
function Index(){
    let history =  useHistory();
    function start(){
        history.push('/quiz');
    }

    return (
        <div id='index-content'>
            <div className="description">
                <h1>Bem-vindo ao Quiz do desenvolvimento WEB</h1>
                <img src={ProgramingImg} alt="Programing"/>           
                <h4>Nesse quiz você testará seus conhecimentos de HTML, CSS e JavaScript</h4>
                <button onClick={start}>Iniciar</button>
            </div> 
        </div>
    )
}

export default Index;