"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:b,className:k}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[_,T]=(0,r.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==_&&h.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==_&&(O(t),T(a),null!=b&&y(b,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:e=>w.push(e),onKeyDown:I,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":_===t})}),n??t)}))),n?(0,r.cloneElement)(N.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==_})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},78338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={sidebar_position:4,title:"4.4 \u52a8\u6001\u8868\u8fde\u63a5"},s=void 0,u={unversionedId:"showcase/where/dynamic-join",id:"showcase/where/dynamic-join",title:"4.4 \u52a8\u6001\u8868\u8fde\u63a5",description:"\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/dynamic-join.mdx",sourceDirName:"showcase/where",slug:"/showcase/where/dynamic-join",permalink:"/jimmer-doc/zh/docs/showcase/where/dynamic-join",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/dynamic-join.mdx",tags:[],version:"current",lastUpdatedAt:1714914925,formattedLastUpdatedAt:"2024\u5e745\u67085\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"4.4 \u52a8\u6001\u8868\u8fde\u63a5"},sidebar:"tutorialSidebar",previous:{title:"4.3 \u5173\u8054id",permalink:"/jimmer-doc/zh/docs/showcase/where/associated-id"},next:{title:"4.5 \u9690\u5f0f\u5b50\u67e5\u8be2",permalink:"/jimmer-doc/zh/docs/showcase/where/implicit-subquery"}},p={},c=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u5404\u79cd\u60c5\u51b5",id:"\u5404\u79cd\u60c5\u51b5",level:2},{value:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u4e0d\u751f\u6548",id:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u4e0d\u751f\u6548",level:3},{value:"\u90e8\u5206\u8868\u8fde\u63a5\u751f\u6548",id:"\u90e8\u5206\u8868\u8fde\u63a5\u751f\u6548",level:3},{value:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u751f\u6548",id:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u751f\u6548",level:3},{value:"IsNull\u548c\u5916\u8fde\u63a5",id:"isnull\u548c\u5916\u8fde\u63a5",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Nullable String storeName = ...\u7565...;\n@Nullable String storeWebsite = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.store().name().eqIf(storeName)) \u2776\n    .where(table.store().website().eqIf(storeWebsite)) \u2777\n    .select(table)\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val storeName: String? = ...\u7565...\nval storeWebsite: String? = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        where(table.store.name `eq?` storeName) \u2776\n        where(table.store.website `eq?` storeWebsite) \u2777\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u8ff0\u4ee3\u7801\u4e2d, Java\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"table.store()"),"\u548cKotlin\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"table.store"),"\u8868\u793a\u901a\u8fc7\u591a\u5bf9\u4e00\u5173\u8054",(0,r.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5185\u8fde\u63a5",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u6240\u5b9a\u4e49\u7684\u8868\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u6240\u5b9a\u4e49\u7684\u8868\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5373\uff0c\u8868\u793a\u5982\u4e0bSQL\u903b\u8f91"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"from BOOK b\ninner join BOOK_STORE s on b.STORE_ID = s.ID\n")),(0,r.kt)("p",{parentName:"admonition"},"\u4e8b\u5b9e\u4e0a\uff0c\u5047\u5982\u5b9e\u4f53\u6a21\u578b\u66f4\u52a0\u4e30\u5bcc\uff0c\u53ef\u4ee5\u4e66\u5199\u66f4\u957f\u7684\u8def\u5f84\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"table.store().city().province()"),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\uff0c\u4ec5\u4ec5\u505a\u5165\u95e8\u793a\u8303\u548c\u5feb\u901f\u9884\u89c8\uff0c\u6ca1\u5fc5\u8981\u6784\u5efa\u66f4\u4e30\u5bcc\u7684\u5b9e\u4f53\u6a21\u578b\u4ee5\u6f14\u793a\u66f4\u957f\u7684\u8def\u5f84\uff0c\u6700\u77ed\u8868\u94fe\u8fde\u63a5\u8def\u5f84table.store()\u8db3\u591f\u3002")),(0,r.kt)("h2",{id:"\u5404\u79cd\u60c5\u51b5"},"\u5404\u79cd\u60c5\u51b5"),(0,r.kt)("h3",{id:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u4e0d\u751f\u6548"},"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u4e0d\u751f\u6548"),(0,r.kt)("p",null,"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\u90fd\u4e3anull\uff0c\u4f1a\u5bfc\u81f4\u2776\u548c\u2777\u4e24\u5904\u521b\u5efa\u7684\u52a8\u6001\u8868\u8fde\u63a5\u672a\u88ab\u4f7f\u7528\uff0c\u672a\u88ab\u4f7f\u7528\u7684\u8868\u8fde\u63a5\u4f1a\u88ab\u81ea\u52a8\u5ffd\u7565\uff0c\u4e0d\u4f1a\u6e32\u67d3\u4efb\u4f55\u771f\u5b9e\u7684SQL\u8fde\u63a5\u3002"),(0,r.kt)("p",null,"\u8fd9\u65f6\uff0c\u751f\u6210\u5982\u4e0bSQL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\n")),(0,r.kt)("h3",{id:"\u90e8\u5206\u8868\u8fde\u63a5\u751f\u6548"},"\u90e8\u5206\u8868\u8fde\u63a5\u751f\u6548"),(0,r.kt)("p",null,"\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"storeName"),"\u6307\u5b9a\u4e3a\u975enull\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\u4ecd\u7136\u4e3anull\uff0c\u2776\u5904\u7684\u52a8\u6001\u8868\u8fde\u63a5\u751f\u6548\uff0c\u800c\u2777\u7684\u52a8\u6001\u8868\u8fde\u63a5\u88ab\u5ffd\u7565\u3002"),(0,r.kt)("p",null,"\u8fd9\u65f6\uff0c\u751f\u6210\u5982\u4e0bSQL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\ninner join BOOK_STORE tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID\nwhere\n    tb_2_.NAME = ? /* MANNING */\n")),(0,r.kt)("h3",{id:"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u751f\u6548"},"\u6240\u6709\u8868\u8fde\u63a5\u90fd\u751f\u6548"),(0,r.kt)("p",null,"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\u90fd\u88ab\u6307\u5b9a\u4e3a\u975enull\uff0c\u4f1a\u5bfc\u81f4\u2776\u548c\u2777\u4e24\u5904\u521b\u5efa\u7684\u52a8\u6001\u8868\u8fde\u63a5\u90fd\u751f\u6548\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Jimmer\u80fd\u81ea\u52a8\u5408\u5e76\u51b2\u7a81\u7684\u8fde\u63a5\uff0c\u4e24\u4e2a\u8fde\u63a5\u4f1a\u88ab\u5408\u5e76\u4e3a\u4e00\u4e2a\uff0c\u6700\u7ec8\uff0c\u53ea\u6709\u4e00\u4e2aSQL\u8fde\u63a5\u88ab\u6e32\u67d3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\ninner join BOOK_STORE tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID\nwhere\n        tb_2_.NAME = ? /* MANNING */\n    and\n        tb_2_.WEBSITE = ? /* https://www.manning.com */\n")),(0,r.kt)("h2",{id:"isnull\u548c\u5916\u8fde\u63a5"},"IsNull\u548c\u5916\u8fde\u63a5"),(0,r.kt)("p",null,"\u7c7b\u4f3cJava\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"table.store()"),"\u6216Kotlin",(0,r.kt)("inlineCode",{parentName:"p"},"table.store"),"\u8fd9\u6837\u7684\u8fde\u63a5\u8def\u5f84\uff0c\u4f1a\u88ab\u6e32\u67d3\u6210SQL\u7684\u5185\u8fde\u63a5\uff0c\u800c\u975e\u5916\u8fde\u63a5\uff0c\u8fd9\u662f\u56e0\u4e3a"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5185\u8fde\u63a5\u6bd4\u5916\u8fde\u63a5\u62e5\u6709\u66f4\u597d\u7684\u6027\u80fd\uff01")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u6b64\uff0cJimmer\u4e0d\u60dc\u901a\u8fc7\u5f02\u5e38\u8ba9\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5185\u8fde\u63a5\u800c\u5f97\u5230\u7684\u8868\u5bf9\u8c61\u4e0d\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"isNull"),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8981\u5bf9\u5173\u8054\u5bf9\u8c61\u65bd\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"isNull"),"\uff0c\u5fc5\u987b\u660e\u786e\u91c7\u7528\u5916\u8fde\u63a5\u64cd\u4f5c\uff0c\u4f8b\u5982")),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.parent(JoinType.LEFT).isNull())\n    .select(table)\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        // highlight-next-line\n        where(table.`parent?`.isNull())\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("p",null,"Java\u4ee3\u7801\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".parent(JoinType.LEFT)"),"\u548cKotlin\u4ee3\u7801\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".parent?"),"\u8868\u793a\u5de6\u8fde\u63a5\u3002"),(0,r.kt)("p",null,"\u5176\u5b9e\uff0c\u8fd9\u79cd\u6848\u4f8b\u66f4\u9002\u5408",(0,r.kt)("a",{parentName:"p",href:"./associated-id"},"\u4e0a\u4e00\u6587"),"\u4e2d\u7684\u5173\u8054id\u6761\u4ef6"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TreeNodeTable table = TreeNodeTable.$;\nList<TreeNode> rootNodes = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.parentId().isNull())\n    .select(table)\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val rootNodes = sqlClient\n    .createQuery(TreeNode::class) {\n        // highlight-next-line\n        where(table.parentId.isNull())\n        select(table)\n    }\n    .execute()\n")))))}m.isMDXComponent=!0}}]);