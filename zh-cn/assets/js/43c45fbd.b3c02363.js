"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3693],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=o.createContext({}),c=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=r,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return t?o.createElement(d,i(i({ref:n},s),{},{components:t})):o.createElement(d,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21512:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"profiling",title:"Profiling"},p=void 0,c={unversionedId:"performance/profiling",id:"performance/profiling",title:"Profiling",description:"\x3c!--",source:"@site/docs/performance/profiling.md",sourceDirName:"performance",slug:"/performance/profiling",permalink:"/zh-cn/docs/next/performance/profiling",tags:[],version:"current",frontMatter:{id:"profiling",title:"Profiling"},sidebar:"docs",previous:{title:"Scheduler Metrics",permalink:"/zh-cn/docs/next/performance/metrics"}},s={},u=[{value:"CPU profiling",id:"cpu-profiling",level:2},{value:"Memory Profiling",id:"memory-profiling",level:2},{value:"Download profiling samples and analyze it locally",id:"download-profiling-samples-and-analyze-it-locally",level:2},{value:"Resources",id:"resources",level:2}],m={toc:u};function f(e){var n=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof")," to do CPU, Memory profiling can help you understand the runtime status of YuniKorn scheduler. Profiling instruments have been\nadded to YuniKorn rest service, we can easily retrieve and analyze them from HTTP\nendpoints."),(0,a.kt)("h2",{id:"cpu-profiling"},"CPU profiling"),(0,a.kt)("p",null,"At this step, ensure you already have YuniKorn running, it can be either running from\nlocal via a ",(0,a.kt)("inlineCode",{parentName:"p"},"make run")," command, or deployed as a pod running inside of K8s. Then run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go tool pprof http://localhost:9080/debug/pprof/profile\n")),(0,a.kt)("p",null,"The profile data will be saved on local file system, once that is done, it enters into\nthe interactive mode. Now you can run profiling commands, such as"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(pprof) top\nShowing nodes accounting for 14380ms, 44.85% of 32060ms total\nDropped 145 nodes (cum <= 160.30ms)\nShowing top 10 nodes out of 106\n      flat  flat%   sum%        cum   cum%\n    2130ms  6.64%  6.64%     2130ms  6.64%  __tsan_read\n    1950ms  6.08% 12.73%     1950ms  6.08%  __tsan::MetaMap::FreeRange\n    1920ms  5.99% 18.71%     1920ms  5.99%  __tsan::MetaMap::GetAndLock\n    1900ms  5.93% 24.64%     1900ms  5.93%  racecall\n    1290ms  4.02% 28.67%     1290ms  4.02%  __tsan_write\n    1090ms  3.40% 32.06%     3270ms 10.20%  runtime.mallocgc\n    1080ms  3.37% 35.43%     1080ms  3.37%  __tsan_func_enter\n    1020ms  3.18% 38.62%     1120ms  3.49%  runtime.scanobject\n    1010ms  3.15% 41.77%     1010ms  3.15%  runtime.nanotime\n     990ms  3.09% 44.85%      990ms  3.09%  __tsan::DenseSlabAlloc::Refill\n")),(0,a.kt)("p",null,"you can type command such as ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"gif")," to get a graph that helps you better\nunderstand the overall performance on critical code paths. You can get something\nlike below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CPU Profiling",src:t(52257).Z,width:"1793",height:"938"})),(0,a.kt)("p",null,"Note, in order to use these\noptions, you need to install the virtualization tool ",(0,a.kt)("inlineCode",{parentName:"p"},"graphviz")," first, if you are using Mac, simply run ",(0,a.kt)("inlineCode",{parentName:"p"},"brew install graphviz"),", for more info please refer ",(0,a.kt)("a",{parentName:"p",href:"https://graphviz.gitlab.io/"},"here"),"."),(0,a.kt)("h2",{id:"memory-profiling"},"Memory Profiling"),(0,a.kt)("p",null,"Similarly, you can run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go tool pprof http://localhost:9080/debug/pprof/heap\n")),(0,a.kt)("p",null,"this will return a snapshot of current heap which allows us to check memory usage.\nOnce it enters the interactive mode, you can run some useful commands. Such as\ntop can list top memory consumption objects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(pprof) top\nShowing nodes accounting for 83.58MB, 98.82% of 84.58MB total\nShowing top 10 nodes out of 86\n      flat  flat%   sum%        cum   cum%\n      32MB 37.84% 37.84%       32MB 37.84%  github.com/apache/yunikorn-core/pkg/cache.NewClusterInfo\n      16MB 18.92% 56.75%       16MB 18.92%  github.com/apache/yunikorn-core/pkg/rmproxy.NewRMProxy\n      16MB 18.92% 75.67%       16MB 18.92%  github.com/apache/yunikorn-core/pkg/scheduler.NewScheduler\n      16MB 18.92% 94.59%       16MB 18.92%  github.com/apache/yunikorn-k8shim/pkg/dispatcher.init.0.func1\n    1.04MB  1.23% 95.81%     1.04MB  1.23%  k8s.io/apimachinery/pkg/runtime.(*Scheme).AddKnownTypeWithName\n    0.52MB  0.61% 96.43%     0.52MB  0.61%  github.com/gogo/protobuf/proto.RegisterType\n    0.51MB  0.61% 97.04%     0.51MB  0.61%  sync.(*Map).Store\n    0.50MB   0.6% 97.63%     0.50MB   0.6%  regexp.onePassCopy\n    0.50MB  0.59% 98.23%     0.50MB  0.59%  github.com/json-iterator/go.(*Iterator).ReadString\n    0.50MB  0.59% 98.82%     0.50MB  0.59%  text/template/parse.(*Tree).newText\n")),(0,a.kt)("p",null,"you can also run ",(0,a.kt)("inlineCode",{parentName:"p"},"web"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pdf")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"gif")," command to get the graph for heap."),(0,a.kt)("h2",{id:"download-profiling-samples-and-analyze-it-locally"},"Download profiling samples and analyze it locally"),(0,a.kt)("p",null,"We have included essential go/go-tool binaries in scheduler docker image, you should be able to do some basic profiling\nanalysis inside of the docker container. However, if you want to dig into some issues, it might be better to do the analysis\nlocally. Then you need to copy the samples file to local environment first. The command to copy files is like following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl cp ${SCHEDULER_POD_NAME}:${SAMPLE_PATH_IN_DOCKER_CONTAINER} ${LOCAL_COPY_PATH}\n")),(0,a.kt)("p",null,"for example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl cp yunikorn-scheduler-cf8f8dd8-6szh5:/root/pprof/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n")),(0,a.kt)("p",null,"once you get the file in your local environment, then you can run the ",(0,a.kt)("inlineCode",{parentName:"p"},"pprof")," command for analysis."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go tool pprof /Users/wyang/Downloads/pprof.k8s_yunikorn_scheduler.samples.cpu.001.pb.gz\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pprof Document ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/pprof/tree/master/doc"},"https://github.com/google/pprof/tree/master/doc"),".")))}f.isMDXComponent=!0},52257:function(e,n,t){n.Z=t.p+"assets/images/cpu_profile-9597863f861872384ae86daabd07f7f9.jpg"}}]);