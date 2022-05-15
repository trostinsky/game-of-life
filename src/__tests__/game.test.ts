import { calculateNewCells } from './../services/game-of-life';

test('Block', () => {
    const block = [
        [false, false, false, false],
        [false, true, true, false],
        [false, true, true, false],
        [false, false, false, false],
    ]
    const newCells = calculateNewCells(block)
    expect(newCells[0]).toEqual(block[0])
    expect(newCells[1]).toEqual(block[1])
    expect(newCells[1][1]).toBeTruthy()
    expect(newCells[1][2]).toBeTruthy()
    expect(newCells[2]).toEqual(block[2])
    expect(newCells[2][1]).toBeTruthy()
    expect(newCells[2][2]).toBeTruthy()
    expect(newCells[3]).toEqual(block[0])
});


test('Blinker', () => {
    const blinker = [
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, true, true, true, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
    ]
    const newCells = calculateNewCells(blinker)
    expect(newCells[0]).toEqual(blinker[0])
    expect(newCells[4]).toEqual(blinker[4])
    expect(newCells[1][2]).toBeTruthy()
    expect(newCells[2][2]).toBeTruthy()
    expect(newCells[3][2]).toBeTruthy()
});

test('Beacon', () => {
    const beacon = [
        [false, false, false, false, false, false],
        [false, true, true, false, false, false],
        [false, true, false, false, false, false],
        [false, false, false, false, true, false],
        [false, false, false, true, true, false],
        [false, false, false, false, false, false],
    ]
    const newCells = calculateNewCells(beacon)
    expect(newCells[0]).toEqual(beacon[0])
    expect(newCells[1]).toEqual(beacon[1])
    expect(newCells[4]).toEqual(beacon[4])
    expect(newCells[5]).toEqual(beacon[5])
    expect(newCells[2][2]).toBeTruthy()
    expect(newCells[3][3]).toBeTruthy()
});

test('Tub', () => {
    const tub = [
        [false, false, false, false, false],
        [false, false, true, false, false],
        [false, true, false, true, false],
        [false, false, true, false, false],
        [false, false, false, false, false],
    ]
    const newCells = calculateNewCells(tub)
    expect(newCells[0]).toEqual(tub[0])
    expect(newCells[1]).toEqual(tub[1])
    expect(newCells[2]).toEqual(tub[2])
    expect(newCells[3]).toEqual(tub[3])
    expect(newCells[4]).toEqual(tub[4])
    expect(newCells[1][2]).toBeTruthy()
    expect(newCells[2][1]).toBeTruthy()
    expect(newCells[2][3]).toBeTruthy()
    expect(newCells[3][2]).toBeTruthy()
})
