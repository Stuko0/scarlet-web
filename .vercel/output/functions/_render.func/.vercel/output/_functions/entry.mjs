import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DOUs2-ws.mjs';
import { manifest } from './manifest_9FPwOM1H.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/auth/es/login.astro.mjs');
const _page2 = () => import('./pages/auth/es/register.astro.mjs');
const _page3 = () => import('./pages/auth/login.astro.mjs');
const _page4 = () => import('./pages/auth/register.astro.mjs');
const _page5 = () => import('./pages/dashboard/dashboard.astro.mjs');
const _page6 = () => import('./pages/dashboard/es/dashboard.astro.mjs');
const _page7 = () => import('./pages/dashboard/settings.astro.mjs');
const _page8 = () => import('./pages/en.astro.mjs');
const _page9 = () => import('./pages/es.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/auth/es/Login.astro", _page1],
    ["src/pages/auth/es/Register.astro", _page2],
    ["src/pages/auth/Login.astro", _page3],
    ["src/pages/auth/Register.astro", _page4],
    ["src/pages/dashboard/Dashboard.astro", _page5],
    ["src/pages/dashboard/es/Dashboard.astro", _page6],
    ["src/pages/dashboard/settings.astro", _page7],
    ["src/pages/en/index.astro", _page8],
    ["src/pages/es/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "329f08ad-79c8-46c1-9dd0-42fe30e49cac",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
