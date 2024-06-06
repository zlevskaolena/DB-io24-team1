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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "a4eca3edcf73e46c9ada571db00b071a"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "c943c3351446e52bdf17399d98688618"
  },
  {
    "url": "assets/css/0.styles.6d8b9dde.css",
    "revision": "e2482a9f5cfb46c88c3c89e1bc9110b8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b3862d19.js",
    "revision": "2d9820364de46f1ed0aca1e4f3df90eb"
  },
  {
    "url": "assets/js/10.b61f6fe7.js",
    "revision": "d206d48ddbd545786fbfda1fb7a36d15"
  },
  {
    "url": "assets/js/13.ccf49d8c.js",
    "revision": "7bd57ec8c7d3d5874bee7321b26e882e"
  },
  {
    "url": "assets/js/14.f245480a.js",
    "revision": "4bacf4698ea1f831f05c90e53f49158a"
  },
  {
    "url": "assets/js/15.47286bfd.js",
    "revision": "67f36e7819664fa6097cb4357bcb2521"
  },
  {
    "url": "assets/js/16.c9816aa4.js",
    "revision": "27cbbc7ae017eabcb2f3acf9a4699ec8"
  },
  {
    "url": "assets/js/17.e30deff0.js",
    "revision": "1f738bf481278e201aa134da7a1b454a"
  },
  {
    "url": "assets/js/18.a698da14.js",
    "revision": "19ae254516292ff2558410ab09993195"
  },
  {
    "url": "assets/js/19.00e5eed1.js",
    "revision": "dfe9aa3453a4ab80cd32d91dd4a29a54"
  },
  {
    "url": "assets/js/2.5f0a099e.js",
    "revision": "73f3aae21cfbc566a000d728cb9a4609"
  },
  {
    "url": "assets/js/20.9fd9866f.js",
    "revision": "b2963ce8f5cac7ca60ed76ec5af4e660"
  },
  {
    "url": "assets/js/21.3b26bb86.js",
    "revision": "30d8b5dd16079318a97a3ee2b199ff32"
  },
  {
    "url": "assets/js/22.b06fba7a.js",
    "revision": "b3c7f0009d6744ddad3425a799ceff01"
  },
  {
    "url": "assets/js/23.bf72d457.js",
    "revision": "f1b4ba075fbe87a926bca869cb9b09c0"
  },
  {
    "url": "assets/js/24.b73a7dc7.js",
    "revision": "3e102b63eace70beaaadb6f56286bdf3"
  },
  {
    "url": "assets/js/25.05f3767a.js",
    "revision": "b8880e393376b7210358ac4944e5ff99"
  },
  {
    "url": "assets/js/26.d76c5a3a.js",
    "revision": "3599fbbd4ffdd2a17cbff24315ea45c9"
  },
  {
    "url": "assets/js/27.a6f5bcc9.js",
    "revision": "b695105d5e74d13887a6e042831e0d22"
  },
  {
    "url": "assets/js/28.40feb310.js",
    "revision": "b60a10403e6d008e642bafe11f04e05d"
  },
  {
    "url": "assets/js/29.5f6421e3.js",
    "revision": "828122669b74a122ea5d6eda76cf62c2"
  },
  {
    "url": "assets/js/3.f59d1d48.js",
    "revision": "707771b1c3ccc602da6863e7076c6ee9"
  },
  {
    "url": "assets/js/30.b75d4007.js",
    "revision": "3dd17915de1cd6fb1db62c1101a98e59"
  },
  {
    "url": "assets/js/31.9103ea4c.js",
    "revision": "56506521d470be2b6d8bc2ba7f2afe0e"
  },
  {
    "url": "assets/js/32.9b8e0f8c.js",
    "revision": "aaf688434f87948cbc289b2f200c6b61"
  },
  {
    "url": "assets/js/33.0ff99c61.js",
    "revision": "0f7e77460deb9a0854adcf5047bbdaa6"
  },
  {
    "url": "assets/js/34.3b0c187c.js",
    "revision": "59ddc9194bb9eef1548242c2550ec65e"
  },
  {
    "url": "assets/js/35.430425ca.js",
    "revision": "a2e53c308ae5736ef7fa96b229d778fc"
  },
  {
    "url": "assets/js/36.2502bb82.js",
    "revision": "877d2310d4fe0b6586e754ec71b6f9cf"
  },
  {
    "url": "assets/js/37.2e2fb72b.js",
    "revision": "381d3799fa4b0af07b5f963d1e8b3792"
  },
  {
    "url": "assets/js/38.5c115e97.js",
    "revision": "71519404de467146b76789042ccbacae"
  },
  {
    "url": "assets/js/39.617f9aaf.js",
    "revision": "6d00aa3d781a189b5ff93a0ded8f33b6"
  },
  {
    "url": "assets/js/4.840fd9e2.js",
    "revision": "b938d68627913ab8f7d9537676b46bfa"
  },
  {
    "url": "assets/js/40.16fc5a19.js",
    "revision": "249d211fd41c26e81b42fb8a4a79478e"
  },
  {
    "url": "assets/js/42.caa2b45c.js",
    "revision": "c262d9b1af7d82d4b5b55b29dfdf2b7d"
  },
  {
    "url": "assets/js/5.311b0574.js",
    "revision": "e1eea280454585d55106ca1cea13a118"
  },
  {
    "url": "assets/js/6.2b0eb435.js",
    "revision": "65fcdcfbb6ca922c677ce8407eccff4d"
  },
  {
    "url": "assets/js/7.5f49afbf.js",
    "revision": "255022024b6648297af6ade4a6418f2c"
  },
  {
    "url": "assets/js/8.50b4ec0c.js",
    "revision": "a222402e86e7400a26390acca26e7ff1"
  },
  {
    "url": "assets/js/9.4c41bd0a.js",
    "revision": "67c198b3d8edad0370af1ce7bc754bbf"
  },
  {
    "url": "assets/js/app.ab7b4547.js",
    "revision": "fd26c2833229a6d2eb5dbd15a3e98c34"
  },
  {
    "url": "assets/js/vendors~docsearch.235c2665.js",
    "revision": "5886b9422ba4f57d74f7d302e2e29b71"
  },
  {
    "url": "conclusion/index.html",
    "revision": "302d94cce96ac9841b3340b0ca265298"
  },
  {
    "url": "design/index.html",
    "revision": "3cd0f76ae771cfb1065770be9c51d296"
  },
  {
    "url": "index.html",
    "revision": "bee2f8b491e7ae795e18251adb4aa010"
  },
  {
    "url": "intro/index.html",
    "revision": "4d5c72934d815b7ca0ecc6938894e7f0"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "213368431fb8af5bd46fa2d1d067ec52"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f50c49eab9cd6bd14591eb6490a9cd00"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "245598f9b1a6ebccab4a2346300ec7c0"
  },
  {
    "url": "software/index.html",
    "revision": "94a6e883aa1f913b9990a914f7ccc7f6"
  },
  {
    "url": "test/index.html",
    "revision": "125b65fec1c5a23f9ccb4e55008d0084"
  },
  {
    "url": "use cases/index.html",
    "revision": "4131060be97a3fd4e5690a3529a23d6a"
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
