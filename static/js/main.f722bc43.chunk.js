(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{131:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(19),i=c.n(s),a=c(17),r=c.n(a),d=c(26),j=c.n(d),o=c(30),b=c(18),l=c(6),h=(c(130),c(134)),O=c(135),u=c(136),x=(c(131),c.p+"static/media/coin.3da6cf29.png"),m=c(4),p=function(e){var t=e.id,c=e.go,n=(e.fetchedUser,e.likes),s=e.increment;return Object(m.jsxs)(l.g,{id:t,children:[Object(m.jsx)(l.h,{children:"App"}),Object(m.jsxs)(l.e,{children:[Object(m.jsxs)(l.d,{className:"navigation-bar",children:[Object(m.jsx)(l.c,{size:"l",className:"navigation-button1",stretched:!0,mode:"secondary",before:Object(m.jsx)(h.a,{}),onClick:c,"data-to":"menu",children:"\u041c\u0435\u043d\u044e"}),Object(m.jsx)(l.c,{size:"l",className:"navigation-button2",stretched:!0,mode:"secondary",before:Object(m.jsx)(O.a,{}),onClick:c,"data-to":"top",children:"\u0422\u043e\u043f"}),Object(m.jsx)(l.c,{size:"l",className:"navigation-button3",stretched:!0,mode:"secondary",before:Object(m.jsx)(u.a,{}),onClick:c,"data-to":"store",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})]}),Object(m.jsx)(l.d,{children:Object(m.jsxs)(l.k,{children:[" className='textch' weight=\"semibold\">",n]})})]}),Object(m.jsx)("img",{className:"button-coin",src:x,onClick:s})]})},f=new URLSearchParams(window.location.search).get("vk_user_id"),g=function(e){return Object(m.jsxs)(l.g,{id:e.id,children:[Object(m.jsx)(l.h,{left:Object(m.jsx)(l.i,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(m.jsx)(l.e,{header:Object(m.jsxs)(l.f,{mode:"secondary",children:["\u0412\u0430\u0448 id: ",f," "]}),children:Object(m.jsx)(l.d,{children:Object(m.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(e){return Object(m.jsxs)(l.g,{id:e.id,children:[Object(m.jsx)(l.h,{left:Object(m.jsx)(l.i,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(m.jsx)(l.e,{children:Object(m.jsx)(l.d,{children:Object(m.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(e){return Object(m.jsxs)(l.g,{id:e.id,children:[Object(m.jsx)(l.h,{left:Object(m.jsx)(l.i,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(m.jsx)(l.e,{children:Object(m.jsx)(l.d,{children:Object(m.jsx)(l.c,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},y=function(){var e=Object(n.useState)("home"),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),a=Object(b.a)(i,2),d=a[0],h=a[1],O=Object(n.useState)(Object(m.jsx)(l.j,{size:"large"})),u=Object(b.a)(O,2),x=u[0],f=u[1];Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),f(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){s(e.currentTarget.dataset.to)},w=Object(n.useState)(0),C=Object(b.a)(w,2),z=C[0],N=C[1];return Object(m.jsx)(l.a,{children:Object(m.jsx)(l.b,{children:Object(m.jsxs)(l.l,{activePanel:c,popout:x,children:[Object(m.jsx)(p,{id:"home",fetchedUser:d,go:y,likes:z,increment:function(){N(z+1)}}),Object(m.jsx)(g,{id:"menu",go:y}),Object(m.jsx)(v,{id:"top",go:y}),Object(m.jsx)(k,{id:"store",go:y})]})})})};r.a.send("VKWebAppInit"),i.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.f722bc43.chunk.js.map