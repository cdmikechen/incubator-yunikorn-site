"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9752],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22759:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"k8shim",title:"Kubernetes Shim Design"},l=void 0,c={unversionedId:"design/k8shim",id:"design/k8shim",title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/docs/design/k8shim.md",sourceDirName:"design",slug:"/design/k8shim",permalink:"/zh-cn/docs/next/design/k8shim",tags:[],version:"current",frontMatter:{id:"k8shim",title:"Kubernetes Shim Design"},sidebar:"docs",previous:{title:"Scheduler cache removal design",permalink:"/zh-cn/docs/next/design/cache_removal"},next:{title:"Cross Queue Preemption",permalink:"/zh-cn/docs/next/design/cross_queue_preemption"}},d={},u=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",level:2},{value:"The admission controller",id:"the-admission-controller",level:2},{value:"Admission controller deployment",id:"admission-controller-deployment",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Github repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim"},"https://github.com/apache/yunikorn-k8shim")),(0,a.kt)("p",null,"Please read the ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/next/design/architecture"},"architecture")," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."),(0,a.kt)("h2",{id:"the-kubernetes-shim"},"The Kubernetes shim"),(0,a.kt)("p",null,"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."),(0,a.kt)("h2",{id:"the-admission-controller"},"The admission controller"),(0,a.kt)("p",null,"The admission controller runs in a separate pod, it runs a\n",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"mutation webhook"),"\nand a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook"},"validation webhook"),", where:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"mutation webhook")," mutates pod spec by:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Adding ",(0,a.kt)("inlineCode",{parentName:"li"},"schedulerName: yunikorn"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"By explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler."))),(0,a.kt)("li",{parentName:"ul"},"Adding ",(0,a.kt)("inlineCode",{parentName:"li"},"applicationId")," label",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When a label ",(0,a.kt)("inlineCode",{parentName:"li"},"applicationId")," exists, reuse the given applicationId."),(0,a.kt)("li",{parentName:"ul"},"When a label ",(0,a.kt)("inlineCode",{parentName:"li"},"spark-app-selector")," exists, reuse the given spark app ID."),(0,a.kt)("li",{parentName:"ul"},"Otherwise, assign a generated application ID for this pod, using convention: ",(0,a.kt)("inlineCode",{parentName:"li"},"yunikorn-<namespace>-autogen"),". This is unique per namespace."))),(0,a.kt)("li",{parentName:"ul"},"Adding ",(0,a.kt)("inlineCode",{parentName:"li"},"queue")," label",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When a label ",(0,a.kt)("inlineCode",{parentName:"li"},"queue")," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored."),(0,a.kt)("li",{parentName:"ul"},"Otherwise, adds ",(0,a.kt)("inlineCode",{parentName:"li"},"queue: root.default")))),(0,a.kt)("li",{parentName:"ul"},"Adding ",(0,a.kt)("inlineCode",{parentName:"li"},"disableStateAware")," label",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If pod was assigned a generated applicationId by the admission controller, also set ",(0,a.kt)("inlineCode",{parentName:"li"},"disableStateAware: true"),". This causes the generated application\nto immediately transition from the ",(0,a.kt)("inlineCode",{parentName:"li"},"Starting")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Running")," state so that it will not block other applications."))))),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"validation webhook")," validates the configuration set in the configmap",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This is used to prevent writing malformed configuration into the configmap."),(0,a.kt)("li",{parentName:"ul"},"The validation webhook calls scheduler ",(0,a.kt)("a",{parentName:"li",href:"/zh-cn/docs/next/api/scheduler#configuration-validation"},"validation REST API")," to validate configmap updates.")))),(0,a.kt)("h3",{id:"admission-controller-deployment"},"Admission controller deployment"),(0,a.kt)("p",null,"By default, the admission controller is deployed as part of the YuniKorn Helm chart installation. This can be disabled if necessary (though not recommended) by setting the Helm parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"embedAdmissionController")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"On startup, the admission controller performs a series of tasks to ensure that it is properly registered with Kubernetes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Loads a Kubernetes secret called ",(0,a.kt)("inlineCode",{parentName:"li"},"admission-controller-secrets"),". This secret stores a pair of CA certificates which are used to sign the TLS server certificate used by the admission controller."),(0,a.kt)("li",{parentName:"ol"},"If the secret cannot be found or either CA certificate is within 90 days of expiration, generates new certificate(s). If a certificate is expiring, a new one is generated with an expiration of 12 months in the future. If both certificates are missing or expiring, the second certificate is generated with an expiration of 6 months in the future. This ensures that both certificates do not expire at the same time, and that there is an overlap of trusted certificates."),(0,a.kt)("li",{parentName:"ol"},"If the CA certificates were created or updated, writes the secrets back to Kubernetes."),(0,a.kt)("li",{parentName:"ol"},"Generates an ephemeral TLS server certificate signed by the CA certificate with the latest expiration date."),(0,a.kt)("li",{parentName:"ol"},"Validates, and if necessary, creates or updates the Kubernetes webhook configurations named ",(0,a.kt)("inlineCode",{parentName:"li"},"yunikorn-admission-controller-validations")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"yunikorn-admission-controller-mutations"),". If the CA certificates have changed, the webhooks will also be updated. These webhooks allow the Kubernetes API server to connect to the admission controller service to perform configmap validations and pod mutations. "),(0,a.kt)("li",{parentName:"ol"},"Starts up the admission controller HTTPS server.")),(0,a.kt)("p",null,"Additionally, the admission controller also starts a background task to wait for CA certificates to expire. Once either certificate is expiring within the next 30 days, new CA and server certificates are generated, the webhook configurations are updated, and the HTTPS server is quickly restarted. This ensures that certificates rotate properly without downtime."),(0,a.kt)("p",null,"In production clusters, it is recommended to deploy the admission controller with two replicas by setting the Helm parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"admissionController.replicaCount")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),". This will ensure that at least one admission controller webhook is reachable by the Kubernetes API server at all times. In this configuration, the CA certificates and webhook configurations are shared between the instances."))}h.isMDXComponent=!0}}]);