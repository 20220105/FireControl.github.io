(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-high_level-detail-high_level-detail"],{"3e36":function(e,t,s){"use strict";var i=s("4ea4");s("4160"),s("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,s("96cf");var a=i(s("1da1")),n=i(s("7edc")),l=(i(s("ecb7")),{onLoad:function(e){this.detailMessage=JSON.parse(e.data),console.log(this.detailMessage),this.detailMessage.pictureUrlList&&this.detailMessage.pictureUrlList.forEach((function(e){e.pictureUrl="http://39.175.64.217:8026/"+e.pictureUrl}))},data:function(){return{detailMessage:{},imgs:[{image:"/static/houseDetail_imgs/1.png",text:"消防检查"},{image:"/static/houseDetail_imgs/2.png",text:"检查记录"},{image:"/static/houseDetail_imgs/3.png",text:"变更登记"},{image:"/static/houseDetail_imgs/4.png",text:"删除报备"}]}},methods:{picClick:function(e){var t=this;return(0,a.default)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:0===e?uni.navigateTo({url:"/pages/inspect/inspect?data="+JSON.stringify(t.detailMessage)+"&num=3"}):1===e?uni.navigateTo({url:"/pages/house-fireInspect/house-fireInspect?guid="+t.detailMessage.guid}):2===e?uni.navigateTo({url:"/pages/high-level-edit/high-level-edit?data="+JSON.stringify(t.detailMessage)}):t.$refs.popup.open();case 1:case"end":return s.stop()}}),s)})))()},confirmDelete:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"删除中"}),t.next=3,n.default.delhighbuilds({Guid:e.detailMessage.guid});case 3:s=t.sent,!0===s[1].data.isSuccess?(uni.showToast({title:s[1].data.message}),uni.navigateTo({url:"/pages/high_level/high_level"})):uni.showToast({title:s[1].data.message}),uni.hideLoading(),e.$refs.popup.close();case 7:case"end":return t.stop()}}),t)})))()},popupCancle:function(){this.$refs.popup.close()},goMap:function(){uni.openLocation({latitude:this.detailMessage.latitude,longitude:this.detailMessage.longitude,scale:18})}}});t.default=l},"543c":function(e,t,s){"use strict";s.r(t);var i=s("563c"),a=s("7d55");for(var n in a)"default"!==n&&function(e){s.d(t,e,(function(){return a[e]}))}(n);s("8a18");var l,u=s("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"0897b6b4",null,!1,i["a"],l);t["default"]=o.exports},"563c":function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"c",(function(){return n})),s.d(t,"a",(function(){return i}));var i={uniPopup:s("5f9f").default},a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-uni-view",{staticClass:"houser-detail"},[s("div",[e.detailMessage.pictureUrlList?s("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:2e3,duration:500}},e._l(e.detailMessage.pictureUrlList,(function(e){return s("v-uni-swiper-item",[s("v-uni-image",{attrs:{src:e.pictureUrl}})],1)})),1):s("v-uni-image",{staticClass:"noPic",attrs:{src:"/static/noPic.png"}})],1),s("v-uni-view",{staticClass:"houseMessage1"},[s("v-uni-view",{staticClass:"title"},[e._v(e._s(e.detailMessage.buildName))]),s("v-uni-view",{staticClass:"message1"},[s("v-uni-view",{staticClass:"left1"},[e._v("建筑地址:")]),s("v-uni-text",{staticClass:"right2"},[e._v(e._s(e.detailMessage.buildAddress))])],1),s("v-uni-view",{staticClass:"message1"},[s("v-uni-view",{staticClass:"left1"},[e._v("建筑类别：")]),s("v-uni-view",{staticClass:"right1"},[e._v(e._s(e.detailMessage.buildTypeText))])],1),s("v-uni-view",{staticClass:"message1"},[s("v-uni-view",{staticClass:"left1"},[e._v("使用性质：")]),s("v-uni-view",{staticClass:"right1"},[e._v(e._s(e.detailMessage.buildUseType))])],1),s("v-uni-view",{staticClass:"message1"},[s("v-uni-view",{staticClass:"left1"},[e._v("建筑层数:")]),s("v-uni-text",{staticClass:"right2"},[e._v(e._s(e.detailMessage.floorCount))])],1),s("v-uni-view",{staticClass:"message1"},[s("v-uni-view",{staticClass:"left1"},[e._v("建筑高度:")]),s("v-uni-text",{staticClass:"right2"},[e._v(e._s(e.detailMessage.buildHeight))])],1),s("v-uni-view",{staticClass:"message1"},[s("v-uni-view",{staticClass:"left1"},[e._v("物业单位:")]),s("v-uni-text",{staticClass:"right2"},[e._v(e._s(e.detailMessage.wyUnit))])],1)],1),s("v-uni-view",{staticClass:"houseMessage2"},[s("v-uni-view",{staticClass:"message2"},[s("v-uni-view",{staticClass:"left2"},[e._v("消防安全责任人：")]),s("v-uni-view",{staticClass:"right2"},[e._v(e._s(e.detailMessage.fireSafetyZRName))])],1),s("v-uni-view",{staticClass:"message2"},[s("v-uni-view",{staticClass:"left2"},[e._v("联系方式：")]),s("v-uni-view",{staticClass:"right2"},[e._v(e._s(e.detailMessage.fireSafetyZRPhone))])],1),s("v-uni-view",{staticClass:"message2"},[s("v-uni-view",{staticClass:"left2"},[e._v("消防安全管理人：")]),s("v-uni-view",{staticClass:"right2"},[e._v(e._s(e.detailMessage.fireSafetyGLName))])],1),s("v-uni-view",{staticClass:"message2"},[s("v-uni-view",{staticClass:"left2"},[e._v("联系方式：")]),s("v-uni-view",{staticClass:"right2"},[e._v(e._s(e.detailMessage.fireSafetyGLPhone))])],1),s("v-uni-view",{staticClass:"message2"},[s("v-uni-view",{staticClass:"left2"},[e._v("是否有消控室：")]),s("v-uni-view",{staticClass:"right2"},[e._v(e._s(1===e.detailMessage.isHaveFCR?"是":"否"))])],1),s("v-uni-view",{staticClass:"message2"},[s("v-uni-view",{staticClass:"left2"},[e._v("是否建成微型消防站：")]),s("v-uni-view",{staticClass:"right2"},[e._v(e._s(1===e.detailMessage.isHaveMiniFireStaion?"是":"否"))])],1),s("v-uni-view",{staticClass:"message2"},[s("v-uni-view",{staticClass:"left2"},[e._v("消防实施是否完好有效：")]),s("v-uni-view",{staticClass:"right2"},[e._v(e._s(1===e.detailMessage.isWH?"是":"否"))])],1),s("v-uni-view",{staticClass:"message2"},[s("v-uni-view",{staticClass:"left2"},[e._v("消防远程监控是否联网：")]),s("v-uni-view",{staticClass:"right2"},[e._v(e._s(1===e.detailMessage.isRemote?"是":"否"))])],1),s("v-uni-view",{staticClass:"message2"},[s("v-uni-view",{staticClass:"left2"},[e._v("现隐患等级：")]),s("v-uni-view",{staticClass:"right2"},[e._v(e._s(e.detailMessage.xyyhdj))])],1)],1),s("v-uni-view",{staticClass:"pic-box"},e._l(e.imgs,(function(t,i){return s("v-uni-view",{staticClass:"box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.picClick(i)}}},[s("v-uni-image",{attrs:{src:t.image}}),s("v-uni-view",{staticClass:"txt"},[e._v(e._s(t.text))])],1)})),1),s("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[s("v-uni-view",{staticClass:"popup"},[s("v-uni-view",{staticClass:"title"},[e._v("提示")]),s("v-uni-view",{staticClass:"content"},[e._v("确认要删除吗？")]),s("v-uni-view",{staticClass:"btn"},[s("v-uni-button",{staticClass:"btn-1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.popupCancle.apply(void 0,arguments)}}},[e._v("取消")]),s("v-uni-button",{staticClass:"btn-2",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmDelete.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1)],1)},n=[]},"7d55":function(e,t,s){"use strict";s.r(t);var i=s("3e36"),a=s.n(i);for(var n in i)"default"!==n&&function(e){s.d(t,e,(function(){return i[e]}))}(n);t["default"]=a.a},"8a18":function(e,t,s){"use strict";var i=s("8c2d"),a=s.n(i);a.a},"8c2d":function(e,t,s){var i=s("e008");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=s("4f06").default;a("eb646a28",i,!0,{sourceMap:!1,shadowMode:!1})},e008:function(e,t,s){var i=s("24fb");t=i(!1),t.push([e.i,".swiper[data-v-0897b6b4]{width:100%;height:%?350?%}.swiper uni-image[data-v-0897b6b4]{width:100%;height:100%}.noPic[data-v-0897b6b4]{width:100%;height:%?350?%}.houseMessage1[data-v-0897b6b4]{width:100%;padding-bottom:%?20?%;border-bottom:%?1?% solid #f2f2f2}.houseMessage1 .title[data-v-0897b6b4]{font-size:%?36?%;font-weight:700;box-sizing:border-box;padding:%?10?% %?20?%}.houseMessage1 .message1[data-v-0897b6b4]{display:flex;box-sizing:border-box;padding:%?10?% %?20?%}.houseMessage1 .message1 .left1[data-v-0897b6b4]{width:%?230?%}.houseMessage1 .message1 .right1[data-v-0897b6b4]{width:%?300?%}.houseMessage1 .message1 .right2[data-v-0897b6b4]{width:%?480?%}.houseMessage1 .message1 .go[data-v-0897b6b4]{color:#3098f3;box-sizing:border-box;padding-left:%?40?%}.houseMessage1 .message1 .color[data-v-0897b6b4]{width:%?150?%;height:%?40?%;border:%?1?% solid #000}.houseMessage1 .message1 .color1[data-v-0897b6b4]{background-color:#fe5d35}.houseMessage1 .message1 .color2[data-v-0897b6b4]{background-color:#ffd013}.houseMessage1 .message1 .color3[data-v-0897b6b4]{background-color:#03bf16}.houseMessage2[data-v-0897b6b4]{width:100%;padding:%?40?% 0;flex-wrap:wrap;border-bottom:%?1?% solid #f2f2f2}.houseMessage2 .message2[data-v-0897b6b4]{display:flex;width:100%;box-sizing:border-box;padding:%?10?% %?20?%}.houseMessage2 .message2 .left2[data-v-0897b6b4]{width:%?380?%}.houseMessage2 .message2 .rigth2[data-v-0897b6b4]{width:%?350?%}.pic-box[data-v-0897b6b4]{margin-top:%?20?%;width:100%;display:flex;justify-content:space-around;padding-bottom:%?50?%}.pic-box uni-image[data-v-0897b6b4]{width:%?120?%;height:%?120?%;margin-bottom:%?20?%}.pic-box .txt[data-v-0897b6b4]{text-align:center}.popup[data-v-0897b6b4]{width:%?750?%;height:%?350?%;background-color:#fff}.popup .title[data-v-0897b6b4]{font-size:%?36?%;padding:%?30?%}.popup .content[data-v-0897b6b4]{font-size:%?32?%;padding:%?30?%}.popup .btn[data-v-0897b6b4]{display:flex;margin:%?50?% 0 0 %?350?%}.popup .btn .btn-1[data-v-0897b6b4]{width:%?160?%;height:%?70?%;line-height:%?70?%;font-size:%?36?%;padding:0;margin:0}.popup .btn .btn-2[data-v-0897b6b4]{width:%?160?%;height:%?70?%;line-height:%?70?%;font-size:%?36?%;padding:0;margin-left:%?30?%;color:#fff;background-color:#3591e2}",""]),e.exports=t},ecb7:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=0,a={jump:i};t.default=a}}]);