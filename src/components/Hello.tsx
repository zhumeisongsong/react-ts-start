import React, { Component } from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) => {
  return (
    <div className="hello">
      <div className="greeting">
      </div>
    </div>
  );
}

export default Hello;