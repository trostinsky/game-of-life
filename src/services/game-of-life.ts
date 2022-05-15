const getRandomBoolean = (): Boolean => {
    return (Math.floor(Math.random() * 100) % 2) === 0
}

export const generateRandomCells = (size: number): Array<Boolean>[] => {
    const cells = new Array(size)
    cells.fill(new Array(size))
    return cells.map((cell: Array<Boolean>) => {
        cell.fill(false)
        return cell.map(() => getRandomBoolean())
    })
}

const calcLiveNeighbours = (cells: Array<Boolean>[], rowIndex: number, cellIndex: number): number => {
    const neighbours: Array<Boolean | undefined> = [
        cells?.[rowIndex - 1]?.[cellIndex - 1],
        cells?.[rowIndex - 1]?.[cellIndex],
        cells?.[rowIndex - 1]?.[cellIndex + 1],
        cells?.[rowIndex]?.[cellIndex - 1],
        cells?.[rowIndex]?.[cellIndex + 1],
        cells?.[rowIndex + 1]?.[cellIndex - 1],
        cells?.[rowIndex + 1]?.[cellIndex],
        cells?.[rowIndex + 1]?.[cellIndex + 1],
    ]
    return neighbours.filter((value) => Boolean(value)).length
}

export const calculateNewCells = (cells: Array<Boolean>[]) => {
    return cells.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
            const liveNeighbours = calcLiveNeighbours(cells, rowIndex, cellIndex)
            if(cell && (liveNeighbours < 2 || liveNeighbours > 3)) {
                return false
            }
            if(cell && (liveNeighbours === 2 || liveNeighbours === 3)) {
                return true
            }
            if(!cell && liveNeighbours === 3) {
                return true
            }
            return cell
        })
    })
}
