import styled from "styled-components";
import { NumberBlock } from '@/components/NumberBlock';

interface BoardProps {
    mode: string;
}

export const Board = (props: BoardProps) => {

    const { mode } = props;

    return (
        <Container>
            <Row>
                {createBlock(mode, 1)}
            </Row>
            <Row>
                {createBlock(mode, 2)}
            </Row>
            <Row>
                {createBlock(mode, 3)}
            </Row>
            <Row>
                {createBlock(mode, 4)}
            </Row>
        </Container>
    )
}

const createBlock = (mode: string, row: number) => {
    if (mode === '4x4') {
        return (
            <>
                <NumberBlock num={2} />
                <NumberBlock num={2} />
                <NumberBlock num={2} />
                <NumberBlock num={2} />
            </>
        )
    }
}

const Container = styled.div`
    width: 10rem;
    height: 10rem;

    border-radius: 5px;

    display: grid;
    grid-gap: 2px;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    gap: 2px;
`;