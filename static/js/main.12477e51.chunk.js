(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{128:function(e,t,c){},130:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(20),i=c.n(s),r=c(18),a=c.n(r),d=c(26),j=c.n(d),o=c(30),b=c(22),l=c(7),h=(c(127),c(131)),O=c(132),u=c(133),x=(c(128),c(5)),f=function(e){var t=e.id,c=e.go;e.fetchedUser;return Object(x.jsxs)(l.h,{id:t,children:[Object(x.jsx)(l.i,{children:"App"}),Object(x.jsx)(l.f,{children:Object(x.jsxs)(l.e,{className:"navigation-bar",children:[Object(x.jsx)(l.c,{size:"l",className:"navigation-button1",stretched:!0,mode:"secondary",before:Object(x.jsx)(h.a,{}),onClick:c,"data-to":"menu",children:"\u041c\u0435\u043d\u044e"}),Object(x.jsx)(l.c,{size:"l",className:"navigation-button2",stretched:!0,mode:"secondary",before:Object(x.jsx)(O.a,{}),onClick:c,"data-to":"top",children:"\u0422\u043e\u043f"}),Object(x.jsx)(l.c,{size:"l",className:"navigation-button3",stretched:!0,mode:"secondary",before:Object(x.jsx)(u.a,{}),onClick:c,"data-to":"store",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})]})}),Object(x.jsx)(l.f,{header:Object(x.jsx)(l.g,{mode:"secondary",children:"\u0420\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u043d\u0438\u0435 \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435"}),children:Object(x.jsx)(l.d,{expandable:!0,children:"Friends"})})]})},p=new URLSearchParams(window.location.search).get("vk_user_id"),m=function(e){return Object(x.jsxs)(l.h,{id:e.id,children:[Object(x.jsx)(l.i,{left:Object(x.jsx)(l.j,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(x.jsx)(l.f,{header:Object(x.jsxs)(l.g,{mode:"secondary",children:["\u0412\u0430\u0448 id: ",p," "]}),children:Object(x.jsx)(l.e,{children:Object(x.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},g=function(e){return Object(x.jsxs)(l.h,{id:e.id,children:[Object(x.jsx)(l.i,{left:Object(x.jsx)(l.j,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(x.jsx)(l.f,{children:Object(x.jsx)(l.e,{children:Object(x.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(e){return Object(x.jsxs)(l.h,{id:e.id,children:[Object(x.jsx)(l.i,{left:Object(x.jsx)(l.j,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(x.jsx)(l.f,{children:Object(x.jsx)(l.e,{children:Object(x.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(){var e=Object(n.useState)("home"),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(b.a)(i,2),d=r[0],h=r[1],O=Object(n.useState)(Object(x.jsx)(l.k,{size:"large"})),u=Object(b.a)(O,2),p=u[0],k=u[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){s(e.currentTarget.dataset.to)};return Object(x.jsx)(l.a,{children:Object(x.jsx)(l.b,{children:Object(x.jsxs)(l.l,{activePanel:c,popout:p,children:[Object(x.jsx)(f,{id:"home",fetchedUser:d,go:y}),Object(x.jsx)(m,{id:"menu",go:y}),Object(x.jsx)(g,{id:"top",go:y}),Object(x.jsx)(v,{id:"store",go:y})]})})})};a.a.send("VKWebAppInit"),i.a.render(Object(x.jsx)(k,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.12477e51.chunk.js.map