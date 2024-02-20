
import './App.css'
import { TextField } from '@mui/material'

import {Button} from '@mui/material'
import { useState } from 'react'

function App() {
 //js code

 //states to store data from input fields
 const [principle,setPrinciple]=useState(0)
 const [rate,setRate]=useState(0)
 const [year,setYear]=useState(0)
 const [interest,setInterest]=useState(0)

 //for conditional rendering

 const [isPrinciple,setIsPrinciple]=useState(true)
 const[isRate,setIsRate]=useState(true)
 const[isYear,setIsYear]=useState(true)


 const Validate =(e)=>{
  //de-structure
  const {name,value}=e.target
  //fortesting purpose
   console.log(name);
  console.log(value);


  /* reg expr = /^[0-9]*$/
match()- check the pattern matchs the value and return array if the value matches  otherwise return null */

// console.log(value.match(/^[0-9]*$/));
/* !! = is used to convert into boolean */
if (!!value.match(/^[0-9]*$/)) {
  if(name==='Principle'){
    setPrinciple(value)
    setIsPrinciple(true)
  }
  else if(name==='rate'){
    setRate(value)
    setIsRate(true)
  }
  else{
    setYear(value)
    setIsYear(true)
  }
  
} else {
  if(name==='Principle'){
    setPrinciple(value)
    setIsPrinciple(false)
  }
  else if(name==='rate'){
    setRate(value)
    setIsRate(false)
  }
  else{
    setYear(value)
    setIsYear(false)
  }
  
}
 }

 const handleReset =()=>{
     setPrinciple(0)
     setRate(0)
     setYear(0)
     setIsPrinciple(true)
     setIsRate(true)
     setIsYear(true)
     setInterest(0)
     }

  const handleCalculate=(e)=>{
    e.preventDefault()
    setInterest((principle*rate*year)/100)
  }

  return (
    <>
      <div style={{height:'100vh'}} className='bg-dark d-flex justify-content-center align-items-center'>
        <div className='bg-light p-5 rounded' style={{width:'500px'}}>
         <h1 style={{textAlign:'center'}}>Simple Interest App</h1>
         <p style={{textAlign:'center'}}>Calculate your Simple Interest Easily</p>
         <div style={{height:'150px'}} className='bg-warning rounded mt-5 d-flex justify-content-center align-items-center flex-column'>
          <h1>₹{interest}</h1>
          <p>Total Simple Interest</p>
         </div>
         <form onSubmit={handleCalculate}>
          <div className="mb-3 mt-4">
          <TextField id="outlined-basic" name='Principle' value={principle || ""} onChange={(e)=>Validate(e)} label="₹ Principle amount" variant="outlined" className='w-100'/>
         { !isPrinciple &&
         <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" name='rate' value={rate || ""} onChange={(e)=>Validate(e)} label="Rate of Interest(p.a)%" variant="outlined" className='w-100' />
          { !isRate &&
          <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" name='year' value={year || ""} onChange={(e)=>Validate(e)} label="Year (Yr)" variant="outlined" className='w-100' />
          { !isYear &&
            <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className="mb-3 d-flex justify-content-between">
          <Button variant="contained" color='success' style={{height:'60px', width:'190px'}} disabled={isPrinciple && isRate && isYear?false:true} type='submit'>CALCULATE</Button>
          <Button onClick={handleReset} variant="outlined" style={{height:'60px', width:'190px'}}>RESET</Button>
          </div>
         </form>
        </div>
      </div>
    </>
  )
}

export default App
