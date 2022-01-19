"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5877],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5069:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={id:"design",title:"Design"},c=void 0,s={unversionedId:"design/design",id:"version-0.8.0/design/design",title:"Design",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/design/design.md",sourceDirName:"design",slug:"/design/",permalink:"/incubator-yunikorn-site/docs/0.8.0/design/",tags:[],version:"0.8.0",frontMatter:{id:"design",title:"Design"},sidebar:"version-0.8.0/docs",previous:{title:"Profiling",permalink:"/incubator-yunikorn-site/docs/0.8.0/performance/profiling"},next:{title:"Cross Queue Preemption",permalink:"/incubator-yunikorn-site/docs/0.8.0/design/cross_queue_preemption"}},u=[{value:"Overall",id:"overall",children:[],level:2},{value:"Architecture",id:"architecture",children:[{value:"Components:",id:"components",children:[],level:3}],level:2},{value:"Implementation",id:"implementation",children:[],level:2},{value:"Configurations &amp; Semantics",id:"configurations--semantics",children:[],level:2},{value:"Flow of events",id:"flow-of-events",children:[],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"design-of-yunikorn-scheduler"},"Design of YuniKorn scheduler"),(0,a.kt)("h2",{id:"overall"},"Overall"),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("h3",{id:"components"},"Components:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scheduler API Server"),":"),(0,a.kt)("p",null,"Responsible for communication between RM and Scheduler, which implements scheduler-interface GRPC protocol, or just APIs. (For intra-process communication w/o Serde)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scheduler Cache"),":"),(0,a.kt)("p",null,"Caches all data related to scheduler state, such as used resources of each queues, nodes, allocations. Relationship between allocations and nodes, etc.\nShould not include temporary data helps with scheduler. For example to-be-preempted allocation candidates. Fair share resource of queues, etc."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scheduler Cache Event Handler"),":"),(0,a.kt)("p",null,"Handles all events which needs to update scheduler internal state. So all the write operations will be carefully handled."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Admin Service")),(0,a.kt)("p",null,"Handles request from Admin, which can also load configurations from storage and update scheduler policies."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scheduler and Preemptor")),(0,a.kt)("p",null,"Handles Scheduler's internal state. (Which is not belong to scheduelr cache), such as internal reservations, etc. Scheduler and preemptor will work together, make scheduling or preemption decisions."),(0,a.kt)("p",null,"All allocate/preempt request will be handled by event handler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"                      GRPC Protocol\n+---------------------------------------------------------------------------+\n                     +--------------------+\n                     |Scheduler API Server|\n +-------------+     +---------+----------+\n |AdminService |               |\n +-------------+               |Write Ops                    +----------------+\n +-------------+               V                            ++Scheduler       |\n |Configurator |      +-------------------+  Allocate       ||   And          |\n +-------------+      |Cache Event Handler+<-----------------|                |\n         +----------\x3e +-------------------+  Preempt        ++Preemptor       |\n          Update Cfg   Handled by policies                   +----------------+\n                               +  (Stateless)\n                        +------v--------+\n                        |Scheduler Cache|\n                        +---------------+\n                +---------------------------------------------+\n                |--------+ +------+ +----------+ +----------+ |\n                ||Node   | |Queue | |Allocation| |Requests  | |\n                |--------+ +------+ +----------+ +----------+ |\n                +---------------------------------------------+\n\n")),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scheduler needs to do following responsibilities")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"According to resource usages between queues, sort queues, applications, and figure out order of application allocation. (This will be used by preemption as well)."),(0,a.kt)("li",{parentName:"ul"},"It is possible that we cannot satisfy some of the allocation request, we need to skip them and find next request."),(0,a.kt)("li",{parentName:"ul"},"It is possible that some allocation request cannot be satisfied because of resource fragmentation. We need to reserve room for such requests."),(0,a.kt)("li",{parentName:"ul"},"Different nodes may belong to different disjoint partitions, we can make independent scheduler runs"),(0,a.kt)("li",{parentName:"ul"},"Locality is still important for many scenarios, especially for on-prem cases."),(0,a.kt)("li",{parentName:"ul"},"Be able to config and change ordering policies for apps, queues."),(0,a.kt)("li",{parentName:"ul"},"Application can choose their own way to manage sort of nodes.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Preemption:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'It is important to know "who wanna the resource", so we can do preemption based on allocation orders.'),(0,a.kt)("li",{parentName:"ul"},"When do preemption, it is also efficient to trigger allocation op. Think about how to do it."),(0,a.kt)("li",{parentName:"ul"},"Preemption needs to take care about queue resource balancing.")),(0,a.kt)("h2",{id:"configurations--semantics"},"Configurations & Semantics"),(0,a.kt)("p",null,"Example of configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Partition is name space.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Same queues can under different partitions, but enforced to have same hierarchy."),(0,a.kt)("p",{parentName:"li"},"  Good:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        / \\\n  b     c      b   c\n")),(0,a.kt)("p",{parentName:"li"},'  Good (c in partition y acl=""):'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        /\n  b     c      b\n")),(0,a.kt)("p",{parentName:"li"},"  Bad (c in different hierarchy)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        /  \\\n  b     c      b    d\n              /\n             c\n")),(0,a.kt)("p",{parentName:"li"},"  Bad (Duplicated c)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," partition=x\n     a\n   /   \\\n  b     c\n /\nc\n\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Different hierarchies can be added"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scheduler-conf.yaml"},"partitions:\n  - name:  default\n    queues:\n        root:\n          configs:\n            acls:\n          childrens:\n            - a\n            - b\n            - c\n            - ...\n        a:\n          configs:\n            acls:\n            capacity: (capacity is not allowed to set for root)\n            max-capacity: ...\n      mapping-policies:\n        ...\n  - name: partition_a:\n    queues:\n        root:...\n")))),(0,a.kt)("h2",{id:"flow-of-events"},"Flow of events"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Job Add:\n--------\nRM -> Cache -> Scheduler (Implemented)\n\nJob Remove:\n-----------\nRM -> Scheduler -> Cache (Implemented)\nReleased allocations: (Same as normal release) (Implemented)\nNote: Make sure remove from scheduler first to avoid new allocated created. \n\nScheduling Request Add:\n-----------------------\nRM -> Cache -> Scheduler (Implemented)\nNote: Will check if requested job exists, queue exists, etc.\nWhen any request invalid:\n   Cache -> RM (Implemented)\n   Scheduler -> RM (Implemented)\n\nScheduling Request remove:\n------------------------- \nRM -> Scheduler -> Cache (Implemented)\nNote: Make sure removed from scheduler first to avoid new container allocated\n\nAllocation remove (Preemption) \n-----------------\nScheduler -> Cache -> RM (TODO)\n              (confirmation)\n\nAllocation remove (RM voluntarilly ask)\n---------------------------------------\nRM -> Scheduler -> Cache -> RM. (Implemented)\n                      (confirmation)\n\nNode Add: \n---------\nRM -> Cache -> Scheduler (Implemented)\nNote: Inside Cache, update allocated resources.\nError handling: Reject Node to RM (Implemented)\n\nNode Remove: \n------------\nImplemented in cache side\nRM -> Scheduler -> Cache (TODO)\n\nAllocation Proposal:\n--------------------\nScheduler -> Cache -> RM\nWhen rejected/accepted:\n    Cache -> Scheduler\n    \nInitial: (TODO)\n--------\n1. Admin configured partitions\n2. Cache initializes\n3. Scheduler copies configurations\n\nRelations between Entities \n-------------------------\n1. RM includes one or multiple:\n   - Partitions \n   - Jobs\n   - Nodes \n   - Queues\n   \n2. One queue: \n   - Under one partition\n   - Under one RM.\n   \n3. One job: \n   - Under one queue (Job with same name can under different partitions)\n   - Under one partition\n\nRM registration: (TODO)\n----------------\n1. RM send registration\n2. If RM already registered, remove old one, including everything belong to RM.\n\nRM termination (TODO) \n--------------\nJust remove the old one.\n\nUpdate of queues (TODO) \n------------------------\nAdmin Service -> Cache\n\nAbout partition (TODO) \n-----------------------\nInternal partition need to be normalized, for example, RM specify node with partition = xyz. \nScheduler internally need to normalize it to <rm-id>_xyz\nThis need to be done by RMProxy\n\n")))}d.isMDXComponent=!0}}]);