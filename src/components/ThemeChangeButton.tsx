import { themeState } from '@/recoil/theme';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

interface ThemeChangeButtonProps {
}

export const ThemeChangeButton = (props: ThemeChangeButtonProps) => {

    const [theme, setTheme] = useRecoilState(themeState);
    const [toggle, setToggle] = useState(false);
    
    const moveBall = () => {
        setToggle(!toggle)
    }

    const changeTheme = () => {
        setTheme(!theme);
        moveBall();
    }

    return (
        <Container onClick={changeTheme}>
            <Ball toggle={toggle}/>
        </Container>
    )
}


const Container = styled.div`
    width: 4rem;
    height: 2rem;
    padding: 0 5px;

    display: flex;
    /* justify-content: center; */
    align-items: center;

    border-radius: 20px;

    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-size: 1.5rem;

    cursor: pointer;
`;

const Ball = styled.div<{toggle: boolean}>`
    width: 1.7rem;
    height: 1.7rem;

    background-color: white;

    transform: ${(props) => props.toggle ? 'translate(100%, 0)' : 'translate(0%, 0)'};
    transition: all 0.5s;

    border-radius: 50%;
`;