(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{100:function(e,a,t){},69:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:28,a="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n+=1)a+=t.charAt(Math.floor(Math.random()*t.length));return a}},70:function(e,a,t){"use strict";t.d(a,"d",(function(){return r})),t.d(a,"a",(function(){return o})),t.d(a,"c",(function(){return s})),t.d(a,"e",(function(){return i})),t.d(a,"b",(function(){return l})),t.d(a,"f",(function(){return u}));var n=window.jQuery;function r(){n("#board .square-55d63").removeClass("square")}function c(e){n("#board .square-".concat(e)).addClass("square")}function o(e,a){return!("w"===e&&-1!==a.search(/^b/))||"b"===e&&-1!==a.search(/^w/)}function s(e,a){var t=e.moves({square:a,verbose:!0});if(0!==t.length)for(var n=0;n<t.length;n+=1)c(t[n].to)}function i(e,a,t,n,r,c,o,s,i){var l="b"===e?"Black":"White";return i?"Draw by stalemate":o?"Draw by repetition":s?"Draw by insufficient material":n?"Draw position":c?"".concat(l," in checkmate, gameover"):r?"".concat(l," in check"):a>0?t?"Your Turn":"Opponent's move":"View Only"}function l(e,a){return 1===e&&"w"===a||2===e&&"b"===a}function u(e,a,t){if(1===e){if(0===a.blackTime||"b"===t)return"You won";if(0===a.whiteTime||"w"===t)return"You lost"}if(2===e){if(0===a.whiteTime||"w"===t)return"You won";if(0===a.blackTime||"b"===t)return"You lost"}}},71:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return c})),t.d(a,"c",(function(){return o}));var n=t(16);function r(e,a){var t=a.p1_token,n=a.p2_token;return e===t?1:e===n?2:0}var c=function(){return window.location?"".concat(window.location.origin).concat(window.location.pathname,"#"):window.location};function o(e,a){var t=e.id,r=n.c.collection("games").doc(t);"w"===a.turn()?r.update({"timeLeft.whiteTime":n.b.firestore.FieldValue.increment(-1)}):r.update({"timeLeft.blackTime":n.b.firestore.FieldValue.increment(-1)})}},72:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"c",(function(){return c})),t.d(a,"b",(function(){return o})),t.d(a,"e",(function(){return s})),t.d(a,"f",(function(){return i})),t.d(a,"d",(function(){return l}));var n=t(10);function r(e){return{type:n.a.CHANGE_BOARD,board:e}}function c(e){return{type:n.a.CHANGE_PIECE,piece:e}}function o(e){return{type:n.a.CHANGE_MODE,mode:e}}function s(e){return{type:n.a.UPDATE_MOVES,move:e}}function i(e){return{type:n.a.STATUS_TEXT,statusText:e}}function l(){return{type:n.a.DEFAULT_BOARD_SETTINGS}}},73:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c=t(19),o=t.n(c),s=t(71),i=t(70),l=t(75),u=t.n(l),m=t(76),d=t.n(m),p=t(77),f=t.n(p),g=t(78),v=t.n(g),E=t(79),b=t.n(E),_=t(80),h=t.n(_),w=t(81),N=t.n(w),k=t(82),y=t.n(k),O=[{src:d.a,id:1,type:"audio/webm"},{src:f.a,id:2,type:"ogg"},{src:u.a,id:3,type:"mpeg"},{src:v.a,id:4,type:"wav"}],T=[{src:h.a,id:1,type:"audio/webm"},{src:N.a,id:2,type:"ogg"},{src:b.a,id:3,type:"mpeg"},{src:y.a,id:4,type:"wav"}],j=(t(83),function(e){var a=e.moveSongRef,t=e.checkSongRef,n=e.token,c=e.links,o=e.adress,s=e.userName,i=e.points,l=e.whiteTime,u=e.blackTime,m=e.playerNum,d=e.removeLink,p=e.isGameEnded,f=e.onBackToHome;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"game"},p&&r.a.createElement("button",{type:"button",className:"backToHome",onClick:f},"Back to Home"),r.a.createElement("div",{className:"userInformations"},r.a.createElement("div",{className:"userWrapper"},r.a.createElement("span",{className:"playerName"},n||2===m?"Friend":"Guest 120"),r.a.createElement("span",{className:"points"},"(500)")),r.a.createElement("div",{className:"timer"},1===m?u:2===m?l:"5: 00")),r.a.createElement("div",{id:"board",className:"board"}),r.a.createElement("div",{className:"userInformations"},r.a.createElement("div",{className:"userWrapper"},r.a.createElement("span",{className:"playerName"},null!==s&&void 0!==s?s:"Guest 152"),r.a.createElement("span",{className:"points"},"(".concat(null!==i&&void 0!==i?i:500,")"))),r.a.createElement("div",{className:"timer"},1===m?l:2===m?u:"5: 00")),!0===c&&r.a.createElement("div",{className:"links"},r.a.createElement("h3",{className:"links__header"},"Second player Link"),r.a.createElement("div",{className:"links__link"},r.a.createElement("a",{target:"_blank",rel:"noreferrer",href:o.secondPlayer},o.secondPlayer)),r.a.createElement("div",{className:"closeButton",role:"button",tabIndex:0,onClick:d},"X"))),r.a.createElement("audio",{ref:a},O.map((function(e){return r.a.createElement("source",{src:e.src,key:e.id,type:e.type})}))),r.a.createElement("audio",{ref:t},T.map((function(e){return r.a.createElement("source",{src:e.src,key:e.id,type:e.type})}))))}),S=window.jQuery;j.propTypes={moveSongRef:o.a.oneOfType([o.a.func,o.a.shape({current:o.a.instanceOf(Element)})]),checkSongRef:o.a.oneOfType([o.a.func,o.a.shape({current:o.a.instanceOf(Element)})]),links:o.a.bool,userName:o.a.string,points:o.a.number,token:o.a.string,playerNum:o.a.number,isGameEnded:o.a.bool,p1_token:o.a.string,p2_token:o.a.string,timeLeft:o.a.shape({whiteTime:o.a.number,blackTime:o.a.number,isGameActive:o.a.bool}),changeSite:o.a.func,updateLocalStorage:o.a.func,turn:o.a.string};a.a=function(e){var a=e.moveSongRef,t=e.checkSongRef,c=e.p1_token,o=e.p2_token,l=e.links,u=e.userName,m=e.points,d=e.token,p=e.timeLeft,f=e.playerNum,g=e.isGameEnded,v=e.changeSite,E=e.updateLocalStorage,b=e.turn;Object(n.useEffect)((function(){var e,a,t=localStorage.getItem("user"),n=Object(i.f)(f,p,b);null!==t&&(t=JSON.parse(t),g&&t&&E("You won"===n?(null===(e=t)||void 0===e?void 0:e.points)+8:(null===(a=t)||void 0===a?void 0:a.points)-8))}),[g]);var _={firstPlayer:"".concat(Object(s.a)(),"/play/online/").concat(c),secondPlayer:"".concat(Object(s.a)(),"/play/online/").concat(o)},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,a=Math.floor(e/60),t=Math.floor(e-60*a);return"".concat(a,": ").concat(t<10?"0".concat(t):t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{whiteTime:h(null===p||void 0===p?void 0:p.whiteTime),blackTime:h(null===p||void 0===p?void 0:p.blackTime),playerNum:f,adress:_,removeLink:function(){S(".links").css("display","none")},moveSongRef:a,checkSongRef:t,links:l,userName:u,points:m,isGameEnded:g,onBackToHome:function(){v("/")},token:d}))}},75:function(e,a,t){e.exports=t.p+"static/media/game.7edb4c26.mp3"},76:function(e,a,t){e.exports=t.p+"static/media/game.d6fc5bd9.webm"},77:function(e,a,t){e.exports=t.p+"static/media/game.e3734f3d.ogg"},78:function(e,a,t){e.exports=t.p+"static/media/game.a9b707cc.wav"},79:function(e,a,t){e.exports=t.p+"static/media/check.74550551.mp3"},80:function(e,a,t){e.exports=t.p+"static/media/check.4357e894.webm"},81:function(e,a,t){e.exports=t.p+"static/media/check.2f14f7b7.ogg"},82:function(e,a,t){e.exports=t.p+"static/media/check.8c1d94cd.wav"},83:function(e,a,t){},90:function(e,a,t){"use strict";var n=t(1),r=t.n(n),c=t(27),o=(t(94),function(e){var a=e.moves;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"moves"},Object(c.a)(a).reverse().map((function(e){var a=e.whiteSan,t=e.blackSan,n=e.index,c=e.id;return r.a.createElement("li",{className:"moves__item",key:c},r.a.createElement("span",{className:"index"},n),r.a.createElement("span",{className:"san"},a),r.a.createElement("span",{className:"san"},t))}))))}),s=t(95),i=t.n(s),l=t(97),u=t(98),m=t(28),d=t(68),p=t(6),f=t(16),g=t(69),v=t(19),E=t.n(v),b=function(e){var a=e.msg,t=e.user,n=a.uid,c=a.message,o=a.photoURL,s=n===(null===t||void 0===t?void 0:t.uid)?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message ".concat(s)},r.a.createElement("div",{className:"userMessage ".concat(s)},c),r.a.createElement("img",{src:o,alt:"userPhoto"}))))},_=t(37),h=(t(99),Object(n.forwardRef)((function(e,a){var t=e.messages,n=e.user,c=e.formValue,o=e.sendMessage,s=e.handleChange,i=e.loginGoogle,l=e.loginFacebook;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"scoreBoard__info__chat"},r.a.createElement("div",{className:"scoreBoard__info__header"},"Chat"),r.a.createElement("div",{className:"scoreBoard__info__options"},r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"windowChat"},t.map((function(e){return r.a.createElement(b,{key:e.id,user:n,msg:e,uid:e.uid})})),r.a.createElement("span",{ref:a})),r.a.createElement("div",{className:"chatMessage"},r.a.createElement("form",{onSubmit:o},r.a.createElement("input",{type:"text",value:c,onChange:s,placeholder:"Aa"}),r.a.createElement("button",{type:"submit"},r.a.createElement("span",{role:"img","aria-label":"icon"},"\ud83d\udd4a\ufe0f")))),!n&&r.a.createElement(_.a,{loginGoogle:i,loginFacebook:l})))))})));b.propTypes={messages:E.a.arrayOf(E.a.shape({docId:E.a.string,message:E.a.string,photoURL:E.a.string,uid:E.a.string})),user:E.a.shape({userName:E.a.string,photo:E.a.string,uid:E.a.string,points:E.a.number}),formValue:E.a.string,sendMessage:E.a.func,handleChange:E.a.func,loginGoogle:E.a.func,loginFacebook:E.a.func};var w=h,N=null,k=Object(p.f)((function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),o=t[0],s=t[1],p=Object(d.a)(f.a),v=Object(m.a)(p,1)[0],E=Object(n.useRef)(null),b=Object(n.useState)(""),_=Object(m.a)(b,2),h=_[0],k=_[1],y=Object(n.useState)([]),O=Object(m.a)(y,2),T=O[0],j=O[1];Object(n.useEffect)((function(){var a;return a=e.match.params.token,["p1_token","p2_token"].forEach((function(e){var t=f.c.collection("games").where(e,"==",a);N=t.onSnapshot((function(e){if(e.size){var a=e.docs.map((function(e){return{data:e.data(),id:e.id}})),t=Object(m.a)(a,1)[0],n=t.data.messages,r=t.id;n&&n.length>14&&function(e,a){var t=f.c.collection("games").doc(e),n=Object(u.a)(a).slice(1);t.update({messages:n})}(r,n),j(null!==n&&void 0!==n?n:[]),k(r)}}))})),function(){return N&&N()}}),[]);var S=function(){var e=Object(l.a)(i.a.mark((function e(a){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==o&&v){e.next=3;break}return e.abrupt("return");case 3:t=v.uid,n=v.photoURL,f.c.collection("games").doc(h).update({messages:[].concat(Object(c.a)(T),[{message:o,uid:t,photoURL:n,id:Object(g.a)(6)}])}).then((function(){s(""),window.innerWidth<1e3&&E.current.scrollIntoView({behavior:"smooth"})}));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{messages:T,ref:E,sendMessage:S,user:v,formValue:o,handleChange:function(e){s(e.target.value)},loginGoogle:f.e,loginFacebook:f.d}))}));t(100),a.a=function(e){var a=e.moves,t=e.statusText,n=e.isOnline;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"scoreBoard"},r.a.createElement("div",{className:"scoreBoard__wrapper"},r.a.createElement("div",{className:"scoreBoard__header flex-c"},""===t?"Your turn":t),r.a.createElement("div",{className:"scoreBoard__info"},r.a.createElement("div",{className:"scoreBoard__info__moves"},r.a.createElement("div",{className:"scoreBoard__info__header"},"Last Moves"),r.a.createElement("div",{className:"scoreBoard__info__options"},0===a.length?r.a.createElement("div",{className:"dots"},r.a.createElement("span",{className:"dot"},"."),r.a.createElement("span",{className:"dot"},"."),r.a.createElement("span",{className:"dot"},".")):r.a.createElement(o,{moves:a})),n&&r.a.createElement(k,null))))))}},91:function(e,a,t){"use strict";var n=t(28),r=t(1),c=t.n(r),o="https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png",s=function(e){var a=e.status,t=e.photo,n=void 0===t?o:t,r=e.points,s=e.isSignedIn,i=e.deleteCard;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"endGameCard ".concat("You won"===a?"greenBackgrond":"greyBackground")},c.a.createElement("div",{className:"endGameCard__close"},c.a.createElement("button",{className:"endGameCard__close__button",type:"button",onClick:i},"\u2718")),c.a.createElement("div",{className:"wrapper"},c.a.createElement("h3",{className:"wrapper__header"},a),c.a.createElement("div",{className:"wrapper__images"},c.a.createElement("img",{src:n,alt:"userImage",className:"wrapper__image ".concat("You won"===a?"win__border":"lose__border")}),c.a.createElement("img",{src:o,alt:"userImage",className:"wrapper__image ".concat("You lost"===a?"win__border":"lose__border")})),c.a.createElement("div",{className:"wrapper__rating"},c.a.createElement("h3",{className:"wrapper__rating__header"},"Rating"),c.a.createElement("div",{className:"wrapper__rating__points"},c.a.createElement("span",{className:"wrapper__rating__point"},r),s?"You won"===a?c.a.createElement("span",{className:"wrapper__rating__win"},"+8"):c.a.createElement("span",{className:"wrapper__rating__lose"},"-8"):c.a.createElement("span",{className:"wrapper__rating__unranked"},"Unranked"))))))},i=t(16),l=t(70),u=(t(93),window.jQuery);a.a=function(e){var a=e.timeLeft,t=e.turn,o=e.playerNum,m=void 0===o?1:o,d=e.user;Object(r.useEffect)((function(){if(d){var e=i.c.collection("users").where("uid","==",d.uid),r=Object(l.f)(m,a,t);e.get().then((function(e){if(1===e.size){var a=Object(n.a)(e.docs,1)[0].id;"You won"===r?i.c.collection("users").doc(a).update({points:i.b.firestore.FieldValue.increment(8)}):i.c.collection("users").doc(a).update({points:i.b.firestore.FieldValue.increment(-8)})}}))}}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,{deleteCard:function(){u(".endGameCard").css("display","none")},status:Object(l.f)(m,a,t),photo:null===d||void 0===d?void 0:d.photo,points:null===d||void 0===d?void 0:d.points,isSignedIn:null!==d}))}},93:function(e,a,t){},94:function(e,a,t){},99:function(e,a,t){}}]);
//# sourceMappingURL=1.2799a765.chunk.js.map