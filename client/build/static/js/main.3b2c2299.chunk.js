(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},23:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),o=(a(23),a(2)),i=a(3),u=a.n(i),s=a(4),m=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(0),s=Object(o.a)(i,2),m=s[0],d=s[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),E=f[0],b=f[1];return c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("div",{className:"form-group w-50"},c.a.createElement("label",null,"Title"),c.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",{className:"form-group w-50"},c.a.createElement("label",null,"Price"),c.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return d(e.target.value)}})),c.a.createElement("div",{className:"form-group w-50"},c.a.createElement("label",null,"Description"),c.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return b(e.target.value)}})),c.a.createElement("button",{className:"btn btn-warning",onClick:function(t){t.preventDefault(),u.a.post("http://localhost:8000/api/createNew",{Title:r,Price:m,Description:E}).then((function(t){return e.getData()})).catch((function(e){return console.log(e)}))}},"Add Product")))},d=function(e){var t=function(t){t.preventDefault(),u.a.delete("http://localhost:8000/api/product/delete/"+t.target.name).then((function(t){e.getData()})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",{className:"row pt-2"},e.products.map((function(e,a){return c.a.createElement("div",{className:"card text-center col-sm-3"},c.a.createElement("div",{className:"card-body"},c.a.createElement(s.a,{to:"/product/"+e._id},c.a.createElement("h2",null,e.Title)),c.a.createElement("button",{className:"btn btn-warning",onClick:t,name:e._id},"Delete")))})))},p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),s=i[0],p=i[1],f=function(){u.a.get("http://localhost:8000/api/products").then((function(e){r(e.data),p(!0)}))};return Object(n.useEffect)((function(){f()}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"display-4"},"Product Manager"),c.a.createElement(m,{getData:f}))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"col-12"},s&&c.a.createElement(d,{products:a,getData:f}))))},f=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),r=a[0],l=a[1];Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api/product/"+e.id).then((function(e){return l(e.data)})).catch((function(e){return console.log(e)}))}),[]);return c.a.createElement("div",{className:"container"},c.a.createElement("h2",{className:"text-center"},"Title: ",r.Title),c.a.createElement("h3",{className:"text-center"},"Price: ",r.Price),c.a.createElement("h3",{className:"text-center"},"Description: ",r.Description),c.a.createElement(s.a,{to:"/product/edit/"+r._id},c.a.createElement("button",{className:"btn btn-warning"},"Edit Product")),c.a.createElement(s.a,{to:"/products"},c.a.createElement("button",{className:"btn btn-warning"},"Go Back")),c.a.createElement("button",{className:"btn btn-warning",onClick:function(t){t.preventDefault(),u.a.delete("http://localhost:8000/api/product/delete/"+e.id).then((function(e){console.log(e),Object(s.c)("/products")})).catch((function(e){return console.log(e)}))}},"Delete"))},E=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),d=m[0],p=m[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),b=E[0],h=E[1];Object(n.useEffect)((function(){u.a.get("http://localhost:8000/api/product/".concat(e.id)).then((function(e){l(e.data.Title),p(e.data.Price),h(e.data.Description),console.log(e)})).catch((function(e){return console.log(e)}))}),[]);return c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("div",{className:"form-group w-50"},c.a.createElement("label",null,"Title"),c.a.createElement("input",{type:"text",className:"form-control",value:r,onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",{className:"form-group w-50"},c.a.createElement("label",null,"Price"),c.a.createElement("input",{type:"text",className:"form-control",value:d,onChange:function(e){return p(e.target.value)}})),c.a.createElement("div",{className:"form-group w-50"},c.a.createElement("label",null,"Description"),c.a.createElement("input",{type:"text",className:"form-control",value:b,onChange:function(e){return h(e.target.value)}})),c.a.createElement("button",{type:"button",onClick:function(t){t.preventDefault(),u.a.put("http://localhost:8000/api/product/edit/".concat(e.id),{Title:r,Price:d,Description:b}).then((function(t){return Object(s.c)("/product/"+e.id)})).catch((function(e){return console.log(e)}))},className:"btn btn-primary"},"Update Product")))};var b=function(){return c.a.createElement(s.b,null,c.a.createElement(p,{path:"/products",default:!0}),c.a.createElement(f,{path:"/product/:id"}),c.a.createElement(E,{path:"/product/edit/:id"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.3b2c2299.chunk.js.map