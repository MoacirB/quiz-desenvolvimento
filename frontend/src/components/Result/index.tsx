import React from 'react';

import './index.css';

interface Props{
    start: (e:  React.MouseEvent<HTMLButtonElement>) => void;
    resultText: String;
    resultDescription?: String;
}

function Success(props: Props){
    return(
        <div id="result">
                <div className="message">
                    <h3>{props.resultText}</h3>
                    {props.resultDescription && <h4>{props.resultDescription}</h4>}
                </div>
                <button onClick={props.start}>Recomeçar</button>
        </div>
    )
}

export default Success;