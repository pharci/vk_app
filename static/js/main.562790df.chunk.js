(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{127:function(e,t,c){},129:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(21),i=c.n(s),r=c(18),a=c.n(r),d=c(26),j=c.n(d),o=c(30),b=c(20),l=c(7),h=(c(126),c(130)),O=c(131),u=c(132),x=(c(127),c.p+"static/media/coin.3da6cf29.png"),f=c(5),m=function(e){var t=e.id,c=e.go,n=(e.fetchedUser,e.likes),s=e.increment;return Object(f.jsxs)(l.i,{id:t,children:[Object(f.jsx)(l.j,{children:"App"}),Object(f.jsxs)(l.g,{children:[Object(f.jsxs)(l.f,{className:"navigation-bar",children:[Object(f.jsx)(l.d,{size:"l",className:"navigation-button1",stretched:!0,mode:"secondary",before:Object(f.jsx)(h.a,{}),onClick:c,"data-to":"menu",children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)(l.d,{size:"l",className:"navigation-button2",stretched:!0,mode:"secondary",before:Object(f.jsx)(O.a,{}),onClick:c,"data-to":"top",children:"\u0422\u043e\u043f"}),Object(f.jsx)(l.d,{size:"l",className:"navigation-button3",stretched:!0,mode:"secondary",before:Object(f.jsx)(u.a,{}),onClick:c,"data-to":"store",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})]}),Object(f.jsx)(l.f,{children:Object(f.jsx)("h1",{className:"textch",children:n})})]}),Object(f.jsx)("img",{className:"button-coin",src:x,onClick:s})]})},p=function(e){return Object(f.jsxs)(l.i,{id:e.id,children:[Object(f.jsx)(l.j,{left:Object(f.jsx)(l.k,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)(l.g,{header:Object(f.jsx)(l.h,{mode:"secondary",children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c: "}),children:Object(f.jsx)("a",{href:"https://vk.com/id"+e.fetchedUser.id,children:Object(f.jsx)(l.e,{before:e.fetchedUser.photo_200?Object(f.jsx)(l.c,{src:e.fetchedUser.photo_200}):null,description:"\u0412\u0430\u0448 id: "+e.fetchedUser.id,children:"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name)})})})]})},g=function(e){return Object(f.jsxs)(l.i,{id:e.id,children:[Object(f.jsx)(l.j,{left:Object(f.jsx)(l.k,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(f.jsx)(l.g,{children:Object(f.jsx)(l.f,{children:Object(f.jsx)(l.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(e){return Object(f.jsxs)(l.i,{id:e.id,children:[Object(f.jsx)(l.j,{left:Object(f.jsx)(l.k,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(f.jsx)(l.g,{children:Object(f.jsx)(l.f,{children:Object(f.jsx)(l.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(){var e=Object(n.useState)("home"),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(b.a)(i,2),d=r[0],h=r[1],O=Object(n.useState)(Object(f.jsx)(l.l,{size:"large"})),u=Object(b.a)(O,2),x=u[0],v=u[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){s(e.currentTarget.dataset.to)},U=Object(n.useState)(0),C=Object(b.a)(U,2),N=C[0],_=C[1];return Object(f.jsx)(l.a,{children:Object(f.jsx)(l.b,{children:Object(f.jsxs)(l.m,{activePanel:c,popout:x,children:[Object(f.jsx)(m,{id:"home",fetchedUser:d,go:y,likes:N,increment:function(){_(N+1)}}),Object(f.jsx)(p,{id:"menu",fetchedUser:d,go:y}),Object(f.jsx)(g,{id:"top",go:y}),Object(f.jsx)(k,{id:"store",go:y})]})})})};a.a.send("VKWebAppInit"),i.a.render(Object(f.jsx)(v,{}),document.getElementById("root"))}},[[129,1,2]]]);
//# sourceMappingURL=main.562790df.chunk.js.map