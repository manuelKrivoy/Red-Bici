var map = L.map('main_map').setView([-32.94682, -60.63932], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);



$.ajax({
	dataType:"json",
	url:"api/bicicletas",
	success:function(result){
		console.log(result);
		result.bicicletas.forEach(function(bici){
			L.marker(bici.ubicacion,{title:bici.id}).addTo(map);

		});
	}
})
