"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[130],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2340:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",keywords:["tensorflow"]},s=void 0,u={unversionedId:"user_guide/workloads/run_tf",id:"version-0.12.1/user_guide/workloads/run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",source:"@site/versioned_docs/version-0.12.1/user_guide/workloads/run_tensorflow.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_tf",permalink:"/incubator-yunikorn-site/docs/user_guide/workloads/run_tf",tags:[],version:"0.12.1",frontMatter:{id:"run_tf",title:"Run TensorFlow Jobs",description:"How to run TensorFlow jobs with YuniKorn",keywords:["tensorflow"]},sidebar:"version-0.12.1/docs",previous:{title:"Run Flink Jobs",permalink:"/incubator-yunikorn-site/docs/user_guide/workloads/run_flink"},next:{title:"Cluster",permalink:"/incubator-yunikorn-site/docs/api/cluster"}},c=[{value:"Install training-operator",id:"install-training-operator",children:[],level:2},{value:"Prepare the docker image",id:"prepare-the-docker-image",children:[],level:2},{value:"Run a TensorFlow job",id:"run-a-tensorflow-job",children:[],level:2}],p={toc:c};function f(e){var n=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide gives an overview of how to set up ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator"},"training-operator"),"\nand how to run a Tensorflow job with YuniKorn scheduler. The training-operator is a unified training operator maintained by\nKubeflow. It not only supports TensorFlow but also PyTorch, XGboots, etc."),(0,a.kt)("h2",{id:"install-training-operator"},"Install training-operator"),(0,a.kt)("p",null,"You can use the following command to install training operator in kubeflow namespace by default. If you have problems with installation,\nplease refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/training-operator#installation"},"this doc")," for details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl apply -k "github.com/kubeflow/training-operator/manifests/overlays/standalone?ref=v1.3.0"\n')),(0,a.kt)("h2",{id:"prepare-the-docker-image"},"Prepare the docker image"),(0,a.kt)("p",null,"Before you start running a TensorFlow job on Kubernetes, you'll need to build the docker image."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download files from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples/tfjob"},"deployment/examples/tfjob")),(0,a.kt)("li",{parentName:"ol"},"To build this docker image with the following command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -f Dockerfile -t kubeflow/tf-dist-mnist-test:1.0 .\n")),(0,a.kt)("h2",{id:"run-a-tensorflow-job"},"Run a TensorFlow job"),(0,a.kt)("p",null,"Here is a TFJob yaml for MNIST ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/examples/tfjob/tf-job-mnist.yaml"},"example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kubeflow.org/v1\nkind: TFJob\nmetadata:\n  name: dist-mnist-for-e2e-test\n  namespace: kubeflow\nspec:\n  tfReplicaSpecs:\n    PS:\n      replicas: 2\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n    Worker:\n      replicas: 4\n      restartPolicy: Never\n      template:\n        metadata:\n          labels:\n            applicationId: "tf_job_20200521_001"\n            queue: root.sandbox\n        spec:\n          schedulerName: yunikorn\n          containers:\n            - name: tensorflow\n              image: kubeflow/tf-dist-mnist-test:1.0\n')),(0,a.kt)("p",null,"Create the TFJob"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create -f deployments/examples/tfjob/tf-job-mnist.yaml\n")),(0,a.kt)("p",null,"You can view the job info from YuniKorn UI. If you do not know how to access the YuniKorn UI,\nplease read the document ",(0,a.kt)("a",{parentName:"p",href:"/incubator-yunikorn-site/docs/#access-the-web-ui"},"here"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tf-job-on-ui",src:t(6794).Z})))}f.isMDXComponent=!0},6794:function(e,n,t){n.Z=t.p+"assets/images/tf-job-on-ui-e31edb85612822915f336b8cf9a25c3f.png"}}]);