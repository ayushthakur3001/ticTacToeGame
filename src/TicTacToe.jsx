import React, { useState, useEffect } from 'react';
import TicTacToeSquare from './TicTacToeSquare';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = ["", "", "", "", "", "", "", "", ""];

const ToastX = () =>{
    return (
        <div className='toasted'>
        🔥🔥🔥🔥The Winner is X 🔥🔥🔥🔥
        </div>
    )
}

const Toast0 = () =>{
    return (
        <div className='toasted'>
        🔥🔥🔥🔥The Winner is 0 🔥🔥🔥🔥
        </div>
    )
}


const TicTacToe = () => {

    
    

    const [gameState, updateGameState] = useState(initialState);
    const [isXChance, updateIsXChance] = useState(false);
    const onSquareClicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = isXChance ? "X" : "0";
        
        updateIsXChance(!isXChance);
        updateGameState(strings);


    }
    useEffect(() =>{
        const winner = checkWinner();
        if(winner){

            updateGameState(initialState);
            if(winner == '0'){
                toast.success(<Toast0/>)
            }
            else if( winner == 'X'){
                toast.success(<ToastX/>)

            }
        
        }
        
  
    }, [gameState])

    const checkWinner = () =>{
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        
        return null;


    };



    return (
        <>
            <div className='app-header'>
                <div className='head-div'>
                <p className='heading-text'>Tic Tac Toe-React</p>
                </div>
                
                
                <div className='glow'>
                <div className='squares'>
                
                
                
                <div className='row jc-center'>
                    <TicTacToeSquare className='b-bottom-right' state={gameState[0]} onClick={() => onSquareClicked(0)} />
                    <TicTacToeSquare className='b-bottom-right' state={gameState[1]} onClick={() => onSquareClicked(1)} />
                    <TicTacToeSquare className='b-bottom' state={gameState[2]} onClick={() => onSquareClicked(2)} />
                </div>
                <div className='row jc-center'>
                    <TicTacToeSquare className='b-bottom-right' state={gameState[3]} onClick={() => onSquareClicked(3)} />
                    <TicTacToeSquare className='b-bottom-right' state={gameState[4]} onClick={() => onSquareClicked(4)} />
                    <TicTacToeSquare className='b-bottom' state={gameState[5]} onClick={() => onSquareClicked(5)} />
                </div>
                <div className='row jc-center'>
                    <TicTacToeSquare className='b-right' state={gameState[6]} onClick={() => onSquareClicked(6)} />
                    <TicTacToeSquare className='b-right' state={gameState[7]} onClick={() => onSquareClicked(7)} />
                    <TicTacToeSquare state={gameState[8]} onClick={() => onSquareClicked(8)} />
                </div>
                
                </div>
                </div>
                <div className="baseDiv">
                <button className='clear-button' onClick={() =>updateGameState(initialState)}>Clear Game</button>
                <p className='fc-aqua fw-600'>Ayush Thakur</p>
                </div>

                <ToastContainer />
                
                
                
            </div>
            
        </>
    )



};
export default TicTacToe;