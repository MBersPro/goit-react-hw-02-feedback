(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(4),i=c.n(r),s=(c(15),c(5)),o=c(6),l=c(7),u=c(10),b=c(9),d=c(2),j=c(0),h=["good","neutral","bad"],O=function(e){var t=e.leaveFeedback;return Object(j.jsx)("ul",{className:d.ul,children:h.map((function(e){return Object(j.jsx)("li",{className:d.li,children:Object(j.jsx)("button",{className:d.button,onClick:function(){return t(e)},children:e})})}))})},f=function(e){var t=e.children,c=e.title;return console.log({children:t}),Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:c}),t]})},x=function(){return Object(j.jsx)("li",{children:Object(j.jsx)("p",{children:"No feedback given"})})},k=c(8),g=function(e){var t=e.state,c=e.total,n=e.percentage;return Object(j.jsx)("ul",{className:k.ul,children:c()?Object(j.jsxs)(j.Fragment,{children:[t.map((function(e){return Object(j.jsxs)("li",{children:[e[0],": ",e[1]]})})),Object(j.jsxs)("li",{children:["total: ",c()]}),Object(j.jsxs)("li",{children:["Positive feedback: ",n(),"%"]})]}):Object(j.jsx)(x,{})})},v=function(e){Object(u.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.floor(e.state.good/e.countTotalFeedback()*100)||0},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{title:"Please Leave Feedback",children:Object(j.jsx)(O,{leaveFeedback:this.leaveFeedback})}),Object(j.jsx)(f,{title:"Statistics",children:Object(j.jsx)(g,{state:Object.entries(this.state),total:this.countTotalFeedback,percentage:this.countPositiveFeedbackPercentage})})]})}}]),c}(n.Component),p=v;i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))},2:function(e,t,c){e.exports={ul:"Feedback_ul__3tJLA",li:"Feedback_li__15pwb",button:"Feedback_button__1zu0g"}},8:function(e,t,c){e.exports={ul:"Statistics_ul__2hddz"}}},[[17,1,2]]]);
//# sourceMappingURL=main.d9ddd390.chunk.js.map