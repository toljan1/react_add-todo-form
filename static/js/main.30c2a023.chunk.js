(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(6),c=a(2),s=a(7),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(9),u=a.n(d),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:null===t||void 0===t?void 0:t.email,children:null===t||void 0===t?void 0:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{user:t.user})]},t.id)},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e})}))})};function O(e){return l.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(o.useState)(f),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(null),s=Object(c.a)(i,2),d=s[0],u=s[1],j=Object(o.useState)(!1),b=Object(c.a)(j,2),p=b[0],v=b[1],x=Object(o.useState)(!1),y=Object(c.a)(x,2),S=y[0],N=y[1],I=Object(o.useState)(""),C=Object(c.a)(I,2),g=C[0],_=C[1],k=Math.max.apply(Math,Object(r.a)(a.map((function(e){return e.id}))));return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",onChange:function(e){v(!1),_(e.currentTarget.value)},value:g}),p&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",value:(null===d||void 0===d?void 0:d.id)||"0",onChange:function(e){N(!1),u(O(+e.currentTarget.value))},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name})}))]}),S&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){if(e.preventDefault(),g.trim()||v(!0),d||N(!0),g.trim()&&d){var t={id:k+1,userId:d?d.id:-1,title:g,completed:!1,user:d};n((function(e){return[].concat(Object(r.a)(e),[t])})),u(null),_("")}},children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.30c2a023.chunk.js.map