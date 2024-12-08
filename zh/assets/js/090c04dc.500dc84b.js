"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8766],{87619:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"mutation/save-command/association/owner","title":"\u62e5\u6709\u65b9\u7279\u6709\u529f\u80fd","description":"\u57fa\u672c\u6982\u5ff5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/association/owner.mdx","sourceDirName":"mutation/save-command/association","slug":"/mutation/save-command/association/owner","permalink":"/jimmer-doc/zh/docs/mutation/save-command/association/owner","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/association/owner.mdx","tags":[],"version":"current","lastUpdatedAt":1733618994000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"\u62e5\u6709\u65b9\u7279\u6709\u529f\u80fd"},"sidebar":"tutorialSidebar","previous":{"title":"\u5173\u8054\u5206\u7c7b","permalink":"/jimmer-doc/zh/docs/mutation/save-command/association/classification"},"next":{"title":"\u5173\u8054\u5bf9\u8c61\u4fdd\u5b58\u6a21\u5f0f","permalink":"/jimmer-doc/zh/docs/mutation/save-command/association/associated-save-mode"}}');var s=l(74848),i=l(28453),a=l(11470),o=l(19365);const t={sidebar_position:2,title:"\u62e5\u6709\u65b9\u7279\u6709\u529f\u80fd"},d=void 0,c={},h=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"1. \u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054",id:"1-\u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054",level:2},{value:"2. \u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61",id:"2-\u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61",level:2},{value:"\u4fdd\u5b88\u7684\u9ed8\u8ba4\u884c\u4e3a",id:"\u4fdd\u5b88\u7684\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4e0d\u52a0\u9650\u5236",id:"\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\u4e0d\u52a0\u9650\u5236",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u8c13\u62e5\u6709\u65b9\uff0c\u6307\u5177\u5907",(0,s.jsx)(n.code,{children:"mappedBy"}),"\u7684",(0,s.jsx)(n.code,{children:"@OneToMany"}),"\u6216",(0,s.jsx)(n.code,{children:"@OneToOne"}),"\u5bf9\u8c61\u3002\u4ee5",(0,s.jsx)(n.code,{children:"@OneToMany"}),"\u4e3a\u4f8b"]}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"@Entity\npublic interface BookStore {\n\n    // highlight-next-line\n    @OneToMany(mappedBy = true)\n    List<Book> books();\n}\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"@Entity\ninterface BookStore {\n\n    // highlight-next-line\n    @OneToMany(mappedBy = true)\n    val books: List<Book>\n}\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u79cd\u5173\u8054\u5177\u5907\u4e00\u4e2a\u7279\u6b8a\u529f\u80fd"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"1-\u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054",children:"1. \u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054"}),"\n",(0,s.jsx)(n.p,{children:"\u5047\u8bbe\u6709\u5982\u4e0b\u5b9e\u4f53"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"',children:'@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="TreeNode.kt"',children:'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"TreeNode"}),"\u7684",(0,s.jsx)(n.code,{children:"@Key"}),"\u5c5e\u6027\u4e3a",(0,s.jsx)(n.code,{children:"name"}),"\u548c",(0,s.jsx)(n.code,{children:"parent"}),"\uff0c\u9664\u4e86\u660e\u786e\u6297\u53ef\u63a5\u53d7wild\u5bf9\u8c61\u7684\u4fdd\u6301\u6a21\u5f0f\u5916\uff0c\u88ab\u4fdd\u5b58\u5bf9\u8c61\u9700\u8981"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8981\u4e48\u6307\u5b9a",(0,s.jsx)(n.code,{children:"TreeNode.id"}),"\u5c5e\u6027"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u8981\u4e48\u6307\u5b9a",(0,s.jsx)(n.code,{children:"TreeNode.name"}),"\u548c",(0,s.jsx)(n.code,{children:"TreeNode.parent"}),"\u5c5e\u6027"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5982\u4e0b\u4ee3\u7801\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'TreeNode rootNode = Immutables.createTreeNode(root -> {\n    root.setName("Root");\n    root.setParent(null);\n    root.addIntoChildNodes(child -> {\n        child.setName("Child-1");\n        // \u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u65e0\u9700\u6307\u5b9a`parent`\u5c5e\u6027\n    });\n    root.addIntoChildNodes(child -> {\n        child.setName("Child-2");\n        // \u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u65e0\u9700\u6307\u5b9a`parent`\u5c5e\u6027\n    });\n});\nsqlClient\n    .saveCommand(rootNode)\n    .setTargetTransferModeAll(TargetTransferMode.ALLOWED)\n    .execute();\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val rootNode = TreeNode {\n    name = "Root"\n    parent = null\n    childNodes().addBy {\n        name = "Child-1"\n        // \u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u65e0\u9700\u6307\u5b9a`parent`\u5c5e\u6027\n    }\n    childNodes().addBy {\n        name = "Child-2"\n        // \u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u65e0\u9700\u6307\u5b9a`parent`\u5c5e\u6027\n    }\n}\nsqlClient.save(rootNode) {\n    setTargetTransferModeAll(TargetTransferMode.ALLOWED)\n}\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee3\u7801\u4e2d\u7684",(0,s.jsx)(n.code,{children:"setTargetTransferModeAll(TargetTransferMode.ALLOWED)"}),"\u5e76\u975e\u8fd9\u91cc\u5173\u6ce8\u7684\u7126\u70b9\uff0c\u5e76\u8bfb\u8005\u5148\u884c\u5ffd\u7565\u4e4b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c\u867d\u7136\u6839\u5bf9\u8c61 ",(0,s.jsxs)(n.em,{children:["(",(0,s.jsx)(n.code,{children:"Root"}),")"]})," \u7684",(0,s.jsx)(n.code,{children:"name"}),"\u548c",(0,s.jsx)(n.code,{children:"parent"}),"\u5c5e\u6027\u90fd\u88ab\u6307\u5b9a\u4e86\uff0c\n\u4f46\u662f\u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61 ",(0,s.jsxs)(n.em,{children:["(",(0,s.jsx)(n.code,{children:"Child-1"}),", ",(0,s.jsx)(n.code,{children:"Child-2"}),")"]})," \u800c\u8a00\uff0c\u53ea\u6709",(0,s.jsx)(n.code,{children:"name"}),"\u5c5e\u6027\u88ab\u6307\u5b9a\u4e86\uff0c\u4f46",(0,s.jsx)(n.code,{children:"parent"}),"\u5c5e\u6027\u5e76\u672a\u88ab\u6307\u5b9a\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"TreeNode.childNodes"}),"\u5c5e\u6027\u662f",(0,s.jsx)(n.code,{children:"TreeNode.parent"}),"\u5c5e\u6027\u4e92\u4e3a\u9006\u5411\u5173\u8054\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e3b\u52a8\u7aef\u7684\u591a\u5bf9\u4e00 ",(0,s.jsx)(n.em,{children:"(\u6216\u4e00\u5bf9\u4e00)"})," \u5173\u8054 ",(0,s.jsxs)(n.em,{children:["(\u8fd9\u91cc\u7684",(0,s.jsx)(n.code,{children:"TreeNode.parent"}),")"]})," \u800c\u8a00\uff0c\n\u4e00\u65e6\u901a\u8fc7\u5176\u4ece\u52a8\u7aef\u7684\u4e00\u5bf9\u591a ",(0,s.jsx)(n.em,{children:"(\u6216\u4e00\u5bf9\u4e00)"})," \u5173\u8054 ",(0,s.jsxs)(n.em,{children:["(\u8fd9\u91cc\u7684",(0,s.jsx)(n.code,{children:"TreeNode.childNodes"}),")"]})," \u4e3a\u7236\u5bf9\u8c61\u6307\u5b9a\u4e86\u5b50\u5bf9\u8c61\u96c6\u5408\uff0c\n\u90a3\u4e48\u96c6\u5408\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5b50\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61\u5f15\u7528\u90fd\u4f1a\u88ab\u81ea\u52a8\u8bbe\u7f6e\u3002"]})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u672c\u4f8b\u5b50\u4e2d\uff0c\u7528\u6237\u539f\u672c\u671f\u671b\u4fdd\u5b58\u7684\u5bf9\u8c61\u6811\u4e3a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name":"Root",\n    "parent":null,\n    "childNodes":[\n        {"name":"Child-1"},\n        {"name":"Child-2"}\n    ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5047\u8bbe\u6839\u5143\u7d20\u88ab\u63d2\u5165\u540e\u6570\u636e\u5e93\u4e3a\u6839\u5bf9\u8c61\u5206\u914d\u7684\u81ea\u52a8\u7f16\u53f7\u4e3a",(0,s.jsx)(n.code,{children:"100"}),"\uff0cJimmer\u4f1a\u81ea\u52a8\u8c03\u6574\u8fd9\u9897\u6811"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "id": 100,\n    "name":"Root",\n    "parent":null,\n    "childNodes":[\n        {\n            "name":"Child-1",\n            // highlight-next-line\n            "parent": {"id": 100}\n        },\n        {\n            "name":"Child-2",\n            // highlight-next-line\n            "parent": {"id": 100}\n        }\n    ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u89c1\uff0c\u4e00\u65e6\u5b8c\u6210\u4e86\u5bf9\u7236\u5bf9\u8c61\u7684\u4fdd\u5b58\uff0c\u6240\u6709\u5b50\u5bf9\u8c61\u7684",(0,s.jsx)(n.code,{children:"TreeNode.parent"}),"\u5c5e\u6027\u90fd\u4f1a\u88ab\u81ea\u52a8\u8bbe\u7f6e\u3002\u5373\uff0c\u5728",(0,s.jsx)(n.code,{children:"id"}),"\u5c5e\u6027\u672a\u88ab\u6307\u5b9a\u7684\u60c5\u51b5\u4e0b"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4eceJimmer\u7684\u89d2\u5ea6\u770b\uff0c\u6240\u6709",(0,s.jsx)(n.code,{children:"TreeNode"}),"\u5bf9\u8c61\u7684",(0,s.jsx)(n.code,{children:"name"}),"\u548c",(0,s.jsx)(n.code,{children:"parent"}),"\u5c5e\u6027\u90fd\u88ab\u6307\u5b9a\u4e86\uff0c\u5373",(0,s.jsx)(n.code,{children:"@Key"}),"\u5c5e\u6027\u90fd\u88ab\u6307\u5b9a\u4e86"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u770b\uff0c\u9664\u4e86\u6839\u5bf9\u8c61\u9700\u8981\u540c\u65f6\u6307\u5b9a",(0,s.jsx)(n.code,{children:"name"}),"\u548c",(0,s.jsx)(n.code,{children:"parent"}),"\u5c5e\u6027\u5916\uff0c\u5176\u4ed6\u6240\u6709\u5bf9\u8c61\u90fd\u53ea\u9700\u8981\u6307\u5b9a",(0,s.jsx)(n.code,{children:"name"}),"\u5c5e\u6027"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u8bc9\u4f8b\u5b50\u4f1a\u751f\u6210\u4e09\u6761SQL"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6309",(0,s.jsx)(n.code,{children:"@Key"}),"\u67e5\u8be2\u6839\u5bf9\u8c61\u662f\u5426\u5b58\u5728"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"Purpose: COMMAND(NULL_NOT_DISTINCT_REQUIRED)\nselect\n    tb_1_.NODE_ID,\n    tb_1_.NAME,\n    tb_1_.PARENT_ID\nfrom TREE_NODE tb_1_\nwhere\n        tb_1_.PARENT_ID is null\n    and\n        tb_1_.NAME = ? /* Root */\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\uff0c\u5e76\u6ca1\u6709\u4f7f\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,s.jsx)(n.code,{children:"UPSERT"}),"\u80fd\u529b\uff0c\u800c\u662f\u901a\u8fc7\u800c\u5916\u67e5\u8be2\u6765\u51b3\u5b9a\u540e\u7eed\u64cd\u4f5c\u5e94\u8be5\u662f",(0,s.jsx)(n.code,{children:"INSERT"}),"\u8fd8\u662f",(0,s.jsx)(n.code,{children:"UPDATE"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u662f\u56e0\u4e3a\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,s.jsx)(n.code,{children:"UPSERT"}),"\u80fd\u529b\u4f9d\u8d56\u4e8e\u552f\u4e00\u6027\u7ea6\u675f ",(0,s.jsx)(n.em,{children:"(\u6216\u552f\u4e00\u7d22\u5f15)"}),"\uff0c\u8fd9\u91cc\uff0c\u88ab\u4fdd\u5b58\u7684\u6839\u5bf9\u8c61\u7684",(0,s.jsx)(n.code,{children:"parent"}),"\u5c5e\u6027\u4e3anull\uff0c\n\u5e76\u975e\u6240\u6709\u6570\u636e\u5e93\u90fd\u5177\u5907\u4e3a\u552f\u4e00\u7ea6\u675f\u5b9a\u4e49null\u7684\u884c\u4e3a\u7684\u80fd\u529b\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0b\uff0c\u5982\u679c\u88ab\u4fdd\u5b58\u5bf9\u8c61\u7684",(0,s.jsx)(n.code,{children:"@Key"}),"\u5c5e\u6027\u4e3anull\uff0cJimmer\u4f1a\u653e\u5f03\u4f7f\u7528\u6570\u636e\u672c\u8eab\u7684UPSERT\u80fd\u529b\uff0c\n\u6267\u884c\u989d\u5916\u7684\u67e5\u8be2\u6765\u5224\u65ad\u540e\u7eed\u64cd\u4f5c\u5e94\u8be5\u662f",(0,s.jsx)(n.code,{children:"INSERT"}),"\u6216",(0,s.jsx)(n.code,{children:"UPDATE"}),"\uff0c\u5e76\u5411\u5f00\u53d1\u4eba\u5458\u62a5\u544a",(0,s.jsx)(n.code,{children:"QueryReason.NULL_NOT_DISTINCT_REQUIRED"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u67d0\u4e9b\u6570\u636e\u5e93\uff0c\u4f8b\u5982Postgres\uff0c\u53ef\u4ee5\u4e3a\u552f\u4e00\u7ea6\u675f\u5b9a\u4e49null\u7684\u884c\u4e3a\u3002\n\u5982\u4f55\u5728\u8fd9\u7c7b\u6570\u636e\u5e93\u4e2d\u89e3\u51b3\u6b64\u95ee\u9898\u5e76\u975e\u672c\u6587\u5173\u6ce8\u70b9\uff0c\u8bf7\u67e5\u9605",(0,s.jsx)(n.code,{children:"QueryReason.NULL_NOT_DISTINCT_REQUIRED"}),"\u7684\u6587\u6863\u6ce8\u91ca\u4ee5\u4e86\u89e3\u66f4\u591a\u3002"]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5047\u8bbe\u4e0a\u8ff0\u67e5\u8be2\u5224\u65ad\u88ab\u4fdd\u5b58\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728\uff0c\u76f4\u63a5\u63d2\u5165\u6839\u5bf9\u8c61\u5373\u53ef"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"insert into TREE_NODE(NAME, PARENT_ID) \nvalues(?, ?)\n/* batch-0: [Root, DbNull{type=long}] */\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4fdd\u5b58\u5b50\u5bf9\u8c61 ",(0,s.jsx)(n.em,{children:"(\u5047\u8bbe\u4fdd\u5b58\u6839\u5bf9\u8c61\u540e\u5f97\u77e5\u5176id\u4e3a100)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"merge into TREE_NODE(\n    NAME, PARENT_ID\n) key(\n    NAME, PARENT_ID\n) values(?, ?)\n/* batch-0: [Child-1, 100] */\n/* batch-1: [Child-2, 100] */\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-\u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61",children:"2. \u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61"}),"\n",(0,s.jsx)(n.h3,{id:"\u4fdd\u5b88\u7684\u9ed8\u8ba4\u884c\u4e3a",children:"\u4fdd\u5b88\u7684\u9ed8\u8ba4\u884c\u4e3a"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u6848\u4f8b"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'BookStore store = Immutables.createBookStore(draft -> {\n    draft.setName("MANNING");\n    draft.addIntoBooks(book -> {\n        book.setId(12L);\n    });\n    draft.addIntoBooks(book -> {\n        book.setId(1L);\n    });\n});\nsqlClient.save(store);\n'})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:'val store = BookStore {\n    name = "MANNING"\n    books().addBy {\n        id = 12L\n    }\n    books().addBy {\n        id = 1L\n    }\n}\nsqlClient.save(store)\n'})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u6267\u884c\u8fd9\u6837\u7684\u4ee3\u7801\uff0c\u6267\u884c\u5982\u4e0bSQL\u5e76\u5bfc\u81f4\u5f02\u5e38"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4fdd\u5b58\u6839\u5bf9\u8c61",(0,s.jsx)(n.code,{children:"BookStore"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"merge into BOOK_STORE(\n    NAME\n) key(NAME) values(?)\n/* batch-0: [MANNING] */\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u4fdd\u5b58\u5b50\u5bf9",(0,s.jsx)(n.code,{children:"Book"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"// highlight-next-line\nPurpose: COMMAND(TARGET_NOT_TRANSFERABLE)\nselect\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    tb_1_.ID = any(? /* [12, 1] */)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5947\u602a\u7684\u662f\uff0c\u5c3d\u7ba1\u5b50\u5bf9\u8c61\u7684id\u5c5e\u6027\u88ab\u6307\u5b9a\u4e86 ",(0,s.jsxs)(n.em,{children:["(\u8fd9\u901a\u5e38\u610f\u5473\u7740Jimmer\u4f1a\u5229\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,s.jsx)(n.code,{children:"UPSERT"}),"\u80fd\u529b)"]}),"\uff0c\n\u4f46Jimmer\u4ecd\u7136\u5c1d\u8bd5\u901a\u8fc7\u67e5\u8be2\u6765\u5224\u65ad\u540e\u7eed\u64cd\u4f5c\u5e94\u8be5\u662f",(0,s.jsx)(n.code,{children:"INSERT"}),"\u8fd8\u662f",(0,s.jsx)(n.code,{children:"UPDATE"}),"\uff0c\u800c\u975e\u5229\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,s.jsx)(n.code,{children:"UPSERT\u80fd\u529b"}),"\u3002\n\u66f4\u91cd\u8981\u7684\u662f\uff0cJimmer\u62a5\u544a\u4e86",(0,s.jsx)(n.code,{children:"QueryReason.TARGET_NOT_TRANSFERABLE"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6700\u7ec8\uff0c\u4e0a\u8ff0\u4ee3\u7801\u8fd8\u4f1a\u5bfc\u81f4\u5982\u4e0b\u5f02\u5e38"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'Save error caused by the path: "<root>.books": \nCan the move the child object whose type is "org.doc.j.model.Book" \nand id is "1" to another parent object because the property \n"org.doc.j.model.BookStore.books" \n// highlight-next-line\ndoes not support target transfer\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Book.store"}),"\u662f\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"Book"}),"\u5bf9\u8c61\uff0c\u53ea\u53ef\u80fd\u96b6\u5c5e\u4e8e\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"BookStore"}),"\u5bf9\u8c61\uff0c\u800c\u65e0\u6cd5\u540c\u65f6\u96b6\u5c5e\u4e8e\u591a\u4e2a",(0,s.jsx)(n.code,{children:"BookStore"}),"\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u901a\u8fc7\u9006\u5411\u7684\u4e00\u5bf9\u591a\u5173\u8054",(0,s.jsx)(n.code,{children:"BookStore.books"}),"\u4fdd\u5b58\u6570\u636e\u7ed3\u6784\uff0c\u5c31\u662f\u5efa\u7acb\u4ece\u5f53\u524d",(0,s.jsx)(n.code,{children:"BookStore"}),"\u7236\u5bf9\u8c61\u5230\u53e6\u5916\u4e00\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684",(0,s.jsx)(n.code,{children:"Book"}),"\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\uff0c\n\u5982\u679c",(0,s.jsx)(n.code,{children:"Book"}),"\u5bf9\u8c61\u5df2\u7ecf\u96b6\u5c5e\u4e8e\u53e6\u5916\u4e00\u4e2a\u7236\u5bf9\u8c61\uff0c\u4f1a\u5bfc\u81f4\u5f53\u524d\u7236\u5bf9\u8c61\u4ece\u5176\u4ed6\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61\u3002\u6216\u8005\u8bf4\uff0c\u5b50\u5bf9\u8c61\u5728\u4e0d\u540c\u7236\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u4e86\u8fc1\u79fb\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u8fd9\u662f\u5f00\u53d1\u4eba\u5458\u9884\u6599\u4e4b\u4e2d\u7684\u884c\u4e3a\uff0c\u90a3\u81ea\u7136\u6ca1\u6709\u95ee\u9898\u3002\u4f46\u662f\uff0c\u5982\u679c\u8fd9\u5e76\u975e\u5f00\u53d1\u4eba\u5458\u9884\u6599\u4e2d\u7684\u884c\u4e3a\uff0c\u53ef\u80fd\u5bfc\u81f4\u65e0\u610f\u7684\u758f\u5ffd\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cJimmer\u91c7\u7528\u4fdd\u5b88\u7684\u7b56\u7565\uff0c\u7981\u6b62\u5b50\u5bf9\u8c61\u5728\u4e0d\u540c\u7236\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u4e86\u8fc1\u79fb\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6b64\u4f8b\u4e2d\uff0c\u4f01\u56fe\u8ba9",(0,s.jsx)(n.code,{children:"BookStore(MANNING)"}),"\u548c",(0,s.jsx)(n.code,{children:"Book(12)"}),"\u548c",(0,s.jsx)(n.code,{children:"Book(1)"}),"\u5173\u8054\u8d77\u6765\uff0c\nJimmer\u4ee5",(0,s.jsx)(n.code,{children:"QueryReason.TARGET_NOT_TRANSFERABLE"}),"\u4e3a\u7531\u6267\u884c\u989d\u5916\u7684\u67e5\u8be2\uff0c\u68c0\u67e5\u662f\u5426\u6709\u5b50\u5bf9\u8c61\u5728\u4e0d\u540c\u7236\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u4e86\u8fc1\u79fb\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Book(12)"}),"\u5df2\u7ecf\u96b6\u5c5e\u4e8e",(0,s.jsx)(n.code,{children:"BookStore(MANNING)"}),"\uff0c\u672a\u53d1\u751f\u8fc1\u79fb\uff0c\u6ca1\u95ee\u9898"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Book(1)"}),"\u5e76\u4e0d\u96b6\u5c5e\u4e8e",(0,s.jsx)(n.code,{children:"BookStore(MANNING)"}),"\uff0c\u800c\u96b6\u5c5e\u4e8e",(0,s.jsx)(n.code,{children:"BookStore(O'REILLY)"}),"\uff0c\u53d1\u751f\u4e86\u8fc1\u79fb\uff0c\u56e0\u6b64\u6700\u7ec8\u629b\u51fa\u5f02\u5e38\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u9ed8\u8ba4\u884c\u4e3a\u975e\u5e38\u4fdd\u5b88\uff0c\u867d\u7136\u907f\u514d\u4e86\u4e0d\u540c\u7236\u5bf9\u8c61\u5bf9\u5b50\u5bf9\u8c61\u7684\u62a2\u593a ",(0,s.jsx)(n.em,{children:"(\u5982\u679c\u5f00\u53d1\u4eba\u5458\u8ba4\u4e3a\u8fd9\u79cd\u65e0\u610f\u62a2\u593a\u5bf9\u4e1a\u52a1\u662f\u6709\u5bb3\u7684)"}),"\uff0c\n\u4f46\u5bfc\u81f4\u4e86\u989d\u5916\u7684\u67e5\u8be2\uff0c\u5e76\u672a\u5145\u5206\u53d1\u6325\u6570\u636e\u5e93\u672c\u8eab",(0,s.jsx)(n.code,{children:"UPSERT"}),"\u80fd\u529b\uff0c\u6027\u80fd\u4e0d\u4f73\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u8ba4\u4e3a\u66f4\u4f18\u7684\u6027\u80fd\u6bd4\u8fd9\u79cd\u4fdd\u5b88\u7684\u9632\u5fa1\u884c\u4e3a\u66f4\u91cd\u8981\uff0cJimmer\u63d0\u4f9b\u989d\u5916\u914d\u7f6e\uff0c\u6539\u53d8\u8fd9\u79cd\u884c\u4e3a\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\u4e0d\u52a0\u9650\u5236",children:"\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4e0d\u52a0\u9650\u5236"}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u6027\u80fd\u4f18\u5148\uff0c\u8981\u53d6\u6d88\u8fd9\u79cd\u9650\u5236\uff0c\u6709\u4e24\u79cd\u65b9\u6cd5"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4fdd\u5b58\u6307\u4ee4\u7ea7\u914d\u7f6e\uff0c\u53c8\u53ef\u5206\u4e3a\u4e24\u79cd"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7cbe\u786e\u914d\u7f6e\uff0c\u5bf9\u67d0\u4e2a\u5173\u8054\u653e\u5f00\u9650\u5236"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"BookStore store = ...\u7565...;\nsqlClient\n    .saveCommand(store)\n    // highlight-next-line\n    .setTargetTransferMode(\n        BookStoreProps.BOOKS, \n        TargetTransferMode.ALLOWED\n    )\n    .execute();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val store = BookStore {...\u7565...}\nsqlClient.save(store) {\n    // highlight-next-line\n    setTargetTransferMode(\n        BookStore::books, \n        TargetTransferMode.ALLOWED\n    )\n}\n"})})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u76f2\u76ee\u914d\u7f6e\uff0c\u5bf9\u6240\u6709\u5173\u8054\u653e\u5f00\u9650\u5236"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"BookStore store = ...\u7565...;\nsqlClient\n    .saveCommand(store)\n    // highlight-next-line\n    .setTargetTransferModeAll(\n        TargetTransferMode.ALLOWED\n    )\n    .execute();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val store = BookStore {...\u7565...}\nsqlClient.save(store) {\n    // highlight-next-line\n    setTargetTransferModeAll(\n        TargetTransferMode.ALLOWED\n    )\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u65e0\u8bba\u7cbe\u786e\u914d\u7f6e\uff0c\u8fd8\u662f\u76f2\u76ee\u914d\u7f6e\uff0c\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u90fd\u662f",(0,s.jsx)(n.code,{children:"TargetTransferMode"}),"\u679a\u4e3e\uff0c\u5177\u6709\u4e00\u4e0b\u4e09\u4e2a\u53d6\u503c"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ALLOWD"}),": \u5141\u8bb8\u5b50\u5bf9\u8c61\u8fc1\u79fb\uff0c\u5e76\u5c3d\u53ef\u80fd\u91c7\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,s.jsx)(n.code,{children:"UPSERT\u80fd\u529b"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOT_ALLOWED"}),": \u4e0d\u5141\u8bb8\u5b50\u5bf9\u8c61\u8fc1\u79fb\uff0c\u4ee5",(0,s.jsx)(n.code,{children:"QueryReason.TARGET_NOT_TRANSFERABLE"}),"\u4e3a\u7531\u53d1\u8d77\u800c\u5916\u67e5\u8be2\u52a0\u4ee5\u9a8c\u8bc1\u3002\n\u5982\u679c\u53d1\u751f\u4e86\u5b50\u5bf9\u8c61\u8fc1\u79fb\uff0c\u629b\u51fa\u5f02\u5e38"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AUTO"}),"(\u9ed8\u8ba4)\uff1a\u5f53\u524d\u914d\u7f6e\u65e0\u6548\uff0c\u53c2\u8003\u4f18\u5148\u7ea7\u66f4\u4f4e\u7684\u914d\u7f6e"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u7cbe\u786e\u914d\u7f6e\u800c\u8a00\uff0c\u8f6c\u800c\u53c2\u8003\u76f2\u76ee\u914d\u7f6e"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u76f2\u76ee\u914d\u7f6e\u800c\u8a00\uff0c\u8f6c\u800c\u53c2\u8003\u5168\u5c40\u914d\u7f6e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5168\u5c40\u914d\u7f6e\uff0c\u53c8\u53ef\u5206\u4e3a\u4e24\u79cd"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u57fa\u4e8eJimmer Api\u7684\u5168\u5c40\u914d\u7f6e"}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlCient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setTargetTransferable(true)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = sqlClient {\n    // highlight-next-line\n    setTargetTransferable(true)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"})})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u91c7\u7528Jimmer\u63d0\u4f9b\u7684spring-boot-starter\uff0c\u57fa\u4e8eSpring Boot\u7684\u5168\u5c40\u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5",(0,s.jsx)(n.code,{children:"application.yml"}),"\u6587\u4ef6\u4e3a\u4f8b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",metastring:'title = "application.yml"',children:"jimmer:\n    // highlight-next-line\n    target-transferable: true\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u65e6\u901a\u8fc7\u4ee5\u4e0a\u4efb\u4f55\u914d\u7f6e\u624b\u6bb5\u8ba9Jimmer\u8ba4\u4e3a\u65e0\u9700\u5bf9",(0,s.jsx)(n.code,{children:"BookStore.books"}),"\u5173\u8054\u7981\u6b62\u5b50\u5bf9\u8c61\u8fc1\u79fb\uff0c\u4fee\u6539\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,s.jsxs)(a.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",metastring:'title="Book.java"',children:"public interface Book {\n\n    @ManyToOne\n    @Nullable\n    // \u4e8e\u672c\u6587\u8ba8\u8bba\u5185\u5bb9\u65e0\u5173\uff0c\u8bf7\u8bfb\u8005\u5148\u884c\u5ffd\u7565\n    // highlight-next-line\n    @OnDissociate(DissociateAction.SET_NULL)\n    BookStore store();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",metastring:'title="Book.kt"',children:"public interface Book {\n\n    @ManyToOne\n    // \u4e8e\u672c\u6587\u8ba8\u8bba\u5185\u5bb9\u65e0\u5173\uff0c\u8bf7\u8bfb\u8005\u5148\u884c\u5ffd\u7565\n    // highlight-next-line\n    @OnDissociate(DissociateAction.SET_NULL)\n    val store: BookStore?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"\u91cd\u65b0\u6267\u884c\u4ee3\u7801\uff0c\u5c06\u4f1a\u751f\u6210\u5982\u4e0bSQL"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4fdd\u5b58\u6839\u5bf9\u8c61"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"merge into BOOK_STORE(\n    NAME\n) key(NAME) values(?)\n/* batch-0: [MANNING] */\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5efa\u7acb\u6839\u5bf9\u8c61\u548c\u5b50\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"merge into BOOK(\n    ID, STORE_ID\n) key(ID) values(?, ?)\n/* batch-0: [12, 2] */\n/* batch-1: [1, 2] */\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u65ad\u5f00\u6839\u5bf9\u8c61\u548c\u4e0d\u518d\u9700\u8981\u7684\u5b50\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:"update BOOK\nset\n    STORE_ID = null\nwhere\n    STORE_ID = ?\n    and\n    not (\n        ID = any(?)\n    )\n/* batch-0: [2, [12, 1]] */\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u5411\u7528\u6237\u5c55\u793a\u6027\u80fd\u4f18\u5148\u7684\u573a\u666f\uff0c\u9644\u5e26\u4f8b\u5b50\n",(0,s.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/java/save-command",children:"jimmer-examples/java/save-command"}),"\n\u548c\n",(0,s.jsx)(n.a,{href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/save-command-kt",children:"jimmer-examples/kotlin/save-command-kt"}),"\n\u5747\u5229\u7528\u5168\u5c40\u914d\u7f6e\u5141\u8bb8\u4e86\u5b50\u5bf9\u8c61\u8fc1\u79fb\u3002"]})})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>a});l(96540);var r=l(34164);const s={tabItem:"tabItem_Ymn6"};var i=l(74848);function a(e){let{children:n,hidden:l,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>f});var r=l(96540),s=l(34164),i=l(23104),a=l(56347),o=l(205),t=l(57485),d=l(31682),c=l(70679);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:l}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:l,attributes:r,default:s}}=e;return{value:n,label:l,attributes:r,default:s}}))}(l);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function x(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:l}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,t.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function p(e){const{defaultValue:n,queryString:l=!1,groupId:s}=e,i=u(e),[a,t]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=l.find((e=>e.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,h]=j({queryString:l,groupId:s}),[p,m]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,c.Dv)(l);return[s,(0,r.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:s}),g=(()=>{const e=d??p;return x({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&t(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);t(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=l(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=l(74848);function b(e){let{className:n,block:l,selectedValue:r,selectValue:a,tabValues:o}=e;const t=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const n=e.currentTarget,l=t.indexOf(n),s=o[l].value;s!==r&&(d(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=t.indexOf(e.currentTarget)+1;n=t[l]??t[0];break}case"ArrowLeft":{const l=t.indexOf(e.currentTarget)-1;n=t[l]??t[t.length-1];break}}n?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":l},n),children:o.map((e=>{let{value:n,label:l,attributes:i}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>t.push(e),onKeyDown:h,onClick:c,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:l??n},n)}))})}function T(e){let{lazy:n,children:l,selectedValue:i}=e;const a=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=p(e);return(0,N.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,N.jsx)(b,{...n,...e}),(0,N.jsx)(T,{...n,...e})]})}function f(e){const n=(0,m.A)();return(0,N.jsx)(v,{...e,children:h(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>a,x:()=>o});var r=l(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);