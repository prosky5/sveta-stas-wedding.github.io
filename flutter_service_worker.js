'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "43dae0f4a633d01cbe6b89537c4f1270",
"index.html": "0a91f78ac916e38b499cf842fcab6625",
"/": "0a91f78ac916e38b499cf842fcab6625",
"main.dart.js": "e2b2d880f0aadbd546c231a9b58147ca",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "db2e06601209b915f867a8556c1adb6a",
"assets/AssetManifest.json": "93561654e0fc6e3a55fc049293ab7d41",
"assets/NOTICES": "ada451fb0a3cb53dc676c10ff1644288",
"assets/FontManifest.json": "4ee4207307224d00f0582129ec577674",
"assets/AssetManifest.bin.json": "4430581c9f229a2064bdda38b20ce0c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fe53971acfe36aad63467ca4f6f99d91",
"assets/fonts/MaterialIcons-Regular.otf": "65172cf0091b6f15b8d64db39b8999f2",
"assets/assets/images/border.png": "902889545ef2e9aaaf5795ac44b06053",
"assets/assets/images/konvert.png": "e544330575913e932c445cae8f6b48d2",
"assets/assets/images/qr.jpeg": "6bb5c087f198dc6d02d00b0a16c11dbf",
"assets/assets/images/border_back.png": "4db3c749fb8df834db251d1e2d882c06",
"assets/assets/images/main.png": "539e531cd86c35d85b53a96a4d19a3df",
"assets/assets/images/leaf1.png": "18c1a129d57c55a95fe9e6f8b7911ca2",
"assets/assets/images/divider.png": "7205dd52e4d815dd8e5f850153a5a9b1",
"assets/assets/images/leaf2.png": "0bf5fa14b5c4c3708d13e0c29adf72ac",
"assets/assets/images/kids.png": "6700fcc6fb93a7ffe79d5121c156b99b",
"assets/assets/images/leaf3.png": "736a18e2b5af0158c3265730d0eb41ec",
"assets/assets/images/divider4.png": "0fa6ab7d485babc6fa351209de91b29d",
"assets/assets/images/7.jpeg": "0a216f860545c21acb018ee2ed3e6ab5",
"assets/assets/images/divider3.png": "d2ead9b81ee5fb5b7e7b0c3bb9bd8146",
"assets/assets/images/leaf4.png": "dc4060d81f5069ee0aeb1532a5d1b062",
"assets/assets/images/hand.png": "05cff39c7ce7f9c2c4435bc2813ef0a8",
"assets/assets/images/divider2.png": "f4504a9160b5bc8767969b20a6d7144b",
"assets/assets/images/404_error2.jpg": "09b0f1d653d9befded8371591617bdba",
"assets/assets/images/8.jpeg": "65a6d685afbf4c244bea8ef4f0f051e6",
"assets/assets/images/404_error1.png": "0cf08f887aff3afad57969d630bdb370",
"assets/assets/images/flower.png": "397d056c66c5702479c581d018598685",
"assets/assets/images/4.jpg": "01863c096fe2128d7e7f4cf14b4f57a2",
"assets/assets/images/border2.png": "9aab0a31c3d04862644fa1df1c243baa",
"assets/assets/images/5.jpg": "c26b3243b885b70c2109889216ecdc88",
"assets/assets/images/border_front.png": "dbbf929c85389b68432cc39666dee09c",
"assets/assets/images/suite.png": "98a637217f46a8fee3b35a6745376857",
"assets/assets/images/6.jpg": "8cb858400dc396bc9ffca531c2704cdf",
"assets/assets/images/2.jpg": "7b2ae6575af40bf03ed0f643194f5076",
"assets/assets/images/dress.png": "0e7b8eebe9e840da711599008aa30092",
"assets/assets/images/back.png": "27e7c0f53e8f5980008f0aa4c3e52690",
"assets/assets/images/3.jpg": "8234d36ee8f1baf323a6b1d27be3aaa9",
"assets/assets/images/1.jpg": "7c3bd628fb0d3d4f84c898cc99c65899",
"assets/assets/icons/dinner.webp": "c9068a88136d473a3b9fa545fb5b4b58",
"assets/assets/icons/wedding.webp": "00461250c95ee939ffc9d2efc3e7b0b2",
"assets/assets/icons/location.webp": "c9c623458d0a1565cb292ee3c6df9d1f",
"assets/assets/icons/end.webp": "9b2a1517a6d9921f28540d6bf0099288",
"assets/assets/fonts/CoronetRegular.ttf": "ce0b80cae26278b1ca7afa49fe8b8c69",
"assets/assets/fonts/Eulyoo1945-Regular.ttf": "4d7e70024953b25dfd6f2d802b565451",
"assets/assets/fonts/AmazoneM.ttf": "24029f482a21f22b5909050581fb1db9",
"assets/assets/fonts/Eulyoo1945-SemiBold.ttf": "6eb7b7014fa12610d070261219bed157",
"assets/assets/fonts/ShlapakScript.otf": "7c8c61cfbdc9415eccf651f104218570",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
