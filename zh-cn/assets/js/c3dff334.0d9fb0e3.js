"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7551],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9809:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),s=(t(7294),t(3905)),a=["components"],i={id:"cluster",title:"Cluster"},l=void 0,p={unversionedId:"api/cluster",id:"api/cluster",title:"Cluster",description:"\x3c!--",source:"@site/docs/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/api/cluster",tags:[],version:"current",frontMatter:{id:"cluster",title:"Cluster"},sidebar:"docs",previous:{title:"Run TensorFlow Jobs",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/user_guide/workloads/run_tf"},next:{title:"Scheduler",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/api/scheduler"}},u=[{value:"Clusters",id:"clusters",children:[{value:"Success response",id:"success-response",children:[],level:3},{value:"Error response",id:"error-response",children:[],level:3}],level:2},{value:"Clusters utilization",id:"clusters-utilization",children:[{value:"Success response",id:"success-response-1",children:[],level:3},{value:"Error response",id:"error-response-1",children:[],level:3}],level:2}],c={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"clusters"},"Clusters"),(0,s.kt)("p",null,"Returns general information about the clusters managed by the YuniKorn Scheduler. Information includes number of (total, failed, pending, running, completed) applications and containers.  "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"URL")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Method")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Auth required")," : NO"),(0,s.kt)("h3",{id:"success-response"},"Success response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("p",null,"As an example, here is a response from a 2-node cluster with 3 applications and 4 running containers."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "partition": "[rm-123]default",\n        "clusterName": "kubernetes",\n        "totalApplications": "3",\n        "failedApplications": "1",\n        "pendingApplications": "",\n        "runningApplications": "3",\n        "completedApplications": "",\n        "totalContainers": "4",\n        "failedContainers": "",\n        "pendingContainers": "",\n        "runningContainers": "4",\n        "activeNodes": "2",\n        "totalNodes": "2",\n        "failedNodes": ""\n    }\n]\n')),(0,s.kt)("h3",{id:"error-response"},"Error response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')),(0,s.kt)("h2",{id:"clusters-utilization"},"Clusters utilization"),(0,s.kt)("p",null,"Returns statistical data related the cluster resource utilization"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"URL")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"/ws/v1/clusters/utilization")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Method")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"GET")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Auth required")," : NO"),(0,s.kt)("h3",{id:"success-response-1"},"Success response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "partition": "[mycluster]default",\n        "utilization": [\n            {\n                "type": "memory",\n                "total": 5076,\n                "used": 1500,\n                "usage": "29%"\n            },\n            {\n                "type": "vcore",\n                "total": 4000,\n                "used": 300,\n                "usage": "7%"\n            }\n        ]\n    }\n]\n')),(0,s.kt)("h3",{id:"error-response-1"},"Error response"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Code")," : ",(0,s.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Content examples")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}d.isMDXComponent=!0}}]);