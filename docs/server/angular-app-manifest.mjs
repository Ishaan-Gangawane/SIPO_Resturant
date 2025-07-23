
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SIPO_Resturant/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OXAU76KG.js",
      "chunk-D255CWL4.js",
      "chunk-GB7557WW.js",
      "chunk-T4PF56AG.js"
    ],
    "route": "/SIPO_Resturant/**"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-24R6JFKB.js",
      "chunk-GB7557WW.js",
      "chunk-T4PF56AG.js"
    ],
    "route": "/SIPO_Resturant/menu"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3NYS7SHN.js"
    ],
    "route": "/SIPO_Resturant/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PFIYLVTE.js",
      "chunk-D255CWL4.js",
      "chunk-T4PF56AG.js"
    ],
    "route": "/SIPO_Resturant/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23617, hash: 'dc958bd26286ac94c664bff9d75f83bdc1759cbc35b155754d71b23f1bab5797', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17241, hash: '9fea73025bd605b0bc84a54f1cc43e38c8e5f7c84d707aab1f1e7fc41762623c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 82486, hash: 'ef7d0d8389f9934e86d3381a13dfcd7ebe19e435c16d73a289aa651fe4428b1c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 82486, hash: '00e0638ae18c953f67f51b176ed710afa82fbb99a74abc24d9a74ef20ff45061', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 82382, hash: '2ae30b771754d339857f5fbcd14f016f320fe2a80de22cc111765d688350b6ba', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-WXI3XYL2.css': {size: 14754, hash: 'moX9OulxQI4', text: () => import('./assets-chunks/styles-WXI3XYL2_css.mjs').then(m => m.default)}
  },
};
