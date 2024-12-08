"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3977],{64590:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"configuration/scala-provider","title":"Scalar Provider","description":"Basic Concepts","source":"@site/docs/configuration/scala-provider.mdx","sourceDirName":"configuration","slug":"/configuration/scala-provider","permalink":"/jimmer-doc/docs/configuration/scala-provider","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/configuration/scala-provider.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Scalar Provider"},"sidebar":"tutorialSidebar","previous":{"title":"Microservice","permalink":"/jimmer-doc/docs/configuration/micro-service"},"next":{"title":"Cache Abandoned Reason","permalink":"/jimmer-doc/docs/configuration/cache-abandoned"}}');var i=r(74848),l=r(28453),t=r(11470),o=r(19365);const s={sidebar_position:10,title:"Scalar Provider"},c=void 0,d={},h=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Global ScalarProvider",id:"global-scalarprovider",level:2},{value:"Define ScalarProvider",id:"define-scalarprovider",level:3},{value:"Register Scalar Provider",id:"register-scalar-provider",level:3},{value:"Property level ScalarProvider",id:"property-level-scalarprovider",level:2},{value:"Non-Spring registration",id:"non-spring-registration",level:3},{value:"Spring registration",id:"spring-registration",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,i.jsxs)(n.p,{children:["In previous documents, we have introduced how to ",(0,i.jsx)(n.a,{href:"../mapping/advanced/enum",children:"map enums"}),", and how to use ",(0,i.jsx)(n.code,{children:"@Serialized"})," to ",(0,i.jsx)(n.a,{href:"../mapping/advanced/json",children:"map JSON"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["However, sometimes neither of these methods can meet our requirements. In this case, we can use ",(0,i.jsx)(n.code,{children:"ScalarProvider"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ScalarProvider"})," is the most low-level SPI of Jimmer for custom data types."]}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"../mapping/advanced/enum",children:"Enum Mapping"})," and ",(0,i.jsx)(n.a,{href:"../mapping/advanced/json",children:"JSON Mapping"})," we discussed before are actually Jimmer's built-in implementations of ",(0,i.jsx)(n.code,{children:"ScalarProvider"}),"."]})]}),"\n",(0,i.jsxs)(n.p,{children:["Multiple ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," can be registered for SqlClient. Each ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," tells Jimmer how to handle a custom data type."]}),"\n",(0,i.jsxs)(n.p,{children:["There are two types of ",(0,i.jsx)(n.code,{children:"ScalarProvider"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Global"}),"\n",(0,i.jsxs)(n.p,{children:["Define the mapping rules between Java/Kotlin types and database types globally and uniformly. Any entity definition that contains properties of this type will be uniformly handled by the global ",(0,i.jsx)(n.code,{children:"ScalarProvider"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Global ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," can only handle non-collection types, such as: classes, interfaces, enums, etc. It cannot handle collection types like: ",(0,i.jsx)(n.code,{children:"Array"}),", ",(0,i.jsx)(n.code,{children:"Collection"}),", ",(0,i.jsx)(n.code,{children:"Map"}),", etc."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Property level"}),"\n",(0,i.jsx)(n.p,{children:"For a specific entity property, define the mapping rules between Java/Kotlin types and database types."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Property-level ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," can handle any non-built-in types of Jimmer, including collection types such as: ",(0,i.jsx)(n.code,{children:"Array"}),", ",(0,i.jsx)(n.code,{children:"Collection"}),", ",(0,i.jsx)(n.code,{children:"Map"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the mapped property type is a collection type, the property needs to be annotated with ",(0,i.jsx)(n.code,{children:"@org.babyfish.jimmer.Scalar"}),"."]}),"\n"]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@Serialized"})," annotation discussed in ",(0,i.jsx)(n.a,{href:"../mapping/advanced/json",children:"JSON Mapping"})," can annotate both the return type of properties and entity properties."]}),(0,i.jsxs)(n.p,{children:["This is because the more low-level ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," has two types."]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ScalarProvider"})," is an SPI interface provided by Jimmer, which is defined as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="ScalarProvider"',children:"package org.babyfish.jimmer.sql.runtime;\n\nimport java.util.function.Consumer;\n\npublic abstract class ScalarProvider<T \u2776, S \u2777> {\n\n    protected ScalarProvider(Class<T> scalarType, Class<S> sqlType) { \u2778\n        ...Omitted code...\n    }\n\n    protected ScalarProvider() { \u2779\n        ...Omitted code...\n    }\n\n    public abstract T toScalar(S sqlValue); \u277a\n\n    public abstract S toSql(T scalarValue); \u277b\n\n    public Collection<ImmutableProp> getHandledProps() { \u277c\n        return null;\n    }\n }\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2776 Generic parameter ",(0,i.jsx)(n.code,{children:"T"}),": Data type in Java/Kotlin;"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2777 Generic parameter ",(0,i.jsx)(n.code,{children:"S"}),": Data type in the database;"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2778 Constructor that explicitly specifies the types represented by ",(0,i.jsx)(n.code,{children:"T"})," and ",(0,i.jsx)(n.code,{children:"S"}),";"]}),"\n",(0,i.jsxs)(n.p,{children:["This constructor is usually used to define ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," with higher generality and reusability."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u2779 Constructor that does not need to explicitly specify the types represented by ",(0,i.jsx)(n.code,{children:"T"})," and ",(0,i.jsx)(n.code,{children:"S"}),";"]}),"\n",(0,i.jsxs)(n.p,{children:["It requires derived classes to explicitly specify generic parameters ",(0,i.jsx)(n.code,{children:"T"})," and ",(0,i.jsx)(n.code,{children:"S"})," so that Jimmer can automatically analyze the types represented by ",(0,i.jsx)(n.code,{children:"T"})," and ",(0,i.jsx)(n.code,{children:"S"}),". Otherwise, an exception will occur."]}),"\n",(0,i.jsxs)(n.p,{children:["This constructor is usually used to define ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," corresponding to specific types without requiring generality and reusability."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u277a Method ",(0,i.jsx)(n.code,{children:"toScalar"}),": Convert non-null data read from the database to Java data;"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u277b Method ",(0,i.jsx)(n.code,{children:"toSql"}),": Convert non-null Java data to data acceptable to the database;"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u277c If you want to define a property-level ",(0,i.jsx)(n.code,{children:"ScalarProvider"}),", one option ",(0,i.jsx)(n.em,{children:"(there are other options)"})," is to override the ",(0,i.jsx)(n.code,{children:"getHandledProps"})," method in the derived class;"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"global-scalarprovider",children:"Global ScalarProvider"}),"\n",(0,i.jsx)(n.p,{children:"For example, the current database does not support the UUID type, which can be handled as follows:"}),"\n",(0,i.jsx)(n.h3,{id:"define-scalarprovider",children:"Define ScalarProvider"}),"\n",(0,i.jsxs)(t.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="UUIDScalarProvider.java"',children:"public class UUIDScalarProvider extends AbstractScalarProvider<UUID, String> {\n\n    @Override\n    public UUID toScalar(String sqlValue) {\n        return UUID.fromString(sqlValue);\n    }\n\n    @Override\n    public String toSql(UUID scalarValue) {\n        return scalarValue.toString();\n    }\n}\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="UUIDScalarProvider.kt" ',children:"class UUIDScalarProvider : ScalarProvider<UUID, String> {\n\n    override fun toScalar(sqlValue: String): UUID =\n        UUID.fromString(sqlValue)\n\n    override fun toSql(scalarValue: UUID): String =\n        scalarValue.toString()\n}\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"register-scalar-provider",children:"Register Scalar Provider"}),"\n",(0,i.jsxs)(n.p,{children:["There are two ways for Jimmer to register ",(0,i.jsx)(n.code,{children:"ScalarProvider"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use Spring Boot Starter"}),"\n",(0,i.jsxs)(n.p,{children:["Just let the derived classes of ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," be managed by Spring. There are two options:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Modify the above ",(0,i.jsx)(n.code,{children:"UUIDScalarProvider"})," class and annotate it with spring's ",(0,i.jsx)(n.code,{children:"@Component"})]}),"\n",(0,i.jsxs)(t.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="UUIDScalarProvider.java"',children:"// highlight-next-line\n@Component \npublic class UUIDScalarProvider extends AbstractScalarProvider<UUID, String> {\n        \n    ...Omitted code...\n}\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="UUIDScalarProvider.kt"',children:"// highlight-next-line\n@Component\nclass UUIDScalarProvider : ScalarProvider<UUID, String> {\n\n    ...Omitted code...\n}\n"})})})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use Spring's ",(0,i.jsx)(n.code,{children:"@Bean"})," method to register the UUIDScalaProvider object to Spring"]}),"\n",(0,i.jsxs)(t.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"// highlight-next-line\n@Bean\npublic UUIDScalarProvider uuidScalarProvider() {\n    return new UUIDScalarProvider();\n}\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\n@Bean \nfun uuidScalarProvider(): UUIDScalarProvider =\n    UnitTestIdGenerator()\n"})})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use underlying API"}),"\n",(0,i.jsxs)(t.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Bean\npublic JSqlClient sqlClient() {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addScalarProvider(new UUIDScalarProvider())\n        ...Omit other configurations...\n        .build();\n}\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Bean\nfun sqlClient() : KSqlClient =  \n    newKSqlClient {\n        // highlight-next-line\n        addScalarProvider(UUIDScalarProvider())\n        ...Omit other configurations...\n    }\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"property-level-scalarprovider",children:"Property level ScalarProvider"}),"\n",(0,i.jsxs)(n.p,{children:["The only difference between property-level ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," and global ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," is that it only applies to specific properties, not all properties."]}),"\n",(0,i.jsxs)(n.p,{children:["So the most important data conversion methods ",(0,i.jsx)(n.code,{children:"toScalar"})," and ",(0,i.jsx)(n.code,{children:"toSql"})," in property-level ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," have exactly the same user code implementation, only the registration method is different."]}),"\n",(0,i.jsxs)(n.p,{children:["Therefore, here we assume there is a user-defined type ",(0,i.jsx)(n.code,{children:"Location"})," and its corresponding ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," implementation class is ",(0,i.jsx)(n.code,{children:"LocationScalarProvider"}),". Specific implementation is omitted."]}),"\n",(0,i.jsx)(n.h3,{id:"non-spring-registration",children:"Non-Spring registration"}),"\n",(0,i.jsxs)(t.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Bean\npublic JSqlClient sqlClient() {\n  return JSqlClient\n      .newBuilder()\n      .setScalarProvider(\n          // highlight-next-line\n          FlightProps.SOURCE_LOCATION\n          new LocationScalarProvider() \n      )\n      .setScalarProvider(\n          // highlight-next-line  \n          FlightProps.TARGET_LOCATION\n          new LocationScalarProvider()\n      )\n      ...Omit other configurations...\n      .build();\n}\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Bean\nfun sqlClient() : KSqlClient =\n  newKSqlClient {\n      setScalarProvider(\n          // highlight-next-line\n          Flight::sourceLocation\n          LocationScalarProvider()\n      )\n      setScalarProvider(\n          // highlight-next-line\n          Flight::targetLocation\n          LocationScalarProvider()\n      )\n      ...Omit other configurations...\n  }\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["That is, except for the ",(0,i.jsx)(n.code,{children:"Flight.sourceLocation"})," and ",(0,i.jsx)(n.code,{children:"Flight.targetLocation"})," properties, ",(0,i.jsx)(n.code,{children:"LocationScalarProvider"})," does not affect any other properties of type ",(0,i.jsx)(n.code,{children:"Location"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"spring-registration",children:"Spring registration"}),"\n",(0,i.jsxs)(n.p,{children:["The above method is intuitive, but it is manually registered. Can Spring's automatic registration method be used to register property-level ",(0,i.jsx)(n.code,{children:"ScalarProvider"}),"?"]}),"\n",(0,i.jsxs)(n.p,{children:["Of course. Just override the ",(0,i.jsx)(n.code,{children:"getHandledProps"})," method of ",(0,i.jsx)(n.code,{children:"ScalarProvider"}),", and you can use the method of registering global ",(0,i.jsx)(n.code,{children:"ScalarProvider"})," to register property-level ",(0,i.jsx)(n.code,{children:"ScalarProvider"}),". For example:"]}),"\n",(0,i.jsxs)(t.A,{groupId:"language",children:[(0,i.jsx)(o.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="LocationScalarProvider.java"',children:"@Component\npublic class LocationScalarProvider extends AbstractScalarProvider<Location, String> {\n    \n    @Override\n    // highlight-next-line \n    public Collection<ImmutableProp> getHandledProps() {\n        return Arrays.asList(\n            FlightProps.SOURCE_LOCATION,\n            FlightProps.TARGET_LOCATION\n        );\n    }\n\n    ...Omit other code...\n}\n"})})}),(0,i.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="LocationScalarProvider.kt"',children:"@Component \nclass LocationScalarProvider : ScalarProvider<Location, String> {\n\n    // highlight-next-line\n    override fun getHandledProps(): Collection<ImmutableProp> =\n        listOf(\n            Flight::sourceLocation.toImmutableProp(),\n            Flight::targetLocation.toImmutableProp()\n        )\n\n    ...Omit other code...\n}\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>t});r(96540);var a=r(34164);const i={tabItem:"tabItem_Ymn6"};var l=r(74848);function t(e){let{children:n,hidden:r,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,t),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var a=r(96540),i=r(34164),l=r(23104),t=r(56347),o=r(205),s=r(57485),c=r(31682),d=r(70679);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:i}}=e;return{value:n,label:r,attributes:a,default:i}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:r}=e;const i=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,l=u(e),[t,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,h]=v({queryString:r,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,d.Dv)(r);return[i,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:i}),g=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&s(g)}),[g]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),h(e),j(e)}),[h,j,l]),tabValues:l}}var j=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(74848);function b(e){let{className:n,block:r,selectedValue:a,selectValue:t,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,r=s.indexOf(n),i=o[r].value;i!==a&&(c(n),t(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:h,onClick:d,...l,className:(0,i.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:l}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function S(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,m.jsx)(b,{...n,...e}),(0,m.jsx)(f,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,m.jsx)(S,{...e,children:h(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var a=r(96540);const i={},l=a.createContext(i);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);