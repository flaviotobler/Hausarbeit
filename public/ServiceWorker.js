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
	if(event.request.method ==='GET' && /selection/.test(event.request.url)){
		event.respondWith(
			fetch(event.request)
				.then(function(response){					
					caches.open(cacheName)
						.then(function(cache){
							cache.put(event.request.url, response);
						});
					return response.clone();
				})
				.catch(function(){
					return caches.match(event.request.url);
				})				
		);
	} else {
		event.respondWith(
			caches.match(event.request.url).then(function(response){
				return response || fetch(event.request);
			})
		);
	}
});

importScripts('./idb-keyval.js');
self.addEventListener('sync', event => {
	if(event.tag === 'addTask'){
		event.waitUntil(
			idbKeyval.get('theTask').then(value =>
				fetch('/addTask/', {
					method: 'POST',
					headers: new Headers({ 'content-type': 'application/json'}),
					body: JSON.stringify(value)
				})
			)
		);
		idbKeyval.delete('theTask');
	}
});
