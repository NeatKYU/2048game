import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Board } from '@/components/Board';
import { StartButton } from '@/components/StartButton';
import { Score } from '@/components/Score';
import { useRecoilState, useRecoilValue } from 'recoil';
import { boardState } from '@/recoil/board';
import { calculateScore } from '@/utils/math';
import { ThemeChangeButton } from '@/components/ThemeChangeButton';
import { ModeChangeButton } from '@/components/ModeChangeButton';

export const MainPage = () => {

    const board = useRecoilValue(boardState);
    const boardRef = useRef<HTMLDivElement>(null);

    const moveFocus = () => {
        boardRef.current?.focus();
    }

    return (
        <Container>
            <InterfaceGroup>
                <Score score={calculateScore(board)} />
                <StartButton title={'new Game'} setFocus={moveFocus} />
                <ThemeChangeButton />
                <ModeChangeButton />
            </InterfaceGroup>
            <Board customRef={boardRef}></Board>
            <div style={{ height: '10px'}}></div>
        </Container> 
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.mainBgColor};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;
`;

const InterfaceGroup = styled.div`
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`