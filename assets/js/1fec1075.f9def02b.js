"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8553],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(t),d=i,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},37028:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={id:"rn-0.10.0",title:"Release Announcement v0.10.0"},c=void 0,l={type:"mdx",permalink:"/release-announce/0.10.0",source:"@site/src/pages/release-announce/0.10.0.md",title:"Release Announcement v0.10.0",description:"\x3c!--",frontMatter:{id:"rn-0.10.0",title:"Release Announcement v0.10.0"}},u=[{value:"Overview",id:"overview",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Supported Kubernetes Versions",id:"supported-kubernetes-versions",level:3},{value:"Gang Scheduling",id:"gang-scheduling",level:3},{value:"Simplify the logic in the Scheduler Core",id:"simplify-the-logic-in-the-scheduler-core",level:3},{value:"Application Tracking API and CRD Phase One",id:"application-tracking-api-and-crd-phase-one",level:3},{value:"Web UI Refurbishment",id:"web-ui-refurbishment",level:3},{value:"Community",id:"community",level:2}],p={toc:u};function h(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-announcement-v0100"},"Release Announcement v0.10.0"),(0,o.kt)("p",null,"It gives us great pleasure to announce that the Apache YuniKorn (Incubating) community has voted to release 0.10.0. Apache YuniKorn (Incubating) is a standalone resource scheduler, designed for managing, and scheduling Big Data workloads on the container orchestration framework for on-prem and on-cloud use cases. "),(0,o.kt)("p",null,"The notable feature added in this release is the Gang Scheduling, YuniKorn now can provide gang scheduling capabilities while running applications on Kubernetes. Along with that, various bug fixes and improvements are included in this release."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Apache YuniKorn (Incubating) community has fixed over 187 JIRAs in this release: ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12349466"},"YuniKorn jiras resolved in 0.10.0")),(0,o.kt)("p",null,"Release manager: Tao Yang"),(0,o.kt)("p",null,"Release date: 2021-04-09"),(0,o.kt)("h2",{id:"highlights"},"Highlights"),(0,o.kt)("h3",{id:"supported-kubernetes-versions"},"Supported Kubernetes Versions"),(0,o.kt)("p",null,"From this release on, supported Kubernetes versions have been updated to 1.16.x, 1.17.x and 1.18.x. (Earlier versions support 1.13.x, 1.14.x and 1.15.x.) YuniKorn support matrix primarily supports 3 major Kubernetes versions."),(0,o.kt)("h3",{id:"gang-scheduling"},"Gang Scheduling"),(0,o.kt)("p",null,"In this release, YuniKorn starts to support the Gang Scheduling. Users can apply Gang Scheduling for the applications requiring gang scheduling semantics, such as Spark, Tensorflow, Pytorch, etc. YuniKorn proactively reserves resources for gang scheduling applications, which can work more efficiently with cluster-autoscaler. The initial support has been well tested with Spark, and it can be used with the native Spark on K8s or the Spark K8s operator. For more information how to enable and use Gang Scheduling, please read the doc ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_guide/gang_scheduling"},"here"),"."),(0,o.kt)("h3",{id:"simplify-the-logic-in-the-scheduler-core"},"Simplify the logic in the Scheduler Core"),(0,o.kt)("p",null,"The community has done a major code refactoring for the scheduler core, tracked by (YUNIKORN-317)","[https://issues.apache.org/jira/browse/YUNIKORN-317]",". This refactoring combines the cache and scheduler module into one that removes a lot of complexity in the code, improves the efficiency of the core scheduling logic. And as a result, it is much simpler to read and mitigates the maintenance effort."),(0,o.kt)("h3",{id:"application-tracking-api-and-crd-phase-one"},"Application Tracking API and CRD Phase One"),(0,o.kt)("p",null,"This release introduces an application tracking API and K8s custom resource definition (CRD) to further improve the user experience. The CRD will be used by the app operator/job server to interact with YuniKorn, to provide a better app lifecycle management. The first phase has defined the common protocol messages and CRD object formats."),(0,o.kt)("h3",{id:"web-ui-refurbishment"},"Web UI Refurbishment"),(0,o.kt)("p",null,"The community has made some usability improvements for the web UI, including a redesigned web UI layout, tweaked look and feel to provide better user experience, bug fixes, etc. "),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"The Apache YuniKorn community is pleased to welcome new committers Julia Kinga Marton and Tingyao Huang. We would love to see more committers joining the community and help to shape the project. In the past few months, we continue to have bi-weekly community meetings in 2 different time zones, ad-hoc meetings, offline channel discussions. The community will continue to be open."))}h.isMDXComponent=!0}}]);