import { themeState } from '@/recoil/theme';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
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
    /* justify-content: end; */
    align-items: center;

    border-radius: 20px;

    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-size: 1.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    cursor: pointer;
`;

const Ball = styled.div<{toggle: boolean}>`
    width: 1.5rem;
    height: 1.5rem;

    background-color: ${(props) => props.theme.textColor};

    transform: ${(props) => props.toggle ? 'translate(120%, 0)' : 'translate(0%, 0)'};
    transition: all 0.5s;

    border-radius: 50%;
`;