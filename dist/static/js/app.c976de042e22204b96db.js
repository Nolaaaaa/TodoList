webpackJsonp([1],{"2B9e":function(t,e,n){t.exports=n.p+"static/img/leaves1.ffec9cc.png"},"5tUW":function(t,e){},BspE:function(t,e){},D2mL:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),s=n("JnRc"),i=n.n(s),a=n("mvHQ"),r=n.n(a),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"leaves"},[e("img",{attrs:{src:n("2B9e"),id:"leaves1"}}),this._v(" "),e("img",{attrs:{src:n("2B9e"),id:"leaves2"}}),this._v(" "),e("img",{attrs:{src:n("2B9e"),id:"leaves3"}}),this._v(" "),e("img",{attrs:{src:n("2B9e"),id:"leaves4"}}),this._v(" "),e("img",{attrs:{src:n("2B9e"),id:"leaves5"}}),this._v(" "),e("img",{attrs:{src:n("2B9e"),id:"leaves6"}}),this._v(" "),e("img",{attrs:{src:n("2B9e"),id:"leaves7"}})])}]};var d=n("VU/8")({name:"Leaves"},c,!1,function(t){n("5tUW")},"data-v-cbce59cc",null).exports,u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"drag-wrap"},[this._t("default")],2)},staticRenderFns:[]};var l=n("VU/8")({name:"DragWrap",props:["list"],data:function(){return{fromNode:"",toNode:"",childDom:[],newList:""}},watch:{newList:function(t,e){t&&this.getNewList()}},methods:{getNewList:function(){this.$emit("newList",this.newList)}}},u,!1,function(t){n("D2mL")},"data-v-eb051596",null).exports,p=n("Gu7T"),f=n.n(p),h={name:"DragItem",data:function(){return{startDrag:!1}},mounted:function(){this.$parent.childDom.push(this.$el)},methods:{onStart:function(){this.startDrag=!0,this.$parent.fromNode=this.$el},onEnter:function(){this.$parent.toNode=this.$el;var t=this.$parent._data,e=t.fromNode,n=t.toNode;this.$parent.$el.insertBefore(e,this.isPreNode(e,n)?n:n.nextSibling)},onEnd:function(){this.startDrag=!1;for(var t=this.$parent,e=t.list,n=t.childDom,o=[].concat(f()(this.$parent.$el.children)),s=[],i=0;i<e.length;i++)for(var a=0;a<e.length;a++)n[i]==o[a]&&(s[a]=e[i]);this.$parent.newList=s},isPreNode:function(t,e){for(;null!==t.previousSibling;){if(t.previousSibling===e)return!0;t=t.previousSibling}}}},v={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"drag",class:{start:t.startDrag},attrs:{draggable:"true"},on:{dragstart:function(e){return e.stopPropagation(),t.onStart(e)},dragenter:function(e){return e.stopPropagation(),t.onEnter(e)},dragend:function(e){return e.stopPropagation(),t.onEnd(e)}}},[t._t("default")],2)},staticRenderFns:[]};var m={name:"Todo",props:["currentUser"],data:function(){return{newTodo:"",todoList:[],newTodoList:"",editIndex:null}},computed:{placeholder:function(){return"[object Null]"===Object.prototype.toString.call(this.editIndex)?"Add new Todo":"Edit new Todo"}},components:{Leaves:d,DragWrap:l,DragItem:n("VU/8")(h,v,!1,function(t){n("i37S")},"data-v-c8dba240",null).exports},mounted:function(){this.$refs.input.focus(),this.getTodoList()},methods:{getNewList:function(t){this.newTodoList=t},getTodoList:function(){var t=this;window.onbeforeunload=function(){var e=t.newTodoList,n=t.todoList;e&&(n=e),window.localStorage.setItem("myTodos",r()(n))};var e=window.localStorage.getItem("myTodos"),n=JSON.parse(e);(this.todoList=n||[],i.a.User.current())&&new i.a.Query("AllTodos").find().then(function(e){var n=e[0],o=n.id;t.todoList=JSON.parse(n.attributes.content),t.todoList.id=o},function(t){console.log(t)})},addTodo:function(){this.newTodo&&(this.editIndex||0===this.editIndex?(this.todoList[this.editIndex].title=this.newTodo,this.newTodo="",this.editIndex=null):(this.todoList.push({title:this.newTodo,checked:!1,createdAt:(new Date).toLocaleString()}),this.newTodo=""),this.saveOrUpdateTodo())},editContent:function(t){this.editIndex=t,this.todoList[t].checked=!1;var e=this.todoList[t].title;this.newTodo=e,this.$refs.input.focus()},removeTodo:function(t){var e=this.todoList.indexOf(t);this.todoList.splice(e,1),this.saveOrUpdateTodo()},saveOrUpdateTodo:function(){this.todoList.id?this.updateAVTodo():this.saveAVTodo()},changeChecked:function(t){var e=this.todoList.indexOf(t);this.todoList[e].checked=!this.todoList[e].checked,this.updateAVTodo()},logout:function(){this.$emit("logout")},updateAVTodo:function(){var t=r()(this.todoList),e=i.a.Object.createWithoutData("AllTodos",this.todoList.id);e.set("content",t),e.save().then(function(){console.log("更新成功")})},saveAVTodo:function(){var t=this,e=r()(this.todoList),n=new(i.a.Object.extend("AllTodos"));n.set("content",e);var o=new i.a.ACL;o.setPublicReadAccess(!0),o.setWriteAccess(i.a.User.current(),!0),n.setACL(o),n.save().then(function(e){console.log("保存成功"),t.todoList.id=e.id},function(t){console.log(t)})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{attrs:{id:"todo"}},[n("div",{staticClass:"logout"}),t._v(" "),n("h1",[t._v("TodoList")]),t._v(" "),n("div",{staticClass:"newTask"},[n("el-input",{ref:"input",attrs:{placeholder:t.placeholder},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}},model:{value:t.newTodo,callback:function(e){t.newTodo=e},expression:"newTodo"}})],1),t._v(" "),t.todoList?n("ol",{staticClass:"todos"},[n("DragWrap",{attrs:{list:t.todoList},on:{newList:t.getNewList}},t._l(t.todoList,function(e,o){return n("DragItem",{key:e.id},[n("li",[n("div",{staticClass:"check-container"},[n("div",{staticClass:"checkbox",class:{checked:e.checked},on:{click:function(n){t.changeChecked(e)}}}),t._v(" "),n("div",{staticClass:"content",class:{checked:e.checked}},[t._v(t._s(e.title))]),t._v(" "),n("i",{staticClass:"el-icon-edit",on:{click:function(e){t.editContent(o)}}})]),t._v(" "),t.editIndex!=o?n("i",{staticClass:"el-icon-circle-close",on:{click:function(n){t.removeTodo(e)}}}):t._e()])])}))],1):t._e()]),t._v(" "),n("Leaves")],1)},staticRenderFns:[]};var w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"signUpOrLogin"}},[n("section",[n("div",{staticClass:"button"},[n("button",{staticClass:"login",class:{hide:this.hide},on:{click:function(e){t.chooseState("login")}}},[t._v("Login")]),t._v(" "),n("button",{staticClass:"signUp",class:{hide:this.hide},on:{click:function(e){t.chooseState("signUp")}}},[t._v("Sign up")])]),t._v(" "),"login"==t.actionType?n("div",{staticClass:"login"},[n("div",{staticClass:"formRow"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"输入登录名"},domProps:{value:t.formData.username},on:{input:function(e){e.target.composing||t.$set(t.formData,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"formRow"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null},input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"formActions"},[n("button",{staticClass:"login",attrs:{value:""},on:{click:t.login}},[t._v("Login")]),t._v(" "),n("span",{on:{click:function(e){t.loginOrSignUpStatus("signUp")}}},[t._v("To Sign up"),n("i",{staticClass:"el-icon-arrow-right"})])])]):t._e(),t._v(" "),"signUp"==t.actionType?n("div",{staticClass:"signUp"},[n("div",{staticClass:"formRow"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"注册用户名"},domProps:{value:t.formData.username},on:{input:function(e){e.target.composing||t.$set(t.formData,"username",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"formRow"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{input:function(e){e.target.composing||t.$set(t.formData,"password",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"formActions"},[n("button",{staticClass:"signUp",attrs:{value:""},on:{click:t.signUp}},[t._v("Sign up")]),t._v(" "),n("span",{on:{click:function(e){t.loginOrSignUpStatus("login")}}},[t._v("To Login"),n("i",{staticClass:"el-icon-arrow-right"})])])]):t._e()])])},staticRenderFns:[]};var _={name:"App",components:{Todo:n("VU/8")(m,g,!1,function(t){n("jHfA")},"data-v-99107820",null).exports,SignUpOrLogin:n("VU/8")({name:"SignUpOrLogin",data:function(){return{actionType:"",formData:{username:"",password:"",rePassword:"",comfirmPassword:""},hide:!1}},computed:{},methods:{signUp:function(){this.$emit("signUp",this.formData)},login:function(){this.$emit("login",this.formData)},chooseState:function(t){this.hide=!this.hide,this.loginOrSignUpStatus(t)},loginOrSignUpStatus:function(t){this.actionType=t}}},w,!1,function(t){n("BspE")},"data-v-139d8a6c",null).exports},data:function(){return{currentUser:{}}},created:function(){this.currentUser=this.getCurrentUser()},methods:{getCurrentUser:function(){var t=i.a.User.current();if(t){var e=t.id,n=t.createdAt;return{id:e,username:t.attributes.username,createdAt:n}}},signUp:function(t){var e=this,n=new i.a.User;n.setUsername(t.username),n.setPassword(t.password),n.signUp().then(function(t){console.log("注册成功"),e.currentUser=e.getCurrentUser()},function(t){})},login:function(t){var e=this;i.a.User.logIn(t.username,t.password).then(function(t){e.currentUser=e.getCurrentUser()},function(t){})},logout:function(){i.a.User.logOut(),this.currentUser=null}}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Todo",{attrs:{currentUser:this.currentUser}})],1)},staticRenderFns:[]};var T=n("VU/8")(_,L,!1,function(t){n("yzlX")},null,null).exports,U=n("zL8q"),C=n.n(U);n("tvR6"),n("NcP2");i.a.init({appId:"TwANvsxCggNKwGykjrmCk8lD-gzGzoHsz",appKey:"3BRJ6zaoDUTq9b19yEiL41nh"}),o.default.use(C.a),o.default.config.productionTip=!1,new o.default({el:"#app",components:{App:T},template:"<App/>"})},NcP2:function(t,e){},i37S:function(t,e){},jHfA:function(t,e){},tvR6:function(t,e){},yzlX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c976de042e22204b96db.js.map