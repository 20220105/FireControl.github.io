(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-house_add-house_add"],{"0377":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-93c07d72]{background-color:#f1f4f6}body.?%PAGE?%[data-v-93c07d72]{background-color:#f1f4f6}",""]),t.exports=e},"1be8":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={guiSelectMenu:n("65e5").default,uniFilePicker:n("ff40").default,uniPopup:n("5f9f").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"box01"},[n("v-uni-view",{staticClass:"list-txt"},[n("v-uni-text",{staticClass:"list-left"},[t._v("所属辖区")]),n("v-uni-view",{staticClass:"gui-form-body list-right02",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}},[n("gui-select-menu",{ref:"selectMenu1",staticClass:"select",attrs:{items:t.selectMenu1,padding:"0",selectIndex:t.selectIndex},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.select1.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"list-txt"},[n("v-uni-text",{staticClass:"list-left"},[n("v-uni-text",{staticClass:"ruquire"},[t._v("*")]),t._v("详细地址")],1),n("v-uni-view",{staticClass:"gui-form-body list-right"},[n("v-uni-input",{attrs:{type:"text",name:"rhAddress",placeholder:""},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputting.apply(void 0,arguments)}},model:{value:t.formData.rhAddress,callback:function(e){t.$set(t.formData,"rhAddress",e)},expression:"formData.rhAddress"}})],1),t.formData.rhAddress.length>=1?n("v-uni-text",{staticClass:"gui-form-icon gui-icons gui-text-center gui-color-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearRhAddress.apply(void 0,arguments)}}},[t._v("")]):t._e()],1),n("v-uni-view",{staticClass:"list-txt"},[n("v-uni-text",{staticClass:"list-left"},[n("v-uni-text",{staticClass:"ruquire"},[t._v("*")]),t._v("房东姓名")],1),n("v-uni-view",{staticClass:"gui-form-body list-right"},[n("v-uni-input",{attrs:{type:"text",name:"rhfdName",placeholder:""},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputting.apply(void 0,arguments)}},model:{value:t.formData.rhfdName,callback:function(e){t.$set(t.formData,"rhfdName",e)},expression:"formData.rhfdName"}})],1),t.formData.rhfdName.length>=1?n("v-uni-text",{staticClass:"gui-form-icon gui-icons gui-text-center gui-color-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearName3.apply(void 0,arguments)}}},[t._v("")]):t._e()],1),n("v-uni-view",{staticClass:"list-txt"},[n("v-uni-text",{staticClass:"list-left"},[n("v-uni-text",{staticClass:"ruquire"},[t._v("*")]),t._v("联系电话")],1),n("v-uni-view",{staticClass:"gui-form-body list-right"},[n("v-uni-input",{attrs:{type:"text",name:"rhfdPhone",placeholder:""},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputting.apply(void 0,arguments)}},model:{value:t.formData.rhfdPhone,callback:function(e){t.$set(t.formData,"rhfdPhone",e)},expression:"formData.rhfdPhone"}})],1),t.formData.rhfdPhone.length>=1?n("v-uni-text",{staticClass:"gui-form-icon gui-icons gui-text-center gui-color-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearName4.apply(void 0,arguments)}}},[t._v("")]):t._e()],1)],1),n("v-uni-view",{staticClass:"box01"},[n("v-uni-view",{staticClass:"list-txt"},[n("v-uni-text",{staticClass:"list-left"},[n("v-uni-text",{staticClass:"ruquire"},[t._v("*")]),t._v("建筑层数")],1),n("v-uni-view",{staticClass:"gui-form-body list-right"},[n("v-uni-input",{attrs:{type:"text",name:"floorCount",placeholder:""},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputtingFloorCount.apply(void 0,arguments)}},model:{value:t.formData.floorCount,callback:function(e){t.$set(t.formData,"floorCount",t._n(e))},expression:"formData.floorCount"}})],1),null!==t.formData.floorCount?n("v-uni-text",{staticClass:"gui-form-icon gui-icons gui-text-center gui-color-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearFloorCount.apply(void 0,arguments)}}},[t._v("")]):t._e()],1),n("v-uni-view",{staticClass:"list-txt"},[n("v-uni-text",{staticClass:"list-left"},[n("v-uni-text",{staticClass:"ruquire"},[t._v("*")]),t._v("房间数量")],1),n("v-uni-view",{staticClass:"gui-form-body list-right"},[n("v-uni-input",{attrs:{type:"text",name:"rentalRoomCount",placeholder:""},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputtingRentalRoomCount.apply(void 0,arguments)}},model:{value:t.formData.rentalRoomCount,callback:function(e){t.$set(t.formData,"rentalRoomCount",t._n(e))},expression:"formData.rentalRoomCount"}})],1),null!==t.formData.rentalRoomCount?n("v-uni-text",{staticClass:"gui-form-icon gui-icons gui-text-center gui-color-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearRentalRoomCount.apply(void 0,arguments)}}},[t._v("")]):t._e()],1),n("v-uni-view",{staticClass:"list-txt"},[n("v-uni-text",{staticClass:"list-left"},[n("v-uni-text",{staticClass:"ruquire"},[t._v("*")]),t._v("承租人数")],1),n("v-uni-view",{staticClass:"gui-form-body list-right"},[n("v-uni-input",{attrs:{type:"text",name:"lesseeCount",placeholder:""},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputtingLesseeCount.apply(void 0,arguments)}},model:{value:t.formData.lesseeCount,callback:function(e){t.$set(t.formData,"lesseeCount",t._n(e))},expression:"formData.lesseeCount"}})],1),null!==t.formData.lesseeCount?n("v-uni-text",{staticClass:"gui-form-icon gui-icons gui-text-center gui-color-gray",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearLesseeCount.apply(void 0,arguments)}}},[t._v("")]):t._e()],1),n("v-uni-view",{staticClass:"list-txt02 list-txt-border"},[n("v-uni-view",{staticClass:"list-left02"},[t._v("上传照片")]),n("uni-file-picker",{attrs:{fileMediatype:"image",mode:"grid",limit:3,title:"最多选择三张照片","image-styles":t.imageStyles},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.select.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePic.apply(void 0,arguments)}},model:{value:t.imageValue,callback:function(e){t.imageValue=e},expression:"imageValue"}}),n("v-uni-button",{staticClass:"upload",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.upload.apply(void 0,arguments)}}},[t._v("上传照片")])],1)],1),n("v-uni-view",{staticClass:"box03"},[n("v-uni-view",{staticClass:"btn-left"},[n("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)],1),n("uni-popup",{ref:"popup",attrs:{"background-color":"#fff",type:"bottom"}},[n("v-uni-view",{staticClass:"p-box"},[n("v-uni-view",{staticClass:"p-title"},[t._v("请选择所在的地区")]),n("v-uni-view",{staticClass:"p-show"},[t._v(t._s(t.nowCity))]),n("v-uni-scroll-view",{staticClass:"p-scroll",attrs:{"scroll-y":"true"}},t._l(t.cityData,(function(e){return n("v-uni-view",{staticClass:"city",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.change(e.regionID,e.regionName)}}},[n("v-uni-text",[t._v(t._s(e.regionName))])],1)})),1)],1)],1)],1)},o=[]},"203f":function(t,e,n){var i=n("d09e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("07da220f",i,!0,{sourceMap:!1,shadowMode:!1})},"204e":function(t,e,n){"use strict";var i=n("4ea4");n("4160"),n("a434"),n("ac1f"),n("5319"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("7edc")),s=(i(n("929a")),{data:function(){return{formData:{villageGuid:null,villageName:"",rhAddress:"",longitude:0,latitude:0,rhfdName:"",rhfdPhone:"",floorCount:null,rentalRoomCount:null,lesseeCount:null,pictureUrlList:[]},params:{ParentID:""},cityData:[],nowCity:"",nowCityId:"",picList:[],selectMenu1:[""],selectValue:[""],selectIndex:1,gender6:["---请选择---","全部","出租房","其他"],gender7:["---请选择---","全部","出租房","其他"],genderIndex6:null,genderIndex7:null,imageValue:[],imageStyles:{width:110,height:110}}},onLoad:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getgridregion();case 2:t.formData.villageGuid=t.selectValue[1],t.formData.villageName=t.selectMenu1[1];case 4:case"end":return e.stop()}}),e)})))()},methods:{getgridregion:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.default.getgridregion();case 2:n=e.sent,console.log(n),n[1].data.returnObject.forEach((function(e){t.selectMenu1.push(e.regionName),t.selectValue.push(e.regionID)}));case 5:case"end":return e.stop()}}),e)})))()},getdictregionsimplelist:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.default.getdictregionsimplelist(t.params);case 2:n=e.sent,console.log(n),n[1].data.returnObject.length?t.cityData=n[1].data.returnObject:(t.cityData=[],t.params.ParentID="",t.$refs.popup.close());case 5:case"end":return e.stop()}}),e)})))()},change:function(t,e){this.params.ParentID=t,this.nowCity=this.nowCity+e+"/",this.nowCityId=this.nowCityId+t+"/",this.getdictregionsimplelist()},toggle:function(){this.nowCity="",this.$refs.popup.open(),this.getdictregionsimplelist()},select1:function(t){this.formData.villageGuid=this.selectValue[t],this.formData.villageName=this.selectMenu1[t],console.log(this.formData)},inputting:function(t){console.log(t);var e=t.detail.value;console.log(e)},inputtingFloorCount:function(t){var e=this,n=t.detail.value,i=/[^\d]/g;this.$nextTick((function(){e.formData.floorCount=n.replace(i,"")-0}))},inputtingRentalRoomCount:function(t){var e=this,n=t.detail.value,i=/[^\d]/g;this.$nextTick((function(){e.formData.rentalRoomCount=n.replace(i,"")-0}))},inputtingLesseeCount:function(t){var e=this,n=t.detail.value,i=/[^\d]/g;this.$nextTick((function(){e.formData.lesseeCount=n.replace(i,"")-0}))},clearAddress:function(){this.formData.address=""},clearRhAddress:function(){this.formData.rhAddress=""},clearRhfdName:function(){this.formData.rhfdName=""},clearRhfdPhone:function(){this.formData.rhfdPhone=""},clearFloorCount:function(){this.formData.floorCount=""},clearRentalRoomCount:function(){this.formData.rentalRoomCount=""},clearLesseeCount:function(){this.formData.lesseeCount=""},pickerChange6:function(t){console.log(t),this.genderIndex6=t.detail.value,this.formData.name6=this.gender6[this.genderIndex6]},pickerChange7:function(t){console.log(t),this.genderIndex7=t.detail.value,this.formData.name7=this.gender7[this.genderIndex7]},isPaymentChange:function(t){this.formData.isPayment=t.detail.value},select:function(t){var e=this;console.log(t),t.tempFiles.forEach((function(t){e.picList.push(t.file)})),console.log("图片数组",this.picList)},upload:function(){var t=this;this.picList.forEach((function(e){uni.uploadFile({url:"http://39.175.64.217:8026/api/Upload/images",file:e,success:function(e){console.log("成功",JSON.parse(e.data));var n=JSON.parse(e.data);t.formData.pictureUrlList.push({pictureUrl:n.returnObject.primaryPath}),uni.showToast({title:n.message})},fail:function(t){uni.showToast({title:"上传失败"})}})})),console.log(this.formData)},deletePic:function(t){var e=this;this.picList.forEach((function(n,i){n.path===t.tempFile.path&&(e.picList.splice(i,1),console.log(e.picList))})),console.log(t)},save:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t.formData),uni.showLoading({title:"上传中"}),""!==t.formData.rhAddress&&""!==t.formData.rhfdName&&""!==t.formData.rhfdPhone&&null!==t.formData.floorCount&&null!==t.formData.rentalRoomCount&&null!==t.formData.lesseeCount){e.next=6;break}uni.showToast({title:"请填写必填项"}),e.next=11;break;case 6:return e.next=8,o.default.addrentalhousing(t.formData);case 8:n=e.sent,!0===n[1].data.isSuccess?(uni.showToast({title:n[1].data.message}),uni.navigateTo({url:"/pages/house/house"})):uni.showToast({title:n[1].data.message}),console.log(n);case 11:console.log(t.formData),uni.hideLoading();case 13:case"end":return e.stop()}}),e)})))()},submit:function(t){var e=t.detail.value;e.name1=this.formData.name1,console.log(e)}}});e.default=s},2263:function(t,e,n){"use strict";var i=n("203f"),a=n.n(i);a.a},a795:function(t,e,n){"use strict";n.r(e);var i=n("1be8"),a=n("c583");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d4d5"),n("2263");var s,r=n("f0c5"),l=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"93c07d72",null,!1,i["a"],s);e["default"]=l.exports},ae11:function(t,e,n){var i=n("0377");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("65f9260e",i,!0,{sourceMap:!1,shadowMode:!1})},c583:function(t,e,n){"use strict";n.r(e);var i=n("204e"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d09e:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* uni.scss */.p-box[data-v-93c07d72]{width:%?750?%;height:%?950?%}.p-box .p-title[data-v-93c07d72]{width:%?350?%;height:%?30?%;margin:%?10?% auto;font-size:%?38?%;font-weight:700}.p-box .p-show[data-v-93c07d72]{height:%?60?%;border-bottom:%?1?% solid #000;margin:%?40?% 0}.p-box .p-scroll[data-v-93c07d72]{width:100%;height:%?760?%}.p-box .p-scroll .city[data-v-93c07d72]{margin:%?10?%}.box01[data-v-93c07d72]{background-color:#fff;padding:0 %?30?%;margin-bottom:%?20?%}.list-txt[data-v-93c07d72]{display:flex;justify-content:space-between;align-items:center;align-content:center;width:100%;text-align:left;height:%?85?%;position:relative;font-size:%?28?%;color:#707070;border-bottom:solid %?1?% #eddddd}.list-left[data-v-93c07d72]{padding-left:%?25?%;width:%?180?%}.list-right uni-input[data-v-93c07d72]{color:#333;font-size:%?28?%}.qgicon[data-v-93c07d72]{margin-left:%?8?%}.list-txt-border[data-v-93c07d72]{border:none}.qgicon01[data-v-93c07d72]{color:#3098f3;margin-right:%?15?%;font-size:%?30?%}.list-radio[data-v-93c07d72]{width:%?500?%}.list-radio-item[data-v-93c07d72]{padding:0 %?10?%;font-size:%?28?%;flex-direction:row;flex-wrap:nowrap;align-items:center}.list-radio-item-txt[data-v-93c07d72]{display:inline-block;width:%?150?%;color:#333}.list-txt02[data-v-93c07d72]{font-size:%?28?%;color:#707070;padding:%?25?% 0 %?25?% %?25?%}.list-left02[data-v-93c07d72]{margin-bottom:%?20?%}.box03[data-v-93c07d72]{display:flex;justify-content:space-between;height:%?120?%;width:%?650?%;margin:%?30?% %?50?% 0}uni-button[data-v-93c07d72]::after{border:none!important;background-color:none!important}uni-button[data-v-93c07d72]{border-radius:0}.btn-left uni-button[data-v-93c07d72]{width:%?280?%;height:%?80?%;line-height:%?80?%;border-radius:%?10?%;font-size:%?30?%;text-align:center;color:#fff;background-color:#3098f3}.btn-right uni-button[data-v-93c07d72]{width:%?280?%;height:%?80?%;line-height:%?80?%;font-size:%?30?%;border-radius:%?4?%;text-align:center;color:#fff;background-color:#3098f3}.ruquire[data-v-93c07d72]{color:red;font-size:%?30?%;font-weight:700}.upload[data-v-93c07d72]{width:%?180?%;height:%?80?%;line-height:%?80?%;font-size:%?30?%;border-radius:%?4?%;background-color:#3098f3;margin-top:%?20?%}',""]),t.exports=e},d4d5:function(t,e,n){"use strict";var i=n("ae11"),a=n.n(i);a.a}}]);