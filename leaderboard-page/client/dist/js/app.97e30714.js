(function(t){function e(e){for(var n,o,i=e[0],u=e[1],c=e[2],p=0,d=[];p<i.length;p++)o=i[p],r[o]&&d.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/leaderboard-page/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[t._v("Leaderboard")])])],1),a("v-content",[a("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{"offset-md2":"",md8:"","offset-xs2":"",xs8:""}},[[a("v-data-table",{staticClass:"elevation-1",attrs:{"rows-per-page-items":[50,100,150],headers:t.headers,items:t.items,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-center"},[t._v("\n                  "+t._s((t.pagination.page-1)*t.pagination.rowsPerPage+e.index+1)+"\n                ")]),a("td",{staticClass:"text-xs-center"},[a("v-avatar",{attrs:{slot:"activator",size:"36px"},slot:"activator"},[a("img",{attrs:{src:"https://avatars.githubusercontent.com/"+e.item.UserLogin,alt:"Avatar"}})])],1),a("td",{staticClass:"text-xs-center"},[a("a",{attrs:{href:"https://github.com/"+e.item.UserLogin,target:"_blank"}},[t._v(t._s(e.item.UserLogin))])]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.IssueComments))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.IssuesCreated))])]}}])})]],2)],1)],1)],1)],1)},o=[],i=(a("96cf"),a("3b8d")),u=a("bc3a"),c=a.n(u),l={name:"App",components:{},data:function(){return{pagination:{sortBy:"IssueComments"},headers:[{text:"",value:"",align:"center"},{text:"",value:"",sortable:!1},{text:"Login",value:"UserLogin",align:"center"},{text:"issue Comments",value:"IssueComments",align:"right"},{text:"issues opened",value:"IssuesCreated",align:"right"}],items:[]}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/leaderboard");case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},p=l,d=a("2877"),f=a("6544"),v=a.n(f),g=a("7496"),m=a("8212"),b=a("a523"),h=a("549c"),x=a("8fea"),y=a("0e8f"),_=a("a722"),w=a("71d9"),C=a("2a7f"),O=Object(d["a"])(p,s,o,!1,null,null,null),j=O.exports;v()(O,{VApp:g["a"],VAvatar:m["a"],VContainer:b["a"],VContent:h["a"],VDataTable:x["a"],VFlex:y["a"],VLayout:_["a"],VToolbar:w["a"],VToolbarTitle:C["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")}});
//# sourceMappingURL=app.97e30714.js.map