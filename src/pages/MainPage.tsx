import styled from 'styled-components';
import { NumberBlock } from '@/components/NumberBlock';

export const MainPage = () => {

    return (
        <div>
            <NumberBlock num={1} />
            <NumberBlock num={1} />
            <NumberBlock num={1} />
        </div>
    )
}

const Container = styled.div`
`;