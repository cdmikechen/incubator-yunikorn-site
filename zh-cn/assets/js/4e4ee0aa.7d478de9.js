"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1483],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return h}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),h=i,f=d["".concat(a,".").concat(h)]||d[h]||p[h]||c;return t?r.createElement(f,o(o({ref:n},l),{},{components:t})):r.createElement(f,o({ref:n},l))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=d;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<c;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},901:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(7462),i=t(3366),c=(t(7294),t(3905)),o=["components"],u={id:"architecture",title:"\u67b6\u6784"},a=void 0,s={unversionedId:"design/architecture",id:"design/architecture",title:"\u67b6\u6784",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/design/architecture.md",sourceDirName:"design",slug:"/design/architecture",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/design/architecture",tags:[],version:"current",frontMatter:{id:"architecture",title:"\u67b6\u6784"},sidebar:"docs",previous:{title:"\u5728 CodeReady \u5bb9\u5668\u4e2d\u5f00\u53d1",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/developer_guide/openshift_development"},next:{title:"Scheduler Core Design",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/design/scheduler_core_design"}},l=[{value:"\u67b6\u6784",id:"\u67b6\u6784",children:[],level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",children:[{value:"\u8c03\u5ea6\u5668\u63a5\u53e3",id:"\u8c03\u5ea6\u5668\u63a5\u53e3",children:[],level:3},{value:"\u8c03\u5ea6\u5668\u6838\u5fc3",id:"\u8c03\u5ea6\u5668\u6838\u5fc3",children:[],level:3},{value:"Kubernetes shim",id:"kubernetes-shim",children:[],level:3}],level:2}],p={toc:l};function d(e){var n=e.components,u=(0,i.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,u,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Apache YuniKorn (Incubating) \u662f\u4e00\u4e2a\u7528\u4e8e\u5bb9\u5668\u7f16\u6392\u5668\u7cfb\u7edf\u7684\u8f7b\u91cf\u7ea7\u901a\u7528\u8d44\u6e90\u8c03\u5ea6\u5668\u3002\n\u5b83\u521b\u5efa\u7684\u76ee\u6807\u662f\u4e3a\u4e86\u5728\u5927\u89c4\u6a21\u3001\u591a\u79df\u6237\u548c\u4e91\u539f\u751f\u7684\u73af\u5883\u4e2d\u9ad8\u6548\u5730\u5b9e\u73b0\u5404\u79cd\u5de5\u4f5c\u8d1f\u8f7d\u7684\u7ec6\u7c92\u5ea6\u8d44\u6e90\u8c03\u5ea6\u4ee5\u53ca\u5171\u4eab\u3002\nYuniKorn\u4e3a\u65e0\u72b6\u6001\u6279\u5904\u7406\u548c\u6709\u72b6\u6001\u670d\u52a1\u7ec4\u6210\u7684\u6df7\u5408\u5de5\u4f5c\u8d1f\u8f7d\u5e26\u6765\u4e86\u7edf\u4e00\u7684\u3001\u8de8\u5e73\u53f0\u7684\u8c03\u5ea6\u4f53\u9a8c\u3002"),(0,c.kt)("p",null,"YuniKorn\u73b0\u5728\u652f\u6301K8s\u5e76\u53ef\u4ee5\u4f5c\u4e3a\u81ea\u5b9a\u4e49K8s\u8c03\u5ea6\u7a0b\u5e8f\u90e8\u7f72\u3002\nYuniKorn\u7684\u67b6\u6784\u8bbe\u8ba1\u8fd8\u5141\u8bb8\u6dfb\u52a0\u4e0d\u540c\u7684 shim\uff08\u4e2d\u4ecb\uff09\u5c42\uff0c\u5e76\u91c7\u7528\u4e0d\u540c\u7684ResourceManager\u5b9e\u73b0\uff0c\u5305\u62ec Apache Hadoop YARN \u6216\u4efb\u4f55\u7684\u5176\u4ed6\u7cfb\u7edf\u3002"),(0,c.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,c.kt)("p",null,"\u4e0b\u56fe\u8bf4\u660e\u4e86YuniKorn\u7684\u7cfb\u7edf\u67b6\u6784\u3002"),(0,c.kt)("img",{src:t(645).Z}),(0,c.kt)("h2",{id:"\u7ec4\u4ef6"},"\u7ec4\u4ef6"),(0,c.kt)("h3",{id:"\u8c03\u5ea6\u5668\u63a5\u53e3"},"\u8c03\u5ea6\u5668\u63a5\u53e3"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"\u8c03\u5ea6\u5668\u63a5\u53e3")," \u662f\u4e00\u4e2a\u62bd\u8c61\u5c42\u3002\u8d44\u6e90\u7ba1\u7406\u5e73\u53f0\uff08\u5982YARN/K8s\uff09\u5c06\u901a\u8fc7GRPC/\u7f16\u7a0b\u8bed\u8a00\u7ed1\u5b9a\u7b49API\u4e0e\u4e4b\u5bf9\u8bdd\u3002"),(0,c.kt)("h3",{id:"\u8c03\u5ea6\u5668\u6838\u5fc3"},"\u8c03\u5ea6\u5668\u6838\u5fc3"),(0,c.kt)("p",null,"\u8c03\u5ea6\u5668\u6838\u5fc3\u5c01\u88c5\u4e86\u6240\u6709\u7684\u8c03\u5ea6\u7b97\u6cd5\uff0c\u5b83\u4ece\u5e95\u5c42\u7684\u8d44\u6e90\u7ba1\u7406\u5e73\u53f0\uff08\u5982YARN/K8s\uff09\u6536\u96c6\u8d44\u6e90\uff0c\u5e76\u8d1f\u8d23\u5bb9\u5668\u5206\u914d\u8bf7\u6c42\u3002\n\u5b83\u51b3\u5b9a\u6bcf\u4e2a\u8bf7\u6c42\u7684\u6700\u4f73\u4f4d\u7f6e\uff0c\u7136\u540e\u5c06\u54cd\u5e94\u5206\u914d\u53d1\u9001\u5230\u8d44\u6e90\u7ba1\u7406\u5e73\u53f0\u3002\n\u8c03\u5ea6\u5668\u6838\u5fc3\u5bf9\u5e95\u5c42\u5e73\u53f0\u662f\u4e0d\u53ef\u77e5\u7684\uff0c\u6240\u6709\u7684\u901a\u4fe1\u90fd\u662f\u901a\u8fc7 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"\u8c03\u5ea6\u5668\u63a5\u53e3"),"\u3002\n\u8bf7\u9605\u8bfb\u66f4\u591a\u6709\u5173\u8c03\u5ea6\u5668\u6838\u5fc3\u7684\u8bbe\u8ba1\u5185\u5bb9 ",(0,c.kt)("a",{parentName:"p",href:"/incubator-yunikorn-site/zh-cn/docs/next/design/scheduler_core_design"},"\u94fe\u63a5"),"\u3002"),(0,c.kt)("h3",{id:"kubernetes-shim"},"Kubernetes shim"),(0,c.kt)("p",null,"YuniKorn Kubernetes shim\u8d1f\u8d23\u4e0eKubernetes\u4ea4\u4e92\uff0c\u5b83\u8d1f\u8d23\u7ffb\u8bd1Kubernetes\u96c6\u7fa4\u7684\u8d44\u6e90\u8bf7\u6c42\u4fe1\u606f\uff0c\u5e76\u901a\u8fc7\u8c03\u5ea6\u5668\u63a5\u53e3\u5c06\u8d44\u6e90\u8bf7\u6c42\u53d1\u9001\u5230\u8c03\u5ea6\u5668\u6838\u5fc3\u3002\n\u5f53\u8c03\u5ea6\u5668\u505a\u51fa\u51b3\u7b56\u65f6\uff0c\u5b83\u8d1f\u8d23\u5c06pod\u7ed1\u5b9a\u5230\u7279\u5b9a\u8282\u70b9\u3002\nshim\u548c\u8c03\u5ea6\u5668\u6838\u5fc3\u4e4b\u95f4\u7684\u6240\u6709\u901a\u4fe1\u90fd\u662f\u901a\u8fc7 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-scheduler-interface"},"\u8c03\u5ea6\u5668\u63a5\u53e3")," \u8fdb\u884c\u7684\u3002\n\u8bf7\u9605\u8bfb\u66f4\u591a\u5173\u4e8eKubernetes shim\u7684\u8bbe\u8ba1\u5185\u5bb9 ",(0,c.kt)("a",{parentName:"p",href:"/incubator-yunikorn-site/zh-cn/docs/next/design/k8shim"},"\u94fe\u63a5"),"\u3002"))}d.isMDXComponent=!0},645:function(e,n,t){n.Z=t.p+"assets/images/architecture-333225e01d82300eb9ee34e76cf34697.png"}}]);