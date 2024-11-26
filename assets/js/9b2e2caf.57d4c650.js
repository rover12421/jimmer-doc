"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2745],{31281:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"cache/multiview-cache/abandoned-callback","title":"Cache Abandoned Reason","description":"CacheAbandonedCallback","source":"@site/docs/cache/multiview-cache/abandoned-callback.mdx","sourceDirName":"cache/multiview-cache","slug":"/cache/multiview-cache/abandoned-callback","permalink":"/jimmer-doc/docs/cache/multiview-cache/abandoned-callback","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/cache/multiview-cache/abandoned-callback.mdx","tags":[],"version":"current","lastUpdatedAt":1704015848000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Cache Abandoned Reason"},"sidebar":"tutorialSidebar","previous":{"title":"Advanced usage","permalink":"/jimmer-doc/docs/cache/multiview-cache/advanced"},"next":{"title":"Client","permalink":"/jimmer-doc/docs/client/"}}');var r=a(74848),l=a(28453),i=a(11470),c=a(19365);const s={sidebar_position:4,title:"Cache Abandoned Reason"},o=void 0,d={},h=[{value:"CacheAbandonedCallback",id:"cacheabandonedcallback",level:2},{value:"Registering Callback",id:"registering-callback",level:2},{value:"Default Behavior of Spring Boot Starter",id:"default-behavior-of-spring-boot-starter",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"cacheabandonedcallback",children:"CacheAbandonedCallback"}),"\n",(0,r.jsx)(n.p,{children:"Using multi-view caches is relatively strict and the following three conditions must be met at the same time:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The properties that need multi-view cache must be explicitly specified."}),"\n",(0,r.jsxs)(n.p,{children:["Cache is multi-layered. Multiple ",(0,r.jsx)(n.code,{children:"Binder"})," objects must be specified for the ",(0,r.jsx)(n.code,{children:"ChainCacheBuilder<K, V>"})," used to build the cache instance, i.e. ",(0,r.jsx)(n.code,{children:"LoadingBinder/KLoadingBinder"})," or ",(0,r.jsx)(n.code,{children:"SimpleBinder/KSimpleBinder"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For multi-view caches, ",(0,r.jsx)(n.strong,{children:"all"})," ",(0,r.jsx)(n.code,{children:"Binder"})," objects must implement the ",(0,r.jsx)(n.code,{children:"LoadingBinder.Parameterized<K, V>/KLoadingBinder.Parameterized<K, V>"})," or ",(0,r.jsx)(n.code,{children:"SimpleBinder.Parameterized<K, V>/KSimpleBinder.Parameterized<K, V>"})," interface. Otherwise, the final cache created by ",(0,r.jsx)(n.code,{children:"ChainCacheBuilder<K, V>"})," is a single-view cache."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The filtering rules for association properties and the calculation rules for calculated properties must be cache friendly."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For association properties, ",(0,r.jsx)(n.strong,{children:"all"})," global filters that affect their associated objects must be cache friendly filters. If any one filter is not cache friendly, it may cause the all affected properties to be unable to use cache."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For user-defined cache filters, the ",(0,r.jsx)(n.code,{children:"CacheableFilter<E>/KCacheableFilter<E>"})," interface must be implemented."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For the ",(0,r.jsx)(n.code,{children:"@LogicalDeleted"}),", its ",(0,r.jsx)(n.code,{children:"useMultiViewCache"})," property must be configured as ",(0,r.jsx)(n.code,{children:"true"})," ",(0,r.jsxs)(n.em,{children:["(this will cause its built-in global filter to implement the ",(0,r.jsx)(n.code,{children:"CacheableFilter<E>/KCacheableFilter<E>"})," interface)"]}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["For calculated properties, the ",(0,r.jsx)(n.code,{children:"getParameterMapRef"})," method of ",(0,r.jsx)(n.code,{children:"TransientResolver<ID, V>/KTransientResolver<ID, V>"})," must not return null."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The object fetch cannot use ",(0,r.jsx)(n.a,{href:"../../query/object-fetcher/association#property-level-filters",children:"property-level filters"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If these prerequisite conditions are not fully met, even if cache is specified for association or calculated properties, Jimmer will abandon them. Although the reasons have been explained in detail in previous documents, troubleshooting such issues during actual development is inconvenient."}),"\n",(0,r.jsx)(n.p,{children:"To quickly inform developers of the fact that property-level cache did not take effect and the reason, Jimmer defines a callback interface as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"package org.babyfish.jimmer.sql.cache;\n\nimport org.babyfish.jimmer.meta.ImmutableProp;\n\npublic interface CacheAbandonedCallback {\n\n    void abandoned(ImmutableProp prop, Reason reason);\n\n    enum Reason {\n\n        CACHEABLE_FILTER_REQUIRED,\n       \n        PARAMETERIZED_CACHE_REQUIRED,\n   \n        FIELD_FILTER_USED\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This callback interface tells developers that although cache is specified for a property, it is not adopted by Jimmer, and the reason. Its ",(0,r.jsx)(n.code,{children:"abandoned"})," method has two parameters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"prop"}),": Which property does not adopt the cache configured by the user."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"reason"}),": The reason why the cache of this property is not adopted. There are three possible values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["CACHEABLE_FILTER_REQUIRED: The associated objects are affected by some global filters, but not all filters implement the ",(0,r.jsx)(n.code,{children:"CacheableFilter<E>/KCacheableFilter<E>"})," interface."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["PARAMETERIZED_CACHE_REQUIRED: The ",(0,r.jsx)(n.code,{children:"getParameters"})," method of some ",(0,r.jsx)(n.code,{children:"CacheableFilter<E>/KCacheableFilter<E>"})," objects affecting the association properties or the ",(0,r.jsx)(n.code,{children:"getParameterMapRef"})," method of ",(0,r.jsx)(n.code,{children:"TransientResolver<ID, V>/KTransientResolver<ID, V>"})," implementing the calculated properties returns a Map of non-zero length, but the cache configured for that property by the developer is not a multi-view cache."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["FIELD_FILTER_USED: The developer uses property-level filters for the property in ",(0,r.jsx)(n.a,{href:"../../query/object-fetcher",children:"object fetchers"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Developers can implement the ",(0,r.jsx)(n.code,{children:"CacheAbandonedCallback"})," interface themselves, create an object, and register it with SqlClient. There is no limit on the number of registered callback objects."]}),"\n",(0,r.jsx)(n.h2,{id:"registering-callback",children:"Registering Callback"}),"\n",(0,r.jsxs)(n.p,{children:["There are two ways to register ",(0,r.jsx)(n.code,{children:"CacheAbandonedCallback"})," for Jimmer:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Using Spring Boot Starter"}),"\n",(0,r.jsxs)(n.p,{children:["Just decorate the implementation class of ",(0,r.jsx)(n.code,{children:"CacheAbandonedCallback"})," with ",(0,r.jsx)(n.code,{children:"@Component"}),":"]}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(c.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"// highlight-next-line \n@Component\npublic class MyCallback implements CacheAbandonedCallback {\n    ...omit code...\n}\n"})})}),(0,r.jsx)(c.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\n@Component\nclass MyCallback : CacheAbandonedCallback {\n    ...omit code...\n}\n"})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Using underlying API"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(c.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient =\n    JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addCacheAbandonedCallback(\n            new CacheAbandonedCallback() {\n                ...omit code...\n            }\n        )\n        ...omit other configuration...\n        .build();\n"})})}),(0,r.jsx)(c.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    addCacheAbandonedCallback(\n        object: CacheAbandonedCallback {\n            ...omit code...\n        }\n    )\n    ...omit other configuration...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"default-behavior-of-spring-boot-starter",children:"Default Behavior of Spring Boot Starter"}),"\n",(0,r.jsx)(n.p,{children:"If no callback implementation is registered by the user, the Spring Boot Starter will register a default callback implementation by default, outputting the reason why the cache is not adopted as a warning log, for example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"!!!Jimmer warning!!!\nProperty-level cache is abandoned.\n    Property: `com.yourcompany.yourproject.model.BookStore.books`\n    Reason: CACHEABLE_FILTER_REQUIRED\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>i});a(96540);var t=a(18215);const r={tabItem:"tabItem_Ymn6"};var l=a(74848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(96540),r=a(18215),l=a(23104),i=a(56347),c=a(205),s=a(57485),o=a(31682),d=a(70679);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const r=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=u(e),[i,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[o,h]=b({queryString:a,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),j=(()=>{const e=o??m;return p({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{j&&s(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),f(e)}),[h,f,l]),tabValues:l}}var f=a(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(74848);function g(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const n=e.currentTarget,a=s.indexOf(n),r=c[a].value;r!==t&&(o(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;n=s[a]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:h,onClick:d,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:l}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function C(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,x.jsx)(C,{...e,children:h(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>c});var t=a(96540);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);