(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[12],{111:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(29),i=n(1),r=n.n(i),o=n(85),u=n.n(o),s=n(72),l=n(21),b=n(66),d=n(102),m=n(88),f=n(71),v=n(15),p=n(68),j=n(67),O=n(34),w=n(70),h=n(89),S=window.jQuery,g=null,T=new u.a;var k={updateMoves:w.e,updateStatusText:w.f,loginUserWithSocials:O.c,loginUserWithForm:O.b,updateLocalStorage:O.d};t.default=Object(l.b)((function(e){var t=e.boardInfo,n=t.piece,a=t.board,c=t.moves,i=t.statusText;return{piece:n,boardType:a,user:e.user,moves:c,currentStatusText:i}}),k)((function(e){var t=e.history,n=e.boardType,o=e.user,u=e.piece,l=e.updateMoves,O=e.updateStatusText,w=e.moves,k=e.currentStatusText,_=e.loginUserWithSocials,E=e.loginUserWithForm,x=e.updateLocalStorage,y=Object(b.a)(v.a),L=Object(c.a)(y,1)[0],C=Object(i.useState)({whiteSan:"",blackSan:"",id:null,index:0}),G=Object(c.a)(C,2),W=G[0],q=G[1],A=Object(i.useState)({whiteTime:300,blackTime:300,isGameActive:!1}),M=Object(c.a)(A,2),I=M[0],N=M[1],R=Object(i.useState)(!1),U=Object(c.a)(R,2),F=U[0],z=U[1],B=Object(i.useRef)(null),D=Object(i.useRef)(null);function J(){var e=Object(p.e)(T.turn(),1,Object(p.b)(1,T.turn()),T.in_draw(),T.in_check(),T.in_checkmate(),T.in_threefold_repetition(),T.insufficient_material(),T.in_stalemate());e.split(" ").includes("check")?D.current.play():B.current.play(),O(e)}return Object(i.useEffect)((function(){return null!==L&&null===o&&_(L),null===L&&null===o&&E(),function(){return T.reset()}}),[L]),Object(i.useEffect)((function(){N((function(e){return Object(a.a)(Object(a.a)({},e),{},{isGameActive:!1})}))}),[T.game_over(),F]),Object(i.useEffect)((function(){var e=null;return I.isGameActive&&(e=setInterval((function(){"w"===T.turn()?N((function(e){return Object(a.a)(Object(a.a)({},e),{},{whiteTime:e.whiteTime-1})})):N((function(e){return Object(a.a)(Object(a.a)({},e),{},{blackTime:e.blackTime-1})}))}),1e3)),(I.whiteTime<=0||I.blackTime<=0)&&(clearInterval(e),z(!0)),function(){return clearInterval(e)}}),[I.isGameActive,I]),Object(i.useEffect)((function(){if(W){var e=W.whiteSan,t=W.blackSan,n=W.index;""===e&&""===t||l({whiteSan:e,blackSan:t,index:n,id:Object(j.a)(5)}),""!==e&&""!==t&&q(Object(a.a)(Object(a.a)({},W),{},{whiteSan:"",blackSan:"",id:null}))}}),[W]),Object(i.useEffect)((function(){function e(){var e=2;window.innerWidth<520&&(N((function(e){return Object(a.a)(Object(a.a)({},e),{},{blackTime:e.blackTime-1})})),e=1);var t=Object(d.aiMove)(T.fen(),e),n=Object.keys(t)[0].toLocaleLowerCase(),c=Object.values(t)[0].toLocaleLowerCase(),i=T.move({from:n,to:c,promotion:"q"});q((function(e){return Object(a.a)(Object(a.a)({},e),{},{blackSan:null===i||void 0===i?void 0:i.san})})),g.position(T.fen()),J()}var t={pieceTheme:"".concat("/Chess-Game","/img/chesspieces/").concat(u,"/{piece}.png"),draggable:!0,position:"start",onDragStart:function(e,t){return Object(p.c)(T,e),!T.game_over()&&"w"===T.turn()&&Object(p.a)(T.turn(),t)},onDrop:function(t,n){Object(p.d)();var c=T.move({from:t,to:n,promotion:"q"});if(null===c)return"snapback";window.innerWidth<520?window.setTimeout(e,2400):window.setTimeout(e,3200),q((function(e){return Object(a.a)(Object(a.a)({},e),{},{whiteSan:null===c||void 0===c?void 0:c.san,index:e.index+1})})),N((function(e){return Object(a.a)(Object(a.a)({},e),{},{isGameActive:!0})}))},onSnapEnd:function(){g.position(T.fen()),J()},onMouseoutSquare:p.d,onMouseoverSquare:function(e){Object(p.c)(T,e)}};g=Object(s.a)("board",t),S(window).resize(g.resize);var c=S(".chessboard-63f37"),i=S(".square-55d63");"wooden"===n?(c.addClass("woodenBoard"),i.addClass("transparent")):"classic"===g&&(c.removeClass("woodenBoard"),i.removeClass("transparent")),J()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page__wrapper"},(T.game_over()||F)&&r.a.createElement(h.a,{timeLeft:I,turn:T.turn(),user:o}),r.a.createElement(f.a,{timeLeft:I,moveSongRef:B,checkSongRef:D,links:!1,playerNum:1,isGameEnded:T.game_over()||F,changeSite:t.push,updateLocalStorage:x,userName:null===o||void 0===o?void 0:o.userName,points:null===o||void 0===o?void 0:o.points,turn:T.turn()}),r.a.createElement(m.a,{moves:w,statusText:k})))}))}}]);
//# sourceMappingURL=12.6e4a0471.chunk.js.map