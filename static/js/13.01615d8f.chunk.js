(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{699:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var c,a,r,i,s,o,j,u,b,l,O,d,p=n(51),f=n(0),x=n(3),h=n(39),m=n(171),g=n(176),v=n(4),w=n.n(v),S=n(15),k=n(22),z=n(67),y=n(13),B=n.n(y),P=n(676),T=n(16),C=n(32),E=n(40),N=n(74),R=n(675),F=n(130),H=function(){var e=Object(f.useState)([]),t=Object(k.a)(e,2),n=t[0],c=t[1],a=Object(z.m)().account,r=Object(F.a)().fastRefresh;return Object(f.useEffect)((function(){a&&function(){var e=Object(S.a)(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.a.map((function(e){return{address:Object(E.d)(),name:"pendingPts",params:[e.pid,a]}})),e.next=3,Object(C.a)(N,t);case 3:n=e.sent,r=R.a.map((function(e,t){return Object(T.a)(Object(T.a)({},e),{},{balance:new B.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},L=n(677),$=n(685),D=n(12),Q=function(e){var t=e.value,n=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,r=e.prefix,i=Object($.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),s=i.countUp,o=i.update,j=Object(f.useRef)(o);return Object(f.useEffect)((function(){j.current(t)}),[t,j]),Object(D.jsxs)(h.B,{bold:!0,fontSize:a,children:[r,s]})},W=function(e){var t=e.earningsSum,n=Object(m.a)();return Object(z.m)().account?Object(D.jsx)(Q,{value:t}):Object(D.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},A=function(e){var t=e.cakeBalance,n=Object(m.a)();return Object(z.m)().account?Object(D.jsx)(Q,{value:t,fontSize:"24px"}):Object(D.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},J=n(109),M=n(270),U=n(85),V=n(678),Y=function(e){var t=Object(f.useState)(new B.a(0)),n=Object(k.a)(t,2),c=n[0],a=n[1],r=Object(z.m)(),i=r.account,s=r.ethereum,o=Object(F.a)().fastRefresh;return Object(f.useEffect)((function(){i&&s&&function(){var t=Object(S.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(V.b)(s,e,i);case 2:n=t.sent,a(new B.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,s,e,o]),c},q=function(){var e=Object(f.useState)([]),t=Object(k.a)(e,2),n=t[0],c=t[1],a=Object(z.m)().account,r=Object(F.a)().fastRefresh;return Object(f.useEffect)((function(){a&&function(){var e=Object(S.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.a.map((function(e){return{address:Object(E.d)(),name:"pendingPts",params:[e.pid,a]}})),e.next=3,Object(C.a)(N,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},G=n(666),I=Object(x.e)(h.h)(c||(c=Object(p.a)(["\n  background-image: url('/images/pts/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),K=x.e.div(a||(a=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),X=x.e.img(r||(r=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),Z=x.e.div(i||(i=Object(p.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),_=x.e.div(s||(s=Object(p.a)(["\n  margin-top: 24px;\n"]))),ee=function(){var e=Object(f.useState)(!1),t=Object(k.a)(e,2),n=t[0],c=t[1],a=Object(z.m)().account,r=Object(m.a)(),i=H(),s=Object(G.a)(Y(Object(E.a)())),o=Object(J.f)().toNumber(),j=q().reduce((function(e,t){return e+new B.a(t).div(new B.a(10).pow(18)).toNumber()}),0),u=i.filter((function(e){return e.balance.toNumber()>0})),b=Object(P.a)(u.map((function(e){return e.pid}))).onReward,l=Object(f.useCallback)(Object(S.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,b();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[b]);return Object(D.jsx)(I,{children:Object(D.jsxs)(h.i,{children:[Object(D.jsx)(h.n,{size:"xl",mb:"24px",children:r(542,"Farms & Staking")}),Object(D.jsx)(X,{src:"/images/pts/2.png",alt:"cake logo",width:64,height:64}),Object(D.jsxs)(K,{children:[Object(D.jsx)(Z,{children:r(544,"PTS to Harvest")}),Object(D.jsx)(W,{earningsSum:j}),Object(D.jsxs)(Z,{children:["~$",(o*j).toFixed(2)]})]}),Object(D.jsxs)(K,{children:[Object(D.jsx)(Z,{children:r(546,"PTS in Wallet")}),Object(D.jsx)(A,{cakeBalance:s}),Object(D.jsxs)(Z,{children:["~$",(o*s).toFixed(2)]})]}),Object(D.jsx)(_,{children:a?Object(D.jsx)(h.d,{id:"harvest-all",disabled:u.length<=0||n,onClick:l,fullWidth:!0,children:n?r(548,"Collecting PTS"):r(999,"Harvest all (".concat(u.length,")"))}):Object(D.jsx)(L.a,{fullWidth:!0})})]})})},te=n(673),ne=Object(x.e)(h.h)(o||(o=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ce=x.e.div(j||(j=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ae=function(){var e=Object(m.a)(),t=function(){var e=Object(F.a)().slowRefresh,t=Object(f.useState)(),n=Object(k.a)(t,2),c=n[0],a=n[1];return Object(f.useEffect)((function(){function e(){return(e=Object(S.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(U.a)(M,Object(E.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,a(new B.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(f.useState)(new B.a(0)),n=Object(k.a)(t,2),c=n[0],a=n[1],r=Object(F.a)().slowRefresh;return Object(f.useEffect)((function(){!function(){var e=Object(S.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(U.a)(M,Object(E.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,a(new B.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,r]),c}(Object(E.a)()),c=Object(J.c)(),a=Object(J.f)(),r=t?t.minus(n):new te.a(0),i=Object(G.a)(r),s=a.times(r),o=0;return c&&c[0]&&c[0].ptsPerBlock&&(o=new te.a(c[0].ptsPerBlock).div(new te.a(10).pow(18)).toNumber()),Object(D.jsx)(ne,{children:Object(D.jsxs)(h.i,{children:[Object(D.jsx)(h.n,{size:"xl",mb:"24px",children:e(534,"Pts Stats")}),Object(D.jsxs)(ce,{children:[Object(D.jsx)(h.B,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(D.jsx)(Q,{fontSize:"14px",value:Object(G.a)(s),decimals:0,prefix:"$"})]}),Object(D.jsxs)(ce,{children:[Object(D.jsx)(h.B,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(D.jsx)(Q,{fontSize:"14px",value:Object(G.a)(t),decimals:0})]}),Object(D.jsxs)(ce,{children:[Object(D.jsx)(h.B,{fontSize:"14px",children:e(538,"Total Burned")}),Object(D.jsx)(Q,{fontSize:"14px",value:Object(G.a)(n),decimals:0})]}),Object(D.jsxs)(ce,{children:[Object(D.jsx)(h.B,{fontSize:"14px",children:e(10004,"Circulating Supply")}),i&&Object(D.jsx)(Q,{fontSize:"14px",value:i,decimals:0})]}),Object(D.jsxs)(ce,{children:[Object(D.jsx)(h.B,{fontSize:"14px",children:e(540,"New PTS/block")}),Object(D.jsx)(h.B,{bold:!0,fontSize:"14px",children:o})]})]})})},re=Object(x.e)(h.h)(u||(u=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ie=function(){var e=Object(m.a)(),t=Object(J.g)();return Object(D.jsx)(re,{children:Object(D.jsxs)(h.i,{children:[Object(D.jsx)(h.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(Q,{value:t.toNumber(),prefix:"$",decimals:2}),Object(D.jsx)(h.B,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},se=n(696),oe=Object(x.e)(h.h)(b||(b=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),je=(x.e.div(l||(l=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(m.a)();return Object(D.jsx)(oe,{children:Object(D.jsxs)(h.i,{children:[Object(D.jsx)(h.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(D.jsx)(se.a,{dataSource:{sourceType:"profile",screenName:"printershares"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),ue=x.e.div(O||(O=Object(p.a)(["\n  align-items: center;\n  background-image: url('/images/pts/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/pts/3.png'), url('/images/pts/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),be=Object(x.e)(h.b)(d||(d=Object(p.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),le=function(){var e=Object(m.a)();return Object(D.jsxs)(g.a,{children:[Object(D.jsxs)(ue,{children:[Object(D.jsx)(h.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"PrinterShares")}),Object(D.jsx)(h.B,{children:e(578,"Yield Farming Protocol on Binance Smart Chain.")})]}),Object(D.jsx)("div",{children:Object(D.jsxs)(be,{children:[Object(D.jsx)(ee,{}),Object(D.jsx)(je,{}),Object(D.jsx)(ae,{}),Object(D.jsx)(ie,{})]})})]})}}}]);
//# sourceMappingURL=13.01615d8f.chunk.js.map