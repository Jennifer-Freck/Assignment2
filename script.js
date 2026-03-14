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
      "properties": { 
        "id": "park2",
        "name": "Toddy Jones Park"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-83.11076, 42.10293]
      }
    }
  ]
};


// Store Layer //
const storeLayer = L.geoJSON(storeData, {
  pointToLayer: (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 8,
      color: "darkorange",
      fillColor: "darkorange",
      fillOpacity: 0.9
    }).bindPopup(
      `<h3>${feature.properties.name}</h3>
       <p>${feature.properties.address}</p>`
    );
  }
}).addTo(map);


// Parks Layer //
const parksLayer = L.geoJSON(parksData, {
  pointToLayer: (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 10,
      color: "green",
      fillColor: "green",
      fillOpacity: 0.8
    }).bindPopup(`<h3>${feature.properties.name}</h3>`);
  }
}).addTo(map);


// Sidebar Store List //
const storeListDiv = document.getElementById("store-list");

storeLayer.eachLayer(layer => {
  const f = layer.feature;

  const item = document.createElement("div");
  item.className = "store-item";
  item.innerHTML = `<strong>${f.properties.name}</strong><br>${f.properties.address}`;

  item.addEventListener("click", () => {
    map.setView(layer.getLatLng(), 17);
    layer.openPopup();
  });

  storeListDiv.appendChild(item);
});


// Layer Control //
L.control.layers(
  {},
  {
    "Stores": storeLayer,
    "Parks (OSM)": parksLayer
  }
).addTo(map);
