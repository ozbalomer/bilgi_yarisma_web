'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5e528cf95007395bcba9eaccb4e4f125",
".git/config": "c066f6fcaaa0e4bd46f260295b84fa1a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5497e50c288fbf5e0e015a986bdd8018",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20e344f8dd4b5da1f07134032194f0fe",
".git/logs/refs/heads/master": "20e344f8dd4b5da1f07134032194f0fe",
".git/logs/refs/remotes/origin/master": "663a62a1b71664c0dc967d655aecc4f4",
".git/objects/06/f63d128ab3c823226ab7c5eb149ce311a2b82f": "c93c700e7b4dfe322e35bea7859406ec",
".git/objects/0a/82685620dfe2947dce8468a093a38b47ed607c": "94db630d82e4bdcdc04def371ade3e25",
".git/objects/17/17e1b7a372797745f15189b43f1633443fa6e8": "4123dadd510d6966bc81c1ce999853fd",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2b/9095812dc88b412d2e8b6db5c0bbb96eb709e6": "b0d59482d959e4198b97c6d029325b60",
".git/objects/30/e15e3311b3bb70c0f043f2a7a909f4f80a9e88": "f7f092007cc7a1674db03de82775527e",
".git/objects/3e/7e06a0d52ea6b7482964ddde053a585249cb68": "d9a2786906655abc3885f9e4713e59b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/c056092b23c35694bc97b2203e7e6fe391119b": "b18e27ce2c3588129e81feec69a757e7",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/6c/915448e866b4e2fbdaca81aa5c1c8bff1d7fe3": "2b47bd9bea818b879684a792bf508fce",
".git/objects/6e/07217e85bae53e780365f7a3b3aceb959fd6dc": "ccef53037237ec5de52ba7c21ece7b7c",
".git/objects/6f/90d19317c8e49aaffb7b30933492579c30ffb5": "d735bde6af58fccb2323525254a5f387",
".git/objects/75/b897df77ec0fcd58139b02db6d64325d39e425": "fa115c5a6c742f8f75f83c168197d22b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1b2efa4f42b4c79b131f905383e23533311649": "f536ec6d26733991685bf95047ead1e3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/f2ee34390cbd4399110bbb0e98a4d3dfa925b2": "bce28d02e655a2b74f79bb451cf6b348",
".git/objects/b6/0315af87a0208314610939fb433f188f9ebe40": "1cc016d50d4d8209efc38726c5dc4cf2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/fbddeaf29dbafd82c2666f267473ce01876d46": "874fd6e29acbea34a3ef11021e423ca2",
".git/objects/cc/0f8c938a827b4158cf78223f799e8124c1e71a": "03d0f7bc07ea029148d4fa2652445158",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/cfa3eb69ee3b2cba2ecf85c3b8bb60bd288ed0": "94f441a9be30315a3c128cdd44ec6182",
".git/refs/heads/master": "c1ae7eb9ef5b0f8a616fd215908a2dfa",
".git/refs/remotes/origin/master": "15ad7aa31d7417e1b16cd2378989fb9f",
"assets/AssetManifest.json": "4828f5ec4978d985e9ab12cd44635897",
"assets/assets/images/Bilgyar.jpg": "fcf2978f1cbd0eb698854d877ff39ad6",
"assets/assets/konya/konyaaa_1.jpg": "7a8179aa732ef944d00fd90c9756bef4",
"assets/assets/konya/konyaaa_2.jpg": "f44cdbc3b8e74131c184a833814e0c5a",
"assets/assets/konya/konyaaa_3.jpg": "dd34a10f6f1b9148667e98de6a1942ea",
"assets/assets/konya/konyaaa_4.jpg": "04d775590c3e91a54e9cad5a4e17bd93",
"assets/assets/konya/konyaaa_5.jpg": "337bfdbf8c697424032d6055ec4140d8",
"assets/assets/konya/konyaa_1.jpg": "9c3b51009ec79d6b9372a6c27fc1e882",
"assets/assets/konya/konyaa_2.jpg": "e08618a7b44e13b384d7a454deba62c8",
"assets/assets/konya/konyaa_3.jpg": "5686a19931891eb7f407de73863d1952",
"assets/assets/konya/konyaa_4.jpg": "a8c6aed2d2a71b2993239f2399350197",
"assets/assets/konya/konyaa_5.jpg": "d10c0b822da2f50e4ec367a349ee4f77",
"assets/assets/konya/konya_1.jpg": "1ab9b95a89eccc36069a32858e976940",
"assets/assets/konya/konya_2.jpg": "3747179290a5f76d9f427314740ac3a2",
"assets/assets/konya/konya_3.jpg": "f65fa5de77410d6e7d51f1577dbd0c80",
"assets/assets/konya/konya_4.jpg": "8a756e51642271905ed83081685cc219",
"assets/assets/konya/konya_5.jpg": "d76ce27ecaf9749c0ca43a34ff589518",
"assets/assets/konya/text.txt": "cd9e2e1f24f6caaeaccf6b976f3a466f",
"assets/assets/yemek/corba_1.jpg": "83e5e51ce2f6a783b19375867eaa1bd0",
"assets/assets/yemek/corba_2.jpg": "fd4dcc07b332f58a2e7c7f10ce8a8c9b",
"assets/assets/yemek/corba_3.jpg": "86d2ef8747e1a9871cd9079a07c0c7e3",
"assets/assets/yemek/corba_4.jpg": "934cf9e011b88a1db7028fd6dcece830",
"assets/assets/yemek/corba_5.jpg": "21ad954e5bd490ba6889c543bf6dd4ba",
"assets/assets/yemek/tatli_1.jpg": "a5c7e94127448d1d336b202d866043af",
"assets/assets/yemek/tatli_2.jpg": "b5da8b2486a731442a97ebe35020dbd4",
"assets/assets/yemek/tatli_3.jpg": "652d9da7f06da7c7a69a2b148fb554f2",
"assets/assets/yemek/tatli_4.jpg": "aca2a402acb73ec1cb5517ac4a2a652b",
"assets/assets/yemek/tatli_5.jpg": "abc4d6238cd32e0f766e2ffee190e98c",
"assets/assets/yemek/yemek_1.jpg": "e0fc1e8ad21882c3e65baecb4d8ba1c0",
"assets/assets/yemek/yemek_2.jpg": "ff9b14f950ad8a0c2ebf1d07f665701b",
"assets/assets/yemek/yemek_3.jpg": "9150ee7b0addc864ad4e4873de908808",
"assets/assets/yemek/yemek_4.jpg": "f7162a73558b8f5b0f0453ba613252aa",
"assets/assets/yemek/yemek_5.jpg": "cb2440c3831e94672042e9c9d4b8781e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9c8d6d56b1c25bee4e3ddc0e2756176b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5ba2b200cb796b237ee23eb8c95dcb6a",
"/": "5ba2b200cb796b237ee23eb8c95dcb6a",
"main.dart.js": "4124458c995736e2121813cb6412a6ab",
"manifest.json": "4c72aae8d509c9806b03ae29a90e0964",
"version.json": "f54bbb91ade78744d8166183ae62c4d8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
