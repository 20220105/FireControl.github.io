(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-oldhouse-detail-oldhouse-detail"],{"17ae":function(e,t,a){var i=a("cb89");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("4f06").default;s("414f7f6b",i,!0,{sourceMap:!1,shadowMode:!1})},"218a":function(e,t,a){"use strict";var i=a("4ea4");a("99af"),a("4160"),a("4d90"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var s=i(a("1da1")),n=i(a("7edc")),o=(i(a("ecb7")),{onLoad:function(e){this.detailMessage=JSON.parse(e.data),console.log(this.detailMessage),this.detailMessage.pictureUrlList&&this.detailMessage.pictureUrlList.forEach((function(e){e.pictureUrl="http://39.175.64.217:8026/"+e.pictureUrl}))},data:function(){return{detailMessage:{},imgs:[{image:"/static/houseDetail_imgs/1.png",text:"消防检查"},{image:"/static/houseDetail_imgs/2.png",text:"检查记录"},{image:"/static/houseDetail_imgs/3.png",text:"变更登记"},{image:"/static/houseDetail_imgs/4.png",text:"删除报备"}]}},methods:{picClick:function(e){var t=this;return(0,s.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:0===e?uni.navigateTo({url:"/pages/inspect/inspect?data="+JSON.stringify(t.detailMessage)+"&num=2"}):1===e?uni.navigateTo({url:"/pages/house-fireInspect/house-fireInspect?guid="+t.detailMessage.guid}):2===e?uni.navigateTo({url:"/pages/oldhouse-edit/oldhouse-edit?data="+JSON.stringify(t.detailMessage)}):t.$refs.popup.open();case 1:case"end":return a.stop()}}),a)})))()},confirmDelete:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"删除中"}),t.next=3,n.default.delOldCommunity({Guid:e.detailMessage.guid});case 3:a=t.sent,!0===a[1].data.isSuccess?(uni.showToast({title:a[1].data.message}),uni.navigateTo({url:"/pages/oldhouse/oldhouse"})):uni.showToast({title:a[1].data.message}),uni.hideLoading(),e.$refs.popup.close();case 7:case"end":return t.stop()}}),t)})))()},popupCancle:function(){this.$refs.popup.close()},tranTime:function(e){var t=new Date(e),a=t.getFullYear(),i=(t.getMonth()+1+"").padStart(2,"0"),s=(t.getDate()+"").padStart(2,"0");return"".concat(a,"-").concat(i,"-").concat(s)},goMap:function(){uni.openLocation({latitude:this.detailMessage.latitude,longitude:this.detailMessage.longitude,scale:18})}}});t.default=o},"222f":function(e,t,a){"use strict";a.r(t);var i=a("e5da"),s=a("2688");for(var n in s)"default"!==n&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("787d");var o,d=a("f0c5"),u=Object(d["a"])(s["default"],i["b"],i["c"],!1,null,"796d589c",null,!1,i["a"],o);t["default"]=u.exports},2688:function(e,t,a){"use strict";a.r(t);var i=a("218a"),s=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=s.a},"787d":function(e,t,a){"use strict";var i=a("17ae"),s=a.n(i);s.a},cb89:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".swiper[data-v-796d589c]{width:100%;height:%?350?%}.swiper uni-image[data-v-796d589c]{width:100%;height:100%}.noPic[data-v-796d589c]{width:100%;height:%?350?%}.houseMessage1[data-v-796d589c]{width:100%;padding-bottom:%?20?%;border-bottom:%?1?% solid #f2f2f2}.houseMessage1 .title[data-v-796d589c]{font-size:%?36?%;font-weight:700;box-sizing:border-box;padding:%?10?% %?20?%}.houseMessage1 .message1[data-v-796d589c]{display:flex;box-sizing:border-box;padding:%?10?% %?20?%}.houseMessage1 .message1 .left1[data-v-796d589c]{width:%?260?%}.houseMessage1 .message1 .right1[data-v-796d589c]{width:%?300?%}.houseMessage1 .message1 .right2[data-v-796d589c]{width:%?480?%}.houseMessage1 .message1 .go[data-v-796d589c]{color:#3098f3;box-sizing:border-box;padding-left:%?40?%}.houseMessage1 .message1 .color[data-v-796d589c]{width:%?150?%;height:%?40?%;border:%?1?% solid #000}.houseMessage1 .message1 .color1[data-v-796d589c]{background-color:#fe5d35}.houseMessage1 .message1 .color2[data-v-796d589c]{background-color:#ffd013}.houseMessage1 .message1 .color3[data-v-796d589c]{background-color:#03bf16}.houseMessage2[data-v-796d589c]{width:100%;padding:%?40?% 0;flex-wrap:wrap}.houseMessage2 .message2[data-v-796d589c]{display:flex;width:100%;box-sizing:border-box;padding:%?10?% %?20?%}.houseMessage2 .message2 .left2[data-v-796d589c]{width:%?280?%}.houseMessage2 .message2 .rigth2[data-v-796d589c]{width:%?350?%}.pic-box[data-v-796d589c]{width:100%;display:flex;justify-content:space-around;padding-bottom:%?50?%}.pic-box uni-image[data-v-796d589c]{width:%?120?%;height:%?120?%;margin-bottom:%?20?%}.pic-box .txt[data-v-796d589c]{text-align:center}.popup[data-v-796d589c]{width:%?750?%;height:%?350?%;background-color:#fff}.popup .title[data-v-796d589c]{font-size:%?36?%;padding:%?30?%}.popup .content[data-v-796d589c]{font-size:%?32?%;padding:%?30?%}.popup .btn[data-v-796d589c]{display:flex;margin:%?50?% 0 0 %?350?%}.popup .btn .btn-1[data-v-796d589c]{width:%?160?%;height:%?70?%;line-height:%?70?%;font-size:%?36?%;padding:0;margin:0}.popup .btn .btn-2[data-v-796d589c]{width:%?160?%;height:%?70?%;line-height:%?70?%;font-size:%?36?%;padding:0;margin-left:%?30?%;color:#fff;background-color:#3591e2}",""]),e.exports=t},e5da:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var i={uniPopup:a("5f9f").default},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"houser-detail"},[a("div",[e.detailMessage.pictureUrlList?a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:2e3,duration:500}},e._l(e.detailMessage.pictureUrlList,(function(e){return a("v-uni-swiper-item",[a("v-uni-image",{attrs:{src:e.pictureUrl}})],1)})),1):a("v-uni-image",{staticClass:"noPic",attrs:{src:"/static/noPic.png"}})],1),a("v-uni-view",{staticClass:"houseMessage1"},[a("v-uni-view",{staticClass:"title"},[e._v(e._s(e.detailMessage.placeName))]),a("v-uni-view",{staticClass:"message1"},[a("v-uni-view",{staticClass:"left1"},[e._v("小区地址:")]),a("v-uni-view",{staticClass:"right2"},[e._v(e._s(e.detailMessage.placeAddress))])],1),a("v-uni-view",{staticClass:"message1"},[a("v-uni-view",{staticClass:"left1"},[e._v("建成时间:")]),a("v-uni-view",{staticClass:"right2"},[e._v(e._s("0001-01-01T00:00:00"===e.detailMessage.buildTime||null===e.detailMessage.buildTime?"":e.tranTime(e.detailMessage.buildTime)))])],1),a("v-uni-view",{staticClass:"message1"},[a("v-uni-view",{staticClass:"left1"},[e._v("物业(管理)单位:")]),a("v-uni-view",{staticClass:"right2"},[e._v(e._s(e.detailMessage.propertyUnit))])],1),a("v-uni-view",{staticClass:"message1"},[a("v-uni-view",{staticClass:"left1"},[e._v("联系人：")]),a("v-uni-view",{staticClass:"right1"},[e._v(e._s(e.detailMessage.placeFZRName))])],1),a("v-uni-view",{staticClass:"message1"},[a("v-uni-view",{staticClass:"left1"},[e._v("联系人电话：")]),a("v-uni-view",{staticClass:"right1"},[e._v(e._s(e.detailMessage.placeFZRPhone))])],1),a("v-uni-view",{staticClass:"message1"},[a("v-uni-view",{staticClass:"left1"},[e._v("存在隐患：")]),a("v-uni-view",{staticClass:"right1"},[e._v(e._s(e.detailMessage.faultContent))])],1)],1),a("v-uni-view",{staticClass:"pic-box"},e._l(e.imgs,(function(t,i){return a("v-uni-view",{staticClass:"box",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.picClick(i)}}},[a("v-uni-image",{attrs:{src:t.image}}),a("v-uni-view",{staticClass:"txt"},[e._v(e._s(t.text))])],1)})),1),a("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[a("v-uni-view",{staticClass:"popup"},[a("v-uni-view",{staticClass:"title"},[e._v("提示")]),a("v-uni-view",{staticClass:"content"},[e._v("确认要删除吗？")]),a("v-uni-view",{staticClass:"btn"},[a("v-uni-button",{staticClass:"btn-1",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.popupCancle.apply(void 0,arguments)}}},[e._v("取消")]),a("v-uni-button",{staticClass:"btn-2",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.confirmDelete.apply(void 0,arguments)}}},[e._v("确定")])],1)],1)],1)],1)},n=[]},ecb7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=0,s={jump:i};t.default=s}}]);