(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[12],{115:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(29),r=n(1),i=n.n(r),o=n(73),u=n.n(o),s=n(69),l=n(21),b=n(66),m=n(88),d=n(89),f=n(72),p=n(15);var v=n(68),j=n(67),O=n(34),w=n(71),h=n(90),S=window.jQuery,k=null,g=new u.a;new m.Game("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");var T={updateMoves:w.e,updateStatusText:w.f,loginUserWithSocials:O.c,loginUserWithForm:O.b,updateLocalStorage:O.d};t.default=Object(l.b)((function(e){var t=e.boardInfo,n=t.piece,a=t.board,c=t.moves,r=t.statusText;return{piece:n,boardType:a,user:e.user,moves:c,currentStatusText:r}}),T)((function(e){var t=e.history,n=e.boardType,o=e.user,u=e.piece,l=e.updateMoves,O=e.updateStatusText,w=e.moves,T=e.currentStatusText,_=e.loginUserWithSocials,E=e.loginUserWithForm,x=e.updateLocalStorage,y=Object(b.a)(p.a),L=Object(c.a)(y,1)[0],G=Object(r.useState)({whiteSan:"",blackSan:"",id:null,index:0}),P=Object(c.a)(G,2),q=P[0],C=P[1],N=Object(r.useState)({whiteTime:300,blackTime:300,isGameActive:!1}),R=Object(c.a)(N,2),A=R[0],M=R[1],W=Object(r.useState)(!1),B=Object(c.a)(W,2),I=B[0],U=B[1],F=Object(r.useRef)(null),Q=Object(r.useRef)(null);function z(){var e=Object(v.e)(g.turn(),1,Object(v.b)(1,g.turn()),g.in_draw(),g.in_check(),g.in_checkmate(),g.in_threefold_repetition(),g.insufficient_material(),g.in_stalemate());e.split(" ").includes("check")?Q.current.play():F.current.play(),O(e)}return Object(r.useEffect)((function(){return null!==L&&null===o&&_(L),null===L&&null===o&&E(),function(){return g.reset()}}),[L]),Object(r.useEffect)((function(){M((function(e){return Object(a.a)(Object(a.a)({},e),{},{isGameActive:!1})}))}),[g.game_over(),I]),Object(r.useEffect)((function(){var e=null;return A.isGameActive&&(e=setInterval((function(){"w"===g.turn()?M((function(e){return Object(a.a)(Object(a.a)({},e),{},{whiteTime:e.whiteTime-1})})):M((function(e){return Object(a.a)(Object(a.a)({},e),{},{blackTime:e.blackTime-1})}))}),1e3)),(A.whiteTime<=0||A.blackTime<=0)&&(clearInterval(e),U(!0)),function(){return clearInterval(e)}}),[A.isGameActive,A]),Object(r.useEffect)((function(){if(q){var e=q.whiteSan,t=q.blackSan,n=q.index;""===e&&""===t||l({whiteSan:e,blackSan:t,index:n,id:Object(j.a)(5)}),""!==e&&""!==t&&C(Object(a.a)(Object(a.a)({},q),{},{whiteSan:"",blackSan:"",id:null}))}}),[q]),Object(r.useEffect)((function(){function e(){M((function(e){return Object(a.a)(Object(a.a)({},e),{},{blackTime:e.blackTime-1})}));var e=Object(m.aiMove)(g.fen(),1),t=Object.keys(e)[0].toLocaleLowerCase(),n=Object.values(e)[0].toLocaleLowerCase(),c=g.move({from:t,to:n,promotion:"q"});C((function(e){return Object(a.a)(Object(a.a)({},e),{},{blackSan:null===c||void 0===c?void 0:c.san})})),k.position(g.fen()),z()}var t={pieceTheme:"".concat("/Chess-Game","/img/chesspieces/").concat(u,"/{piece}.png"),draggable:!0,position:"start",onDragStart:function(e,t){return Object(v.c)(g,e),!g.game_over()&&"w"===g.turn()&&Object(v.a)(g.turn(),t)},onDrop:function(t,n){Object(v.d)();var c=g.move({from:t,to:n,promotion:"q"});if(null===c)return"snapback";window.innerWidth<520?window.setTimeout(e,2400):window.setTimeout(e,3300),C((function(e){return Object(a.a)(Object(a.a)({},e),{},{whiteSan:null===c||void 0===c?void 0:c.san,index:e.index+1})})),M((function(e){return Object(a.a)(Object(a.a)({},e),{},{isGameActive:!0})}))},onSnapEnd:function(){k.position(g.fen()),z()},onMouseoutSquare:v.d,onMouseoverSquare:function(e){Object(v.c)(g,e)}};k=Object(s.a)("board",t),S(window).resize(k.resize);var c=S(".chessboard-63f37"),r=S(".square-55d63");"wooden"===n?(c.addClass("woodenBoard"),r.addClass("transparent")):"classic"===k&&(c.removeClass("woodenBoard"),r.removeClass("transparent")),z()}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"page__wrapper"},(g.game_over()||I)&&i.a.createElement(h.a,{timeLeft:A,turn:g.turn(),user:o}),i.a.createElement(f.a,{timeLeft:A,moveSongRef:F,checkSongRef:Q,links:!1,playerNum:1,isGameEnded:g.game_over()||I,changeSite:t.push,updateLocalStorage:x,userName:null===o||void 0===o?void 0:o.userName,points:null===o||void 0===o?void 0:o.points,turn:g.turn()}),i.a.createElement(d.a,{moves:w,statusText:T})))}))}}]);
//# sourceMappingURL=12.0bda7a7c.chunk.js.map