(function(t){function e(e){for(var a,o,i=e[0],u=e[1],c=e[2],p=0,f=[];p<i.length;p++)o=i[p],n[o]&&f.push(n[o][0]),n[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],a=!0,i=1;i<r.length;i++){var u=r[i];0!==n[u]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},s=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/leaderboard-page/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=r("bb71");r("da64");a["a"].use(n["a"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[t._v("Leaderboard")])])],1),r("v-content",[r("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{"offset-md2":"",md8:"","offset-xs2":"",xs8:""}},[[r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",{staticClass:"text-xs-center"},[r("v-avatar",{attrs:{slot:"activator",size:"36px"},slot:"activator"},[r("img",{attrs:{src:"https://avatars.githubusercontent.com/"+e.item.UserLogin,alt:"Avatar"}})])],1),r("td",{staticClass:"text-xs-center"},[r("a",{attrs:{href:"https://github.com/"+e.item.UserLogin,target:"_blank"}},[t._v(t._s(e.item.UserLogin))])]),r("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.IssueComments))]),r("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.IssuesCreated))])]}}])})]],2)],1)],1)],1)],1)},o=[],i=(r("96cf"),r("3b8d")),u=r("bc3a"),c=r.n(u),l={name:"App",components:{},data:function(){return{headers:[{text:"",value:""},{text:"Login",value:"UserLogin"},{text:"issue Comments",value:"IssueComments"},{text:"issues opened",value:"IssuesCreated"}],items:[]}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/leaderboard");case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},p=l,f=r("2877"),d=r("6544"),v=r.n(d),m=r("7496"),b=r("8212"),h=r("a523"),x=r("549c"),g=r("8fea"),y=r("0e8f"),_=r("a722"),w=r("71d9"),C=r("2a7f"),O=Object(f["a"])(p,s,o,!1,null,null,null),j=O.exports;v()(O,{VApp:m["a"],VAvatar:b["a"],VContainer:h["a"],VContent:x["a"],VDataTable:g["a"],VFlex:y["a"],VLayout:_["a"],VToolbar:w["a"],VToolbarTitle:C["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(j)}}).$mount("#app")}});
//# sourceMappingURL=app.52034610.js.map