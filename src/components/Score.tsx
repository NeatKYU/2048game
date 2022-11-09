import styled from 'styled-components';

interface ScoreProps {
    score: number;
}

export const Score = (props: ScoreProps) => {
    const { score } = props;

    return (
        <Container>
            <div>{ score }</div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #fff;
    font-size: 2rem;
`

