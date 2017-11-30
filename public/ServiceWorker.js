var cacheName = 'seitenaufbau';


self.addEventListener('install', event => {
	self.skipWaiting();
	event.waitUntil(
	caches.open(cacheName)
	.then(cache => cache.addAll([
		'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css',
		'./Aufgabenverwaltung.css',
		'./index.html',
		'https://code.jquery.com/jquery-3.2.1.slim.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js',
		'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js'
		]))
	);
});

self.addEventListener('fetch', event => {
	/*if(event.request.method ==='GET' && (event.request.name == "selectionD" || event.request.name == "selectionT")){
		event.respondWith(
			fetch(event.request.url).then(function(response){
				cache.put(response);
				return response;
			}).catch(error => {
				return caches.match(event.request.url);
			})
		);
	} else {
		event.respondWith(
		caches.match(event.request, {
			ignoreSearch: true
		}).then(function(response) {
			return response || fetch(event.request);
		})
	);
	}*/
})