(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t);var s=c(0),j=c(20),n=c.n(j),r=c(18),a=c.n(r),d=c(27),i=c.n(d),b=c(31),o=c(23),O=c(6),l=(c(128),c(12)),h=c(131),x=c(132),u=c(133),f=c(3),p=function(e){var t,c,s,j=e.id,n=e.go;e.fetchedUser;return Object(f.jsxs)(O.i,{id:j,children:[Object(f.jsx)(O.j,{children:"App"}),Object(f.jsxs)(O.g,{children:[Object(f.jsxs)(O.f,{style:{display:"flex"},children:[Object(f.jsx)(O.d,(t={size:"l",stretched:!0,style:{marginRight:8}},Object(l.a)(t,"stretched",!0),Object(l.a)(t,"mode","secondary"),Object(l.a)(t,"before",Object(f.jsx)(h.a,{})),Object(l.a)(t,"onClick",n),Object(l.a)(t,"data-to","menu"),Object(l.a)(t,"children","\u041c\u0435\u043d\u044e"),t)),Object(f.jsx)(O.d,(c={size:"l",stretched:!0,style:{marginRight:8}},Object(l.a)(c,"stretched",!0),Object(l.a)(c,"mode","secondary"),Object(l.a)(c,"before",Object(f.jsx)(x.a,{})),Object(l.a)(c,"onClick",n),Object(l.a)(c,"data-to","top"),Object(l.a)(c,"children","\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),c)),Object(f.jsx)(O.d,(s={size:"l",stretched:!0,style:{}},Object(l.a)(s,"stretched",!0),Object(l.a)(s,"mode","secondary"),Object(l.a)(s,"before",Object(f.jsx)(u.a,{})),Object(l.a)(s,"onClick",n),Object(l.a)(s,"data-to","store"),Object(l.a)(s,"children","\u041c\u0430\u0433\u0430\u0437\u0438\u043d"),s))]}),Object(f.jsxs)(O.f,{children:[Object(f.jsx)(O.e,{before:Object(f.jsxs)(O.c,{shadow:!1,size:40,children:[Object(f.jsx)(h.a,{}),"\u041c\u0435\u043d\u044e"]})}),Object(f.jsx)(O.e,{before:Object(f.jsxs)(O.c,{shadow:!1,size:40,children:[Object(f.jsx)(x.a,{}),"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"]})}),Object(f.jsx)(O.e,{before:Object(f.jsxs)(O.c,{shadow:!1,size:40,children:[Object(f.jsx)(u.a,{}),"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"]})})]})]})]})},m=new URLSearchParams(window.location.search).get("vk_user_id"),g=function(e){return Object(f.jsxs)(O.i,{id:e.id,children:[Object(f.jsx)(O.j,{left:Object(f.jsx)(O.k,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(f.jsx)(O.g,{header:Object(f.jsxs)(O.h,{mode:"secondary",children:["\u0412\u0430\u0448 id: ",m," "]}),children:Object(f.jsx)(O.f,{children:Object(f.jsx)(O.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},y=function(e){return Object(f.jsxs)(O.i,{id:e.id,children:[Object(f.jsx)(O.j,{left:Object(f.jsx)(O.k,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(f.jsx)(O.g,{children:Object(f.jsx)(O.f,{children:Object(f.jsx)(O.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(e){return Object(f.jsxs)(O.i,{id:e.id,children:[Object(f.jsx)(O.j,{left:Object(f.jsx)(O.k,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(f.jsx)(O.g,{children:Object(f.jsx)(O.f,{children:Object(f.jsx)(O.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(){var e=Object(s.useState)("home"),t=Object(o.a)(e,2),c=t[0],j=t[1],n=Object(s.useState)(null),r=Object(o.a)(n,2),d=r[0],l=r[1],h=Object(s.useState)(Object(f.jsx)(O.l,{size:"large"})),x=Object(o.a)(h,2),u=x[0],m=x[1];Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,l(t),m(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,s=t.data;if("VKWebAppUpdateConfig"===c){var j=document.createAttribute("scheme");j.value=s.scheme?s.scheme:"client_light",document.body.attributes.setNamedItem(j)}})),function(){e.apply(this,arguments)}()}),[]);var v=function(e){j(e.currentTarget.dataset.to)};return Object(f.jsx)(O.a,{children:Object(f.jsx)(O.b,{children:Object(f.jsxs)(O.m,{activePanel:c,popout:u,children:[Object(f.jsx)(p,{id:"home",fetchedUser:d,go:v}),Object(f.jsx)(g,{id:"menu",go:v}),Object(f.jsx)(y,{id:"top",go:v}),Object(f.jsx)(k,{id:"store",go:v})]})})})};a.a.send("VKWebAppInit"),n.a.render(Object(f.jsx)(v,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.e4d6da50.chunk.js.map