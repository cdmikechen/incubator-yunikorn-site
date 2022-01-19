"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5313],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return g}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,u=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=i,f=d["".concat(o,".").concat(g)]||d[g]||s[g]||u;return r?t.createElement(f,a(a({ref:n},p),{},{components:r})):t.createElement(f,a({ref:n},p))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=r.length,a=new Array(u);a[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<u;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3781:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=r(7462),i=r(3366),u=(r(7294),r(3905)),a=["components"],l={id:"rn-0.10.0",title:"\u53d1\u5e03\u516c\u544a v0.10.0"},o=void 0,c={type:"mdx",permalink:"/incubator-yunikorn-site/zh-cn/release-announce/0.10.0",source:"@site/i18n/zh-cn/docusaurus-plugin-content-pages/release-announce/0.10.0.md"},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[],level:2},{value:"\u4e3b\u8981\u66f4\u65b0",id:"\u4e3b\u8981\u66f4\u65b0",children:[{value:"\u652f\u6301\u7684 Kubernetes \u7248\u672c",id:"\u652f\u6301\u7684-kubernetes-\u7248\u672c",children:[],level:3},{value:"Gang Scheduling",id:"gang-scheduling",children:[],level:3},{value:"\u7b80\u5316\u8c03\u5ea6\u5668\u6838\u5fc3\u4e2d\u7684\u903b\u8f91",id:"\u7b80\u5316\u8c03\u5ea6\u5668\u6838\u5fc3\u4e2d\u7684\u903b\u8f91",children:[],level:3},{value:"\u5e94\u7528\u7a0b\u5e8f\u8ddf\u8e2a API \u548c CRD \u7b2c\u4e00\u9636\u6bb5",id:"\u5e94\u7528\u7a0b\u5e8f\u8ddf\u8e2a-api-\u548c-crd-\u7b2c\u4e00\u9636\u6bb5",children:[],level:3},{value:"Web UI \u7ffb\u65b0",id:"web-ui-\u7ffb\u65b0",children:[],level:3}],level:2},{value:"\u793e\u533a",id:"\u793e\u533a",children:[],level:2}],s={toc:p};function d(e){var n=e.components,r=(0,i.Z)(e,a);return(0,u.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"\u53d1\u5e03\u516c\u544a-v0100"},"\u53d1\u5e03\u516c\u544a v0.10.0"),(0,u.kt)("p",null,"\u6211\u4eec\u975e\u5e38\u9ad8\u5174\u5730\u5ba3\u5e03 Apache YuniKorn (Incubating) \u793e\u533a\u5df2\u6295\u7968\u53d1\u5e03 0.10.0\u3002Apache YuniKorn (Incubating) \u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u8d44\u6e90\u8c03\u5ea6\u5668\uff0c\u65e8\u5728\u7ba1\u7406\u548c\u8c03\u5ea6\u5bb9\u5668\u7f16\u6392\u6846\u67b6\u4e0a\u7684\u5927\u6570\u636e\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u652f\u6301\u672c\u5730\u548c\u4e91\u7aef\u7684\u7528\u4f8b\u3002"),(0,u.kt)("p",null,"\u6b64\u7248\u672c\u4e2d\u6dfb\u52a0\u7684\u663e\u8457\u529f\u80fd\u662f Gang Scheduling\uff0cYuniKorn \u73b0\u5728\u53ef\u4ee5\u5728 Kubernetes \u4e0a\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u65f6\u63d0\u4f9b gang scheduling \u8c03\u5ea6\u529f\u80fd\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u6b64\u7248\u672c\u8fd8\u5305\u62ec\u5404\u79cd\u9519\u8bef\u4fee\u590d\u548c\u6539\u8fdb\u3002"),(0,u.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,u.kt)("p",null,"Apache YuniKorn (Incubating) \u793e\u533a\u5728\u6b64\u7248\u672c\u4e2d\u4fee\u590d\u4e86 187 \u4e2a JIRA \u95ee\u9898\uff1a",(0,u.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12349466"},"YuniKorn \u5728 0.10.0 \u4e2d\u89e3\u51b3\u7684 jira \u95ee\u9898"),"\u3002"),(0,u.kt)("p",null,"\u53d1\u5e03\u8d1f\u8d23\u4eba: Tao Yang"),(0,u.kt)("p",null,"\u53d1\u5e03\u65f6\u95f4: 2021-04-09"),(0,u.kt)("h2",{id:"\u4e3b\u8981\u66f4\u65b0"},"\u4e3b\u8981\u66f4\u65b0"),(0,u.kt)("h3",{id:"\u652f\u6301\u7684-kubernetes-\u7248\u672c"},"\u652f\u6301\u7684 Kubernetes \u7248\u672c"),(0,u.kt)("p",null,"\u4ece\u6b64\u7248\u672c\u5f00\u59cb\uff0c\u652f\u6301\u7684 Kubernetes \u7248\u672c\u5df2\u66f4\u65b0\u4e3a 1.16.x\u30011.17.x \u548c 1.18.x\u3002\uff08\u65e9\u671f\u7248\u672c\u652f\u6301 1.13.x\u30011.14.x \u548c 1.15.x\uff09YuniKorn \u652f\u6301\u77e9\u9635\u4e3b\u8981\u652f\u6301 3 \u4e2a\u4e3b\u8981\u7684 Kubernetes \u7248\u672c\u3002"),(0,u.kt)("h3",{id:"gang-scheduling"},"Gang Scheduling"),(0,u.kt)("p",null,"\u5728\u8fd9\u4e2a\u7248\u672c\u4e2d\uff0cYuniKorn \u5f00\u59cb\u652f\u6301 Gang Scheduling\u3002\u7528\u6237\u53ef\u4ee5\u5c06 Gang Scheduling \u5e94\u7528\u4e8e\u9700\u8981 gang scheduling \u8bed\u4e49\u7684\u5e94\u7528\uff0c\u5982 Spark\u3001Tensorflow\u3001Pytorch \u7b49\u3002YuniKorn \u4e3b\u52a8\u4e3a gang scheduling \u5e94\u7528\u9884\u7559\u8d44\u6e90\uff0c\u5b83\u4e0e cluster-autoscaler \u914d\u5408\u4f7f\u7528\u66f4\u9ad8\u6548\u3002\u521d\u59cb\u7684\u652f\u6301\u5df2\u7ecf\u5728 Spark \u4e0a\u8fdb\u884c\u4e86\u5f88\u597d\u7684\u6d4b\u8bd5\uff0c\u5b83\u53ef\u4ee5\u4e0e K8s \u4e0a\u7684\u539f\u751f Spark \u6216 Spark K8s operator \u4e00\u8d77\u4f7f\u7528\u3002\u6709\u5173\u5982\u4f55\u542f\u7528\u548c\u4f7f\u7528 Gang Scheduling \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u9605\u8bfb ",(0,u.kt)("a",{parentName:"p",href:"/docs/user_guide/gang_scheduling"},"\u6b64\u5904")," \u7684\u6587\u6863\u3002"),(0,u.kt)("h3",{id:"\u7b80\u5316\u8c03\u5ea6\u5668\u6838\u5fc3\u4e2d\u7684\u903b\u8f91"},"\u7b80\u5316\u8c03\u5ea6\u5668\u6838\u5fc3\u4e2d\u7684\u903b\u8f91"),(0,u.kt)("p",null,"\u793e\u533a\u5bf9\u8c03\u5ea6\u7a0b\u5e8f\u6838\u5fc3\u8fdb\u884c\u4e86\u91cd\u5927\u7684\u4ee3\u7801\u91cd\u6784\uff0c\u53ef\u4ee5\u5728 ",(0,u.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-317"},"YUNIKORN-317")," \u5185\u8fdb\u884c\u8ddf\u8e2a\u3002\u8fd9\u79cd\u91cd\u6784\u5c06\u7f13\u5b58\u548c\u8c03\u5ea6\u5668\u6a21\u5757\u5408\u4e8c\u4e3a\u4e00\uff0c\u6d88\u9664\u4e86\u4ee3\u7801\u4e2d\u7684\u5927\u91cf\u590d\u6742\u6027\uff0c\u63d0\u9ad8\u4e86\u6838\u5fc3\u8c03\u5ea6\u903b\u8f91\u7684\u6548\u7387\u3002\u56e0\u6b64\uff0c\u5b83\u66f4\u6613\u4e8e\u9605\u8bfb\u5e76\u51cf\u8f7b\u4e86\u7ef4\u62a4\u5de5\u4f5c\u3002"),(0,u.kt)("h3",{id:"\u5e94\u7528\u7a0b\u5e8f\u8ddf\u8e2a-api-\u548c-crd-\u7b2c\u4e00\u9636\u6bb5"},"\u5e94\u7528\u7a0b\u5e8f\u8ddf\u8e2a API \u548c CRD \u7b2c\u4e00\u9636\u6bb5"),(0,u.kt)("p",null,"\u6b64\u7248\u672c\u5f15\u5165\u4e86\u5e94\u7528\u7a0b\u5e8f\u8ddf\u8e2a API \u548c K8s \u81ea\u5b9a\u4e49\u8d44\u6e90\u5b9a\u4e49 (CRD)\uff0c\u501f\u4ee5\u8fdb\u4e00\u6b65\u6539\u5584\u7528\u6237\u4f53\u9a8c\u3002\u5e94\u7528\u7a0b\u5e8f operator/\u4f5c\u4e1a\u670d\u52a1\u5668\u5c06\u4f7f\u7528 CRD \u4e0e YuniKorn \u4ea4\u4e92\uff0c\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u5e94\u7528\u7a0b\u5e8f\u751f\u547d\u5468\u671f\u7ba1\u7406\u3002\u7b2c\u4e00\u9636\u6bb5\u5b9a\u4e49\u4e86\u901a\u7528\u534f\u8bae\u6d88\u606f\u548c CRD \u5bf9\u8c61\u683c\u5f0f\u3002"),(0,u.kt)("h3",{id:"web-ui-\u7ffb\u65b0"},"Web UI \u7ffb\u65b0"),(0,u.kt)("p",null,"\u793e\u533a\u5bf9 Web UI \u8fdb\u884c\u4e86\u4e00\u4e9b\u53ef\u7528\u6027\u6539\u8fdb\uff0c\u5305\u62ec\u91cd\u65b0\u8bbe\u8ba1\u7684 Web UI \u5e03\u5c40\u3001\u8c03\u6574\u5916\u89c2\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3001\u4fee\u590d\u9519\u8bef\u7b49\u3002"),(0,u.kt)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,u.kt)("p",null,"Apache YuniKorn \u793e\u533a\u5f88\u9ad8\u5174\u6b22\u8fce\u65b0\u7684 committer Julia Kinga Marton \u548c Tingyao Huang\u3002\u6211\u4eec\u5e0c\u671b\u770b\u5230\u66f4\u591a\u7684\u63d0\u4ea4\u8005\u52a0\u5165\u793e\u533a\u5e76\u5e2e\u52a9\u5851\u9020\u9879\u76ee\u3002\u5728\u8fc7\u53bb\u7684\u51e0\u4e2a\u6708\u91cc\uff0c\u6211\u4eec\u4f1a\u7ee7\u7eed\u57282\u4e2a\u4e0d\u540c\u7684\u65f6\u533a\u4e3e\u884c\u4e24\u5468\u4e00\u6b21\u7684\u793e\u533a\u4f1a\u8bae\u3001\u4e34\u65f6\u4f1a\u8bae\u3001\u7ebf\u4e0b\u6e20\u9053\u8ba8\u8bba\u3002\u6211\u4eec\u7684\u793e\u533a\u5c06\u7ee7\u7eed\u5f00\u653e\u7ed9\u5404\u4f4d\u3002"))}d.isMDXComponent=!0}}]);