(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[1],{43:function(t,e,c){"use strict";c.r(e);var r=c(33),i=c(0),n=c(2),s=c(34),a=c(1);e.default=function(){var t=Object(n.h)().movieId,e=Object(i.useState)(null),c=Object(r.a)(e,2),h=c[0],j=c[1];return Object(i.useEffect)((function(){s.a.fetchMovieCast(t).then((function(t){var e=t.cast;return j(e)}))}),[t]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{children:h&&h.length?h.map((function(t){return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500/"+t.profile_path:null,alt:t.name,width:"200",height:"300"}),Object(a.jsx)("h3",{children:t.name}),Object(a.jsxs)("p",{children:["Character: ",t.character]})]},t.id)})):Object(a.jsx)("h2",{children:"No results"})})})}}}]);
//# sourceMappingURL=cast.2d579115.chunk.js.map