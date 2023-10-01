import React from 'react';

const BaseLayout = ({ children }) => {

    return (
        <div>
            <body>
                <div className="navbar container">
                    {/* Logo Image */}
                    <img src="/logo.png" alt="Logo" className="navbar-logo" />
                    <h1> Navbar aquí </h1>
                </div>
                <main id="app">
                    {children}
                </main>
                {/* Bootstrap script and any other necessary scripts ... */}
            </body>
        </div>
    );
}

export default BaseLayout;
