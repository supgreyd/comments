(function(t){function e(e){for(var o,c,u=e[0],m=e[1],a=e[2],s=0,d=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&d.push(i[c][0]),i[c]=0;for(o in m)Object.prototype.hasOwnProperty.call(m,o)&&(t[o]=m[o]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,u=1;u<n.length;u++){var m=n[u];0!==i[m]&&(o=!1)}o&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],m=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var l=m;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"388d":function(t,e,n){"use strict";n("b30a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Post")],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("p",[t._v(t._s(t.post))]),n("button",{on:{click:t.addComment}},[t._v("Add comment")]),t._l(t.comments,(function(e,o){return n("Comment",{key:t.comments.length-o,attrs:{comment:e},on:{deleteComment:function(e){return t.deleteComment(o)}}})}))],2)},u=[],m=(n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment"},[t.editMode?[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.comment.text,expression:"comment.text"}],ref:"commentTextarea",domProps:{value:t.comment.text},on:{input:function(e){e.target.composing||t.$set(t.comment,"text",e.target.value)}}}),t._v(" "),n("button",{attrs:{disabled:!t.comment.text},on:{click:t.toggleEditMode}},[t._v("ok")])]:[n("p",[t._v(t._s(t.comment.text))]),n("button",{on:{click:t.toggleEditMode}},[t._v("edit")]),n("button",{on:{click:t.addComment}},[t._v("comment")]),n("button",{on:{click:t.deleteParentComment}},[t._v("delete")])],t.comment.children?t._l(t.comment.children,(function(e,o){return n("Comment",{key:e.children.length-o,attrs:{comment:e},on:{deleteComment:function(e){return t.deleteChildComment(o)}}})})):t._e()],2)}),a=[],l={name:"Comment",data:function(){return{editMode:!1}},props:{comment:{type:Object,default:function(){}}},methods:{toggleEditMode:function(){this.editMode=!this.editMode},addComment:function(){this.comment.children.unshift({text:"",children:[]})},deleteParentComment:function(){this.$emit("deleteComment")},deleteChildComment:function(t){this.comment.children.splice(t,1)}},mounted:function(){var t=this;this.comment.text||(this.editMode=!0,this.$nextTick((function(){t.$refs.commentTextarea.focus()})))}},s=l,d=(n("388d"),n("2877")),p=Object(d["a"])(s,m,a,!1,null,"31c6cdab",null),f=p.exports,h={name:"Post",components:{Comment:f},data:function(){return{post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",comments:[],comment:""}},methods:{addComment:function(){this.comments.unshift({text:"",children:[]}),this.comment=""},deleteComment:function(t){this.comments.splice(t,1)}}},v=h,b=Object(d["a"])(v,c,u,!1,null,"5cc4a3ef",null),g=b.exports,x={name:"App",components:{Post:g}},_=x,C=Object(d["a"])(_,i,r,!1,null,null,null),y=C.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(y)}}).$mount("#app")},b30a:function(t,e,n){}});
//# sourceMappingURL=app.e5f1fe31.js.map