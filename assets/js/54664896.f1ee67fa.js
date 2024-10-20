"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8089],{35893:(e,n,r)=>{r.d(n,{Ay:()=>c,RM:()=>o});var t=r(74848),a=r(28453),s=r(11470),i=r(19365);const o=[{value:"1. A few properties",id:"1-a-few-properties",level:2},{value:"2. More Properties",id:"2-more-properties",level:2},{value:"3. Include Association",id:"3-include-association",level:2},{value:"4. More Associations (Larger Breadth)",id:"4-more-associations-larger-breadth",level:2},{value:"5. Deeper Associations (Larger Depth)",id:"5-deeper-associations-larger-depth",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1-a-few-properties",children:"1. A few properties"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n});\n'})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    name = "Learning GraphQL"\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, the JSON for the ",(0,t.jsx)(n.code,{children:"books"})," object would be like follows"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"name": "Learning GraphQL"}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"2-more-properties",children:"2. More Properties"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("49.99"));\n});\n'})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    name = "Learning GraphQL"\n    edition = 1\n    price = BigDecimal("49.99")\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, the JSON for the ",(0,t.jsx)(n.code,{children:"books"})," object would be like follows"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Learning GraphQL",\n    "edition": 1,\n    "price": 49.99\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"3-include-association",children:"3. Include Association"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("49.99"));\n    draft.applyStore(store -> {\n        store.setName("O\'REILLY");\n        store.setWebsite("https://www.oreilly.com/");\n    });\n});\n'})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    name = "Learning GraphQL"\n    edition = 1\n    price = BigDecimal("49.99")\n    store {\n        name = "O\'REILLY"\n        website = "https://www.oreilly.com/"\n    }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, the JSON for the ",(0,t.jsx)(n.code,{children:"books"})," object would be like follows"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Learning GraphQL",\n    "edition": 1,\n    "price": 49.99,\n    "store": {\n        "name": "O\'REILLY",\n        "website": "https://www.oreilly.com/"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"4-more-associations-larger-breadth",children:"4. More Associations (Larger Breadth)"}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("49.99"));\n    draft.applyStore(store -> {\n        store.setName("O\'REILLY");\n        store.setWebsite("https://www.oreilly.com/");\n    });\n    draft.addIntoAuthors(author -> { \n        author.setFirstName("Eve");\n        author.setLastName("Procello");\n        author.setGender(Gender.FEMALE);\n    });\n    draft.addIntoAuthors(author -> { \n        author.setFirstName("Alex");\n        author.setLastName("Banks");\n        author.setGender(Gender.MALE);\n    });\n});\n'})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val book = new(Book::class).by {\n    name = "Learning GraphQL"\n    edition = 1\n    price = BigDecimal("49.99")\n    store {\n        name = "O\'REILLY"\n        website = "https://www.oreilly.com/"\n    }\n    authors().addBy {\n        firstName = "Eve"\n        setLastName = "Procello"\n        gender = Gender.FEMALE\n    }\n    authors().addBy {\n        firstName = "Alex"\n        lastName = "Banks"\n        gender = Gender.MALE\n    }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, the JSON for the ",(0,t.jsx)(n.code,{children:"books"})," object would be like follows"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Learning GraphQL",\n    "edition": 1,\n    "price": 49.99,\n    "store": {\n        "name": "O\'REILLY",\n        "website": "https://www.oreilly.com/"\n    },\n    "authors": [\n        {\n            "firstName": "Eve",\n            "lastName": "Procello",\n            "gender:" "FEMALE"\n        },\n        {\n            "firstName": "Alex",\n            "lastName": "Banks",\n            "gender:" "MALE"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"5-deeper-associations-larger-depth",children:"5. Deeper Associations (Larger Depth)"}),"\n",(0,t.jsx)(n.p,{children:"Here is the translation to English:"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike the previous examples, here we choose ",(0,t.jsx)(n.code,{children:"BookStore"})," as the aggregate root for the data structure, rather than ",(0,t.jsx)(n.code,{children:"Book"}),"."]}),"\n",(0,t.jsxs)(s.A,{groupId:"language",children:[(0,t.jsx)(i.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'BookStore store = Immutables.createBookStore(draft -> {\n    draft.setName("O\'REILLY");\n    draft.setWebsite("https://www.oreilly.com/");\n    draft.addIntoBooks(book -> {\n        book.setName("Learning GraphQL");\n        book.setEdition(1);\n        book.setPrice(new BigDecimal("49.99"));\n        book.addIntoAuthors(author -> { \n            author.setFirstName("Eve");\n            author.setLastName("Procello");\n            author.setGender(Gender.FEMALE);\n        });\n        book.addIntoAuthors(author -> { \n            author.setFirstName("Alex");\n            author.setLastName("Banks");\n            author.setGender(Gender.MALE);\n        });\n    });\n});\n'})})}),(0,t.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val store = new(BookStore::class).by {\n    name = "O\'REILLY"\n    website = "https://www.oreilly.com/"\n    books().addBy {\n        name = "Learning GraphQL"\n        edition = 1\n        price = BigDecimal("49.99")\n        authors().addBy {\n            firstName = "Eve"\n            setLastName = "Procello"\n            gender = Gender.FEMALE\n        }\n        authors().addBy {\n            firstName = "Alex"\n            lastName = "Banks"\n            gender = Gender.MALE\n        }\n    }\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this case, the JSON for the ",(0,t.jsx)(n.code,{children:"store"})," object would be like follows"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "name": "O\'REILLY",\n    "website": "https://www.oreilly.com/",\n    "books": [\n        {\n            "name": "Learning GraphQL",\n            "edition": 1,\n            "price": 49.99,\n            "authors": [\n                {\n                    "firstName": "Eve",\n                    "lastName": "Procello",\n                    "gender:" "FEMALE"\n                },\n                {\n                    "firstName": "Alex",\n                    "lastName": "Banks",\n                    "gender:" "MALE"\n                }\n            ]\n        }\n    ]\n}\n'})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},12953:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=r(74848),a=r(28453),s=r(74400),i=r(35893);const o={sidebar_position:2,title:"Core Concept \u2726"},l=void 0,c={id:"overview/core-concept",title:"Core Concept \u2726",description:"Design Principles",source:"@site/docs/overview/core-concept.mdx",sourceDirName:"overview",slug:"/overview/core-concept",permalink:"/jimmer-doc/docs/overview/core-concept",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/overview/core-concept.mdx",tags:[],version:"current",lastUpdatedAt:1728595671e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Core Concept \u2726"},sidebar:"tutorialSidebar",previous:{title:"Before Reading",permalink:"/jimmer-doc/docs/overview/welcome"},next:{title:"Overview \u2726",permalink:"/jimmer-doc/docs/overview/introduction"}},d={},u=[{value:"Design Principles",id:"design-principles",level:2},{value:"Key features",id:"key-features",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"design-principles",children:"Design Principles"}),"\n",(0,t.jsx)(n.p,{children:"The core concept of Jimmer is to read and write data structures of arbitrary shapes as a whole, rather than simply processing entity objects."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Jimmer entity objects ",(0,t.jsx)(n.strong,{children:"are not POJOs"}),", and can easily ",(0,t.jsx)(s.l,{buttonText:"express data structures of arbitrary shapes",title:"Flexibility of Jimmer Entities",children:(0,t.jsx)(i.Ay,{})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Data structures of any shape can be processed as a whole for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Reading: Jimmer creates this infinitely flexible data structure and passes it to you"}),"\n",(0,t.jsx)(n.li,{children:"Writing: You create this infinitely flexible data structure and pass it to Jimmer"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Since Jimmer's design philosophy is to read and write data structures of arbitrary shapes rather than processing simple objects, how does it differ from technologies with similar capabilities?"}),"\n",(0,t.jsx)(n.p,{children:"Here is the English translation of the provided table:"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Comparison"}),(0,t.jsx)("th",{children:"Description"})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"2",children:"GraphQL"}),(0,t.jsx)("td",{children:"GraphQL only focuses on querying data structures of arbitrary shapes; Jimmer not only does this but also focuses on how to write data structures of arbitrary shapes"})]}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:"GraphQL does not support recursive queries based on self-referencing properties, Jimmer does"})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowspan:"5",children:"JPA"}),(0,t.jsxs)("td",{children:["In JPA, to control the shape of the data structure being saved, properties must be configured with insertable, updatable, or cascade ",(0,t.jsx)("i",{children:"(for associated properties)"}),".\nRegardless of the configuration, the saved data structure is fixed; Jimmer entities are not POJOs, their data structure shapes are ever-changing,\nno prior planning and design is needed, any business scenario can construct the data structure it needs and save it directly"]})]}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["For queries, JPA's ",(0,t.jsx)(n.code,{children:"EntityGraphQL"})," is very complex; Jimmer provides two methods to achieve similar functionality:\ncontrolling the format of returned entity objects, or generating DTOs through a cost-effective way and querying directly. Either way is much simpler than ",(0,t.jsx)(n.code,{children:"EntityGraph"})]})})}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["In JPA, if you need to use a DTO object to query only part of the properties, the DTO must be a simple object without any associations. That is, it loses the most valuable capability of ORM, degrading from ",(0,t.jsx)(n.code,{children:"ORM"})," to ",(0,t.jsx)(n.code,{children:"OM"}),";\nJimmer's automatically generated DTOs support arbitrarily complex hierarchical relationships, ",(0,t.jsx)(n.strong,{children:"Jimmer is currently the only ORM that supports nested projections based on DTO"})]})})}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["In JPA, updating an object results in all updatable columns being modified. For simplicity, developers rarely use ",(0,t.jsx)(n.code,{children:"update"}),", instead choosing to first query the complete object, modify some properties, and finally save the entire object; Jimmer can construct and directly save incomplete objects"]})})}),(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["JPA's ",(0,t.jsx)(n.code,{children:"EntityGraphQL"})," does not support recursive queries based on self-referencing properties, Jimmer does"]})})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"MongoDB"}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"In MongoDB, each document structure is a data island. Although MongoDB's data structure is weakly typed, from a business perspective, which data islands exist and the internal hierarchical structure of each data island need to be designed and agreed upon in advance.\nOnce the design and agreement are completed, the format of the entire data view is fixed and must be processed from a fixed perspective;\nIn Jimmer, the shape of the data structure does not need to be designed in advance, any business scenario can freely plan a data structure format, and read and write the corresponding data structure as a whole."})})]})]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Based on this core concept, Jimmer will bring you convenience that was previously unattainable in any technology stack,\nfreeing you from dealing with tedious details and allowing you to focus on quickly implementing complex business logic."})}),"\n",(0,t.jsx)(n.h2,{id:"key-features",children:"Key features"}),"\n",(0,t.jsx)(n.p,{children:"Based on the aforementioned core concept, Jimmer provides the following features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Convenient query API, and elegant Kotlin DSL"}),"\n",(0,t.jsx)(n.li,{children:"DTO language and corresponding code generator"}),"\n",(0,t.jsx)(n.li,{children:"Powerful dynamic querying, query conditions can apply to multiple tables"}),"\n",(0,t.jsxs)(n.li,{children:["Query arbitrary graph structures","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No N+1 problem"}),"\n",(0,t.jsx)(n.li,{children:"Objects at any level can be parial object"}),"\n",(0,t.jsx)(n.li,{children:"Recursive querying of self-associated properties"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Save arbitrary graph structures","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Merge data utilizing the database's own upsert capability"}),"\n",(0,t.jsx)(n.li,{children:"Batch SQL used at all levels"}),"\n",(0,t.jsx)(n.li,{children:"Automatic translation of constraint violation exceptions"}),"\n",(0,t.jsx)(n.li,{children:"Saved objects at any level can be parial object"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Advanced SQL optimization capabilities","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automatic removal of unnecessary table joins"}),"\n",(0,t.jsx)(n.li,{children:"Automatic merging of logically equivalent table joins and subqueries"}),"\n",(0,t.jsx)(n.li,{children:"In paginated queries, automatically generate and optimize the count query"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Powerful caching","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Multi-level caching"}),"\n",(0,t.jsxs)(n.li,{children:["Not just object caching ",(0,t.jsx)(n.em,{children:"(associations, colculated values, multi-view)"})]}),"\n",(0,t.jsx)(n.li,{children:"Automatic maintenance of cache consistency"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Rapid support for GraphQL"}),"\n",(0,t.jsxs)(n.li,{children:["Client contracts based on documentation comments ",(0,t.jsx)(n.em,{children:"(OpenAPI, TypeScript)"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>w});var t=r(96540),a=r(18215),s=r(23104),i=r(56347),o=r(205),l=r(57485),c=r(31682),d=r(70679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:r,groupId:a}),[j,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),b=(()=>{const e=c??j;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function f(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(f,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},66971:(e,n,r)=>{r.d(n,{a:()=>j});var t=r(96540),a=r(72774),s=r(63051),i=r(28968),o=r(48875),l=r(44676),c=r(47859),d=r(4671),u=r(99343),h=r(7324),p=r(39781),m=r(74848);const j=(0,t.memo)((e=>{let{open:n,fullScreen:r=!1,title:o,maxWidth:j="md",onClose:b,children:g}=e;const[f,v]=(0,t.useState)(r),y=(0,t.useCallback)((()=>{v((e=>!e))}),[]);return(0,m.jsxs)(s.A,{open:n,onClose:b,fullScreen:f,TransitionComponent:x,maxWidth:j,children:[(0,m.jsx)(a.A,{sx:{position:"relative"},children:(0,m.jsxs)(l.A,{children:[(0,m.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:o}),(0,m.jsx)(d.A,{onClick:y,style:{color:"white"},children:f?(0,m.jsx)(h.A,{}):(0,m.jsx)(u.A,{})}),(0,m.jsx)(d.A,{"aria-label":"close",onClick:b,style:{color:"white"},children:(0,m.jsx)(p.A,{})})]})}),(0,m.jsx)(i.A,{children:g})]})})),x=t.forwardRef((function(e,n){return(0,m.jsx)(o.A,{direction:"up",ref:n,...e})}))},74400:(e,n,r)=>{r.d(n,{l:()=>o});var t=r(96540),a=r(67512),s=r(66971),i=r(74848);const o=(0,t.memo)((e=>{let{buttonText:n,fullScreen:r=!1,title:o=n,variant:l="outlined",large:c=!1,maxWidth:d,useOriginalText:u=!0,children:h}=e;const[p,m]=(0,t.useState)(!1),j=(0,t.useCallback)((e=>{m(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),x=(0,t.useCallback)((()=>{m(!1)}),[]),b=u?{textTransform:"none"}:{};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{"data-is-view-more-button":"true",onClick:j,variant:l,size:c?"large":"small",style:b,children:n}),(0,i.jsx)(s.a,{open:p,onClose:x,title:o,maxWidth:d,fullScreen:r,children:h})]})}))},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(96540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);