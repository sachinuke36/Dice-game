import styled from "styled-components";

const StartGame = ({toggle}:{toggle:boolean}) => {

  return (
    <div>
     <Container>
       <div><img src="./images/dices 1.png" alt="dice-image" /></div> 
        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
     </Container>
    </div>
  )
}

export default StartGame;

const Container = styled.div`
max-width:1180px;
display:flex;
margin:0 auto;
height:100vh;
align-items:center;
font-size:16px;

.content{
  h1{
    font-size:96px;
    white-space:nowrap;
  }
}`;



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



