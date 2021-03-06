import React, { useState, useEffect } from 'react';

import './index.css';

interface Option{
    id: number;
    text: string;
}

interface Question {
    id: number;
    text: string;
    correctOption: number;
    options: Option[];
}

interface QuestionComponentProps{
    question: Question;
    correctOption: number;
    submit: any;
    count: [number, number];
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({ question, count, submit, correctOption })=> {
    const [choice, setChoice] = useState<number | undefined>(undefined);
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
    const [correct, setCorrect] = useState<boolean>(false);

    useEffect( ()=>{
        setChoice(undefined);
        setIsSubmited(false);
        setCorrect(false);
    }, [question]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {//Reset para novas questões
        e.preventDefault();

        if(choice !== undefined){
            setIsSubmited(true);
            if(choice === correctOption){setCorrect(true);}
            else setCorrect(false);

            setTimeout( ()=>{
                submit(choice);
            }, 500);
        }
    }

    const handleClassName = function (id: number): string{//Controle para estilização das options
        if(id === choice){
            if(isSubmited){
                if(correct)return "option correct";
                else return "option incorrect";
            }
            return "option checked";
        }
        if(isSubmited && id === correctOption)return "option correct";
        return "option";
    }

    return (
        <div id="question">
            <h4 className='count'>{`${count[0]}/${count[1]}`}</h4>
            <form onSubmit={handleSubmit}>
                <div className="text">
                    <h2>{question.text}</h2>
                </div>
                {question.options.map((option) => (
                    <span key={`${question.id}${option.id}`}>
                        <label className="option" htmlFor={`option${option.id}`}>
                            <div className={handleClassName(option.id)}>
                                <p>{option.text}</p>
                            </div>
                        </label>
                        <input type="radio" onChange={() => setChoice(option.id)} name="option" id={`option${option.id}`} className="option-radio" checked={option.id === choice ? true : false}/>
                    </span>
                ))}
                <button type="submit" className="submit" disabled={isSubmited}>Confirmar</button>
            </form>
        </div>
    );
}

export default QuestionComponent;
