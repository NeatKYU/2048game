import Routes from './routes';
import GlobalStyle from './Globalstyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '@/assets/theme';
import { useRecoilValue } from 'recoil';
import { themeState } from './recoil/theme';

function App() {

  const isLightTheme = useRecoilValue(themeState);

  return (
    <div className="App">
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle/>
        <Routes/>
      </ThemeProvider>
    </div>
  )
}

export default App
