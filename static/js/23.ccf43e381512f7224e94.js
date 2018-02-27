webpackJsonp([23],{510:function(v,e,_){_(638);var t=_(197)(_(541),_(609),"data-v-548433fc",null);v.exports=t.exports},541:function(v,e,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}}}},577:function(v,e,_){e=v.exports=_(64)(!1),e.push([v.i,"",""])},609:function(v,e){v.exports={render:function(){var v=this,e=v.$createElement;v._self._c;return v._m(0)},staticRenderFns:[function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("div",[_("div",{staticClass:"ms-doc"},[_("article",{staticClass:"markdown-section",attrs:{id:"main"}},[_("h3",[v._v("账号account")]),v._v(" "),_("ul",[_("li",[v._v("普通账号")])]),v._v(" "),_("p",[v._v("普通账号通过私匙创建和控制。账号的任何行为，如，通过被私匙签名的转账交易发送聚链到另一个帐户。如果攻击者获得私钥的内容，则他/她可以抢劫该帐户。因此私钥必须通过各种手段保密。")]),v._v(" "),_("ul",[_("li",[v._v("多签账号")])]),v._v(" "),_("p",[v._v("\n                多签账号可以通过普通账号转换来创建，并添加共同签署人，任何行为必须由联合签署人签署。这让多签账户比普通账户更安全。当一个共同签署人的私匙被攻击者获取，攻击者仍然无法操作该多签账号。强烈建议将任何含有高数量xem的账号转换成多签账号，并添加至少3个签署人。一旦转换为多签账户，原来的私匙将变成无效。")]),v._v(" "),_("h3",[v._v("交易transaction")]),v._v(" "),_("p",[v._v("\n                交易是指从一个帐户到另一个转移XEM和/或消息的一种方式。一旦一笔交易被发起，仍然是未确认的，并且没有被网络所接受。这个时候还不清楚是否会被包入一个块中。这时的交易被称为未确认的交易。一旦被包入一个块中，交易将会被处理，并且如果是一个转账交易，交易中的金额从发送方的账户转账到接收方的账户。此外，交易费用从发送帐户中扣除。这时交易有0个确认。当另一个块添加到区块链时，交易有1个确认。下一个添加到链的区块将给予2个确认。")]),v._v(" "),_("p",[v._v("\n                交易有不同的类型，每种类型都有其特定的作用，如从一个账户转移xem到另一个账或者将一个账户转换成一个多签账户。由于交易消耗了P2P的网络资源，因此，每笔交易都要收取手续费，手续费取决于交易的类型和交易的其他参数。交易有一个截止日期，如果一个交易在截止日期到来前还没有包含进区块中，该交易被认为已过期并且被节点丢弃。")]),v._v(" "),_("p",[v._v("\n                加密货币有能力回滚区块链的一部分。这对于解决区块链的分叉非常重要。但是，可以回滚的块的最大数量称为重写限制。因此，分叉只能解决一定的深度。聚链有360块的改写极限。一旦交易超过360个确认，则不能逆转。在现实生活中，深度超过20个块的分叉不会发生，除非由于代码中的错误或某种攻击而导致区块链出现严重问题。")]),v._v(" "),_("h3",[v._v("消息message")]),v._v(" "),_("h3",[v._v("命名空间namespace")]),v._v(" "),_("p",[v._v('\n                聚链支持类似于互联网域名概念的命名空间。命名空间是一个可识别的字符串，由一个或多个部分组成，每个部分由"点"联系起来。例如"makoto.metals.silver".所有的命名空间都是独有的，因此只能有一个拥有者。一个命名空间中只有一个部分被称为根命名空间，其他部分称为子命名空间。根命名空间可以通过帐户租用一年。在根命名空间到期前一个月，租赁合同可以续签一年。如果续订了根命名空间，那么所有子命名空间在下一年也有效。如果根命名空间不更新，到期后，连同所有子命名空间一起到期。根命名空间到期后一个月，另一个帐户能够租用该根命名空间。新所有者不会从以前的所有者继承子命名空间。如果帐户拥有相应的根命名空间，则只能租用子命名空间。')]),v._v(" "),_("p",[v._v("命名空间中的每一部分都有允许的字符和对长度有一定的限制。根命名空间可能有16个字符的长度，而子命名空间可能有64个字符的长度。有效字符串是：")]),v._v(" "),_("p",[v._v(" a, b, c, ..., z, A, B, C, ..., Z, 0, 1, 2, ..., 9, _ , -")]),v._v(" "),_("p",[v._v('但是，每一部分，只能以字母开头。因此对于根命名空间"alice"是允许的，而"1alice"是不被允许的。')]),v._v(" "),_("p",[v._v("某些字符串被保留，因此不允许作为命名空间部分。被保留的命名空间为：")]),v._v(" "),_("p",[v._v(" 聚链, user, account, org, com, biz, net, edu, mil, gov and info")]),v._v(" "),_("p",[v._v("\n                该列表不是最终的，将来还会扩展。例如，'user.alice'或者'alice.user'在聚链命名空间系统中是无效的。命名空间最多有3个部分，因此'makoto.metals.silver'是有效的，而'makoto.metals.silver.coin'是无效的。")]),v._v(" "),_("p",[v._v("除了通常的手续费外，命名空间还有租金。这个费用是支付给所谓的租金帐户，这是一个特殊帐户地址。")]),v._v(" "),_("p",[v._v(" 正式网络是：NAMESPACEWH4MKFMBCVFERDPOOP4FK7MTBXDPZZA")]),v._v(" "),_("p",[v._v(" 测试网络是：TAMESPACEWH4MKFMBCVFERDPOOP4FK7MTDJEYP35")]),v._v(" "),_("p",[v._v("命名空间允许用户拥有独有的命名空间。个体或团体（多重签名方式）拥有一个命名空间。企业可以用自己拥有的命名空间证明其发布的商品或资产。")]),v._v(" "),_("p",[v._v("聚链的多重签名以链上合约的方式工作。简单有效，保障无懈可击，直接作用于区块链")])])])])}]}},638:function(v,e,_){var t=_(577);"string"==typeof t&&(t=[[v.i,t,""]]),t.locals&&(v.exports=t.locals);_(198)("6cc490dc",t,!0)}});