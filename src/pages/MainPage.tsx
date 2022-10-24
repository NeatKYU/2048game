import styled from 'styled-components';
import { Board } from '@/components/Board';

export const MainPage = () => {

    return (
        <Container>
            <Board mode='4x4'></Board>
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
`;