"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5824],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,u=e.mdxType,i=e.originalType,o=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(t),d=u,v=f["".concat(o,".").concat(d)]||f[d]||s[d]||i;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function d(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:u,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},18567:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p}});var r=t(87462),u=t(63366),i=(t(67294),t(3905)),l=["components"],a={id:"rn-0.12.1",title:"\u53d1\u5e03\u516c\u544a v0.12.1"},o=void 0,c={type:"mdx",permalink:"/zh-cn/release-announce/0.12.1",source:"@site/i18n/zh-cn/docusaurus-plugin-content-pages/release-announce/0.12.1.md",title:"\u53d1\u5e03\u516c\u544a v0.12.1",description:"\x3c!--",frontMatter:{id:"rn-0.12.1",title:"\u53d1\u5e03\u516c\u544a v0.12.1"}},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4e3b\u8981\u66f4\u65b0",id:"\u4e3b\u8981\u66f4\u65b0",level:2},{value:"\u652f\u6301\u7684 Kubernetes \u7248\u672c",id:"\u652f\u6301\u7684-kubernetes-\u7248\u672c",level:3},{value:"\u8282\u70b9\u6392\u5e8f\u6539\u8fdb",id:"\u8282\u70b9\u6392\u5e8f\u6539\u8fdb",level:3},{value:"Gang scheduling \u589e\u5f3a\u529f\u80fd",id:"gang-scheduling-\u589e\u5f3a\u529f\u80fd",level:3},{value:"\u65e5\u5fd7\u8bb0\u5f55\u548c\u53ef\u89c2\u5bdf\u6027\u6539\u8fdb",id:"\u65e5\u5fd7\u8bb0\u5f55\u548c\u53ef\u89c2\u5bdf\u6027\u6539\u8fdb",level:3},{value:"\u8c03\u5ea6\u5668\u63a5\u53e3\u6539\u9020",id:"\u8c03\u5ea6\u5668\u63a5\u53e3\u6539\u9020",level:3},{value:"Kubernetes \u4f9d\u8d56\u5347\u7ea7",id:"kubernetes-\u4f9d\u8d56\u5347\u7ea7",level:3},{value:"\u6700\u65b0\u7684\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u7ed3\u679c",id:"\u6700\u65b0\u7684\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u7ed3\u679c",level:3},{value:"\u793e\u533a",id:"\u793e\u533a",level:2}],s={toc:p};function f(e){var n=e.components,t=(0,u.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u53d1\u5e03\u516c\u544a-v0121"},"\u53d1\u5e03\u516c\u544a v0.12.1"),(0,i.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 Apache YuniKorn (Incubating) \u793e\u533a\u5df2\u6295\u7968\u53d1\u5e03 0.12.1\u3002\nApache YuniKorn (Incubating) \u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u8d44\u6e90\u8c03\u5ea6\u5668\uff0c\u65e8\u5728\u7ba1\u7406\u548c\u8c03\u5ea6\u5bb9\u5668\u7f16\u6392\u6846\u67b6\uff08\u5982 Kubernetes\uff09\u4e0a\u7684\u5927\u6570\u636e\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u652f\u6301\u672c\u5730\u548c\u4e91\u7aef\u7684\u7528\u4f8b\u3002"),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"Apache YuniKorn (Incubating) \u793e\u533a\u5728\u6b64\u7248\u672c\u4e2d\u4fee\u590d\u4e86150\u4e2a ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12351063"},"JIRA\u95ee\u9898"),"\u3002\u8bf7\u6ce8\u610f\uff0c\u7531\u4e8e Go Modules \u7cfb\u7edf\u7684\u6280\u672f\u95ee\u9898\uff0c\u6211\u4eec\u51b3\u5b9a\u8df3\u8fc7 0.12.0 \u7248\u672c\u5e76\u76f4\u63a5\u8f6c\u5230 0.12.1\uff0c\u5176\u4e2d\u6807\u8bb0\u7684\u6807\u7b7e\u65e0\u6cd5\u66f4\u65b0\u4ee5\u6307\u5411\u4e8b\u540e\u63d0\u4ea4\u3002"),(0,i.kt)("p",null,"\u53d1\u5e03\u8d1f\u8d23\u4eba: Chaoran Yu"),(0,i.kt)("p",null,"\u53d1\u5e03\u65e5\u671f: 2021-12-26"),(0,i.kt)("h2",{id:"\u4e3b\u8981\u66f4\u65b0"},"\u4e3b\u8981\u66f4\u65b0"),(0,i.kt)("h3",{id:"\u652f\u6301\u7684-kubernetes-\u7248\u672c"},"\u652f\u6301\u7684 Kubernetes \u7248\u672c"),(0,i.kt)("p",null,"\u5728\u6b64\u7248\u672c\u4e2d\uff0c\u652f\u6301\u7684 Kubernetes \u7248\u672c\u5df2\u66f4\u65b0\u4e3a 1.19.x\u30011.20.x \u548c 1.21.x\u3002\uff08\u6700\u540e\u4e00\u4e2a\u652f\u6301 1.17.x\u30011.18.x \u548c 1.19.x \u7684\u7248\u672c\uff09\u3002YuniKorn \u652f\u6301\u77e9\u9635\u4e3b\u8981\u652f\u6301 3 \u4e2a\u4e3b\u8981\u7684 Kubernetes \u7248\u672c\u3002"),(0,i.kt)("h3",{id:"\u8282\u70b9\u6392\u5e8f\u6539\u8fdb"},"\u8282\u70b9\u6392\u5e8f\u6539\u8fdb"),(0,i.kt)("p",null,"YuniKorn \u7528\u4e8e\u5bf9\u6bcf\u4e2a\u5bb9\u5668\u7684\u8c03\u5ea6\u6309\u9700\u5bf9\u6240\u6709\u8282\u70b9\u8fdb\u884c\u6392\u5e8f\uff0c\u8fd9\u5bfc\u81f4\u8282\u70b9\u6570\u91cf\u589e\u52a0\u65f6\u6027\u80fd\u53d8\u6162\u3002\u6211\u4eec\u5728\u8be5\u7248\u672c\u4f7f\u7528\u4e86\u4f18\u5316\u7684\u6570\u636e\u7ed3\u6784\uff08B-tree\uff09\uff0c\u8be5\u6539\u8fdb\u5bf9\u8282\u70b9\u6392\u5e8f\u6027\u80fd\u5b9e\u73b0\u4e86\u76f8\u5f53\u5927\u7684\u6539\u8fdb\u3002"),(0,i.kt)("h3",{id:"gang-scheduling-\u589e\u5f3a\u529f\u80fd"},"Gang scheduling \u589e\u5f3a\u529f\u80fd"),(0,i.kt)("p",null,"\u6539\u8fdb\u7684\u6d4b\u8bd5\u8986\u76d6\u7387\u3002\u6dfb\u52a0\u4e86\u5bf9\u8282\u70b9\u4eb2\u548c\u6027\u7684\u652f\u6301\u3002\u4fee\u590d\u4e86\u5728\u5220\u9664\u8282\u70b9\u671f\u95f4\u5904\u7406\u5360\u4f4d\u65f6\u7684\u4e25\u91cd\u9519\u8bef\u3002"),(0,i.kt)("h3",{id:"\u65e5\u5fd7\u8bb0\u5f55\u548c\u53ef\u89c2\u5bdf\u6027\u6539\u8fdb"},"\u65e5\u5fd7\u8bb0\u5f55\u548c\u53ef\u89c2\u5bdf\u6027\u6539\u8fdb"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6dfb\u52a0\u65e5\u5fd7\u3001\u8c03\u6574\u73b0\u6709\u65e5\u5fd7\u7684\u4e25\u91cd\u6027\u7ea7\u522b\u548c\u5220\u9664\u4e0d\u9700\u8981\u7684\u65e5\u5fd7\u6765\u589e\u5f3a\u5404\u79cd\u7ec4\u4ef6\u7684\u65e5\u5fd7\u8bb0\u5f55\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4e86\u5bf9\u5b9a\u671f\u6216\u901a\u8fc7 REST \u6309\u9700\u83b7\u53d6\u8c03\u5ea6\u5668\u7684\u5b8c\u6574\u72b6\u6001\u8f6c\u50a8\u7684\u652f\u6301\uff0c\u4ee5\u65b9\u4fbf\u8fdb\u884c\u6545\u969c\u6392\u9664\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6539\u8fdb\u4e86\u8c03\u5ea6\u5668\u7684\u5065\u5eb7\u68c0\u67e5\uff0c\u4ee5\u62a5\u544a\u5f02\u5e38\u7684\u5206\u914d\u95ee\u9898\u3002")),(0,i.kt)("h3",{id:"\u8c03\u5ea6\u5668\u63a5\u53e3\u6539\u9020"},"\u8c03\u5ea6\u5668\u63a5\u53e3\u6539\u9020"),(0,i.kt)("p",null,"\u7b80\u5316\u4e86\u6838\u5fc3\u548c shim \u7528\u4e8e\u76f8\u4e92\u901a\u4fe1\u7684\u8c03\u5ea6\u5668\u63a5\u53e3\u3002\u5927\u5bb9\u91cf\u6d88\u606f\u88ab\u5206\u89e3\uff0c\u4ee5\u4fbf\u6bcf\u6761\u6d88\u606f\u5305\u542b\u8f83\u5c0f\u7684\u6709\u6548\u8d1f\u8f7d\u5e76\u4e14\u4ec5\u7528\u4e8e\u7279\u5b9a\u76ee\u7684\u3002\u5927\u591a\u6570\u6d88\u606f\u73b0\u5728\u5728\u6838\u5fc3\u548c shim \u4e4b\u95f4\u662f\u53cc\u5411\u7684\u3002"),(0,i.kt)("h3",{id:"kubernetes-\u4f9d\u8d56\u5347\u7ea7"},"Kubernetes \u4f9d\u8d56\u5347\u7ea7"),(0,i.kt)("p",null,"K8shim \u6240\u4f9d\u8d56\u7684 Kubernetes \u7248\u672c\u5df2\u7ecf\u4ece 1.16 \u5347\u7ea7\u5230 1.20\u3002\u8fd9\u4e3a\u652f\u6301 Kubernetes \u7684\u672a\u6765\u7248\u672c\u94fa\u5e73\u4e86\u9053\u8def\u3002\u4f5c\u4e3a\u8fd9\u9879\u5de5\u4f5c\u7684\u7ed3\u679c\uff0c\u8c13\u8bcd\u903b\u8f91\u5df2\u4f7f\u7528\u8c03\u5ea6\u6846\u67b6\u91cd\u5199\u3002"),(0,i.kt)("h3",{id:"\u6700\u65b0\u7684\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u7ed3\u679c"},"\u6700\u65b0\u7684\u6027\u80fd\u57fa\u51c6\u6d4b\u8bd5\u7ed3\u679c"),(0,i.kt)("p",null,"\u6211\u4eec\u5f88\u9ad8\u5174\u53d1\u5e03\u4f7f\u7528 Kubemark \u7684\u6700\u65b0\u4ee3\u7801\u5e93\u7684\u6027\u80fd\u8bc4\u4f30\u7ed3\u679c\u3002YuniKorn \u7684\u541e\u5410\u91cf\u6bd4\u9ed8\u8ba4\u8c03\u5ea6\u5668\u63d0\u9ad8\u4e864\u500d\u3002"),(0,i.kt)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,i.kt)("p",null,"Apache YuniKorn \u793e\u533a\u5f88\u9ad8\u5174\u5730\u6b22\u8fce\u65b0\u7684 committer\uff1a Craig Condit\u3001Chenya Zhang\u3001Chaoran Yu \u548c Chia-Ping Tsai\uff0c\u4ee5\u53ca\u65b0\u7684\u5bfc\u5e08 Luciano Resende \u548c Wei-Chiu Chuang\u3002\u6211\u4eec\u5e0c\u671b\u770b\u5230\u66f4\u591a\u7684\u63d0\u4ea4\u8005\u52a0\u5165\u793e\u533a\u5e76\u5e2e\u52a9\u5851\u9020\u9879\u76ee\u3002\u5728\u8fc7\u53bb\u7684\u51e0\u4e2a\u6708\u91cc\uff0c\u6211\u4eec\u4f1a\u7ee7\u7eed\u57282\u4e2a\u4e0d\u540c\u7684\u65f6\u533a\u4e3e\u884c\u4e24\u5468\u4e00\u6b21\u7684\u793e\u533a\u4f1a\u8bae\u3001\u4e34\u65f6\u4f1a\u8bae\u3001\u7ebf\u4e0b\u6e20\u9053\u8ba8\u8bba\u3002\u6211\u4eec\u7684\u793e\u533a\u5c06\u7ee7\u7eed\u5f00\u653e\u7ed9\u5404\u4f4d\u3002"))}f.isMDXComponent=!0}}]);