import styled from 'styled-components';

interface NumberBlockProps {
    num: number;
}

export const NumberBlock = (props: NumberBlockProps) => {
    
    const { num } = props;

    return (
        <Container color='white'>
            {num === 0 ? '' : num}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: ${props => props.color};

    display: flex;
    justify-content: center;
    align-items: center;
`;