import React from 'react';

const BaseLayout = ({ children }) => {
    const searchGoogle = (title) => {
        window.open(`https://www.google.com/search?q=${title}`, '_blank');
    };

    return (
        <div>
            <body>
                <div className="navbar container">
                    {/* ... Navbar content ... */}
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
