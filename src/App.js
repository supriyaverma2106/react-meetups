import { Route, Switch } from 'react-router-dom';

import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
    // Test Commit
    return (
        <Layout>
            <Switch>
                <Route path="/" exact={true}>
                    <AllMeetUpsPage />
                </Route>
                <Route path="/new-meetup">
                    <NewMeetUpPage />
                </Route>
                <Route path="/favorites">
                    <FavoritesPage />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
