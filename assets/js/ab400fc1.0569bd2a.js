"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1364],{34057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"configuration/dialect","title":"Dialect","description":"Different databases have vastly different SQL support, so Jimmer uses dialect configuration to adapt to different databases.","source":"@site/docs/configuration/dialect.mdx","sourceDirName":"configuration","slug":"/configuration/dialect","permalink":"/jimmer-doc/docs/configuration/dialect","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/configuration/dialect.mdx","tags":[],"version":"current","lastUpdatedAt":1733618994000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Dialect"},"sidebar":"tutorialSidebar","previous":{"title":"Configuration","permalink":"/jimmer-doc/docs/configuration/"},"next":{"title":"Connection Manager","permalink":"/jimmer-doc/docs/configuration/connection-manager"}}');var i=t(74848),a=t(28453),s=t(11470),l=t(19365);const o={sidebar_position:1,title:"Dialect"},c=void 0,d={},u=[{value:"Set Dialect",id:"set-dialect",level:2},{value:"Dialect List",id:"dialect-list",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Different databases have vastly different SQL support, so Jimmer uses dialect configuration to adapt to different databases."}),"\n",(0,i.jsx)(n.h2,{id:"set-dialect",children:"Set Dialect"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If using the Spring Boot Starter provided by Jimmer, there are two ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Configure ",(0,i.jsx)(n.code,{children:"application.yml"})," or ",(0,i.jsx)(n.code,{children:"application.properties"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"jimmer:\ndialect: org.babyfish.jimmer.sql.dialect.MySqlDialect\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Provide global dialect Bean"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Bean\npublic Dialect dialect() {\n    return new MySqlDialect(); \n}\n"})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Bean\nfun dialect(): Dialect =\n    MySqlDialect()\n"})})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If both methods above are used ",(0,i.jsx)(n.em,{children:"(not recommended)"}),", the second method takes precedence"]})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If not using the Spring Boot Starter provided by Jimmer"}),"\n",(0,i.jsxs)(s.A,{groupId:"language",children:[(0,i.jsx)(l.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDialect(new MySqlDialect())\n    ...Omit other configurations...\n    .build();\n"})})}),(0,i.jsx)(l.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setDialect(MySqlDialect())\n    ...Omit other configurations...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"dialect-list",children:"Dialect List"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.DefaultDialect"}),"\n",(0,i.jsx)(n.p,{children:"This is the default dialect used by Jimmer when no dialect is specified, so there is no need to specify it explicitly."}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"The default configuration can only be used for learning simple demos in the initial stage, and can never be used in actual projects. The following situations will cause exceptions:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Operations on Jimmer in the code will generate SQL that depends on specific database products, rather than perfect cross-database SQL"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When the type of ",(0,i.jsx)(n.a,{href:"../mutation/trigger",children:"trigger"})," is set to ",(0,i.jsx)(n.code,{children:"TRANSACTION_ONLY"})," and cache is used, Jimmer will automatically create the ",(0,i.jsx)(n.code,{children:"JIMMER_TRANS_CACHE_OPERATOR"})," table at startup. ",(0,i.jsx)(n.code,{children:"DefaultDialect"})," does not support this operation, please refer to ",(0,i.jsx)(n.a,{href:"../cache/consistency",children:"Cache Consistency"})]}),"\n"]}),"\n"]})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.H2Dialect"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.MySql5Dialect"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.MySqlDialect"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.PostgresDialect"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.OracleDialect"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.TiDBDialect"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"org.babyfish.jimmer.sql.dialect.SQLiteDialect"}),"\n",(0,i.jsxs)(n.p,{children:["Because TiDB is a distributed database that does not support foreign key constraints, true foreign keys are not supported by this dialect. Please refer to ",(0,i.jsx)(n.a,{href:"../mapping/base/foreignkey",children:"True and False Foreign Keys"})]}),"\n",(0,i.jsxs)(n.p,{children:["Apart from this, ",(0,i.jsx)(n.code,{children:"TiDBDialect"})," has no difference with ",(0,i.jsx)(n.code,{children:"MySqlDialect"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["For other databases, users can extend dialects by themselves. But the database needs to support multi-column ",(0,i.jsx)(n.code,{children:"in"})," expressions, such as"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"where (a, b) in ((3, 4), (8, 13)) \n"})}),"\n",(0,i.jsx)(n.p,{children:"Or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"where (a, b) in (select x, y from ...)\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["Currently, multi-column ",(0,i.jsx)(n.code,{children:"in"})," expressions are highly dependent features of Jimmer, and Microsoft Sql Server does not support this feature for the time being."]}),(0,i.jsx)(n.p,{children:"So Microsoft Sql Server is not supported for now."})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const i={tabItem:"tabItem_Ymn6"};var a=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>D});var r=t(96540),i=t(34164),a=t(23104),s=t(56347),l=t(205),o=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=f({queryString:t,groupId:i}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),j=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{j&&o(j)}),[j]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(c(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function D(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);