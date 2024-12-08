"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1375],{53318:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>j,contentTitle:()=>x,default:()=>m,frontMatter:()=>h,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"mutation/save-command/id-checking","title":"Associated Id Checking","description":"Basic Concepts","source":"@site/docs/mutation/save-command/id-checking.mdx","sourceDirName":"mutation/save-command","slug":"/mutation/save-command/id-checking","permalink":"/jimmer-doc/docs/mutation/save-command/id-checking","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/id-checking.mdx","tags":[],"version":"current","lastUpdatedAt":1733618994000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"Associated Id Checking"},"sidebar":"tutorialSidebar","previous":{"title":"Constraint Violation Error Handling","permalink":"/jimmer-doc/docs/mutation/save-command/investigation"},"next":{"title":"Optimistic/Pessimistic Lock","permalink":"/jimmer-doc/docs/mutation/save-command/lock"}}');var t=i(74848),r=i(28453),l=i(11470),o=i(19365),a=i(64087),c=i(46845),d=i(74400);const h={sidebar_position:8,title:"Associated Id Checking"},x=void 0,j={},u=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"For Short Associations Only",id:"for-short-associations-only",level:3},{value:"Concept Definition: Target Foreign Key",id:"concept-definition-target-foreign-key",level:3},{value:"Checking Mechanism",id:"checking-mechanism",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Global Configuration",id:"global-configuration",level:3},{value:"Command-Level Configuration",id:"command-level-configuration",level:3}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,t.jsx)(n.h3,{id:"for-short-associations-only",children:"For Short Associations Only"}),"\n",(0,t.jsxs)(n.p,{children:["Association id checking is a feature that only applies to ",(0,t.jsx)(d.l,{buttonText:"short associations",children:(0,t.jsx)(a.M,{})}),", and is meaningless for ",(0,t.jsx)(d.l,{buttonText:"long associations",children:(0,t.jsx)(c.Y,{})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"As we learned before, save commands can persist arbitrary data shapes, and any object can further hold associated objects."}),"\n",(0,t.jsx)(n.p,{children:"If the id of an associated object is specified, but the object it represents does not exist in the database, how does Jimmer handle this scenario?"}),"\n",(0,t.jsxs)(n.p,{children:["First, for ",(0,t.jsx)(d.l,{buttonText:"long associations",children:(0,t.jsx)(c.Y,{})}),", Jimmer will first create the non-existing associated object, then establish the association between the current object and the new associated object. For example:"]}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'sqlClient.update(\n    Immutables.createBook(draft -> {\n        draft.setId(3L);\n        draft.addIntoAuthors(author -> author.setId(1L)); // \u2776\n        draft.addIntoAuthors(author -> author.setId(2L)); // \u2777\n        draft.addIntoAuthors(author -> { // \u2778\n            author.setId(1000L); \n            author.setFirstName("Svetlana");\n            author.setLastName("Isakova");\n            author.setGender(Gender.FEMALE);\n        });\n    })\n);\n'})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:'sqlClient.update(\n    Book {\n        id = 3L\n        authors().addBy { id = 1L } // \u2776\n        authors().addBy { id = 2L } // \u2777\n        authors().addBy { // \u2778\n            id = 1000L \n            firstName = "Svetlana"\n            lastName = "Isakova"\n            gender = Gender.FEMALE\n        }\n    }\n)\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"This example mixes long associations and short associations."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2776 \u2777 They are ",(0,t.jsx)(d.l,{buttonText:"short associations",children:(0,t.jsx)(a.M,{})}),", specifying invalid ids will lead to errors."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2778 This is a ",(0,t.jsx)(d.l,{buttonText:"long association",children:(0,t.jsx)(c.Y,{})}),", even if an invalid id is specified, Jimmer will automatically create the associated object."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"\n// Check if associated object exists\nselect\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME\nfrom AUTHOR tb_1_\nwhere\n    tb_1_.ID = ? /* 1000 */\n\n// Associated object does not exist, create it\n// highlight-next-line  \ninsert into AUTHOR(ID, FIRST_NAME, LAST_NAME, GENDER)\nvalues\n    (? /* 1000 */, ? /* Svetlana */, ? /* Isakova */, ? /* F */)\n\n// Query current `Book` and `Author` mapping\nselect\n    AUTHOR_ID\nfrom BOOK_AUTHOR_MAPPING \nwhere\n    BOOK_ID = ? /* 3 */\n\n// Map current `Book` with the newly created `Author`  \ninsert into BOOK_AUTHOR_MAPPING(BOOK_ID, AUTHOR_ID)\nvalues\n    (? /* 3 */, ? /* 1000 */)\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Therefore, ",(0,t.jsx)(n.code,{children:"association id checking"})," is a topic that only makes sense for ",(0,t.jsx)(d.l,{buttonText:"short associations",children:(0,t.jsx)(a.M,{})}),". In the following examples of this article, all discussions are about ",(0,t.jsx)(d.l,{buttonText:"short associations",children:(0,t.jsx)(a.M,{})}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"concept-definition-target-foreign-key",children:"Concept Definition: Target Foreign Key"}),"\n",(0,t.jsx)(n.p,{children:"To discuss the id checking problem of short associations, we first define a concept for associated properties: the target foreign key."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"For associations based on join tables, the foreign key in the join table that points to the target entity table is the target foreign key."}),"\n",(0,t.jsx)(n.p,{children:"For examples:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The target foreign key for ",(0,t.jsx)(n.code,{children:"Book.authors"})," is the ",(0,t.jsx)(n.code,{children:"AUTHOR_ID"})," field in the ",(0,t.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"})," table."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The target foreign key for ",(0,t.jsx)(n.code,{children:"Author.books"})," is the ",(0,t.jsx)(n.code,{children:"BOOK_ID"})," field in the ",(0,t.jsx)(n.code,{children:"BOOK_AUTHOR_MAPPING"})," table."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For associations based on foreign keys, whether the foreign key is fake or not (please refer to ",(0,t.jsx)(n.a,{href:"../../mapping/base/foreignkey",children:"Fake Foreign Keys"}),"), the foreign key of the association itself is the target foreign key."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.p,{children:["The target foreign key for ",(0,t.jsx)(n.code,{children:"Book.store"})," is the ",(0,t.jsx)(n.code,{children:"STORE_ID"})," field in the ",(0,t.jsx)(n.code,{children:"BOOK"})," table."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If neither of the above two cases apply, the association is considered to not have a target foreign key."}),"\n",(0,t.jsxs)(n.p,{children:["Properties without a target foreign key are the ones with ",(0,t.jsx)(n.code,{children:"mappedBy"})," specified for one-to-one or one-to-many mappings. That is, properties decorated with ",(0,t.jsx)(n.code,{children:'@OneToOne(mappedBy = "...")'})," or ",(0,t.jsx)(n.code,{children:'@OneToMany(mappedBy="...")'}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsxs)(n.p,{children:["There is no target foreign key for ",(0,t.jsx)(n.code,{children:"BookStore.books"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Summary"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Association"}),(0,t.jsx)(n.th,{children:"Column of target foreign key"}),(0,t.jsx)(n.th,{children:"Table of target foreign key"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Book.authors"})}),(0,t.jsx)(n.td,{children:"AUTHOR_ID"}),(0,t.jsx)(n.td,{children:"BOOK_AUTHOR_MAPPING"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Author.books"})}),(0,t.jsx)(n.td,{children:"BOOK_ID"}),(0,t.jsx)(n.td,{children:"BOOK_AUTHOR_MAPPING"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Book.store"})}),(0,t.jsx)(n.td,{children:"STORE_ID"}),(0,t.jsx)(n.td,{children:"BOOK"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"BookStore"}),".books"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"NA"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"NA"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"checking-mechanism",children:"Checking Mechanism"}),"\n",(0,t.jsx)(n.p,{children:"Users can configure whether to check the ids of short associated objects."}),"\n",(0,t.jsx)(n.p,{children:"Here, let's not discuss how to configure for now, but look at whether enabling this configuration has any impact on Jimmer's behavior."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Properties without target foreign keys"}),"\n",(0,t.jsxs)(n.p,{children:["Take ",(0,t.jsx)(n.code,{children:"BookStore.books"})," as an example. The code to save a short association is:"]}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"sqlClient.update(\n        Immutables.createBookStore(draft -> {\n            draft.setId(2L);\n            draft.addIntoBooks(book -> book.setId(8L));\n            draft.addIntoBooks(book -> book.setId(9L));\n            draft.addIntoBooks(book -> book.setId(1000L));\n            draft.addIntoBooks(book -> book.setId(1001L));\n        })\n);\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"sqlClient.update(\n    BookStore {\n        id = 2L\n        books().addBy { id = 8L }\n        books().addBy { id = 9L }  \n        books().addBy { id = 1000L }\n        books().addBy { id = 1001L }\n    }\n);\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Without checking"}),"\n",(0,t.jsx)(n.p,{children:"Properties without a target foreign key will automatically ignore associated objects with illegal ids. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"update book set store_id = 2 where id in(1, 2, 1000, 10001)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"1000"})," and ",(0,t.jsx)(n.code,{children:"10001"})," are ids that do not exist in the database, this update statement will only affect the two existing records, and the two non-existing records will be naturally ignored."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"With checking"}),"\n",(0,t.jsx)(n.p,{children:"Jimmer will execute the following query to check all short associated ids:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_1_.ID \nfrom BOOK tb_1_\nwhere\n    tb_1_.ID in (\n        ? /* 1 */, ? /* 2 */, ? /* 1000 */, ? /* 1001 */\n    )\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If ids ",(0,t.jsx)(n.code,{children:"1000"})," and ",(0,t.jsx)(n.code,{children:"1001"})," do not exist in the database, the following exception will be thrown:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Save error caused by the path: "<root>.books": Illegal ids: [1000, 1001]\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Properties with target foreign keys"}),"\n",(0,t.jsxs)(n.p,{children:["Take ",(0,t.jsx)(n.code,{children:"Book.store"})," as an example. The code to save a short association is:"]}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"sqlClient.update(\n        Immutables.createBook(draft -> {\n            draft.setId(10L);\n            draft.applyStore(store -> store.setId(321L));\n        })\n);\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"sqlClient.update(\n    Book {\n        id = 10L\n        store { id = 321L }\n    }\n);\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Assume id ",(0,t.jsx)(n.code,{children:"321"})," does not exist for BookStore in the database."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Without checking"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If the foreign key is fake, there is no real foreign key constraint in the database, and Jimmer will allow ",(0,t.jsx)(n.code,{children:"BOOK.STORE_ID"})," to be modified to an illegal value."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the foreign key is real, there is a real foreign key constraint in the database, and the underlying database will throw an error eventually."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"With checking"}),"\n",(0,t.jsx)(n.p,{children:"Regardless of whether the foreign key is fake or not, Jimmer will execute the following query to check the short associated id:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"select\n    tb_1_.ID \nfrom BOOK_STORE tb_1_\nwhere\n    tb_1_.ID in (\n        ? /* 321 */\n    ) \n"})}),"\n",(0,t.jsx)(n.p,{children:"Once the query returns no data, the following exception will be thrown:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Save error caused by the path: "<root>.store": Illegal ids: [321]\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Summary"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Real target foreign key"}),(0,t.jsx)(n.th,{children:"Fake target foreign key"}),(0,t.jsx)(n.th,{children:"No target foreign keys"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Without checking"}),(0,t.jsx)(n.td,{children:"Error from database"}),(0,t.jsx)(n.td,{children:"Save wrong data"}),(0,t.jsx)(n.td,{children:"Ignore invalid operations"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"With checking"}),(0,t.jsx)(n.td,{children:"Error from Jimmer"}),(0,t.jsx)(n.td,{children:"Error from Jimmer"}),(0,t.jsx)(n.td,{children:"Error from Jimmer"})]})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"As you can see, for properties with a real target foreign key, exceptions will be thrown regardless of whether Jimmer's short association id checking is enabled."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Without checking, the database throws the error."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Advantage: Avoid an extra SQL query"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Disadvantage: Less control over the exception message and type."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"With checking, Jimmer throws the error."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Advantage: clear exception message and type."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Disadvantage: An extra SQL query."}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["It is recommended to turn on this checking mechanism for all properties if your project does not have extreme performance requirements, in order to get ideal exception information ",(0,t.jsx)(n.em,{children:"(we will introduce how to configure it later)"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Users can configure whether to check associated ids for properties. There are global configuration and command-level configuration."}),"\n",(0,t.jsx)(n.h3,{id:"global-configuration",children:"Global Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The global configuration provides three levels:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"NONE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"FAKE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ALL"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The behaviors are:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Real target foreign key"}),(0,t.jsx)(n.th,{children:"Fake target foreign key"}),(0,t.jsx)(n.th,{children:"No target foreign keys"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"NONE"}),(0,t.jsx)(n.td,{children:"No checking"}),(0,t.jsx)(n.td,{children:"No checking"}),(0,t.jsx)(n.td,{children:"No checking"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FAKE"}),(0,t.jsx)(n.td,{children:"No checking"}),(0,t.jsx)(n.td,{children:"Checking"}),(0,t.jsx)(n.td,{children:"Checking"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ALL"}),(0,t.jsx)(n.td,{children:"Checking"}),(0,t.jsx)(n.td,{children:"Checking"}),(0,t.jsx)(n.td,{children:"Checking"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"There are two ways to configure globally:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Via Spring Boot Starter configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Modify ",(0,t.jsx)(n.code,{children:"application.yml"})," ",(0,t.jsxs)(n.em,{children:["(or ",(0,t.jsx)(n.code,{children:"application.properties"}),")"]})," and add the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jimmer:\n    id-only-target-checking-level: ALL\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Via low-level API"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setIdOnlyTargetCheckingLevel(IdOnlyTargetCheckingLevel.ALL)\n    ...other configurations omitted...\n    .build();\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val sqlClient = newKSqlClient {\n    setIdOnlyTargetCheckingLevel(IdOnlyTargetCheckingLevel.ALL) \n    ...other configurations omitted...\n}\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"command-level-configuration",children:"Command-Level Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The command-level configuration can override the global configuration, but only affects the current save command."}),"\n",(0,t.jsx)(n.p,{children:"There are three features for command-level configuration:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Explicitly specify properties to check"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Book book = ...\nsqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line  \n    .setAutoIdOnlyTargetChecking(BookProps.STORE)\n    // highlight-next-line\n    .setAutoIdOnlyTargetChecking(BookProps.AUTHORS)\n    .execute();\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val book = ...\nsqlClient.save(book) {\n    // highlight-next-line\n    setAutoIdOnlyTargetChecking(Book::store) \n    // highlight-next-line  \n    setAutoIdOnlyTargetChecking(Book::authors)\n}\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"If the global configuration already enables checking, no need to adjust the save command like this."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Specify all properties to check"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Book book = ...\nsqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setAutoIdOnlyTargetCheckingAll()\n    .execute();\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val book = ...\nsqlClient.save(book) {\n    // highlight-next-line\n    setAutoIdOnlyTargetCheckingAll()\n}\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"If the global configuration already enables checking, no need to adjust the save command like this."})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Negative configuration, explicitly specify properties to not check"}),"\n",(0,t.jsxs)(l.A,{groupId:"language",children:[(0,t.jsx)(o.A,{value:"java",label:"Java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"Book book = ...\nsqlClient\n    .getEntities()\n    .saveCommand(book)\n    .setAutoIdOnlyTargetCheckingAll()\n    // highlight-next-line\n    .setAutoIdOnlyTargetChecking(BookProps.STORE, false)\n    .execute();\n"})})}),(0,t.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",children:"val book = ...\nsqlClient.save(book) {\n    setAutoIdOnlyTargetCheckingAll()\n    // highlight-next-line\n    setAutoIdOnlyTargetChecking(Book::authors, false)\n}\n"})})})]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},46845:(e,n,i)=>{i.d(n,{Y:()=>B});var s=i(96540),t=i(67733),r=i(67512),l=i(43581),o=i(80421),a=i(1489),c=i(71543),d=i(57416),h=i(53881),x=i(88933),j=i(46780),u=i(19591),g=i(618),m=i(73231),p=i(30854),k=i(16718),f=i(4671),b=i(67034),A=i(63051),v=i(15993),y=i(28968),I=i(13407),C=i(46831),w=i(44586),T=i(82470),_=i(16712),O=i(74848);const B=(0,s.memo)((()=>{const{i18n:e}=(0,w.A)(),n=(0,_.o)(),i=(0,s.useMemo)((()=>n?N:S),[n]),B=(0,s.useMemo)((()=>{const e=new Map;for(const n of i)e.set(n.id,n);return e}),[i]),q=(0,s.useMemo)((()=>n?L:M),[n]),E=(0,s.useMemo)((()=>{const e=new Map;for(const n of q)e.set(n.id,n);return e}),[q]),[F,R]=(0,T.e)((()=>({userId:1,province:B.get(1).province,city:B.get(1).city,address:B.get(1).address,items:[{__rowId:1,productId:1,name:E.get(1).name,quantity:2},{__rowId:2,productId:10,name:E.get(10).name,quantity:1}]}))),D=(0,s.useMemo)((()=>Math.max(...F.items.map((e=>e.__rowId)))+1),[F]),K=(0,s.useCallback)((e=>{const n=B.get(parseInt(e.target.value));void 0!==n&&R((e=>{e.userId=n.id,e.province=n.province,e.city=n.city,e.address=n.address}))}),[R,B]),J=(0,s.useCallback)((e=>{R((n=>{n.province=e.target.value}))}),[R]),U=(0,s.useCallback)((e=>{R((n=>{n.city=e.target.value}))}),[R]),W=(0,s.useCallback)((e=>{R((n=>{n.address=e.target.value}))}),[R]),z=(0,s.useCallback)(((e,n)=>{R((i=>{for(const s of i.items)if(s.__rowId===n){s.productId=parseInt(e.target.value),P(i);break}}))}),[R]),G=(0,s.useCallback)(((e,n)=>{R((i=>{for(const s of i.items)if(s.__rowId===n){s.quantity=parseInt(e.target.value),P(i);break}}))}),[R]),H=(0,s.useCallback)((e=>{R((n=>{for(let i=n.items.length-1;i>=0;--i)if(n.items[i].__rowId===e){n.items.splice(i,1);break}}))}),[R]),Q=(0,s.useCallback)((()=>{R((e=>{e.items.push({__rowId:D,quantity:1})}))}),[R,D]),[V,Y]=(0,s.useState)(!1),X=(0,s.useCallback)((()=>{Y(!0)}),[]),Z=(0,s.useCallback)((()=>{Y(!1)}),[]);return(0,O.jsxs)(d.A,{elevation:3,style:{padding:"1.5rem"},children:[(0,O.jsx)(t.A,{component:"form",noValidate:!0,autoComplete:"off",children:(0,O.jsxs)(a.Ay,{container:!0,spacing:2,children:[(0,O.jsx)(a.Ay,{item:!0,xs:4,children:(0,O.jsx)(l.A,{fullWidth:!0,select:!0,label:n?"\u8d2d\u4e70\u4eba":"Purchaser",value:F.userId,onChange:K,children:i.map((e=>(0,O.jsx)(o.A,{value:e.id,children:e.nickName},e.id)))})}),(0,O.jsx)(a.Ay,{item:!0,xs:4,children:(0,O.jsx)(l.A,{fullWidth:!0,label:n?"\u7701\u4efd":"Province",value:F.province,onChange:J})}),(0,O.jsx)(a.Ay,{item:!0,xs:4,children:(0,O.jsx)(l.A,{fullWidth:!0,label:n?"\u57ce\u5e02":"City",value:F.city,onChange:U})}),(0,O.jsx)(a.Ay,{item:!0,xs:12,children:(0,O.jsx)(l.A,{fullWidth:!0,label:n?"\u5730\u5740":"Address",value:F.address,onChange:W})}),(0,O.jsxs)(a.Ay,{item:!0,xs:12,children:[(0,O.jsx)(c.A,{textAlign:"left",children:n?"\u8ba2\u5355\u660e\u7ec6":"Order Items"}),(0,O.jsx)(u.A,{component:d.A,children:(0,O.jsxs)(h.A,{size:"small",children:[(0,O.jsx)(g.A,{children:(0,O.jsxs)(m.A,{children:[(0,O.jsx)(j.A,{children:n?"\u5546\u54c1":"Commodity"}),(0,O.jsx)(j.A,{children:n?"\u6570\u91cf":"Quantity"}),(0,O.jsx)(j.A,{children:n?"\u5355\u4ef7":"Unit price"}),(0,O.jsx)(j.A,{children:n?"\u660e\u7ec6\u4ef7":"Item price"}),(0,O.jsx)(j.A,{children:n?"\u5220\u9664":"Delete"})]})}),(0,O.jsx)(x.A,{children:F.items.map((e=>{const n=void 0!==e.productId?E.get(e.productId):void 0;return(0,O.jsxs)(m.A,{children:[(0,O.jsx)(j.A,{children:(0,O.jsx)(l.A,{select:!0,value:n?.id,variant:"standard",size:"small",onChange:n=>{z(n,e.__rowId)},children:q.map((e=>(0,O.jsx)(o.A,{value:e.id,children:e.name},e.id)))})}),(0,O.jsx)(j.A,{children:(0,O.jsx)(l.A,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:n=>{G(n,e.__rowId)}})}),(0,O.jsx)(j.A,{children:n?.price}),(0,O.jsx)(j.A,{children:void 0!==n&&n.price*e.quantity}),(0,O.jsx)(j.A,{children:(0,O.jsx)(f.A,{onClick:()=>H(e.__rowId),children:(0,O.jsx)(b.A,{})})})]},e.__rowId)}))}),(0,O.jsx)(p.A,{children:(0,O.jsx)(m.A,{children:(0,O.jsx)(j.A,{colSpan:5,children:(0,O.jsxs)(r.A,{onClick:Q,children:[(0,O.jsx)(k.A,{}),n?"\u6dfb\u52a0":"Add"]})})})})]})})]}),(0,O.jsxs)(a.Ay,{item:!0,xs:12,children:[n?"\u603b\u989d":"Total price",":",F.items.filter((e=>void 0!==e.productId&&"number"==typeof e.quantity)).map((e=>E.get(e.productId).price*e.quantity)).reduce(((e,n)=>e+n),0)]}),(0,O.jsx)(a.Ay,{item:!0,xs:12,children:(0,O.jsx)(r.A,{variant:"contained",onClick:X,children:n?"\u63d0\u4ea4":"Submit"})})]})}),(0,O.jsxs)(A.A,{open:V,onClose:Z,children:[(0,O.jsx)(C.A,{children:n?"\u4fe1\u606f":"Info"}),(0,O.jsx)(y.A,{children:(0,O.jsx)(I.A,{children:n?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,O.jsx)(v.A,{children:(0,O.jsx)(r.A,{onClick:Z,children:n?"\u5173\u95ed":"Close"})})]})]})})),N=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],S=[{id:1,nickName:"Schneewittchen",province:"Berlin",city:"Prenzlauer Berg",address:"Brandenburgische Stra\xdfe 9, Prenzlauer Berg, Berlin, Germany"},{id:2,nickName:"Cinderella",province:"Basse-Normandie",city:"Lisieux",address:"20 rue L\xe9on Dierx, Lisieux, Basse-Normandie, France"},{id:3,nickName:"Nuwa",province:"ShanXi",city:"Taiyuan",address:"Qian Feng Nan Lu 99hao, Taiyuan, ShanXi, China"},{id:4,nickName:"Pinocchio",province:"Palazzo Pignano",city:"Cremona",address:"Via Giovanni Amendola 134, Palazzo Pignano, Cremona, Italy"}],L=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}],M=[{id:1,name:"Timeless Vitamin C Plus E 10 Percent Ferulic Acid Serum Serum Unisex 1 oz",price:14.69},{id:2,name:"Dockers Men's Tiller Boat Shoe",price:52.41},{id:3,name:"Paxcoo 124 Skeins Embroidery Floss Cross Stitch Thread with Needles",price:29.99},{id:4,name:"Michael Kors Crossbody",price:70.6},{id:5,name:"Crocs unisex-child Classic Graphic Clog",price:34.99},{id:6,name:"Timex Time Machines Digital 35mm Watch",price:28.95},{id:7,name:"Scalex Mite & Lice Spray for Birds, 8 oz.",price:14.75},{id:8,name:"Under Armour Men's Storm Liner",price:13.03},{id:9,name:"Nike Women's Pro 3\" Training Shorts",price:35.86},{id:10,name:"Olaplex No. 4 Bond Maintenance Shampoo",price:30}];function P(e){const n=e.items,i=new Map;for(let s=0;s<n.length;s++){const e=n[s];if("number"!=typeof e.quantity)e.quantity=1;else if(e.quantity<1){n.splice(s--,1);continue}if(void 0===e.productId)continue;const t=i.get(e.productId);void 0===t?i.set(e.productId,e):(t.quantity+=e.quantity,n.splice(s--,1))}}},64087:(e,n,i)=>{i.d(n,{M:()=>f});var s=i(44586),t=i(31729),r=i(48440),l=i(80421),o=i(57416),a=i(18441),c=i(96125),d=i(43581),h=i(63051),x=i(46831),j=i(28968),u=i(15993),g=i(13407),m=i(67512),p=i(96540),k=i(74848);const f=(0,p.memo)((()=>{const[e,n]=(0,p.useState)((()=>({name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}))),i=(0,p.useCallback)((e=>{n((n=>({...n,name:e.target.value})))}),[]),f=(0,p.useCallback)((e=>{n((n=>({...n,edition:e.target.valueAsNumber})))}),[]),b=(0,p.useCallback)((e=>{n((n=>({...n,price:e.target.valueAsNumber})))}),[]),A=(0,p.useCallback)((e=>{let i;const s=e.target.value;i="string"==typeof s?parseInt(s):s,-1===i&&(i=void 0),n((e=>({...e,storeId:i})))}),[]),v=(0,p.useCallback)((e=>{let i=[];console.log(e.target.value);const s=e.target.value;i="string"==typeof s?s.split(",").map((e=>parseInt(e))):s,n((e=>({...e,authorIds:i})))}),[]),{i18n:y}=(0,s.A)(),I=(0,p.useMemo)((()=>"zh"==y.currentLocale||"zh_cn"==y.currentLocale||"zh_CN"==y.currentLocale),[y.currentLocale]),[C,w]=(0,p.useState)(!1),T=(0,p.useCallback)((()=>{w(!0)}),[]),_=(0,p.useCallback)((()=>{w(!1)}),[]);return(0,k.jsxs)(o.A,{elevation:3,style:{padding:"1.5rem",width:500},children:[(0,k.jsxs)(c.A,{spacing:2,children:[(0,k.jsx)("h1",{children:"Book Form"}),(0,k.jsx)(d.A,{label:"Name",value:e.name,onChange:i,error:""===e.name,helperText:""===e.name?"Name is required":""}),(0,k.jsx)(d.A,{label:"Edition",type:"number",value:e.edition,onChange:f}),(0,k.jsx)(d.A,{label:"Price",type:"number",value:e.price,onChange:b}),(0,k.jsxs)(t.A,{fullWidth:!0,children:[(0,k.jsx)(r.A,{id:"store-select-label",children:"Store"}),(0,k.jsxs)(a.A,{labelId:"store-select-label",label:"Authors",value:e.storeId,onChange:A,children:[(0,k.jsx)(l.A,{value:-1,children:"--NONE--"}),(0,k.jsx)(l.A,{value:1,children:"O'REILLY"}),(0,k.jsx)(l.A,{value:2,children:"MANNING"})]})]}),(0,k.jsxs)(t.A,{fullWidth:!0,children:[(0,k.jsx)(r.A,{id:"author-multi-select-label",children:"Authors"}),(0,k.jsxs)(a.A,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:e.authorIds,onChange:v,children:[(0,k.jsx)(l.A,{value:1,children:"Eve Procello"}),(0,k.jsx)(l.A,{value:2,children:"Alex Banks"}),(0,k.jsx)(l.A,{value:3,children:"Dan Vanderkam"}),(0,k.jsx)(l.A,{value:4,children:"Boris Cherny"}),(0,k.jsx)(l.A,{value:5,children:"Samer Buna"})]})]}),(0,k.jsx)(t.A,{children:(0,k.jsx)(m.A,{onClick:T,variant:"contained",children:I?"\u63d0\u4ea4":"Submit"})})]}),(0,k.jsxs)(h.A,{open:C,onClose:_,children:[(0,k.jsx)(x.A,{children:I?"\u4fe1\u606f":"Info"}),(0,k.jsx)(j.A,{children:(0,k.jsx)(g.A,{children:I?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect"})}),(0,k.jsx)(u.A,{children:(0,k.jsx)(m.A,{onClick:_,children:"\u5173\u95ed"})})]})]})}))},66971:(e,n,i)=>{i.d(n,{a:()=>g});var s=i(96540),t=i(72774),r=i(63051),l=i(28968),o=i(48875),a=i(44676),c=i(47859),d=i(4671),h=i(99343),x=i(7324),j=i(39781),u=i(74848);const g=(0,s.memo)((e=>{let{open:n,fullScreen:i=!1,title:o,maxWidth:g="md",onClose:p,children:k}=e;const[f,b]=(0,s.useState)(i),A=(0,s.useCallback)((()=>{b((e=>!e))}),[]);return(0,u.jsxs)(r.A,{open:n,onClose:p,fullScreen:f,TransitionComponent:m,maxWidth:g,children:[(0,u.jsx)(t.A,{sx:{position:"relative"},children:(0,u.jsxs)(a.A,{children:[(0,u.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:o}),(0,u.jsx)(d.A,{onClick:A,style:{color:"white"},children:f?(0,u.jsx)(x.A,{}):(0,u.jsx)(h.A,{})}),(0,u.jsx)(d.A,{"aria-label":"close",onClick:p,style:{color:"white"},children:(0,u.jsx)(j.A,{})})]})}),(0,u.jsx)(l.A,{children:k})]})})),m=s.forwardRef((function(e,n){return(0,u.jsx)(o.A,{direction:"up",ref:n,...e})}))},74400:(e,n,i)=>{i.d(n,{l:()=>o});var s=i(96540),t=i(67512),r=i(66971),l=i(74848);const o=(0,s.memo)((e=>{let{buttonText:n,fullScreen:i=!1,title:o=n,variant:a="outlined",large:c=!1,maxWidth:d,useOriginalText:h=!0,children:x}=e;const[j,u]=(0,s.useState)(!1),g=(0,s.useCallback)((e=>{u(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),m=(0,s.useCallback)((()=>{u(!1)}),[]),p=h?{textTransform:"none"}:{};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.A,{"data-is-view-more-button":"true",onClick:g,variant:a,size:c?"large":"small",style:p,children:n}),(0,l.jsx)(r.a,{open:j,onClose:m,title:o,maxWidth:d,fullScreen:i,children:x})]})}))},16712:(e,n,i)=>{i.d(n,{o:()=>t});var s=i(44586);function t(){const{i18n:e}=(0,s.A)(),n=e.currentLocale;return"zh"===n||"zh_cn"===n||"zh_CN"==n}}}]);