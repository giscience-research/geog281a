function initMap() {
  const map = L.map('map', { scrollWheelZoom: true }).setView([44.26053976443341, -72.583011566153], 14);
  const mapboxStyle = 'mapbox/light-v11';
  const mapboxKey = 'pk.eyJ1IjoiZW16aG91IiwiYSI6ImNtMG9henVrdjA2bGwya3EwNWh6OGh1emgifQ.d2Xo2TLSYAGCMqvccySJSA';

  L.tileLayer(
    `https://api.mapbox.com/styles/v1/${mapboxStyle}/tiles/{z}/{x}/{y}{r}?access_token=${mapboxKey}`,
    {
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
      attribution: '&copy; <a href="https://www.mapbox.com/" target="_blank">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
    }
  ).addTo(map);

  window._map = map; // store reference so updateZoom can access it
}

function updateZoom(val) {
  if (window._map) {
    window._map.setZoom(parseInt(val));
  }
}

// Wait for the DOM to be ready before initializing
document.addEventListener('DOMContentLoaded', initMap);