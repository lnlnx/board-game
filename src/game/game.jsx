import { useEffect, useState } from 'react';
import './game.css';
import BoardList from './boardList';
function Game() {
  const [player, setPlayer] = useState("X");
  const [scoresForRow, setScoresForRow] = useState([0,0,0]);
  const [socreForColumn, setScoresForColumn] = useState([0,0,0]);
  const [crossScoreLeft, setCrossScoreLeft] = useState(0);
  const [crossScoreRight, setCrossScoreRight] = useState(0);
  const [winner, setWinner] = useState();
  const [gameRestarted, setGameRestarted] = useState(false);
  useEffect(()=>{
    scoresForRow.forEach((score)=>{
        if(score == 3) setWinner("X");
        if(score == -3) setWinner("O");
    })
    socreForColumn.forEach((score)=>{
        if(score == 3) setWinner("X");
        if(score == -3) setWinner("O");
    })
    if(crossScoreLeft == 3 || crossScoreRight == 3) {
        setWinner("X");
    }
    if(crossScoreLeft == -3 || crossScoreRight == -3) {
        setWinner("O");
    }
  }, [player]) 
  const handlePlayerSwitch = (newplayer, id) => {
    if(winner) return;
    if(gameRestarted) setGameRestarted(false);
    setPlayer(newplayer);
    const row = Math.floor(id/3);
    const col = id%3;
    const delta = player == "X"? 1: -1;
    setScoresForRow((scores) => {
        return scores.map((count, index)=>{
            if(index == row) {
                return count+delta;
            }else {
                return count;
            }
        })
    })
    setScoresForColumn((scores)=>{
        return scores.map((count, index)=>{
            if(index == col) {
                return count+delta;
            }else {
                return count;
            }
        })
    })
    if(row == col) {
        setCrossScoreLeft((score)=>{
            return score+delta;
        })
    }
    if(row + col == 2) {
        setCrossScoreRight((score)=> score+delta)
    } 
  }
  const handleReset = () =>{
    setScoresForRow((prev) => {
        return prev.map(()=>{
            return 0
        })
    });
    setScoresForColumn((prev)=>{
        return prev.map(()=>{
            return 0
        })
    });
    setCrossScoreLeft(0)
    setCrossScoreRight(0)
    setWinner();
    setGameRestarted(true);
  }
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      { winner ? <div className='winner'><p>Player {winner} wins</p><button onClick={handleReset}>Reset</button></div> :
        <div className='current'>Current Player: {player}</div>}
      <BoardList handlePlayerSwitch={handlePlayerSwitch} player={player} gameRestarted={gameRestarted}/>
    </div>
  );
}

export default Game;