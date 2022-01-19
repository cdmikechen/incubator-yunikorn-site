"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[714],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8493:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"acls",title:"ACLs"},l=void 0,c={unversionedId:"user_guide/acls",id:"version-0.11.0/user_guide/acls",title:"ACLs",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/user_guide/acls.md",sourceDirName:"user_guide",slug:"/user_guide/acls",permalink:"/incubator-yunikorn-site/docs/0.11.0/user_guide/acls",tags:[],version:"0.11.0",frontMatter:{id:"acls",title:"ACLs"},sidebar:"version-0.11.0/docs",previous:{title:"Sorting Policies",permalink:"/incubator-yunikorn-site/docs/0.11.0/user_guide/sorting_policies"},next:{title:"Resource Quota Management",permalink:"/incubator-yunikorn-site/docs/0.11.0/user_guide/resource_quota_management"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Syntax",id:"syntax",children:[],level:2},{value:"Example config",id:"example-config",children:[{value:"Simple examples",id:"simple-examples",children:[],level:3},{value:"Escaping and quotation marks",id:"escaping-and-quotation-marks",children:[],level:3}],level:2},{value:"Access check",id:"access-check",children:[],level:2},{value:"User and Group information",id:"user-and-group-information",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"User information is passed to the core scheduler from the kubernetes shim using the methodology defined ",(0,i.kt)("a",{parentName:"p",href:"usergroup_resolution"},"here")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Access Control Lists are generic for YuniKorn.\nThey can be used in multiple places in YuniKorn.\nThe current use case is limited to queue ACLs."),(0,i.kt)("p",null,"Access control lists give access to the users and groups that have been specified in the list.\nThey do not provide the possibility to explicitly remove or deny access to the users and groups specified in the list."),(0,i.kt)("p",null,"If there is no access control list is configured access is ",(0,i.kt)("em",{parentName:"p"},"denied")," by default."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"The access control list is defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n")),(0,i.kt)("p",null,"This definition specifies a wildcard of * which results in access for everyone."),(0,i.kt)("p",null,"If the user list is empty and the group list is empty nobody will have access.\nThis deny all ACL has two possible representations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an empty access control list. (implicit)"),(0,i.kt)("li",{parentName:"ul"},"a single space. (explicit)")),(0,i.kt)("h2",{id:"example-config"},"Example config"),(0,i.kt)("h3",{id:"simple-examples"},"Simple examples"),(0,i.kt)("p",null,"An ACL that allows access to just the user ",(0,i.kt)("inlineCode",{parentName:"p"},"sue")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue\n")),(0,i.kt)("p",null,"Nobody else will get access, this is just for ",(0,i.kt)("inlineCode",{parentName:"p"},"sue"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"john")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bob")," will be denied access."),(0,i.kt)("p",null,"An ACL that allows access to the user ",(0,i.kt)("inlineCode",{parentName:"p"},"sue")," and the members of the group ",(0,i.kt)("inlineCode",{parentName:"p"},"dev"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  adminacl: sue dev\n")),(0,i.kt)("p",null,"The user ",(0,i.kt)("inlineCode",{parentName:"p"},"sue")," gets access based on her explicit mention in the user part of the ACL.\nEven though she is not a member of the group ",(0,i.kt)("inlineCode",{parentName:"p"},"dev"),". Her group membership is irrelevant."),(0,i.kt)("p",null,"The user named ",(0,i.kt)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\nA third user called ",(0,i.kt)("inlineCode",{parentName:"p"},"bob")," whom is not mentioned explicitly and is not a member of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," group will be denied access."),(0,i.kt)("p",null,"An ACL that allows access to the members of the groups ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'  adminacl: " dev,test"\n')),(0,i.kt)("p",null,"The ACL must start with a space to indicate that there is no user list.\nIf the ACL is not correctly quoted the space is dropped by the yaml parser.\nSince the user list is empty none of the users will get access unless they are a member of either the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," group."),(0,i.kt)("p",null,"Looking at the same three users as before:\nThe user ",(0,i.kt)("inlineCode",{parentName:"p"},"sue")," is not a member of either group and is denied access.\nThe user named ",(0,i.kt)("inlineCode",{parentName:"p"},"john")," whom is a member of the group ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," will be allowed access based on his group membership.\n",(0,i.kt)("inlineCode",{parentName:"p"},"bob")," is not a member of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," group but is a member of ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," and will be allowed access."),(0,i.kt)("h3",{id:"escaping-and-quotation-marks"},"Escaping and quotation marks"),(0,i.kt)("p",null,"ACLs are currently implemented in the queue configuration which uses a yaml file.\nThis places some limitations on the how to escape the values.\nIncorrectly quoted values will cause a yaml parse error or could lead to the incorrect interpretation of the value."),(0,i.kt)("p",null,"The following points need to be taken into account:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The wildcard entry must be quoted in the yaml config."),(0,i.kt)("li",{parentName:"ol"},"A simple list of users with or without it being followed by a list of groups does not need quoting but may be quoted."),(0,i.kt)("li",{parentName:"ol"},"An ACL without a user list and just one or more groups must be quoted to find the starting space:")),(0,i.kt)("p",null,"Correctly quoted ACL example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'partitions:\n  - name: default\n    queues:\n      - name: test\n        submitacl: "*"\n        adminacl: sue dev,test\n      - name: product\n        submitacl: " product"\n')),(0,i.kt)("h2",{id:"access-check"},"Access check"),(0,i.kt)("p",null,"The access check follows the pattern:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"check if the ACL is the wildcard"),(0,i.kt)("li",{parentName:"ul"},"check if the user is in the user list"),(0,i.kt)("li",{parentName:"ul"},"check if any of the groups the user is a member of is part of the group list")),(0,i.kt)("p",null,"If a check matches the ACL allows access and checking is stopped.\nIf none of the checks match the ACL denies access."),(0,i.kt)("h2",{id:"user-and-group-information"},"User and Group information"),(0,i.kt)("p",null,"For User & Group resolution, please follow instructions defined ",(0,i.kt)("a",{parentName:"p",href:"usergroup_resolution"},"here")))}d.isMDXComponent=!0}}]);