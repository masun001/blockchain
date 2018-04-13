webpackJsonp([32],{511:function(t,n,s){s(684);var a=s(197)(s(552),s(644),"data-v-548433fc",null);t.exports=a.exports},552:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}}}},601:function(t,n,s){n=t.exports=s(196)(!1),n.push([t.i,"",""])},644:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("div",{staticClass:"ms-doc"},[s("article",{staticClass:"markdown-section",attrs:{id:"main"}},[s("h3",[t._v("账号account")]),t._v(" "),s("div",{staticClass:"box-shadow"},[s("ul",[s("li",[t._v("普通账号")])]),t._v(" "),s("p",[t._v("普通账号通过私匙创建和控制。账号的任何行为，如，通过被私匙签名的转账交易发送聚链到另一个帐户。如果攻击者获得私钥的内容，则他/她可以抢劫该帐户。因此私钥必须通过各种手段保密。")]),t._v(" "),s("ul",[s("li",[t._v("多签账号")])]),t._v(" "),s("p",[t._v("\n                多签账号可以通过普通账号转换来创建，并添加共同签署人，任何行为必须由联合签署人签署。这让多签账户比普通账户更安全。当一个共同签署人的私匙被攻击者获取，攻击者仍然无法操作该多签账号。强烈建议将任何含有高数量聚币的账号转换成多签账号，并添加至少3个签署人。一旦转换为多签账户，原来的私匙将变成无效。")])]),t._v(" "),s("h3",[t._v("交易transaction")]),t._v(" "),s("div",{staticClass:"box-shadow"},[s("p",[t._v("\n                交易是指从一个帐户到另一个转移聚币和/或消息的一种方式。一旦一笔交易被发起，仍然是未确认的，并且没有被网络所接受。这个时候还不清楚是否会被包入一个块中。这时的交易被称为未确认的交易。一旦被包入一个块中，交易将会被处理，并且如果是一个转账交易，交易中的金额从发送方的账户转账到接收方的账户。此外，交易费用从发送帐户中扣除。这时交易有0个确认。当另一个块添加到区块链时，交易有1个确认。下一个添加到链的区块将给予2个确认。")]),t._v(" "),s("p",[t._v("\n                交易有不同的类型，每种类型都有其特定的作用，如从一个账户转移聚币到另一个账或者将一个账户转换成一个多签账户。由于交易消耗了P2P的网络资源，因此，每笔交易都要收取手续费，手续费取决于交易的类型和交易的其他参数。交易有一个截止日期，如果一个交易在截止日期到来前还没有包含进区块中，该交易被认为已过期并且被节点丢弃。")]),t._v(" "),s("h3",[t._v("合约contract")]),t._v(" "),s("p",[t._v("\n                一个智能合约是一套以数字形式定义的承诺（promises），包括合约参与方可以在上面执行这些承诺的协议。一套承诺指的是合约参与方同意的（经常是相互的）权利和义务。这些承诺定义了合约的本质和目的。以一个销售合约为典型例子。卖家承诺发送货物，买家承诺支付合理的货款。\n                为了满足各种行业业务需要，我们提供各种类型的合约模板。用户可以根据模样定制或者新建自己的业务。\n            ")])]),t._v(" "),s("h3",[t._v("区块block")]),t._v(" "),s("div",{staticClass:"box-shadow"},[s("p",[t._v("\n                块是区块链P2P网络相关的数据永久记录的文件。一个区块会记录部分或全部最近的交易，但尚未进入前面的任何区块。因此，区块就像分类帐或记录簿的页面。每当一个块“完成”时，它就会让位给区块链中的下一个块。因此，块是永久性的记录存储，一旦写入，就不能被修改或删除。 \n            ")])])])])])}]}},684:function(t,n,s){var a=s(601);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(198)("6cc490dc",a,!0)}});