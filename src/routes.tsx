import { Route, Routes as Switch } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';

function Routes() {
    return (
        <Switch>
            <Route path={'/'} element={<MainPage/>} />
        </Switch>
    )
}

export default Routes;