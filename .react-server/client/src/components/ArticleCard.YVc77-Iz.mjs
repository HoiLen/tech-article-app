import{j as e}from"../../jsx-runtime.REeFFd-0.mjs";import{L as l}from"../../Link.DnIcMOto.mjs";import"../../react-server/client/context.DPdp0zqd.mjs";const s=(r,n)=>r.length<=n?r:r.slice(0,n)+"...",c=({article:r})=>{const n=s(r.title,45),t=s(r.description,100);return e.jsx(l,{to:`/articles/${r.id}`,children:e.jsxs("div",{className:`\r
          border\r
          border-gray-300\r
          rounded-lg overflow-hidden\r
          hover:bg-gray-50\r
          hover:shadow-xl\r
          transition duration-300\r
          cursor-pointer\r
          w-full h-[280px]\r
          mb-4`,children:[e.jsx("div",{className:"h-2 bg-orange-300"}),e.jsxs("div",{className:"p-6 h-[calc(280px-8px)] flex flex-col",children:[e.jsx("h3",{className:"text-xl font-bold text-orange-950 mb-2 line-clamp-2",children:n}),e.jsx("p",{className:"text-gray-600 mb-2 line-clamp-4 flex-grow",children:t}),e.jsxs("div",{className:"flex items-center mt-auto",children:[e.jsx("div",{className:"w-8 h-8 flex rounded-full bg-teal-100 items-center justify-center font-medium mr-3",children:r.author.charAt(0)}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:r.author}),e.jsx("div",{className:"text-gray-500",children:new Date(r.createdAt).toLocaleString()})]})]})]})]})})};export{c as default,s as truncateText};
