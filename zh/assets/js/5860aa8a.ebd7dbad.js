"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3437],{31776:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"mapping/base/foreignkey","title":"\u771f\u5047\u5916\u952e","description":"\u901a\u8fc7\u5173\u8054\u6620\u5c04\u7684\u8bba\u8ff0\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u5173\u8054\u6620\u5c04\u9700\u8981\u5927\u91cf\u7684\u5916\u952e\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/foreignkey.mdx","sourceDirName":"mapping/base","slug":"/mapping/base/foreignkey","permalink":"/jimmer-doc/zh/docs/mapping/base/foreignkey","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/foreignkey.mdx","tags":[],"version":"current","lastUpdatedAt":1731277648000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"\u771f\u5047\u5916\u952e"},"sidebar":"tutorialSidebar","previous":{"title":"\u547d\u540d\u7b56\u7565","permalink":"/jimmer-doc/zh/docs/mapping/base/naming-strategy"},"next":{"title":"JSON Converter","permalink":"/jimmer-doc/zh/docs/mapping/base/json-converter"}}');var r=i(74848),t=i(28453),a=i(11470),o=i(19365);const s={sidebar_position:5,title:"\u771f\u5047\u5916\u952e"},c=void 0,u={},d=[{value:"\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e",id:"\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e",level:2},{value:"\u660e\u786e\u6307\u5b9a\u4f2a\u5916\u952e",id:"\u660e\u786e\u6307\u5b9a\u4f2a\u5916\u952e",level:2},{value:"\u4e0d\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a",id:"\u4e0d\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u901a\u8fc7",(0,r.jsx)(n.a,{href:"./association",children:"\u5173\u8054\u6620\u5c04"}),"\u7684\u8bba\u8ff0\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u5173\u8054\u6620\u5c04\u9700\u8981\u5927\u91cf\u7684\u5916\u952e\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Jimmer\u4e2d\u5916\u952e\u6709\u4e24\u79cd"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u771f\u5916\u952e\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u5bf9\u5e94\u7684\u5916\u952e\u7ea6\u675f"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f2a\u5916\u952e\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5f00\u53d1\u4eba\u5458\u610f\u8bc6\u4e2d\u662f\u5916\u952e\uff0c\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u5e76\u6ca1\u6709\u5bf9\u5e94\u7684\u5916\u952e\u7ea6\u675f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"\u5728\u4fdd\u5b58\u6570\u636e\u65f6"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u771f\u5916\u952e\u9760\u5173\u7cfb\u578b\u6570\u636e\u5e93\u672c\u8eab\u7684\u80fd\u529b\u4fdd\u8bc1\u5f15\u7528\u5b8c\u6574\u6027"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f2a\u5916\u952e\u9760ORM\u5728\u4e0a\u5c42\u4ee3\u7801\u4e2d\u690d\u5165\u989d\u5916\u68c0\u67e5\u6765\u4fdd\u8bc1\u5f15\u7528\u5b8c\u6574\u6027"}),"\n"]}),"\n"]}),(0,r.jsx)(n.p,{children:"\u8fd9\u79cd\u5dee\u5f02\u5bf9\u7528\u6237\u900f\u660e\uff0c\u7528\u6237\u53ea\u9700\u8981\u914d\u7f6e\u5916\u952e\u7684\u771f\u4f2a\u5373\u53ef\uff0c\u65e0\u9700\u4fee\u6539\u4e1a\u52a1\u4ee3\u7801\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e",children:"\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u5916\u952e\u7684\u5173\u8054\u5c5e\u6027"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    BookStore store();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n    \n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    val store: BookStore\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.REAL),\n        // highlight-next-line\n        inverseJoinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    )\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n    \n    @ManyToMany\n    // highlight-next-line\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.REAL),\n        // highlight-next-line\n        inverseJoinColumns = @JoinColumn(foreignKeyType = ForeignKeyType.REAL)\n    )\n    val authors: List<Author>\n    \n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"\u548c\u4e4b\u524d\u7684\u4f8b\u5b50\u4e0d\u540c\uff0c\u8fd9\u91cc"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e",(0,r.jsx)(n.code,{children:"JoinTable.joinColumns"}),"\u800c\u975e",(0,r.jsx)(n.code,{children:"JoinTable.joinColumnName"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5916\u952e\u53ea\u6709\u4e00\u5217\u4e14\u4e0d\u60f3\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a\uff0c",(0,r.jsx)(n.code,{children:"joinColumnName"}),"\u662f\u4e00\u79cd\u7b80\u5316\u914d\u7f6e\uff1b\u5426\u5219\uff0c\u5e94\u4f7f\u7528",(0,r.jsx)(n.code,{children:"joinColumns"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e",(0,r.jsx)(n.code,{children:"JoinTable.inverseJoinColumns"}),"\u800c\u975e",(0,r.jsx)(n.code,{children:"JoinTable.inverseJoinColumnName"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u5916\u952e\u53ea\u6709\u4e00\u5217\u4e14\u4e0d\u60f3\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a\uff0c",(0,r.jsx)(n.code,{children:"inverseJoinColumnName"}),"\u662f\u4e00\u79cd\u7b80\u5316\u914d\u7f6e\uff1b\u5426\u5219\uff0c\u5e94\u4f7f\u7528",(0,r.jsx)(n.code,{children:"inverseJoinColumns"})]}),"\n"]}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6570\u636e\u5e93\u65b9\u8a00\u4e0d\u652f\u6301\u5916\u952e\uff0c ",(0,r.jsxs)(n.em,{children:["\uff08\u6bd4\u5982\uff1a",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.dialect.TiDBDialect"}),"\uff09"]}),"\uff0c\u5219\u4e0d\u80fd\u660e\u786e\u6307\u5b9a\u771f\u5916\u952e\u3002"]}),(0,r.jsx)(n.p,{children:"\u56e0\u4e3a\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u5206\u5e03\u5f0f\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0cTiDB\u4e0d\u652f\u6301\u5916\u952e\u7ea6\u675f\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u660e\u786e\u6307\u5b9a\u4f2a\u5916\u952e",children:"\u660e\u786e\u6307\u5b9a\u4f2a\u5916\u952e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u5916\u952e\u7684\u5173\u8054\u5c5e\u6027"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @ManyToOne\n    @Nullable\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    BookStore store();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n    \n    @ManyToOne\n    // highlight-next-line\n    @JoinColumn(foreignKeyType = ForeignKeyType.FAKE)\n    val store: BookStore?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = {@JoinColumn(foreignKeyType = ForeignKeyType.FAKE)},\n        // highlight-next-line\n        inverseJoinColumns = {@JoinColumn(foreignKeyType = ForeignKeyType.FAKE)}\n    )\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"@Entity\ninterface Book {\n    \n    @ManyToMany\n    @JoinTable(\n        // highlight-next-line\n        joinColumns = [JoinColumn(foreignKeyType = ForeignKeyType.FAKE)],\n        // highlight-next-line\n        inverseJoinColumns = [JoinColumn(foreignKeyType = ForeignKeyType.FAKE)]\n    )\n    val authors: List<Author>\n    \n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0d\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a",children:"\u4e0d\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u60f3\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a\uff0c\u53ef\u4f7f\u7528",(0,r.jsx)(n.code,{children:"@JoinColumn(foreignKeyType = ForeignKeyType.AUTO)"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e",(0,r.jsx)(n.code,{children:"ForeignKeyType.AUTO"}),"\u662f",(0,r.jsx)(n.code,{children:"@JoinColumn"}),"\u6ce8\u89e3\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u6240\u4ee5\uff0c\u66f4\u597d\u7684\u9009\u62e9\u662f\u5bf9\u6b64\u4e0d\u505a\u4efb\u4f55\u914d\u7f6e\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u4ee3\u7801\u548c",(0,r.jsx)(n.a,{href:"./association",children:"\u5173\u8054\u6620\u5c04"}),"\u4e2d\u7684\u793a\u8303\u7684\u4ee3\u7801\u65e0\u5dee\u5f02\uff0c\u8fd9\u91cc\u65e0\u9700\u518d\u505a\u793a\u8303\u4ee3\u7801\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u6ca1\u6709\u660e\u786e\u6307\u5b9a\u5916\u952e\u7684\u771f\u4f2a\uff0c\u5219\u901a\u8fc7\u4ee5\u4e0b\u4e24\u4e2a\u6b65\u9aa4\u81ea\u52a8\u51b3\u5b9a\u5916\u952e\u7684\u771f\u4f2a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6570\u636e\u5e93\u65b9\u8a00\u4e0d\u652f\u6301\u5916\u952e\uff0c ",(0,r.jsxs)(n.em,{children:["\uff08\u6bd4\u5982\uff1a",(0,r.jsx)(n.code,{children:"org.babyfish.jimmer.sql.dialect.TiDBDialect"}),"\uff09"]}),"\uff0c\u5219\u5224\u5b9a\u4e3a\u4f2a\u5916\u952e\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u65f6\uff0c\u5df2\u7ecf\u6709\u4e86\u5224\u5b9a\u7ed3\u679c\uff0c\u63d0\u524d\u8fd4\u56de\uff0c\u4e0d\u4f1a\u6267\u884c\u6b65\u9aa42"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u7b2c\u4e00\u6b65\u65e0\u6cd5\u5b8c\u6210\u5224\u5b9a\uff0c\u5219\u53c2\u89c1Jimmer\u7684\u5168\u5c40\u914d\u7f6e",(0,r.jsx)(n.code,{children:"is-foreign-key-enabled-by-default"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u6b64\u914d\u7f6e\u4e3atrue\uff0c\u5219\u5224\u5b9a\u4e3a\u771f\u5916\u952e\uff1b\u5426\u5219\uff0c\u5224\u5b9a\u4e3a\u4f2a\u5916\u952e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u914d\u7f6e\u9ed8\u8ba4\u4e3atrue\uff0c\u7528\u6237\u53ef\u4ee5\u5c06\u5176\u8986\u76d6\u4e3afalse"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f7f\u7528SpringBoot"}),"\n",(0,r.jsxs)(n.p,{children:["\u4fee\u6539",(0,r.jsx)(n.code,{children:"application.yml"}),"\u6216",(0,r.jsx)(n.code,{children:"application.properties"}),"\uff0c\u5c06",(0,r.jsx)(n.code,{children:"jimmer.is-foreign-key-enabled-by-default"}),"\u8bbe\u7f6e\u4e3afalse"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u4f7f\u7528SpringBoot"}),"\n",(0,r.jsxs)(a.A,{groupId:"language",children:[(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setForeignKeyEnabledByDefault(false)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,r.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    // highlight-next-line\n    setForeignKeyEnabledByDefault(false)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>a});i(96540);var l=i(34164);const r={tabItem:"tabItem_Ymn6"};var t=i(74848);function a(e){let{children:n,hidden:i,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,a),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>T});var l=i(96540),r=i(34164),t=i(23104),a=i(56347),o=i(205),s=i(57485),c=i(31682),u=i(70679);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:i,attributes:l,default:r}}=e;return{value:n,label:i,attributes:l,default:r}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:i}=e;const r=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,s.aZ)(t),(0,l.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function g(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,t=h(e),[a,s]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=i.find((e=>e.default))??i[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:t}))),[c,d]=j({queryString:i,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,u.Dv)(i);return[r,(0,l.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:r}),m=(()=>{const e=c??g;return p({value:e,tabValues:t})?e:null})();(0,o.A)((()=>{m&&s(m)}),[m]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),x(e)}),[d,x,t]),tabValues:t}}var x=i(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=i(74848);function f(e){let{className:n,block:i,selectedValue:l,selectValue:a,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const n=e.currentTarget,i=s.indexOf(n),r=o[i].value;r!==l&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const i=s.indexOf(e.currentTarget)+1;n=s[i]??s[0];break}case"ArrowLeft":{const i=s.indexOf(e.currentTarget)-1;n=s[i]??s[s.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:t}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...t,className:(0,r.A)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":l===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:t}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=g(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,y.jsx)(f,{...n,...e}),(0,y.jsx)(b,{...n,...e})]})}function T(e){const n=(0,x.A)();return(0,y.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var l=i(96540);const r={},t=l.createContext(r);function a(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);