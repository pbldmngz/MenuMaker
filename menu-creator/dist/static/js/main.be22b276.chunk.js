(this["webpackJsonpmenu-creator"]=this["webpackJsonpmenu-creator"]||[]).push([[0],{235:function(e,t,n){},447:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(2),c=n.n(r),i=n(70),o=n.n(i),s=(n(235),n(37)),l=n(6),u=n(97),d=n(29),h=n(30),b=n(32),p=n(31),g=n(12),f=n(148),j=n.n(f),m=n(46),O=n.n(m),v=n(98),x=function(e){return function(t,n,a){a.getFirebase;return(0,a.getFirestore)().collection("menuConfig").doc(e).get().then((function(e){if(e.exists)return e.data()})).catch((function(e){console.log(e)}))}},y=function(e,t){return function(){var n=Object(v.a)(O.a.mark((function n(a,r,c){var i,o;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.getFirebase,i=c.getFirestore,n.next=3,C(a,i,e,"owner",t);case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}()},C=function(){var e=Object(v.a)(O.a.mark((function e(t,n,r,c,i){var o,s,l,u;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n(),s=o.collection(r).where(c,"==",i),e.next=4,s.get();case 4:return l=e.sent,u=[],l.empty||l.forEach((function(e){u.push(Object(a.a)(Object(a.a)({},e.data()),{},{id:e.id}))})),e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),N=n(3);var k=Object(g.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))(Object(l.g)((function(e){var t=e.data,n=e.navbar;return Object(N.jsxs)("div",{className:"navbar",style:n,children:[Object(N.jsx)("img",{src:t?t.logoURL:"",alt:"Logo",className:"logo"}),Object(N.jsx)("h1",{className:"logo-tipo",children:t?t.name:""})]})}))),S=function(e){var t=e.items,n=e.category,a=e.separator;return Object(N.jsxs)("div",{className:"category-container category-padding-full",style:n,children:[Object(N.jsx)("h4",{style:a,children:t.title}),Object(N.jsx)("center",{children:Object(N.jsx)("div",{className:"divider-solid-yellow",style:a})}),t&&t.data.map((function(e,t){return Object(N.jsxs)("div",{className:"item-container item-margin-bottom",children:[Object(N.jsx)("div",{className:"item-name",children:e.name}),Object(N.jsx)("div",{className:"item-price",children:"$"+e.price}),Object(N.jsx)("div",{className:"item-description",children:e.description})]},t)}))]})};var E=Object(g.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))(Object(l.g)((function(e){var t=e.auth;return Object(N.jsx)("div",{className:"",children:Object(N.jsx)("footer",{className:"footer",children:t.uid?Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"material-icons button",onClick:function(){e.history.push("/cpanel")},children:"tune"}),Object(N.jsx)("div",{className:"material-icons button",onClick:function(){e.signOut()},children:"logout"})]}):Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"material-icons button",onClick:function(){e.history.push("/auth/register")},children:"person_add"}),Object(N.jsx)("div",{className:"material-icons button",onClick:function(){e.history.push("/auth/login")},children:"home"})]})})})}))),I=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.fetchData=function(){var t=e.props,n=t.match,a=t.getByUser,r=t.getIdByName;n.params.userID&&r(n.params.userID).then((function(t){t.length>0?(a("categories",t[0].id).then((function(t){e.setState({categories:t})})),a("items",t[0].id).then((function(t){e.setState({items:t})})),e.setState({config:t[0]})):e.props.history.push("/404")}))},e.getCategory=function(t){return e.state.categories.find((function(e){return e.id===t}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"separateCategories",value:function(e){var t,n={},a=[],r=Object(u.a)(e);try{for(r.s();!(t=r.n()).done;){var c=t.value;c.category_id in n?c.visible&&n[c.category_id].push(c):c.visible&&(n[c.category_id]=[],n[c.category_id].push(c))}}catch(d){r.e(d)}finally{r.f()}for(var i=0,o=Object.keys(n);i<o.length;i++){var s=o[i],l=this.getCategory(s);l&&l.visible&&a.push({title:l.name.toUpperCase(),data:n[s]})}return a}},{key:"render",value:function(){if(JSON.stringify(Object.keys(this.state))===JSON.stringify(["config","categories","items"])){var e=this.separateCategories(this.state.items),t=this.state.config.colorPalette,n={title:{backgroundColor:t.highlight,color:t.background},header:{backgroundColor:t.highlight,borderColor:t.highlight,color:t.text},button:{borderColor:t.highlight,backgroundColor:t.container,color:t.text},fill:{backgroundColor:t.background},category:{backgroundColor:t.container},background:{backgroundColor:t.background,overflow:"scroll"},separator:{color:t.header,borderColor:t.header}};return Object(N.jsxs)("div",{className:"overall animation",style:n.background,children:[Object(N.jsx)(k,{data:this.state.config,navbar:n.title}),Object(N.jsx)(f.ResponsiveMasonry,{columnsCountBreakPoints:{350:1,750:2,900:3},children:Object(N.jsx)(j.a,{children:e&&e.map((function(e,t){return Object(N.jsx)(S,{items:e,category:n.category,separator:n.separator},t)}))})}),Object(N.jsx)(E,{})]})}return null}}]),n}(r.Component),R=Object(g.b)((function(e){return{profile:e.firebase}}),(function(e){return{getIdByName:function(t){return e(function(e){return function(){var t=Object(v.a)(O.a.mark((function t(n,a,r){var c,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.getFirebase,c=r.getFirestore,t.next=3,C(n,c,"menuConfig","path",e);case 3:return i=t.sent,t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()}(t))},getByUser:function(t,n){return e(y(t,n))}}}))(I),w=n(36),_=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e.listenEnter=function(t){13===t.keyCode&&e.handleSubmit(t)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.authError;return t.auth.uid?Object(N.jsx)(l.a,{to:"/cpanel"}):Object(N.jsx)("div",{className:"center-box",children:Object(N.jsx)("div",{className:"category-container category-padding-full",children:Object(N.jsx)("form",{className:"",onSubmit:this.handleSubmit,children:Object(N.jsxs)("center",{children:[Object(N.jsx)("div",{className:"popup-input panel-nav panel-section-border letter-spacing force-white-text",children:"LOGIN"}),Object(N.jsx)("input",{onKeyDown:function(t){return e.listenEnter(t)},type:"email",id:"email",placeholder:"Correo",onChange:this.handleChange,className:"popup-input"}),Object(N.jsx)("input",{onKeyDown:function(t){return e.listenEnter(t)},type:"password",id:"password",placeholder:"Contrase\xf1a",onChange:this.handleChange,className:"popup-input"}),Object(N.jsx)("button",{className:"popup-input action-button button",children:"Sign In"}),Object(N.jsx)("div",{className:"",children:n?Object(N.jsx)("p",{children:n}):null})]})})})})}}]),n}(r.Component),M=Object(g.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,a){(0,a.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(_),U=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",nombre:"",lang:"english"},e.handleChange=function(t){e.setState(Object(w.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.auth,n=e.authError;e.profile,e.lang,e.userLevel;return t.uid?Object(N.jsx)(l.a,{to:"/menu/"+t.uid}):Object(N.jsx)("div",{className:"center-box",children:Object(N.jsx)("div",{className:"category-container category-padding-full",children:Object(N.jsx)("form",{className:"",onSubmit:this.handleSubmit,children:Object(N.jsxs)("center",{children:[Object(N.jsx)("div",{className:"popup-input panel-nav panel-section-border letter-spacing force-white-text",children:"REGISTER"}),Object(N.jsx)("input",{autoComplete:"off",autoCorrect:"off",spellCheck:"off",type:"text",id:"nombre",placeholder:"Nombre",onChange:this.handleChange,className:"popup-input"}),Object(N.jsx)("input",{autoComplete:"off",autoCorrect:"off",spellCheck:"off",type:"email",id:"email",placeholder:"Correo",onChange:this.handleChange,className:"popup-input"}),Object(N.jsx)("input",{autoComplete:"off",autoCorrect:"off",spellCheck:"off",type:"password",id:"password",placeholder:"Contrase\xf1a",onChange:this.handleChange,className:"popup-input"}),Object(N.jsx)("button",{className:"popup-input action-button button",children:"Sign Up"}),Object(N.jsx)("div",{className:"",children:n?Object(N.jsx)("p",{children:n}):null})]})})})})}}]),n}(r.Component),F=Object(g.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,a){var r=a.getFirebase,c=a.getFirestore,i=r(),o=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return o.collection("menuConfig").doc(t.user.uid).set({colorPalette:{highlight:"#e2b22b",background:"#1b1b1b",container:"#262626",text:"beige"},name:"default",path:t.user.uid,logoURL:"https://chaitanyahr.com/wp-content/uploads/2015/02/logo_dummy.png"}),o.collection("language").doc(t.user.uid).set({lang:"en"}),o.collection("users").doc(t.user.uid).set({name:e.nombre,subscribed:!1})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(Object(l.g)(U)),T=n(71),D=n(19),P=n.n(D),L=n(152),G=n(151),A=n.n(G);A.a.setAppElement("#root");var B=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).fetchData=function(){var t=e.props.auth;t.uid&&e.props.getMenuConfig(t.uid).then((function(t){e.setState({menuLink:"/menu/"+t.path,config:t})}))},e.simpleImputSwal=function(t){var n=e.props,a=n.auth,r=n.editMenuConfig,c={name:{title:"display name",id:"name",placeholder:"Name",value:e.state.config?e.state.config.name:""},address:{title:"web address",id:"path",placeholder:"web address",value:e.state.config?e.state.config.path:""},logo:{title:"logo image",id:"logoURL",placeholder:"Insert image URL",value:e.state.config?e.state.config.logoURL:""}};P.a.fire({title:"Change "+c[t].title,html:'<input type="text" id="'.concat(c[t].id,'" class="popup-input" placeholder="').concat(c[t].placeholder,'" value="').concat(c[t].value,'" />'),showCancelButton:!0,confirmButtonText:"Change",showLoaderOnConfirm:!0,preConfirm:function(){var e=P.a.getPopup().querySelector("#"+c[t].id).value;return Object(w.a)({},c[t].id,e)}}).then((function(n){n.isConfirmed&&(n.value[c[t].id]&&(r(a.uid,n.value),e.fetchData()),P.a.fire({title:'Name changed to "'.concat(n.value[c[t].id],'"')}))}))},e.state={modal:!1,mode:"background"},e.openModal=e.openModal.bind(Object(T.a)(e)),e.closeModal=e.closeModal.bind(Object(T.a)(e)),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"openModal",value:function(e){this.setState({modal:!0,mode:e})}},{key:"closeModal",value:function(){this.setState({modal:!1})}},{key:"render",value:function(){var e=this,t=this.props.auth;if(!this.state)return null;if(!this.state.config)return null;var n=this.state.config.colorPalette;if(!t.uid)return Object(N.jsx)(l.a,{to:"/auth/login"});var r={title:{backgroundColor:n.highlight,color:n.text},header:{backgroundColor:n.highlight,borderColor:n.highlight,color:n.text},button:{borderColor:n.highlight,backgroundColor:n.container,color:n.text},fill:{backgroundColor:n.background},category:{backgroundColor:n.container},background:{backgroundColor:n.background,overflow:"scroll"},all:{highlight:n.highlight,text:n.text,container:n.container,background:n.background}},c={highlight:n.highlight,text:n.text,container:n.container,background:n.background},i=function(t){c[e.state.mode]=t};return Object(N.jsxs)("div",{className:"overall animation",style:r.background,children:[Object(N.jsx)("div",{className:"panel-nav",style:r.title,children:Object(N.jsx)("h2",{children:"CONTROL PANEL"})}),Object(N.jsx)("div",{className:"as-footer",children:Object(N.jsx)(s.b,{className:"panel-section-border button",style:r.button,to:this.state.menuLink,children:"Go to your menu"})}),Object(N.jsxs)("div",{className:"panel-grid",children:[Object(N.jsxs)("div",{className:"panel-section",style:r.category,children:[Object(N.jsx)("div",{className:"panel-nav panel-section-border letter-spacing",style:r.header,children:"MENU"}),Object(N.jsx)(s.b,{className:"panel-section-border button",style:r.button,to:"/cpanel/categories",children:"Categories"}),Object(N.jsx)(s.b,{className:"panel-section-border button",style:r.button,to:"/cpanel/items",children:"Items"})]}),Object(N.jsxs)("div",{className:"panel-section",style:r.category,children:[Object(N.jsx)("div",{className:"panel-nav panel-section-border letter-spacing",style:r.header,children:"SETTINGS"}),Object(N.jsx)("div",{className:"panel-section-border button",style:r.button,onClick:function(){e.simpleImputSwal("name")},children:"Change display name"}),Object(N.jsx)("div",{className:"panel-section-border button",style:r.button,onClick:function(){e.simpleImputSwal("address")},children:"Change web address"}),Object(N.jsx)("div",{className:"panel-section-border button",style:r.button,onClick:function(){e.simpleImputSwal("logo")},children:"Change brand logo"})]}),Object(N.jsxs)("div",{className:"panel-section",style:r.category,children:[Object(N.jsx)("div",{className:"panel-nav panel-section-border letter-spacing",style:r.header,children:"USER"}),Object(N.jsx)("div",{className:"panel-section-border disabled",style:r.button,children:"Share link"}),Object(N.jsx)("div",{className:"panel-section-border disabled delete",style:r.button,children:"Disable ads"}),Object(N.jsx)("div",{className:"panel-section-border disabled",style:r.button,children:"Change language"}),Object(N.jsx)("div",{className:"panel-section-border button",style:r.button,onClick:function(){e.props.signOut()},children:"Log out"})]}),Object(N.jsxs)("div",{className:"panel-section",style:r.category,children:[Object(N.jsx)("div",{className:"panel-nav panel-section-border letter-spacing",style:r.header,children:"COLORS"}),Object(N.jsxs)("div",{className:"panel-grid",children:[Object(N.jsx)("div",{className:"panel-section-border button",style:{backgroundColor:r.all.background,border:"1px dashed #eeeeee25"},onClick:function(){return e.openModal("background")},children:Object(N.jsx)("div",{style:{mixBlendMode:"difference"},children:"Background"})}),Object(N.jsx)("div",{className:"panel-section-border button",style:{backgroundColor:r.all.container,border:"1px dashed #eeeeee25"},onClick:function(){return e.openModal("container")},children:Object(N.jsx)("div",{style:{mixBlendMode:"difference"},children:"Container"})}),Object(N.jsx)("div",{className:"panel-section-border button",style:{backgroundColor:r.all.highlight,border:"1px dashed #eeeeee25"},onClick:function(){return e.openModal("highlight")},children:Object(N.jsx)("div",{style:{mixBlendMode:"difference"},children:"Highlight"})}),Object(N.jsx)("div",{className:"panel-section-border button",style:{backgroundColor:r.all.text,border:"1px dashed #eeeeee25"},onClick:function(){return e.openModal("text")},children:Object(N.jsx)("div",{style:{mixBlendMode:"difference"},children:"Text"})})]}),Object(N.jsx)("div",{className:"panel-section-border button",style:r.button,onClick:function(){e.props.editMenuConfig(t.uid,{colorPalette:{highlight:"#e2b22b",background:"#1b1b1b",container:"#262626",text:"beige"}}),e.fetchData()},children:"Reset colors"})]})]}),Object(N.jsx)(A.a,{isOpen:this.state.modal,onRequestClose:function(){return e.closeModal()},contentLabel:"Color Picker",className:"Modal",overlayClassName:"Overlay",children:Object(N.jsxs)("center",{children:[Object(N.jsx)(L.a,{className:"popup-input",color:c[this.state.mode],onChange:i}),Object(N.jsx)("div",{className:"marginator",children:Object(N.jsx)(L.b,{color:c[this.state.mode],onChange:i})}),Object(N.jsxs)("div",{className:"panel-grid",children:[Object(N.jsx)("button",{className:"popup-input",onClick:function(){e.setState({modal:!1}),e.props.editMenuConfig(t.uid,{colorPalette:Object(a.a)(Object(a.a)({},e.state.config.colorPalette),{},Object(w.a)({},e.state.mode,c[e.state.mode]))}),e.fetchData()},children:"OK"}),Object(N.jsx)("button",{className:"popup-input cancel",onClick:this.closeModal,children:"Cancel"})]})]})})]})}}]),n}(r.Component),q=Object(g.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))},getMenuConfig:function(t){return e(x(t))},editMenuConfig:function(t,n){return e(function(e,t){return function(n,r,c){c.getFirebase,(0,c.getFirestore)().collection("menuConfig").doc(e).update(Object(a.a)({},t)).then((function(){n({type:"EDIT_MENU_CONFIG"},t)})).catch((function(e){n({type:"EDIT_MENU_CONFIG_ERROR"},e)}))}}(t,n))}}}))(B),Y=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).fetchData=function(){var t=e.props,n=t.auth,a=t.getByUser,r=t.getMenuConfig;n.uid&&(r(n.uid).then((function(t){console.log("state/config",t),e.setState({config:t})})),a("categories",n.uid).then((function(t){e.setState({categories:t})})),a("items",n.uid).then((function(t){e.setState({items:t})})))},e.popup=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a="";if("items"!==t)a='<input type="text" id="cat_name" class="popup-input" placeholder="Name" value="'.concat(n?n.name:"",'" />');else{a+='<input type="text" id="p_name" class="popup-input" placeholder="Name" value="'.concat(n?n.name:"",'" />'),a+='<input type="text" id="p_price" class="popup-input" placeholder="Price" value="'.concat(n?n.price:"",'" />');var r,c='<option class="popup-input" value="" disabled selected hidden>Select category</option>',i=Object(u.a)(e.state.categories);try{for(i.s();!(r=i.n()).done;){var o=r.value;n&&n.category_id===o.id?c+='<option selected value="'+o.id+'">'+o.name+"</option>":c+='<option value="'+o.id+'">'+o.name+"</option>"}}catch(s){i.e(s)}finally{i.f()}a+='<select class="popup-input" id="p_category">'+c+"</select>",a+='<input type="text" id="p_description" class="popup-input" placeholder="Description" value="'.concat(n?n.description:"",'" />')}P.a.fire({title:"".concat(n?"Edit":"Add"," ").concat(t),html:a,confirmButtonText:n?"Save":"Add",focusConfirm:!1,preConfirm:function(){return"items"===t?{name:P.a.getPopup().querySelector("#p_name").value,price:P.a.getPopup().querySelector("#p_price").value,category_id:P.a.getPopup().querySelector("#p_category").value,description:P.a.getPopup().querySelector("#p_description").value}:{name:P.a.getPopup().querySelector("#cat_name").value}}}).then((function(a){console.log("This is the result",a),a.value&&(n?"items"!==t?e.props.editCategory(n.id,a.value):e.props.editItem(n.id,a.value):"items"!==t?e.props.createCategory(a.value):e.props.createItem(a.value),e.fetchData(),console.log("Should be before"),P.a.fire('"'.concat(a.value.name,'" ').concat(n?"edited":"added","!").trim()))})).catch((function(e){console.log("Error in swal2",e)}))},e.getCategory=function(t){var n=e.state.categories.find((function(e){return e.id===t}));return n?n.name:""},e.changeVisibility=function(t,n){var r=Object(a.a)({},n);delete r.id,"items"===t?e.props.editItem(n.id,Object(a.a)(Object(a.a)({},r),{},{visible:!n.visible})):e.props.editCategory(n.id,Object(a.a)(Object(a.a)({},r),{},{visible:!n.visible})),e.fetchData()},e.delete=function(t,n){"items"===t?e.props.deleteItem(n):e.props.deleteCategory(n),e.fetchData()},e.getCards=function(t,n){return Object(N.jsxs)("div",{className:"grid",children:[Object(N.jsx)("div",{className:"category-container button button-height",onClick:function(){e.popup(t)},children:Object(N.jsx)("div",{className:"category-center",children:"items"===t?Object(N.jsx)("div",{className:"material-icons big-icon",children:"post_add"}):Object(N.jsx)("div",{className:"material-icons big-icon",children:"library_add"})})}),n&&n.map((function(n){return Object(N.jsx)("div",{className:"category-container category-padding",children:Object(N.jsxs)("div",{className:"item-container",children:["items"===t?Object(N.jsx)("div",{className:"item-name",children:Object(N.jsxs)("div",{className:"item-container item-container-height",children:[Object(N.jsx)("div",{className:"item-name",children:n.name}),Object(N.jsx)("div",{className:"item-price item-margin-right",children:"$"+n.price}),Object(N.jsx)("div",{className:"item-category",children:e.getCategory(n.category_id)}),Object(N.jsx)("div",{className:"item-description",children:n.description})]})}):Object(N.jsx)("div",{className:"item-name item-container-height",children:Object(N.jsx)("div",{className:"category-center",children:n.name})}),Object(N.jsx)("div",{className:"item-price",children:Object(N.jsx)("div",{className:"category-center",children:Object(N.jsxs)("div",{className:"vertical-grid",children:[Object(N.jsx)("span",{className:"material-icons button",onClick:function(){e.changeVisibility(t,n)},children:n.visible?"visibility":"visibility_off"}),Object(N.jsx)("span",{className:"material-icons button",onClick:function(){e.popup(t,n)},children:"edit"}),Object(N.jsx)("span",{className:"material-icons button",onClick:function(){P.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&(e.delete(t,n.id),P.a.fire("Deleted!","Your item has been deleted.","success"))}))},children:"delete"})]})})})]})},n.id)}))]})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){if(!this.props.auth.uid)return Object(N.jsx)(l.a,{to:"/auth/login"});if(!this.state)return null;var e=this.state.config.colorPalette,t=this.state,n=t.items,a=t.categories,r=this.props.match.params.title;if(!["items","categories"].includes(r))return null;var c={title:{backgroundColor:e.highlight,color:e.text},header:{backgroundColor:e.highlight,borderColor:e.highlight,color:e.text},button:{borderColor:e.highlight,backgroundColor:e.container,color:e.text},fill:{backgroundColor:e.background},category:{backgroundColor:e.container},background:{backgroundColor:e.background,overflow:"scroll"}};return Object(N.jsxs)("div",{className:"overall animation",style:c.background,children:[Object(N.jsx)("div",{className:"panel-nav",style:c.title,children:Object(N.jsxs)("h2",{children:["CONTROL PANEL / ",r.toUpperCase()]})}),Object(N.jsx)("div",{className:"as-footer",children:Object(N.jsx)(s.b,{to:"/cpanel",className:"panel-section-border button",style:c.button,children:"Go back to Control Panel"})}),this.getCards(r,"items"===r?n:a)]})}}]),n}(r.Component),J=Object(g.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{getByUser:function(t,n){return e(y(t,n))},createItem:function(t){return e(function(e){return function(t,n,r){r.getFirebase;var c=(0,r.getFirestore)(),i=n().firebase.auth.uid;c.collection("items").add(Object(a.a)(Object(a.a)({},e),{},{visible:!0,owner:i})).then((function(){t({type:"CREATE_ITEM"},e)})).catch((function(e){t({type:"CREATE_ITEM_ERROR"},e)}))}}(t))},editItem:function(t,n){return e(function(e,t){return function(n,r,c){c.getFirebase,(0,c.getFirestore)().collection("items").doc(e).update(Object(a.a)({},t)).then((function(){n({type:"EDIT_ITEM"},t)})).catch((function(e){n({type:"EDIT_ITEM_ERROR"},e)}))}}(t,n))},deleteItem:function(t){return e(function(e){return function(t,n,a){a.getFirebase,(0,a.getFirestore)().collection("items").doc(e).delete()}}(t))},createCategory:function(t){return e(function(e){return function(t,n,r){r.getFirebase;var c=(0,r.getFirestore)(),i=(n().firebase.profile,n().firebase.auth.uid);c.collection("categories").add(Object(a.a)(Object(a.a)({},e),{},{visible:!0,owner:i})).then((function(){t({type:"CREATE_CATEGORY"},e)})).catch((function(e){t({type:"CREATE_CATEGORY_ERROR"},e)}))}}(t))},editCategory:function(t,n){return e(function(e,t){return function(n,r,c){c.getFirebase,(0,c.getFirestore)().collection("categories").doc(e).update(Object(a.a)({},t)).then((function(){n({type:"EDIT_CATEGORY"},t)})).catch((function(e){n({type:"EDIT_CATEGORY_ERROR"},e)}))}}(t,n))},deleteCategory:function(t){return e(function(e){return function(t,n,a){a.getFirebase,(0,a.getFirestore)().collection("categories").doc(e).delete()}}(t))},getMenuConfig:function(t){return e(x(t))}}}))(Y);function K(){return Object(N.jsxs)("center",{children:[Object(N.jsx)("h1",{children:"Error 404"}),"Page not found"]})}var z=function(){return Object(N.jsx)("div",{children:Object(N.jsx)(s.a,{children:Object(N.jsxs)(l.d,{children:[Object(N.jsx)(l.b,{exact:!0,path:"/auth/login",component:M}),Object(N.jsx)(l.b,{exact:!0,path:"/auth/register",component:F}),Object(N.jsx)(l.b,{exact:!0,path:"/menu/:userID",component:R}),Object(N.jsx)(l.b,{exact:!0,path:"/404",component:K}),Object(N.jsx)(l.b,{exact:!0,path:"/cpanel",component:q}),Object(N.jsx)(l.b,{exact:!0,path:"/cpanel/:title",component:J})]})})})},V=n(72),W={authError:null},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(a.a)(Object(a.a)({},e),{},{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(a.a)(Object(a.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(a.a)(Object(a.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(a.a)(Object(a.a)({},e),{},{authError:t.err.message});default:return e}},$=n(56),H=n(45),Q=Object(V.b)({auth:Z,firestore:$.firestoreReducer,firebase:H.firebaseReducer}),X=n(230),ee=n(99);n(448),n(442),n(444);ee.a.initializeApp({apiKey:"AIzaSyCT28ZoGrpsYlrqzT6lL138Uw6veneaU8M",authDomain:"restaurant-menu-creator.firebaseapp.com",projectId:"restaurant-menu-creator",storageBucket:"restaurant-menu-creator.appspot.com",messagingSenderId:"501286966576",appId:"1:501286966576:web:c08a624851a2e67f8fe4f5",measurementId:"G-76MB4Z12PB"}),ee.a.firestore().settings({timestampsInSnapshots:!0});var te=ee.a,ne=Object(V.c)(Q,Object(V.a)(X.a.withExtraArgument({getFirebase:H.getFirebase,getFirestore:$.getFirestore}))),ae={firebase:te,config:{userProfile:"users"},dispatch:ne.dispatch,createFirestoreInstance:$.createFirestoreInstance};function re(e){var t=e.children,n=Object(g.c)((function(e){return e.firebase.auth}));return Object(H.isLoaded)(n)?t:null}o.a.render(Object(N.jsx)(g.a,{store:ne,children:Object(N.jsx)(H.ReactReduxFirebaseProvider,Object(a.a)(Object(a.a)({},ae),{},{children:Object(N.jsx)(re,{children:Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(z,{})})})}))}),document.getElementById("root"))}},[[447,1,2]]]);