(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(2),c=a(6),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],u=a(8),m=a.n(u),j=a(0),b=function(e){var t=e.user;return Object(j.jsx)("a",{className:"UserInfo",href:null===t||void 0===t?void 0:t.email,children:null===t||void 0===t?void 0:t.name})},h=function(e){var t=e.todo;return Object(j.jsxs)("article",{"data-id":t.id,className:m()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(j.jsx)(b,{user:t.user})]})},f=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e})}))})};function O(e){return l.find((function(t){return t.id===e}))||null}var p=d.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),v=function(){var e=Object(o.useState)(p),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(null),c=Object(s.a)(i,2),u=c[0],m=c[1],b=Object(o.useState)(!1),h=Object(s.a)(b,2),v=h[0],x=h[1],y=Object(o.useState)(!1),S=Object(s.a)(y,2),N=S[0],I=S[1],C=Object(o.useState)(""),g=Object(s.a)(C,2),_=g[0],k=g[1],T=d.map((function(e){return+e.id})).sort((function(e,t){return e-t}))[0];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/users",method:"POST",children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",onChange:function(e){x(!1),k(e.currentTarget.value)},value:_}),v&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("select",{"data-cy":"userSelect",value:(null===u||void 0===u?void 0:u.id)||"0",onChange:function(e){I(!1),m(O(+e.currentTarget.value))},children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name})}))]}),N&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){if(e.preventDefault(),_||x(!0),u||I(!0),_&&u){var t={id:T+=1,userId:u?u.id:-1,title:_,completed:!1,user:u};n([].concat(Object(r.a)(a),[t])),m(null),k("")}},children:"Add"})]}),Object(j.jsx)(f,{todos:a})]})};i.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.168f20ec.chunk.js.map