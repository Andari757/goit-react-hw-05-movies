"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[381],{9381:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(8683),a=t(5861),s=t(885),i=t(7757),o=t.n(i),l=t(2791),c=t(6871),u=t(4569),d=t.n(u),v=t(501),h="styles_container__O50ty",p="styles_info__zPEy1",f="styles_img__5FWT-",m=t(184);function _(e){var n,t=e.movie;return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("img",{className:f,src:null!==t&&void 0!==t&&t.poster_path?"https://image.tmdb.org/t/p/w500"+(null===t||void 0===t?void 0:t.poster_path):null,alt:"".concat(t.title," poster")}),(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)("h2",{children:t.title}),(0,m.jsxs)("span",{children:["User Score: ",10*t.vote_average,"% "]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:t.overview}),(0,m.jsx)("h4",{children:"Genres"}),(0,m.jsx)("span",{children:null===(n=t.genres)||void 0===n?void 0:n.map((function(e){return e.name})).join(", ")})]})]})})}_.defaultProps={movie:[]};var x="styles_button__Di1nP";function j(){var e,n=(0,c.s0)(),t=(0,c.TH)(),r=(null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.from)||"/";return(0,m.jsx)("button",{className:x,onClick:function(){return n(r)},children:"Go back"})}var g="styles_container__NckfA",k="styles_link__TvO0s";var b=function(){var e,n=(0,l.useState)({data:{},loading:!1,error:null}),t=(0,s.Z)(n,2),i=t[0],u=t[1],h=(0,c.UO)().id;return(0,l.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!0})})),e.next=4,d().get("https://api.themoviedb.org/3/movie/".concat(h,"?api_key=453647fe51ddb15dbe812a48a21b448b&language=en-US"));case 4:n=e.sent,t=n.data,u((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1,data:t})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),u((function(n){return(0,r.Z)((0,r.Z)({},n),{},{loading:!1,error:e.t0.message})}));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)(j,{}),i.loading&&(0,m.jsx)("p",{children:"...loading"}),(null===(e=i.data)||void 0===e?void 0:e.title)&&(0,m.jsx)(_,{movie:i.data}),(0,m.jsx)(v.rU,{className:k,to:"cast",children:"Cast"}),(0,m.jsx)(v.rU,{className:k,to:"reviews",children:"Reviews"}),(0,m.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=381.8103dd66.chunk.js.map