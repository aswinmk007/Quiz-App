import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactConfetti from 'react-confetti';


function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

  const questions = [
		{
			questionText: 'What is the capital of United Kingdom?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: true },
				{ answerText: 'Paris', isCorrect: false  },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'What is the CEO of Google?',
			answerOptions: [
				{ answerText: 'Sundar Pichai', isCorrect: true },
				{ answerText: 'Andy Rubin', isCorrect: false },
				{ answerText: 'Matt Brittin', isCorrect: false },
				{ answerText: 'Eric Schmidt', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const handleAnswerbtnclick = (isCorrect)=>{
		if(isCorrect === true){
			// alert("answer is correct!!")
			// setBackground(isCorrect)
			setScore(score + 1)
		}
		const Nextquestion = currentQuestion + 1
		if(Nextquestion < questions.length){
			setCurrentQuestion(Nextquestion)

		}else{
			
				setShowScore(true)

			
		
		}
		
	}
	


  return (
    
    <>

    
      
    
   
     <div style={{width:'100%',height:'100vh',backgroundColor:'#9BE1ED'}} className='d-flex justify-content-center'>

   { showScore? (
	
	  <div className='p-5 rounded' style={{width:'600px',marginTop:'10rem'}}>
		<ReactConfetti tweenDuration={50}/>
	  	<div style={{backgroundColor:'#48047A'}} className='score p-5 rounded d-flex justify-content-center align-items-center flex-column'>
		  <i className="fa-solid fa-trophy fa-4x" style={{color:'#FFD43B'}}></i>
			<h3 className='text-light mt-3'>You scored {score} out of  {questions.length}</h3>
			<button className='btn btn-success mt-2'><Link style={{textDecoration:'none',color:'white'}} to={'/'}>Go Back</Link></button>
			</div>
	
	  </div>

   ): (
	<div style={{width:'600px',marginTop:'10rem'}} className='p-5 rounded'>
	<div style={{backgroundColor:'#48047A'}} className='d-flex  p-3  rounded shadow  text-light'>
	  <div className='quest d-flex flex-column'>
		<h2>Question {currentQuestion + 1}/{questions.length}</h2>

		<h5>{questions[currentQuestion].questionText}</h5>
	  </div>

	  {/* <div className='option d-flex flex-column ms-5'> */}
   <div  className='d-flex flex-column'>
	{questions[currentQuestion].answerOptions.map((answerOptions)=><button onClick={()=>handleAnswerbtnclick(answerOptions.isCorrect)} style={{width:'170px'}} className='btn btn-info mb-3 ms-5'>
		{answerOptions.answerText}
	</button>)}



		</div>
   {/* </div> */}
	</div>
  </div>
   )}  
     
     

    </div> 


    	
	
    </>
  )
}

export default Questions