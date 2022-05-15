import React, { useEffect, useState } from 'react';
import { calculateNewCells, generateRandomCells } from '../../services/game-of-life';
import { Cell, Grid, Row } from './game.view';

interface GridProps {
  size: number,
  tickDelay: number
}

export const GameController = ({ size, tickDelay }: GridProps) => {
  const [cells, setCells] = useState<Array<Boolean>[]>(generateRandomCells(size))
  useEffect(() => {
    const tickerId = setInterval(() => {
      const newCells = calculateNewCells(cells)
      setCells(newCells)
    }, tickDelay)
    return () => clearInterval(tickerId)
  }, [cells, tickDelay])
  return (
    <Grid>
      {cells.map((row, rowIndex) => (
        <Row size={size} key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell value={cell} key={cellIndex} />
          ))}
        </Row>
      ))}
    </Grid>
  );
}

export default GameController;
