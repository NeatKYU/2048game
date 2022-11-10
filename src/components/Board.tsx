import styled from "styled-components";
import { NumberBlock } from '@/components/NumberBlock';
import { useRecoilState } from 'recoil';
import { boardState } from "@/recoil/board";
import { getRandom, upSideDownBoard } from "@/utils/math";
import { RefObject } from "react";

interface BoardProps {
    mode: string;
    customRef: RefObject<HTMLDivElement>;
}

export const Board = (props: BoardProps) => {

    const { mode, customRef } = props;
    const [board, setBoard] = useRecoilState(boardState);

    const createBlock = (board: number[][], mode: string, row: number) => {
        if (mode === '4x4') {
            return board[row].map((value: number) => (
                <NumberBlock num={value} />
            ))
        }
    }

    /**
     * 보드에 숫자가 생성 안된 곳에 랜덤하게 숫자를 생성해주는 함수
     * 1차 문제 : 2차원의 배열만큼 돌지 않아서 제대로 숫자가 생성되지 않았음
     * 2차 문제 : 배열의 길이 만큼 돌긴하는데 그동안에 똑같은 수가 
     * 반복해서 나오면 숫자 생성이 안될 수 있다는 문제점 존재
     * @param currentBoard 현재 보드 배열값 (2차원 배열)
     */
    const createNumber = (currentBoard: number[][]) => {
        let tempBoard = currentBoard;
        let check = true;
        let count = 0;
        const createList: string[] = [];
        // 1차 문제 해결 포인트
        const boardLength = tempBoard.length * tempBoard[0].length;
        while (check && count <= boardLength) {
            const x = getRandom(0, 4);
            const y = getRandom(0, 4);
            const pointStr = x + ',' + y;
            if (!createList.includes(pointStr)) {
                createList.push(pointStr)
                if (tempBoard[x][y] === 0) {
                    tempBoard[x][y] = 2;
                    setBoard(tempBoard);
                    check = false;
                }
                count++;
            }
            // 2차 문제 해결 포인트
            if (count >= boardLength) {
                check = false;
            }
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
                        tempBoard[i][j + 1] = tempBoard[i][j] * 2;
                        tempBoard[i][j] = 0;
                    }
                }
            }
        } else if (moveKey === 'ArrowDown') {
            const tempChangeBoard = upSideDownBoard(tempBoard);
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
                        tempChangeBoard[i][j + 1] = tempChangeBoard[i][j] * 2;
                        tempChangeBoard[i][j] = 0;
                    }
                }
            }
            tempBoard = upSideDownBoard(tempChangeBoard);
        } else if (moveKey === 'ArrowUp') {
            const tempChangeBoard = upSideDownBoard(tempBoard);
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
                        tempChangeBoard[i][j - 1] = tempChangeBoard[i][j] * 2;
                        tempChangeBoard[i][j] = 0;
                    }
                }
            }
            tempBoard = upSideDownBoard(tempChangeBoard);
        }

        // setBoard는 createNumber안에서 실행
        createNumber(tempBoard);
    }

    const keyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
            moveNumber('ArrowLeft');
            console.log('key down arrow left')
        } else if (event.key === 'ArrowRight') {
            moveNumber('ArrowRight')
            console.log('key down arrow right')
        } else if (event.key === 'ArrowDown') {
            moveNumber('ArrowDown')
            console.log('key down arrow down')
        } else if (event.key === 'ArrowUp') {
            moveNumber('ArrowUp')
            console.log('key down arrow up')
        }
    }

    return (
        <Container ref={customRef} tabIndex={0}  onKeyDown={(e) => keyPress(e)}>
            {createBlock(board, mode, 0)}
            {createBlock(board, mode, 1)}
            {createBlock(board, mode, 2)}
            {createBlock(board, mode, 3)}
        </Container>
    )
}

const Container = styled.div`
    width: 15rem;
    height: 15rem;
    padding: 1rem;

    border-radius: 5px;

    display: inline-flex;
    flex-wrap: wrap;
    gap: 2px;
    background-color: #b1db97;
    /* flex-direction: column; */
`;