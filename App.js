import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return <div className="header">
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ychB0gzKUiciTunIPeII_aIoptW3k81YQpa0wryEFA&s" alt="logo" />
        </div>
        <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

const RestaurantCard = () => {
    return <div className="res-card">
        <img className='res-logo' src="https://static.toiimg.com/photo/51892394.cms" alt="" />
        <h3>Dominos</h3>
        <h4>North Indian, Asian</h4>
        <h4>4.5 stars</h4>
        <h4>38 minutes</h4>
    </div>
}

const Body = () => {
    return <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
    </div>
}

const App = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />)