(this["webpackJsonplegacy-app-to-react"]=this["webpackJsonplegacy-app-to-react"]||[]).push([[0],{30:function(e,t,a){e.exports=a(51)},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(23),r=a.n(l),o=a(24),m=a(25),i=a(29),u=a(28),s=a(18),p=a.n(s),d=a(13),E=a(9),f=function(e){var t=e.feed;return c.a.createElement("div",{className:"col-md-6 item"},c.a.createElement("h4",null,t.name),c.a.createElement("p",{class:"badge badge-secondary"},"$  ".concat(t.price)),c.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:t.description}}),c.a.createElement("img",{src:t.image,height:150}))},b=function(e){var t=e.feeds;return c.a.createElement("div",{className:" row marketing "},t.map((function(e){return c.a.createElement(f,{key:e.id,feed:e})})))},h=function(e){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h2",null,e.title))},v=function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("ul",{className:"nav nav-pills pull-right"},c.a.createElement("li",null,c.a.createElement(d.b,{to:"./"},"Home")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"./about"},"About")),c.a.createElement("li",null,c.a.createElement(d.b,{to:"./contact"},"Contact"))),c.a.createElement("h3",{className:"text-muted"},"Legacy App to React "))},g=function(e){return c.a.createElement("div",null,c.a.createElement("h2",null,"Contact"))},y=function(e){return c.a.createElement("div",null,c.a.createElement("h2",null,"About"))},N=(a(50),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={jumbotronTitle:"Products catalogue",feeds:[]},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this;p.a.initializeApp({apiKey:"AIzaSyAEGUC5-Z4ZVG_NOjpWN-EwKzVAVy0iQm8",authDomain:"courses-2c401.firebaseapp.com",databaseURL:"https://courses-2c401.firebaseio.com",projectId:"courses-2c401",storageBucket:"courses-2c401.appspot.com",messagingSenderId:"566445948600",appId:"1:566445948600:web:fc688c8bb45a27b508fe4d"}),p.a.database().ref("/").on("value",(function(t){e.setState({feeds:t.val()})}))}},{key:"render",value:function(){var e=this.state,t=e.jumbotronTitle,a=e.feeds;return c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(v,null),c.a.createElement(h,{title:t}),c.a.createElement(E.c,null,c.a.createElement(E.a,{exact:!0,path:"./"},c.a.createElement(b,{feeds:a})),c.a.createElement(E.a,{path:"./contact",component:g}),c.a.createElement(E.a,{path:"./about",component:y})),c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"\xa9 demi.y.zhao@gmail.com"))))}}]),a}(n.Component));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.60b1f15c.chunk.js.map