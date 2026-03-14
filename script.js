// MAP //
const map = L.map('map').setView([42.103, -83.113], 15);

// Tile Layer (Leaflet 1.9.4)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


// Stores //
const storeData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { 
        "id": "store1",
        "name": "Richmond Popcorn Co.",
        "address": "67 Richmond St"
      },
      "geometry": { 
        "type": "Point",
        "coordinates": [-83.11163, 42.10363]
      }
    },
    {
      "type": "Feature",
      "properties": { 
        "id": "store2",
        "name": "Waterfront Ice Cream",
        "address": "229 Dalhousie St"
      },
      "geometry": { 
        "type": "Point",
        "coordinates": [-83.11266, 42.10194]
      }
    },
    {
      "type": "Feature",
      "properties": { 
        "id": "store3",
        "name": "Downtown Espresso Café",
        "address": "80 Richmond St"
      },
      "geometry": { 
        "type": "Point",
        "coordinates": [-83.11102, 42.10347]
      }
    }
  ]
};


// Parks //
const parksData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { 
        "id": "park1",
        "name": "King's Navy Yard Park"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-83.11332, 42.10241]
      }
    },
    {
      "type": "Feature",
      "properties
