import React, { Component } from 'react';
import Navbar from '../components/Navbar.js';
import Jumbotron from '../components/Jumbotron.js';
import Footer from '../components/Footer.js';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Welcomen" subtitle="Home of the big bad squid!"/>   
                    <div className="container">
                    <h2>krakn</h2>
                    <p>
                        Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like you wanks. And that’s it you’re on your way to a fully Bootstrapped site. If you’re at all unsure about the general page structure, keep reading for an example page template. Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.</p>
                    <p>
                        And that’s it you’re on your way to a fully Bootstrapped site. If you’re at all unsure about the general page structure, keep reading for an example page template. Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors.</p>                    
                    </div>
                <Footer />               
            </div>
    );
}
}

export default Home;
