(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{128:function(e,t,c){},130:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(19),i=c.n(s),r=c(17),a=c.n(r),j=c(26),d=c.n(j),o=c(30),b=c(22),l=c(6),h=(c(127),c(131)),O=c(132),u=c(133),x=c(134),f=(c(128),c(5)),m=function(e){var t=e.id,c=e.go;e.fetchedUser;return Object(f.jsxs)(l.i,{id:t,children:[Object(f.jsx)(l.j,{children:"App"}),Object(f.jsx)(l.g,{children:Object(f.jsxs)(l.f,{className:"navigation-bar",children:[Object(f.jsx)(l.d,{size:"l",className:"navigation-button1",stretched:!0,mode:"secondary",before:Object(f.jsx)(h.a,{}),onClick:c,"data-to":"menu",children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)(l.d,{size:"l",className:"navigation-button2",stretched:!0,mode:"secondary",before:Object(f.jsx)(O.a,{}),onClick:c,"data-to":"top",children:"\u0422\u043e\u043f"}),Object(f.jsx)(l.d,{size:"l",className:"navigation-button3",stretched:!0,mode:"secondary",before:Object(f.jsx)(u.a,{}),onClick:c,"data-to":"store",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})]})}),Object(f.jsx)(l.g,{children:Object(f.jsx)(l.e,{className:"button-coin",before:Object(f.jsx)(l.c,{shadow:!1,size:100,mode:"image",children:Object(f.jsx)(x.a,{})})})})]})},p=new URLSearchParams(window.location.search).get("vk_user_id"),g=function(e){return Object(f.jsxs)(l.i,{id:e.id,children:[Object(f.jsx)(l.j,{left:Object(f.jsx)(l.k,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)(l.g,{header:Object(f.jsxs)(l.h,{mode:"secondary",children:["\u0412\u0430\u0448 id: ",p," "]}),children:Object(f.jsx)(l.f,{children:Object(f.jsx)(l.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(e){return Object(f.jsxs)(l.i,{id:e.id,children:[Object(f.jsx)(l.j,{left:Object(f.jsx)(l.k,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(f.jsx)(l.g,{children:Object(f.jsx)(l.f,{children:Object(f.jsx)(l.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(e){return Object(f.jsxs)(l.i,{id:e.id,children:[Object(f.jsx)(l.j,{left:Object(f.jsx)(l.k,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(f.jsx)(l.g,{children:Object(f.jsx)(l.f,{children:Object(f.jsx)(l.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},y=function(){var e=Object(n.useState)("home"),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(b.a)(i,2),j=r[0],h=r[1],O=Object(n.useState)(Object(f.jsx)(l.l,{size:"large"})),u=Object(b.a)(O,2),x=u[0],p=u[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),p(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){s(e.currentTarget.dataset.to)};return Object(f.jsx)(l.a,{children:Object(f.jsx)(l.b,{children:Object(f.jsxs)(l.m,{activePanel:c,popout:x,children:[Object(f.jsx)(m,{id:"home",fetchedUser:j,go:y}),Object(f.jsx)(g,{id:"menu",go:y}),Object(f.jsx)(v,{id:"top",go:y}),Object(f.jsx)(k,{id:"store",go:y})]})})})};a.a.send("VKWebAppInit"),i.a.render(Object(f.jsx)(y,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.25851d19.chunk.js.map