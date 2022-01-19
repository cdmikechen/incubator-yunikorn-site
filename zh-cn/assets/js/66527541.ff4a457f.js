"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2460],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4215:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"acls",title:"ACLs"},l=void 0,u={unversionedId:"user_guide/acls",id:"version-0.10.0/user_guide/acls",title:"ACLs",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/user_guide/acls.md",sourceDirName:"user_guide",slug:"/user_guide/acls",permalink:"/incubator-yunikorn-site/zh-cn/docs/0.10.0/user_guide/acls",tags:[],version:"0.10.0",frontMatter:{id:"acls",title:"ACLs"},sidebar:"version-0.10.0/docs",previous:{title:"Sorting Policies",permalink:"/incubator-yunikorn-site/zh-cn/docs/0.10.0/user_guide/sorting_policies"},next:{title:"Resource Quota Management",permalink:"/incubator-yunikorn-site/zh-cn/docs/0.10.0/user_guide/resource_quota_management"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Syntax",id:"syntax",children:[],level:2},{value:"Example config",id:"example-config",children:[{value:"Simple examples",id:"simple-examples",children:[],level:3},{value:"Escaping and quotation marks",id:"escaping-and-quotation-marks",children:[],level:3}],level:2},{value:"Access check",id:"access-check",children:[],level:2},{value:"User and Group information",id:"user-and-group-information",children:[{value:"Resolution",id:"resolution",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"User information is currently not passed to the core scheduler from the kubernetes shim.\nTherefore, the recommendation is to use the wildcard ACL on the root queue for now as per the default configuration."))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Access Control Lists are generic for YuniKorn.\nThey can be used in multiple places in YuniKorn.\nThe current use case is limited to queue ACLs."),(0,a.kt)("p",null,"Access control lists give access to the users and groups that have been specified in the list.\nThey do not provide the possibility to explicitly remove or deny access to the users and groups specified in the list."),(0,a.kt)("p",null,"If there is no access control list is configured access is ",(0,a.kt)("em",{parentName:"p"},"denied")," by default."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"The access control list is defined as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n")),(0,a.kt)("p",null,"This definition specifies a wildcard of * which results in access for everyone."),(0,a.kt)("p",null,"If the user list is empty and the group list is empty nobody will have access.\nThis deny all ACL has two possible representations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an empty access control list. (implicit)"),(0,a.kt)("li",{parentName:"ul"},"a single space. (explicit)")),(0,a.kt)("h2",{id:"example-config"},"Example config"),(0,a.kt)("h3",{id:"simple-examples"},"Simple examples"),(0,a.kt)("p",null,"An ACL that allows access to just the user ",(0,a.kt)("inlineCode",{parentName:"p"},"sue")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue\n")),(0,a.kt)("p",null,"Nobody else will get access, this is just for ",(0,a.kt)("inlineCode",{parentName:"p"},"sue"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"john")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bob")," will be denied access."),(0,a.kt)("p",null,"An ACL that allows access to the user ",(0,a.kt)("inlineCode",{parentName:"p"},"sue")," and the members of the group ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue dev\n")),(0,a.kt)("p",null,"The user ",(0,a.kt)("inlineCode",{parentName:"p"},"sue")," gets access based on her explicit mention in the user part of the ACL.\nEven though she is not a member of the group ",(0,a.kt)("inlineCode",{parentName:"p"},"dev"),". Her group membership is irrelevant."),(0,a.kt)("p",null,"The user named ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\nA third user called ",(0,a.kt)("inlineCode",{parentName:"p"},"bob")," whom is not mentioned explicitly and is not a member of the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," group will be denied access."),(0,a.kt)("p",null,"An ACL that allows access to the members of the groups ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  adminacl: " dev,test"\n')),(0,a.kt)("p",null,"The ACL must start with a space to indicate that there is no user list.\nIf the ACL is not correctly quoted the space is dropped by the yaml parser.\nSince the user list is empty none of the users will get access unless they are a member of either the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," group."),(0,a.kt)("p",null,"Looking at the same three users as before:\nThe user ",(0,a.kt)("inlineCode",{parentName:"p"},"sue")," is not a member of either group and is denied access.\nThe user named ",(0,a.kt)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\n",(0,a.kt)("inlineCode",{parentName:"p"},"bob")," is not a member of the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," group but is a member of ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," and will be allowed access."),(0,a.kt)("h3",{id:"escaping-and-quotation-marks"},"Escaping and quotation marks"),(0,a.kt)("p",null,"ACLs are currently implemented in the queue configuration which uses a yaml file.\nThis places some limitations on the how to escape the values.\nIncorrectly quoted values will cause a yaml parse error or could lead to the incorrect interpretation of the value."),(0,a.kt)("p",null,"The following points need to be taken into account:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The wildcard entry must be quoted in the yaml config."),(0,a.kt)("li",{parentName:"ol"},"A simple list of users with or without it being followed by a list of groups does not need quoting but may be quoted."),(0,a.kt)("li",{parentName:"ol"},"An ACL without a user list and just one or more groups must be quoted to find the starting space:")),(0,a.kt)("p",null,"Correctly quoted ACL example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'partitions:\n  - name: default\n    queues:\n      - name: test\n        submitacl: "*"\n        adminacl: sue dev,test\n      - name: product\n        submitacl: " product"\n')),(0,a.kt)("h2",{id:"access-check"},"Access check"),(0,a.kt)("p",null,"The access check follows the pattern:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"check if the ACL is the wildcard"),(0,a.kt)("li",{parentName:"ul"},"check if the user is in the user list"),(0,a.kt)("li",{parentName:"ul"},"check if any of the groups the user is a member of is part of the group list")),(0,a.kt)("p",null,"If a check matches the ACL allows access and checking is stopped.\nIf none of the checks match the ACL denies access."),(0,a.kt)("h2",{id:"user-and-group-information"},"User and Group information"),(0,a.kt)("p",null,"ACLs require the user's name and group membership.\nUser information must be provided by the shims to the core scheduler.\nThe current expectation is that the shims only provide the user information and leave the group information empty."),(0,a.kt)("p",null,"User information is passed around in the scheduler as a combined user and groups object.\nThese objects are cached to allow fast lookup and minimise resolution of the groups."),(0,a.kt)("p",null,"Based on the fact that the shims do not have to provide group information the core has the possibility to resolve the group memberships.\nGroup membership resolution is pluggable, see ",(0,a.kt)("a",{parentName:"p",href:"#resolution"},"resolution")," below.\nIf the resolution of the groups of a user fails the result is still cached with a shortened lifetime.\nUsers resolution is cached, negatively and positively, per partition.\nUsers resolution like many other configs can differ between partition."),(0,a.kt)("h3",{id:"resolution"},"Resolution"),(0,a.kt)("p",null,"Groups do not have to be part of provided user and group object.\nWhen the object is added to the cache the groups are automatically resolved based on the resolution that is configured.\nThe resolver which is linked to the cache can be set per partition."),(0,a.kt)("p",null,'The default group resolver is "no resolver".\nThis resolver just echos the user name and a primary group with the same name as the user.'),(0,a.kt)("p",null,"Other resolvers are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OS resolver"),(0,a.kt)("li",{parentName:"ul"},"test resolver")))}d.isMDXComponent=!0}}]);