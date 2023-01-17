import { boardState } from '@/recoil/board';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { getRandom } from '@/utils/math';

interface StartButtonProps {
    setFocus: () => void;
    title: string;
}

export const StartButton = (props: StartButtonProps) => {
    const { setFocus, title } = props;
    const [board, setBoard] = useRecoilState(boardState);

    const startGame = () => {
        const x = getRandom(0, 4);
        const y = getRandom(0, 4);
        let tempBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
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