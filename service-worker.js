/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c3b6681a173d99acf982d753746701db"
  },
  {
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/complie/9.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/css/0.styles.0da011f6.css",
    "revision": "778def17f2559d3dfaa4e318f93777b8"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.a0a38f3f.png",
    "revision": "a0a38f3f5d5ee0f993cdaf917a712ffc"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.c72125c6.js",
    "revision": "9bdd14474e9e5eaf9855590e58756521"
  },
  {
    "url": "assets/js/11.7e39b113.js",
    "revision": "066bac90498babdcbba25858850f0d8e"
  },
  {
    "url": "assets/js/12.400cd869.js",
    "revision": "165330ec38c1c91f7e02b7970e12e72d"
  },
  {
    "url": "assets/js/13.6f9d34d9.js",
    "revision": "b28101771946e687b0f9d608e062b22f"
  },
  {
    "url": "assets/js/14.9e8f8f10.js",
    "revision": "b56369fff682e9be1278d437faf71ac6"
  },
  {
    "url": "assets/js/15.4ce8d2c3.js",
    "revision": "7f920b5658af767ead48b3e53d2e0ff2"
  },
  {
    "url": "assets/js/16.4d680219.js",
    "revision": "a11d328fe27c9b7717810c7cae5473c3"
  },
  {
    "url": "assets/js/17.5cfb3157.js",
    "revision": "137af1aba747547915e65874268c5db0"
  },
  {
    "url": "assets/js/18.16437cca.js",
    "revision": "1428b7fd132c11d638d773bb5b104bb9"
  },
  {
    "url": "assets/js/19.f774da38.js",
    "revision": "d132524bc01c1f7ae49ea053c01adb9d"
  },
  {
    "url": "assets/js/2.55cca69e.js",
    "revision": "960a5a34c9d2aa45c49e4bbc7269d6c7"
  },
  {
    "url": "assets/js/20.366207b0.js",
    "revision": "d0420aa787fea3485f5609096b2d734b"
  },
  {
    "url": "assets/js/21.4373096b.js",
    "revision": "5fa76a6dd091499b5189bed71ce1685a"
  },
  {
    "url": "assets/js/22.883818ae.js",
    "revision": "dbb398bcbee512ef6e010b9762b55685"
  },
  {
    "url": "assets/js/23.ad0b592a.js",
    "revision": "d724bc148374eab888c824c884458eb7"
  },
  {
    "url": "assets/js/24.0bfa9916.js",
    "revision": "12e7ef0c549de4088d52e18c54f372e6"
  },
  {
    "url": "assets/js/25.596af3ad.js",
    "revision": "3d0b8f994d4a9da9e46f8ee0930e8ff8"
  },
  {
    "url": "assets/js/26.2a5d2e3b.js",
    "revision": "1d1f51b416607af58edb33a5c67d619d"
  },
  {
    "url": "assets/js/27.36e946a5.js",
    "revision": "60edc486079afb8ba8b0fed49e51ecd1"
  },
  {
    "url": "assets/js/28.e795c94c.js",
    "revision": "8aa8f535484248fa7fb8b2328632f248"
  },
  {
    "url": "assets/js/29.63a495c2.js",
    "revision": "f698f48955f300bd7f9240ef43448444"
  },
  {
    "url": "assets/js/3.be4dc20a.js",
    "revision": "f675353ea95b04196638aa78939e9289"
  },
  {
    "url": "assets/js/30.5233336c.js",
    "revision": "b29059247342511bdfbe98af40d9f8c2"
  },
  {
    "url": "assets/js/31.b9225497.js",
    "revision": "3893e1a5eceead86d38f14a54d0fe474"
  },
  {
    "url": "assets/js/32.b5ac83bd.js",
    "revision": "7786ce96a00a2c908821072b44cd8cf4"
  },
  {
    "url": "assets/js/33.d88afecf.js",
    "revision": "e8d0b7dabb13344c9434fabfd739123c"
  },
  {
    "url": "assets/js/34.08d7236b.js",
    "revision": "a38aee5f654140ed0226daadf076ab33"
  },
  {
    "url": "assets/js/35.ee443e25.js",
    "revision": "2939b7cb265b87cc94fce7d7f7cfa2f7"
  },
  {
    "url": "assets/js/36.82d3fda4.js",
    "revision": "b0c5f5673631950903e45358f5711983"
  },
  {
    "url": "assets/js/37.db802869.js",
    "revision": "1064702b9f872c4fdb2bfa7753e0295a"
  },
  {
    "url": "assets/js/38.c8a4dd2b.js",
    "revision": "19f72bd1cf1e61ba759a52121d94d77e"
  },
  {
    "url": "assets/js/39.639033ed.js",
    "revision": "4fcfafb288ef3bcbe466daec41a2beff"
  },
  {
    "url": "assets/js/4.b8bd8d27.js",
    "revision": "269d774553e9dd3eb0c3ea9173d25a96"
  },
  {
    "url": "assets/js/40.db1d04fa.js",
    "revision": "c0f773a7c37d8a399626e778896705b7"
  },
  {
    "url": "assets/js/5.29c439bd.js",
    "revision": "989245db15a564fd554ed2d0498faadb"
  },
  {
    "url": "assets/js/6.7a540803.js",
    "revision": "3121f01f1b2435396e3328c3279551f4"
  },
  {
    "url": "assets/js/7.3151e1dd.js",
    "revision": "0baccdf1c7d99c75e1b1381358ad04b9"
  },
  {
    "url": "assets/js/8.e0549479.js",
    "revision": "75c7a19765cb50351ccef166d07d7b83"
  },
  {
    "url": "assets/js/9.13e17cb1.js",
    "revision": "815bc0e2f8bc82c6f67f9e6b60c8026d"
  },
  {
    "url": "assets/js/app.0339f412.js",
    "revision": "69d71a3c366304d6c9e71c745a91f215"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "84ca74d188f66555a46ad15e464aaad1"
  },
  {
    "url": "complie/codegen.html",
    "revision": "42c93402083eb4ee391696f1d6604d62"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "e6c9b44d652476e772d07cef86ed623d"
  },
  {
    "url": "complie/index.html",
    "revision": "4d425324842bc85e7dbaa230186e3bc3"
  },
  {
    "url": "complie/optimize.html",
    "revision": "bcdc4be8605c3286fb8e46b58c3daf94"
  },
  {
    "url": "complie/parse.html",
    "revision": "d6bd6c2537acf4212974c4fe3ac2e6d0"
  },
  {
    "url": "complie/summary.html",
    "revision": "ed9486e3989b955f41e9ec544c32aedf"
  },
  {
    "url": "complie/textParse.html",
    "revision": "d32016b216c0183ba24c431c5e30f94f"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "89a2ad1ba91acadee41151655c70fb41"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "5ec4b9a637cd5441db231edf941d7b58"
  },
  {
    "url": "filter/index.html",
    "revision": "6ce3ab57f64f1d9d02309753abed07be"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "53b0f994e8b79159d0bc7b10a05e1d4f"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "1e37db203872e464231efdf4b375d3f0"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "2f865bc137a31d14924648fa5f3cebdd"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "18f2532c68de80783ac9d35518da75b3"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "7bc3b9d0f4a8c2dabd46e6716a7062d6"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "af63c4803a1fb13e52e54499b8286c42"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "f98b9b70937d3a98fc3ce20c6c6347c6"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "6a5e8096c7f101e161f06ab4935cb4d7"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "5d9dba77a3098386fc6995c19fae1b20"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "d30389d8247503b4f95404181d1a001f"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "741924e42ec24e1323230bc5639905c3"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "9dcd49aee5e8febe1e25c7317acd5982"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "e97a4c7a8f143dbffd2c8ceb73fc9b95"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "346d09ad2b0f477803b7f78dfe4a8289"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "ded0a726b4a2f4dd662ddb955580a0cc"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "5232cfb2668f9d67a09340f40801eb02"
  },
  {
    "url": "reactive/index.html",
    "revision": "de12eed6bbdcc05ad7959b77a6b0ea9d"
  },
  {
    "url": "reactive/object.html",
    "revision": "d5ba1b0777cda488a4b578cd843308f3"
  },
  {
    "url": "start/index.html",
    "revision": "6292c9d20eec570de89edbef8cb9937d"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "8aa2f2912001b2e5687c6feaea384354"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "cc3d38eed6632dd44b14b00d56e6d1c8"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "70e90b5c3de7f41d37ec4f9f813124e3"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "2bb51d2169a9e4284000d7d02365a64e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
