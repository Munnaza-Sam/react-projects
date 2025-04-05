import React, { useRef, useState } from 'react'
import styles from './Quiz.module.css'
import { data } from '../../assets/data'
const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [lock, setLock] = useState(false);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);
    const question = data[index];

    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);
    let option_array = [option1, option2, option3, option4];

    const checkAnswer = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add(styles.correct);
                setScore(prev => prev + 1)
            } else {
                e.target.classList.add(styles.Wrong);
                option_array[question.ans - 1].current.classList.add(styles.correct);
            }
        }
        setLock(true);
    }
    const nextQuestion = () => {
        if (lock === true) {
            option_array.forEach(option => {
                option.current.classList.remove(styles.correct);
                option.current.classList.remove(styles.Wrong);
            });
            if (index < data.length - 1) {
                setIndex(prev => prev + 1);
                setLock(false);
                setResult(false);
            } else {
                setResult(true);
            }
        }
    }
    const resetQuiz = () => {
        setResult(false)
        setIndex(0);
        setScore(0);
        setLock(false);
    }
    return (
        <>
            <div className={styles.container}>
                <h1>Quiz App</h1>
                {result
                    ?
                    <>
                        <h2>You got {score} out of {data.length}</h2>
                        <button onClick={resetQuiz}>Reset</button>
                    </>
                    :
                    <>
                        <h2>{index + 1}. {question.question}</h2>
                        <ul>
                            <li ref={option1} onClick={(e) => checkAnswer(e, 1)}>{question.option1}</li>
                            <li ref={option2} onClick={(e) => checkAnswer(e, 2)}>{question.option2}</li>
                            <li ref={option3} onClick={(e) => checkAnswer(e, 3)}>{question.option3}</li>
                            <li ref={option4} onClick={(e) => checkAnswer(e, 4)}>{question.option4}</li>
                        </ul>
                        <button onClick={nextQuestion}>Next</button>
                        <div className={styles.index} >{index + 1} of {data.length} question </div>

                    </>
                }
            </div>
        </>
    )
}

export default Quiz