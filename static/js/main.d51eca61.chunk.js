(this.webpackJsonpvk_app=this.webpackJsonpvk_app||[]).push([[0],{126:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(21),i=c.n(n),a=c(18),r=c.n(a),d=c(26),j=c.n(d),o=c(31),l=c(20),b=c(7),h=(c(124),c(127)),O=c(128),x=c(129),u=(c(30),c.p+"static/media/coin.3da6cf29.png"),m=c(5);console.log("4");var f=function(e){var t=e.id,c=e.go,s=(e.fetchedUser,e.likes),n=e.increment;return Object(m.jsxs)(b.l,{id:t,children:[Object(m.jsx)(b.m,{children:"App"}),Object(m.jsx)(b.i,{children:Object(m.jsx)(b.f,{size:"l",children:Object(m.jsx)(b.e,{mode:"shadow",children:Object(m.jsxs)(b.h,{className:"navigation-bar",children:[Object(m.jsx)(b.d,{size:"l",className:"navigation-button1",stretched:!0,mode:"secondary",before:Object(m.jsx)(h.a,{}),onClick:c,"data-to":"menu",children:"\u041c\u0435\u043d\u044e"}),Object(m.jsx)(b.d,{size:"l",className:"navigation-button2",stretched:!0,mode:"secondary",before:Object(m.jsx)(O.a,{}),onClick:c,"data-to":"top",children:"\u0422\u043e\u043f"}),Object(m.jsx)(b.d,{size:"l",className:"navigation-button3",stretched:!0,mode:"secondary",before:Object(m.jsx)(x.a,{}),onClick:c,"data-to":"store",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"})]})})})}),Object(m.jsx)(b.i,{children:Object(m.jsx)(b.f,{size:"s",children:Object(m.jsxs)(b.e,{mode:"shadow",className:"Card_balance",children:[Object(m.jsx)(b.p,{level:"3",className:"text_head1",weight:"medium",children:"\u0411\u0430\u043b\u0430\u043d\u0441"}),Object(m.jsx)(b.p,{className:"text_head1",level:"1",weight:"heavy",children:s})]})})}),Object(m.jsx)("img",{className:"button-coin",src:u,onClick:n})]})},p=function(e){return Object(m.jsxs)(b.l,{id:e.id,children:[Object(m.jsx)(b.m,{left:Object(m.jsx)(b.n,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0435\u043d\u044e"}),Object(m.jsx)(b.i,{header:Object(m.jsx)(b.j,{mode:"secondary",children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c: "}),children:Object(m.jsx)(b.k,{className:"profile_href",href:"https://vk.com/id"+e.fetchedUser.id,children:Object(m.jsx)(b.g,{disabled:!0,before:e.fetchedUser.photo_200?Object(m.jsx)(b.c,{src:e.fetchedUser.photo_200}):null,description:"\u0412\u0430\u0448 id: "+e.fetchedUser.id,children:"".concat(e.fetchedUser.first_name," ").concat(e.fetchedUser.last_name)})})})]})},g=function(e){return Object(m.jsxs)(b.l,{id:e.id,children:[Object(m.jsx)(b.m,{left:Object(m.jsx)(b.n,{onClick:e.go,"data-to":"home"}),children:"\u0422\u043e\u043f"}),Object(m.jsx)(b.i,{children:Object(m.jsx)(b.h,{children:Object(m.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},v=function(e){return Object(m.jsxs)(b.l,{id:e.id,children:[Object(m.jsx)(b.m,{left:Object(m.jsx)(b.n,{onClick:e.go,"data-to":"home"}),children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"}),Object(m.jsx)(b.i,{children:Object(m.jsx)(b.h,{children:Object(m.jsx)(b.d,{stretched:!0,size:"l",mode:"secondary",children:"\u041a\u043d\u043e\u043f\u043a\u0430"})})})]})},k=function(){var e=Object(s.useState)("home"),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(null),a=Object(l.a)(i,2),d=a[0],h=a[1],O=Object(s.useState)(Object(m.jsx)(b.o,{size:"large"})),x=Object(l.a)(O,2),u=x[0],k=x[1];Object(s.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,h(t),k(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,c=t.type,s=t.data;if("VKWebAppUpdateConfig"===c){var n=document.createAttribute("scheme");n.value=s.scheme?s.scheme:"client_light",document.body.attributes.setNamedItem(n)}})),function(){e.apply(this,arguments)}()}),[]);var y=function(e){n(e.currentTarget.dataset.to)},U=Object(s.useState)(0),_=Object(l.a)(U,2),N=_[0],C=_[1];return Object(m.jsx)(b.a,{children:Object(m.jsx)(b.b,{children:Object(m.jsxs)(b.q,{activePanel:c,popout:u,children:[Object(m.jsx)(f,{id:"home",fetchedUser:d,go:y,likes:N,increment:function(){C(N+1)}}),Object(m.jsx)(p,{id:"menu",fetchedUser:d,go:y}),Object(m.jsx)(g,{id:"top",go:y}),Object(m.jsx)(v,{id:"store",go:y})]})})})};r.a.send("VKWebAppInit"),i.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))},30:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.d51eca61.chunk.js.map