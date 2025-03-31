import React, { use, useRef } from 'react'
 import './quiz.css'
 import { useState , useEffect} from 'react'
//  import {data} from '../../assets/data'
 import axios from 'axios'
 import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

 let random_indexs = [];
while (random_indexs.length < 10) {
  let r = Math.floor(Math.random() * 100);
  if (random_indexs.indexOf(r) === -1) random_indexs.push(r);
}

export const Quiz = () => {
  
  useGSAP(() => {
    const timeline = gsap.timeline({defaults: {duration: 10}});
    timeline.from('.container', {duration: 3,delay:0.5, opacity: 0, y: -50,scale:0.8});
    timeline.from('.question', {duration: 2, opacity: 0, y: -50});
    timeline.from('.options', {duration: 2, opacity: 0, y: -50, stagger: 0.2});
  })
  
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(null);
  let [lock, setLock] = useState(false);
  let [score , setScore] = useState(0);
  let [result , setResult] = useState(false);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1,option2,option3,option4];
  const [users, setUsers] = useState([]);
    useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(import.meta.env.VITE_EXPRESS_URL + '/quiz');
        setUsers(response.data);
      } catch (error) {
        console.error('There was an error fetching the users!', error);
      }
    };
  
    fetchData();
  }, []); 
  

  useEffect(() => {
    if (users.length > 0) {
      setQuestion(users[random_indexs[0]]);  
    }
  }, [users]);  
  


  if (!question) {
    return <div div className="container">Loading...</div>;  
  }
  var data = users;

 for(let i = 0; i < data.length; i++) {
    console.log(data[i].question);
  }
 console.log(random_indexs);
 for(let i = 0; i < random_indexs.length; i++) {
    console.log(data[random_indexs[i]].question);
  }
  const checkAnswer = (e,option) => {
    if(!lock){
      if(option === question.answer){
        e.target.classList.add('correct');
        setScore(prev=>prev+1);
      }else{
        e.target.classList.add('wrong');
      }
      setLock(true);
        option_array[question.options.indexOf(question.answer)].current.classList.add('correct');
  }
}
 let nextQuestion = () => {
   if(lock === true){
    if(index === 9){
      setResult(true);
      return null;
    }
     if(index < 9){
       setIndex(index+1);
       setQuestion(data[random_indexs[index+1]]);
       setLock(false);
        option_array.map((option) => {
          option.current.classList.remove('correct');
          option.current.classList.remove('wrong');
          return null;
        })
 }
}
 }
 let reset = () => {
    window.location.reload(true);
 }
 
  return (
    <div className='container'>
       <h1>Quiz App</h1>
       <hr />
       {result?<><h1>You Scored : {score}</h1>
       <button type="reset" className='btn'onClick={reset}>reset</button>
       </>:<><h2 className='question'>{index+1} . {
question.question}</h2>
       <ul>
        <li className='options' ref={option1} onClick={(e)=>{checkAnswer(e,question.options[0])}}>{question.options[0]}</li>
        <li className='options' ref={option2} onClick={(e)=>{checkAnswer(e,question.options[1])}}>{question.options[1]}</li>
        <li className='options' ref={option3} onClick={(e)=>{checkAnswer(e,question.options[2])}}>{question.options[2]}</li>
        <li  className='options' ref={option4}  onClick={(e)=>{checkAnswer(e,question.options[3])}}>{question.options[3]}</li>
       </ul>
       <input type="button" value="next" className='btn' onClick={nextQuestion}/>
       <div className="index">{index+1} of 10 Questions</div>
       <h2>Total Questions : {data.length}</h2></>}
    </div>
  )
}

export default Quiz