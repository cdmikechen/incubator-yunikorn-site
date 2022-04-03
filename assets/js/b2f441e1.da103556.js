"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7385],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return p}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(t),p=i,f=d["".concat(s,".").concat(p)]||d[p]||h[p]||o;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function p(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31737:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return h}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),c=["components"],a={id:"architecture",title:"Architecture"},s=void 0,u={unversionedId:"design/architecture",id:"version-0.9.0/design/architecture",title:"Architecture",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/design/architecture.md",sourceDirName:"design",slug:"/design/architecture",permalink:"/docs/0.9.0/design/architecture",tags:[],version:"0.9.0",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"version-0.9.0/docs",previous:{title:"Deploy to Kubernetes",permalink:"/docs/0.9.0/developer_guide/deployment"},next:{title:"Scheduler Core Design",permalink:"/docs/0.9.0/design/scheduler_core_design"}},l={},h=[{value:"Architecture",id:"architecture",level:2},{value:"Scheduler interface",id:"scheduler-interface",level:3},{value:"Scheduler core",id:"scheduler-core",level:3},{value:"Kubernetes shim",id:"kubernetes-shim",level:3}],d={toc:h};function p(e){var r=e.components,a=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache YuniKorn (Incubating) is a light-weight, universal resource scheduler for container orchestrator systems.\nIt is created to achieve fine-grained resource sharing for various workloads efficiently on a large scale, multi-tenant,\nand cloud-native environment. YuniKorn brings a unified, cross-platform, scheduling experience for mixed workloads that\nconsist of stateless batch workloads and stateful services."),(0,o.kt)("p",null,"YuniKorn now supports K8s and can be deployed as a custom K8s scheduler. YuniKorn's architecture design also allows\nadding different shim layer and adopt to different ResourceManager implementation including Apache Hadoop YARN,\nor any other systems."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"Following chart illustrates the high-level architecture of YuniKorn."),(0,o.kt)("img",{src:t(55379).Z}),"![](./../assets/architecture.png) ## Components",(0,o.kt)("h3",{id:"scheduler-interface"},"Scheduler interface"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"Scheduler interface")," is an abstract layer\nwhich resource management platform (like YARN/K8s) will speak with, via API like GRPC/programing language bindings."),(0,o.kt)("h3",{id:"scheduler-core"},"Scheduler core"),(0,o.kt)("p",null,"Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of schedule core ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.9.0/design/scheduler_core_design"},"here"),"."),(0,o.kt)("h3",{id:"kubernetes-shim"},"Kubernetes shim"),(0,o.kt)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"scheduler interface"),".\nPlease read more about the design of the Kubernetes shim ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.9.0/design/k8shim"},"here")))}p.isMDXComponent=!0},55379:function(e,r,t){r.Z=t.p+"assets/images/architecture-333225e01d82300eb9ee34e76cf34697.png"}}]);