import styled from "styled-components";
import { NumberBlock } from '@/components/NumberBlock';
import { useRecoilState } from 'recoil';
import { boardState } from "@/recoil/board";
import { getRandom, changeProcession } from "@/utils/math";

interface BoardProps {
    mode: string;
}

export const Board = (props: BoardProps) => {

    const { mode } = props;
    const [board, setBoard] = useRecoilState(boardState);

    const createBlock = (board: number[][], mode: string, row: number) => {
        if (mode === '4x4') {
            return (
                <>
                    {
                        board[row].map((value: number) => (
                            <NumberBlock num={value} />
                        ))
                    }
                </>
            )
        }
    }

    const createNumber = (currentBoard: number[][]) => {
        let tempBoard = currentBoard;
        let check = true;
        let count = 0;
        while (check && count !== tempBoard.length) {
            const x = getRandom(0, 4);
            const y = getRandom(0, 4);
            if (tempBoard[x][y] === 0) {
                tempBoard[x][y] = 2;
                setBoard(tempBoard);
                check = false;
            }
            count++;
        }
    }
    
    const moveNumber = (moveKey: string) => {
        let tempBoard = JSON.parse(JSON.stringify(board));
        if (moveKey === 'ArrowLeft') {
            for (let i = 0; i < 4; i++) {
                // ex) 0 64 32 0 => 64 32 0 0 / 0 2 0 2 => 2 2 0 0
                const currentBoardRow = JSON.parse(JSON.stringify(tempBoard[i]));

                for (let k = 0; k < 4; k++) {
                    if (tempBoard[i][k] !== 0) {
                        currentBoardRow.push(currentBoardRow[k])
                    }
                }
                currentBoardRow.splice(0, 4)
                while (currentBoardRow.length < 4) {
                    currentBoardRow.push(0)
                }

                tempBoard[i] = currentBoardRow;

                for (let j = 1; j < 4; j++) {
                    if (tempBoard[i][j] !== 0 && tempBoard[i][j] === tempBoard[i][j - 1]) {
                        // console.log('same ', i, j, i, j-1)
                        tempBoard[i][j - 1] = tempBoard[i][j] * 2;
                        tempBoard[i][j] = 0;
                    }
                }
            }
        } else if (moveKey === 'ArrowRight') {
            for (let i = 0; i < 4; i++) {
                // ex) 0 64 32 0 => 0 0 64 32 / 0 2 0 2 => 0 0 2 2
                const currentBoardRow = JSON.parse(JSON.stringify(tempBoard[i]));

                for (let k = 0; k < 4; k++) {
                    if (tempBoard[i][k] !== 0) {
                        currentBoardRow.push(currentBoardRow[k])
                    }
                }
                currentBoardRow.splice(0, 4)
                while (currentBoardRow.length < 4) {
                    currentBoardRow.unshift(0)
                }
                
                tempBoard[i] = currentBoardRow;

                for (let j = 2; j >= 0; j--) {
                    if (tempBoard[i][j] !== 0 && tempBoard[i][j] === tempBoard[i][j + 1]) {
                        // console.log('same ', i, j, i, j-1)
                        tempBoard[i][j + 1] = tempBoard[i][j] * 2;
                        tempBoard[i][j] = 0;
                    }
                }
            }
        } else if (moveKey === 'ArrowDown') {
            const tempChangeBoard = changeProcession(tempBoard);
            for (let i = 0; i < 4; i++) {
                // ex) 0 64 32 0 => 0 0 64 32 / 0 2 0 2 => 0 0 2 2
                const currentBoardRow = JSON.parse(JSON.stringify(tempChangeBoard[i]));

                for (let k = 0; k < 4; k++) {
                    if (tempChangeBoard[i][k] !== 0) {
                        currentBoardRow.push(currentBoardRow[k])
                    }
                }
                currentBoardRow.splice(0, 4)
                while (currentBoardRow.length < 4) {
                    currentBoardRow.unshift(0)
                }
                
                tempChangeBoard[i] = currentBoardRow;

                for (let j = 2; j >= 0; j--) {
                    if (tempChangeBoard[i][j] !== 0 && tempChangeBoard[i][j] === tempChangeBoard[i][j + 1]) {
                        // console.log('same ', i, j, i, j-1)
                        tempChangeBoard[i][j + 1] = tempChangeBoard[i][j] * 2;
                        tempChangeBoard[i][j] = 0;
                    }
                }
            }
            tempBoard = changeProcession(tempChangeBoard);
        } else if (moveKey === 'ArrowUp') {
            const tempChangeBoard = changeProcession(tempBoard);
            for (let i = 0; i < 4; i++) {
                // ex) 0 64 32 0 => 64 32 0 0 / 0 2 0 2 => 2 2 0 0
                const currentBoardRow = JSON.parse(JSON.stringify(tempChangeBoard[i]));

                for (let k = 0; k < 4; k++) {
                    if (tempChangeBoard[i][k] !== 0) {
                        currentBoardRow.push(currentBoardRow[k])
                    }
                }
                currentBoardRow.splice(0, 4)
                while (currentBoardRow.length < 4) {
                    currentBoardRow.push(0)
                }

                tempChangeBoard[i] = currentBoardRow;

                for (let j = 1; j < 4; j++) {
                    if (tempChangeBoard[i][j] !== 0 && tempChangeBoard[i][j] === tempChangeBoard[i][j - 1]) {
                        // console.log('same ', i, j, i, j-1)
                        tempChangeBoard[i][j - 1] = tempChangeBoard[i][j] * 2;
                        tempChangeBoard[i][j] = 0;
                    }
                }
            }
            tempBoard = changeProcession(tempChangeBoard);
        }

        // setBoard는 createNumber안에서 실행
        createNumber(tempBoard);
    }

    const keyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        // console.log('user press key = ', event.key)
        if (event.key === 'ArrowLeft') {
            moveNumber('ArrowLeft');
        } else if (event.key === 'ArrowRight') {
            moveNumber('ArrowRight')
        } else if (event.key === 'ArrowDown') {
            moveNumber('ArrowDown')
        } else if (event.key === 'ArrowUp') {
            moveNumber('ArrowUp')
        }
    }

    return (
        <Container tabIndex={0}  onKeyDown={(e) => keyPress(e)}>
            <Row>
                {createBlock(board, mode, 0)}
            </Row>
            <Row>
                {createBlock(board, mode, 1)}
            </Row>
            <Row>
                {createBlock(board, mode, 2)}
            </Row>
            <Row>
                {createBlock(board, mode, 3)}
            </Row>
        </Container>
    )
}

const Container = styled.div`
    width: 10rem;
    height: 10rem;

    border-radius: 5px;

    display: grid;
    gap: 2px;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    gap: 2px;
`;