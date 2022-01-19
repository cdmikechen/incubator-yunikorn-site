"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3990],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(u,".").concat(h)]||d[h]||s[h]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5647:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={id:"deployment",title:"Deployment Guide"},u=void 0,c={unversionedId:"setup/deployment",id:"version-0.8.0/setup/deployment",title:"Deployment Guide",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/setup/deployment.md",sourceDirName:"setup",slug:"/setup/deployment",permalink:"/incubator-yunikorn-site/docs/0.8.0/setup/deployment",tags:[],version:"0.8.0",frontMatter:{id:"deployment",title:"Deployment Guide"},sidebar:"version-0.8.0/docs",previous:{title:"Configure Scheduler",permalink:"/incubator-yunikorn-site/docs/0.8.0/setup/configure_scheduler"},next:{title:"Environment Setup",permalink:"/incubator-yunikorn-site/docs/0.8.0/setup/env_setup"}},p=[{value:"Setup RBAC",id:"setup-rbac",children:[],level:2},{value:"Create the ConfigMap",id:"create-the-configmap",children:[],level:2},{value:"Deploy the scheduler on k8s",id:"deploy-the-scheduler-on-k8s",children:[],level:2},{value:"Access to the web UI",id:"access-to-the-web-ui",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The easiest way to deploy YuniKorn is to leverage our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/helm-charts"},"helm charts"),",\nyou can find the guide ",(0,i.kt)("a",{parentName:"p",href:"/incubator-yunikorn-site/docs/0.8.0/"},"here"),". However, if you want to explore the deployment procedure\nstep by step, here are the instructions."),(0,i.kt)("h2",{id:"setup-rbac"},"Setup RBAC"),(0,i.kt)("p",null,"The first step is to create the RBAC role for the scheduler, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/yunikorn-rbac.yaml"},"yunikorn-rbac.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create -f scheduler/yunikorn-rbac.yaml\n")),(0,i.kt)("p",null,"The role is a requirement on the current versions of kubernetes."),(0,i.kt)("h2",{id:"create-the-configmap"},"Create the ConfigMap"),(0,i.kt)("p",null,"YuniKorn loads its configuration from a K8s configmap, so it is required to create the configmap before launching the scheduler."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"download a sample configuration file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -o queues.yaml https://raw.githubusercontent.com/apache/incubator-yunikorn-k8shim/master/conf/queues.yaml\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create ConfigMap in kubernetes:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create configmap yunikorn-configs --from-file=queues.yaml\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check if the ConfigMap was created correctly:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl describe configmaps yunikorn-configs\n")),(0,i.kt)("p",null,"For more information about how to manage scheduler's configuration via configmap, see more from ",(0,i.kt)("a",{parentName:"p",href:"/incubator-yunikorn-site/docs/0.8.0/setup/configure_scheduler"},"here"),"."),(0,i.kt)("h2",{id:"deploy-the-scheduler-on-k8s"},"Deploy the scheduler on k8s"),(0,i.kt)("p",null,"Before you can deploy the scheduler the image for the scheduler and the web interface must be build with the appropriate tags.\nThe procedure on how to build the images is explained in the ",(0,i.kt)("a",{parentName:"p",href:"/incubator-yunikorn-site/docs/0.8.0/get_started/developer_guide"},"build document"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/scheduler.yaml"},"scheduler.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create -f scheduler/scheduler.yaml\n")),(0,i.kt)("p",null,"The deployment will run 2 containers from your pre-built docker images in 1 pod,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"yunikorn-scheduler-core (yunikorn scheduler core and shim for K8s)"),(0,i.kt)("li",{parentName:"ul"},"yunikorn-scheduler-web (web UI)")),(0,i.kt)("p",null,"The pod is deployed as a customized scheduler, it will take the responsibility to schedule pods which explicitly specifies ",(0,i.kt)("inlineCode",{parentName:"p"},"schedulerName: yunikorn")," in pod's spec."),(0,i.kt)("h2",{id:"access-to-the-web-ui"},"Access to the web UI"),(0,i.kt)("p",null,"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard ports can be turned on via:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'POD=`kubectl get pod -l app=yunikorn -o jsonpath="{.items[0].metadata.name}"` && \\\nkubectl port-forward ${POD} 9889 9080\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"9889")," is the default port for Web UI, ",(0,i.kt)("inlineCode",{parentName:"p"},"9080")," is the default port of scheduler's Restful service where web UI retrieves info from.\nOnce this is done, web UI will be available at: http://localhost:9889."))}d.isMDXComponent=!0}}]);