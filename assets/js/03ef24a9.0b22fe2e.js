"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1083],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8727:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),p=["components"],l={id:"system",title:"System"},s=void 0,i={unversionedId:"api/system",id:"version-0.9.0/api/system",title:"System",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/api/system.md",sourceDirName:"api",slug:"/api/system",permalink:"/incubator-yunikorn-site/docs/0.9.0/api/system",tags:[],version:"0.9.0",frontMatter:{id:"system",title:"System"},sidebar:"version-0.9.0/docs",previous:{title:"Scheduler",permalink:"/incubator-yunikorn-site/docs/0.9.0/api/scheduler"},next:{title:"Trouble Shooting",permalink:"/incubator-yunikorn-site/docs/0.9.0/user_guide/trouble_shooting"}},c=[{value:"pprof",id:"pprof",children:[{value:"Success response",id:"success-response",children:[],level:3}],level:2},{value:"Heap",id:"heap",children:[{value:"Success response",id:"success-response-1",children:[],level:3}],level:2},{value:"Thread create",id:"thread-create",children:[{value:"Success response",id:"success-response-2",children:[],level:3}],level:2},{value:"Goroutine",id:"goroutine",children:[{value:"Success response",id:"success-response-3",children:[],level:3}],level:2},{value:"Allocations",id:"allocations",children:[{value:"Success response",id:"success-response-4",children:[],level:3}],level:2},{value:"Block",id:"block",children:[{value:"Success response",id:"success-response-5",children:[],level:3}],level:2},{value:"Mutex",id:"mutex",children:[{value:"Success response",id:"success-response-6",children:[],level:3}],level:2},{value:"Cmdline",id:"cmdline",children:[{value:"Success response",id:"success-response-7",children:[],level:3}],level:2},{value:"Profile",id:"profile",children:[{value:"Success response",id:"success-response-8",children:[],level:3}],level:2},{value:"Symbol",id:"symbol",children:[{value:"Success response",id:"success-response-9",children:[],level:3}],level:2},{value:"Trace",id:"trace",children:[{value:"Success response",id:"success-response-10",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These endpoints are for the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/pprof"},"pprof")," profiling tool."),(0,a.kt)("h2",{id:"pprof"},"pprof"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/debug/pprof/\n\nTypes of profiles available:\nCount   Profile\n273 allocs\n0   block\n0   cmdline\n78  goroutine\n273 heap\n0   mutex\n0   profile\n29  threadcreate\n0   trace\nfull goroutine stack dump\nProfile Descriptions:\n\nallocs: A sampling of all past memory allocations\nblock: Stack traces that led to blocking on synchronization primitives\ncmdline: The command line invocation of the current program\ngoroutine: Stack traces of all current goroutines\nheap: A sampling of memory allocations of live objects. You can specify the gc GET parameter to run GC before taking the heap sample.\nmutex: Stack traces of holders of contended mutexes\nprofile: CPU profile. You can specify the duration in the seconds GET parameter. After you get the profile file, use the go tool pprof command to investigate the profile.\nthreadcreate: Stack traces that led to the creation of new OS threads\ntrace: A trace of execution of the current program. You can specify the duration in the seconds GET parameter. After you get the trace file, use the go tool trace command to investigate the trace.\n")),(0,a.kt)("h2",{id:"heap"},"Heap"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/heap")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-1"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"thread-create"},"Thread create"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/threadcreate")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-2"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"goroutine"},"Goroutine"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/goroutine")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-3"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"allocations"},"Allocations"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/allocs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-4"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"block"},"Block"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/block")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-5"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"mutex"},"Mutex"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/mutex")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-6"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"cmdline"},"Cmdline"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/cmdline")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-7"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"profile"},"Profile"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/profile")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-8"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"symbol"},"Symbol"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/symbol")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-9"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")),(0,a.kt)("h2",{id:"trace"},"Trace"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URL")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/debug/pprof/trace")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("h3",{id:"success-response-10"},"Success response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Content examples")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-proto"},"// binary data from proto\n")))}d.isMDXComponent=!0}}]);