var CACHE_NAME = 'dotorify-namp-card.firebaseapp.com-cache-v1';

// 정적 캐쉬에 등록될 파일 리스트
var urlsToCache = [
    '/',
    '/index.html',
    '/icon-192x192.png',
    '/icon-384x384.png'
];

// 서비스 워커 설치 이벤트
self.addEventListener('install', function(event) {
    // 캐싱 도중 서비스워커가 종료되지 않도록 이벤트의 라이프 사이클을 연장합니다.
    event.waitUntil(
        // Cache Storage를 생성하고,
        caches.open(CACHE_NAME).then(function(cache) {
            console.log(`Opened cache for namp-card ${new Date()}`);
            // 기술된 모든 리소스를 미리 fetch해서 캐시에 저장해둡니다.
            return cache.addAll(urlsToCache);
        })
    );
    console.log('SW installed', event);
});

// URL scope 에 해당하는 fetch 이벤트를 다룹니다
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // 현재 요청과 매치되는 캐시 데이터가 캐쉬 되었는 확인해서
    caches.match(event.request.url).then(function(response) {
      // 있다면 해당 캐시 데이터를 전달하고, 없다면 네트워크 fetch를 통해 전달합니다.
      return response || fetch(event.request);
    })
  );
});
