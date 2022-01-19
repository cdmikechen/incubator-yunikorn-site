"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[199],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2319:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],p={id:"cross_queue_preemption",title:"\u8de8\u961f\u5217\u62a2\u5360"},i=void 0,c={unversionedId:"design/cross_queue_preemption",id:"design/cross_queue_preemption",title:"\u8de8\u961f\u5217\u62a2\u5360",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/design/cross_queue_preemption.md",sourceDirName:"design",slug:"/design/cross_queue_preemption",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/design/cross_queue_preemption",tags:[],version:"current",frontMatter:{id:"cross_queue_preemption",title:"\u8de8\u961f\u5217\u62a2\u5360"},sidebar:"docs",previous:{title:"Kubernetes Shim \u8bbe\u8ba1",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/design/k8shim"},next:{title:"\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/design/namespace_resource_quota"}},u=[{value:"\u95ee\u9898:",id:"\u95ee\u9898",children:[],level:2},{value:"\u56de\u7b54\u4e00\u4e9b\u6709\u5173\u8bbe\u8ba1/\u5b9e\u73b0\u9009\u62e9\u7684\u95ee\u9898",id:"\u56de\u7b54\u4e00\u4e9b\u6709\u5173\u8bbe\u8ba1\u5b9e\u73b0\u9009\u62e9\u7684\u95ee\u9898",children:[],level:2},{value:"\u4f2a\u4ee3\u7801",id:"\u4f2a\u4ee3\u7801",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898:"),(0,a.kt)("p",null,"\u6839\u636e\u6211\u4eec\u4ece YARN Scheduler \u62a2\u5360\u4e2d\u5438\u53d6\u7684\u6559\u8bad\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ee5\u4e0b\u662f\u6700\u7cdf\u7cd5\u7684\u4e8b\u60c5:")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62a2\u5360\u662f\u4e00\u628a\u201c\u730e\u67aa\u201d\uff0c\u800c\u4e0d\u662f\u201c\u72d9\u51fb\u624b\u201d\uff0c\u5f53\u62a2\u5360\u51b3\u5b9a\u4f5c\u51fa\u65f6\uff0c\u6ca1\u6709\u4eba\u77e5\u9053\u62a2\u5360\u7684\u8d44\u6e90\u662f\u5426\u4f1a\u8fdb\u5165\u8bf7\u6c42\u961f\u5217/\u5e94\u7528\u7a0b\u5e8f/\u7528\u6237\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u62a2\u5360\u903b\u8f91\u548c\u5206\u914d\u662f\u4e0d\u540c\u7684\uff0c\u6211\u4eec\u5fc5\u987b\u5b9e\u73b0\uff08\u5e76\u6a21\u4eff\uff09\u6211\u4eec\u5728\u8c03\u5ea6\u5668\u5206\u914d\u903b\u8f91\u4e2d\u6240\u505a\u7684\u4e8b\u60c5\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ee5\u4e0b\u662f\u6700\u597d\u7684\u4e8b\u60c5:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u62a2\u5360\u5f88\u5feb\uff08\u591a\u4e8f\u4e86\u201c\u730e\u67aa\u201d\uff09\uff0c\u56de\u6536\u6570\u5343\u4e2a\u5bb9\u5668\u53ea\u9700\u89811\u79d2\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u5904\u7406DRF\u3001\u591a\u4e2a\u62a2\u5360\u7b56\u7565\uff08\u961f\u5217\u95f4/\u961f\u5217\u5185\u3001\u6563\u5f39\u67aa/\u5916\u79d1\u62a2\u5360\u7b49\uff09\u662f\u591a\u4e48\u75db\u82e6\uff0c\u5e76\u4e14\u6211\u4eec\u5df2\u7ecf\u5f00\u53d1\u4e86\u4e00\u4e9b\u4e0d\u9519\u7684\u903b\u8f91\u6765\u786e\u4fdd\u66f4\u597d\u7684\u6a21\u5757\u5316\u548c\u63d2\u4ef6\u80fd\u529b\u3002")),(0,a.kt)("h2",{id:"\u56de\u7b54\u4e00\u4e9b\u6709\u5173\u8bbe\u8ba1\u5b9e\u73b0\u9009\u62e9\u7684\u95ee\u9898"},"\u56de\u7b54\u4e00\u4e9b\u6709\u5173\u8bbe\u8ba1/\u5b9e\u73b0\u9009\u62e9\u7684\u95ee\u9898"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1","."," \u6211\u4eec\u771f\u7684\u60f3\u8981\u62a2\u5360\u5ef6\u8fdf\u5417\uff1f\uff08\u6216\u8005\u6211\u4eec\u53ea\u662f\u60f3\u63a7\u5236\u8282\u594f\uff09")),(0,a.kt)("p",null,"\u5728CS\u67b6\u6784\u4e2d\uff0c\u6211\u4eec\u6709\u62a2\u5360\u5ef6\u8fdf\uff0c\u5373\u5728\u62a2\u5360\u5019\u9009\u4e2d\u9009\u62e9\u9700\u8981\u6740\u6b7b\u7684\u8fdb\u7a0b\uff0c\u7b49\u5f85\u4e00\u5b9a\u65f6\u95f4\u540e\u518d\u6740\u6b7b\u5b83\u3002"),(0,a.kt)("p",null,"\u62a2\u5360\u5ef6\u8fdf\u7684\u76ee\u7684\u662f\uff1a\na. \u4e3a\u5e94\u7528\u7a0b\u5e8f\u7559\u51fa\u65f6\u95f4\uff0c\u4ee5\u4fbf\u4ed6\u4eec\u53ef\u4ee5\u4e3a\u574f\u4e8b\u60c5\u7684\u53d1\u751f\u505a\u597d\u51c6\u5907\uff08\u4e0d\u5e78\u7684\u662f\uff0c\u81f3\u5c11\u4ece\u6211\u4eec\u6240\u77e5\u9053\u7684\u60c5\u51b5\u6765\u770b\uff0c\u6ca1\u6709\u4e00\u6b3e\u5e94\u7528\u7a0b\u5e8f\u80fd\u4e3a\u8fd9\u4e9b\u95ee\u9898\u505a\u4efb\u4f55\u4e8b\u60c5\uff09\u3002\nb. \u63a7\u5236\u62a2\u5360\u901f\u5ea6\u3002"),(0,a.kt)("p",null,"\u5728\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u4f8b\u5982\u96c6\u7fa4\u72b6\u6001\u4e0d\u65ad\u53d8\u5316\u7b49\u60c5\u51b5\u4f1a\u5f15\u8d77\u5f88\u591a\u95ee\u9898\uff0c\u5f88\u96be\u4fdd\u8bc1\u51c6\u786e\u7684\u62a2\u5360\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5efa\u8bae:")),(0,a.kt)("p",null,"\u6d88\u9664\u62a2\u5360\u5ef6\u8fdf\uff0c\u4fdd\u6301\u63a7\u5236\u62a2\u5360\u901f\u5ea6\u7684\u903b\u8f91\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn.resourcemanager.monitor.capacity.preemption\n.total_preemption_per_round"),"\uff09\u3002\n\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u62a2\u5360\u6765\u8fdb\u884c\u8d44\u6e90\u7684\u5206\u914d\u3002\n\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u5bb9\u5668\u5c06\u5728\u53d1\u51fa\u62a2\u5360\u6743\u540e\u7acb\u5373\u505c\u6b62\u3002\n\u76f8\u53cd\uff0cRM\u53ef\u4ee5\u63a7\u5236\u5411\u5bb9\u5668\u53d1\u9001\u4fe1\u53f7\u548c\u7ec8\u6b62\u5bb9\u5668\u4e4b\u95f4\u7684\u5ef6\u8fdf\u3002\n\u6bd4\u5982\u5728K8s\u4e2d\u7ec8\u6b62Pod\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods"},"https://kubernetes.io/docs/concepts/workloads/pods/pod/#termination-of-pods")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2","."," \u6211\u4eec\u662f\u60f3\u5bf9\u6bcf\u4e2a\u8c03\u5ea6\u903b\u8f91\u8fdb\u884c\u62a2\u5360\uff0c\u8fd8\u662f\u53ef\u4ee5\u5468\u671f\u6027\u5730\u8fdb\u884c\u62a2\u5360\uff1f")),(0,a.kt)("p",null,"\u5728CS\u67b6\u6784\u4e2d\uff0c\u6211\u4eec\u5b9a\u671f\u8fd0\u884c\u62a2\u5360\u903b\u8f91\uff0c\u6bd4\u5982\u6bcf1\u79d2\u62163\u79d2\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u62a2\u5360\u903b\u8f91\u6d89\u53ca\u4e00\u4e9b\u590d\u6742\u7684\u903b\u8f91\uff0c\u6bd4\u5982\u8ba1\u7b97\u961f\u5217/\u5e94\u7528\u7a0b\u5e8f\u7684\u5171\u4eab\u3002\n\u5728\u8fdb\u884c\u7cbe\u786e\u62a2\u5360\u65f6\uff0c\u6211\u4eec\u53ef\u80fd\u9700\u8981\u626b\u63cf\u8282\u70b9\u4ee5\u5bfb\u627e\u62a2\u5360\u7684\u5019\u9009\u8282\u70b9\u3002\n\u8003\u8651\u5230\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u5efa\u8bae\u5b9a\u671f\u8fdb\u884c\u62a2\u5360\u64cd\u4f5c\u3002\n\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6211\u4eec\u9700\u8981\u5c3d\u53ef\u80fd\u591a\u5730\u4f7f\u7528\u4ee3\u7801\u6765\u62a2\u5360\u5185\u90e8\u5206\u914d\uff0c\u5426\u5219\u4f1a\u6709\u592a\u591a\u7684\u590d\u6742\u903b\u8f91\uff0c\u672a\u6765\u5c06\u6765\u5f88\u96be\u7ef4\u62a4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3","."," \u62a2\u5360\u6210\u672c\u4e0e\u529f\u80fd")),(0,a.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\u589e\u52a0\u62a2\u5360\u6210\u672c\u662f\u6709\u5e2e\u52a9\u7684\uff0c\u4f8b\u5982\u5bb9\u5668\u751f\u5b58\u65f6\u95f4\u3001\u4f18\u5148\u7ea7\u3001\u5bb9\u5668\u7c7b\u578b\u3002\n\u5b83\u53ef\u4ee5\u662f\u4e00\u4e2a\u6210\u672c\u51fd\u6570\uff08\u8fd4\u56de\u4e00\u4e2a\u6570\u503c\uff09\uff0c\u4e5f\u53ef\u4ee5\u662f\u4e00\u4e2a\u6bd4\u8f83\u5668\uff08\u7528\u4e8e\u6bd4\u8f83\u62a2\u5360\u8bf7\u6c42\u7684\u4e24\u4e2a\u5206\u914d\u60c5\u51b5\uff09\u3002"),(0,a.kt)("h2",{id:"\u4f2a\u4ee3\u7801"},"\u4f2a\u4ee3\u7801"),(0,a.kt)("p",null,"\u5206\u914d\u903b\u8f91\uff08\u6bcf\u4e2a\u5206\u914d\u5468\u671f\u8c03\u7528\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"input:\n  - nAlloc, allocate N allocations for this allocation cycle.\n\nfor partition: \n  askCandidates := findAskCandidates(nAlloc, preemption=false)\n  \n  allocated, failed_to_allocated := tryAllocate(askCandidates);\n  \n  send-allocated-to-cache-to-commit;\n  \n  update-missed-opportunity (allocated, failed_to_allocated);\n  \n  nAlloc -= len(allocated)   \n")),(0,a.kt)("p",null,"\u62a2\u5360\u903b\u8f91\uff08\u6bcf\u4e2a\u62a2\u5360\u5468\u671f\u8c03\u7528\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// It has to be done for every preemption-policy because calculation is different.\nfor preemption-policy: \n  preempt_results := policy.preempt()\n  for preempt_results: \n     send-preempt-result-to-cache-to-commit;\n     updated-missed-opportunity (allocated)\n")),(0,a.kt)("p",null,"\u62a2\u5360\u7b56\u7565\u5185\u90e8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"inter-queue-preempt-policy:\n  calculate-preemption-quotas;\n  \n  for partitions:\n    total_preempted := resource(0);\n    \n    while total_preempted < partition-limited:\n      // queues will be sorted by allocating - preempting\n      // And ignore any key in preemption_mask\n      askCandidates := findAskCandidates(N, preemption=true)\n      \n      preempt_results := tryAllocate(askCandidates, preemption=true);\n      \n      total_preempted += sigma(preempt_result.allocResource)\n      \n      send-allocated-to-cache-to-commit;\n      \n      update-missed-opportunity (allocated, failed_to_allocated);\n      \n      update-preemption-mask(askCandidates.allocKeys - preempt_results.allocKeys)\n")))}d.isMDXComponent=!0}}]);