(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{126:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(21),i=c.n(n),r=c(18),d=c.n(r),a=c(26),j=c.n(a),o=c(31),l=c(20),b=c(7),h=(c(124),c(127)),O=c(128),u=c(129),x=(c(30),c.p+"static/media/coin.3da6cf29.png"),f=c(5),m=function(e){var t=e.id,c=e.go,s=(e.fetchedUser,e.likes),n=e.increment;return Object(f.jsxs)(b.l,{id:t,children:[Object(f.jsx)(b.m,{children:"App"}),Object(f.jsx)(b.i,{children:Object(f.jsx)(b.f,{children:Object(f.jsx)(b.e,{size:"l",mode:"shadow",children:Object(f.jsxs)(b.h,{className:"navigation-bar",children:[Object(f.jsx)(b.d,{size:"l",className:"navigation-button1",stretched:!0,mode:"secondary",before:Object(f.jsx)(h.a,{}),onClick:c,"data-to":"menu",children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)(b.d,{size:"l",className:"navigation-button2",stretched:!0,mode:"secondary",before:Object(f.jsx)(O.a,{}),onClick:c,"data-to":"top",children:"\u0422\u043e\u043f"}),Object(f.jsx)(b.d,{size:"l",className:"navigation-button3",stretched:!0,mode:"secondary",before:Object(f.jsx)(u.a,{}),onClick:c,"data-to":"store",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})]})})})}),Object(f.jsx)(b.i,{children:Object(f.jsx)(b.h,{children:Object(f.jsxs)("h1",{className:"textch",children:["\u0412\u0430\u0448 \u0441\u0447\u0451\u0442: ",s]})})}),Object(f.jsx)("img",{className:"button-coin",src:x,onClick:n})]})},p=function(e){return Object(f.jsxs)(b.l,{id:e.id,children:[Object(f.jsx)(b.m,{left:Object(f.jsx)(b.n,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)(b.i,{header:Object(f.jsx)(b.j,{mode:"secondary",children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c: "}),children:Object(f.jsx)(b.k,{className:"profile_href",href:"https://vk.com/id"+e.fetchedUser.id,children:Object(f.jsx)(b.g,{disabled:!0,before:e.fetchedUser.photo_200?Object(f.jsx)(b.c,{src:e.fetchedUser.photo_200}):null,description:"\u0412\u0430\u0448 id: "+e.fetchedUser.id,children:"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name)})})})]})},g=function(e){return Object(f.jsxs)(b.l,{id:e.id,children:[Object(f.jsx)(b.m,{left:Object(f.jsx)(b.n,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(f.jsx)(b.i,{children:Object(f.jsx)(b.h,{children:Object(f.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(e){return Object(f.jsxs)(b.l,{id:e.id,children:[Object(f.jsx)(b.m,{left:Object(f.jsx)(b.n,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(f.jsx)(b.i,{children:Object(f.jsx)(b.h,{children:Object(f.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(){var e=Object(s.useState)("home"),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(null),r=Object(l.a)(i,2),a=r[0],h=r[1],O=Object(s.useState)(Object(f.jsx)(b.o,{size:"large"})),u=Object(l.a)(O,2),x=u[0],k=u[1];Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d.a.subscribe((function(e){var t=e.detail,c=t.type,s=t.data;if("VKWebAppUpdateConfig"===c){var n=document.createAttribute("scheme");n.value=s.scheme?s.scheme:"client_light",document.body.attributes.setNamedItem(n)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){n(e.currentTarget.dataset.to)},U=Object(s.useState)(0),C=Object(l.a)(U,2),N=C[0],_=C[1];return Object(f.jsx)(b.a,{children:Object(f.jsx)(b.b,{children:Object(f.jsxs)(b.p,{activePanel:c,popout:x,children:[Object(f.jsx)(m,{id:"home",fetchedUser:a,go:y,likes:N,increment:function(){_(N+1)}}),Object(f.jsx)(p,{id:"menu",fetchedUser:a,go:y}),Object(f.jsx)(g,{id:"top",go:y}),Object(f.jsx)(v,{id:"store",go:y})]})})})};d.a.send("VKWebAppInit"),i.a.render(Object(f.jsx)(k,{}),document.getElementById("root"))},30:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.1baa4158.chunk.js.map