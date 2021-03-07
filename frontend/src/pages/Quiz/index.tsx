import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import QuestionComponent from '../../components/Question';
import Result from '../../components/Result';

import axios from '../../connect/axios';

import "./index.css";


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

type typeGetQuiz = "TRUE" | "FALSE" | "FAIL";
type typeResult = undefined | "WIN" | "LOST";

function Quiz(){
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [getQuiz, setGetQuiz] = useState<typeGetQuiz>("FALSE");
    const [inGame, setInGame] = useState<boolean>(true);
    const [result, setResult] = useState<typeResult>(undefined);

    const history = useHistory();

    useEffect(()=>{//Puxar questões do back
        axios.get('/questions')
        .then((res)=>{
            if(res.data && res.data.length > 0){//Verificando se os dados foram puxados do back
                setQuestions(res.data);
                setGetQuiz("TRUE");
            }
            else setGetQuiz("FAIL");
        })
        .catch((err)=>{
            setGetQuiz("FAIL");
        });
    }, []);

    function handleRestart(){//Recomeçar
        history.push('/');
    }

    function handleSubmit(choice: number){//Ao sumbeter uma questão

        let question = questions[currentQuestion];

        if(question.correctOption === choice){//Acertou

            if(currentQuestion+1 === questions.length){//Vitória
                setInGame(false);
                setResult("WIN");
            }
            else{//Próxima questão
                setCurrentQuestion(currentQuestion+1);
            } 
        }
        else{//Derrota
            setInGame(false);
            setResult("LOST");
        }
    }

    return(
        <div className="quiz-content">
            <div className="internal-interface">
                {inGame && getQuiz === "FALSE" && <div className="loading"><h1>LOADING</h1></div>}
                {inGame && getQuiz === "TRUE" &&  <QuestionComponent count={[currentQuestion+1, questions.length]} question={questions[currentQuestion]} submit={handleSubmit} correctOption={questions[currentQuestion].correctOption}/>}
                {inGame && getQuiz === "FAIL" &&  <div className="fail"><h1>Ocorreu um erro! Por obséquio tente novamente</h1></div>}
                {!inGame && (
                    (result === "WIN") ?
                    <Result start={handleRestart} resultText="Congrulations!!"/>
                    :
                    <Result start={handleRestart} resultText="You fail :(" resultDescription="Tente novamente"/>
                )}
            </div>
            
        </div>

    )
}

export default Quiz;