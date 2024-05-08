import { useState } from "react"
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import Rules from "./Rules"

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState(0);
  const [currentDice,setCurrentDice]=useState(1);
  const [error, setError]=useState("");
  const [showRules,setShowRules]=useState(false);

  const generateRandomNumber =(min:number,max:number)=>{ 
    return Math.floor(Math.random()*(max-min)+min);
  }

  const roleDice = ()=>{

    if(!selectedNumber){

      setError("You have not selected any number")
      return;
    }
    // setError("");

    const randomNumber = generateRandomNumber(1,7);

    setCurrentDice((prev)=>randomNumber);


    if(selectedNumber===randomNumber){
      setScore((prev)=>prev + randomNumber);
    }else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
  }

  const resetScore=()=>{
    setScore(0);
  }


  return (
    <MainContainer>
     <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
         setError={setError}
         error={error}
         selectedNumber={selectedNumber} 
         setSelectedNumber={setSelectedNumber}/>
     </div>
     <RoleDice currentDice={currentDice} roleDice={roleDice} />
     <div className="btns">
      <OutlinedButton onClick={resetScore}>Reset</OutlinedButton>
      <Button
      onClick={()=>{
        setShowRules((prev)=>!prev);
      }}
      > {showRules ? "Hide":"Show"}Show Rules</Button>

    
     </div>
{ showRules &&  <Rules/>} 
  </MainContainer>
    
       
        
   
  )
}

export default GamePlay

const MainContainer = styled.main`
     padding-top:70px;
     
      .top_section{
        display:flex;
        justify-content:space-around;
        align-items:end;
    }
    .btns{
      margin-top:40px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      gap:10px;
    }
`


const Button = styled.button`
  padding:10px 18px;
  color:white;
  width:220px;
  height:44px;
  border:none;
  background:#000000;
  border-radius:5px;
  border:1px solid transparent;
  transition:0.4s background ease-in;
  cursor:pointer;


  &:hover{
    background-color:white;
    border:1px solid black;
    color:black;
    transition:0.3s background ease-in;
  }
`
const OutlinedButton = styled(Button)`
   background-color:white;
   color:black;
   border:1px solid black;


  &:hover{
    background-color:black;
    border:1px solid white;
    color:white;
    transition:0.3s background ease-in;
  }
`;
