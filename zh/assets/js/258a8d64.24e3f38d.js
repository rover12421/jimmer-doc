"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5263],{45840:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"configuration/sql-log","title":"SQL\u65e5\u5fd7","description":"\u5bf9\u4e8eORM\u800c\u8a00\uff0c\u5728\u65e5\u5fd7\u4e2d\u6253\u5370\u751f\u6210\u7684SQL\u5f88\u91cd\u8981\u3002","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/configuration/sql-log.mdx","sourceDirName":"configuration","slug":"/configuration/sql-log","permalink":"/jimmer-doc/zh/docs/configuration/sql-log","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/configuration/sql-log.mdx","tags":[],"version":"current","lastUpdatedAt":1711320943000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"SQL\u65e5\u5fd7"},"sidebar":"tutorialSidebar","previous":{"title":"\u6279\u91cf\u63a7\u5236","permalink":"/jimmer-doc/zh/docs/configuration/batch-size"},"next":{"title":"\u9ed8\u8ba4\u679a\u4e3e\u7b56\u7565","permalink":"/jimmer-doc/zh/docs/configuration/default-enum-strategy"}}');var t=l(74848),s=l(28453),i=l(11470),c=l(19365);const a={sidebar_position:5,title:"SQL\u65e5\u5fd7"},o=void 0,d={},u=[{value:"\u5f00\u542fSQL\u65e5\u5fd7",id:"\u5f00\u542fsql\u65e5\u5fd7",level:2},{value:"\u683c\u5f0f\u826f\u597d\u7684SQL",id:"\u683c\u5f0f\u826f\u597d\u7684sql",level:2},{value:"\u5185\u8054SQL\u53c2\u6570",id:"\u5185\u8054sql\u53c2\u6570",level:2},{value:"\u5d4c\u5165\u5806\u6808\u4fe1\u606f",id:"\u5d4c\u5165\u5806\u6808\u4fe1\u606f",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5bf9\u4e8eORM\u800c\u8a00\uff0c\u5728\u65e5\u5fd7\u4e2d\u6253\u5370\u751f\u6210\u7684SQL\u5f88\u91cd\u8981\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5f00\u542fsql\u65e5\u5fd7",children:"\u5f00\u542fSQL\u65e5\u5fd7"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u4e24\u4e2a\u65b9\u6cd5\u5f00\u542fSQL\u65e5\u5fd7\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f7f\u7528Spring Boot Starter\u65f6\uff0c\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u5b9e\u73b0\u914d\u7f6e\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u4fee\u6539",(0,t.jsx)(n.code,{children:"application.yml"})," ",(0,t.jsx)(n.em,{children:"(\u6216application.properties)"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jimmer:\n    show-sql: true\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u914d\u7f6e\u5168\u5c40Bean"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(c.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Bean\npublic Executor executor() {\n    return Executor.log();\n}\n"})})}),(0,t.jsx)(c.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"@Bean\nfun executor(): Executor =\n    Executor.log()\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u5982\u679c\u540c\u65f6\u91c7\u7528\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6cd5 ",(0,t.jsx)(n.em,{children:"(\u4e0d\u63a8\u8350)"}),"\uff0c\u5219\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u4f18\u5148\u3002"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5e95\u5c42API"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(c.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,t.jsx)(c.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5b9e\u9645\u6253\u5370\u65e5\u5fd7\u5982\u4e0b\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jimmer> sql: select tb_1_.ID, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID from BOOK tb_1_  where lower(tb_1_.NAME) like ?  order by tb_1_.NAME asc, tb_1_.EDITION desc limit ?, ?, variables: [%graphql%, 0, 10], purpose: QUERY\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"\u5982\u679c\u4ec5\u4ec5\u5f00\u542fSQL\u65e5\u5fd7\uff0c\u4e0a\u9762\u65e5\u5fd7\u4e0d\u4f1a\u6362\u884c\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u65e5\u5fd7\u6709\u4e09\u4e2a\u90e8\u5206\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"sql"}),": \u672c\u6267\u884c\u7684SQL\u8bed\u53e5"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"variables"}),": \u548c",(0,t.jsx)(n.code,{children:"sql"}),"\u914d\u5957\u7684JDBC\u53c2\u6570\uff0c\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u5176\u957f\u5ea6\u548c",(0,t.jsx)(n.code,{children:"sql"}),'\u4e2d"?"\u5b57\u7b26\u7684\u6570\u91cf\u76f8\u540c\u3002']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"purpose"}),": SQL\u88ab\u6267\u884c\u7684\u539f\u56e0\uff0c\u662f\u4e00\u4e2a\u679a\u4e3e\u7c7b\u578b\uff0c\u6709\u4ee5\u4e0b\u53d6\u503c"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"QUERY"}),": \u5f00\u53d1\u4eba\u5458\u76f4\u63a5\u6267\u884c\u7684\u67e5\u8be2"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"UPDATE"}),": \u5f00\u53d1\u4eba\u5458\u901a\u8fc7",(0,t.jsx)(n.a,{href:"../mutation/update-statement",children:"update\u8bed\u53e5"}),"\u6267\u884c\u7684\u64cd\u4f5c"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"DELETE"}),": \u5f00\u53d1\u4eba\u5458\u901a\u8fc7",(0,t.jsx)(n.a,{href:"../mutation/delete-statement",children:"delete\u8bed\u53e5"}),"\u6267\u884c\u7684\u64cd\u4f5c"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"LOAD"}),": Jimmer\u81ea\u52a8\u6267\u884c\u7684\u67e5\u8be2\uff0c\u7528\u4e8e\u83b7\u53d6",(0,t.jsx)(n.a,{href:"../query/object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\u4e2d\u5173\u8054\u5c5e\u6027\u6216\u8ba1\u7b97\u5c5e\u6027\u7684\u503c\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"EXPORT"}),": \u7528\u6237\u5bf9\u5176\u4ed6\u5fae\u670d\u52a1\u53d1\u8d77\u67e5\u8be2\uff0c\u5176",(0,t.jsx)(n.a,{href:"../query/object-fetcher",children:"\u5bf9\u8c61\u6293\u53d6\u5668"}),"\u5305\u542b\u6307\u5411\u5f53\u524d\u670d\u52a1\u7684\u8fdc\u7a0b\u5173\u8054\uff0cJimmer\u81ea\u52a8\u5c06\u672c\u670d\u52a1\u7684\u6570\u636e\u66b4\u9732\u51fa\u53bb\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MUTATE"}),": \u5f00\u53d1\u4eba\u5458\u901a\u8fc7",(0,t.jsx)(n.a,{href:"../mutation/save-command",children:"save\u6307\u4ee4"}),"\u6307\u5b9a\u7684\u64cd\u4f5c"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"EVICT"}),": \u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5355\u51edJimmer\u89e6\u53d1\u5668\u7684\u4e8b\u4ef6\u4fe1\u606f\u65e0\u6cd5\u5224\u65ad\u54ea\u4e9b\u7f13\u5b58\u5e94\u8be5\u88ab\u6e05\u7406\uff0cJimmer\u4f1a\u81ea\u52a8\u6267\u884c\u4e00\u4e9b\u67e5\u8be2\u7528\u4e8e\u7cbe\u786e\u5224\u65ad\u54ea\u4e9b\u7f13\u5b58\u5e94\u8be5\u88ab\u6e05\u7406"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u683c\u5f0f\u826f\u597d\u7684sql",children:"\u683c\u5f0f\u826f\u597d\u7684SQL"}),"\n",(0,t.jsx)(n.p,{children:"\u4e4b\u524d\u7684\u4f8b\u5b50\u4e2d\uff0cSQL\u65e5\u5fd7\u88ab\u6253\u5370\u4e3a\u4e00\u884c\uff0c\u53ef\u8bfb\u6027\u4e0d\u4f73\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u9700\u8981\u683c\u5f0f\u5316SQL\u3002\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528Spring Boot Starter\u65f6"}),"\n",(0,t.jsxs)(n.p,{children:["\u4fee\u6539",(0,t.jsx)(n.code,{children:"application.yml"})," ",(0,t.jsx)(n.em,{children:"(\u6216application.properties)"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"jimmer:\n  show-sql: true\n  # highlight-next-line\n  pretty-sql: true\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5e95\u5c42API"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(c.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    // highlight-next-line\n    .setSqlFormatter(SqlFormatter.PRETTY)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,t.jsx)(c.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    // highlight-next-line\n    setSqlFormatter(SqlFormatter.PRETTY)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u65e5\u5fd7\u6253\u5370\u7ed3\u679c\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Execute SQL===>\nPurpose: QUERY\nSQL: select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    lower(tb_1_.NAME) like ? /* %graphql% */ \u2776\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 0 */ \u2777, ? /* 10 */ \u2778\nJDBC response status: success\nTime cost: 8ms\n<===Execute SQL\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"SQL\u8bed\u53e5\u4f1a\u88ab\u81ea\u52a8\u683c\u5f0f\u5316\uff0c\u81ea\u52a8\u6362\u884c\uff0c\u81ea\u52a8\u7f29\u8fdb\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u2776\u2777\u2778 \u548c\u4e0a\u4e2a\u4f8b\u5b50\u4e0d\u540c\uff0c\u4e0d\u518d\u96c6\u4e2d\u6253\u5370\u6240\u6709JDBC\u53c2\u6570\uff0c\u800c\u662f\u5c06\u53c2\u6570\u4ee5\u6ce8\u91ca\u7684\u65b9\u5f0f\u690d\u5165\u539f\u59cbSQL\u4e2d\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f1a\u6253\u5370\u5176\u4ed6\u4fe1\u606f\uff0c\u6bd4\u5982SQL\u6267\u884c\u662f\u5426\u6210\u529f\u3001SQL\u6267\u884c\u603b\u8017\u65f6\u3002\u5bf9\u4e8einsert\u3001update\u3001delete\u64cd\u4f5c\uff0c\u8fd8\u4f1a\u6253\u5370\u5f71\u54cd\u884c\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5185\u8054sql\u53c2\u6570",children:"\u5185\u8054SQL\u53c2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e4b\u524d\u7684\u4f8b\u5b50\u4e2d\uff0cSQL\u65e5\u5fd7\u4e2d\u7684JDBC\u53c2\u6570\u7528\u4ee5\u6ce8\u91ca\u7684\u65b9\u5f0f\u690d\u5165\u5230JDBC\u53c2\u6570\u7b26\u53f7",(0,t.jsx)(n.code,{children:"?"}),"\u4e4b\u540e\uff0c\u4f8b\u5982\uff1a",(0,t.jsx)(n.code,{children:"? /* %graphql% */"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u6216\u8bb8\u4f60\u5e0c\u671b\u53c2\u6570\u80fd\u591f\u88ab\u5185\u8054\u5230SQL\u8bed\u53e5\u4e2d\uff0c\u8ba9\u5b83\u770b\u8d77\u6765\u5c31\u5982\u540c\u6ca1\u6709\u4f7f\u7528JDBC\u53c2\u6570\u4e00\u6837\u3002\u8fd9\u6837\uff0c\u65e5\u5fd7\u4e2d\u7684SQL\u8bed\u53e5\u5c31\u53ef\u4ee5\u88ab\u62f7\u8d1d\u5230SQL IDE\u4e2d\u76f4\u63a5\u6267\u884c\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u6cd5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528Spring Boot Starter\u65f6"}),"\n",(0,t.jsxs)(n.p,{children:["\u4fee\u6539",(0,t.jsx)(n.code,{children:"application.yml"})," ",(0,t.jsx)(n.em,{children:"(\u6216application.properties)"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"jimmer:\n  show-sql: true\n  pretty-sql: true\n  # highlight-next-line\n  inline-sql-variables: true\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5e95\u5c42API"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(c.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    // highlight-next-line\n    .setSqlFormatter(SqlFormatter.INLINE_PRETTY)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,t.jsx)(c.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    // highlight-next-line\n    setSqlFormatter(SqlFormatter.INLINE_PRETTY)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u65e5\u5fd7\u6253\u5370\u7ed3\u679c\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Execute SQL===>\nPurpose: QUERY\nSQL: select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    lower(tb_1_.NAME) like '%graphql%' \u2776\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit 0 \u2777, 10 \u2778\nJDBC response status: success\nTime cost: 8ms\n<===Execute SQL\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b"}),"\n",(0,t.jsx)(n.p,{children:"\u6211\u4eec\u770b\u5230\uff0c\u2776 \u2777 \u2778 \u5904\u7684\u53c2\u6570\u90fd\u88ab\u76f4\u63a5\u5185\u8054\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"\u6b64\u4e3e\u4ec5\u4ec5\u5f71\u54cd\u65e5\u5fd7\uff0c\u771f\u6b63\u88ab\u6267\u884c\u7684SQL\u4ecd\u7136\u91c7\u7528JDBC\u53c2\u6570\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5d4c\u5165\u5806\u6808\u4fe1\u606f",children:"\u5d4c\u5165\u5806\u6808\u4fe1\u606f"}),"\n",(0,t.jsx)(n.p,{children:"\u9664\u4e86\u7f16\u5199\u4ee3\u7801\u5916\uff0c\u5f00\u53d1\u4eba\u5458\u5e38\u5e38\u9700\u8981\u6392\u9664\u95ee\u9898\u3002\u65e0\u8bba\u662f\u529f\u80fd\u9519\u8bef\u95ee\u9898\uff0c\u8fd8\u662f\u6027\u80fd\u95ee\u9898\uff0c\u90fd\u9700\u8981\u5f00\u53d1\u4eba\u5458\u6392\u67e5\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679cSQL\u65e5\u5fd7\u4ec5\u6253\u5370\u4ee5SQL\u4e3a\u6838\u5fc3\u7684JDBC\u4fe1\u606f\uff0c\u90a3\u4e48\u7528\u6237\u65e0\u6cd5\u5c06SQL\u65e5\u5fd7\u548c\u5e94\u7528\u4ee3\u7801\u5173\u8054\u8d77\u6765\uff0c\u8fd9\u4e0d\u5229\u4e8e\u7528\u6237\u6392\u67e5\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.p,{children:"Jimmer\u63d0\u4f9b\u4e86\u4e00\u4e2a\u914d\u7f6e\u9009\u9879\uff0c\u5982\u679c\u88ab\u6307\u5b9a\uff0c\u5f53jimmer\u5728\u6267\u884cSQL\u4e4b\u524d\uff0c\u5b83\u5c06\u68c0\u67e5\u5f53\u524d\u7ebf\u7a0b\u7684\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u800c\uff0c\u8fd9\u4e9b\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u5305\u542b\u592a\u591a\u4fe1\u606f\uff0c\u5305\u62ec\u4ee5jdk\u3001jdbc\u9a71\u52a8\u7a0b\u5e8f\u3001jimmer\u548cspring\u4e3a\u4ee3\u8868\u7684\u57fa\u7840\u67b6\u6784\u8c03\u7528\u5e27\uff0c\u800c\u5f00\u53d1\u4eba\u5458\u5173\u5fc3\u7684\u4e1a\u52a1\u76f8\u5173\u4fe1\u606f\u5c06\u88ab\u6df9\u6ca1\u5728\u4fe1\u606f\u7684\u6d77\u6d0b\u4e2d\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u914d\u7f6e\u7c7b\u578b\u4e3a",(0,t.jsx)(n.code,{children:"java.util.Collection<String>"}),"\uff0c\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u6307\u5b9a\u591a\u4e2a\u5305\u6216\u7c7b\u524d\u7f00\uff0cjimmer\u5c06\u7528\u5b83\u4eec\u8fc7\u6ee4\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\uff0c\u5982\u679c\u67d0\u4e2a\u8c03\u7528\u5e27\u80fd\u901a\u8fc7\u8fc7\u6ee4\uff0cJimmer\u5c31\u4f1a\u8ba4\u4e3a\u5b83\u548c\u7528\u6237\u4e1a\u52a1\u76f8\u5173\uff0c\u4ece\u800c\u5728\u6267\u884c\u524d\u7684\u56de\u8c03\u53c2\u6570\u4e2d\u5305\u542b\u5b83\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8eSQL\u65e5\u5fd7\u6253\u5370\u800c\u8a00\uff0c\u80fd\u901a\u8fc7\u8fc7\u6ee4\u7684\u8c03\u7528\u5e27\u5c06\u4f1a\u51fa\u73b0\u5728\u6253\u5370\u7ed3\u679c\u4e2d\uff0c\u5e2e\u52a9\u7528\u6237\u6392\u67e5\u95ee\u9898\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u5b9e\u73b0\u65b9\u6cd5\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528Spring Boot Starter\u65f6"}),"\n",(0,t.jsxs)(n.p,{children:["\u4fee\u6539",(0,t.jsx)(n.code,{children:"application.yml"})," ",(0,t.jsx)(n.em,{children:"(\u6216application.properties)"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"jimmer:\n  show-sql: true\n  pretty-sql: true\n  # highlight-next-line\n  executor-context-prefixes:\n    # highlight-next-line\n    - com.example.business\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5e95\u5c42API\u65f6"}),"\n",(0,t.jsxs)(i.A,{groupId:"language",children:[(0,t.jsx)(c.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setExecutor(Executor.log())\n    .setSqlFormatter(SqlFormatter.PRETTY)\n    // highlight-next-line\n    .setExecutorContextPrefixes(\n        Collections.singleton(\n            // highlight-next-line\n            "com.example.business"\n        )\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n'})})}),(0,t.jsx)(c.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'val sqlClient = newKSqlClient {\n    setExecutor(Executor.log())\n    setSqlFormatter(SqlFormatter.PRETTY)\n    // highlight-next-line\n    setExecutorContextPrefixes(\n        listOf(\n            // highlight-next-line\n            "com.example.business"\n        )\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u65e5\u5fd7\u6253\u5370\u7ed3\u679c\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Execute SQL===>\n--- Business related stack trace information --- \u2776\ncom.example.business.BookService.findBooks(BookService.java:55) \u2777\nPurpose: QUERY\nSQL: select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    lower(tb_1_.NAME) like ? /* %graphql% */\norder by\n    tb_1_.NAME asc,\n    tb_1_.EDITION desc\nlimit ? /* 0 */, ? /* 10 */\nJDBC response status: success\nTime cost: 9ms\n<===Execute SQL\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u2776\u548c\u2777\u5904\uff0c\u6253\u5370\u4e86\u6267\u884cSQL\u64cd\u4f5c\u7684\u7ebf\u7a0b\u7684\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5e76\u6ca1\u6709\u76f2\u76ee\u6253\u5370\u5927\u91cf\u7684\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\uff0c\u53ea\u6253\u5370\u4e86\u7528\u6237\u5173\u5fc3\u7684\u3002"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>i});l(96540);var r=l(34164);const t={tabItem:"tabItem_Ymn6"};var s=l(74848);function i(e){let{children:n,hidden:l,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>v});var r=l(96540),t=l(34164),s=l(23104),i=l(56347),c=l(205),a=l(57485),o=l(31682),d=l(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:r,default:t}}=e;return{value:n,label:l,attributes:r,default:t}}))}(l);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function x(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:l}=e;const t=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,a.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function j(e){const{defaultValue:n,queryString:l=!1,groupId:t}=e,s=h(e),[i,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=l.find((e=>e.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,u]=p({queryString:l,groupId:t}),[j,m]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Dv)(l);return[t,(0,r.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:t}),b=(()=>{const e=o??j;return x({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{b&&a(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=l(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=l(74848);function _(e){let{className:n,block:l,selectedValue:r,selectValue:i,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const n=e.currentTarget,l=a.indexOf(n),t=c[l].value;t!==r&&(o(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=a.indexOf(e.currentTarget)+1;n=a[l]??a[0];break}case"ArrowLeft":{const l=a.indexOf(e.currentTarget)-1;n=a[l]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":l},n),children:c.map((e=>{let{value:n,label:l,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:l??n},n)}))})}function E(e){let{lazy:n,children:l,selectedValue:s}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function f(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",b.tabList),children:[(0,g.jsx)(_,{...n,...e}),(0,g.jsx)(E,{...n,...e})]})}function v(e){const n=(0,m.A)();return(0,g.jsx)(f,{...e,children:u(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>c});var r=l(96540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);