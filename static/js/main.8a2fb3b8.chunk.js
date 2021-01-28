(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=n.n(c),o=n(1),u=n.n(o),l=n(2),i=n(8),d=n(3),p=n(4),f=n(6),m=n(5),h=(n(17),n(18),n(19),n(7)),v=n.n(h),b=function(e){var t=e.todos,n=e.selectUser,a=e.toCheck,c=e.toSearch,s=e.toSelect,o=e.toShuffle;return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("div",{className:"TodoList__filters"},r.a.createElement("label",{className:"TodoList__label"},"Todo filter:",r.a.createElement("input",{className:"TodoList__input",onChange:c})),r.a.createElement("label",{className:"TodoList__label"},"Filter by status:",r.a.createElement("select",{className:"TodoList__select",onChange:s},r.a.createElement("option",{value:"all"},"Show all"),r.a.createElement("option",{value:"active"},"Show active"),r.a.createElement("option",{value:"completed"},"Show completed"))),r.a.createElement("button",{type:"button",className:"button",onClick:o},"shuffle")),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:v()("TodoList__item",{"TodoList__item--checked":e.completed},{"TodoList__item--unchecked":!e.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.completed,onClick:function(){return a(e.id)},readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{className:v()("button",{"TodoList__user-button":e.completed},{"TodoList__user-button--selected":!e.completed}),type:"button",onClick:function(){return n(e.userId)}},"User\xa0#",e.userId))})))))},_=(n(20),function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://mate-api.herokuapp.com").concat(t));case 3:return n=e.sent,a=n.json(),e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Whoops!");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),E=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/todos");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("/users/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.dataLoad();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.userId!==this.props.userId&&this.dataLoad();case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"dataLoad",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(this.props.userId);case 2:t=e.sent,this.setState({user:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.user,t=this.props.clearUser;return e?r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user:",e.id)),r.a.createElement("h3",{className:"CurrentUser__name"},e.name),r.a.createElement("p",{className:"CurrentUser__email"},e.email),r.a.createElement("p",{className:"CurrentUser__phone"},e.phone),r.a.createElement("button",{type:"button",onClick:function(){return t()}},"Clear user")):r.a.createElement("p",null,"Loading data...")}}]),n}(r.a.Component),w=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0,query:"",status:"all",shuffle:!1},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearSelectedUser=function(){e.setState({selectedUserId:0})},e.toCheckTodo=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id!==t?e:Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed})}))}}))},e.toSearchFilter=function(t){return e.setState({query:t.target.value})},e.toSelectFilter=function(t){return e.setState({status:t.target.value})},e.toShuffle=function(){e.setState((function(e){return{shuffle:!e.shuffle}}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,this.setState({todos:t.data.filter((function(e){return e.userId}))});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId,a=e.query,c=e.status,s=e.shuffle,o=t.filter((function(e){var t=a.toLowerCase();return e.title.toLowerCase().includes(t)})).filter((function(e){switch(c){case"completed":return e.completed;case"active":return!e.completed;default:return e}}));return s&&o.sort((function(){return Math.random()-.5})),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(b,{todos:o,toCheck:this.toCheckTodo,selectUser:this.selectUser,toSearch:this.toSearchFilter,toSelect:this.toSelectFilter,toShuffle:this.toShuffle})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(k,{userId:n,clearUser:this.clearSelectedUser}):"No user selected")))}}]),n}(r.a.Component);s.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.8a2fb3b8.chunk.js.map