"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9012],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),p=i,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6310:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"scheduler_object_states",title:"Scheduler Object States"},c=void 0,l={unversionedId:"design/scheduler_object_states",id:"version-0.9.0/design/scheduler_object_states",title:"Scheduler Object States",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/design/scheduler_object_states.md",sourceDirName:"design",slug:"/design/scheduler_object_states",permalink:"/incubator-yunikorn-site/zh-cn/docs/0.9.0/design/scheduler_object_states",tags:[],version:"0.9.0",frontMatter:{id:"scheduler_object_states",title:"Scheduler Object States"},sidebar:"version-0.9.0/docs",previous:{title:"Batch Workloads Ordering with StateAware Policy",permalink:"/incubator-yunikorn-site/zh-cn/docs/0.9.0/design/state_aware_scheduling"},next:{title:"Evaluate YuniKorn function & performance with Kubemark",permalink:"/incubator-yunikorn-site/zh-cn/docs/0.9.0/performance/evaluate_perf_function_with_kubemark"}},u=[{value:"Core Scheduler",id:"core-scheduler",children:[{value:"Application State",id:"application-state",children:[],level:3},{value:"Object State",id:"object-state",children:[],level:3},{value:"Node",id:"node",children:[],level:3}],level:2},{value:"K8Shim Resource Manager",id:"k8shim-resource-manager",children:[{value:"Application",id:"application",children:[],level:3},{value:"Task",id:"task",children:[],level:3},{value:"Node",id:"node-1",children:[],level:3},{value:"Scheduler",id:"scheduler",children:[],level:3}],level:2}],d={toc:u};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The YuniKorn project uses state machines to track the states of different objects.\nThis ranges from applications in the core to nodes in the k8shim.\nThe state machines are independent and not shared between the resource managers and core.\nA resource manager shim, and the core can thus have an independent idea of the state of a similar object."),(0,r.kt)("h2",{id:"core-scheduler"},"Core Scheduler"),(0,r.kt)("p",null,"State change are triggered by events that get processed.\nOne event can cause a change for multiple states or no change at all."),(0,r.kt)("h3",{id:"application-state"},"Application State"),(0,r.kt)("p",null,"Applications have a complex state model.\nAn application when created starts ain the new state."),(0,r.kt)("p",null,"An application can have the following states:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"New: A new application that is being submitted or created, from here the application transitions into the accepted state when it is ready for scheduling.\nThe first ask to be added will trigger the transition."),(0,r.kt)("li",{parentName:"ul"},"Accepted: The application is ready and part of the scheduling cycle.\nOn allocation of the first ask the application moves into a starting state.\nThis state is part of the normal scheduling cycle."),(0,r.kt)("li",{parentName:"ul"},"Starting: The application has exactly one allocation confirmed this corresponds to one running container/pod.\nThe application transitions to running if and when more allocations are added to the application.\nThis state times out automatically to prevent applications that consist of just one allocation from getting stuck in this state.\nThe current time out is set to 5 minutes, and cannot be changed.\nIf after the timeout expires the application will auto transition to running.\nThe state change on time out is independent of the number of allocations added.\nThis state is part of the normal scheduling cycle."),(0,r.kt)("li",{parentName:"ul"},"Running: The state in which the application will spend most of its time.\nContainers/pods can be added to and removed from the application.\nThis state is part of the normal scheduling cycle."),(0,r.kt)("li",{parentName:"ul"},"Waiting: An application that has no pending requests or running containers/pod will be waiting.\nThis state shows that the application has not been marked completed yet but currently is not actively being scheduled."),(0,r.kt)("li",{parentName:"ul"},"Completed: The resource manager has signalled that the application is done.\nThis is a final state. The application cannot change state after entering."),(0,r.kt)("li",{parentName:"ul"},"Killed: Removed by the resource manager at the request of an administrator or the user running the application.\nThis is a final state. The application cannot change state after entering."),(0,r.kt)("li",{parentName:"ul"},"Rejected: The application was rejected when it was added to the scheduler.\nThis only happens when a resource manager tries to add a new application, when it gets created in a New state, and the scheduler rejects the creation.\nApplications can be rejected due ACLs denying access to a queue the application has specified, or a placement via placement rules has failed.\nThis is a final state. The application cannot change state after entering.")),(0,r.kt)("p",null,"The events that can trigger a state change:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reject: rejecting the application by the scheduler (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Run: progress an application to the next active state (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Wait: mark an application as idle (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Complete: mark an application as complete (source: resource manager)"),(0,r.kt)("li",{parentName:"ul"},"Kill: kill an application (source: resource manager)")),(0,r.kt)("p",null,"Here is a diagram that shows the states with the event that causes the state to change:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"application state diagram",src:n(1368).Z})),(0,r.kt)("h3",{id:"object-state"},"Object State"),(0,r.kt)("p",null,"The object state is used by the following objects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"queues"),(0,r.kt)("li",{parentName:"ul"},"partitions")),(0,r.kt)("p",null,"The object states are as follows: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Active: The object is active and used during the scheduling cycle.\nThis is the starting and normal state of an object.\nAn active object transitions to draining when it is removed.  "),(0,r.kt)("li",{parentName:"ul"},"Stopped: The object is stopped and no longer actively scheduled.\nThe object if empty is ready to be removed from the scheduler.\nThe object can transition back into active state if it gets re-started."),(0,r.kt)("li",{parentName:"ul"},"Draining: Before an object can be removed it needs to be cleaned up.\nThe cleanup starts with placing the object in the draining state.\nIn this state it does not accept additions or changes but is still actively being scheduled.\nThis allows for a graceful shutdown, cleanup and removal of the object.\nThis is the final state.")),(0,r.kt)("p",null,"The events that can trigger a state change:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start: make the object active (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Stop: make the object inactive (source: core scheduler)"),(0,r.kt)("li",{parentName:"ul"},"Remove: mark an object for removal (source: core scheduler)")),(0,r.kt)("p",null,"Here is a diagram that shows the states with the event that causes the state to change:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"object state diagram",src:n(5334).Z})),(0,r.kt)("h3",{id:"node"},"Node"),(0,r.kt)("p",null,"Node objects in the core are not using a state machine but do have a state.\nA node can have one of two states: ",(0,r.kt)("inlineCode",{parentName:"p"},"schedulable")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"not schedulable"),".\nThere is no complex state model or complex transition logic.\nThe scheduler can either use the node or not."),(0,r.kt)("p",null,"The node status changes based on the status provided by the resource manager (shim) that owns the node. "),(0,r.kt)("h2",{id:"k8shim-resource-manager"},"K8Shim Resource Manager"),(0,r.kt)("h3",{id:"application"},"Application"),(0,r.kt)("p",null,"To be added"),(0,r.kt)("h3",{id:"task"},"Task"),(0,r.kt)("p",null,"To be added"),(0,r.kt)("h3",{id:"node-1"},"Node"),(0,r.kt)("p",null,"To be added"),(0,r.kt)("h3",{id:"scheduler"},"Scheduler"),(0,r.kt)("p",null,"To be added"))}h.isMDXComponent=!0},1368:function(e,t,n){t.Z=n.p+"assets/images/application-state-9fece547976633347194f9fc2abc1413.png"},5334:function(e,t,n){t.Z=n.p+"assets/images/object-state-ce78c19f65c895bbbddd0e48b4c22d8f.png"}}]);