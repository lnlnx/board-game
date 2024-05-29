import { useEffect, useState } from 'react';
import './game.css';

function SingleBoard(props) {
    const [currentMark, setCurrentMark] = useState("");
    const {handlePlayerSwitch, player, index, gameRestarted} = props;
    useEffect(()=>{
        if(gameRestarted) setCurrentMark("");

    }, [gameRestarted])
    const handleBoardClick =(e)=>{
        const id = e.target.id;
        const isClicked = currentMark==""? false : true;
        if(isClicked) return;
        if(player === "X") {
            setCurrentMark("X")
            handlePlayerSwitch("O", id);
        }else{
            setCurrentMark("O")
            handlePlayerSwitch("X", id)
        }
    }
    return (
        <div className="cell" id={index} onClick={handleBoardClick}>
            {currentMark}
        </div>
    );
}

export default SingleBoard;
