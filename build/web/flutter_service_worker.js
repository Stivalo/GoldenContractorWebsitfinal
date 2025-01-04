'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b53ec415fd91173ebd491fd8d8364b66",
"assets/AssetManifest.bin.json": "ec07efe4ed98b46bdb6de58b595d5dcf",
"assets/AssetManifest.json": "947fe6454e82bf1334d15b12c50a8ca3",
"assets/assets/facebook.png": "9d07141dd9a4b776147d16a109d78dff",
"assets/assets/fonts/Almarai/Almarai-Bold.ttf": "1c7b8f3e50a7ca693dc27d3f1314167f",
"assets/assets/fonts/Almarai/Almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/assets/fonts/Almarai.zip": "361ec833b0e5bbcef4a3d2e149cbc670",
"assets/assets/instagram%25202.png": "217599c2549035936da4855f7b00b362",
"assets/assets/paint-roll-paint-svgrepo-com.svg": "46b105b51dfe1b660988a9a27a2e8dea",
"assets/assets/paintlanding.jpg": "7601fee0ad7dcc741f92b8542237d3ed",
"assets/assets/painttool.jpg": "31354278f463c4277a2105641f97bf5e",
"assets/assets/redRoll.png": "f4c51c00bb1ef9ad4ad3fbcd25fb6587",
"assets/assets/Snapchat%2520Icon.png": "80d214ff1ebcb9640645417116d8ef26",
"assets/assets/splash.jpg": "804818cc423760dcde121f9ce0080f45",
"assets/assets/ticktock.png": "6018a18379215b0e5651b7a9d21f2086",
"assets/assets/whatsapp.png": "cf0510e45b3013f30663d1fb90b133e5",
"assets/assets/whitePaint.jpg": "f8aa2ffa95d2eb0bae9b789fd6f3a8ee",
"assets/assets/works/d1.1.jpg": "de9a2093eb192eeb290ada56cc14d9b2",
"assets/assets/works/d1.2.jpg": "628f27cbc0ef38e08f5e969967605654",
"assets/assets/works/d1.3.jpg": "2da055d093ffe7c8892d3b9950b2f6e0",
"assets/assets/works/d1.4.jpg": "996a7962499da37d824e1e9d89843577",
"assets/assets/works/d1.5.jpg": "5c9e9bdb27932803e949e62b8e19e2ea",
"assets/assets/works/d2.1.jpg": "996a26d82f48208d05332b712afafe4b",
"assets/assets/works/d2.2.jpg": "bfdc1f9f407f50cc6a52291e6b8ebcfc",
"assets/assets/works/d2.3.jpg": "770299cf3378d50be0ec985ee6316016",
"assets/assets/works/d2.4.jpg": "f8af18066c65c8c2b36ee8c04860da04",
"assets/assets/works/d3.1.jpg": "904e5d0c99a2d454a88f9843c6025edd",
"assets/assets/works/d3.2.jpg": "3b48270d42d185998bbe88fc4383bb2b",
"assets/assets/works/d4.1.jpg": "89ec3982da10683a3d1719083e042ec1",
"assets/assets/works/d4.2.jpg": "ff945398ec8bc5909710c2bf79c6d418",
"assets/assets/works/d4.3.jpg": "3f5c96a305f5e493dbd5d89eb123558c",
"assets/assets/works/d5.1.jpg": "366dbdc84e1b125f4172b6b9e156dbe6",
"assets/assets/works/d5.2.jpg": "acc4f84bb2eb77207d3b9ae62f80fc3a",
"assets/assets/works/d5.3.jpg": "85d22004ea650066ab8fa645e2b9e626",
"assets/assets/works/d6.1.jpg": "aaec5d89728ad640a57113b26f9537ef",
"assets/assets/works/d6.2.jpg": "732c8d9ad2535a4b06c2754709bac0a4",
"assets/assets/works/d6.3.jpg": "b7ace536787b2292bb4c98ca86240d2a",
"assets/assets/works/d7.1.jpg": "4d6680e73d2e8d16f4b2765cce463f56",
"assets/assets/works/d7.2.jpg": "ad87a0e68b57a7a5c9bc5bc7b1213d81",
"assets/assets/works/illusion.jpg": "570fcf54c63d97d362162b7ad8281126",
"assets/assets/works/isoWorker.jpg": "65ddda4956c905f0889b4cfb235bd599",
"assets/assets/works/JebsWorkjpg.jpg": "b6c653d37dd3e26c596140154278333a",
"assets/assets/works/paints.jpg": "49f0ed023f2182cbcaaf4d83ea02bd5f",
"assets/FontManifest.json": "9749ede8cfbb6fab602e435aeb35d6cd",
"assets/fonts/MaterialIcons-Regular.otf": "dbff3a864f390b096df91182b8af7f71",
"assets/NOTICES": "e67df85a67dc319cadabf60d3f04638f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "7d0753985f126fb322c80525417875d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "742b7d87b47c0c56b142627127707469",
"/": "742b7d87b47c0c56b142627127707469",
"main.dart.js": "3cfa9d62b61be0319abaa2c86f54c5ba",
"manifest.json": "841f53ae6a0ed315faaf7a7a07f80ea1",
"version.json": "ca6630d201eba4367e1061eb69d99f7b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
