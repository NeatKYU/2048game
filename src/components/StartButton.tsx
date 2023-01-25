import { boardState, modeState } from '@/recoil/board';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getRandom } from '@/utils/math';
import { playBoard4, playBoard5, modeArr } from '@/assets/const';

interface StartButtonProps {
    setFocus: () => void;
    title: string;
}

export const StartButton = (props: StartButtonProps) => {
    const { setFocus, title } = props;
    const [board, setBoard] = useRecoilState(boardState);
    const mode = useRecoilValue(modeState);
    const boardSize = mode === modeArr[0] ? 4 : 5;

    const startGame = () => {
        const x = getRandom(0, boardSize);
        const y = getRandom(0, boardSize);
        let tempBoard = mode === modeArr[0] ? JSON.parse(JSON.stringify(playBoard4)) : JSON.parse(JSON.stringify(playBoard5));
        tempBoard[x][y] = 2;
    
        setBoard(tempBoard);
        setFocus();
    }

    return (
        <Container onClick={startGame}>
            {title}
        </Container>
    )
}

const Container = styled.div`
    width: 10rem;
    height: 3rem;
    border-radius: 5px;

    background-color: ${(props) => props.theme.bgColor};

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.2rem;
    color: black;

    cursor: pointer;
`;