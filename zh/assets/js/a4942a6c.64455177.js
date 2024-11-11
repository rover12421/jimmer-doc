"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4437],{68420:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>u});const l=JSON.parse('{"id":"configuration/scala-providder","title":"Scala Provider","description":"\u57fa\u672c\u6982\u5ff5","source":"@site/i18n/zh/docusaurus-plugin-content-docs/current/configuration/scala-providder.mdx","sourceDirName":"configuration","slug":"/configuration/scala-providder","permalink":"/jimmer-doc/zh/docs/configuration/scala-providder","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/configuration/scala-providder.mdx","tags":[],"version":"current","lastUpdatedAt":1712768787000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Scala Provider"},"sidebar":"tutorialSidebar","previous":{"title":"\u5fae\u670d\u52a1","permalink":"/jimmer-doc/zh/docs/configuration/micro-service"},"next":{"title":"\u7f13\u5b58\u672a\u751f\u6548\u7684\u539f\u56e0","permalink":"/jimmer-doc/zh/docs/configuration/cache-abandoned"}}');var a=r(74848),i=r(28453),c=r(11470),s=r(19365);const t={sidebar_position:10,title:"Scala Provider"},o=void 0,d={},u=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u5168\u5c40\u7ea7ScalarProvider",id:"\u5168\u5c40\u7ea7scalarprovider",level:2},{value:"\u5b9a\u4e49ScalarProvider",id:"\u5b9a\u4e49scalarprovider",level:3},{value:"\u6ce8\u518cScalar Provider",id:"\u6ce8\u518cscalar-provider",level:3},{value:"\u5c5e\u6027\u7ea7ScalarProvider",id:"\u5c5e\u6027\u7ea7scalarprovider",level:2},{value:"\u975eSpring\u6ce8\u518c\u65b9\u5f0f",id:"\u975espring\u6ce8\u518c\u65b9\u5f0f",level:3},{value:"Spring\u6ce8\u518c\u65b9\u5f0f",id:"spring\u6ce8\u518c\u65b9\u5f0f",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u57fa\u672c\u6982\u5ff5",children:"\u57fa\u672c\u6982\u5ff5"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u524d\u9762\u7684\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u8fc7\u5982\u4f55",(0,a.jsx)(n.a,{href:"../mapping/advanced/enum",children:"\u6620\u5c04\u679a\u4e3e"}),"\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528",(0,a.jsx)(n.code,{children:"@Serialized"}),(0,a.jsx)(n.a,{href:"../mapping/advanced/json",children:"\u6620\u5c04JSON"}),"\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u4f46\u662f\uff0c\u6709\u7684\u65f6\u5019\uff0c\u4ee5\u4e0a\u4e24\u79cd\u65b9\u6cd5\u90fd\u65e0\u6cd5\u6ee1\u8db3\u6211\u4eec\u7684\u8981\u6c42\uff0c\u8fd9\u65f6\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u3002"]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u662fJimmer\u5173\u4e8e\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u6700\u5e95\u5c42\u7684SPI\u3002"]}),(0,a.jsxs)(n.p,{children:["\u4e4b\u524d\u6211\u4eec\u63a2\u8ba8\u8fc7\u7684",(0,a.jsx)(n.a,{href:"../mapping/advanced/enum",children:"Enum\u6620\u5c04"}),"\u548c",(0,a.jsx)(n.a,{href:"../mapping/advanced/json",children:"JSON\u6620\u5c04"}),"\uff0c\u5176\u5b9e\u5c31\u662fJimmer\u5bf9",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u7684\u5185\u7f6e\u5b9e\u73b0\u3002"]})]}),"\n",(0,a.jsxs)(n.p,{children:["\u53ef\u4ee5\u4e3aSqlClient\u6ce8\u518c\u591a\u4e2a",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\uff0c\u6bcf\u4e2a",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u544a\u8bc9Jimmer\u5982\u4f55\u5904\u7406\u4e00\u79cd\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u5206\u4e3a\u4e24\u79cd\uff1a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5168\u5c40\u7ea7"}),"\n",(0,a.jsxs)(n.p,{children:["\u5b9a\u4e49Java/Kotlin\u7c7b\u578b\u548c\u6570\u636e\u5e93\u7c7b\u578b\u7684\u6620\u5c04\u89c4\u5219\uff0c\u5168\u5c40\u7edf\u4e00\u3002\u4efb\u4f55\u5b9e\u4f53\u5b9a\u4e49\u4e2d\u5305\u542b\u8be5\u7c7b\u578b\u7684\u5c5e\u6027\u90fd\u4f1a\u88ab\u5168\u5c40",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u7edf\u4e00\u5904\u7406\u3002"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["\u5168\u5c40\u7ea7",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u53ea\u80fd\u5904\u7406\u975e\u96c6\u5408\u7c7b\u578b\uff0c\u6bd4\u5982\uff1a\u7c7b\u3001\u63a5\u53e3\u3001\u679a\u4e3e\u3002\u4e0d\u80fd\u5904\u7406\u7c7b\u578b\u4e3a\uff1a",(0,a.jsx)(n.code,{children:"Array"}),"\u3001",(0,a.jsx)(n.code,{children:"Collection"}),"\u3001",(0,a.jsx)(n.code,{children:"Map"}),"\u7b49\u96c6\u5408\u7c7b\u578b\u3002"]})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u5c5e\u6027\u7ea7"}),"\n",(0,a.jsx)(n.p,{children:"\u5bf9\u67d0\u4e2a\u7279\u5b9a\u7684\u5b9e\u4f53\u5c5e\u6027\uff0c\u5b9a\u4e49Java/Kotlin\u7c7b\u578b\u548c\u6570\u636e\u5e93\u7c7b\u578b\u7684\u6620\u5c04\u89c4\u5219\u3002"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5c5e\u6027\u7ea7",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u53ef\u4ee5\u5904\u7406\u4efb\u4f55\u975eJimmer\u5185\u7f6e\u7684\u7c7b\u578b\u3002\u5305\u62ec\u96c6\u5408\u7c7b\u578b\uff0c\u6bd4\u5982\uff1a",(0,a.jsx)(n.code,{children:"Array"}),"\u3001",(0,a.jsx)(n.code,{children:"Collection"}),"\uff0c",(0,a.jsx)(n.code,{children:"Map"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u88ab\u6620\u5c04\u7684\u5c5e\u6027\u7c7b\u578b\u662f\u96c6\u5408\u7c7b\u578b\uff0c\u8be5\u5c5e\u6027\u9700\u8981\u88ab",(0,a.jsx)(n.code,{children:"@org.babyfish.jimmer.Scalar"}),"\u4fee\u9970\u3002"]}),"\n"]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"../mapping/advanced/json",children:"JSON\u6620\u5c04"}),"\u4e00\u6587\u9610\u8ff0\u4e86",(0,a.jsx)(n.code,{children:"@Serialized"}),"\u6ce8\u89e3\uff0c\u65e2\u53ef\u4ee5\u4fee\u9970\u5c5e\u6027\u8fd4\u56de\u7684\u7c7b\u578b\u4e5f\u53ef\u4ee5\u4fee\u9970\u5b9e\u4f53\u5c5e\u6027\uff0c\n\u5c31\u662f\u56e0\u4e3a\u66f4\u5e95\u5c42\u7684",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u6709\u4e24\u79cd\u3002"]})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u662fJimmer\u63d0\u4f9b\u7684\u4e00\u4e2aSPI\u63a5\u53e3\uff0c\u5176\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="ScalarProvider"',children:"package org.babyfish.jimmer.sql.runtime;\n\nimport java.util.function.Consumer;\n\npublic abstract class ScalarProvider<T \u2776, S \u2777> {\n\n    protected ScalarProvider(Class<T> scalarType, Class<S> sqlType) { \u2778\n        ...\u7701\u7565\u4ee3\u7801...\n    }\n\n    protected ScalarProvider() { \u2779\n        ...\u7701\u7565\u4ee3\u7801...\n    }\n\n    public abstract T toScalar(S sqlValue); \u277a\n\n    public abstract S toSql(T scalarValue); \u277b\n\n    public Collection<ImmutableProp> getHandledProps() { \u277c\n        return null;\n    }\n }\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2776 \u8303\u578b\u53c2\u6570",(0,a.jsx)(n.code,{children:"T"}),": Java/Kotlin\u4e2d\u6570\u636e\u7c7b\u578b\uff1b"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2777 \u8303\u578b\u53c2\u6570",(0,a.jsx)(n.code,{children:"S"}),": \u6570\u636e\u5e93\u4e2d\u6570\u636e\u7c7b\u578b\uff1b"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2778 \u660e\u786e\u6307\u5b9a",(0,a.jsx)(n.code,{children:"T"}),"\u548c",(0,a.jsx)(n.code,{children:"S"}),"\u6240\u4ee3\u8868\u7c7b\u578b\u7684\u6784\u9020\u51fd\u6570\uff1b"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u901a\u7528\u6027\u548c\u53ef\u590d\u7528\u6027\u8f83\u5f3a\u7684",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u2779 \u65e0\u9700\u660e\u786e\u6307\u5b9a",(0,a.jsx)(n.code,{children:"T"}),"\u548c",(0,a.jsx)(n.code,{children:"S"}),"\u6240\u4ee3\u8868\u7c7b\u578b\u7684\u6784\u9020\u51fd\u6570\uff1b"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8981\u6c42\u6d3e\u751f\u7c7b\u660e\u786e\u6307\u5b9a\u8303\u578b\u53c2\u6570",(0,a.jsx)(n.code,{children:"T"}),"\u548c",(0,a.jsx)(n.code,{children:"S"}),"\uff0c\u8ba9Jimmer\u53ef\u4ee5\u81ea\u52a8\u5206\u6790\u51fa",(0,a.jsx)(n.code,{children:"T"}),"\u548c",(0,a.jsx)(n.code,{children:"S"}),"\u6240\u4ee3\u8868\u7c7b\u578b\u3002\u5426\u5219\uff0c\u4f1a\u5f02\u5e38\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u4e2a\u6784\u9020\u51fd\u6570\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u7279\u5b9a\u7c7b\u578b\u6240\u5bf9\u5e94\u7684",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\uff0c\u4e0d\u8981\u6c42\u901a\u7528\u6027\u548c\u53ef\u590d\u7528\u6027\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u277a \u65b9\u6cd5",(0,a.jsx)(n.code,{children:"toScalar"}),": \u628a\u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u5230\u7684\u975enull\u6570\u636e\u8f6c\u6362\u4e3aJava\u6570\u636e\uff1b"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u277b \u65b9\u6cd5",(0,a.jsx)(n.code,{children:"toSql"}),": \u628aJava\u7684\u975enull\u6570\u636e\u8f6c\u6362\u4e3a\u6570\u636e\u5e93\u53ef\u63a5\u53d7\u7684\u6570\u636e\uff1b"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u277c \u5982\u679c\u8981\u5b9a\u4e49\u5c5e\u6027\u7ea7",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\uff0c\u6709\u4e00\u79cd\u9009\u62e9 ",(0,a.jsx)(n.em,{children:"(\u4e5f\u6709\u5176\u4ed6\u9009\u62e9)"})," \u662f\u5728\u6d3e\u751f\u7c7b\u4e2d\u8986\u76d6\u65b9\u6cd5",(0,a.jsx)(n.code,{children:"getHandledProps"}),"\uff1b"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5168\u5c40\u7ea7scalarprovider",children:"\u5168\u5c40\u7ea7ScalarProvider"}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5982\u5f53\u524d\u6570\u636e\u5e93\u4e0d\u652f\u6301UUID\u7c7b\u578b\uff0c\u53ef\u4ee5\u5982\u6b64\u5904\u7406\uff1a"}),"\n",(0,a.jsx)(n.h3,{id:"\u5b9a\u4e49scalarprovider",children:"\u5b9a\u4e49ScalarProvider"}),"\n",(0,a.jsxs)(c.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="UUIDScalarProvider.java"',children:"public class UUIDScalarProvider extends AbstractScalarProvider<UUID, String> {\n\n    @Override\n    public UUID toScalar(String sqlValue) {\n        return UUID.fromString(sqlValue);\n    }\n\n    @Override\n    public String toSql(UUID scalarValue) {\n        return scalarValue.toString();\n    }\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="UUIDScalarProvider.kt"',children:"class UUIDScalarProvider : ScalarProvider<UUID, String> {\n\n    override fun toScalar(sqlValue: Strng): UUID =\n        UUID.fromString(sqlValue)\n\n    override fun toSql(scalarValue: UUID): String =\n        scalarValue.toString()\n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"\u6ce8\u518cscalar-provider",children:"\u6ce8\u518cScalar Provider"}),"\n",(0,a.jsxs)(n.p,{children:["\u6709\u4e24\u79cd\u65b9\u6cd5\u53ef\u4ee5\u8ba9Jimmer\u6ce8\u518c",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\uff1a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528Spring Boot Starter"}),"\n",(0,a.jsxs)(n.p,{children:["\u8ba9",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u7684\u5404\u6d3e\u751f\u7c7b\u88abSpring\u6258\u7ba1\u5373\u53ef\u3002\u6709\u4e24\u79cd\u9009\u62e9\u3002"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u4fee\u6539\u4e0a\u9762\u7684",(0,a.jsx)(n.code,{children:"UUIDScalarProvider"}),"\u7c7b\uff0c\u7528spring\u7684",(0,a.jsx)(n.code,{children:"@Component"}),"\u4fee\u9970"]}),"\n",(0,a.jsxs)(c.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="UUIDScalarProvider.java"',children:"// highlight-next-line\n@Component\npublic class UUIDScalarProvider extends AbstractScalarProvider<UUID, String> {\n    \n    ...\u7701\u7565\u4ee3\u7801...\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="UUIDScalarProvider.kt"',children:"// highlight-next-line\n@Component\nclass UUIDScalarProvider : ScalarProvider<UUID, String> {\n\n    ...\u7701\u7565\u4ee3\u7801...\n}\n"})})})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["\u7528Spring\u7684",(0,a.jsx)(n.code,{children:"@Bean"}),"\u65b9\u6cd5\uff0c\u5411Spring\u6ce8\u518cUUIDScalaProvider\u5bf9\u8c61"]}),"\n",(0,a.jsxs)(c.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// highlight-next-line\n@Bean\npublic UUIDScalarProvider uuidScalarProvider() {\n    return new UUIDScalarProvider();\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\n@Bean\nfun uuidScalarProvider(): UUIDScalarProvider =\n    UnitTestIdGenerator()\n"})})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u5e95\u5c42API"}),"\n",(0,a.jsxs)(c.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Bean\npublic JSqlClient sqlClient() {\n    return JSqlClient\n        .newBuilder()\n        // highlight-next-line\n        .addScalarProvider(new UUIDScalarProvider())\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"@Bean\nfun sqlClient() : KSqlClient = \n    newKSqlClient {\n        // highlight-next-line\n        addScalarProvider(UUIDScalarProvider())\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5c5e\u6027\u7ea7scalarprovider",children:"\u5c5e\u6027\u7ea7ScalarProvider"}),"\n",(0,a.jsxs)(n.p,{children:["\u5c5e\u6027\u7ea7",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u76f8\u8f83\u4e8e\u5168\u5c40\u7ea7",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u552f\u4e00\u533a\u522b\u662f\uff0c\u5b83\u53ea\u9002\u7528\u4e8e\u7279\u5b9a\u5c5e\u6027\uff0c\u800c\u975e\u6240\u6709\u5c5e\u6027\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u6240\u4ee5\uff0c\u5c5e\u6027\u7ea7",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u4e2d\u6700\u91cd\u8981\u7684\u6570\u636e\u8f6c\u6362\u65b9\u6cd5",(0,a.jsx)(n.code,{children:"toScalar"}),"\u548c",(0,a.jsx)(n.code,{children:"toSql"}),"\u7684\u7528\u6237\u4ee3\u7801\u5b9e\u73b0\u65b9\u6cd5\u5b8c\u5168\u4e00\u6837\uff0c\u53ea\u662f\u6ce8\u518c\u65b9\u5f0f\u4e0d\u540c\u800c\u5df2\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u56e0\u6b64\uff0c\u8fd9\u91cc\u6211\u4eec\u5047\u8bbe\u6709\u4e00\u4e2a\u7528\u6237\u81ea\u5b9a\u4e49\u7c7b\u578b",(0,a.jsx)(n.code,{children:"Location"}),"\uff0c\u5176\u5bf9\u5e94\u7684",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u5b9e\u73b0\u7c7b\u4e3a",(0,a.jsx)(n.code,{children:"LocationScalarProvider"}),"\uff0c\u65e0\u9700\u7ed9\u51fa\u5177\u4f53\u5b9e\u73b0"]}),"\n",(0,a.jsx)(n.h3,{id:"\u975espring\u6ce8\u518c\u65b9\u5f0f",children:"\u975eSpring\u6ce8\u518c\u65b9\u5f0f"}),"\n",(0,a.jsxs)(c.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Bean\npublic JSqlClient sqlClient() {\n    return JSqlClient\n        .newBuilder()\n        .setScalarProvider(\n            // highlight-next-line\n            FlightProps.SOURCE_LOCATION\n            new LocationScalarProvider()\n        )\n        .setScalarProvider(\n            // highlight-next-line\n            FlightProps.TARGET_LOCATION\n            new LocationScalarProvider()\n        )\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n        .build();\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"@Bean\nfun sqlClient() : KSqlClient = \n    newKSqlClient {\n        setScalarProvider(\n            // highlight-next-line\n            Flight::sourceLocation\n            LocationScalarProvider()\n        )\n        setScalarProvider(\n            // highlight-next-line\n            Flight::targetLocation\n            LocationScalarProvider()\n        )\n        ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    }\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["\u5373\uff0c\u9664",(0,a.jsx)(n.code,{children:"Flight.sourceLocation"}),"\u548c",(0,a.jsx)(n.code,{children:"Flight.targetLocation"}),"\u5c5e\u6027\u5916\uff0c",(0,a.jsx)(n.code,{children:"LocationScalarProvider"}),"\u4e0d\u5f71\u54cd\u5176\u4ed6\u4efb\u4f55\u7c7b\u578b\u4e3a",(0,a.jsx)(n.code,{children:"Location"}),"\u7684\u5c5e\u6027"]}),"\n",(0,a.jsx)(n.h3,{id:"spring\u6ce8\u518c\u65b9\u5f0f",children:"Spring\u6ce8\u518c\u65b9\u5f0f"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u65b9\u5f0f\u5f88\u76f4\u89c2\uff0c\u4f46\u662f\u662f\u624b\u52a8\u6ce8\u518c\u7684\uff0cSpring\u81ea\u52a8\u8fd9\u518c\u7684\u65b9\u5f0f\u53ef\u4ee5\u7528\u4e8e\u6ce8\u518c\u5c5e\u6027\u7ea7",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u5417\uff1f"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u7136\u3002\u53ea\u9700\u8981\u8986\u76d6",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u7684\u65b9\u6cd5",(0,a.jsx)(n.code,{children:"getHandledProps"}),"\uff0c\u5c31\u53ef\u4ee5\u7528\u6ce8\u518c\u5168\u5c40\u7ea7",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u7684\u65b9\u6cd5\u6ce8\u518c\u5c5e\u6027\u7ea7",(0,a.jsx)(n.code,{children:"ScalarProvider"}),"\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,a.jsxs)(c.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="LocationScalarProvider.java"',children:"@Component\npublic class LocationScalarProvider extends AbstractScalarProvider<Location, String> {\n    \n    @Override\n    // highlight-next-line\n    public Collection<ImmutableProp> getHandledProps() {\n        return Arrays.asList(\n            FlightProps.SOURCE_LOCATION, \n            FlightProps.TARGET_LOCATION\n        );\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="LocationScalarProvider.kt"',children:"@Component\nclass LocationScalarProvider : ScalarProvider<Location, String> {\n\n    // highlight-next-line\n    override fun getHandledProps(): Collection<ImmutableProp> =\n        listOf(\n            Flight::sourceLocation.toImmutableProp(),\n            Flight::targetLocation.toImmutableProp()\n        )\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>c});r(96540);var l=r(18215);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function c(e){let{children:n,hidden:r,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,c),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>f});var l=r(96540),a=r(18215),i=r(23104),c=r(56347),s=r(205),t=r(57485),o=r(31682),d=r(70679);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:l,default:a}}=e;return{value:n,label:r,attributes:l,default:a}}))}(r);return function(e){const n=(0,o.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const a=(0,c.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,t.aZ)(i),(0,l.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=h(e),[c,t]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=r.find((e=>e.default))??r[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:i}))),[o,u]=j({queryString:r,groupId:a}),[x,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(r);return[a,(0,l.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),g=(()=>{const e=o??x;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&t(g)}),[g]);return{selectedValue:c,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),v(e)}),[u,v,i]),tabValues:i}}var v=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var S=r(74848);function m(e){let{className:n,block:r,selectedValue:l,selectValue:c,tabValues:s}=e;const t=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),d=e=>{const n=e.currentTarget,r=t.indexOf(n),a=s[r].value;a!==l&&(o(n),c(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=t.indexOf(e.currentTarget)+1;n=t[r]??t[0];break}case"ArrowLeft":{const r=t.indexOf(e.currentTarget)-1;n=t[r]??t[t.length-1];break}}n?.focus()};return(0,S.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,S.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>t.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===n}),children:r??n},n)}))})}function b(e){let{lazy:n,children:r,selectedValue:i}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,S.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function P(e){const n=x(e);return(0,S.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,S.jsx)(m,{...n,...e}),(0,S.jsx)(b,{...n,...e})]})}function f(e){const n=(0,v.A)();return(0,S.jsx)(P,{...e,children:u(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>s});var l=r(96540);const a={},i=l.createContext(a);function c(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);