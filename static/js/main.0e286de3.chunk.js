(this["webpackJsonpreact-35-4-hands"]=this["webpackJsonpreact-35-4-hands"]||[]).push([[0],{18:function(e,t,n){e.exports={backDrop:"Modal_backDrop__2y87I",content:"Modal_content__TzpKg"}},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(14),r=n.n(s),o=(n(34),n(11)),i=n(3),l=(n(35),n(28)),u=n(10),h=n(4),d=n(5),p=n(7),j=n(6),b=n(62),O=n(0),g=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).prodIdtitle=Object(b.a)(),e.prodIdDesc=Object(b.a)(),e.prodIdSize=Object(b.a)(),e.prodIdokGoogle=Object(b.a)(),e.state={title:"",desc:"",size:"",okGoogle:!1,product:null},e.handleCheck=function(t){var n=t.target,a=n.name,c=n.checked,s=e.state.okGoogle;console.log("name:",a),console.log("checked:",c),e.setState({okGoogle:!s})},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(u.a)({},a,c))},e.handleChangeAllInputs=function(t){var n=t.target,a=n.name,c=n.type,s=n.checked,r=n.value;e.setState(Object(u.a)({},a,"checkbox"===c?s:r))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.title,c=n.desc,s=n.size,r={id:Object(b.a)(),title:a,description:c,size:s};e.setState({product:r}),e.props.addNewProduct(r),e.resetForm()},e.resetForm=function(){e.setState(Object(l.a)({},e.state))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.desc,a=e.size,c=e.okGoogle,s=this.handleChangeAllInputs,r=this.handleSubmit,o=this.prodIdtitle,i=this.prodIdDesc,l=this.prodIdSize,u=this.prodIdokGoogle;return Object(O.jsxs)("form",{onSubmit:r,children:[Object(O.jsx)("label",{htmlFor:o,children:"Title"}),Object(O.jsx)("input",{type:"text",id:o,name:"title",value:t,onChange:s}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:i,children:"Description"}),Object(O.jsx)("input",{type:"text",id:i,name:"desc",value:n,onChange:s}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:l,children:"Choose your size"}),Object(O.jsxs)("select",{name:"size",value:a,onChange:s,id:l,children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"..."}),Object(O.jsx)("option",{value:"s",children:"s"}),Object(O.jsx)("option",{value:"m",children:"m"}),Object(O.jsx)("option",{value:"l",children:"l"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:u,children:"Agree?"}),Object(O.jsx)("input",{type:"checkbox",name:"okGoogle",id:u,checked:c,onChange:s}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",disabled:!c,children:"add"})]})}}]),n}(a.Component),f=n(8);n(40);function x(e){var t=e.unitRef,n=e.isOpen,a=e.toggleState,c=e.keydownHandler,s=e.handleClick,r=e.handleDelete,o=e.textObj,i=o.title,l=o.content,u=o.backBtn,h=o.deleteBtn;return Object(O.jsx)(f.a,{flipId:"wrapper",children:Object(O.jsxs)("div",{ref:t,tabIndex:n?void 0:0,role:"dialog",className:"dialog animated-in",onClick:a,onKeyDown:c,children:[Object(O.jsx)("p",{className:"title content",children:i}),Object(O.jsx)("p",{className:"content",children:l}),Object(O.jsx)("button",{className:"button secondary content",onClick:s,children:u}),Object(O.jsx)("button",{className:"button primary content",onClick:r,children:h})]})})}x.defaultProps={textObj:{title:"Delete this item?",content:"This operation will permenantly delete this item and all its dependencies. This actioncannot be undone",backBtn:"Oh no, bring me back",deleteBtn:"I understand, delete it"}};var m=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isOpen:e.props.isOpen},e.ref=Object(a.createRef)(),e.toggleState=function(){e.state.isOpen||(e.setState((function(e){return{isOpen:!e.isOpen}})),e.ref.current.focus())},e.keydownHandler=function(t){"Enter"!==t.key&&"Escape"!==t.key||e.toggleState()},e.handleClick=function(){return e.setState({isOpen:!1})},e.handleDelete=function(){e.props.onDelete(e.props.id),e.setState({isOpen:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.isOpen,t=this.ref,n=this.keydownHandler,a=this.toggleState,c=this.handleClick,s=this.handleDelete;return Object(O.jsx)(f.b,{flipKey:e,spring:"stiff",stagger:!0,children:e?Object(O.jsx)(x,{unitRef:t,isOpen:e,toggleState:a,keydownHandler:n,handleClick:c,handleDelete:s,textObj:this.props.text}):Object(O.jsx)(f.a,{flipId:"wrapper",children:Object(O.jsx)("div",{ref:t,tabIndex:0,role:"button",className:"button primary",onClick:a,onKeyDown:n,children:Object(O.jsx)(f.a,{flipId:"action",children:Object(O.jsx)("span",{className:"action",children:"Delete"})})})})})}}]),n}(a.Component);function v(e){var t=e.products,n=e.onDeleteProduct;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:"Product List"}),Object(O.jsx)("ul",{children:t.map((function(e){return Object(O.jsxs)("li",{children:[Object(O.jsx)("h3",{children:e.title}),Object(O.jsx)("p",{children:e.description}),Object(O.jsx)(m,{onDelete:n,id:e.id})]},e.id)}))})]})}var y=n(18),k=n.n(y),S=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleEscape=function(t){var n="Escape"===t.code;console.log(n),n&&e.props.toggleModal()},e.handleClose=function(t){t.currentTarget===t.target&&e.props.toggleModal()},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape)}},{key:"componentDidUpdate",value:function(e,t){}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape)}},{key:"render",value:function(){var e=this.props.children;return Object(s.createPortal)(Object(O.jsx)("div",{className:k.a.backDrop,onClick:this.handleClose,children:Object(O.jsx)("div",{className:k.a.content,children:e})}),document.getElementById("modalRoot"))}}]),n}(a.Component),C=n(19),P=n.n(C),w=n(29),D=n(16),_=n.n(D),I=function(){function e(t,n){Object(h.a)(this,e),this.base_url=t,this.api_key=n,this._searchQuery="",this._page=1,this._perPage=5,this.endPoint=""}return Object(d.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"perPage",get:function(){return this._perPage},set:function(e){return this._perPage=e}},{key:"searchPhotos",value:function(){var e=Object(w.a)(P.a.mark((function e(){var t,n,a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _.a.defaults.baseURL=this.base_url,_.a.defaults.headers.common.Authorization=this.api_key,this.endPoint="search",console.log("searchQuery",this.searchQuery,"page",this.page,"perPage",this.perPage),t="?query=".concat(this.searchQuery,"&page=").concat(this.page,"&per_page=").concat(this.perPage),n=this.endPoint+t,e.prev=6,e.next=9,_.a.get(n);case 9:return a=e.sent,c=a.data.photos,e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(6),e.abrupt("return",e.t0.message);case 17:case"end":return e.stop()}}),e,this,[[6,14]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),N=new I("https://api.pexels.com/v1/","563492ad6f9170000100000188f3b8d3cd1047e392f28560cf9684bd");console.log(N);var A=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={searchResults:[],status:"init"},e.handleClick=function(){N.page=1,console.log(N.page),N.searchPhotos().then((function(t){console.log(t),e.setState((function(e){return{searchResults:[].concat(Object(o.a)(e.searchResults),Object(o.a)(t)),status:"success"}}))}))},e}return Object(d.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;e.searchValue===this.props.searchValue&&e.perPage===this.props.perPage||(console.log("get fetch"),this.setState({status:"pending"}),N.resetPage(),N.searchQuery=this.props.searchValue,N.perPage=this.props.perPage,N.searchPhotos().then((function(e){console.log(e),n.setState({searchResults:e,status:"success"})})).catch((function(e){console.log(e),n.setState({status:"error"})})))}},{key:"render",value:function(){return"init"===this.state.status?Object(O.jsx)("h1",{children:"Helo, search something"}):"pending"===this.state.status?Object(O.jsx)("h1",{children:"Loading"}):"success"===this.state.status?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{children:this.state.searchResults.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("img",{src:e.src.tiny,alt:e.photographer})},e.id)}))}),Object(O.jsx)("button",{type:"button",onClick:this.handleClick,children:"Load more"})]}):"error"===this.state.status?Object(O.jsx)("h1",{children:"Alarma!!!"}):void 0}}]),n}(a.Component);function E(e){e.getSearchValues;var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(5),o=Object(i.a)(r,2),l=o[0],u=o[1],h=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"searchValue":u(a);break;case"perPage":s(a)}};return Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("before fetch",c,l),s(""),u("")},children:[Object(O.jsx)("input",{type:"text",name:"searchValue",onChange:h,value:c,placeholder:"Value"}),Object(O.jsx)("input",{type:"number",name:"perPage",onChange:h,value:l,placeholder:"How many results"}),Object(O.jsx)("button",{type:"submit",children:"search"})]})}var z=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=(t[0],t[1],Object(a.useState)(!1)),c=Object(i.a)(n,2),s=(c[0],c[1],Object(a.useState)(!1)),r=Object(i.a)(s,2),l=r[0],u=r[1],h=Object(a.useState)("products",[]),d=Object(i.a)(h,2),p=d[0],j=d[1],b=Object(a.useState)(""),f=Object(i.a)(b,2),x=f[0],m=f[1],y=Object(a.useState)(5),k=Object(i.a)(y,2),C=k[0],P=function(){u(!l)};return(0,k[1])(C),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(E,{getSearchValues:function(e,t){return m(e)}}),Object(O.jsx)(A,{searchValue:x,perPage:C}),l&&Object(O.jsx)(S,{toggleModal:P,children:Object(O.jsx)(g,{addNewProduct:function(e){return j((function(t){return[].concat(Object(o.a)(t),[e])}))}})}),Object(O.jsx)("h1",{children:"FE-35 Product"}),Object(O.jsx)("button",{type:"button",onClick:P,children:"Add product"}),Object(O.jsx)(v,{products:p,onDeleteProduct:function(e){return j((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.0e286de3.chunk.js.map