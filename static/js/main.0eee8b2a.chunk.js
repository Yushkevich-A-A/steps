(this.webpackJsonpsteps=this.webpackJsonpsteps||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(11),i=n.n(s),r=(n(18),n(19),n(5)),d=n(7),o=n(13),l=n(9),u=n(27),j=n(28),b=n(10),m=(n(20),n(12)),f=function e(t,n,a){Object(m.a)(this,e),this.id=t,this.date=n,this.distance=a},O=(n(21),n(0));var p=function(e){var t=e.step,n=e.onRemove,a=e.onEdit;return Object(O.jsxs)("li",{className:"step",children:[Object(O.jsx)("div",{className:"step-data tiem-date",children:t.date}),Object(O.jsx)("div",{className:"step-data step-distance",children:t.distance}),Object(O.jsxs)("div",{className:"step-data step-actions",children:[Object(O.jsx)("button",{className:"step-action step-action-edit",onClick:function(){return a(t.id)}}),Object(O.jsx)("button",{className:"step-action step-action-delete",onClick:function(){return n(t.id)}})]})]})};var h=function(e){var t=e.list,n=e.onRemove,a=e.onEdit;return Object(O.jsxs)("div",{className:"result-container",children:[Object(O.jsxs)("ul",{className:"result-header",children:[Object(O.jsx)("li",{className:"result-header-data",children:"\u0414\u0430\u0442\u0430(\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(O.jsx)("li",{className:"result-header-data",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(O.jsx)("li",{className:"result-header-data",children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]}),Object(O.jsx)("ul",{className:"result-list",children:t.map((function(e){return Object(O.jsx)(p,{step:e,onRemove:n,onEdit:a},e.id)}))})]})};n(23);var v=function(e){var t=e.form,n=e.onAdd,a=e.onEditForm;return Object(O.jsxs)("form",{className:"form",onSubmit:n,children:[Object(O.jsxs)("div",{className:"form-date",children:[Object(O.jsx)("label",{htmlFor:"form-date",className:"form-label form-date-label",children:"\u0414\u0430\u0442\u0430(\u0414\u0414.\u041c\u041c.\u0413\u0413)"}),Object(O.jsx)("input",{type:"text",id:"form-date",name:"date",className:"form-input form-date-input",onChange:a,value:t.date,required:!0})]}),Object(O.jsxs)("div",{className:"form-value",children:[Object(O.jsx)("label",{htmlFor:"form-value",className:"form-label form-value-label",children:"\u041f\u0440\u043e\u0439\u0434\u0435\u043d\u043e \u043a\u043c"}),Object(O.jsx)("input",{type:"text",id:"form-value",name:"distance",className:"form-input form-value-label",onChange:a,value:t.distance,required:!0})]}),Object(O.jsx)("button",{className:"form-button",children:"OK"})]})};n(24);var x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({id:Object(b.a)(),date:"",distance:""}),i=Object(l.a)(s,2),m=i[0],p=i[1];return Object(O.jsxs)("div",{className:"steps-container",children:[Object(O.jsx)(v,{form:m,onEditForm:function(e){var t=e.target,n=t.name,a=t.value;p((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(r.a)({},n,a))}))},onAdd:function(e){e.preventDefault(),function(e){var t=n.filter((function(t){return t.id!==e.id})),a=t.find((function(t){return t.date===e.date}));if(a){var s=parseFloat(e.distance)+parseFloat(a.distance);c(t.map((function(e){return e.id===a.id?new f(a.id,a.date,s):e})))}else c([].concat(Object(o.a)(t),[new f(e.id,e.date,e.distance)]).sort((function(e,t){return Object(u.a)(Object(j.a)(e.date,"dd.MM.yyyy",new Date),Object(j.a)(t.date,"dd.MM.yyyy",new Date))})));p({id:Object(b.a)(),date:"",distance:""})}(m)}}),Object(O.jsx)(h,{list:n,onRemove:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))},onEdit:function(e){p(Object(d.a)({},n.find((function(t){return t.id===e}))))}})]})};var N=function(){return Object(O.jsx)("div",{className:"App app-wrapper",children:Object(O.jsx)(x,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(N,{})}),document.getElementById("root")),y()}},[[25,1,2]]]);
//# sourceMappingURL=main.0eee8b2a.chunk.js.map