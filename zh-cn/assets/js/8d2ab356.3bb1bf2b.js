"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[189],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24110:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"user_guide",title:"Get Started",slug:"/"},s=void 0,u={unversionedId:"get_started/user_guide",id:"version-0.10.0/get_started/user_guide",title:"Get Started",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/get_started/get_started.md",sourceDirName:"get_started",slug:"/",permalink:"/zh-cn/docs/0.10.0/",tags:[],version:"0.10.0",frontMatter:{id:"user_guide",title:"Get Started",slug:"/"},sidebar:"version-0.10.0/docs",next:{title:"Features",permalink:"/zh-cn/docs/0.10.0/get_started/core_features"}},c={},p=[{value:"Install",id:"install",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"Access the Web UI",id:"access-the-web-ui",level:2}],d={toc:p};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before reading this guide, we assume you either have a Kubernetes cluster, or a local Kubernetes dev environment, e.g MiniKube.\nIt is also assumed that ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," is on your path and properly configured.\nFollow this ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.10.0/developer_guide/env_setup"},"guide")," on how to setup a local Kubernetes cluster using docker-desktop."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"The easiest way to get started is to use our Helm Charts to deploy YuniKorn on an existing Kubernetes cluster.\nIt is recommended to use Helm 3 or later versions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm repo add yunikorn  https://apache.github.io/incubator-yunikorn-release\nhelm repo update\nkubectl create namespace yunikorn\nhelm install yunikorn yunikorn/yunikorn --namespace yunikorn\n")),(0,o.kt)("p",null,"By default, the helm chart will install the scheduler, web-server and the admission-controller in the cluster.\nWhen ",(0,o.kt)("inlineCode",{parentName:"p"},"admission-controller")," is installed, it simply routes all traffic to YuniKorn. That means the resource scheduling\nis delegated to YuniKorn. You can disable it by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"embedAdmissionController")," flag to false during the helm install.  "),(0,o.kt)("p",null,"Further configuration options for installing YuniKorn via Helm are available in the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.helm.sh/charts/yunikorn/yunikorn"},"YuniKorn Helm hub page"),"."),(0,o.kt)("p",null,"If you don't want to use helm charts, you can find our step-by-step\ntutorial ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.10.0/developer_guide/deployment"},"here"),"."),(0,o.kt)("h2",{id:"uninstall"},"Uninstall"),(0,o.kt)("p",null,"Run the following command to uninstall YuniKorn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm uninstall yunikorn --namespace yunikorn\n")),(0,o.kt)("h2",{id:"access-the-web-ui"},"Access the Web UI"),(0,o.kt)("p",null,"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard port can be turned on via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward svc/yunikorn-service 9889:9889 -n yunikorn\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"9889")," is the default port for web UI.\nOnce this is done, web UI will be available at: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9889"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"UI Screenshots",src:n(88966).Z,width:"1200",height:"617"})),(0,o.kt)("p",null,"YuniKorn UI provides a centralised view for cluster resource capacity, utilization, and all application info."))}h.isMDXComponent=!0},88966:function(e,t,n){t.Z=n.p+"assets/images/yk-ui-screenshots-d24de16a6a2af41a4d5ac1f488ce04a1.gif"}}]);