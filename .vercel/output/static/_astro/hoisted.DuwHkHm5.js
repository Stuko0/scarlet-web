import"./Header.astro_astro_type_script_index_0_lang.CfMvxm-O.js";const g="modulepreload",p=function(c){return"/"+c},d={},E=function(a,i,u){let r=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),e=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(i.map(t=>{if(t=p(t),t in d)return;d[t]=!0;const l=t.endsWith(".css"),m=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${m}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":g,l||(n.as="script"),n.crossOrigin="",n.href=t,e&&n.setAttribute("nonce",e),document.head.appendChild(n),l)return new Promise((f,h)=>{n.addEventListener("load",f),n.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${t}`)))})}))}function s(o){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o}return r.then(o=>{for(const e of o||[])e.status==="rejected"&&s(e.reason);return a().catch(s)})};document.getElementById("login-form").addEventListener("submit",async c=>{c.preventDefault();const a=c.target,i=a.email.value,u=a.password.value;E(async()=>{const{checkLogin:r}=await import("./users_services.BoJ-aJts.js");return{checkLogin:r}},[]).then(({checkLogin:r})=>{r(i,u).then(s=>{console.log("Login success:",s),alert("Logeado"),window.location.href="/"}).catch(s=>{console.error("Login failed:",s),alert("Login failed")})})});