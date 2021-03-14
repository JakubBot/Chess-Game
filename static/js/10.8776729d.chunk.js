(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[10],{76:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}a.d(t,"a",(function(){return n}))},97:function(e,t,a){"use strict";a.r(t);var n=a(29),o=a(1),r=a.n(o),i=a(21),c=a(66),u=a(5),s=a(76),d=a(20),l=a.n(d),p=a(77),m=a.n(p),b=a(72),f=a(6),v=a(71),S=a(79),O=a(15),g=a(69),j=a(68),h=a(67),k=window.jQuery,w=null,_=null,x=function(e){var t=e.boardType,a=e.piece,i=e.user,c=e.mode,d=e.updateMoves,l=e.updateStatusText,p=e.changeSite,f=e.updateLocalStorage,x=Object(s.a)(e,["boardType","piece","user","mode","updateMoves","updateStatusText","changeSite","updateLocalStorage"]),T=Object(o.useState)(new m.a),y=Object(n.a)(T,1)[0],E=Object(o.useState)({token:x.match.params.token}),L=Object(n.a)(E,2),I=L[0],P=L[1],q=Object(o.useRef)(null),N=Object(o.useState)(!1),M=Object(n.a)(N,2),R=M[0],C=M[1];return Object(o.useEffect)((function(){var e,t,a=null;return I.isGameActive&&(a=setInterval((function(){Object(g.c)(I,y)}),1e3)),((null===(e=I.timeLeft)||void 0===e?void 0:e.whiteTime)<=0||(null===(t=I.timeLeft)||void 0===t?void 0:t.blackTime)<=0)&&(clearInterval(a),C(!0)),function(){return clearInterval(a)}}),[I.isGameActive,I.timeLeft]),Object(o.useEffect)((function(){var e,o;return e=I.token,o=function(e,n){!function(e,n){var o=y,r=Object(g.b)(I.token,n);o.load(n.fen||"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"),_?Object(j.b)(r,o.turn())&&_.position(o.fen()):(_=function(e,n){var o=y,r=Object(g.b)(I.token,n),i={pieceTheme:"".concat("/Chess-Game","/img/chesspieces/").concat(a,"/{piece}.png"),draggable:!0,position:"start",onDragStart:function(e,t){return Object(j.c)(y,e),k('img[data-piece="'.concat(t,'"]')).addClass("z-index"),!o.game_over()&&Object(j.b)(r,o.turn())&&Object(j.a)(o.turn(),t)},onDrop:function(t,a,n){k('img[data-piece="'.concat(n,'"]')).removeClass("z-index"),Object(j.d)();var i=y.move({from:t,to:a,promotion:"q"});if(null===i)return"snapback";var c=O.c.collection("games").doc(e);1===r?c.update({fen:o.fen(),whiteSan:i.san,isGameActive:!0}):2===r&&c.update({fen:o.fen(),blackSan:i.san})},onSnapEnd:function(){return q.current.play(),_.position(o.fen())},onMouseoutSquare:j.d,onMouseoverSquare:function(e){Object(j.b)(r,o.turn())&&Object(j.c)(y,e)}};_=Object(b.a)("board",i),2===r&&_.orientation("black");var c=k(".chessboard-63f37"),u=k(".square-55d63");return"wooden"===t?(c.addClass("woodenBoard"),u.addClass("transparent")):"classic"===_&&(c.removeClass("woodenBoard"),u.removeClass("transparent")),k(window).resize(_.resize),_}(e,n)).position(o.fen())}(e,n),function(e,t){var a=t.p1_token,n=t.p2_token,o=t.whiteSan,r=t.blackSan,i=t.timeLeft,c=t.moveIndex,s=t.isGameActive,d=Object(g.b)(I.token,{p1_token:a,p2_token:n});P((function(t){return Object(u.a)(Object(u.a)({},t),{},{isGameActive:s,timeLeft:i,id:e,moveIndex:c,p1_token:a,p2_token:n,whiteSan:o,blackSan:r,statusText:Object(j.e)(y.turn(),d,Object(j.b)(d,y.turn()),y.in_draw(),y.in_check(),y.in_checkmate(),y.in_threefold_repetition(),y.insufficient_material(),y.in_stalemate())})}))}(e,n)},["p1_token","p2_token"].forEach((function(t){var a=O.c.collection("games").where(t,"==",e);w=a.onSnapshot((function(e){if(e.size){var t=e.docs.map((function(e){return{data:e.data(),id:e.id}})),a=Object(n.a)(t,1)[0];o(a.id,a.data)}}))})),function(){return w&&w()}}),[]),Object(o.useEffect)((function(){l(I.statusText)}),[I.statusText]),Object(o.useEffect)((function(){var e,t=I.whiteSan,a=I.blackSan;(t||a)&&d({whiteSan:t,blackSan:a,id:Object(h.a)(5),moveIndex:null!==(e=I.moveIndex)&&void 0!==e?e:1});var n=O.c.collection("games").doc(I.id);I.whiteSan&&I.blackSan&&n.update({whiteSan:"",blackSan:"",moveIndex:O.b.firestore.FieldValue.increment(1)})}),[I.whiteSan,I.blackSan]),r.a.createElement(r.a.Fragment,null,(y.game_over()||R)&&r.a.createElement(S.a,{timeLeft:I.timeLeft,turn:y.turn(),user:i}),r.a.createElement(v.a,{timeLeft:I.timeLeft,links:!0,songRef:q,p1_token:I.p1_token,p2_token:I.p2_token,userName:null===i||void 0===i?void 0:i.userName,points:null===i||void 0===i?void 0:i.points,playerNum:Object(g.b)(I.token,I),isGameEnded:y.game_over()||R,changeSite:p,updateLocalStorage:f,mode:c}))};x.propTypesd={board:l.a.string,piece:l.a.string,mode:l.a.string,user:l.a.shape({userName:l.a.string,photo:l.a.string,uid:l.a.string,points:l.a.number}),updateMoves:l.a.func.isRequired,updateStatusText:l.a.func.isRequired,changeSite:l.a.func.isRequired,updateLocalStorage:l.a.func.isRequired};var T=Object(f.f)(x),y=a(78),E=a(70),L=a(34);var I={updateMoves:E.e,updateStatusText:E.f,loginUserWithSocials:L.c,loginUserWithForm:L.b,updateLocalStorage:L.d};t.default=Object(i.b)((function(e){var t=e.boardInfo,a=t.moves,n=t.statusText,o=t.piece,r=t.board;return{moves:a,statusText:n,piece:o,mode:t.mode,boardType:r,user:e.user}}),I)((function(e){var t=e.user,a=e.moves,i=e.statusText,u=e.piece,s=e.boardType,d=e.mode,l=e.history,p=e.updateMoves,m=e.updateStatusText,b=e.loginUserWithSocials,f=e.loginUserWithForm,v=e.updateLocalStorage,S=Object(c.a)(O.a),g=Object(n.a)(S,1)[0];return Object(o.useEffect)((function(){null!==g&&null===t&&b(g),null===g&&null===t&&f()}),[g]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page__wrapper"},r.a.createElement(T,{changeSite:l.push,user:t,piece:u,boardType:s,updateMoves:p,updateStatusText:m,updateLocalStorage:v,userName:null===t||void 0===t?void 0:t.userName,points:null===t||void 0===t?void 0:t.points,mode:d}),r.a.createElement(y.a,{isOnline:!0,moves:a,statusText:i})))}))}}]);
//# sourceMappingURL=10.8776729d.chunk.js.map