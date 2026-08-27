const m="\uFEFF";function S(s){let e=String(s||"");e.startsWith(m)&&(e=e.slice(1));let i=null;const l=e.match(/^(?:"sep=(.)"|sep=(.))[^\n]*\r?\n/i);l&&(i=l[1]||l[2],e=e.slice(l[0].length));const t=e.slice(0,e.includes(`
`)?e.indexOf(`
`):e.length),b=i||(!t.includes(",")&&t.includes(";")?";":","),a=[];let o="",r=[],d=!1,f=1,u=1;const p=()=>{r.push(o),o=""},h=()=>{p(),r.some(c=>c.trim()!=="")&&a.push({line:u,cells:r}),r=[]};for(let c=0;c<e.length;c++){const n=e[c];d?n==='"'?e[c+1]==='"'?(o+='"',c++):d=!1:(n===`
`&&f++,o+=n):n==='"'?d=!0:n===b?p():n===`
`?(h(),f++,u=f):n!=="\r"&&(o+=n)}return(o!==""||r.length)&&h(),a}function g(s){const e=String(s??"");return/[",;\n\r]/.test(e)?`"${e.replace(/"/g,'""')}"`:e}function w(s,e=","){return s.map(i=>i.map(g).join(e)).join(`\r
`)}function R(s,e){const i=new Blob([m+w(e,";")],{type:"text/csv;charset=utf-8"}),l=URL.createObjectURL(i),t=document.createElement("a");t.href=l,t.download=s,document.body.appendChild(t),t.click(),t.remove(),URL.revokeObjectURL(l)}export{R as d,S as p};
