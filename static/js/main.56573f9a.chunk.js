(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{314:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},318:function(e,t,a){e.exports=a(577)},337:function(e,t){},339:function(e,t){},348:function(e,t,a){},360:function(e,t,a){},361:function(e,t,a){},362:function(e,t,a){},574:function(e,t,a){},575:function(e,t,a){},576:function(e,t,a){},577:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),l=a.n(c),o=a(55),i="Storyliner",s="The Interactive Gossip Viewer",u="/storyliner",m="?source=",d=0,f=1,p=window.localStorage;p.getItem(i)||p.setItem(i,JSON.stringify({}));for(var v=p,h=function(e){for(var t=e.event,a=e.field,n=[a],r=1;t["".concat(a,"_").concat(r)];r++)n.push("".concat(a,"_").concat(r));return n},E=["subject","object","location"],b=a(34),g=a(71),y=a(79),N=a.n(y),w=a(273),k=a.n(w),S=(a(348),Object(g.d)(function(e){var t={href:u,className:"item"};""===e.location.search&&(t={className:"active item",onClick:e.onCurrentClick,style:{cursor:"default"}});var a=[],n=JSON.parse(v.getItem(i));Object.keys(n).forEach(function(e,t){a.push({key:e,title:n[e].title,subtitle:n[e].subtitle,time:n[e].time})}),a.sort(function(e,t){return t.time-e.time});var c=a.map(function(t,a){var n={href:"".concat(u,"/").concat(m).concat(t.key),className:"item"};return e.location.search==="".concat(m).concat(t.key)&&(n={className:"active item",onClick:e.onCurrentClick,style:{cursor:"default"}}),r.a.createElement("a",Object.assign({key:t.key},n),r.a.createElement("span",{className:"ui small header"},t.title,r.a.createElement("span",{className:"sub header"},t.subtitle)))});return r.a.createElement("aside",{className:"Sidebar"},r.a.createElement("h1",{className:"ui header"},r.a.createElement("span",{className:"App-name"},i),r.a.createElement("div",{className:"sub header App-description"},s)),r.a.createElement("nav",{className:"ui vertical secondary fluid menu",style:{margin:"0"}},r.a.createElement("a",t,r.a.createElement("i",{className:"icon home"}),"Home"),c))})),j=a(276),I=a(277),O=a(316),C=a(278),_=a(317),x=(a(360),function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={input:void 0},a.handleInputChange=function(e){a.setState({input:e.target.value})},a.handleSourceSubmit=function(){var e="".concat(a.props.location.pathname,"?").concat(N.a.stringify({source:a.state.input}));console.log(a.props.location.pathname),console.log(e),a.props.history.push(e)},a}return Object(_.a)(t,e),Object(I.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"Home"},r.a.createElement("div",{className:"ui fluid action input"},r.a.createElement("input",{type:"text",placeholder:"Your data source here... (.csv file)",onChange:this.handleInputChange,value:this.state.input||"",autoFocus:!0}),r.a.createElement("button",{className:"ui teal button",onClick:this.handleSourceSubmit},"Submit")),r.a.createElement("hr",{className:"ui hidden section divider"}),r.a.createElement("div",{className:"ui center aligned basic segment"},r.a.createElement("h2",{className:"ui bottom pointing black label",style:{marginBottom:"2rem"}},"Create your own .csv file in 1 minute!"),r.a.createElement("hr",{className:"ui hidden fitted divider"}),r.a.createElement("span",{className:"ui horizontal black label"},"Step 1"),r.a.createElement("h3",{className:"ui tiny header",style:{margin:"1rem 0"}},"Make a copy",r.a.createElement("div",{className:"sub header"},"of this ",r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1w8IAAl2JZhqpmLIxJ8GWNO6KT0CQxM4wCnnIPpGvLPM/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Google Spreadsheet"))),r.a.createElement("span",{className:"ui horizontal black label"},"Step 2"),r.a.createElement("h3",{className:"ui tiny header",style:{margin:"1rem 0"}},"Publish it by clicking",r.a.createElement("div",{className:"sub header"},r.a.createElement("code",{className:"ui horizontal basic label"},"File")," > ",r.a.createElement("code",{className:"ui horizontal basic label"},"Publish to the web..."))),r.a.createElement("span",{className:"ui horizontal black label"},"Step 3"),r.a.createElement("h3",{className:"ui tiny header",style:{margin:"1rem 0"}},"Select the format of",r.a.createElement("div",{className:"sub header"},r.a.createElement("code",{className:"ui horizontal basic label"},"Comma-seperated values (.csv)"))),r.a.createElement("span",{className:"ui horizontal black label"},"Step 4"),r.a.createElement("h3",{className:"ui tiny header",style:{margin:"1rem 0"}},"Click the",r.a.createElement("div",{className:"sub header"},r.a.createElement("code",{className:"ui horizontal basic label"},"Publish")," button")),r.a.createElement("span",{className:"ui horizontal black label"},"Step 5"),r.a.createElement("h3",{className:"ui tiny header",style:{margin:"1rem 0"}},"Copy the provided URL",r.a.createElement("div",{className:"sub header"},"and paste here")),r.a.createElement("h3",{className:"ui top pointing black label"},"And you are done!")))}}]),t}(r.a.Component)),A=Object(g.d)(x),T=(a(361),function(e){var t=e.logo,a=e.title,n=e.subtitle,c=e.onIconClick,l=e.onLogoClick,o="redo";switch(e.status){case"success":o="green check";break;case"loading":o="blue spinner";break;case"invalid":o="";break;case"error":o="red exclamation triangle";break;default:o="redo"}return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"wrapper ui container",style:{display:"flex"}},r.a.createElement("span",{style:{flex:"none"}},r.a.createElement("img",{src:t,alt:"logo",className:"ui image App-logo",onClick:l})),r.a.createElement("h1",{className:"ui header",style:{flexGrow:"1",margin:"0"}},r.a.createElement("span",{className:"App-name"},a),r.a.createElement("div",{className:"sub header App-description"},n)),r.a.createElement("div",{style:{flex:"none"}},""===o?null:r.a.createElement("i",{className:"icon ".concat(o),onClick:c}))))}),q=(a(362),function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{className:"ui center aligned container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"Yet another open data experiment by ETBlue.",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/ETBlue/storyliner",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon code"}),"Source code"),r.a.createElement("a",{href:"https://etblue.github.io/storyliner/?source=https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8ukLhLNcPLc20_7J2ju6_e_KSLW2RW0LDu_1_4__IvaVUCO1BhZ9RGwefcWkOVRQ8XjlYv6MSe8oA/pub?output=csv"},r.a.createElement("i",{className:"icon globe"}),"Sample page"),r.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1w8IAAl2JZhqpmLIxJ8GWNO6KT0CQxM4wCnnIPpGvLPM/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon table"}),"Sample data"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://etblue.blogspot.com/2018/04/storyliner-interactive-gossip-viewer.html",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon blogger b"}),"Release note"),r.a.createElement("a",{href:"https://twitter.com/ETBlue/status/981475770836049922",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon twitter"}),"Dev log"),r.a.createElement("a",{href:"https://www.facebook.com/ETBlue/media_set?set=a.10212507248088923.1073741901.1014354995",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon facebook f"}),"Dev log"),r.a.createElement("a",{href:"https://www.playpcesor.com/2018/04/storyliner-google.html",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"icon blogger b"}),"Tutorial (by \u96fb\u8166\u73a9\u7269)")))))}),z=a(315),L=function(e){var t=e.filter,a=e.setFilter;return r.a.createElement("div",{className:"Filter ui two column stackable grid"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement("p",{className:"Filter-message"},"Filtered by",r.a.createElement("span",{className:"ui horizontal label",style:{margin:"0 0.5rem"}},t,r.a.createElement("i",{className:"icon delete",onClick:function(){return a(t)}})))))},D=function(e){var t=e.event,a=e.label,n=e.props,c=e.size,l=e.sla,o=[];return t["".concat(a,"_prep")]&&t["".concat(a,"_prep")].length>0&&o.push(r.a.createElement("span",{key:"".concat(a,"_prep")},t["".concat(a,"_prep")])),t[a]&&t[a].length>0&&o.push(r.a.createElement("span",{key:a,className:"ui ".concat(c," horizontal label"),style:{backgroundColor:"hsla(".concat(n.labelColor[t[a]],", ").concat(l,")")},onClick:function(){return n.setFilter(t[a])}},t[a])),o},M=function(e){var t=e.event,a=e.props,n=h({event:t,field:"subject"}),c=h({event:t,field:"object"});return r.a.createElement("p",{className:"Relation"},n.map(function(e){return r.a.createElement(D,{key:e,event:t,label:e,size:"large",sla:"50%, 50%, 0.3",props:a})}),t.action&&t.action.length>0?r.a.createElement("span",null,t.action):null,c.map(function(e){return r.a.createElement(D,{key:e,event:t,label:e,size:"large",sla:"50%, 50%, 0.3",props:a})}),t.topic&&t.topic.length>0?r.a.createElement("span",null,t.topic):null)},R=function(e){var t=e.event,a=e.props,n=h({event:t,field:"location"});return r.a.createElement("p",{className:"Locaiton description"},n.map(function(e){return r.a.createElement(D,{key:e,event:t,label:e,size:"small",sla:"20%, 70%, 0.3",props:a})}))},P=function(e){var t=e.quotes,a=t.map(function(e,a){var n=null;return e.author.length>0&&(t[a+1]&&e.author===t[a+1].author||(n=r.a.createElement("p",{className:"Author"},"\u2014 ",e.author))),r.a.createElement("blockquote",{key:a},r.a.createElement("i",{className:"quote left icon"}),r.a.createElement("i",{className:"quote right icon"}),e.content,n)});return r.a.createElement("div",{className:"QuoteList ui secondary segment"},a)},B=function(e){var t=e.event,a=e.eventIndex,n=e.isActive,c=e.props,l=e.refEventIndex,i=e.refEvent,s=e.refEventTitle,u=t.quote&&t.quote.length>0,m=l===a,d=Object.assign({},c.queries);m?delete d.ref:d.ref=a.toString();var f="".concat(c.location.pathname,"?").concat(N.a.stringify(d)).concat(c.location.hash);return r.a.createElement("article",{key:a,id:a,className:"Event"},r.a.createElement("div",{className:"ui two column stackable grid"},r.a.createElement("div",{className:"eleven wide column"},i&&!m?r.a.createElement("div",{className:"reference"},r.a.createElement("div",{className:"text"},function(e){var t,a=e.event,n=e.refEvent,r=e.refEventTitle,c=a.momentDate.to(n.momentDate,!0);return t=a.momentDate.isBefore(n.momentDate)?"".concat(c," before"):a.momentDate.isAfter(n.momentDate)?"".concat(c," after"):"same day as","".concat(t," ").concat(r)}({event:t,refEvent:i,refEventTitle:s}))):null,r.a.createElement("div",{className:"Event-block ui segments ".concat(n?"active":"")},r.a.createElement("div",{className:"ui segment"},r.a.createElement("a",{className:"Timestamp",href:"#".concat(a)},t.year,"-",t.month,"-",t.date," ",t.time||null),r.a.createElement(o.b,{to:f,className:"RefMeButton ui basic mini icon button"},r.a.createElement("i",{className:"".concat(m?"teal":""," icon thumbtack")})),r.a.createElement("div",{className:"Content"},t.image_url?r.a.createElement("div",{className:"Content-image"},r.a.createElement("a",{href:t.image_url,target:"_blank",rel:"noopener noreferrer",className:"ui small bordered rounded image"},r.a.createElement("img",{src:t.image_url,alt:t.image_alt}))):null,r.a.createElement("div",{className:"Content-text"},r.a.createElement(M,{event:t,props:c}),t.description?r.a.createElement("p",{className:"description"},t.description):null,function(e){var t=e.event;return t.location&&t.location.length>0||t.location_1&&t.location_1.length>0}({event:t})?r.a.createElement(R,{event:t,props:c}):null,function(e){var t=e.event;return t.channel&&t.channel.length>0||t.channel_carrier&&t.channel_carrier.length>0}({event:t})?r.a.createElement("p",{className:"description"},t.channel_prep,t.channel,t.content_carrier," \u2014 ",r.a.createElement("a",{href:t.ref_url,target:"_blank",rel:"noopener noreferrer"},t.ref_title&&t.ref_title.length>0?t.ref_title:t.ref_url)):null))),u?r.a.createElement(P,{quotes:t.quote}):null)),t.note&&t.note.length>0?r.a.createElement("div",{className:"five wide column"},r.a.createElement("div",{className:"Note"},r.a.createElement("div",{className:"ui horizontal fitted divider"},r.a.createElement("i",{className:"icon coffee"})),r.a.createElement("p",{className:"Note-content"},t.note))):null))},J=function(e){var t=e.year,a=e.eventIndex,n=e.isStaged,c=e.isInViewPort;return r.a.createElement("div",{key:"year-of-".concat(a),className:"MenuYearMark item ".concat(n?"":"not-staged"," ").concat(c?"in-viewport":"")},t)},W=function(e){var t=e.eventIndex,a=e.isActive,n=e.isInViewPort,c=e.isStaged,l=e.month,o=e.date,i=e.time;return r.a.createElement("a",{key:t,href:"#".concat(t),className:"MenuItem item ".concat(a?"active":""," ").concat(n?"in-viewport":""," ").concat(c?"":"not-staged")},"".concat(l,"/").concat(o),i?r.a.createElement("span",{className:"Time"},i):null)},F=(a(574),Object(g.d)(function(e){var t=[],a=[],n=parseInt(e.queries.ref,10),c=isNaN(n)?null:e.events[n],l=c?["subject","subject_1_prep","subject_1","action","object","object_1_prep","object_1","topic"].map(function(e){return c[e]}).join(""):null;return e.events.forEach(function(o,i){if(!o.date)return null;var s,u=(s=e.location.hash,parseInt(s.replace("#",""),10)===i);(function(e){var t=e.filter,a=e.event;if(0===t.length)return!0;var n=[],r=!0,c=!1,l=void 0;try{for(var o,i=E[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var s=o.value,u=h({event:a,field:s});n=n.concat(u)}}catch(b){c=!0,l=b}finally{try{r||null==i.return||i.return()}finally{if(c)throw l}}var m=!0,d=!1,f=void 0;try{for(var p,v=n[Symbol.iterator]();!(m=(p=v.next()).done);m=!0)if(t===a[p.value])return!0}catch(b){d=!0,f=b}finally{try{m||null==v.return||v.return()}finally{if(d)throw f}}return!1})({filter:e.filter,event:o})&&a.push(r.a.createElement(B,{key:i,eventIndex:i,event:o,isActive:u,props:e,refEventIndex:n,refEvent:c,refEventTitle:l}));var m=function(e){var t=e.firstStagedEventIndex,a=e.lastStagedEventIndex,n=e.eventIndex;return n>=t&&n<=a}({firstStagedEventIndex:e.firstStagedEventIndex,lastStagedEventIndex:e.lastStagedEventIndex,eventIndex:i}),d=function(e){var t=e.visibleEventIDs,a=e.eventIndex;return t.includes(a)}({visibleEventIDs:e.visibleEventIDs,eventIndex:i});0===i?t.push(r.a.createElement(J,{key:"year-of-".concat(i),eventIndex:i,isInViewPort:d,isStaged:m,year:o.year})):function(e){var t=e.events,a=e.eventIndex,n=t[a],r=t[a-1];return n.year!==r.year}({events:e.events,eventIndex:i})&&t.push(r.a.createElement(J,{key:"year-of-".concat(i),eventIndex:i,isInViewPort:d,isStaged:m,year:o.year})),t.push(r.a.createElement(W,{key:i,eventIndex:i,isActive:u,isInViewPort:d,isStaged:m,month:o.month,date:o.date,time:o.time}))}),r.a.createElement("div",{className:"Body"},r.a.createElement("div",{className:"Menu-wrapper",ref:e.handleContextRef},r.a.createElement(z.a,{context:e.contextRef},r.a.createElement("nav",{className:"ui vertical fluid secondary mini pointing pink menu"},r.a.createElement("span",{className:"item",style:{cursor:"pointer"},onClick:function(){return e.scrollReset("top")}},r.a.createElement("i",{className:"icon up chevron",style:{float:"none",opacity:"0.5"}})),t,r.a.createElement("span",{className:"item",style:{cursor:"pointer"},onClick:function(){return e.scrollReset("bottom")}},r.a.createElement("i",{className:"icon down chevron",style:{float:"none",opacity:"0.5"}}))))),r.a.createElement("div",{className:"Event-wrapper"},e.filter.length>0?r.a.createElement(L,e):null,a))})),G=a(313),V=a.n(G),H=[],Q=0;Q<12;Q++)H.push(30*Q);var Y=H,U=function(e){var t=e[d],a=t[0],n=t[1],r=[],c=e[f],l=new Set;e.forEach(function(e,t){if(!(t<=f)){var a={quote:[]},n="";if(e.forEach(function(e,t){var r=c[t];switch(r){case"quote_author":n=e||"";break;case"quote_content":e&&e.length>0&&e.split("\n").forEach(function(e){a.quote.push({author:n,content:e})});break;case"via":a.channel_prep=e||"";break;case"content_topic":a.topic=e||"";break;default:a[r]=e||"",function(e){var t=!0,a=!1,n=void 0;try{for(var r,c=E[Symbol.iterator]();!(t=(r=c.next()).done);t=!0){var l=r.value;if(e.includes(l)&&!e.includes("_prep"))return!0}}catch(o){a=!0,n=o}finally{try{t||null==c.return||c.return()}finally{if(a)throw n}}return!1}(r)&&l.add(e)}}),0===a.date.length)r[r.length-1].quote=r[r.length-1].quote.concat(a.quote);else{var o=Object.assign(a,function(e){var t=V()(e.date),a=e.date.includes("/")||e.date.includes("-")||e.date.length>5;return{year:a?t.year():e.date,month:a?t.month()+1:"?",date:a?t.date():"?",time:e.time&&e.time.length>0?e.time:null,momentDate:t}}(a));r.push(o)}}});var o={},i=new Set(Y);return l.delete(""),l.forEach(function(e){var t=Math.floor(Math.random()*i.size),a=Array.from(i)[t];o[e]=a,i.delete(a),0===i.size&&(i=new Set(Y))}),{title:a,subtitle:n,events:r,labelColor:o}},K=function(e){var t=[];return Array.from(e).forEach(function(e){(function(e){var t=e.offsetTop,a=t+e.offsetHeight,n=window.scrollY,r=n+window.innerHeight;return a>n&&t<r})(e)&&t.push(parseInt(e.id,10))}),t.sort(function(e,t){return e-t}),t},Z=a(314),X=a.n(Z),$=(a(575),Object(g.d)(function(e){var t=N.a.parse(e.location.search),a=Object(n.useState)("standby"),c=Object(b.a)(a,2),l=c[0],o=c[1],u=Object(n.useState)(""),m=Object(b.a)(u,2),d=m[0],f=m[1],p=Object(n.useState)(""),h=Object(b.a)(p,2),E=h[0],g=h[1],y=Object(n.useState)(void 0),w=Object(b.a)(y,2),j=w[0],I=w[1],O=Object(n.useState)([]),C=Object(b.a)(O,2),_=C[0],x=C[1],z=Object(n.useState)([]),L=Object(b.a)(z,2),D=L[0],M=L[1],R=Object(n.useState)(0),P=Object(b.a)(R,2),B=P[0],J=P[1],W=Object(n.useState)(10),G=Object(b.a)(W,2),V=G[0],H=G[1],Q=function(){var e=K(window.eventElements);M(e),J(e[0]-5),H(e[e.length-1]+5)},Y=Object(n.useCallback)(function(){t.source&&0!==decodeURIComponent(t.source).length?(o("loading"),k.a.parse(t.source,{download:!0,complete:function(e){var a=U(e.data);!function(e){var t=e.title,a=e.subtitle,n=e.storage,r=e.source,c=JSON.parse(n.getItem(i));for(var l in c[r]={title:t,subtitle:a,time:Date.now()},c)l.match(/^http/)&&!c[l].title.includes("<!DOCTYPE html>")||delete c[l];n.setItem(i,JSON.stringify(c))}({title:a.title,subtitle:a.subtitle,storage:v,source:t.source}),f(a.title),g(a.subtitle),I(a.labelColor),x(a.events),o("success"),window.eventElements=window.document.getElementsByClassName("Event"),Q(),window.addEventListener("scroll",Q),window.setTimeout(function(){o("standby")},5e3)},error:function(e){console.error(e)}})):o("invalid")},[t.source]);Object(n.useEffect)(function(){return Y(),function(){delete window.eventElements,window.removeEventListener("scroll",Q)}},[t.source]);var Z=Object(n.useState)(""),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ae=function(e){te(ee===e?"":e)},ne=Object(n.useState)(!1),re=Object(b.a)(ne,2),ce=re[0],le=re[1],oe=function(){le(function(e){return!e})},ie=Object(n.useCallback)(function(t){e.history.push("".concat(e.location.pathname).concat(e.location.search)),"top"===t?window.scrollTo(0,0):"bottom"===t&&window.scrollTo(0,window.document.body.scrollHeight)},[e.history,e.location.pathname,e.location.search]),se=Object(n.useState)(null),ue=Object(b.a)(se,2),me=ue[0],de=ue[1],fe=function(e){de(e)},pe=t.source&&_.length>0,ve=Object(n.useMemo)(function(){return r.a.createElement(S,{onCurrentClick:oe})},[]),he=Object(n.useMemo)(function(){return r.a.createElement(T,{logo:X.a,title:pe?d:i,subtitle:pe?E:s,status:l,onIconClick:Y,onLogoClick:oe})},[d,E,l,pe]),Ee=Object(n.useMemo)(function(){return r.a.createElement(F,{handleContextRef:fe,scrollReset:ie,setFilter:ae,queries:t,events:_,filter:ee,firstStagedEventIndex:B,lastStagedEventIndex:V,visibleEventIDs:D,contextRef:me,labelColor:j})},[t,_,ee,j,B,V,D,me]);return r.a.createElement("div",{className:"App",style:ce?{left:"20rem"}:{}},ve,r.a.createElement("main",{className:"App-main"},he,r.a.createElement("section",{className:"Body-wrapper ui container"},pe?Ee:r.a.createElement(A,null)),r.a.createElement("hr",{className:"ui divider"}),r.a.createElement(q,null)))})),ee=(a(576),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function te(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(o.a,{basename:u},r.a.createElement($,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/storyliner",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/storyliner","/service-worker.js");ee?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):te(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):te(e)})}}()}},[[318,1,2]]]);
//# sourceMappingURL=main.56573f9a.chunk.js.map