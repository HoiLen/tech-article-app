import{jsxs as R,Fragment as V,jsx as r}from"react/jsx-runtime";import{g as j,S as P,Q as X,T as Z,U as ee,d as re}from"./@lazarv/react-server.SKzlPxB5.mjs";import{u}from"./entrypoint.CB81Ft5C.mjs";import ae from"./(root).page.ZA6Qa1eX.mjs";import te from"./(blogsPageName).page.CrjVpNhf.mjs";import _e from"./(editorPageName).page.CbxAWmNn.mjs";import{_ as oe}from"./page.CJuumVtk.mjs";import"node:path";import"node:url";import"node:async_hooks";import"node:worker_threads";import"picocolors";import"react";import"react-server-dom-webpack/server.edge";const O={"C:/Users/kunre/Desktop/graduation_works/tech-article-app/src/app/@pageName/(root).page.tsx":ae,"C:/Users/kunre/Desktop/graduation_works/tech-article-app/src/app/blogs/@pageName/(blogsPageName).page.tsx":te,"C:/Users/kunre/Desktop/graduation_works/tech-article-app/src/app/editor/@pageName/(editorPageName).page.tsx":_e},{default:Y,...N}=oe,A=N?.frontmatter?.ttl??N?.frontmatter?.revalidate??N?.ttl??N?.revalidate,se=typeof A=="number"?X(Y,A):Y,{default:H,...x}=await import("./(root).layout.7ImHbNZL.mjs"),Q=x?.frontmatter?.ttl??x?.frontmatter?.revalidate??x?.ttl??x?.revalidate,ne=typeof Q=="number"?X(H,Q):H;let w=null;function Ce(){if(!w){const p=[...j(P)??[]],i=j(Z),l=j(ee);if(l){const n=Object.values(l.server).find(t=>t.src?.endsWith("articles/[id]/page.tsx")||t.src?.startsWith("virtual:")&&t.src?.includes("articles/[id]/page.tsx"))?.file;p.unshift(...i?.(n));const y=Object.values(l.server).find(t=>t.src?.endsWith("(root).layout.tsx")||t.src?.startsWith("virtual:")&&t.src?.includes("articles/[id]/page.tsx"))?.file;p.unshift(...i?.(y));const _=Object.values(l.server).find(t=>t.src?.endsWith("@pageName/(root).page.tsx"))?.file;p.unshift(...i?.(_));const m=Object.values(l.server).find(t=>t.src?.endsWith("blogs/@pageName/(blogsPageName).page.tsx"))?.file;p.unshift(...i?.(m));const d=Object.values(l.server).find(t=>t.src?.endsWith("editor/@pageName/(editorPageName).page.tsx"))?.file;p.unshift(...i?.(d))}w=[...new Set(p)]}re(P,w)}const xe=p=>{const i={pageName:[["C:/Users/kunre/Desktop/graduation_works/tech-article-app/src/app/@pageName/(root).page.tsx","/","pageName","page"],["C:/Users/kunre/Desktop/graduation_works/tech-article-app/src/app/blogs/@pageName/(blogsPageName).page.tsx","/blogs","pageName","page"],["C:/Users/kunre/Desktop/graduation_works/tech-article-app/src/app/editor/@pageName/(editorPageName).page.tsx","/editor","pageName","page"]]},l={},n={},y={},_=Object.fromEntries(Object.entries(i).map(([e,a],le)=>{const f=[],K=a.filter(([,,,g])=>g==="page");for(const[g,c,o,S]of K){const I=u(c,{exact:!0});if(I){f.push({src:g,type:S,path:c,params:I,loading:typeof loadingComponents=="object"?loadingComponents.get(l[o]?.find(([,s,,])=>c===s)?.[0]??l[o]?.find(([,s])=>u(s))?.[0]??null)??null:null,fallback:typeof fallbackComponents=="object"?fallbackComponents.get(y[o]?.find(([,s,,])=>c===s)?.[0]??y[o]?.find(([,s])=>u(s))?.[0]??null)??null:null,error:typeof errorBoundaryComponents=="object"?errorBoundaryComponents.get(n[o]?.find(([,s,,])=>c===s)?.[0]??n[o]?.find(([,s])=>u(s))?.[0]??null)??null:null});break}}if(f.length===0){const g=a.find(([,,c,o])=>e===c&&o==="default");if(g){const[c,o,,S]=g;f.push({src:c,type:S,path:o,params:u(o,{exact:!1})})}}return[e,f.length>0?f:null]})),m=_.pageName?.find(e=>e.path==="/"),d=O[m?.src],t=m?.error,T=m?.fallback,h=m?.loading,q=t?({key:e,...a})=>r(ErrorBoundary,{component:t,fallback:T?r(T,{}):h?r(h,{}):null,children:r(d,{...a})},e):h?({key:e,...a})=>r(Suspense,{fallback:r(h,{}),children:r(d,{...a})},e):({key:e,...a})=>r(d,{...a},e),D=typeof errorBoundaryComponents=="object"?errorBoundaryComponents.get(n.pageName?.find(([,e,,])=>e==="/")?.[0]??n.pageName?.find(([,e])=>u(e))?.[0]??null)??null:null,b=_.pageName?.find(e=>e.path==="/blogs"),E=O[b?.src],U=b?.error,W=b?.fallback,v=b?.loading,z=U?({key:e,...a})=>r(ErrorBoundary,{component:U,fallback:W?r(W,{}):v?r(v,{}):null,children:r(E,{...a})},e):v?({key:e,...a})=>r(Suspense,{fallback:r(v,{}),children:r(E,{...a})},e):({key:e,...a})=>r(E,{...a},e),L=typeof errorBoundaryComponents=="object"?errorBoundaryComponents.get(n.pageName?.find(([,e,,])=>e==="/blogs")?.[0]??n.pageName?.find(([,e])=>u(e))?.[0]??null)??null:null,k=_.pageName?.find(e=>e.path==="/editor"),B=O[k?.src],$=k?.error,F=k?.fallback,C=k?.loading,G=$?({key:e,...a})=>r(ErrorBoundary,{component:$,fallback:F?r(F,{}):C?r(C,{}):null,children:r(B,{...a})},e):C?({key:e,...a})=>r(Suspense,{fallback:r(C,{}),children:r(B,{...a})},e):({key:e,...a})=>r(B,{...a},e),M=typeof errorBoundaryComponents=="object"?errorBoundaryComponents.get(n.pageName?.find(([,e,,])=>e==="/editor")?.[0]??n.pageName?.find(([,e])=>u(e))?.[0]??null)??null:null,J=j(P);return R(V,{children:[J.map(e=>{const a=e?.id||e;return r("link",{rel:"stylesheet",href:a,precedence:"default"},a)}),r(ne,{pageName:[_.pageName?.find(e=>e.path==="/")&&q({key:"0_pageName_0",..._.pageName?.find(e=>e.path==="/")?.params??{}})||(D?r(ErrorBoundary,{component:D}):null),_.pageName?.find(e=>e.path==="/blogs")&&z({key:"0_pageName_1",..._.pageName?.find(e=>e.path==="/blogs")?.params??{}})||(L?r(ErrorBoundary,{component:L}):null),_.pageName?.find(e=>e.path==="/editor")&&G({key:"0_pageName_2",..._.pageName?.find(e=>e.path==="/editor")?.params??{}})||(M?r(ErrorBoundary,{component:M}):null)],children:r(se,{...N,...p})})]})};export{xe as default,Ce as init$};
