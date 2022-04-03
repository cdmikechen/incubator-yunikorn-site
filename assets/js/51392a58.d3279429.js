"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3615],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),k=o,f=d["".concat(s,".").concat(k)]||d[k]||c[k]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25324:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"run_flink",title:"Run Flink Jobs",description:"How to run Flink jobs with YuniKorn",image:"https://svn.apache.org/repos/asf/flink/site/img/logo/png/100/flink_squirrel_100_color.png",keywords:["spark"]},s=void 0,u={unversionedId:"user_guide/workloads/run_flink",id:"version-0.11.0/user_guide/workloads/run_flink",title:"Run Flink Jobs",description:"How to run Flink jobs with YuniKorn",source:"@site/versioned_docs/version-0.11.0/user_guide/workloads/run_flink.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_flink",permalink:"/docs/0.11.0/user_guide/workloads/run_flink",tags:[],version:"0.11.0",frontMatter:{id:"run_flink",title:"Run Flink Jobs",description:"How to run Flink jobs with YuniKorn",image:"https://svn.apache.org/repos/asf/flink/site/img/logo/png/100/flink_squirrel_100_color.png",keywords:["spark"]},sidebar:"version-0.11.0/docs",previous:{title:"Run Spark Jobs",permalink:"/docs/0.11.0/user_guide/workloads/run_spark"},next:{title:"Run Tensorflow Jobs",permalink:"/docs/0.11.0/user_guide/workloads/run_tf"}},p={},c=[{value:"Standalone mode",id:"standalone-mode",level:2},{value:"Native mode",id:"native-mode",level:2}],d={toc:c};function k(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It's very easy to run ",(0,a.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," on Kubernetes with YuniKorn. Depending on which mode is\nused to run Flink on Kubernetes, the configuration is slight different."),(0,a.kt)("h2",{id:"standalone-mode"},"Standalone mode"),(0,a.kt)("p",null,"Please follow ",(0,a.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/ops/deployment/kubernetes.html"},"Kubernetes Setup")," to get details and examples of standalone deploy mode.\nIn this mode, we can directly add required labels (applicationId and queue) in Deployment/Job spec to run flink application with YuniKorn scheduler, as well as ",(0,a.kt)("a",{parentName:"p",href:"#run-workloads-with-yunikorn-scheduler"},"Run workloads with YuniKorn Scheduler"),"."),(0,a.kt)("h2",{id:"native-mode"},"Native mode"),(0,a.kt)("p",null,"Please follow ",(0,a.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/ops/deployment/native_kubernetes.html"},"Native Kubernetes Setup")," to get details and examples of native deploy mode.\nRunning flink application with YuniKorn scheduler in native mode is only supported for flink 1.11 or above, we can leverage two flink configurations ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes.jobmanager.labels")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes.taskmanager.labels")," to set the required labels.\nExamples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start a flink session")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/kubernetes-session.sh \\\n  -Dkubernetes.cluster-id=<ClusterId> \\\n  -Dtaskmanager.memory.process.size=4096m \\\n  -Dkubernetes.taskmanager.cpu=2 \\\n  -Dtaskmanager.numberOfTaskSlots=4 \\\n  -Dresourcemanager.taskmanager-timeout=3600000 \\\n  -Dkubernetes.jobmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox \\\n  -Dkubernetes.taskmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start a flink application")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/flink run-application -p 8 -t kubernetes-application \\\n  -Dkubernetes.cluster-id=<ClusterId> \\\n  -Dtaskmanager.memory.process.size=4096m \\\n  -Dkubernetes.taskmanager.cpu=2 \\\n  -Dtaskmanager.numberOfTaskSlots=4 \\\n  -Dkubernetes.container.image=<CustomImageName> \\\n  -Dkubernetes.jobmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox \\\n  -Dkubernetes.taskmanager.labels=applicationId:MyOwnApplicationId,queue:root.sandbox \\\n  local:///opt/flink/usrlib/my-flink-job.jar\n")))}k.isMDXComponent=!0}}]);