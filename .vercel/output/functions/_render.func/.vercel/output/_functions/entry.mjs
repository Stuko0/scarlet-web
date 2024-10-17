import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CZpikXa3.mjs';
import { manifest } from './manifest_0sFf_adM.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/_---entity_.astro.mjs');
const _page2 = () => import('./pages/auth/es/login.astro.mjs');
const _page3 = () => import('./pages/auth/es/register.astro.mjs');
const _page4 = () => import('./pages/auth/login.astro.mjs');
const _page5 = () => import('./pages/auth/register.astro.mjs');
const _page6 = () => import('./pages/dashboard/dashboard.astro.mjs');
const _page7 = () => import('./pages/dashboard/es/dashboard.astro.mjs');
const _page8 = () => import('./pages/dashboard/settings.astro.mjs');
const _page9 = () => import('./pages/en.astro.mjs');
const _page10 = () => import('./pages/es.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/[...entity].ts", _page1],
    ["src/pages/auth/es/Login.astro", _page2],
    ["src/pages/auth/es/Register.astro", _page3],
    ["src/pages/auth/Login.astro", _page4],
    ["src/pages/auth/Register.astro", _page5],
    ["src/pages/dashboard/Dashboard.astro", _page6],
    ["src/pages/dashboard/es/Dashboard.astro", _page7],
    ["src/pages/dashboard/settings.astro", _page8],
    ["src/pages/en/index.astro", _page9],
    ["src/pages/es/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "65ec48fb-22fd-4655-9941-416f935d7b28",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
