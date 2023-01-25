import { boardState, modeState } from '@/recoil/board';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { modeArr, playBoard4, playBoard5 } from '@/assets/const';

export const ModeChangeButton = () => {
    const [mode, setMode] = useRecoilState(modeState);
    const setBoard = useSetRecoilState(boardState);

    const changeMode = () => {
        setMode(mode === modeArr[0] ? modeArr[1] : modeArr[0]);
        setBoard(mode === modeArr[0] ? playBoard5 : playBoard4);
    }

    return (
        <Container onClick={changeMode}>
            <div>{mode === modeArr[0] ? '4x4' : '5x5'}</div>
        </Container>
    )
}

const Container = styled.div`
    width: auto;
    height: 2rem;
    border-radius: 5px;
    border: 1px solid black;
    padding: 0 10px 0 10px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`