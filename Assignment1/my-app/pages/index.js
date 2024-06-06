import { useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
    const [location, setLocation] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (location) {
            router.push({
                pathname: '/results',
                query: { location: location },
            });
        }
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
                <section className="search-section">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                    />
                    <button onClick={handleSearch} className="search-button">&#128269;</button>
                </section>
                <section className="map-section">
                    {/* Map can be embedded here */}
                </section>
            </main>
            <footer>
                <p>Contact Info | Social Media Links</p>
            </footer>
        </div>
    );
};

export default Home;
