(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{564:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var i=n(386),s=n(804),a=n(77),r=n(67),o=n(596);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=s.h.getStore(),d=e=>(e||"").toLowerCase().replace(r.P,"");class h extends i.wA{constructor(...e){super(...e),c(this,"state",{fetchedQuestion:null,isFetching:!1,answer:""}),c(this,"onInput",e=>this.setState({answer:d(e.target.value)})),c(this,"proceedToNextLevel",()=>{this.setState({fetchedQuestion:null})})}componentDidMount(){if(!u.isLoggedIn)return(0,i.uX)("/login?next=/play");this.fetchQuestion()}componentDidUpdate(){if(null==this.state.fetchedQuestion)return this.fetchQuestion()}async fetchQuestion(){if(this.state.isFetching)return;this.setState({isFetching:!0});const e=await(0,o.A)(a.hY.getQuestion);if(e.error)return this.setState({hasError:!0,isFetching:!1,fetchedQuestion:1});const t=e.data;this.setState({fetchedQuestion:t,isFetching:!1})}render(e,t){return t.isFetching||!t.fetchedQuestion?(0,i.az)(l,{data:{question_level:"Loading",question:"Finding your question, you can",hint:["wait","wait","wait"]}}):(0,i.az)(l,{data:t.fetchedQuestion,value:t.answer,onInput:this.onInput})}}function l(e){const{data:t,value:n,onInput:s}=e;return(0,i.az)("div",{children:[(0,i.az)("div",{children:["Question - ",t.question_level]}),(0,i.az)("div",{children:t.question}),(0,i.az)("div",{children:t.hint.map((e,t)=>(0,i.az)("div",{children:[(0,i.az)("span",{children:["Hint ",t+1,":"]})," ",(0,i.az)("span",{children:e})]}))}),(0,i.az)("input",{onInput:s,value:n})]})}},67:(e,t,n)=>{"use strict";n.d(t,{O:()=>s,P:()=>a});var i=n(386);function s(e){return(0,i.az)("div",{class:"app-popup",children:[(0,i.az)("div",{class:"heading-text clr app-popup-title",children:"Something Ain't Right"}),(0,i.az)("div",{children:e.errorHead}),(0,i.az)("div",{class:"err-reasons",children:(0,i.az)("div",{children:e.reasons.map(e=>(0,i.az)("div",{children:[" - ",e]}))})}),(0,i.az)("button",{class:"app-popup-close",onClick:e.close,children:"OK"})]})}const a=/([^\w]|_)/g}}]);