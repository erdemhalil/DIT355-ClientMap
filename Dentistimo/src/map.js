import React from 'react'

export default function Map() {
    
    return (
        <div id="map-container">
            <div id="locations-panel">
                <div id="locations-panel-list">
                <header>
                    <h1 className="search-title">
                    <img src="https://fonts.gstatic.com/s/i/googlematerialicons/place/v15/24px.svg"/>
                    Enter your location to find the nearest Dentist
                    </h1>
                    <div className="search-input">
                    <input id="location-search-input" placeholder="Enter your address or zip code" />
                    <div id="search-overlay-search" className="search-input-overlay search">
                        <button id="location-search-button">
                        <img className="icon" src="https://fonts.gstatic.com/s/i/googlematerialicons/search/v11/24px.svg" alt="Search"/>
                        </button>
                    </div>
                    </div>
                </header>
                <div className="section-name" id="location-results-section-name">
                    All dentists
                </div>
                <div className="results">
                    <ul id="location-results-list"></ul>
                </div>
                </div>
                <div id="locations-panel-details"></div>
            </div>
            <div id="map"></div>
        </div>
    )
}

