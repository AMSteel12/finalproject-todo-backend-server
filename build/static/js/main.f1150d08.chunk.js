(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),s=a.n(c),o=a(11),i=a(36),d=a.n(i),u=a(6),j=a(12),l=a(10),b=a(105),O=a(41);function h(e,t){switch(t.type){case"LOGIN":case"REGISTER":return{id:t.id,username:t.username,access_token:t.access_token};case"LOGOUT":return{id:"",username:"",access_token:""};default:return e}}function x(e,t){return"FETCH_USERS"===t.type?t.users:e}function f(e,t){switch(t.type){case"CREATE_TODO":return 0===e.filter((function(e){return e.id===t.newTodo.id})).length?[t.newTodo].concat(Object(O.a)(e)):e;case"TOGGLE_TODO":return e.map((function(e){var a=e;return e.id===t.id&&(a.completeStatus=t.completeStatus,a.completedDate=t.completedDate),a}));case"DELETE_TODO":var a=e.filter((function(e){return e.id!==t.id}));return Object(O.a)(a);case"FETCH_TODOS":return t.todos;default:return e}}function p(e,t){return{user:h(e.user,t),users:x(e.users,t),todos:f(e.todos,t)}}var m=a(2),g=a(8),v=a(110),w=a(104),C=a(1);function T(e){var t=e.id,a=e.title,n=e.author,c=e.description,s=e.completeStatus,i=e.completedDate,d=e.short,j=void 0!==d&&d,b=Object(r.useContext)(g.a),O=b.state,h=b.dispatch,x=O.user,f=Object(r.useContext)(g.b).secondaryColor,p=Object(r.useState)(!1),m=Object(u.a)(p,2),T=m[0],y=m[1],S=Object(o.b)((function(e){return{url:"/todo/",method:"delete",data:{id:e,author:n},headers:{Authorization:"".concat(x.access_token)}}})),E=Object(u.a)(S,2),L=E[0],k=E[1],D=Object(o.b)((function(e){var a=e.completeStatus,r=e.completedDate;return{url:"/todo",method:"patch",data:{id:t,completeStatus:a,completedDate:r,author:n},headers:{Authorization:"".concat(x.access_token)}}})),_=Object(u.a)(D,2),R=_[0],I=_[1];Object(r.useEffect)((function(){L&&(L.data||L.error)&&!1===L.isLoading&&(L.error?y(!0):(y(!1),h({type:"DELETE_TODO",id:L.data.id})))}),[L]),Object(r.useEffect)((function(){R&&(R.data||R.error)&&!1===R.isLoading&&(R.error?y(!0):(y(!1),h({type:"TOGGLE_TODO",completeStatus:R.data.completeStatus,completedDate:R.data.completeDate,id:t})))}),[R]);var U=c;return j&&c.length>30&&(U="".concat(c.substring(0,30)," ...")),Object(C.jsx)(v.a,{children:Object(C.jsxs)(v.a.Body,{children:[Object(C.jsx)(v.a.Title,{children:Object(C.jsx)(l.a,{style:{color:f},href:"/todo/".concat(t),children:a})}),Object(C.jsx)(v.a.Subtitle,{children:Object(C.jsxs)("i",{children:["Todo Item Authored by: ",Object(C.jsx)("b",{children:x.username})]})}),Object(C.jsx)(v.a.Text,{children:U}),Object(C.jsx)("input",{type:"checkbox",checked:s,onChange:function(e){var t=null;t=e.target.checked?Date.now():null,I({completeStatus:e.target.checked,completedDate:t})}}),Object(C.jsx)(w.a,{variant:"link",onClick:function(){k(t)},children:"Delete Todo Item"}),i&&Object(C.jsxs)("i",{children:["Todo Item finished on: ",new Date(i).toLocaleDateString("en-us")]}),j&&Object(C.jsx)(l.a,{href:"/todo/".concat(t),children:"View Full-Length Todo Item"}),T&&Object(C.jsx)(v.a.Text,{style:{color:"crimson"},children:"User Unauthorized to Update Todo.  If Mistake, Please Try Again."})]})})}var y=n.a.memo(T);function S(){var e=Object(r.useContext)(g.a).state.todos;return Object(C.jsx)("div",{children:e.map((function(e){return Object(C.jsx)(y,Object(m.a)({},e),e.id)}))})}function E(){var e=Object(r.useContext)(g.a),t=e.state,a=e.dispatch,n=t.user,c=Object(r.useState)(""),s=Object(u.a)(c,2),i=s[0],d=s[1],j=Object(r.useState)(""),b=Object(u.a)(j,2),O=b[0],h=b[1],x=Object(l.d)(),f=Object(o.b)((function(e){var t=e.title,a=e.description,r=e.author;return{url:"/todo",method:"post",headers:{Authorization:"".concat(n.access_token)},data:{title:t,description:a,author:r}}})),p=Object(u.a)(f,2),m=p[0],v=p[1];Object(r.useEffect)((function(){if(m&&m.data&&!1===m.isLoading){var e={id:m.data.id,title:m.data.title,author:n.username,description:m.data.description};a({type:"CREATE_TODO",newTodo:e}),x.navigate("/todo/".concat(m.data.id))}}),[m]);return Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v({title:i,description:O,author:n.username}),d(""),h("")},children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("label",{htmlFor:"create-title",children:"Title:"}),Object(C.jsx)("input",{type:"text",id:"create-title",value:i,onChange:function(e){d(e.target.value)},placeholder:"New Todo Item Title",name:"create-title"})]}),Object(C.jsx)("br",{}),Object(C.jsx)("textarea",{value:O,onChange:function(e){h(e.target.value)},placeholder:"New Todo Item Description"}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{type:"submit",value:"Publish Todo Item",disabled:0===i.length})]})}var L=a(109),k=a(107);function D(e){var t=e.show,a=e.handleClose,n=Object(r.useContext)(g.a).dispatch,c=Object(r.useState)(""),s=Object(u.a)(c,2),i=s[0],d=s[1],j=Object(r.useState)(""),l=Object(u.a)(j,2),b=l[0],O=l[1],h=Object(r.useState)(!1),x=Object(u.a)(h,2),f=x[0],p=x[1];var m=Object(o.b)((function(e,t){return{url:"auth/login",method:"post",data:{username:e,password:t}}})),v=Object(u.a)(m,2),T=v[0],y=v[1];return Object(r.useEffect)((function(){T&&!1===T.isLoading&&(T.data||T.error)&&(T.error?(p(!0),alert("failed")):(p(!1),console.log(T.data),n({type:"LOGIN",id:T.data.id,username:i,access_token:T.data.access_token})))}),[T]),Object(C.jsx)(L.a,{show:t,onHide:a,children:Object(C.jsxs)(k.a,{onSubmit:function(e){e.preventDefault(),y(i,b),a()},children:[Object(C.jsx)(L.a.Header,{closeButton:!0,children:Object(C.jsx)(L.a.Title,{children:"User Login"})}),Object(C.jsxs)(L.a.Body,{children:[Object(C.jsx)(k.a.Label,{htmlFor:"login-userid",children:"User ID:"}),Object(C.jsx)(k.a.Control,{type:"text",value:i,onChange:function(e){d(e.target.value)},name:"login-userid",id:"login-userid"}),Object(C.jsx)(k.a.Label,{htmlFor:"login-password",children:"Password:"}),Object(C.jsx)(k.a.Control,{type:"password",value:b,onChange:function(e){O(e.target.value)},name:"login-password",id:"login-password"}),f&&Object(C.jsx)(k.a.Text,{style:{color:"crimson"},children:"The username and/or password is not valid. Try again."})]}),Object(C.jsxs)(L.a.Footer,{children:[Object(C.jsx)(w.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(C.jsx)(w.a,{variant:"primary",disabled:0===i.length,type:"submit",children:"Login"})]})]})})}a(97);function _(e){var t=e.show,a=e.handleClose,n=Object(r.useContext)(g.a).dispatch,c=Object(r.useState)({username:"",password:"",repeatPassword:""}),s=Object(u.a)(c,2),i=s[0],d=s[1],j=Object(r.useState)(""),l=Object(u.a)(j,2),b=(l[0],l[1]),O=Object(r.useState)(!1),h=Object(u.a)(O,2),x=(h[0],h[1]),f=Object(o.b)((function(e,t,a){return{url:"/auth/register",method:"post",data:{username:e,password:t,passwordConfirmation:a}}})),p=Object(u.a)(f,2),v=p[0],T=p[1];return Object(r.useEffect)((function(){v&&v.data&&n({type:"REGISTER",username:v.data.username,id:v.data.id})}),[v]),Object(r.useEffect)((function(){v&&!1===v.isLoading&&(v.data||v.error)&&(v.error?(console.log(v),b("Registration attempt failed.  Please try again later."),x(!0),alert("fail")):(console.log(v),b("Registration attempt successful. You may now log in."),x(!1),alert("success"),a()))}),[v]),Object(C.jsx)(L.a,{show:t,onHide:a,children:Object(C.jsxs)(k.a,{onSubmit:function(e){e.preventDefault(),T(i.username,i.password,i.repeatPassword)},children:[Object(C.jsx)(L.a.Header,{closeButton:!0,children:Object(C.jsx)(L.a.Title,{children:"Register New User"})}),Object(C.jsxs)(L.a.Body,{children:[Object(C.jsx)(k.a.Label,{htmlFor:"register-userid",children:"User ID:"}),Object(C.jsx)(k.a.Control,{type:"text",value:i.username,onChange:function(e){return d(Object(m.a)(Object(m.a)({},i),{},{username:e.target.value}))},name:"register-userid",id:"register-userid"}),Object(C.jsx)(k.a.Label,{htmlFor:"register-password",children:"Password:"}),Object(C.jsx)(k.a.Control,{type:"password",name:"register-password",id:"register-password",value:i.password,onChange:function(e){return d(Object(m.a)(Object(m.a)({},i),{},{password:e.target.value}))}}),Object(C.jsx)(k.a.Label,{htmlFor:"register-password-again",children:"Please enter password again to confirm:"}),Object(C.jsx)(k.a.Control,{type:"password",name:"register-password-again",id:"register-password-again",value:i.repeatPassword,onChange:function(e){return d(Object(m.a)(Object(m.a)({},i),{},{repeatPassword:e.target.value}))}})]}),Object(C.jsxs)(L.a.Footer,{children:[Object(C.jsx)(w.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(C.jsx)(w.a,{variant:"primary",type:"submit",disabled:0===i.username.length||0===i.password.length||i.password!==i.repeatPassword,children:"Register"})]})]})})}function R(){var e=n.a.lazy((function(){return Promise.resolve().then(a.bind(null,97))})),t=Object(r.useContext)(g.a).state,c=Object(r.useState)(!1),s=Object(u.a)(c,2),o=s[0],i=s[1],d=Object(r.useState)(!1),j=Object(u.a)(d,2),l=j[0],b=j[1];return t.user.username?Object(C.jsx)(e,{}):Object(C.jsxs)("div",{className:"justify-content-end",children:[Object(C.jsx)(w.a,{variant:"link",onClick:function(e){return i(!0)},children:"Login"}),Object(C.jsx)(D,{show:o,handleClose:function(){return i(!1)}}),Object(C.jsx)("br",{}),Object(C.jsx)(w.a,{variant:"link",onClick:function(e){return b(!0)},children:"Register"}),Object(C.jsx)(_,{show:l,handleClose:function(){return b(!1)}})]})}var I=a(108),U=function(e){var t=e.text;return Object(C.jsx)(l.a,{href:"/",children:Object(C.jsx)(I.a.Brand,{children:t})})},F=a(106);function P(){var e=Object(r.useContext)(g.a).state.user;return Object(C.jsx)(I.a,{bg:"light",expand:"lg",children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(I.a.Brand,{href:"/",children:Object(C.jsx)(U,{text:"Multi-User Todo App"})}),Object(C.jsx)(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(C.jsxs)(I.a.Collapse,{id:"basic-navbar-nav",children:[Object(C.jsxs)(F.a,{className:"me-auto",children:[Object(C.jsx)(F.a.Link,{children:Object(C.jsx)(l.a,{href:"/users",children:"Registered Users"})}),e.username&&Object(C.jsx)(F.a.Link,{children:Object(C.jsx)(l.a,{href:"/todo/create",children:"Create New Todo Item"})})]}),Object(C.jsx)(n.a.Suspense,{fallback:"Loading.........",children:Object(C.jsx)(R,{})})]})]})})}function G(){var e=Object(r.useContext)(g.a),t=e.state,a=e.dispatch,n=t.user,c=Object(o.b)((function(){return{url:"/users/".concat(n.id),method:"get",headers:{Authorization:"".concat(n.access_token)}}})),s=Object(u.a)(c,2),i=s[0],d=s[1];Object(r.useEffect)((function(){n.id&&d()}),[n.access_token]),Object(r.useEffect)((function(){i&&i.data&&a({type:"FETCH_TODOS",todos:i.data.todos})}),[i]);var j=i.isLoading;return Object(C.jsxs)(C.Fragment,{children:[j&&"Todos loading...",Object(C.jsx)(S,{})]})}function A(e){var t=e.id,a=Object(o.b)((function(){return{url:"/todos/".concat(t),method:"get"}})),n=Object(u.a)(a,2),c=n[0],s=n[1];return Object(r.useEffect)(s,[t]),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{children:Object(C.jsx)(l.a,{href:"/",children:"Return"})}),c&&c.data?Object(C.jsx)(y,Object(m.a)({},c.data)):"Getting data.."]})}function B(e){var t=e.id,a=e.username;return Object(C.jsx)(v.a,{children:Object(C.jsx)(v.a.Body,{children:Object(C.jsx)(v.a.Title,{children:Object(C.jsxs)(l.a,{href:"/users/".concat(t),children:["USER ID: ",a]})})})})}function H(){var e=Object(r.useContext)(g.a).state.users;return Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:"List of Registered Users"}),e.map((function(e){return Object(C.jsx)(B,Object(m.a)({},e),e.id)}))]})}function N(){var e=Object(r.useContext)(g.a).dispatch,t=Object(o.b)((function(){return{url:"/users",method:"get"}})),a=Object(u.a)(t,2),n=a[0],c=a[1];Object(r.useEffect)(c,[]),Object(r.useEffect)((function(){n&&n.data&&e({type:"FETCH_USERS",usersList:n.data.usersList})}),[n]);var s=n.isLoading;return Object(C.jsxs)(C.Fragment,{children:[s&&"Users loading...",Object(C.jsx)(H,{})]})}var z=function(){var e=Object(r.useReducer)(p,{user:{},users:[],todos:[]}),t=Object(u.a)(e,2),a=t[0],n=t[1],c=(a.user,Object(r.useState)({primaryColor:"dodgerblue",secondaryColor:"darkorange"})),s=Object(u.a)(c,2),o=(s[0],s[1],Object(j.f)({"/":Object(j.g)({view:Object(C.jsx)(G,{})}),"/todo/create":Object(j.g)({view:Object(C.jsx)(E,{})}),"/todo/:id":Object(j.g)((function(e){return{view:Object(C.jsx)(A,{id:e.params.id})}})),"/users":Object(j.g)({view:Object(C.jsx)(N,{})})}));return Object(C.jsx)("div",{children:Object(C.jsx)(g.a.Provider,{value:{state:a,dispatch:n},children:Object(C.jsx)(l.b,{routes:o,children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(P,{}),Object(C.jsx)("hr",{}),Object(C.jsx)(l.c,{})]})})})})},M=d.a.create({baseURL:"/"});s.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(o.a,{value:M,children:Object(C.jsx)(z,{})})}),document.getElementById("root"))},8:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return s}));var r=a(0),n=a.n(r),c=n.a.createContext({primaryColor:"dodgerblue",secondaryColor:"darkorange"}),s=n.a.createContext({state:{},dispatch:function(){}})},97:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));var r=a(0),n=a(8),c=a(10),s=a(1);function o(){var e=Object(r.useContext)(n.a),t=e.state,a=e.dispatch,o=t.user,i=Object(c.d)();return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({type:"LOGOUT"}),i.navigate("/")},children:["Currently logged in as user:  ",Object(s.jsx)("b",{children:o.username}),Object(s.jsx)("input",{type:"submit",value:"Logout"})]})}}},[[101,1,2]]]);
//# sourceMappingURL=main.f1150d08.chunk.js.map