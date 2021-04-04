(this["webpackJsonpguest-book-react"]=this["webpackJsonpguest-book-react"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var c={};n.r(c),n.d(c,"fetchComments",(function(){return p})),n.d(c,"addComment",(function(){return O})),n.d(c,"deleteComment",(function(){return v})),n.d(c,"patchComment",(function(){return h}));var a=n(1),r=n.n(a),o=n(8),s=n.n(o),u=(n(85),n(15)),i=n(17),l=n(9),m=n.n(l),j=n(18),b=n(36),d=n.n(b),f=n(19);d.a.defaults.baseURL="https://guest-book-server.herokuapp.com";var p=Object(f.c)("comments/fetch",function(){var e=Object(j.a)(m.a.mark((function e(t,n){var c,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,d.a.get("/comments");case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(f.c)("comments/add",function(){var e=Object(j.a)(m.a.mark((function e(t,n){var c,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,d.a.post("/comments",t);case 4:return a=e.sent,r=a.data,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(f.c)("comments/delete",function(){var e=Object(j.a)(m.a.mark((function e(t,n){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,d.a.delete("/comments/".concat(t));case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),h=Object(f.c)("comments/patch",function(){var e=Object(j.a)(m.a.mark((function e(t,n){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.rejectWithValue,e.prev=1,e.next=4,d.a.patch("/comments/".concat(t._id),t);case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",c(e.t0.response));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),_=function(e){return e.comments.comments},x=function(e){return e.comments.loading},C=function(e){return e.comments.error},g=function(e){return e.comments.edit},k=n(143),N=n(72),y=n(51),w=(n(110),Object(a.createContext)()),B=n(48),I=n.n(B),M=n(66),S=n(67),L=Object(f.b)("comment/edit"),E=n(27),F=n(74),V=n(63),W=n.n(V),Y=n(5),A=function(e){var t=e.children,n=e.onClick,c=e.classNames,a=void 0===c?"":c,r=e.type,o=void 0===r?"button":r,s=Object(F.a)(e,["children","onClick","classNames","type"]);return Object(Y.jsx)("button",Object(E.a)(Object(E.a)({type:o,className:"".concat(W.a.IconButton," ").concat(a),onClick:n},s),{},{children:t}))};A.defaultProps={onClick:function(){return null},children:null};var P=A,T=n(65),q=n(64),D=n.n(q);function H(e){var t=e.classNames,n=void 0===t?"":t;return Object(Y.jsx)(T.a,{className:"".concat(D.a.iconSpin," ").concat(n)})}var J=n(24),U=n.n(J),z=function(e){var t=e._id,n=e.name,c=e.comment,r=Object(a.useState)(!1),o=Object(u.a)(r,2),s=o[0],l=o[1],m=Object(i.b)(),j=Object(a.useContext)(w).toggleModal,b=Object(i.c)(x),d=Object(i.c)(_);Object(a.useEffect)((function(){l(!1)}),[d]);return Object(Y.jsxs)("li",{className:U.a.commentBlock,children:[Object(Y.jsxs)("p",{className:U.a.name,children:[n,":"]}),Object(Y.jsx)("p",{className:U.a.comment,children:c}),Object(Y.jsx)("span",{className:U.a.positionOfBtns,children:b&&s?Object(Y.jsx)(P,{"aria-label":"Loading",classNames:U.a.colorBtn,children:Object(Y.jsx)(H,{classNames:U.a.spinner})}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(P,{onClick:function(){j(),m(L({_id:t,name:n,comment:c})),l(!0)},"aria-label":"Edit Contact",classNames:U.a.colorBtn,children:Object(Y.jsx)(M.a,{})}),Object(Y.jsx)(P,{onClick:function(){m(v(t)),l(!0)},"aria-label":"Delete Contact",classNames:U.a.colorBtn,children:Object(Y.jsx)(S.a,{})})]})})]})},R=function(){var e=Object(i.c)(_);return Object(Y.jsx)("ul",{className:I.a.commentList,children:e.length>0?e.map((function(e){var t=e._id,n=e.name,c=e.comment;return Object(Y.jsx)(z,{_id:t,name:n,comment:c},t)})):Object(Y.jsx)("li",{className:I.a.noComments,children:"No Comments"})})},Z=n(49),G=n.n(Z);var Q=function(e){var t=e.toggleModal,n=e.children,c=Object(a.useCallback)((function(e){"Escape"===e.code&&t()}),[t]);return Object(a.useEffect)((function(){return window.addEventListener("keydown",c),function(){return window.removeEventListener("keydown",c)}}),[c]),Object(o.createPortal)(Object(Y.jsx)("div",{className:G.a.backdrop,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(Y.jsx)("div",{className:G.a.content,children:n})}),document.querySelector("#modal-root"))},K=n(142),X=n(73),$=n(41),ee=n.n($);function te(e){var t=e.toggleModal,n=Object(i.b)(),c=Object(i.c)(g),r=Object(X.a)(),o=r.handleSubmit,s=r.reset,l=Object(a.useState)(""),m=Object(u.a)(l,2),j=m[0],b=m[1],d=Object(a.useState)(""),f=Object(u.a)(d,2),p=f[0],v=f[1];Object(a.useEffect)((function(){if(c)return b(c.name),v(c.comment),function(){n(L(null))};var e=localStorage.getItem("name");e&&b(e)}),[c,n]);return Object(Y.jsxs)("form",{className:ee.a.blockForm,autoComplete:"on",onSubmit:o((function(){if(localStorage.setItem("name",j),c){var e={_id:c._id,name:j,comment:p};return n(h(e)),t(),void s()}n(O({name:j,comment:p})),t(),s()})),children:[Object(Y.jsx)(K.a,{value:j,onChange:function(e){var t=e.target;b(t.value)},rowsMax:1,label:"Your Name",placeholder:"Antonio",multiline:!0,variant:"outlined",className:ee.a.name,autoFocus:!0}),Object(Y.jsx)(K.a,{value:p,onChange:function(e){var t=e.target;v(t.value)},rows:5,rowsMax:10,label:"Your comment",placeholder:"I like your service very much!",multiline:!0,variant:"outlined",className:ee.a.comment}),Object(Y.jsx)(k.a,{type:"submit",color:"primary",variant:"contained",className:ee.a.submitBtn,children:"Add"})]})}var ne=n(50),ce=n.n(ne);var ae,re,oe=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(i.b)(),o=Object(i.c)(x),s=Object(i.c)(C);Object(a.useEffect)((function(){r(p())}),[r]);var l,m=function(){return c(!n)};return Object(Y.jsxs)("div",{className:ce.a.mainContainer,children:[Object(Y.jsx)("h1",{children:"Our visitor's comments"}),Object(Y.jsx)(w.Provider,{value:{toggleModal:m},children:Object(Y.jsx)(R,{})}),o&&Object(Y.jsx)(H,{}),s&&(l=s,void Object(y.b)(l)),Object(Y.jsx)(k.a,{type:"button",color:"primary",variant:"contained",onClick:m,children:"Leave Comment"}),n&&Object(Y.jsxs)(Q,{toggleModal:m,children:[Object(Y.jsx)(te,{toggleModal:m}),Object(Y.jsx)(P,{onClick:m,"aria-label":"Close Modal",classNames:ce.a.iconButtonCloseModal,children:Object(Y.jsx)(N.a,{})})]}),Object(Y.jsx)(y.a,{autoClose:3e3})]})},se=n(14),ue=n(13),ie=n(22),le=p,me=O,je=v,be=h,de=Object(f.d)(null,(ae={},Object(ue.a)(ae,L,(function(e,t){return t.payload})),Object(ue.a)(ae,be.fulfilled,(function(){return null})),ae)),fe=Object(f.d)([],(re={},Object(ue.a)(re,me.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(se.a)(e),[n])})),Object(ue.a)(re,le.fulfilled,(function(e,t){return t.payload})),Object(ue.a)(re,je.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e._id!==n}))})),Object(ue.a)(re,be.fulfilled,(function(e,t){var n=t.payload;return e.map((function(e){return e._id===n._id?n:e}))})),re)),pe=function(e){return!e},Oe=Object.values(c).reduce((function(e,t){var n;return Object(E.a)(Object(E.a)({},e),{},(n={},Object(ue.a)(n,t.fulfilled,pe),Object(ue.a)(n,t.rejected,pe),Object(ue.a)(n,t.pending,pe),n))}),{}),ve=Object(f.d)(!1,Oe),he=function(e,t){var n=t.payload,c=n.status,a=n.config,r=n.request,o=n.statusText;return"Error ".concat(c,". Can't ").concat(a.method," by ").concat(r.responseURL,". ").concat(o)},_e=function(){return null},xe=Object.values(c).reduce((function(e,t){var n;return Object(E.a)(Object(E.a)({},e),{},(n={},Object(ue.a)(n,t.rejected,he),Object(ue.a)(n,t.pending,_e),n))}),{}),Ce=Object(f.d)(null,xe),ge=Object(ie.c)({comments:fe,loading:ve,error:Ce,edit:de}),ke=Object(f.a)({reducer:{comments:ge},devTools:!1});s.a.render(Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(i.a,{store:ke,children:Object(Y.jsx)(oe,{})})}),document.getElementById("root"))},24:function(e,t,n){e.exports={commentBlock:"CommentItem_commentBlock__3GHYj",name:"CommentItem_name__1YCHw",comment:"CommentItem_comment__1Y7mo",positionOfBtns:"CommentItem_positionOfBtns__awu8x",colorBtn:"CommentItem_colorBtn__hIuw1",spinner:"CommentItem_spinner__2EQDd"}},41:function(e,t,n){e.exports={name:"Form_name__34-ms",comment:"Form_comment__azIWT",submitBtn:"Form_submitBtn__3Vmc1"}},48:function(e,t,n){e.exports={commentList:"CommentList_commentList__1JmLH",noComments:"CommentList_noComments__2Iezb"}},49:function(e,t,n){e.exports={backdrop:"Modal_backdrop__3FAPo",content:"Modal_content__1VIbZ"}},50:function(e,t,n){e.exports={mainContainer:"App_mainContainer__2o5r7",iconButtonCloseModal:"App_iconButtonCloseModal__1jvOe"}},63:function(e,t,n){e.exports={IconButton:"IconButton_IconButton__3sU0k"}},64:function(e,t,n){e.exports={iconSpin:"Spinner_iconSpin__DshYl","icon-spin":"Spinner_icon-spin__3WqPZ"}},85:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.7b749aad.chunk.js.map