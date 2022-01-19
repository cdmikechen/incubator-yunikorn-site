"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4505],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=r,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return t?i.createElement(m,a(a({ref:n},c),{},{components:t})):i.createElement(m,a({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},124:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],l={id:"k8shim",title:"Kubernetes Shim Design"},s=void 0,u={unversionedId:"design/k8shim",id:"version-0.9.0/design/k8shim",title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/design/k8shim.md",sourceDirName:"design",slug:"/design/k8shim",permalink:"/incubator-yunikorn-site/docs/0.9.0/design/k8shim",tags:[],version:"0.9.0",frontMatter:{id:"k8shim",title:"Kubernetes Shim Design"},sidebar:"version-0.9.0/docs",previous:{title:"Scheduler Core Design",permalink:"/incubator-yunikorn-site/docs/0.9.0/design/scheduler_core_design"},next:{title:"Cross Queue Preemption",permalink:"/incubator-yunikorn-site/docs/0.9.0/design/cross_queue_preemption"}},c=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",children:[],level:2},{value:"The admission controller",id:"the-admission-controller",children:[{value:"Admission controller deployment",id:"admission-controller-deployment",children:[],level:3}],level:2}],p={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Github repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"https://github.com/apache/incubator-yunikorn-k8shim")),(0,o.kt)("p",null,"Please read the ",(0,o.kt)("a",{parentName:"p",href:"/incubator-yunikorn-site/docs/0.9.0/design/architecture"},"architecture")," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."),(0,o.kt)("h2",{id:"the-kubernetes-shim"},"The Kubernetes shim"),(0,o.kt)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."),(0,o.kt)("h2",{id:"the-admission-controller"},"The admission controller"),(0,o.kt)("p",null,"The admission controller runs in a separate pod, it runs a\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"mutation webhook"),"\nand a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"validation webhook"),", where:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"mutation webhook")," mutates pod spec by:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"adding ",(0,o.kt)("inlineCode",{parentName:"li"},"schedulerName: yunikorn"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"by explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler"))),(0,o.kt)("li",{parentName:"ul"},"adding ",(0,o.kt)("inlineCode",{parentName:"li"},"applicationId")," label",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"when a label ",(0,o.kt)("inlineCode",{parentName:"li"},"applicationId")," exists, reuse the given applicationId"),(0,o.kt)("li",{parentName:"ul"},"when a label ",(0,o.kt)("inlineCode",{parentName:"li"},"spark-app-selector")," exists, reuse the given spark app ID"),(0,o.kt)("li",{parentName:"ul"},"otherwise, assign a generated application ID for this pod, using convention: ",(0,o.kt)("inlineCode",{parentName:"li"},"yunikorn-<namespace>-autogen"),". this is unique per namespace. "))),(0,o.kt)("li",{parentName:"ul"},"adding ",(0,o.kt)("inlineCode",{parentName:"li"},"queue")," label",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"when a label ",(0,o.kt)("inlineCode",{parentName:"li"},"queue")," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored"),(0,o.kt)("li",{parentName:"ul"},"otherwise, adds ",(0,o.kt)("inlineCode",{parentName:"li"},"queue: root.default")))))),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"validation webhook")," validates the configuration set in the configmap",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"this is used to prevent writing malformed configuration into the configmap"),(0,o.kt)("li",{parentName:"ul"},"the validation webhook calls scheduler ",(0,o.kt)("a",{parentName:"li",href:"/incubator-yunikorn-site/docs/0.9.0/api/scheduler#configuration-validation"},"validation REST API")," to validate configmap updates")))),(0,o.kt)("h3",{id:"admission-controller-deployment"},"Admission controller deployment"),(0,o.kt)("p",null,"Currently, the deployment of the admission-controller is done as a ",(0,o.kt)("inlineCode",{parentName:"p"},"post-start")," hook in the scheduler deployment, similarly, the\nuninstall is done as a ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-stop")," hook. See the related code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/56e580af24ed3433e7d73d9ea556b19ad7b74337/helm-charts/yunikorn/templates/deployment.yaml#L80-L85"},"here"),".\nDuring the installation, it is expected to always co-locate the admission controller with the scheduler pod, this is done\nby adding the pod-affinity in the admission-controller pod, like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'podAffinity:\n  requiredDuringSchedulingIgnoredDuringExecution:\n    - labelSelector:\n      matchExpressions:\n      - key: component\n        operator: In\n        values:\n        - yunikorn-scheduler\n      topologyKey: "kubernetes.io/hostname"\n')),(0,o.kt)("p",null,"it also tolerates all the taints in case the scheduler pod has some toleration set."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'tolerations:\n- operator: "Exists"\n')))}d.isMDXComponent=!0}}]);