import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import Card from '../ui/Card';
import classes from './MeetUpItem.module.css';

function MeetUpItem(props) {
    const favoritesContext = useContext(FavoritesContext);
    const itemIsFavorite = favoritesContext.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(params) {
        if (itemIsFavorite) {
            favoritesContext.removeFavorite(props.id);
        } else {
            favoritesContext.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address,
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite
                            ? 'Remove from Favorites'
                            : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetUpItem;
