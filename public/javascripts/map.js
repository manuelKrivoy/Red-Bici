var map = L.map('main_map').setView([-32.94682, -60.63932], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

L.marker([-32.94682, -60.63932]).addTo(map);
L.marker([-32.936507, -60.662235]).addTo(map);
L.marker([-32.958736, -60.651778]).addTo(map);
L.marker([-32.965050, -60.680546]).addTo(map);

