(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(11),a(1)),o=a.n(s),u=a(5),m=a(2);var i=function(e){var t=e.movies;return r.a.createElement("div",{className:"card-list"},t.filter(function(e){return e.poster_path}).map(function(e){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:e.tilte}),r.a.createElement("div",{className:"card--content"},r.a.createElement("h3",{className:"card--title"},e.title," "),r.a.createElement("p",null,r.a.createElement("small",null,"RELEASE DATE: ",e.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"RATING: ",e.vote_average)),r.a.createElement("p",{className:"card--desc"},e.overview)))}))};var p=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(m.a)(l,2),p=s[0],v=s[1],E=function(){var e=Object(u.a)(o.a.mark(function e(t){var n,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("submit call url"),n="https://api.themoviedb.org/3/search/movie?api_key=6d87b9b87b64ffa1b19ed30b41ee5c82&language=en-US&query=".concat(a,"&page=1"),e.prev=3,e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:c=e.sent,console.log(c.results),v(c.results),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:case"end":return e.stop()}},e,null,[[3,14]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",onSubmit:E},r.a.createElement("label",{htmlFor:"query",className:"label"},"Movie Name"),r.a.createElement("input",{type:"text",className:"input",name:"query",placeholder:"i.e Jurassic Park",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button"},"Submit")),r.a.createElement(i,{movies:p}))};function v(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Movie Search"),r.a.createElement(p,null))}var E=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),E)},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.42a0113f.chunk.js.map