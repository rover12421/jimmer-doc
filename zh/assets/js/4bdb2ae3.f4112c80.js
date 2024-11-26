"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1752],{67848:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"mapping/advanced/enum","title":"Enum\u6620\u5c04","description":"Jimmer\u5904\u7406\u679a\u4e3e\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/enum.mdx","sourceDirName":"mapping/advanced","slug":"/mapping/advanced/enum","permalink":"/jimmer-doc/zh/docs/mapping/advanced/enum","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/enum.mdx","tags":[],"version":"current","lastUpdatedAt":1732248232000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Enum\u6620\u5c04"},"sidebar":"tutorialSidebar","previous":{"title":"\u590d\u6742\u8ba1\u7b97","permalink":"/jimmer-doc/zh/docs/mapping/advanced/calculated/transient"},"next":{"title":"JSON\u6620\u5c04","permalink":"/jimmer-doc/zh/docs/mapping/advanced/json"}}');var r=l(74848),t=l(28453),i=l(11470),s=l(19365);const c={sidebar_position:6,title:"Enum\u6620\u5c04"},u=void 0,o={},d=[{value:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32",id:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32",level:2},{value:"\u6620\u5c04\u4e3a\u6574\u6570",id:"\u6620\u5c04\u4e3a\u6574\u6570",level:2},{value:"\u4e0d\u660e\u786e\u4f7f\u7528@EnumType",id:"\u4e0d\u660e\u786e\u4f7f\u7528enumtype",level:2},{value:"\u4e0e Typescript Client and Jackson\u4e00\u8d77\u4f7f\u7528",id:"\u4e0e-typescript-client-and-jackson\u4e00\u8d77\u4f7f\u7528",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Jimmer\u5904\u7406\u679a\u4e3e\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32\uff1a\u53ef\u89c2\u5bdf\u6027\u4f18\u5148\u7684\u9009\u62e9\uff0c\u4e5f\u662f\u9ed8\u8ba4\u7684\u9009\u9879\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6620\u5c04\u4e3a\u6574\u6570\uff1a\u6027\u80fd\u4f18\u5148\u7684\u9009\u62e9\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Jimmer\u63d0\u4f9b\u4e86\u4e24\u4e2a\u7528\u4e8e\u679a\u4e3e\u7684\u6ce8\u89e3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.EnumType"}),": \u4fee\u9970\u679a\u4e3e\u7c7b\u578b\uff0c\u53ef\u9009"]}),"\n",(0,r.jsx)(n.p,{children:"\u6307\u5b9a\u6620\u5c04\u65b9\u5f0f\uff0c\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32\uff0c\u8fd8\u662f\u6309\u4f4d\u7f6e\u6620\u5c04\u4e3a\u6574\u6570"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.EnumItem"}),": \u4fee\u9970\u679a\u4e3e\u9879\uff0c\u53ef\u9009"]}),"\n",(0,r.jsx)(n.p,{children:"\u8986\u76d6\u67d0\u4e2a\u679a\u4e3e\u9879\u88ab\u6620\u5c04\u540e\u7684\u5b57\u7b26\u4e32\u503c\u6216\u6574\u6570\u503c"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32",children:"\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Gender.java"',children:"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Gender.kt"',children:"// highlight-next-line\n@EnumType(EnumType.Strategy.NAME)\nenum class Gender {\n    MALE,\n    FEMALE\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c",(0,r.jsx)(n.code,{children:"@EnumType"}),'\u7684\u53c2\u6570\u88ab\u6307\u5b9a\u4e3a"NAME", \u8868\u793a\u6620\u5c04\u4e3a\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e24\u4e2a\u679a\u4e3e\u9879\u6620\u5c04\u540e\u7684\u5b57\u7b26\u4e32\u548c\u5b83\u4eec\u7684\u540d\u5b57\u76f8\u540c\uff0c\u5373"MALE"\u548c"FEMALE"\u3002']}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u671f\u671b\u540e\u7684\u5b57\u7b26\u4e32\u548c\u679a\u4e3e\u9879\u540d\u79f0\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"@EnumItem"}),"\u4fee\u9970\u679a\u4e3e\u9879\u3002"]}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Gender.java"',children:'@EnumType(EnumType.Strategy.NAME)\npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F")\n    FEMALE\n}\n'})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Gender.kt"',children:'@EnumType(EnumType.Strategy.NAME)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(name = "M")\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(name = "F")\n    FEMALE\n}\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6620\u5c04\u4e3a\u6574\u6570",children:"\u6620\u5c04\u4e3a\u6574\u6570"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Gender.java"',children:"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\npublic enum Gender {\n    MALE,\n    FEMALE\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Gender.kt"',children:"// highlight-next-line\n@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n    MALE,\n    FEMALE\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c",(0,r.jsx)(n.code,{children:"@EnumType"}),'\u7684\u53c2\u6570\u88ab\u6307\u5b9a\u4e3a"ORDINAL", \u8868\u793a\u6620\u5c04\u4e3a\u6574\u6570\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e24\u4e2a\u679a\u4e3e\u9879\u6620\u5c04\u540e\u7684\u5b57\u7b26\u4e32\u548c\u5b83\u4eec\u7684',(0,r.jsx)(n.code,{children:"ordinal"}),"\u76f8\u540c\uff0c\u53730\u548c1\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u671f\u671b\u540e\u7684\u5b57\u7b26\u4e32\u548c\u679a\u4e3e\u9879\u7684",(0,r.jsx)(n.code,{children:"ordinal"}),"\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"@EnumItem"}),"\u4fee\u9970\u679a\u4e3e\u9879\u3002"]}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Gender.java"',children:"@EnumType(EnumType.Strategy.ORDINAL)\npublic enum Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100)\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Gender.kt"',children:"@EnumType(EnumType.Strategy.ORDINAL)\nenum class Gender {\n\n    // highlight-next-line\n    @EnumItem(ordinal = 100)\n    MALE,\n\n    // highlight-next-line\n    @EnumItem(ordinal = 200)\n    FEMALE\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0d\u660e\u786e\u4f7f\u7528enumtype",children:"\u4e0d\u660e\u786e\u4f7f\u7528@EnumType"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u4e3a\u679a\u4e3e\u7c7b\u578b\u6307\u5b9a@EnumType\u6ce8\u89e3\uff0c\u5373\uff0c\u4e0d\u660e\u786e\u8bf4\u660e\u67d0\u4e2a\u679a\u4e3e\u7c7b\u578b\u5e94\u8be5\u6620\u5c04\u6210\u5b57\u7b26\u4e32\u8fd8\u662f\u6574\u6570\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u65f6\uff0cJimmer\u4f1a\u53c2\u8003\u9ed8\u8ba4\u7684\u5168\u90e8\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:'\u6b64\u5168\u5c40\u914d\u7f6e\u9ed8\u8ba4\u4e3a"NAME"\uff0c\u5982\u679c\u4f60\u9700\u8981"ORDINAL"\uff0c\u8bf7\u8986\u76d6\u5168\u90e8\u914d\u7f6e\u3002'})}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c55\u793a\u5982\u4f55\u8986\u76d6\u5168\u90e8\u914d\u7f6e\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528SpringBoot\u65f6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"application.yml"}),"\u6216",(0,r.jsx)(n.code,{children:"application.properties"}),"\u79cd\u6dfb\u52a0\u914d\u7f6e\u9879",(0,r.jsx)(n.code,{children:"jimmer.default-enum-strategy"}),'\uff0c\u5c06\u5176\u6307\u5b9a\u4e3a"ORDINAL"']}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4e0d\u4f7f\u7528SpringBoot\u65f6"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setDefaultEnumStrategy(EnumType.Strategy.ORDINAL)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0e-typescript-client-and-jackson\u4e00\u8d77\u4f7f\u7528",children:"\u4e0e Typescript Client and Jackson\u4e00\u8d77\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u7c7b\u578b\u7684Json\u5e8f\u5217\u5316\u4e0e\u6570\u636e\u5e93\u4e2d\u7684\u5b58\u50a8\u662f\u72ec\u7acb\u7684\u4e24\u4ef6\u4e8b\u3002\u4e0a\u8ff0\u6240\u63cf\u8ff0\u7684\u5185\u5bb9\u53ea\u662fJimmer\u5728\u6570\u636e\u5e93\u4e2d\u5982\u4f55\u5904\u7406\u679a\u4e3e\u6620\u5c04\uff0c\u4e0eJson\u65e0\u5173\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cJackson\u5c06\u679a\u4e3e\u8f6c\u6362\u4e3a\u679a\u4e3e\u540d\u5b57\u7b26\u4e32\uff0c\u6240\u4ee5Jimmer\u4f1a\u5728\u751f\u6210TypeScript Client\u7684\u65f6\u5019\u6309\u7167\u679a\u4e3e\u7684Name\u6620\u5c04"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"enum Gender {\n    MAN,\n    WOMAN\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"enum class Gender {\n    MAN,\n    WOMAN\n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u751f\u6210\u7684TypeScript\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-TypeScript",children:"export const GenderEnum_CONSTANTS = [\n    'MAN',\n    'WOMAN'\n] as const;\nexport type GenderEnum = typeof GenderEnum_CONSTANTS[number];\n\n//\u4f7f\u7528\nexport type PersonDto = {\n    gender: GenderEnum;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60f3\u8981\u81ea\u5b9a\u4e49Json\u5e8f\u5217\u5316\uff0c\u9700\u8981\u4f7f\u7528Jackson\u7684@JsonValue\u6ce8\u89e3"}),"\n",(0,r.jsxs)(i.A,{groupId:"language",children:[(0,r.jsx)(s.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"enum Gender {\n    MAN,\n    WOMAN;\n\n    @JsonValue\n    public String getValue() {\n        return name().toLowerCase();\n    }\n}\n"})})}),(0,r.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"enum class Gender {\n    MAN,\n    WOMAN;\n\n    @JsonValue\n    fun getValue(): String {\n        return name().toLowerCase();\n    }\n}\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u68c0\u6d4b\u5230\u5b58\u5728@JsonValue\u7b49\u6ce8\u89e3\u540e\uff0c\u56e0\u4e3ajimmer\u4e0d\u77e5\u9053\u5728Json\u5e8f\u5217\u5316\u65f6\uff0c\u679a\u4e3e\u4f1a\u88ab\u8f6c\u6362\u4e3a\u4ec0\u4e48\uff0c\u6240\u4ee5Jimmer\u4f1a\u628a\u679a\u4e3e\u7c7b\u578b\u7ffb\u8bd1\u6210string\uff0c\u751f\u6210\u7684TypeScript\u4ee3\u7801\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-TypeScript",children:"export type PersonDto = {\n    gender: string;\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>i});l(96540);var a=l(18215);const r={tabItem:"tabItem_Ymn6"};var t=l(74848);function i(e){let{children:n,hidden:l,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>y});var a=l(96540),r=l(18215),t=l(23104),i=l(56347),s=l(205),c=l(57485),u=l(31682),o=l(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:l,attributes:a,default:r}}=e;return{value:n,label:l,attributes:a,default:r}}))}(l);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function m(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:l}=e;const r=(0,i.W6)(),t=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,c.aZ)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function g(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,t=h(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[u,d]=p({queryString:l,groupId:r}),[g,j]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,o.Dv)(l);return[r,(0,a.useCallback)((e=>{l&&t.set(e)}),[l,t])]}({groupId:r}),x=(()=>{const e=u??g;return m({value:e,tabValues:t})?e:null})();(0,s.A)((()=>{x&&c(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,t]),tabValues:t}}var j=l(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=l(74848);function b(e){let{className:n,block:l,selectedValue:a,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,t.a_)(),o=e=>{const n=e.currentTarget,l=c.indexOf(n),r=s[l].value;r!==a&&(u(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;n=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;n=c[l]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},n),children:s.map((e=>{let{value:n,label:l,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:o,...t,className:(0,r.A)("tabs__item",x.tabItem,t?.className,{"tabs__item--active":a===n}),children:l??n},n)}))})}function E(e){let{lazy:n,children:l,selectedValue:t}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function f(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(E,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,v.jsx)(f,{...e,children:d(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>s});var a=l(96540);const r={},t=a.createContext(r);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);