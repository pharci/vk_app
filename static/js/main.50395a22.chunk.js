(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{131:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(19),i=c.n(n),r=c(17),a=c.n(r),d=c(26),j=c.n(d),o=c(30),b=c(18),l=c(6),h=(c(130),c(134)),O=c(135),u=c(136),x=(c(131),c.p+"static/media/coin.3da6cf29.png"),f=c(4),m=function(e){var t=e.id,c=e.go,s=(e.fetchedUser,e.likes),n=e.increment;return Object(f.jsxs)(l.g,{id:t,children:[Object(f.jsx)(l.h,{children:"App"}),Object(f.jsxs)(l.e,{children:[Object(f.jsxs)(l.d,{className:"navigation-bar",children:[Object(f.jsx)(l.c,{size:"l",className:"navigation-button1",stretched:!0,mode:"secondary",before:Object(f.jsx)(h.a,{}),onClick:c,"data-to":"menu",children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)(l.c,{size:"l",className:"navigation-button2",stretched:!0,mode:"secondary",before:Object(f.jsx)(O.a,{}),onClick:c,"data-to":"top",children:"\u0422\u043e\u043f"}),Object(f.jsx)(l.c,{size:"l",className:"navigation-button3",stretched:!0,mode:"secondary",before:Object(f.jsx)(u.a,{}),onClick:c,"data-to":"store",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})]}),Object(f.jsx)(l.d,{children:Object(f.jsx)("h1",{className:"textch",children:s})})]}),Object(f.jsx)("img",{className:"button-coin",src:x,onClick:n})]})},p=function(e){return Object(f.jsxs)(l.g,{id:e.id,children:[Object(f.jsx)(l.h,{left:Object(f.jsx)(l.i,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)(l.e,{header:Object(f.jsxs)(l.f,{mode:"secondary",children:["\u0412\u0430\u0448 id: ",userId," "]}),children:Object(f.jsx)(Cell,{before:e.fetchedUser.photo_200?Object(f.jsx)(Avatar,{src:e.fetchedUser.photo_200}):null,description:e.fetchedUser.city&&e.fetchedUser.city.title?e.fetchedUser.city.title:"",children:"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name)})})]})},g=function(e){return Object(f.jsxs)(l.g,{id:e.id,children:[Object(f.jsx)(l.h,{left:Object(f.jsx)(l.i,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(f.jsx)(l.e,{children:Object(f.jsx)(l.d,{children:Object(f.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(e){return Object(f.jsxs)(l.g,{id:e.id,children:[Object(f.jsx)(l.h,{left:Object(f.jsx)(l.i,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(f.jsx)(l.e,{children:Object(f.jsx)(l.d,{children:Object(f.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(){var e=Object(s.useState)("home"),t=Object(b.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(null),r=Object(b.a)(i,2),d=r[0],h=r[1],O=Object(s.useState)(Object(f.jsx)(l.j,{size:"large"})),u=Object(b.a)(O,2),x=u[0],k=u[1];Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,s=t.data;if("VKWebAppUpdateConfig"===c){var n=document.createAttribute("scheme");n.value=s.scheme?s.scheme:"client_light",document.body.attributes.setNamedItem(n)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){n(e.currentTarget.dataset.to)},U=Object(s.useState)(0),C=Object(b.a)(U,2),N=C[0],_=C[1];return Object(f.jsx)(l.a,{children:Object(f.jsx)(l.b,{children:Object(f.jsxs)(l.k,{activePanel:c,popout:x,children:[Object(f.jsx)(m,{id:"home",fetchedUser:d,go:y,likes:N,increment:function(){_(N+1)}}),Object(f.jsx)(p,{id:"menu",fetchedUser:d,go:y}),Object(f.jsx)(g,{id:"top",go:y}),Object(f.jsx)(v,{id:"store",go:y})]})})})};a.a.send("VKWebAppInit"),i.a.render(Object(f.jsx)(k,{}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.50395a22.chunk.js.map