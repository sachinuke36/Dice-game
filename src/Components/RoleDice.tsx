import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }: { currentDice: number, roleDice: React.Dispatch<React.SetStateAction<number>> }) => {

  

 
  return (
    <DiceContainer>
       <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="1" />
       </div>
       <p>Click On Dice</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;
 p{
  font-size:24px;
 }
 .dice{
    cursor: pointer;
 }
`
