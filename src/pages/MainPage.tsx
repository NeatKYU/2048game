import { useRef } from 'react';
import styled from 'styled-components';
import { Board } from '@/components/Board';
import { StartButton } from '@/components/StartButton';
import { Score } from '@/components/Score';
import { useRecoilValue } from 'recoil';
import { boardState } from '@/recoil/board';
import { calculateScore } from '@/utils/math';
import { ThemeChangeButton } from '@/components/ThemeChangeButton';

export const MainPage = () => {

    const board = useRecoilValue(boardState);
    const boardRef = useRef<HTMLDivElement>(null);

    const moveFocus = () => {
        boardRef.current?.focus();
    }

    return (
        <Container>
            <Score score={calculateScore(board)} />
            <ThemeChangeButton />
            <Board customRef={boardRef} mode='4x4'></Board>
            <div style={{ height: '10px'}}></div>
            <StartButton setFocus={moveFocus} />
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