var cacheName = 'seitenaufbau';

self.addEventListener('install', event => {
	event.waitUntil(
	caches.open(cacheName)
	.then(cache => cache.addAll([
		'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css',
		'./Aufgabenverwaltung.css',
		'https://code.jquery.com/jquery-3.2.1.slim.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js',
		'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js'
		]))
	);
});