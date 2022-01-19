"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4347],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(k,o(o({ref:n},l),{},{components:t})):r.createElement(k,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8289:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={id:"namespace_resource_quota",title:"\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"},u=void 0,p={unversionedId:"design/namespace_resource_quota",id:"design/namespace_resource_quota",title:"\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/design/namespace_resource_quota.md",sourceDirName:"design",slug:"/design/namespace_resource_quota",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/design/namespace_resource_quota",tags:[],version:"current",frontMatter:{id:"namespace_resource_quota",title:"\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"},sidebar:"docs",previous:{title:"\u8de8\u961f\u5217\u62a2\u5360",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/design/cross_queue_preemption"},next:{title:"Pluggable App Management",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/design/pluggable_app_management"}},l=[{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[{value:"1. \u8bbe\u7f6e\u547d\u540d\u7a7a\u95f4",id:"1-\u8bbe\u7f6e\u547d\u540d\u7a7a\u95f4",children:[],level:3},{value:"2. \u8bbe\u7f6e YuniKorn \u961f\u5217",id:"2-\u8bbe\u7f6e-yunikorn-\u961f\u5217",children:[],level:3},{value:"3. \u5c06\u5e94\u7528\u7a0b\u5e8f\u6620\u5c04\u5230\u961f\u5217\u548c\u547d\u540d\u7a7a\u95f4",id:"3-\u5c06\u5e94\u7528\u7a0b\u5e8f\u6620\u5c04\u5230\u961f\u5217\u548c\u547d\u540d\u7a7a\u95f4",children:[],level:3}],level:2},{value:"\u672a\u6765\u7684\u5de5\u4f5c",id:"\u672a\u6765\u7684\u5de5\u4f5c",children:[],level:2}],c={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728 K8s \u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"\u8d44\u6e90\u914d\u989d")," \u8bbe\u7f6e\u547d\u540d\u7a7a\u95f4\uff0c\u4ee5\u9650\u5236\u8be5\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u603b\u8ba1\u8d44\u6e90\u6d88\u8017\u3002\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d\u7684\u9a8c\u8bc1\u76f4\u63a5\u5728 api-server \u4e2d\u5904\u7406\uff0c\u56e0\u6b64 YuniKorn \u50cf\u9ed8\u8ba4\u8c03\u5ea6\u5668\u4e00\u6837\u7b80\u5355\u5730\u9075\u5b88\u914d\u989d\u3002"),(0,i.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,i.kt)("p",null,"\u4e0d\u5f3a\u5236\u9488\u5bf9\u540d\u79f0\u7a7a\u95f4\u8bbe\u7f6e YuniKorn \u961f\u5217\u3002\n\u7136\u800c\uff0c\u5728\u5b9e\u8df5\u4e2d\uff0c\u8fd9\u6837\u505a\u66f4\u6709\u610f\u4e49\u3002\n\u547d\u540d\u7a7a\u95f4\u901a\u5e38\u88ab\u7528\u4e8e\u7ed9\u6bcf\u4e2a\u7528\u6237\u7ec4/\u56e2\u961f\u8bbe\u7f6e\u8d44\u6e90\u6d88\u8017\u4e0a\u9650\uff0c\nYuniKorn \u961f\u5217\u4e5f\u662f\u4e3a\u4e86\u5c06\u96c6\u7fa4\u8d44\u6e90\u5206\u6210\u591a\u4e2a\u7ec4\u3002\n\u8ba9\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,i.kt)("h3",{id:"1-\u8bbe\u7f6e\u547d\u540d\u7a7a\u95f4"},"1. \u8bbe\u7f6e\u547d\u540d\u7a7a\u95f4"),(0,i.kt)("p",null,"\u547d\u540d\u7a7a\u95f4: ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisement"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: advertisement\nspec:\n  hard:\n    requests.cpu: "200m"\n    requests.memory: 2000Mi\n    limits.cpu: "200m"\n    limits.memory: 4000Mi\n')),(0,i.kt)("p",null,"\u521b\u5efa\u547d\u540d\u7a7a\u95f4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create namespace advertisement\nkubectl create -f ./advertisement.yaml --namespace=advertisement\nkubectl get quota --namespace=advertisement\nkubectl describe quota advertisement --namespace=advertisement\n\n// output\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       0     200m\nlimits.memory    0     4000Mi\nrequests.cpu     0     200m\nrequests.memory  0     2000Mi\n")),(0,i.kt)("h3",{id:"2-\u8bbe\u7f6e-yunikorn-\u961f\u5217"},"2. \u8bbe\u7f6e YuniKorn \u961f\u5217"),(0,i.kt)("p",null,"\u961f\u5217: ",(0,i.kt)("inlineCode",{parentName:"p"},"advertisement"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"name: advertisement\nresources:\n  guaranteed:\n    vcore: 100\n    memory: 1000\n  max:\n    vcore: 200\n    memory: 2000\n")),(0,i.kt)("p",null,"\u786e\u4fdd ",(0,i.kt)("inlineCode",{parentName:"p"},"QueueMaxResource <= NamespaceResourceQuotaRequests")),(0,i.kt)("h3",{id:"3-\u5c06\u5e94\u7528\u7a0b\u5e8f\u6620\u5c04\u5230\u961f\u5217\u548c\u547d\u540d\u7a7a\u95f4"},"3. \u5c06\u5e94\u7528\u7a0b\u5e8f\u6620\u5c04\u5230\u961f\u5217\u548c\u547d\u540d\u7a7a\u95f4"),(0,i.kt)("p",null,"\u5728\u4e00\u4e2a pod \u7684 spec \u91cc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00001"\n    queue: "root.advertisement"\n  name: task0\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "50m"\n          memory: "800M"\n        limits:\n          cpu: "100m"\n          memory: "1000M"\n')),(0,i.kt)("p",null,"\u68c0\u67e5\u914d\u989d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl describe quota advertisement --namespace=advertisement\n\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       100m  200m\nlimits.memory    1G    4000Mi\nrequests.cpu     50m   200m\nrequests.memory  800M  2000Mi\n")),(0,i.kt)("p",null,"\u73b0\u5728\u63d0\u4ea4\u53e6\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00002"\n    queue: "root.advertisement"\n  name: task1\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "200m"\n          memory: "800M"\n        limits:\n          cpu: "200m"\n          memory: "1000M"\n')),(0,i.kt)("p",null,"\u56e0\u4e3a\u8bf7\u6c42\u7684 cpu ",(0,i.kt)("inlineCode",{parentName:"p"},"200m")," + \u4f7f\u7528\u7684 cpu ",(0,i.kt)("inlineCode",{parentName:"p"},"100m")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"300m")," \u8d85\u8fc7\u4e86\u8d44\u6e90\u914d\u989d\uff0c\u6240\u4ee5pod \u5c06\u65e0\u6cd5\u63d0\u4ea4\u5230 api-server\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl create -f pod_ns_adv_task1.yaml\nError from server (Forbidden): error when creating "pod_ns_adv_task1.yaml": pods "task1" is forbidden: exceeded quota: advertisement, requested: limits.cpu=200m,requests.cpu=200m, used: limits.cpu=100m,requests.cpu=50m, limited: limits.cpu=200m,requests.cpu=200m\n')),(0,i.kt)("h2",{id:"\u672a\u6765\u7684\u5de5\u4f5c"},"\u672a\u6765\u7684\u5de5\u4f5c"),(0,i.kt)("p",null,"\u4e3a\u4e86\u517c\u5bb9\u6027\uff0c\u6211\u4eec\u5e94\u8be5\u5c0a\u91cd\u547d\u540d\u7a7a\u95f4\u548c\u8d44\u6e90\u914d\u989d\u3002\n\u8d44\u6e90\u914d\u989d\u5728\u5f88\u591a\u65b9\u9762\u4e0e\u961f\u5217\u914d\u7f6e\u91cd\u53e0\uff0c\u4f8b\u5982\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"requests")," \u914d\u989d\u5c31\u50cf\u961f\u5217\u7684\u6700\u5927\u8d44\u6e90\u3002\n\u7136\u800c\uff0c\u8fd8\u6709\u4e00\u4e9b\u8d44\u6e90\u914d\u989d\u53ef\u4ee5\u505a\u4f46\u961f\u5217\u4e0d\u80fd\u505a\u7684\u529f\u80fd\uff0c\u4f8b\u5982"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u8d44\u6e90 ",(0,i.kt)("inlineCode",{parentName:"li"},"\u9650\u5236"),"\u3002 \u6765\u81ea\u547d\u540d\u7a7a\u95f4\u4e2d\u6240\u6709 Pod \u7684\u603b\u8ba1\u8d44\u6e90\u4e0d\u80fd\u8d85\u8fc7\u6b64\u9650\u5236\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u8d44\u6e90\u914d\u989d\uff0c\u4f8b\u5982\u5b58\u50a8\u5927\u5c0f\u3001PVC\u6570\u91cf\u7b49\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5bf9\u8c61\u6570\u91cf\u914d\u989d\uff0c\u4f8b\u5982 PVC\u3001service\u3001configmap\u7b49\u7684\u6570\u91cf\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8d44\u6e90\u914d\u989d\u53ef\u4ee5\u6620\u5c04\u5230\u8fdb\u7a0b\u4f18\u5148\u7ea7\u3002")),(0,i.kt)("p",null,"\u4e5f\u8bb8\u6211\u4eec\u53ef\u4ee5\u6784\u5efa\u7c7b\u4f3c\u4e8e\u6b64\u5217\u8868\u4e2d\uff083\uff09\u7684\u5b9e\u73b0\u3002\n\u4f46\u5f88\u96be\u5b8c\u5168\u652f\u6301\u6240\u6709\u8fd9\u4e9b\u4f8b\u5b50\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u76ee\u524d\uff0c\u5c06\u5e94\u7528\u7a0b\u5e8f\u6620\u5c04\u5230\u961f\u5217\u4ee5\u53ca\u76f8\u5e94\u7684\u547d\u540d\u7a7a\u95f4\u8fc7\u4e8e\u590d\u6742\u3002\n\u672a\u6765\u7684\u4e00\u4e9b\u6539\u8fdb\u53ef\u80fd\u662f\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u81ea\u52a8\u68c0\u6d4b k8s-shim \u4e2d\u7684\u547d\u540d\u7a7a\u95f4\u5e76\u6620\u5c04\u5230\u961f\u5217\u4e2d\u3002\u5728\u573a\u666f\u4e2d\uff0c\u6211\u4eec\u6839\u636e\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49\u81ea\u52a8\u751f\u6210\u961f\u5217\u914d\u7f6e\u3002\u751f\u6210\u7684\u961f\u5217\u9644\u52a0\u5728\u6839\u961f\u5217\u4e0b\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5f53\u65b0\u7684\u547d\u540d\u7a7a\u95f4\u6dfb\u52a0/\u66f4\u65b0/\u5220\u9664\u65f6\uff0c\u7c7b\u4f3c\u4e8e\uff081\uff09\uff0c\u6211\u4eec\u81ea\u52a8\u66f4\u65b0\u961f\u5217\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7528\u6237\u53ef\u4ee5\u4e3a\u961f\u5217\u6dfb\u52a0\u66f4\u591a\u914d\u7f6e\uff0c\u4f8b\u5982\u6dfb\u52a0\u961f\u5217ACL\uff0c\u5728\u751f\u6210\u7684\u961f\u5217\u4e0a\u6dfb\u52a0\u5b50\u961f\u5217\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u63d0\u4ea4\u5230\u547d\u540d\u7a7a\u95f4\u7684\u5e94\u7528\u7a0b\u5e8f\u900f\u660e\u5730\u63d0\u4ea4\u5230\u76f8\u5e94\u7684\u961f\u5217\u4e2d\u3002")))}m.isMDXComponent=!0}}]);