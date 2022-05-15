import styled from "styled-components"

const CELL_SIZE = 15;

export const Grid = styled.div``

interface RowProps {
  size: number
}

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({ size }: RowProps) => CELL_SIZE * size}px;
`

interface CellProps {
  value: Boolean
}

export const Cell = styled.div`
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  background-color: ${({ value }: CellProps) => value ? '#000' : '#fff'}
`