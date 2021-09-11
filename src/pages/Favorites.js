import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetUpList from '../components/meetups/MeetUpList';

function FavoritesPage() {
    const favoritesContext = useContext(FavoritesContext);

    let content;

    if (favoritesContext.totalFavorites === 0) {
        content = <p>No favorite meetup yet.</p>;
    } else {
        content = <MeetUpList meetups={favoritesContext.favorites} />;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;
