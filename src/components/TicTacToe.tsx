"use client";
import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (squares: (string | null)[]) => {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (calculateWinner(board) || board[i]) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i: number) => (
    <Button
      key={i}
      className="w-24 h-24 text-4xl font-bold rounded-none border-1 border-gray-300"
      onClick={() => handleClick(i)}
    >
      {board[i]}
    </Button>
  );

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((square) => square)) {
    status = "Draw";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div>
      <Card className="w-full max-w-md">
        <CardHeader className="flex justify-center pb-0">
          <h1 className="text-2xl font-bold">Tic-Tac-Toe game</h1>
        </CardHeader>
        <CardBody>
          <p
            className={`text-center mb-4 text-2xl ${
              winner ? "text-yellow-300" : "text-white"
            }`}
          >
            {status}
          </p>
          <div className="grid grid-cols-3 gap-0 mb-4">
            {[...Array(9)].map((_, i) => renderSquare(i))}
          </div>
          <Button color="primary" onClick={resetGame} className="w-full mt-4">
            Reset Game
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
