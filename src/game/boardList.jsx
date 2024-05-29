import { useState } from 'react';
import './game.css';
import SingleBoard from './singleBoard';

function BoardList(props) {
  const [cells] = useState(9);
  const arrayOfBoard = Array(cells).fill();
  const {handlePlayerSwitch, player, gameRestarted} = props;
  return (
    <div className="board">
      {arrayOfBoard.map((item, index)=> {
        return <SingleBoard key={index} handlePlayerSwitch={handlePlayerSwitch} player={player} index={index} gameRestarted={gameRestarted}/>
      })

      }
    </div>
  );
}

export default BoardList;