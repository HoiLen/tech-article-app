import{j as e}from"../../jsx-runtime.REeFFd-0.mjs";import{b as d,u as m}from"../../use_queries.Bs4ezsKI.mjs";import{r as c}from"../../react-server/client/context.DPdp0zqd.mjs";import{L as u}from"../../Link.DnIcMOto.mjs";import"../../index.DdUvsOoU.mjs";const h=d;class x{constructor(r,n,i,s,a,l){this.id=r,this.title=n,this.description=i,this.author=s,this.createdAt=a,this.viewCount=l}}const o=(t,r)=>t.length<=r?t:t.slice(0,r)+"...",p=({article:t})=>{const r=o(t.title,45),n=o(t.description,100);return e.jsx(u,{to:`/articles/${t.id}`,children:e.jsxs("div",{className:`\r
          border\r
          border-gray-300\r
          rounded-lg overflow-hidden\r
          hover:bg-gray-50\r
          hover:shadow-xl\r
          transition duration-300\r
          cursor-pointer\r
          w-full h-[280px]\r
          mb-4`,children:[e.jsx("div",{className:"h-2 bg-orange-300"}),e.jsxs("div",{className:"p-6 h-[calc(280px-8px)] flex flex-col",children:[e.jsx("h3",{className:"text-xl font-bold text-orange-950 mb-2 line-clamp-2",children:r}),e.jsx("p",{className:"text-gray-600 mb-2 line-clamp-4 flex-grow",children:n}),e.jsxs("div",{className:"flex items-center mt-auto",children:[e.jsx("div",{className:"w-8 h-8 flex rounded-full bg-teal-100 items-center justify-center font-medium mr-3",children:t.author.charAt(0)}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:t.author}),e.jsx("div",{className:"text-gray-500",children:new Date(t.createdAt).toLocaleString()})]})]})]})]})})},N=()=>{const t=m(h.articles.get),[r,n]=c.useState([]);return c.useEffect(()=>{if(!t)return;const i=t?.map(s=>new x(s.id,s.title,s.description,s.author,s.createdAt,s.viewCount));n(i)},[t]),e.jsx("div",{className:"mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map(i=>e.jsx("span",{children:e.jsx(p,{article:i})},i.id))})};export{N as default};
