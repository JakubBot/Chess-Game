(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{67:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:28,a="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n+=1)a+=t.charAt(Math.floor(Math.random()*t.length));return a}},68:function(e,a,t){"use strict";t.d(a,"d",(function(){return r})),t.d(a,"a",(function(){return c})),t.d(a,"c",(function(){return o})),t.d(a,"e",(function(){return i})),t.d(a,"b",(function(){return l})),t.d(a,"f",(function(){return u}));var n=window.jQuery;function r(){n("#board .square-55d63").removeClass("square")}function s(e){n("#board .square-".concat(e)).addClass("square")}function c(e,a){return!("w"===e&&-1!==a.search(/^b/))||"b"===e&&-1!==a.search(/^w/)}function o(e,a){var t=e.moves({square:a,verbose:!0});if(0!==t.length)for(var n=0;n<t.length;n+=1)s(t[n].to)}function i(e,a,t,n,r,s,c,o,i){var l="b"===e?"Black":"White";return i?"Draw by stalemate":c?"Draw by repetition":o?"Draw by insufficient material":n?"Draw position":s?"".concat(l," in checkmate, gameover"):r?"".concat(l," in check"):a>0?t?"Your Turn":"Opponent's move":"View Only"}function l(e,a){return 1===e&&"w"===a||2===e&&"b"===a}function u(e,a,t){if(1===e){if(0===a.blackTime||"b"===t)return"You won";if(0===a.whiteTime||"w"===t)return"You lost"}if(2===e){if(0===a.whiteTime||"w"===t)return"You won";if(0===a.blackTime||"b"===t)return"You lost"}}},69:function(e,a,t){"use strict";t.d(a,"b",(function(){return r})),t.d(a,"a",(function(){return s})),t.d(a,"c",(function(){return c}));var n=t(15);function r(e,a){var t=a.p1_token,n=a.p2_token;return e===t?1:e===n?2:0}var s=function(){return window.location?"".concat(window.location.origin).concat(window.location.pathname,"#"):window.location};function c(e,a){var t=e.id,r=n.c.collection("games").doc(t);"w"===a.turn()?r.update({"timeLeft.whiteTime":n.b.firestore.FieldValue.increment(-1)}):r.update({"timeLeft.blackTime":n.b.firestore.FieldValue.increment(-1)})}},70:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"c",(function(){return s})),t.d(a,"b",(function(){return c})),t.d(a,"e",(function(){return o})),t.d(a,"f",(function(){return i})),t.d(a,"d",(function(){return l}));var n=t(10);function r(e){return{type:n.a.CHANGE_BOARD,board:e}}function s(e){return{type:n.a.CHANGE_PIECE,piece:e}}function c(e){return{type:n.a.CHANGE_MODE,mode:e}}function o(e){return{type:n.a.UPDATE_MOVES,move:e}}function i(e){return{type:n.a.STATUS_TEXT,statusText:e}}function l(){return{type:n.a.DEFAULT_BOARD_SETTINGS}}},71:function(e,a,t){"use strict";var n=t(1),r=t.n(n),s=t(20),c=t.n(s),o=t(69),i=t(68),l=(t(73),function(e){var a=e.songRef,t=e.token,n=e.links,s=e.adress,c=e.userName,o=e.points,i=e.whiteTime,l=e.blackTime,u=e.playerNum,m=e.removeLink,d=e.isGameEnded,f=e.onBackToHome;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"game"},d&&r.a.createElement("button",{type:"button",className:"backToHome",onClick:f},"Back to Home"),r.a.createElement("div",{className:"userInformations"},r.a.createElement("div",{className:"userWrapper"},r.a.createElement("span",{className:"playerName"},t||2===u?"Friend":"Guest 120"),r.a.createElement("span",{className:"points"},"(500)")),r.a.createElement("div",{className:"timer"},1===u?l:2===u?i:"5: 00")),r.a.createElement("div",{id:"board",className:"board"}),r.a.createElement("div",{className:"userInformations"},r.a.createElement("div",{className:"userWrapper"},r.a.createElement("span",{className:"playerName"},null!==c&&void 0!==c?c:"Guest 152"),r.a.createElement("span",{className:"points"},"(".concat(null!==o&&void 0!==o?o:500,")"))),r.a.createElement("div",{className:"timer"},1===u?i:2===u?l:"5: 00")),!0===n&&r.a.createElement("div",{className:"links"},r.a.createElement("h3",{className:"links__header"},"Second player Link"),r.a.createElement("div",{className:"links__link"},r.a.createElement("a",{target:"_blank",rel:"noreferrer",href:s.secondPlayer},s.secondPlayer)),r.a.createElement("div",{className:"closeButton",role:"button",tabIndex:0,onClick:m},"X"))),r.a.createElement("audio",{id:"myAudio",ref:a},r.a.createElement("source",{src:"https://images.chesscomfiles.com/chess-themes/sounds/_WEBM_/default/game-start.webm",type:"audio/webm"}),r.a.createElement("source",{src:"https://images.chesscomfiles.com/chess-themes/sounds/_OGG_/default/game-start.ogg",type:"audio/ogg"}),r.a.createElement("source",{src:"https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/game-start.mp3",type:"audio/mpeg"}),r.a.createElement("source",{src:"https://images.chesscomfiles.com/chess-themes/sounds/_WAV_/default/game-start.wav",type:"audio/wav"})))}),u=window.jQuery;l.propTypes={songRef:c.a.oneOfType([c.a.func,c.a.shape({current:c.a.instanceOf(Element)})]),links:c.a.bool,userName:c.a.string,points:c.a.number,token:c.a.string,playerNum:c.a.number,isGameEnded:c.a.bool,p1_token:c.a.string,p2_token:c.a.string,timeLeft:c.a.shape({whiteTime:c.a.number,blackTime:c.a.number,isGameActive:c.a.bool}),changeSite:c.a.func,updateLocalStorage:c.a.func,turn:c.a.string};a.a=function(e){var a=e.songRef,t=e.p1_token,s=e.p2_token,c=e.links,m=e.userName,d=e.points,f=e.token,p=e.timeLeft,g=e.playerNum,v=e.isGameEnded,_=e.changeSite,E=e.updateLocalStorage,h=e.turn;Object(n.useEffect)((function(){var e,a,t=localStorage.getItem("user"),n=Object(i.f)(g,p,h);null!==t&&(t=JSON.parse(t),v&&t&&E("You won"===n?(null===(e=t)||void 0===e?void 0:e.points)+8:(null===(a=t)||void 0===a?void 0:a.points)-8))}),[v]);var b={firstPlayer:"".concat(Object(o.a)(),"/play/online/").concat(t),secondPlayer:"".concat(Object(o.a)(),"/play/online/").concat(s)},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,a=Math.floor(e/60),t=Math.floor(e-60*a);return"".concat(a,": ").concat(t<10?"0".concat(t):t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,{whiteTime:w(null===p||void 0===p?void 0:p.whiteTime),blackTime:w(null===p||void 0===p?void 0:p.blackTime),playerNum:g,adress:b,removeLink:function(){u(".links").css("display","none")},songRef:a,links:c,userName:m,points:d,isGameEnded:v,onBackToHome:function(){_("/")},token:f}))}},73:function(e,a,t){},78:function(e,a,t){"use strict";var n=t(1),r=t.n(n),s=t(28),c=(t(84),function(e){var a=e.moves;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"moves"},Object(s.a)(a).reverse().map((function(e){var a=e.whiteSan,t=e.blackSan,n=e.moveIndex;return r.a.createElement("li",{className:"moves__item",key:e.id},r.a.createElement("span",{className:"index"},n),r.a.createElement("span",{className:"san"},a),r.a.createElement("span",{className:"san"},t))}))))}),o=t(85),i=t.n(o),l=t(87),u=t(88),m=t(29),d=t(66),f=t(6),p=t(15),g=t(67),v=t(20),_=t.n(v),E=function(e){var a=e.msg,t=e.user,n=a.uid,s=a.message,c=a.photoURL,o=n===t.uid?"sent":"received";return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message"},r.a.createElement("div",{className:"message ".concat(o)},r.a.createElement("div",{className:"userMessage ".concat(o)},s),r.a.createElement("img",{src:c,alt:"userPhoto"}))))},h=t(40),b=(t(89),Object(n.forwardRef)((function(e,a){var t=e.messages,n=e.user,s=e.formValue,c=e.sendMessage,o=e.handleChange,i=e.loginGoogle,l=e.loginFacebook;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"scoreBoard__info__chat"},r.a.createElement("div",{className:"scoreBoard__info__header"},"Chat"),r.a.createElement("div",{className:"scoreBoard__info__options"},r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"windowChat"},t.map((function(e){return r.a.createElement(E,{key:e.id,user:n,msg:e,uid:e.uid})})),r.a.createElement("span",{ref:a})),r.a.createElement("div",{className:"chatMessage"},r.a.createElement("form",{onSubmit:c},r.a.createElement("input",{type:"text",value:s,onChange:o,placeholder:"Aa"}),r.a.createElement("button",{type:"submit"},r.a.createElement("span",{role:"img","aria-label":"icon"},"\ud83d\udd4a\ufe0f")))),!n&&r.a.createElement(h.a,{loginGoogle:i,loginFacebook:l})))))})));E.propTypes={messages:_.a.arrayOf(_.a.shape({docId:_.a.string,message:_.a.string,photoURL:_.a.string,uid:_.a.string})),user:_.a.shape({userName:_.a.string,photo:_.a.string,uid:_.a.string,points:_.a.number}),formValue:_.a.string,sendMessage:_.a.func,handleChange:_.a.func,loginGoogle:_.a.func,loginFacebook:_.a.func};var w=b,N=null,k=Object(f.f)((function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),c=t[0],o=t[1],f=Object(d.a)(p.a),v=Object(m.a)(f,1)[0],_=Object(n.useRef)(null),E=Object(n.useState)(""),h=Object(m.a)(E,2),b=h[0],k=h[1],y=Object(n.useState)([]),O=Object(m.a)(y,2),T=O[0],j=O[1];Object(n.useEffect)((function(){var a;return a=e.match.params.token,["p1_token","p2_token"].forEach((function(e){var t=p.c.collection("games").where(e,"==",a);N=t.onSnapshot((function(e){if(e.size){var a=e.docs.map((function(e){return{data:e.data(),id:e.id}})),t=Object(m.a)(a,1)[0],n=t.data.messages,r=t.id;n&&n.length>14&&function(e,a){var t=p.c.collection("games").doc(e),n=Object(u.a)(a).slice(1);t.update({messages:n})}(r,n),j(null!==n&&void 0!==n?n:[]),k(r)}}))})),function(){return N&&N()}}),[]);var C=function(){var e=Object(l.a)(i.a.mark((function e(a){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),""!==c&&v){e.next=3;break}return e.abrupt("return");case 3:t=v.uid,n=v.photoURL,p.c.collection("games").doc(b).update({messages:[].concat(Object(s.a)(T),[{message:c,uid:t,photoURL:n,id:Object(g.a)(6)}])}).then((function(){o(""),window.innerWidth<1e3&&_.current.scrollIntoView({behavior:"smooth"})}));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{messages:T,ref:_,sendMessage:C,user:v,formValue:c,handleChange:function(e){o(e.target.value)},loginGoogle:p.e,loginFacebook:p.d}))}));t(90),a.a=function(e){var a=e.moves,t=e.statusText,n=e.isOnline;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"scoreBoard"},r.a.createElement("div",{className:"scoreBoard__wrapper"},r.a.createElement("div",{className:"scoreBoard__header flex-c"},""===t?"Your turn":t),r.a.createElement("div",{className:"scoreBoard__info"},r.a.createElement("div",{className:"scoreBoard__info__moves"},r.a.createElement("div",{className:"scoreBoard__info__header"},"Last Moves"),r.a.createElement("div",{className:"scoreBoard__info__options"},0===a.length?r.a.createElement("div",{className:"dots"},r.a.createElement("span",{className:"dot"},"."),r.a.createElement("span",{className:"dot"},"."),r.a.createElement("span",{className:"dot"},".")):r.a.createElement(c,{moves:a})),n&&r.a.createElement(k,null))))))}},79:function(e,a,t){"use strict";var n=t(29),r=t(1),s=t.n(r),c="https://betacssjs.chesscomfiles.com/bundles/web/images/white_400.09ae248e.png",o=function(e){var a=e.status,t=e.photo,n=void 0===t?c:t,r=e.points,o=e.isSignedIn,i=e.deleteCard;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"endGameCard ".concat("You won"===a?"greenBackgrond":"greyBackground")},s.a.createElement("div",{className:"endGameCard__close"},s.a.createElement("button",{className:"endGameCard__close__button",type:"button",onClick:i},"\u2718")),s.a.createElement("div",{className:"wrapper"},s.a.createElement("h3",{className:"wrapper__header"},a),s.a.createElement("div",{className:"wrapper__images"},s.a.createElement("img",{src:n,alt:"userImage",className:"wrapper__image ".concat("You won"===a?"win__border":"lose__border")}),s.a.createElement("img",{src:c,alt:"userImage",className:"wrapper__image ".concat("You lost"===a?"win__border":"lose__border")})),s.a.createElement("div",{className:"wrapper__rating"},s.a.createElement("h3",{className:"wrapper__rating__header"},"Rating"),s.a.createElement("div",{className:"wrapper__rating__points"},s.a.createElement("span",{className:"wrapper__rating__point"},r),o?"You won"===a?s.a.createElement("span",{className:"wrapper__rating__win"},"+8"):s.a.createElement("span",{className:"wrapper__rating__lose"},"-8"):s.a.createElement("span",{className:"wrapper__rating__unranked"},"Unranked"))))))},i=t(15),l=t(68),u=(t(83),window.jQuery);a.a=function(e){var a=e.timeLeft,t=e.turn,c=e.playerNum,m=void 0===c?1:c,d=e.user;Object(r.useEffect)((function(){if(d){var e=i.c.collection("users").where("uid","==",d.uid),r=Object(l.f)(m,a,t);e.get().then((function(e){if(1===e.size){var a=Object(n.a)(e.docs,1)[0].id;"You won"===r?i.c.collection("users").doc(a).update({points:i.b.firestore.FieldValue.increment(8)}):i.c.collection("users").doc(a).update({points:i.b.firestore.FieldValue.increment(-8)})}}))}}),[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(o,{deleteCard:function(){u(".endGameCard").css("display","none")},status:Object(l.f)(m,a,t),photo:null===d||void 0===d?void 0:d.photo,points:null===d||void 0===d?void 0:d.points,isSignedIn:null!==d}))}},83:function(e,a,t){},84:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){}}]);
//# sourceMappingURL=1.ad8b55ab.chunk.js.map