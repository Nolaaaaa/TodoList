webpackJsonp([1],{"1UCY":function(t,o){},NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("7+uW"),i=e("JnRc"),s=e.n(i),a=e("mvHQ"),c=e.n(a),r={name:"Todo",props:["currentUser"],data:function(){return{newTodo:"",todoList:[],checked:!1,editIndex:null}},mounted:function(){var t=this;this.$refs.input.focus(),window.onbeforeunload=function(){var o=c()(t.todoList);window.localStorage.setItem("myTodos",o)};var o=window.localStorage.getItem("myTodos"),e=JSON.parse(o);this.todoList=e||[],new s.a.Query("AllTodos").find().then(function(o){var e=o[0],n=e.id;t.todoList=JSON.parse(e.attributes.content),t.todoList.id=n},function(t){})},methods:{updateAVTodo:function(){var t=c()(this.todoList),o=s.a.Object.createWithoutData("AllTodos",this.todoList.id);o.set("content",t),o.save().then(function(){console.log("更新成功")})},changeDeleteStyle:function(t){var o=this.todoList.indexOf(t);this.todoList[o].checked||(this.todoList[o].checked=!1),this.todoList[o].checked=!this.todoList[o].checked},saveAVTodo:function(){var t=this,o=c()(this.todoList),e=new(s.a.Object.extend("AllTodos"));e.set("content",o);var n=new s.a.ACL;n.setPublicReadAccess(!0),e.setACL(n),e.save().then(function(o){console.log("保存成功"),t.todoList.id=o.id},function(t){console.log(t)})},saveOrUpdateTodo:function(){this.todoList.id?this.updateAVTodo():this.saveAVTodo()},addTodo:function(){this.newTodo&&(this.editIndex||0===this.editIndex?(this.todoList[this.editIndex].title=this.newTodo,this.newTodo="",this.editIndex=null):(this.todoList.push({title:this.newTodo,createdAt:new Date}),this.newTodo=""),this.saveOrUpdateTodo())},removeTodo:function(t){var o=this.todoList.indexOf(t);this.todoList.splice(o,1),console.log(this.todoList)},editContent:function(t){this.editIndex=t,this.todoList[t].checked=!1;var o=this.todoList[t].title;this.newTodo=o,this.$refs.input.focus()}}},d={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("section",{attrs:{id:"todo"}},[e("div",{staticClass:"logout"}),t._v(" "),e("h1",[t._v("TodoList")]),t._v(" "),e("div",{staticClass:"newTask"},[e("el-input",{ref:"input",attrs:{placeholder:"Add new Todo"},nativeOn:{keyup:function(o){return"button"in o||!t._k(o.keyCode,"enter",13,o.key,"Enter")?t.addTodo(o):null}},model:{value:t.newTodo,callback:function(o){t.newTodo=o},expression:"newTodo"}})],1),t._v(" "),e("ol",{staticClass:"todos"},t._l(t.todoList,function(o,n){return e("li",{key:o.id},[e("div",{staticClass:"check-container"},[e("div",{staticClass:"checkbox",class:{checked:o.checked},on:{click:function(e){t.changeDeleteStyle(o)}}}),t._v(" "),e("div",{staticClass:"content",class:{checked:o.checked}},[t._v(t._s(o.title))]),t._v(" "),e("i",{staticClass:"el-icon-edit",on:{click:function(o){t.editContent(n)}}})]),t._v(" "),e("i",{staticClass:"el-icon-circle-close",on:{click:function(e){t.removeTodo(o)}}})])}))])])},staticRenderFns:[]};var l=e("VU/8")(r,d,!1,function(t){e("1UCY")},null,null).exports,u={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"signUpOrLogin"}},[e("section",[e("div",{staticClass:"button"},[e("button",{staticClass:"login",class:{hide:this.hide},on:{click:function(o){t.chooseState("login")}}},[t._v("Login")]),t._v(" "),e("button",{staticClass:"signUp",class:{hide:this.hide},on:{click:function(o){t.chooseState("signUp")}}},[t._v("Sign up")])]),t._v(" "),"login"==t.actionType?e("div",{staticClass:"login"},[e("div",{staticClass:"formRow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"输入登录名"},domProps:{value:t.formData.username},on:{input:function(o){o.target.composing||t.$set(t.formData,"username",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"formRow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{keyup:function(o){return"button"in o||!t._k(o.keyCode,"enter",13,o.key,"Enter")?t.login(o):null},input:function(o){o.target.composing||t.$set(t.formData,"password",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"formActions"},[e("button",{staticClass:"login",attrs:{value:""},on:{click:t.login}},[t._v("Login")]),t._v(" "),e("span",{on:{click:function(o){t.loginOrSignUpStatus("signUp")}}},[t._v("To Sign up"),e("i",{staticClass:"el-icon-arrow-right"})])])]):t._e(),t._v(" "),"signUp"==t.actionType?e("div",{staticClass:"signUp"},[e("div",{staticClass:"formRow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.username,expression:"formData.username"}],attrs:{type:"text",placeholder:"注册用户名"},domProps:{value:t.formData.username},on:{input:function(o){o.target.composing||t.$set(t.formData,"username",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"formRow"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formData.password},on:{input:function(o){o.target.composing||t.$set(t.formData,"password",o.target.value)}}})]),t._v(" "),e("div",{staticClass:"formActions"},[e("button",{staticClass:"signUp",attrs:{value:""},on:{click:t.signUp}},[t._v("Sign up")]),t._v(" "),e("span",{on:{click:function(o){t.loginOrSignUpStatus("login")}}},[t._v("To Login"),e("i",{staticClass:"el-icon-arrow-right"})])])]):t._e()])])},staticRenderFns:[]};e("VU/8")({name:"SignUpOrLogin",data:function(){return{actionType:"",formData:{username:"",password:"",rePassword:"",comfirmPassword:""},hide:!1}},computed:{},methods:{signUp:function(){this.$emit("signUp",this.formData)},login:function(){this.$emit("login",this.formData)},chooseState:function(t){this.hide=!this.hide,this.loginOrSignUpStatus(t)},loginOrSignUpStatus:function(t){this.actionType=t}}},u,!1,function(t){e("QiPl")},null,null).exports;var p={name:"App",components:{Todo:l},data:function(){return{currentUser:{}}},created:function(){},methods:{}},v={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("Todo",{attrs:{currentUser:this.currentUser}})],1)},staticRenderFns:[]},h=e("VU/8")(p,v,!1,null,null,null).exports,f=e("zL8q"),m=e.n(f);e("tvR6"),e("NcP2");s.a.init({appId:"TwANvsxCggNKwGykjrmCk8lD-gzGzoHsz",appKey:"3BRJ6zaoDUTq9b19yEiL41nh"}),n.default.use(m.a),n.default.config.productionTip=!1,new n.default({el:"#app",components:{App:h},template:"<App/>"})},NcP2:function(t,o){},QiPl:function(t,o){},tvR6:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.6be65807d50dcfd88a17.js.map