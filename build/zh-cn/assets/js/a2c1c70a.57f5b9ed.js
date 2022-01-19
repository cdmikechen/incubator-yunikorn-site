"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7389],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6763:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={id:"cluster",title:"Cluster"},l=void 0,c={unversionedId:"api/cluster",id:"version-0.10.0/api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/zh-cn/docs/0.10.0/api/cluster",tags:[],version:"0.10.0",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"version-0.10.0/docs",previous:{title:"Run Tensorflow Jobs",permalink:"/zh-cn/docs/0.10.0/user_guide/workloads/run_tf"},next:{title:"Scheduler",permalink:"/zh-cn/docs/0.10.0/api/scheduler"}},u=[{value:"Clusters",id:"clusters",children:[{value:"Success response",id:"success-response",children:[],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"clusters"},"Clusters"),(0,i.kt)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Auth required")," : NO"),(0,i.kt)("h3",{id:"success-response"},"Success response"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Content examples")),(0,i.kt)("p",null,"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n')))}d.isMDXComponent=!0}}]);