import { themeState } from '@/recoil/theme';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

interface ThemeChangeButtonProps {
    label: string;
}

export const ThemeChangeButton = (props: ThemeChangeButtonProps) => {

    const { label } = props;
    const [theme, setTheme] = useRecoilState(themeState);

    const changeTheme = () => {
        setTheme(!theme);
    }

    return (
        <Container onClick={changeTheme}>
            { label }
        </Container>
    )
}


const Container = styled.div`
    width: auto;
    min-width: 5rem;
    height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    font-size: 1.5rem;

    cursor: pointer;
`;