import { useState, useEffect } from 'react';
import MeetUpList from '../components/meetups/MeetUpList';

function AllMeetUps() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-getting-started-7707c-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                Object.keys(data).forEach((aKey) => {
                    meetups.push({ ...data[aKey], id: aKey });
                });
                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All MeetUps</h1>
            <MeetUpList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetUps;
