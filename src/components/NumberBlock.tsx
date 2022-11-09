import styled from 'styled-components';
import { returnColor } from '@/utils/math';

interface NumberBlockProps {
    num: number;
}

export const NumberBlock = (props: NumberBlockProps) => {
    
    const { num } = props;

    return (
        <Container color='white'>
            <Num color={returnColor(num)}>
                {num === 0 ? '' : num}
            </Num>
        </Container>
    )
}

const Container = styled.div`
    width: 2.4rem;
    height: 2.4rem;
    padding: 3px;
    border-radius: 5px;
    background-color: ${props => props.color};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Num = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.color};
    font-size: 25px;
`;