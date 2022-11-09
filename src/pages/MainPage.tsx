import styled from 'styled-components';
import { Board } from '@/components/Board';
import { StartButton } from '@/components/StartButton';
import { Score } from '@/components/Score';
import { useRecoilValue } from 'recoil';
import { boardState } from '@/recoil/board';
import { calculateScore } from '@/utils/math';

export const MainPage = () => {

    const board = useRecoilValue(boardState);

    return (
        <Container>
            <Score score={calculateScore(board)}/>
            <Board mode='4x4'></Board>
            <div style={{ height: '10px'}}></div>
            <StartButton/>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: grey;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;
`;