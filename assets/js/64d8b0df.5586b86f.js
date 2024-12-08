"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4089],{53194:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>i});var r=t(74848),a=t(28453);const i=[{value:"Scene-1",id:"scene-1",level:2},{value:"Scene-2",id:"scene-2",level:2}];function s(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Currently, other technologies that operate on SQL, whether ORM or non-ORM, have a blank area: they only consider dynamic ",(0,r.jsx)(n.code,{children:"where"}),", and do not consider ",(0,r.jsx)(n.code,{children:"dynamic join"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dynamic JOIN"})," is defined as: If some dynamic query conditions are for tables other than the current table. This means"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When the condition is met: First join to other tables through association properties, then add dynamic where conditions to the joined table"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"When the condition is not met: Cannot join other tables through association properties"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"scene-1",children:"Scene-1"}),"\n",(0,r.jsx)(n.p,{children:"Let's first look at the first scene, taking MyBatis oriented to native SQL as an example"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Define MyBatis Mapper interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"@Mapper\npublic interface BookMapper {\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName, \n        @Nullable String storeWebsite\n    );\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Here, all query parameters may be null, which is clearly a dynamic query."}),"\n",(0,r.jsxs)(n.p,{children:["The last two query parameters: ",(0,r.jsx)(n.code,{children:"storeName"})," and ",(0,r.jsx)(n.code,{children:"storeWebsite"}),", their filtering conditions are not applied on the current table ",(0,r.jsx)(n.code,{children:"BOOK"}),", but on the parent table ",(0,r.jsx)(n.code,{children:"BOOK_STORE"}),".\nThat is, when any of these two parameters is non-null, a JOIN to the ",(0,r.jsx)(n.code,{children:"BOOK_STORE"})," table will be generated. This table join dynamically determined by the parameter value is referred to as ",(0,r.jsx)(n.code,{children:"dynamic JOIN"})," in this article."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Define MyBatis SQL mapping XML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.BookMapper">\n    <select id="findBooks" resultType="somepackage.Book">\n        select * from BOOK as book\n        \x3c!-- highlight-next-line --\x3e\n        <if test="storeName != null or storeWebsite != null"> \u2776\n            inner join BOOK_STORE as store\n                on book.STORE_ID = store.ID\n        </if>\n        <where>\n            <if test="name != null">\n                and book.NAME = #{name}\n            </if>\n            <if test="storeName != null"> \u2777\n                and store.NAME = #{storeName}\n            </if>\n            <if test="storeWebsite != null">\n                and store.WEBSITE = #{storeWebsite} \u2778\n            </if>\n        </where>\n    </select>\n</mapper>\n'})}),"\n",(0,r.jsx)(n.p,{children:"Here, \u2776 is the dynamic JOIN. However, for developers, \u2777 and \u2778 are the purpose, and \u2776 is the work that has to be done to support \u2777 and \u2778. Its judgment condition is a burden."}),"\n",(0,r.jsxs)(n.p,{children:["You may have noticed that \u2776 uses ",(0,r.jsx)(n.code,{children:"or"}),". This is easy to understand."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"However, this is only the simplest dynamic connection between two tables. For deeper multi-table join operations, the complexity of dynamic table joins will increase dramatically!"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"scene-2",children:"Scene-2"}),"\n",(0,r.jsx)(n.p,{children:"Let's take a look at the second scene. With the previous example as the basis, this example is decoupled from any business."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.AMapper">\n  <select id="findAObjects" resultType="somepackage.A">\n    select distinct A.id\n    from A\n    \x3c!-- highlight-start --\x3e  \n    <if test="bId != null or cId != null or dId != null or eId != null">\n      inner join B on A.ID = B.A_ID \n    </if>\n    <if test="cId != null or dId != null or eId != null">\n      inner join C on B.ID = C.B_ID\n    </if>\n    <if test="dId != null or eId != null">\n      inner join D on C.ID = D.C_ID \n    </if>\n    <if test="eId != null">\n      inner join E on D.ID = E.D_ID\n    </if>\n    \x3c!-- highlight-end --\x3e\n    <where>\n      <if test="aId != null">\n        and A.ID = #{aId}  \n      </if>\n      <if test="bId != null">\n        and B.ID = #{bId}\n      </if>\n      <if test="cId != null">\n        and C.ID = #{cId}\n      </if>\n      <if test="dId != null">\n        and D.ID = #{dId}\n      </if>\n      <if test="eId != null">\n        and E.ID = #{eId}\n      </if>\n    </where>\n  </select>\n</mapper>\n'})}),"\n",(0,r.jsx)(n.p,{children:"The logic of this example is simple. The five tables A, B, C, D and E form a JOIN chain, and each table has a dynamic query condition. However, as you can see, the complexity of dynamic JOIN has become unacceptable."})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},55133:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"query/dynamic-join/problem","title":"Problems with Other Solutions","description":"In the previous doc, we discussed dynamic queries. In this section, we will explore the problems with dynamic table joins.","source":"@site/docs/query/dynamic-join/problem.mdx","sourceDirName":"query/dynamic-join","slug":"/query/dynamic-join/problem","permalink":"/jimmer-doc/docs/query/dynamic-join/problem","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/dynamic-join/problem.mdx","tags":[],"version":"current","lastUpdatedAt":1704015848000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Problems with Other Solutions"},"sidebar":"tutorialSidebar","previous":{"title":"Dynamic JOIN","permalink":"/jimmer-doc/docs/query/dynamic-join/"},"next":{"title":"Association Path Chaining","permalink":"/jimmer-doc/docs/query/dynamic-join/chain-style"}}');var a=t(74848),i=t(28453),s=t(53194);t(11470),t(19365);const o={sidebar_position:1,title:"Problems with Other Solutions"},l=void 0,c={},d=[...s.RM];function u(e){const n={a:"a",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.a,{href:"../dynamic-where",children:"previous doc"}),", we discussed dynamic queries. In this section, we will explore the problems with dynamic table joins."]}),"\n",(0,a.jsx)(s.Ay,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),a=t(34164),i=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:t,groupId:a}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),y=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function I(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,x.jsx)(I,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);