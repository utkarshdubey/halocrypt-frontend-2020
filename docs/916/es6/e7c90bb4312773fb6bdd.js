(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{7:(e,t,s)=>{"use strict";s.d(t,{u:()=>d,k:()=>c});var r=s(77),o=s(649),n=s(804),i=s(369);const a=(0,i.Z)({},window.__initConfig);window.__initConfig=null;const u=n.h.getStore(),d=window.requestIdleCallback||window.requestAnimationFrame||window.Promise&&Promise.prototype.then.bind(Promise.resolve())||setTimeout;const c=new class{constructor(){this.pageViewRegistered="register-start",this.registerActionComplete="register-end",this.pageViewLogin="login-start",this.loginActionCompleted="login-end",this.pageViewPlay="play-start",this.accessQuestion="question",this.answeredQuestion="answered",this.leaderboardView="leaderboard",this.profileView="profile",this.passwordResetRequested="password-reset"}__shouldPostLog(){return!1}_admin_getLogs(){if(u.isLoggedIn&&u.userData.is_admin)return(0,o.A)(r.PW.getLogs)}sendUserLog(e){const t="string"==typeof e?{type:e}:e,s=(0,i.Z)({},t,a);this.__shouldPostLog()?d(()=>(0,o.V)(r.PW.addLog,s)):console.log("prod log post ->",s)}};window.onerror=(e,t,s,r,o)=>{const n=o||{};e=e||n.message||"";const i=o.line||n.message||0,a=o.column||0,u=n.script||"",d=n.stackTrace||n.stack||"",l=Date.now(),h=location.href;c.sendUserLog({type:"js-error",timestamp:l,message:e,line:i,column:a,script:u,stack:d,url:h,source:t})}},916:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var r=s(386),o=s(710),n=s(67),i=s(77),a=s(649),u=s(7);function d(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const c=i.EA.forgotPassword,l=e=>(e.target.value||"").trim();class h extends r.wA{constructor(...e){var t;super(...e),t=this,d(this,"state",{user:"",isLoading:!1}),d(this,"onSubmit",()=>{if(this.state.isLoading)return;const e=this.state.user.replace(n.Pt,"");this.setState({isLoading:!0,success:!1}),(0,a.V)(c,{user:e}).then(e=>{if(e.error||e.data.error)return this.setState({error});this.setState({success:!0,isLoading:!1})}),u.k.sendUserLog(u.k.passwordResetRequested)}),d(this,"onInputUserName",(async function(e){return t.setState({user:l(e)})})),d(this,"onInputPasswordToken",e=>this.setState({passwordToken:l(e)})),d(this,"onInputNewPassword",e=>this.setState({newPassword:l(e)})),d(this,"onInputConfNewPassword",e=>this.setState({confNewPassword:l(e)})),d(this,"onSubmitPasswordToken",()=>{if(this.state.isLoading)return;const e=(this.state.passwordToken||"").trim(),t=this.state.newPassword,s=this.state.confNewPassword,o=[];if(e||o.push("token"),t||o.push("password"),s||o.push("confirm password"),t!==s&&o.push("Passwords must match"),o.length)return this.setState({error:o});this.setState({isLoading:!0}),(0,a.V)(i.EA.checkPasswordToken,{token:e,new_password:t}).then(e=>{const t=e.error||e.data.error;if(t)return this.setState({error:t,isLoading:!1});(0,r.uX)("/login?changed-password=true")})}),d(this,"_resetError",()=>this.setState({error:null}))}render(e,t){return(0,r.az)("div",{children:[t.error&&(0,r.az)(n.OK,{errorHead:"Failed",reasons:Array.isArray(t.error)?t.error:[t.error],close:this._resetError}),(0,r.az)("div",{class:"heading-text bfont mtx-fp",children:"Reset"}),(0,r.az)("div",{class:"clr heading-text",children:"Gold Fish Memory?"}),(0,r.az)("form",{action:"javascript:",onSubmit:t.success?this.onSubmitPasswordToken:this.onSubmit,children:[t.success&&"Check your email for the token",(0,r.az)("div",{class:"input-parent",children:t.success?(0,r.az)("div",{children:[(0,r.az)(o.H,{onInput:this.onInputPasswordToken,labelText:"Token"}),(0,r.az)(o.H,{onInput:this.onInputNewPassword,labelText:"New Password",type:"password"}),(0,r.az)(o.H,{onInput:this.onInputConfNewPassword,labelText:"Confirm",type:"password"})]}):(0,r.az)(o.H,{onInput:this.onInputUserName,labelText:"Username"})}),(0,r.az)("button",{class:"action-button hoverable heading-text",children:"Submit"})]}),t.isLoading&&"Hang on.. Contacting our servers"]})}}},710:(e,t,s)=>{"use strict";s.d(t,{H:()=>n});var r=s(386);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class n extends r.wA{constructor(...e){super(...e),o(this,"state",{id:Math.random(),isFocused:!1,value:this.props.value||""}),o(this,"onFocus",()=>!this.state.value&&this.setState({isFocused:!0,moveDown:!1})),o(this,"onBlur",()=>!this.state.value&&this.setState({isFocused:!1,moveDown:!0})),o(this,"onInput",e=>this.setState({value:e.target.value})),o(this,"__onInput",e=>{const t=this.props.onInput;this.onInput(e),null!=t&&t(e)})}render({id:e,labelText:t="",type:s="text",inputClass:o,extraProps:n},{isFocused:a,moveDown:u}){const d=e||this.state.id,c=this.state.value,l=["_animate",a||c?"moveup":"",u?"movedown":""];return(0,r.h)("div",{class:"user-input-anim "+(o||"")},(0,r.h)("label",{class:l,for:d},t),(0,r.h)(i,{onFocus:this.onFocus,onBlur:this.onBlur,type:s,value:c,extraProps:n,id:d,onInput:this.__onInput}))}}function i({onFocus:e,onBlur:t,onInput:s,id:o,type:n,value:i,extraProps:a}){return(0,r.h)("input",{onFocus:e,onBlur:t,onInput:s,id:o,value:i,type:n,...a,class:"paper-input"})}},67:(e,t,s)=>{"use strict";s.d(t,{OK:()=>o,Pt:()=>n});var r=s(386);function o(e){return(0,r.az)(i,{...Object.assign({},e,{title:"Something Ain't Right"})})}const n=/([^\w]|_)/g;function i(e){return(0,r.az)("div",{class:"app-popup",children:[(0,r.az)("div",{class:"heading-text clr app-popup-title",children:e.title}),(0,r.az)("div",{children:e.errorHead}),(0,r.az)("div",{class:"err-reasons",children:(0,r.az)("div",{children:e.reasons.map(e=>(0,r.az)("div",{children:[" - ",e]}))})}),(0,r.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}}}]);