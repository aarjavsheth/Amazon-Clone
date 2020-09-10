import React from 'react'

import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className="home__image" 
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2ZiZWZjOWMt/Y2ZiZWZjOWMt-NzU1NmZiNGIt-w1500._CB407889586_.jpg" 
                alt="prime banner"/> 

                <div className="home__row">
                    <Product
                        id='1234567890'
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={5}
                    />
                    
                    <Product
                        id='1234567800'
                        title="Cracking the Coding Interview: 189 Programming Questions and Solutions"
                        price={26.99}
                        image='data:image/webp;base64,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'
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id='1234567000'
                        title="Echo Dot (3rd Gen) - Smart speaker with clock and Alexa - Sandstone"
                        price={49.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81ilNbqaGWL._AC_SL1500_.jpg'
                        rating={5}
                    />
                    
                    <Product
                        id='1234500000'
                        title="Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band"
                        price={429.00}
                        image='https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg'
                        rating={5}
                    />
                    
                    <Product
                        id='1234000000'
                        title="Samsung Galaxy S20 5G Factory Unlocked New Android Cell Phone US Version | 128GB of Storage | Fingerprint ID and Facial Recognition | Long-Lasting Battery | Cosmic Gray"
                        price={849.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/61MXdL2jpOL._AC_SL1500_.jpg'
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id='1234567899'
                        title="Dell XPS 13 7390 13.3 inch 4K UHD InfinityEdge Touchscreen Laptop (Silver) 10th Gen Intel Core i7-10710U, 16GB RAM, 1TB SSD, Windows 10 Home Advance (XPS7390-7681SLV-PUS)"
                        price={1604.98}
                        image='https://images-na.ssl-images-amazon.com/images/I/81v6VrI9ZML._AC_SL1500_.jpg'
                        rating={5}
                    />

                    <Product
                        id='1234567099'
                        title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
                        price={2099.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg'
                        rating={5}
                    />

                    <Product
                        id='1234569999'
                        title="Dell AlienWare m15 R1 15.6'' FHD 144Hz Laptop, Intel Core i7, 16GB RAM, 512GB SSD, GeForce RTX 2070 8GB GDDR6 with Max-Q Design, Thunderbolt, HDMI, Windows 10 (RTX 2070)"
                        price={1694.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/515N0ILASGL._AC_SL1002_.jpg'
                        rating={5}
                    />

                    <Product
                        id='1234567889'
                        title="HP Pavilion x360 14-Inch 2-in-1 Convertible Laptop, Intel Core i5, 8 GB RAM, 512 GB SSD Storage, Intel UHD Graphics, Windows 10 Home, Amazon Alexa Voice Compatible (14-dh2011nr, Natural Silver)"
                        price={739.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/71y3XpSYYYL._AC_SL1500_.jpg'
                        rating={5}
                    />

                    <Product
                        id='1234567999'
                        title='"MSI GL65 Leopard 10SFK-062 15.6" FHD 144Hz 3ms Thin Bezel Gaming Laptop Intel Core i7-10750H RTX2070 16GB 512GB NVMe SSD Win 10'
                        price={1399.00}
                        image='https://images-na.ssl-images-amazon.com/images/I/81ftUqDdYFL._AC_SL1500_.jpg'
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
