"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2702],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=i,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||o;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function h(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4092:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],s={id:"core_features",title:"Features",keywords:["feature"]},u=void 0,c={unversionedId:"get_started/core_features",id:"version-0.12.1/get_started/core_features",title:"Features",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.1/get_started/core_features.md",sourceDirName:"get_started",slug:"/get_started/core_features",permalink:"/incubator-yunikorn-site/zh-cn/docs/get_started/core_features",tags:[],version:"0.12.1",frontMatter:{id:"core_features",title:"Features",keywords:["feature"]},sidebar:"version-0.12.1/docs",previous:{title:"Get Started",permalink:"/incubator-yunikorn-site/zh-cn/docs/"},next:{title:"Partition and Queue Configuration",permalink:"/incubator-yunikorn-site/zh-cn/docs/user_guide/queue_config"}},l=[{value:"App-aware scheduling",id:"app-aware-scheduling",children:[],level:2},{value:"Hierarchy Resource Queues",id:"hierarchy-resource-queues",children:[],level:2},{value:"Job Ordering and Queuing",id:"job-ordering-and-queuing",children:[],level:2},{value:"Resource fairness",id:"resource-fairness",children:[],level:2},{value:"Resource Reservation",id:"resource-reservation",children:[],level:2},{value:"Throughput",id:"throughput",children:[],level:2}],d={toc:l};function p(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The main features of YuniKorn include:"),(0,o.kt)("h2",{id:"app-aware-scheduling"},"App-aware scheduling"),(0,o.kt)("p",null,"One of the key differences of YuniKorn is, it does app-aware scheduling. In default K8s scheduler, it simply schedules\npod by pod, without any context about user, app, queue. However, YuniKorn recognizes users, apps, queues, and it considers\na lot more factors, e.g resource, ordering etc, while making scheduling decisions. This gives us the possibility to do\nfine-grained controls on resource quotas, resource fairness and priorities, which are the most important requirements\nfor a multi-tenancy computing system."),(0,o.kt)("h2",{id:"hierarchy-resource-queues"},"Hierarchy Resource Queues"),(0,o.kt)("p",null,"Hierarchy queues provide an efficient mechanism to manage cluster resources. The hierarchy of the queues can logically\nmap to the structure of an organization. This gives fine-grained control over resources for different tenants. The YuniKorn\nUI provides a centralised view to monitor the usage of resource queues, it helps you to get the insight how the resources are\nused across different tenants. What's more, By leveraging the min/max queue capacity, it can define how elastic it can be\nin terms of the resource consumption for each tenant."),(0,o.kt)("h2",{id:"job-ordering-and-queuing"},"Job Ordering and Queuing"),(0,o.kt)("p",null,"Applications can be properly queued in working-queues, the ordering policy determines which application can get resources first.\nThe policy can be various, such as simple ",(0,o.kt)("inlineCode",{parentName:"p"},"FIFO"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Fair"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"StateAware")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Priority")," based. Queues can maintain the order of applications,\nand based on different policies, the scheduler allocates resources to jobs accordingly. The behavior is much more predictable."),(0,o.kt)("p",null,"What's more, when the queue max-capacity is configured, jobs and tasks can be properly queued up in the resource queue.\nIf the remaining capacity is not enough, they can be waiting in line until some resources are released. This simplifies\nthe client side operation. Unlike the default scheduler, resources are capped by namespace resource quotas,\nand that is enforced by the quota-admission-controller, if the underneath namespace has no enough quota, pods cannot be\ncreated. Client side needs complex logic, e.g retry by condition, to handle such scenarios."),(0,o.kt)("h2",{id:"resource-fairness"},"Resource fairness"),(0,o.kt)("p",null,"In a multi-tenant environment, a lot of users are sharing cluster resources. To avoid tenants from competing resources\nand potential get starving. More fine-grained fairness needs to achieve fairness across users, as well as teams/organizations.\nWith consideration of weights or priorities, some more important applications can get high demand resources that stand over its share.\nThis is often associated with resource budget, a more fine-grained fairness mode can further improve the expense control."),(0,o.kt)("h2",{id:"resource-reservation"},"Resource Reservation"),(0,o.kt)("p",null,"YuniKorn automatically does reservations for outstanding requests. If a pod could not be allocated, YuniKorn will try to\nreserve it on a qualified node and tentatively allocate the pod on this reserved node (before trying rest of nodes).\nThis mechanism can avoid this pod gets starved by later submitted smaller, less-picky pods.\nThis feature is important in the batch workloads scenario because when a large amount of heterogeneous pods is submitted\nto the cluster, it's very likely some pods can be starved even they are submitted much earlier. "),(0,o.kt)("h2",{id:"throughput"},"Throughput"),(0,o.kt)("p",null,"Throughput is a key criterion to measure scheduler performance. It is critical for a large scale distributed system.\nIf throughput is bad, applications may waste time on waiting for scheduling, and further impact service SLAs.\nWhen the cluster gets bigger, it also means the requirement of higher throughput. The ",(0,o.kt)("a",{parentName:"p",href:"/incubator-yunikorn-site/zh-cn/docs/performance/evaluate_perf_function_with_kubemark"},"performance evaluation based on Kube-mark"),"\nreveals some perf numbers."))}p.isMDXComponent=!0}}]);