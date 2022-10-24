import styled from 'styled-components';

interface NumberBlockProps {
    num: number;
}

export const NumberBlock = (props: NumberBlockProps) => {
    
    const { num } = props;

    return (
        <Container color='red'>

        </Container>
    )
}

const Container = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 5px;
    background-color: ${props => props.color};
`;