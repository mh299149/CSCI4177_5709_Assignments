import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Results = () => {
    const router = useRouter();
    const { location } = router.query;
    const [gyms, setGyms] = useState([]);

    useEffect(() => {
        if (location) {
            fetch('http://localhost:3001/api/gyms')
                .then((response) => response.json())
                .then((data) => setGyms(data))
                .catch((error) => console.error('Error fetching data:', error));
        }
    }, [location]);

    // Dummy image data, replace this with your actual data
    const imageMap = {
        'YMCA': '/images/gym1.png',
        'GoodLife Fitness': '/images/gym2.png',
    };

    return (
        <div className="container">
            <header>
                <div className="logo">Be Fit</div>
                <nav>
                    <a href="#">Find a Gym</a>
                    <a href="#">Share Stories</a>
                </nav>
                <div className="user-menu">
                    <button className="menu-icon">&#9776;</button>
                </div>
            </header>
            <main>
                <section className="results-section">
                    <div className="search-summary">
                        <span>Location: {location || 'Not specified'}</span>
                        <button className="filter-button">Filters</button>
                    </div>
                    <div className="results">
                        {gyms.map((gym) => (
                            <div
                                className="gym-card"
                                key={gym.id}
                                style={{ backgroundImage: `url(${imageMap[gym.name] || '/images/default.png'})` }}
                            >
                                <div className="gym-info">
                                    <h3>{gym.name}</h3>
                                    <p>{gym.price}</p>
                                    <p>{gym.amenities}</p>
                                    <p>{gym.address}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer>
                <p>Contact Info | Social Media Links</p>
            </footer>
        </div>
    );
};

export default Results;
