(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),a=n(3),s=n(6),c=n(7),i=n(10),u=n(9),d=n(1),l=n.n(d),p=n(2),b=n.n(p),f=(n(16),n(0)),j=function(t){var e=t.goods;return Object(f.jsx)("ul",{className:"goods__list",children:e.map((function(t){var e=t.id,n=t.color,r=t.name;return Object(f.jsx)("li",{className:"goods__item",style:{color:n},children:r},e)}))})};function g(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var h=function(){var t=Object(a.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return e=t.sent,t.abrupt("return",e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={goods:[],loadingGoods:!1,errorMessage:""},t.loadingData=function(){var e=Object(a.a)(l.a.mark((function e(n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({goods:[],loadingGoods:!0,errorMessage:""}),e.prev=1,e.next=4,n();case 4:r=e.sent,t.setState({goods:r,loadingGoods:!1,errorMessage:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loadingGoods:!1,errorMessage:"Nah... Doesn't work"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,r=e.loadingGoods,o=e.errorMessage;return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("div",{className:"App__container",children:[Object(f.jsx)("h1",{className:"App__title",children:"Dynamic list of goods"}),Object(f.jsxs)("div",{className:"App__buttons",children:[Object(f.jsx)("button",{className:"App__button",type:"button",onClick:function(){return t.loadingData(g)},children:"Load all goods"}),Object(f.jsx)("button",{className:"App__button",type:"button",onClick:function(){return t.loadingData(h)},children:"Load 5 first goods"}),Object(f.jsx)("button",{className:"App__button",type:"button",onClick:function(){return t.loadingData(m)},children:"Load red goods"})]}),Object(f.jsx)("div",{className:"App__goods",children:!r&&Object(f.jsx)(j,{goods:n})}),Object(f.jsx)("div",{className:"App__error",children:o&&Object(f.jsx)("div",{children:o})})]})})}}]),n}(b.a.Component);o.a.render(Object(f.jsx)(v,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.730818d0.chunk.js.map