(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),i=s(5),c=s(6),a=s(9),l=s(7),u=s(8),d=s(1),h=s.n(d),b=(s(14),s(15),s(2)),p=s.n(b),y=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var v=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={sortType:n.NONE,isReversed:!1},t.sortByAlphabetHandler=function(){t.setState({sortType:n.ALPHABET})},t.sortByLengthHandler=function(){t.setState({sortType:n.LENGTH})},t.reverseHandler=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.resetHandler=function(){t.setState({isReversed:!1,sortType:n.NONE})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this,e=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);return s===n.ALPHABET&&o.sort(),s===n.LENGTH&&o.sort((function(t,e){return t.length-e.length})),r&&o.reverse(),console.log(s,r),o}(j,{sortType:this.state.sortType,isReversed:this.state.isReversed});return Object(y.jsxs)("div",{className:"section content",children:[Object(y.jsxs)("div",{className:"buttons",children:[Object(y.jsx)("button",{type:"button",className:p()({button:!0,"is-info":!0,"is-light":this.state.sortType!==n.ALPHABET}),onClick:function(){return t.sortByAlphabetHandler()},children:"Sort alphabetically"}),Object(y.jsx)("button",{type:"button",className:p()({button:!0,"is-success":!0,"is-light":this.state.sortType!==n.LENGTH}),onClick:function(){return t.sortByLengthHandler()},children:"Sort by length"}),Object(y.jsx)("button",{type:"button",className:p()({button:!0,"is-warning":!0,"is-light":!this.state.isReversed}),onClick:function(){return t.reverseHandler()},children:"Reverse"}),!(!this.state.isReversed&&this.state.sortType===n.NONE)&&Object(y.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.resetHandler()},children:"Reset"})]}),Object(y.jsx)("ul",{children:Object(y.jsx)("ul",{children:e.map((function(t){return Object(y.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})}}]),s}(h.a.Component);o.a.render(Object(y.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.eba3fefe.chunk.js.map