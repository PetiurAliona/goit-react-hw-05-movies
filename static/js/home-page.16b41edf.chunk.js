(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[2],{45:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return b}));var r=n(35);var a=n(36);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n(33),c=n(34),u=n(0),s=n(39),f=n(1);function b(){var t=Object(u.useState)([]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.useEffect)((function(){c.a.fetchMovieTrending().then((function(t){var e=t.results;return r((function(t){return[].concat(o(t),o(e))}))}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Trending today"}),n&&Object(f.jsx)(s.a,{moviesListData:n})]})}}}]);
//# sourceMappingURL=home-page.16b41edf.chunk.js.map