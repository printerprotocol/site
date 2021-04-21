(this["webpackJsonpprintershares-frontend"]=this["webpackJsonpprintershares-frontend"]||[]).push([[12],{781:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return bn}));var c=t(16),r=t(23),a=t(0),s=t.n(a),o=t(31),i=t(63),l=t(12),b=t.n(l),j=t(75),d=t(41),u=t(754);u.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new u.a(10);var x,p,O=new u.a(10512e3),m=t(56),h=t(3),f=h.e.div(x||(x=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  & > * {\n    min-width: 280px;\n    max-width: 31.5%;\n    width: 100%;\n    margin: 0 8px;\n    margin-bottom: 32px;\n  }\n"]))),k=t(192),g=t(113),y=t(134),v=t(133),S=t(18),w=t(188),T=t(11),C=h.e.div(p||(p=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.primary})),B=function(e){var n=e.onClick,t=e.expanded;return Object(T.jsxs)(C,{"aria-label":"Hide or show expandable content",role:"button",onClick:function(){return n()},children:[Object(T.jsx)(d.B,{color:"primary",bold:!0,children:t?"Hide":"Details"}),t?Object(T.jsx)(d.k,{}):Object(T.jsx)(d.j,{})]})};B.defaultProps={expanded:!1};var A,P,q,D,I,z,F,L,N,E,M,G,Q,R,H,W,U,V,X,J,$,_,K,Y,Z,ee,ne,te,ce=B,re=function(e){var n=e.quoteTokenAdresses,t=e.quoteTokenSymbol,c=e.tokenAddresses,r="BNB"===t?"ETH":n[56],a=c[56];return"".concat(r,"/").concat(a)},ae=h.e.div(A||(A=Object(m.a)(["\n  margin-top: 24px;\n"]))),se=Object(h.e)(d.r)(P||(P=Object(m.a)(["\n  text-decoration: none;\n  font-weight: normal;\n  color: ",";\n  display: flex;\n  align-items: center;\n\n  svg {\n    padding-left: 4px;\n    height: 18px;\n    width: auto;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.primary})),oe=function(e){var n=e.isTokenOnly,t=e.bscScanAddress,c=e.removed,r=e.totalValueFormated,a=e.lpLabel,s=e.quoteTokenAdresses,o=e.quoteTokenSymbol,i=e.tokenAddresses,l=Object(w.a)(),b=re({quoteTokenAdresses:s,quoteTokenSymbol:o,tokenAddresses:i});return Object(T.jsxs)(ae,{children:[Object(T.jsxs)(d.m,{justifyContent:"space-between",children:[Object(T.jsxs)(d.B,{children:[l(316,"Stake"),":"]}),Object(T.jsx)(se,{href:n?"https://exchange.printershares.finance/#/swap/".concat(i[56]):"https://exchange.printershares.finance/#/add/".concat(b),children:a})]}),!c&&Object(T.jsxs)(d.m,{justifyContent:"space-between",children:[Object(T.jsxs)(d.B,{children:[l(23,"Total Liquidity"),":"]}),Object(T.jsx)(d.B,{children:r})]}),Object(T.jsx)(d.m,{justifyContent:"flex-start",children:Object(T.jsx)(d.q,{external:!0,href:t,bold:!1,children:l(356,"View on BscScan")})})]})},ie=function(){return Object(T.jsx)(d.A,{variant:"success",outline:!0,startIcon:Object(T.jsx)(d.D,{}),children:"No Fees"})},le=Object(h.e)(d.m)(q||(q=Object(m.a)(["\n  svg {\n    margin-right: 0.25rem;\n  }\n"]))),be=Object(h.e)(d.A)(D||(D=Object(m.a)(["\n  margin-left: 4px;\n"]))),je=function(e){var n=e.lpLabel,t=e.multiplier,c=(e.risk,e.farmImage),r=e.tokenSymbol,a=e.depositFee;return Object(T.jsxs)(le,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(T.jsx)(d.p,{src:"/images/farms/".concat(c,".png"),alt:r,width:64,height:64}),Object(T.jsxs)(d.m,{flexDirection:"column",alignItems:"flex-end",children:[Object(T.jsx)(d.n,{mb:"4px",children:n}),Object(T.jsxs)(d.m,{justifyContent:"center",children:[0===a?Object(T.jsx)(ie,{}):null,Object(T.jsx)(be,{variant:"secondary",children:t})]})]})]})},de=t(4),ue=t.n(de),xe=t(15),pe=t(759),Oe=t(758),me=(t(753),t(751)),he=t(752),fe=function(e){var n=Object(i.b)(),t=Object(j.m)().account,c=Object(he.c)();return{onStake:Object(a.useCallback)(function(){var r=Object(xe.a)(ue.a.mark((function r(a){var s;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(me.i)(c,e,a,t);case 2:s=r.sent,n(Object(v.a)(t)),console.info(s);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[t,n,c,e])}},ke=function(e){var n=Object(i.b)(),t=Object(j.m)().account,c=Object(he.c)();return{onUnstake:Object(a.useCallback)(function(){var r=Object(xe.a)(ue.a.mark((function r(a){var s;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(me.j)(c,e,a,t);case 2:s=r.sent,n(Object(v.a)(t)),console.info(s);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),[t,n,c,e])}},ge=t(747),ye=h.e.div(I||(I=Object(m.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),ve=function(e){var n,t=e.size,c=void 0===t?"md":t,r=Object(a.useContext)(h.a).spacing;switch(c){case"lg":n=r[6];break;case"sm":n=r[2];break;case"md":default:n=r[4]}return Object(T.jsx)(ye,{size:n})},Se=h.e.div(z||(z=Object(m.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  margin: 0;\n  padding: ","px;\n"])),(function(e){return e.theme.colors.primaryDark}),(function(e){return e.theme.spacing[4]})),we=h.e.div(F||(F=Object(m.a)(["\n  flex: 1;\n  text-align: center;\n"]))),Te=function(e){var n=e.children,t=s.a.Children.toArray(n).length;return Object(T.jsx)(Se,{children:s.a.Children.map(n,(function(e,n){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(we,{children:e}),n<t-1&&Object(T.jsx)(ve,{})]})}))})},Ce=h.e.div(L||(L=Object(m.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ",";\n  display: flex;\n  height: 72px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.spacing[3]})),Be=h.e.input(N||(N=Object(m.a)(["\n  width: 100%;\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.colors.primary})),Ae=function(e){var n=e.endAdornment,t=e.onChange,c=e.placeholder,r=e.startAdornment,a=e.value;return Object(T.jsxs)(Ce,{children:[!!r&&r,Object(T.jsx)(Be,{placeholder:c,value:a,onChange:t}),!!n&&n]})},Pe=h.e.div(E||(E=Object(m.a)([""]))),qe=h.e.div(M||(M=Object(m.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),De=h.e.div(G||(G=Object(m.a)(["\n  align-items: center;\n  display: flex;\n"]))),Ie=h.e.div(Q||(Q=Object(m.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.colors.primary})),ze=h.e.span(R||(R=Object(m.a)(["\n  color: ",";\n  font-weight: 700;\n"])),(function(e){return e.theme.colors.primary})),Fe=function(e){var n=e.max,t=e.symbol,c=e.onChange,r=e.onSelectMax,a=e.value,s=e.depositFeeBP,o=void 0===s?0:s,i=Object(w.a)();return Object(T.jsxs)(Pe,{children:[Object(T.jsxs)(Ie,{children:[n.toLocaleString()," ",t," ",i(526,"Available")]}),Object(T.jsx)(Ae,{endAdornment:Object(T.jsxs)(De,{children:[Object(T.jsx)(ze,{children:t}),Object(T.jsx)(qe,{}),Object(T.jsx)("div",{children:Object(T.jsx)(d.d,{size:"sm",onClick:r,children:i(452,"Max")})})]}),onChange:c,placeholder:"0",value:a}),o>0?Object(T.jsxs)(Ie,{children:[i(10001,"Deposit Fee"),": ",new u.a(a||0).times(o/1e4).toString()," ",t]}):null]})},Le=function(e){var n=e.max,t=e.onConfirm,c=e.onDismiss,s=e.tokenName,o=void 0===s?"":s,i=e.depositFeeBP,l=void 0===i?0:i,b=Object(a.useState)(""),j=Object(r.a)(b,2),u=j[0],x=j[1],p=Object(a.useState)(!1),O=Object(r.a)(p,2),m=O[0],h=O[1],f=Object(w.a)(),k=Object(a.useMemo)((function(){return Object(ge.b)(n)}),[n]),g=Object(a.useCallback)((function(e){x(e.currentTarget.value)}),[x]),y=Object(a.useCallback)((function(){x(k)}),[k,x]);return Object(T.jsxs)(d.v,{title:"".concat(f(316,"Deposit")," ").concat(o," Tokens"),onDismiss:c,children:[Object(T.jsx)(Fe,{value:u,onSelectMax:y,onChange:g,max:k,symbol:o,depositFeeBP:l}),Object(T.jsxs)(Te,{children:[Object(T.jsx)(d.d,{variant:"secondary",onClick:c,children:f(462,"Cancel")}),Object(T.jsx)(d.d,{disabled:m,onClick:Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,t(u);case 3:h(!1),c();case 5:case"end":return e.stop()}}),e)}))),children:m?f(488,"Pending Confirmation"):f(464,"Confirm")})]})]})},Ne=function(e){var n=e.onConfirm,t=e.onDismiss,c=e.max,s=e.tokenName,o=void 0===s?"":s,i=Object(a.useState)(""),l=Object(r.a)(i,2),b=l[0],j=l[1],u=Object(a.useState)(!1),x=Object(r.a)(u,2),p=x[0],O=x[1],m=Object(w.a)(),h=Object(a.useMemo)((function(){return Object(ge.b)(c)}),[c]),f=Object(a.useCallback)((function(e){j(e.currentTarget.value)}),[j]),k=Object(a.useCallback)((function(){j(h)}),[h,j]);return Object(T.jsxs)(d.v,{title:"Withdraw ".concat(o),onDismiss:t,children:[Object(T.jsx)(Fe,{onSelectMax:k,onChange:f,value:b,max:h,symbol:o}),Object(T.jsxs)(Te,{children:[Object(T.jsx)(d.d,{variant:"secondary",onClick:t,children:m(462,"Cancel")}),Object(T.jsx)(d.d,{disabled:p,onClick:Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,n(b);case 3:O(!1),t();case 5:case"end":return e.stop()}}),e)}))),children:p?m(488,"Pending Confirmation"):m(464,"Confirm")})]})]})},Ee=h.e.div(H||(H=Object(m.a)(["\n  display: flex;\n  svg {\n    width: 20px;\n  }\n"]))),Me=function(e){var n=e.stakedBalance,t=e.tokenBalance,c=e.tokenName,a=e.pid,s=e.depositFeeBP,o=Object(w.a)(),i=fe(a).onStake,l=ke(a).onUnstake,b=Object(ge.a)(n),j=b.toLocaleString(),u=Object(d.G)(Object(T.jsx)(Le,{max:t,onConfirm:i,tokenName:c,depositFeeBP:s})),x=Object(r.a)(u,1)[0],p=Object(d.G)(Object(T.jsx)(Ne,{max:n,onConfirm:l,tokenName:c})),O=Object(r.a)(p,1)[0];return Object(T.jsxs)(d.m,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(d.n,{color:0===b?"textDisabled":"text",children:j}),0===b?Object(T.jsx)(d.d,{onClick:x,children:o(999,"Stake")}):Object(T.jsxs)(Ee,{children:[Object(T.jsx)(d.o,{variant:"tertiary",onClick:O,mr:"6px",children:Object(T.jsx)(d.u,{color:"primary"})}),Object(T.jsx)(d.o,{variant:"tertiary",onClick:x,children:Object(T.jsx)(d.a,{color:"primary"})})]})]})},Ge=t(757),Qe=h.e.div(W||(W=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: column;\n"]))),Re=function(e){var n=e.earnings,t=e.pid,c=Object(w.a)(),s=Object(a.useState)(!1),o=Object(r.a)(s,2),i=o[0],l=o[1],b=Object(Ge.b)(t).onReward,j=fe(t).onStake,u=Object(ge.a)(n),x=u.toLocaleString();return Object(T.jsxs)(d.m,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(T.jsx)(d.n,{color:0===u?"textDisabled":"text",children:x}),Object(T.jsxs)(Qe,{children:[25===t?Object(T.jsx)(d.d,{disabled:0===u||i,size:"sm",variant:"secondary",marginBottom:"15px",onClick:Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,j(u.toString());case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Compound!")}):null,Object(T.jsx)(d.d,{disabled:0===u||i,onClick:Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,b();case 3:l(!1);case 4:case"end":return e.stop()}}),e)}))),children:c(999,"Harvest")})]})]})},He=h.e.div(U||(U=Object(m.a)(["\n  padding-top: 16px;\n"]))),We=function(e){var n=e.farm,t=e.ethereum,c=e.account,s=Object(w.a)(),o=Object(a.useState)(!1),l=Object(r.a)(o,2),b=l[0],u=l[1],x=Object(g.a)(n.pid),p=x.pid,O=x.lpAddresses,m=x.tokenAddresses,h=x.isTokenOnly,f=x.depositFeeBP,k=Object(g.b)(p),y=k.allowance,S=k.tokenBalance,C=k.stakedBalance,B=k.earnings,A=O[56],P=m[56],q=n.lpSymbol.toUpperCase(),D=c&&y&&y.isGreaterThan(0),I=function(e){var n=Object(i.b)(),t=Object(j.m)().account,c=Object(he.c)();return{onApprove:Object(a.useCallback)(Object(xe.a)(ue.a.mark((function r(){var a;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(me.a)(e,c,t);case 3:return a=r.sent,n(Object(v.a)(t)),r.abrupt("return",a);case 8:return r.prev=8,r.t0=r.catch(0),r.abrupt("return",!1);case 11:case"end":return r.stop()}}),r,null,[[0,8]])}))),[t,n,e,c])}}(Object(a.useMemo)((function(){return h?Object(pe.a)(t,P):Object(pe.a)(t,A)}),[t,A,P,h])).onApprove,z=Object(a.useCallback)(Object(xe.a)(ue.a.mark((function e(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,I();case 4:u(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[I]);return Object(T.jsxs)(He,{children:[Object(T.jsxs)(d.m,{children:[Object(T.jsx)(d.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:"PTS"}),Object(T.jsx)(d.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:s(999,"Earned")})]}),Object(T.jsx)(Re,{earnings:B,pid:p}),Object(T.jsxs)(d.m,{children:[Object(T.jsx)(d.B,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"3px",children:q}),Object(T.jsx)(d.B,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:s(999,"Staked")})]}),c?D?Object(T.jsx)(Me,{stakedBalance:C,tokenBalance:S,tokenName:q,pid:p,depositFeeBP:f}):Object(T.jsx)(d.d,{mt:"8px",fullWidth:!0,disabled:b,onClick:z,children:s(999,"Approve Contract")}):Object(T.jsx)(Oe.a,{mt:"8px",fullWidth:!0})]})},Ue=function(e){var n,t=e.numberOfDays,c=e.farmApy/100,r=t/365,a=1e3/e.cakePrice,s=a*Math.pow(1+c/365,365*r);return n=s-a,Math.round(100*n)/100},Ve=function(e){return(e.amountEarned/e.amountInvested*100).toFixed(2)},Xe=h.e.div(V||(V=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, auto);\n  margin-bottom: 24px;\n"]))),Je=h.e.div(X||(X=Object(m.a)(["\n  margin-bottom: '10px';\n"]))),$e=Object(h.e)(d.B)(J||(J=Object(m.a)(["\n  max-width: 320px;\n  margin-bottom: 28px;\n"]))),_e=function(e){var n=e.onDismiss,t=e.lpLabel,c=e.quoteTokenAdresses,r=e.quoteTokenSymbol,a=e.tokenAddresses,s=e.cakePrice,o=e.apy,i=Object(w.a)(),l=re({quoteTokenAdresses:c,quoteTokenSymbol:r,tokenAddresses:a}),j=o.times(new b.a(100)).toNumber(),u=1e3/s.toNumber(),x=Ue({numberOfDays:1,farmApy:j,cakePrice:s}),p=Ue({numberOfDays:7,farmApy:j,cakePrice:s}),O=Ue({numberOfDays:30,farmApy:j,cakePrice:s}),m=Ue({numberOfDays:365,farmApy:j,cakePrice:s});return Object(T.jsxs)(d.v,{title:"ROI",onDismiss:n,children:[Object(T.jsxs)(Xe,{children:[Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"Timeframe")})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"ROI")})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",mb:"20px",children:i(999,"PTS per $1000")})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{children:"1d"})}),Object(T.jsx)(Je,{children:Object(T.jsxs)(d.B,{children:[Ve({amountEarned:x,amountInvested:u}),"%"]})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{children:x})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{children:"7d"})}),Object(T.jsx)(Je,{children:Object(T.jsxs)(d.B,{children:[Ve({amountEarned:p,amountInvested:u}),"%"]})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{children:p})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{children:"30d"})}),Object(T.jsx)(Je,{children:Object(T.jsxs)(d.B,{children:[Ve({amountEarned:O,amountInvested:u}),"%"]})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{children:O})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{children:"365d(APY)"})}),Object(T.jsx)(Je,{children:Object(T.jsxs)(d.B,{children:[Ve({amountEarned:m,amountInvested:u}),"%"]})}),Object(T.jsx)(Je,{children:Object(T.jsx)(d.B,{children:m})})]}),Object(T.jsx)($e,{fontSize:"12px",color:"textSubtle",children:i(999,"Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")}),Object(T.jsx)(d.m,{justifyContent:"center",children:Object(T.jsxs)(d.r,{href:"https://exchange.printershares.finance/#/add/".concat(l),children:[i(999,"Get")," ",t]})})]})},Ke=function(e){var n=e.lpLabel,t=e.quoteTokenAdresses,c=e.quoteTokenSymbol,a=e.tokenAddresses,s=e.cakePrice,o=e.apy,i=Object(d.G)(Object(T.jsx)(_e,{lpLabel:n,quoteTokenAdresses:t,quoteTokenSymbol:c,tokenAddresses:a,cakePrice:s,apy:o})),l=Object(r.a)(i,1)[0];return Object(T.jsx)(d.o,{onClick:l,variant:"text",size:"sm",ml:"4px",children:Object(T.jsx)(d.g,{})})},Ye=Object(h.f)($||($=Object(m.a)(["\n  0% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"]))),Ze=h.e.div(_||(_=Object(m.a)(["\n  background: linear-gradient(\n    45deg,\n    rgba(255, 0, 0, 1) 0%,\n    rgba(255, 154, 0, 1) 10%,\n    rgba(208, 222, 33, 1) 20%,\n    rgba(79, 220, 74, 1) 30%,\n    rgba(63, 218, 216, 1) 40%,\n    rgba(47, 201, 226, 1) 50%,\n    rgba(28, 127, 238, 1) 60%,\n    rgba(95, 21, 242, 1) 70%,\n    rgba(186, 12, 248, 1) 80%,\n    rgba(251, 7, 217, 1) 90%,\n    rgba(255, 0, 0, 1) 100%\n  );\n  background-size: 300% 300%;\n  animation: "," 2s linear infinite;\n  border-radius: 16px;\n  filter: blur(6px);\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  bottom: -2px;\n  left: -2px;\n  z-index: -1;\n"])),Ye),en=h.e.div(K||(K=Object(m.a)(["\n  align-self: baseline;\n  background: ",";\n  border-radius: 32px;\n  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 24px;\n  position: relative;\n  text-align: center;\n"])),(function(e){return e.theme.card.background})),nn=h.e.div(Y||(Y=Object(m.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 28px auto;\n  width: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),tn=h.e.div(Z||(Z=Object(m.a)(["\n  height: ",";\n  overflow: hidden;\n"])),(function(e){return e.expanded?"100%":"0px"})),cn=function(e){var n=e.farm,t=e.removed,c=e.cakePrice,s=e.bnbPrice,o=e.ethereum,i=e.account,l=Object(w.a)(),j=Object(a.useState)(!1),u=Object(r.a)(j,2),x=u[0],p=u[1],O=n.isTokenOnly?n.tokenSymbol.toLowerCase():"".concat(n.tokenSymbol.toLowerCase(),"-").concat(n.quoteTokenSymbol.toLowerCase()),m=Object(a.useMemo)((function(){return n.lpTotalInQuoteToken?n.quoteTokenSymbol===S.b.BNB?s.times(n.lpTotalInQuoteToken):n.quoteTokenSymbol===S.b.CAKE?c.times(n.lpTotalInQuoteToken):n.lpTotalInQuoteToken:null}),[s,c,n.lpTotalInQuoteToken,n.quoteTokenSymbol]),h=m?"$".concat(Number(m).toLocaleString(void 0,{maximumFractionDigits:0})):"-",f=n.lpSymbol,k=n.apy&&n.apy.times(new b.a(100)).toNumber().toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),g=n.quoteTokenAdresses,y=n.quoteTokenSymbol,v=n.tokenAddresses,C=n.risk;return Object(T.jsxs)(en,{children:["PTS"===n.tokenSymbol&&Object(T.jsx)(Ze,{}),Object(T.jsx)(je,{lpLabel:f,multiplier:n.multiplier,risk:C,depositFee:n.depositFeeBP,farmImage:O,tokenSymbol:n.tokenSymbol}),!t&&Object(T.jsxs)(d.m,{justifyContent:"space-between",alignItems:"center",children:[Object(T.jsxs)(d.B,{children:[l(352,"APR"),":"]}),Object(T.jsx)(d.B,{bold:!0,style:{display:"flex",alignItems:"center"},children:n.apy?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Ke,{lpLabel:f,quoteTokenAdresses:g,quoteTokenSymbol:y,tokenAddresses:v,cakePrice:c,apy:n.apy}),k,"%"]}):Object(T.jsx)(d.y,{height:24,width:80})})]}),Object(T.jsxs)(d.m,{justifyContent:"space-between",children:[Object(T.jsxs)(d.B,{children:[l(318,"Earn"),":"]}),Object(T.jsx)(d.B,{bold:!0,children:"PTS"})]}),Object(T.jsxs)(d.m,{justifyContent:"space-between",children:[Object(T.jsxs)(d.B,{style:{fontSize:"24px"},children:[l(10001,"Deposit Fee"),":"]}),Object(T.jsxs)(d.B,{bold:!0,style:{fontSize:"24px"},children:[n.depositFeeBP/100,"%"]})]}),Object(T.jsx)(We,{farm:n,ethereum:o,account:i}),Object(T.jsx)(nn,{}),Object(T.jsx)(ce,{onClick:function(){return p(!x)},expanded:x}),Object(T.jsx)(tn,{expanded:x,children:Object(T.jsx)(oe,{removed:t,isTokenOnly:n.isTokenOnly,bscScanAddress:n.isTokenOnly?"https://bscscan.com/token/".concat(n.tokenAddresses[56]):"https://bscscan.com/token/".concat(n.lpAddresses[56]),totalValueFormated:h,lpLabel:f,quoteTokenAdresses:g,quoteTokenSymbol:y,tokenAddresses:v})})]})},rn=t(83),an=function(e){var n=e.stakedOnly,t=e.setStakedOnly,c=Object(o.g)(),r=c.url,a=c.isExact,s=Object(w.a)();return Object(T.jsxs)(sn,{children:[Object(T.jsxs)(on,{children:[Object(T.jsx)(d.C,{checked:n,onChange:function(){return t(!n)}}),Object(T.jsxs)(d.B,{children:[" ",s(699,"Staked only")]})]}),Object(T.jsxs)(d.e,{activeIndex:a?0:1,size:"sm",variant:"subtle",children:[Object(T.jsx)(d.f,{as:rn.b,to:"".concat(r),children:s(698,"Active")}),Object(T.jsx)(d.f,{as:rn.b,to:"".concat(r,"/history"),children:s(700,"Inactive")})]})]})},sn=h.e.div(ee||(ee=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n"]))),on=h.e.div(ne||(ne=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 32px;\n\n  "," {\n    margin-left: 8px;\n  }\n"])),d.B),ln=h.e.div(te||(te=Object(m.a)(["\n  background-color: ",";\n  height: 1px;\n  margin: 0 auto 32px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.textSubtle})),bn=function(e){var n=Object(o.g)().path,t=Object(w.a)(),s=Object(g.c)(),l=Object(g.f)(),u=Object(g.e)(),x=Object(j.m)(),p=x.account,m=x.ethereum,h=e.tokenMode,C=Object(i.b)(),B=Object(y.a)().fastRefresh;Object(a.useEffect)((function(){p&&C(Object(v.a)(p))}),[p,C,B]);var A=Object(a.useState)(!1),P=Object(r.a)(A,2),q=P[0],D=P[1],I=s.filter((function(e){return!!e.isTokenOnly===!!h&&"0X"!==e.multiplier})),z=s.filter((function(e){return!!e.isTokenOnly===!!h&&"0X"===e.multiplier})),F=I.filter((function(e){return e.userData&&new b.a(e.userData.stakedBalance).isGreaterThan(0)})),L=Object(a.useCallback)((function(e,n){return e.map((function(e){var n=new b.a(e.ptsPerBlock||10).times(new b.a(e.poolWeight)).div(new b.a(10).pow(18)).times(O),t=l.times(n),r=new b.a(e.lpTotalInQuoteToken||0);return e.quoteTokenSymbol===S.b.BNB&&(r=r.times(u)),r.comparedTo(0)>0&&(t=t.div(r)),Object(c.a)(Object(c.a)({},e),{},{apy:t})})).map((function(e){return Object(T.jsx)(cn,{farm:e,removed:n,bnbPrice:u,cakePrice:l,ethereum:m,account:p},e.pid)}))}),[u,p,l,m]);return Object(T.jsxs)(k.a,{children:[Object(T.jsx)(d.n,{as:"h1",size:"lg",color:"primary",mb:"50px",style:{textAlign:"center"},children:h?t(10002,"Stake tokens to earn PTS"):t(320,"Stake LP tokens to earn PTS")}),Object(T.jsx)(d.n,{as:"h2",color:"secondary",mb:"50px",style:{textAlign:"center"},children:t(1e4,"Deposit Fee will be used to buyback PTS")}),Object(T.jsx)(an,{stakedOnly:q,setStakedOnly:D}),Object(T.jsxs)("div",{children:[Object(T.jsx)(ln,{}),Object(T.jsxs)(f,{children:[Object(T.jsx)(o.a,{exact:!0,path:"".concat(n),children:L(q?F:I,!1)}),Object(T.jsx)(o.a,{exact:!0,path:"".concat(n,"/history"),children:L(z,!0)})]})]}),Object(T.jsx)(d.p,{src:"/images/pts/8.png",alt:"illustration",width:1352,height:587,responsive:!0})]})}}}]);
//# sourceMappingURL=12.dd49e18e.chunk.js.map