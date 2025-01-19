"use client";
import "./square.scss";

interface ISquare {
  value: string;
  onSquareClick: VoidFunction
}

export default function Square({ value, onSquareClick }: ISquare) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
