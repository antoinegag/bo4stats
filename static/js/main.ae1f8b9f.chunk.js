(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(262)},139:function(e,t,a){},141:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(33),c=a.n(r),o=(a(136),a(139),a(14)),s=a(15),u=a(20),i=a(19),m=a(21),h=(a(141),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("header",{className:"col12 colm12 colt12 header"},l.a.createElement("h1",null,"BO4Stats"))}}]),t}(n.Component)),E=a(267),d=a(110),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a,{icon:l.a.createElement(d.a,{name:"search",inverted:!0,circular:!0,link:!0}),placeholder:"Search..."})}}]),t}(n.Component),p=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"search"},l.a.createElement("h1",null,"Search user"),l.a.createElement(f,null))}}]),t}(n.Component),b=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"query",value:function(e){return fetch(e).then(function(e){return e.json()})}},{key:"post",value:function(e,t){return fetch(e,{method:"POST",body:JSON.stringify(t)}).then(function(e){return e.json()})}}]),e}(),O="https://cod-api.theapinetwork.com/api/",v={VALIDATE:O+"validate",STATS:O+"stats",MATCHES:O+"matches"},j={BO4:"bo4",BO3:"bo3",WWII:"wwii",INFINITY_WAR:"iw"},k={PSN:"psn",XBOX_LIVE:"xbl",STEAM:"steam",BATTLE_NET:"bnet"};function w(e){return e.replace("#","%23")}var y=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"validate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.BO4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k.BATTLE_NET;return b.query("".concat(v.VALIDATE,"/").concat(t,"/").concat(w(e),"/").concat(a))}},{key:"getUserStats",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.BO4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:k.BATTLE_NET;return console.log("".concat(v.STATS,"/").concat(t,"/").concat(w(e),"/").concat(a)),b.query("".concat(v.STATS,"/").concat(t,"/").concat(w(e),"/").concat(a))}}]),e}(),C=a(268),T=a(120),g=a.n(T);var A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={error:null,shouldUpdate:!0,isLoaded:!1,data:[],users:["izotov#1214","ozakin#11581","cremz#1991","yskio#1216"]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=[];this.state.users.forEach(function(a){t.push(y.getUserStats(a).then(function(t){e.state.data[a]=t},function(t){e.setState({isLoaded:!0,error:t})}))}),Promise.all(t).then(function(){e.state.isLoaded=!0,e.forceUpdate()})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.data;return t?l.a.createElement("div",null,"Error: ",t.message):a?l.a.createElement("div",null,l.a.createElement(C.a,{celled:!0,inverted:!0},l.a.createElement(C.a.Header,null,l.a.createElement(C.a.Row,null,l.a.createElement(C.a.HeaderCell,null),this.state.users.map(function(e){return l.a.createElement(C.a.HeaderCell,null,e)}))),l.a.createElement(C.a.Body,null,l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"Longest Killstreak"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,n[e].stats.longestkillstreak)})),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"Current win streak"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,n[e].stats.curwinstreak)})),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"Playtime"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,function(e){var t=g.a.duration(1e3*e),a=Math.floor(t.asDays()),n=Math.floor(t.asHours()-24*a);return"".concat(a,"d ").concat(n,"h")}(n[e].stats.timeplayed))})),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"K/D"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,(n[e].stats.kills/n[e].stats.deaths).toFixed(2))})),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"EKIA/D"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,(n[e].stats.ekia/n[e].stats.deaths).toFixed(2))})),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"Accuracy"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,function(e,t){var a=(e/t*100).toFixed(2);return"".concat(a,"%")}(n[e].stats.hits,n[e].stats.misses))})),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"Total kills"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,n[e].stats.kills)})),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"Assists"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,function(e,t){var a=e-t,n=(100*a/e).toFixed(0);return"".concat(a," (").concat(n,"%)")}(n[e].stats.ekia,n[e].stats.kills))})),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"W/L"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,(n[e].stats.wins/n[e].stats.losses).toFixed(2))})),l.a.createElement(C.a.Row,null,l.a.createElement(C.a.Cell,null,"Prestige-Level"),this.state.users.map(function(e){return l.a.createElement(C.a.Cell,null,n[e].stats.prestige," - ",n[e].stats.level)}))))):l.a.createElement("div",null,"Loading...")}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("main",{className:"col12 colm12 colt12"},l.a.createElement(p,null),l.a.createElement(A,null))}}]),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"col12 colm12 colt12"},l.a.createElement("a",{href:"www.github.com/Poke1650/bo4stats"},"Fork on Github ",l.a.createElement(d.a,{name:"github",size:"large"})))}}]),t}(n.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null),l.a.createElement(S,null),l.a.createElement(L,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,2,1]]]);
//# sourceMappingURL=main.ae1f8b9f.chunk.js.map