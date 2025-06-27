// Copyright 2021 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
import { DataProvider } from '@looker/components-data'
import { Query, Visualization } from '@looker/visualizations'
import { getCore40SDK } from '@looker/extension-sdk-react'

const center = {
  lat: 39.8283,
  lng: -98.5795,
}

const API_KEY = process.env.GOOGLE_MAPS_API_KEY

const locations = [
  { lat: 40.7128, lng: -74.006 }, // New York, NY
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles, CA
  { lat: 41.8781, lng: -87.6298 }, // Chicago, IL
  { lat: 29.7604, lng: -95.3698 }, // Houston, TX
  { lat: 33.4484, lng: -112.074 }, // Phoenix, AZ
  { lat: 39.9526, lng: -75.1652 }, // Philadelphia, PA
  { lat: 29.4241, lng: -98.4936 }, // San Antonio, TX
  { lat: 32.7157, lng: -117.1611 }, // San Diego, CA
  { lat: 32.7767, lng: -96.797 }, // Dallas, TX
  { lat: 39.7392, lng: -104.9903 }, // Denver, CO
]

export const GMap = () => {
  const coreSDK = getCore40SDK()

  return (
    <APIProvider apiKey={API_KEY}> {/* APIProvider wraps everything */}
      {/* This div acts as the main container for positioning */}
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        {/* The Map component fills the entire container */}
        <Map
          style={{ width: '100%', height: '100%' }}
          defaultCenter={center}
          defaultZoom={4}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          {/* Markers are children of the Map */}
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location}
            />
          ))}
        </Map>

        {/* This div is the overlay widget */}
        <div
          style={{
            position: 'absolute',
            top: '20px', // Distance from the top
            left: '20px', // Distance from the left
            width: '300px', // Width of the widget
            height: '150px', // Height of the widget
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Subtle shadow for depth
            zIndex: 10, // Ensure it's above the map
            display: 'flex', // Use flexbox for centering content if needed
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
            overflow: 'hidden' // Hide any overflow from the visualization
          }}
        >
          <DataProvider sdk={coreSDK}>
            <Query query="ViCIjWdbSQ8FO3IJPAAf6v" config={{ type: 'single_value' }}>
              <Visualization />
            </Query>
          </DataProvider>
        </div>
      </div>
    </APIProvider>
  )
}
