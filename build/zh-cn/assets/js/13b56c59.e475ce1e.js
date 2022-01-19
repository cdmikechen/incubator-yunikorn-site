"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2585],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5299:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn function & performance with Kubemark",keywords:["performance","throughput"]},u=void 0,l={unversionedId:"performance/evaluate_perf_function_with_kubemark",id:"version-0.9.0/performance/evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn function & performance with Kubemark",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/performance/evaluate_perf_function_with_kubemark.md",sourceDirName:"performance",slug:"/performance/evaluate_perf_function_with_kubemark",permalink:"/zh-cn/docs/0.9.0/performance/evaluate_perf_function_with_kubemark",tags:[],version:"0.9.0",frontMatter:{id:"evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn function & performance with Kubemark",keywords:["performance","throughput"]},sidebar:"version-0.9.0/docs",previous:{title:"Scheduler Object States",permalink:"/zh-cn/docs/0.9.0/design/scheduler_object_states"},next:{title:"Scheduler Metrics",permalink:"/zh-cn/docs/0.9.0/performance/metrics"}},c=[{value:"Scheduler Throughput",id:"scheduler-throughput",children:[],level:2},{value:"Resource Fairness between queues",id:"resource-fairness-between-queues",children:[],level:2},{value:"Node sorting policies",id:"node-sorting-policies",children:[{value:"FAIR Policy",id:"fair-policy",children:[],level:3},{value:"BIN-PACKING",id:"bin-packing",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All the following tests are done with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster"},"Kubemark"),",\na tool helps us to simulate large K8s cluster and run experimental workloads.\nThere were 18 bare-metal servers being used to simulate 2000/4000 nodes for these tests. "),(0,o.kt)("h2",{id:"scheduler-throughput"},"Scheduler Throughput"),(0,o.kt)("p",null,"When running Big Data batch workloads, e.g Spark, on K8s, scheduler throughput becomes to be one of the main concerns.\nIn YuniKorn, we have done lots of optimizations to improve the performance, such as a fully async event-driven system\nand low-latency sorting policies. The following chart reveals the scheduler throughput (by using Kubemark simulated\nenvironment, and submitting 50,000 pods), comparing to the K8s default scheduler."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scheduler Throughput",src:n(4785).Z})),(0,o.kt)("p",null,"The charts record the time spent until all pods are running on the cluster"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:"center"},"THROUGHPUT (pods/sec)"),(0,o.kt)("th",{parentName:"tr",align:"center"},"THROUGHPUT (pods/sec)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ENVIRONMENT (# nodes)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Default Scheduler"),(0,o.kt)("td",{parentName:"tr",align:"center"},"YuniKorn")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2000"),(0,o.kt)("td",{parentName:"tr",align:"center"},"263"),(0,o.kt)("td",{parentName:"tr",align:"center"},"617")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4000"),(0,o.kt)("td",{parentName:"tr",align:"center"},"141"),(0,o.kt)("td",{parentName:"tr",align:"center"},"373")))),(0,o.kt)("h2",{id:"resource-fairness-between-queues"},"Resource Fairness between queues"),(0,o.kt)("p",null,"Each of YuniKorn queues has its guaranteed and maximum capacity. When we have lots of jobs submitted to these queues,\nYuniKorn ensures each of them gets its fair share. When we monitor the resource usage of these queues, we can clearly\nsee how fairness was enforced:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scheduler Throughput",src:n(6289).Z})),(0,o.kt)("p",null,"We set up 4 heterogeneous queues on this cluster, and submit different workloads against these queues.\nFrom the chart, we can see the queue resources are increasing nearly in the same trend, which means the resource\nfairness across queues is honored."),(0,o.kt)("h2",{id:"node-sorting-policies"},"Node sorting policies"),(0,o.kt)("p",null,"There are 2 node sorting policies available in YuniKorn, with regarding the pod distributing flavors. One is ",(0,o.kt)("em",{parentName:"p"},"FAIR"),",\nwhich tries best to evenly distribute pods to nodes; the other one is ",(0,o.kt)("em",{parentName:"p"},"BIN-PACKING"),", which tries best to bin pack pods\nto less number of nodes. The former one is suitable for the Data Center scenarios, it helps to balance the stress of\ncluster nodes; the latter one is suitable to be used on Cloud, it can minimize the number of instances when working\nwith auto-scaler, in order to save cost."),(0,o.kt)("h3",{id:"fair-policy"},"FAIR Policy"),(0,o.kt)("p",null,"We group nodes into 10 buckets, each bucket represents for the number of nodes that has a similar resource\nutilization (a range).  To help you understand the chart, imagine the buckets have the following values at a certain\npoint of time:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"BUCKET"),(0,o.kt)("th",{parentName:"tr",align:"center"},"RESOURCE UTILIZATION RANGE"),(0,o.kt)("th",{parentName:"tr",align:"center"},"VALUE"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"bucket-0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0% - 10%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"100")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"bucket-1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"10% - 20%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"300")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"..."),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"bucket-9"),(0,o.kt)("td",{parentName:"tr",align:"center"},"90% - 100%"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,o.kt)("p",null,"This means at the given time, this cluster has 100 nodes whose utilization is in the range 0% to 10%;\nit has 300 nodes whose utilization is in the range 10% - 20%, and so on\u2026 Now, we run lots of workloads and\ncollect metrics, see the below chart:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Node Fairness",src:n(4829).Z})),(0,o.kt)("p",null,"We can see all nodes have 0% utilization, and then all of them move to bucket-1, then bucket-2 \u2026 and eventually\nall nodes moved to bucket-9, which means all capacity is used. In another word, nodes\u2019 resource has been used in\na fairness manner."),(0,o.kt)("h3",{id:"bin-packing"},"BIN-PACKING"),(0,o.kt)("p",null,"This is When the bin-packing policy is enabled, we can see the following pattern:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Node Bin-Packing",src:n(7057).Z})),(0,o.kt)("p",null,"On the contrary, all nodes are moving between 2 buckets, bucket-0 and bucket-9. Nodes in bucket-0 (0% - 10%)\nare decreasing in a linear manner, and nodes in bucket-9 (90% - 100%) are increasing with the same curve.\nIn other words, node resources are being used up one by one."))}d.isMDXComponent=!0},7057:function(e,t,n){t.Z=n.p+"assets/images/node-bin-packing-7d63f9e4a088f0b271580b794ff8c71c.png"},4829:function(e,t,n){t.Z=n.p+"assets/images/node-fair-1fecf15a75eff14ca8371bc927152d84.png"},6289:function(e,t,n){t.Z=n.p+"assets/images/queue-fairness-3a524e14fa54750fdc0d5456852f05f2.png"},4785:function(e,t,n){t.Z=n.p+"assets/images/throughput-5a45b5084a84d880c20179703af1e6b4.png"}}]);