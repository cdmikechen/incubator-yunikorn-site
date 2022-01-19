"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3870],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7672:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"run_tf",title:"\u8fd0\u884c TensorFlow \u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528 YuniKorn \u8fd0\u884c TensorFlow \u4f5c\u4e1a",keywords:["tensorflow"]},u=void 0,s={unversionedId:"user_guide/workloads/run_tf",id:"user_guide/workloads/run_tf",title:"\u8fd0\u884c TensorFlow \u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528 YuniKorn \u8fd0\u884c TensorFlow \u4f5c\u4e1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/user_guide/workloads/run_tensorflow.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_tf",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/user_guide/workloads/run_tf",tags:[],version:"current",frontMatter:{id:"run_tf",title:"\u8fd0\u884c TensorFlow \u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528 YuniKorn \u8fd0\u884c TensorFlow \u4f5c\u4e1a",keywords:["tensorflow"]},sidebar:"docs",previous:{title:"\u8fd0\u884cFlink\u4f5c\u4e1a",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/user_guide/workloads/run_flink"},next:{title:"\u96c6\u7fa4",permalink:"/incubator-yunikorn-site/zh-cn/docs/next/api/cluster"}},c=[{value:"\u5b89\u88c5 training-operator",id:"\u5b89\u88c5-training-operator",children:[],level:2},{value:"\u51c6\u5907 docker \u955c\u50cf",id:"\u51c6\u5907-docker-\u955c\u50cf",children:[],level:2},{value:"\u8fd0\u884c\u4e00\u4e2a TensorFlow \u4f5c\u4e1a",id:"\u8fd0\u884c\u4e00\u4e2a-tensorflow-\u4f5c\u4e1a",children:[],level:2}],p={toc:c};function f(e){var n=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u6982\u8ff0\u4e86\u5982\u4f55\u8bbe\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator"},"training-operator")," \u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 YuniKorn \u8c03\u5ea6\u5668\u8fd0\u884c Tensorflow \u4f5c\u4e1a\u3002\ntraining-operator \u662f\u7531 Kubeflow \u7ef4\u62a4\u7684\u4e00\u4f53\u5316\u96c6\u6210\u7684\u8bad\u7ec3 operator\u3002\u5b83\u4e0d\u4ec5\u652f\u6301 TensorFlow\uff0c\u8fd8\u652f\u6301 PyTorch\u3001XGboots \u7b49\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5-training-operator"},"\u5b89\u88c5 training-operator"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728 kubeflow \u547d\u540d\u7a7a\u95f4\u4e2d\u9ed8\u8ba4\u5b89\u88c5 training operator\u3002\u5982\u679c\u5b89\u88c5\u6709\u95ee\u9898\uff0c\n\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator#installation"},"\u6b64\u6587\u6863")," \u6765\u67e5\u627e\u76f8\u5173\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl apply -k "github.com/kubeflow/training-operator/manifests/overlays/standalone?ref=v1.3.0"\n')),(0,a.kt)("h2",{id:"\u51c6\u5907-docker-\u955c\u50cf"},"\u51c6\u5907 docker \u955c\u50cf"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e8e Kubernetes \u4e0a\u8fd0\u884c TensorFlow \u4f5c\u4e1a\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u6784\u5efa docker \u955c\u50cf\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ece ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples/tfjob"},"deployment/examples/tfjob")," \u4e0a\u4e0b\u8f7d\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6784\u5efa\u8fd9\u4e2a docker \u955c\u50cf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -f Dockerfile -t kubeflow/tf-dist-mnist-test:1.0 .\n")),(0,a.kt)("h2",{id:"\u8fd0\u884c\u4e00\u4e2a-tensorflow-\u4f5c\u4e1a"},"\u8fd0\u884c\u4e00\u4e2a TensorFlow \u4f5c\u4e1a"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528 MNIST ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/examples/tfjob/tf-job-mnist.yaml"},"\u6837\u4f8b")," \u7684 TFJob yaml. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeflow.org/v1\nkind: TFJob\nmetadata:\n  name: dist-mnist-for-e2e-test\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 2\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n    Worker:\n      replicas: 4\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n')),(0,a.kt)("p",null,"\u521b\u5efa TFJob"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create -f deployments/examples/tfjob/tf-job-mnist.yaml\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece YuniKorn UI \u4e2d\u67e5\u770b\u4f5c\u4e1a\u4fe1\u606f\u3002 \u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u8bbf\u95ee YuniKorn UI\uff0c\n\u8bf7\u9605\u8bfb\u6b64 ",(0,a.kt)("a",{parentName:"p",href:"/incubator-yunikorn-site/zh-cn/docs/next/#%E8%AE%BF%E9%97%AE-Web-UI"},"\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tf-job-on-ui",src:t(6794).Z})))}f.isMDXComponent=!0},6794:function(e,n,t){n.Z=t.p+"assets/images/tf-job-on-ui-e31edb85612822915f336b8cf9a25c3f.png"}}]);