(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[8],{100:function(e,t,i){(function(t){var n=i(101),o=i(102),r=i(106),s=i(107);e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,i,a){"use strict";a.r(i),a.d(i,"Game",(function(){return $})),a.d(i,"moves",(function(){return z})),a.d(i,"status",(function(){return X})),a.d(i,"getFen",(function(){return Z})),a.d(i,"move",(function(){return ee})),a.d(i,"aiMove",(function(){return te}));var c=["A","B","C","D","E","F","G","H"],u=["1","2","3","4","5","6","7","8"],l={KING_W:"K",QUEEN_W:"Q",ROOK_W:"R",BISHOP_W:"B",KNIGHT_W:"N",PAWN_W:"P",KING_B:"k",QUEEN_B:"q",ROOK_B:"r",BISHOP_B:"b",KNIGHT_B:"n",PAWN_B:"p"},h="black",g="white",f=[0,1,2,3],v={fullMove:1,halfMove:0,enPassant:null,isFinished:!1,checkMate:!1,check:!1,turn:g},C=Object.assign({pieces:{E1:"K",D1:"Q",A1:"R",H1:"R",C1:"B",F1:"B",B1:"N",G1:"N",A2:"P",B2:"P",C2:"P",D2:"P",E2:"P",F2:"P",G2:"P",H2:"P",E8:"k",D8:"q",A8:"r",H8:"r",C8:"b",F8:"b",B8:"n",G8:"n",A7:"p",B7:"p",C7:"p",D7:"p",E7:"p",F7:"p",G7:"p",H7:"p"},castling:{whiteShort:!0,blackShort:!0,whiteLong:!0,blackLong:!0}},v),P={UP:{A1:"A2",A2:"A3",A3:"A4",A4:"A5",A5:"A6",A6:"A7",A7:"A8",A8:null,B1:"B2",B2:"B3",B3:"B4",B4:"B5",B5:"B6",B6:"B7",B7:"B8",B8:null,C1:"C2",C2:"C3",C3:"C4",C4:"C5",C5:"C6",C6:"C7",C7:"C8",C8:null,D1:"D2",D2:"D3",D3:"D4",D4:"D5",D5:"D6",D6:"D7",D7:"D8",D8:null,E1:"E2",E2:"E3",E3:"E4",E4:"E5",E5:"E6",E6:"E7",E7:"E8",E8:null,F1:"F2",F2:"F3",F3:"F4",F4:"F5",F5:"F6",F6:"F7",F7:"F8",F8:null,G1:"G2",G2:"G3",G3:"G4",G4:"G5",G5:"G6",G6:"G7",G7:"G8",G8:null,H1:"H2",H2:"H3",H3:"H4",H4:"H5",H5:"H6",H6:"H7",H7:"H8",H8:null},DOWN:{A1:null,A2:"A1",A3:"A2",A4:"A3",A5:"A4",A6:"A5",A7:"A6",A8:"A7",B1:null,B2:"B1",B3:"B2",B4:"B3",B5:"B4",B6:"B5",B7:"B6",B8:"B7",C1:null,C2:"C1",C3:"C2",C4:"C3",C5:"C4",C6:"C5",C7:"C6",C8:"C7",D1:null,D2:"D1",D3:"D2",D4:"D3",D5:"D4",D6:"D5",D7:"D6",D8:"D7",E1:null,E2:"E1",E3:"E2",E4:"E3",E5:"E4",E6:"E5",E7:"E6",E8:"E7",F1:null,F2:"F1",F3:"F2",F4:"F3",F5:"F4",F6:"F5",F7:"F6",F8:"F7",G1:null,G2:"G1",G3:"G2",G4:"G3",G5:"G4",G6:"G5",G7:"G6",G8:"G7",H1:null,H2:"H1",H3:"H2",H4:"H3",H5:"H4",H6:"H5",H7:"H6",H8:"H7"},LEFT:{A1:null,A2:null,A3:null,A4:null,A5:null,A6:null,A7:null,A8:null,B1:"A1",B2:"A2",B3:"A3",B4:"A4",B5:"A5",B6:"A6",B7:"A7",B8:"A8",C1:"B1",C2:"B2",C3:"B3",C4:"B4",C5:"B5",C6:"B6",C7:"B7",C8:"B8",D1:"C1",D2:"C2",D3:"C3",D4:"C4",D5:"C5",D6:"C6",D7:"C7",D8:"C8",E1:"D1",E2:"D2",E3:"D3",E4:"D4",E5:"D5",E6:"D6",E7:"D7",E8:"D8",F1:"E1",F2:"E2",F3:"E3",F4:"E4",F5:"E5",F6:"E6",F7:"E7",F8:"E8",G1:"F1",G2:"F2",G3:"F3",G4:"F4",G5:"F5",G6:"F6",G7:"F7",G8:"F8",H1:"G1",H2:"G2",H3:"G3",H4:"G4",H5:"G5",H6:"G6",H7:"G7",H8:"G8"},RIGHT:{A1:"B1",A2:"B2",A3:"B3",A4:"B4",A5:"B5",A6:"B6",A7:"B7",A8:"B8",B1:"C1",B2:"C2",B3:"C3",B4:"C4",B5:"C5",B6:"C6",B7:"C7",B8:"C8",C1:"D1",C2:"D2",C3:"D3",C4:"D4",C5:"D5",C6:"D6",C7:"D7",C8:"D8",D1:"E1",D2:"E2",D3:"E3",D4:"E4",D5:"E5",D6:"E6",D7:"E7",D8:"E8",E1:"F1",E2:"F2",E3:"F3",E4:"F4",E5:"F5",E6:"F6",E7:"F7",E8:"F8",F1:"G1",F2:"G2",F3:"G3",F4:"G4",F5:"G5",F6:"G6",F7:"G7",F8:"G8",G1:"H1",G2:"H2",G3:"H3",G4:"H4",G5:"H5",G6:"H6",G7:"H7",G8:"H8",H1:null,H2:null,H3:null,H4:null,H5:null,H6:null,H7:null,H8:null},UP_LEFT:{A1:null,A2:null,A3:null,A4:null,A5:null,A6:null,A7:null,A8:null,B1:"A2",B2:"A3",B3:"A4",B4:"A5",B5:"A6",B6:"A7",B7:"A8",B8:null,C1:"B2",C2:"B3",C3:"B4",C4:"B5",C5:"B6",C6:"B7",C7:"B8",C8:null,D1:"C2",D2:"C3",D3:"C4",D4:"C5",D5:"C6",D6:"C7",D7:"C8",D8:null,E1:"D2",E2:"D3",E3:"D4",E4:"D5",E5:"D6",E6:"D7",E7:"D8",E8:null,F1:"E2",F2:"E3",F3:"E4",F4:"E5",F5:"E6",F6:"E7",F7:"E8",F8:null,G1:"F2",G2:"F3",G3:"F4",G4:"F5",G5:"F6",G6:"F7",G7:"F8",G8:null,H1:"G2",H2:"G3",H3:"G4",H4:"G5",H5:"G6",H6:"G7",H7:"G8",H8:null},DOWN_RIGHT:{A1:null,A2:"B1",A3:"B2",A4:"B3",A5:"B4",A6:"B5",A7:"B6",A8:"B7",B1:null,B2:"C1",B3:"C2",B4:"C3",B5:"C4",B6:"C5",B7:"C6",B8:"C7",C1:null,C2:"D1",C3:"D2",C4:"D3",C5:"D4",C6:"D5",C7:"D6",C8:"D7",D1:null,D2:"E1",D3:"E2",D4:"E3",D5:"E4",D6:"E5",D7:"E6",D8:"E7",E1:null,E2:"F1",E3:"F2",E4:"F3",E5:"F4",E6:"F5",E7:"F6",E8:"F7",F1:null,F2:"G1",F3:"G2",F4:"G3",F5:"G4",F6:"G5",F7:"G6",F8:"G7",G1:null,G2:"H1",G3:"H2",G4:"H3",G5:"H4",G6:"H5",G7:"H6",G8:"H7",H1:null,H2:null,H3:null,H4:null,H5:null,H6:null,H7:null,H8:null},UP_RIGHT:{A1:"B2",A2:"B3",A3:"B4",A4:"B5",A5:"B6",A6:"B7",A7:"B8",A8:null,B1:"C2",B2:"C3",B3:"C4",B4:"C5",B5:"C6",B6:"C7",B7:"C8",B8:null,C1:"D2",C2:"D3",C3:"D4",C4:"D5",C5:"D6",C6:"D7",C7:"D8",C8:null,D1:"E2",D2:"E3",D3:"E4",D4:"E5",D5:"E6",D6:"E7",D7:"E8",D8:null,E1:"F2",E2:"F3",E3:"F4",E4:"F5",E5:"F6",E6:"F7",E7:"F8",E8:null,F1:"G2",F2:"G3",F3:"G4",F4:"G5",F5:"G6",F6:"G7",F7:"G8",F8:null,G1:"H2",G2:"H3",G3:"H4",G4:"H5",G5:"H6",G6:"H7",G7:"H8",G8:null,H1:null,H2:null,H3:null,H4:null,H5:null,H6:null,H7:null,H8:null},DOWN_LEFT:{A1:null,A2:null,A3:null,A4:null,A5:null,A6:null,A7:null,A8:null,B1:null,B2:"A1",B3:"A2",B4:"A3",B5:"A4",B6:"A5",B7:"A6",B8:"A7",C1:null,C2:"B1",C3:"B2",C4:"B3",C5:"B4",C6:"B5",C7:"B6",C8:"B7",D1:null,D2:"C1",D3:"C2",D4:"C3",D5:"C4",D6:"C5",D7:"C6",D8:"C7",E1:null,E2:"D1",E3:"D2",E4:"D3",E5:"D4",E6:"D5",E7:"D6",E8:"D7",F1:null,F2:"E1",F3:"E2",F4:"E3",F5:"E4",F6:"E5",F7:"E6",F8:"E7",G1:null,G2:"F1",G3:"F2",G4:"F3",G5:"F4",G6:"F5",G7:"F6",G8:"F7",H1:null,H2:"G1",H3:"G2",H4:"G3",H5:"G4",H6:"G5",H7:"G6",H8:"G7"}},p=[[0,0,0,0,0,0,0,0],[5,5,5,5,5,5,5,5],[1,1,2,3,3,2,1,1],[.5,.5,1,2.5,2.5,1,.5,.5],[0,0,0,2,2,0,0,0],[.5,0,1,0,0,1,0,.5],[.5,0,0,-2,-2,0,0,.5],[0,0,0,0,0,0,0,0]],E=[[-4,-3,-2,-2,-2,-2,-3,-4],[-3,-2,0,0,0,0,-2,-3],[-2,0,1,1.5,1.5,1,0,-2],[-2,.5,1.5,2,2,1.5,.5,-2],[-2,0,1.5,2,2,1.5,0,-2],[-2,.5,1,1.5,1.5,1,.5,-2],[-3,-2,0,.5,.5,0,-2,-3],[-4,-3,-2,-2,-2,-2,-3,-4]],B=[[-2,-1,-1,-1,-1,-1,-1,-2],[-1,0,0,0,0,0,0,-1],[-1,0,.5,1,1,.5,0,-1],[-1,.5,.5,1,1,.5,.5,-1],[-1,0,1,1,1,1,0,-1],[-1,1,1,1,1,1,1,-1],[-1,.5,0,0,0,0,.5,-1],[-2,-1,-1,-1,-1,-1,-1,-2]],k=[[0,0,0,0,0,0,0,0],[.5,1,1,1,1,1,1,.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[-.5,0,0,0,0,0,0,-.5],[0,0,0,.5,.5,0,0,0]],y=[[-3,-4,-4,-5,-5,-4,-4,-3],[-3,-4,-4,-5,-5,-4,-4,-3],[-3,-4,-4,-5,-5,-4,-4,-3],[-3,-4,-4,-5,-5,-4,-4,-3],[-2,-3,-3,-4,-4,-3,-3,-2],[-1,-2,-2,-2,-2,-2,-2,-1],[2,2,0,0,0,0,2,2],[2,3,1,0,0,1,3,2]],F=[[-2,-1,-1,-.5,-.5,-1,-1,-2],[-1,0,0,0,0,0,0,-1],[-1,0,.5,.5,.5,.5,0,-1],[-.5,0,.5,.5,.5,.5,0,-.5],[0,0,.5,.5,.5,.5,0,-.5],[-1,.5,.5,.5,.5,.5,0,-1],[-1,0,.5,0,0,0,0,-1],[-2,-1,-1,-.5,-.5,-1,-1,-2]],G={P:p.slice().reverse(),p:p,N:E.slice().reverse(),n:E,B:B.slice().reverse(),b:B,R:k.slice().reverse(),r:k,K:y.slice().reverse(),k:y,Q:F.slice().reverse(),q:F};function D(e){return P.UP[e]}function b(e){return P.DOWN[e]}function A(e){return P.LEFT[e]}function H(e){return P.RIGHT[e]}function d(e){return P.UP_LEFT[e]}function w(e){return P.UP_RIGHT[e]}function O(e){return P.DOWN_LEFT[e]}function M(e){return P.DOWN_RIGHT[e]}function L(e){var t=d(e);return t?D(t):null}function m(e){var t=d(e);return t?A(t):null}function K(e){var t=w(e);return t?D(t):null}function S(e){var t=w(e);return t?H(t):null}function N(e){var t=O(e);return t?b(t):null}function j(e){var t=O(e);return t?A(t):null}function _(e){var t=M(e);return t?b(t):null}function R(e){var t=M(e);return t?H(t):null}function T(e,t){return t===g?P.UP[e]:P.DOWN[e]}function W(e,t){return t===g?P.UP_LEFT[e]:P.DOWN_RIGHT[e]}function I(e,t){return t===g?P.UP_RIGHT[e]:P.DOWN_LEFT[e]}function U(e,t){return t===g?P.DOWN_LEFT[e]:P.UP_RIGHT[e]}function Q(e,t){return t===g?P.DOWN_RIGHT[e]:P.UP_LEFT[e]}function x(e){var t=0;switch(e){case"K":t=10;break;case"Q":t=9;break;case"R":t=5;break;case"B":case"N":t=3;break;case"P":t=1;break;case"k":t=10;break;case"q":t=9;break;case"r":t=5;break;case"b":case"n":t=3;break;case"p":t=1}return t}function q(e){return"string"==typeof e&&e.match("^[a-hA-H]{1}[1-8]{1}$")}var J=-1e3,V=1e3,Y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(JSON.stringify(C));if(r(this,e),"object"==typeof t)this.configuration=Object.assign({},v,t);else{if("string"!=typeof t)throw new Error("Unknown configuration type ".concat(typeof config,"."));this.configuration=Object.assign({},v,function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={pieces:{}},i=e.split(" "),n=i[0],o=i[1],r=i[2],s=i[3],a=i[4],l=i[5],f=0,v=u.length-1,C=0;C<n.length;C++)["K","Q","R","B","N","P","k","q","r","b","n","p"].includes(n[C])?(t.pieces["".concat(c[f]).concat(u[v])]=n[C],f++):["1","2","3","4","5","6","7","8"].includes(n[C])?f+=parseInt(n[C]):"/"===n[C]&&(v--,f=0);return t.turn="b"===o?h:g,t.castling={whiteLong:!1,whiteShort:!1,blackLong:!1,blackShort:!1},r.includes("K")&&(t.castling.whiteShort=!0),r.includes("k")&&(t.castling.blackShort=!0),r.includes("Q")&&(t.castling.whiteLong=!0),r.includes("q")&&(t.castling.blackLong=!0),q(s)&&(t.enPassant=s.toUpperCase()),t.halfMove=parseInt(a),t.fullMove=parseInt(l),t}(t))}this.configuration.castling||(this.configuration.castling={whiteShort:!0,blackShort:!0,whiteLong:!0,blackLong:!0}),this.history=[]}return s(e,[{key:"getAttackingFields",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getPlayingColor(),t=[];for(var i in this.configuration.pieces){var n=this.getPiece(i);this.getPieceColor(n)===e&&(t=[].concat(o(t),o(this.getPieceMoves(n,i))))}return t}},{key:"isAttackingKing",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getPlayingColor(),t=null;for(var i in this.configuration.pieces){var n=this.getPiece(i);if(this.isKing(n)&&this.getPieceColor(n)!==e){t=i;break}}for(var o=this.getPieceOnLocationColor(t),r=!1,s=t,a=0;D(s)&&!r;){s=D(s),a++;var c=this.getPiece(s);if(c&&this.getPieceColor(c)===e&&(this.isRook(c)||this.isQueen(c)||this.isKing(c)&&1===a)&&(r=!0),c)break}for(s=t,a=0;b(s)&&!r;){s=b(s),a++;var u=this.getPiece(s);if(u&&this.getPieceColor(u)===e&&(this.isRook(u)||this.isQueen(u)||this.isKing(u)&&1===a)&&(r=!0),u)break}for(s=t,a=0;A(s)&&!r;){s=A(s),a++;var l=this.getPiece(s);if(l&&this.getPieceColor(l)===e&&(this.isRook(l)||this.isQueen(l)||this.isKing(l)&&1===a)&&(r=!0),l)break}for(s=t,a=0;H(s)&&!r;){s=H(s),a++;var h=this.getPiece(s);if(h&&this.getPieceColor(h)===e&&(this.isRook(h)||this.isQueen(h)||this.isKing(h)&&1===a)&&(r=!0),h)break}for(s=t,a=0;I(s,o)&&!r;){s=I(s,o),a++;var g=this.getPiece(s);if(g&&this.getPieceColor(g)===e&&(this.isBishop(g)||this.isQueen(g)||1===a&&(this.isKing(g)||this.isPawn(g)))&&(r=!0),g)break}for(s=t,a=0;W(s,o)&&!r;){s=W(s,o),a++;var f=this.getPiece(s);if(f&&this.getPieceColor(f)===e&&(this.isBishop(f)||this.isQueen(f)||1===a&&(this.isKing(f)||this.isPawn(f)))&&(r=!0),f)break}for(s=t,a=0;Q(s,o)&&!r;){s=Q(s,o),a++;var v=this.getPiece(s);if(v&&this.getPieceColor(v)===e&&(this.isBishop(v)||this.isQueen(v)||this.isKing(v)&&1===a)&&(r=!0),v)break}for(s=t,a=0;U(s,o)&&!r;){s=U(s,o),a++;var C=this.getPiece(s);if(C&&this.getPieceColor(C)===e&&(this.isBishop(C)||this.isQueen(C)||this.isKing(C)&&1===a)&&(r=!0),C)break}s=K(t);var P=this.getPiece(s);return P&&this.getPieceColor(P)===e&&this.isKnight(P)&&(r=!0),s=S(t),(P=this.getPiece(s))&&this.getPieceColor(P)===e&&this.isKnight(P)&&(r=!0),s=m(t),(P=this.getPiece(s))&&this.getPieceColor(P)===e&&this.isKnight(P)&&(r=!0),s=L(t),(P=this.getPiece(s))&&this.getPieceColor(P)===e&&this.isKnight(P)&&(r=!0),s=N(t),(P=this.getPiece(s))&&this.getPieceColor(P)===e&&this.isKnight(P)&&(r=!0),s=j(t),(P=this.getPiece(s))&&this.getPieceColor(P)===e&&this.isKnight(P)&&(r=!0),s=_(t),(P=this.getPiece(s))&&this.getPieceColor(P)===e&&this.isKnight(P)&&(r=!0),s=R(t),(P=this.getPiece(s))&&this.getPieceColor(P)===e&&this.isKnight(P)&&(r=!0),r}},{key:"hasPlayingPlayerCheck",value:function(){return this.isAttackingKing(this.getNonPlayingColor())}},{key:"hasNonPlayingPlayerCheck",value:function(){return this.isAttackingKing(this.getPlayingColor())}},{key:"getLowestValuePieceAttackingLocation",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getPlayingColor(),n=null,o=function(o){var r=t.getPiece(o);t.getPieceColor(r)===i&&t.getPieceMoves(r,o).map((function(t){t===e&&(null===n||x(r)<n)&&(n=x(r))}))};for(var r in this.configuration.pieces)o(r);return n}},{key:"getMoves",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getPlayingColor(),o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r={};for(var s in this.configuration.pieces){var a=this.getPiece(s);this.getPieceColor(a)===i&&Object.assign(r,n({},s,this.getPieceMoves(a,s)))}var c=this.getAttackingFields(this.getNonPlayingColor());if(this.isLeftCastlingPossible(c)&&(this.isPlayingWhite()&&r.E1.push("C1"),this.isPlayingBlack()&&r.E8.push("C8")),this.isRightCastlingPossible(c)&&(this.isPlayingWhite()&&r.E1.push("G1"),this.isPlayingBlack()&&r.E8.push("G8")),!o)return r;var u={},l=function(i){r[i].map((function(n){var o=new e({pieces:Object.assign({},t.configuration.pieces),castling:Object.assign({},t.configuration.castling)});o.move(i,n),(t.isPlayingWhite()&&!o.isAttackingKing(h)||t.isPlayingBlack()&&!o.isAttackingKing(g))&&(u[i]||(u[i]=[]),u[i].push(n))}))};for(var f in r)l(f);return Object.keys(u).length||(this.configuration.isFinished=!0,this.hasPlayingPlayerCheck()&&(this.configuration.checkMate=!0)),u}},{key:"isLeftCastlingPossible",value:function(e){if(this.isPlayingWhite()&&!this.configuration.castling.whiteLong)return!1;if(this.isPlayingBlack()&&!this.configuration.castling.blackLong)return!1;var t=null;if(this.isPlayingWhite()&&"K"===this.getPiece("E1")&&"R"===this.getPiece("A1")&&!e.includes("E1")?t="E1":this.isPlayingBlack()&&"k"===this.getPiece("E8")&&"r"===this.getPiece("A8")&&!e.includes("E8")&&(t="E8"),!t)return!1;var i=A(t);return!this.getPiece(i)&&!e.includes(i)&&(i=A(i),!this.getPiece(i)&&!e.includes(i)&&(i=A(i),!this.getPiece(i)))}},{key:"isRightCastlingPossible",value:function(e){if(this.isPlayingWhite()&&!this.configuration.castling.whiteShort)return!1;if(this.isPlayingBlack()&&!this.configuration.castling.blackShort)return!1;var t=null;if(this.isPlayingWhite()&&"K"===this.getPiece("E1")&&"R"===this.getPiece("H1")&&!e.includes("E1")?t="E1":this.isPlayingBlack()&&"k"===this.getPiece("E8")&&"r"===this.getPiece("H8")&&!e.includes("E8")&&(t="E8"),!t)return!1;var i=H(t);return!this.getPiece(i)&&!e.includes(i)&&(i=H(i),!this.getPiece(i)&&!e.includes(i))}},{key:"getPieceMoves",value:function(e,t){return this.isPawn(e)?this.getPawnMoves(e,t):this.isKnight(e)?this.getKnightMoves(e,t):this.isRook(e)?this.getRookMoves(e,t):this.isBishop(e)?this.getBishopMoves(e,t):this.isQueen(e)?this.getQueenMoves(e,t):this.isKing(e)?this.getKingMoves(e,t):[]}},{key:"isPawn",value:function(e){return"P"===e.toUpperCase()}},{key:"isKnight",value:function(e){return"N"===e.toUpperCase()}},{key:"isRook",value:function(e){return"R"===e.toUpperCase()}},{key:"isBishop",value:function(e){return"B"===e.toUpperCase()}},{key:"isQueen",value:function(e){return"Q"===e.toUpperCase()}},{key:"isKing",value:function(e){return"K"===e.toUpperCase()}},{key:"getPawnMoves",value:function(e,t){var i=[],n=this.getPieceColor(e),o=T(t,n);return o&&!this.getPiece(o)&&(i.push(o),o=T(o,n),function(e,t){return e===g&&"2"===t[1]||e===h&&"7"===t[1]}(n,t)&&o&&!this.getPiece(o)&&i.push(o)),(o=W(t,n))&&(this.getPiece(o)&&this.getPieceOnLocationColor(o)!==n||o===this.configuration.enPassant)&&i.push(o),(o=I(t,n))&&(this.getPiece(o)&&this.getPieceOnLocationColor(o)!==n||o===this.configuration.enPassant)&&i.push(o),i}},{key:"getKnightMoves",value:function(e,t){var i=[],n=this.getPieceColor(e),o=K(t);return o&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=S(t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=L(t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=m(t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=j(t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=N(t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=R(t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=_(t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),i}},{key:"getRookMoves",value:function(e,t){for(var i=[],n=this.getPieceColor(e),o=t;D(o);){o=D(o);var r=this.getPieceOnLocationColor(o);if(this.getPieceOnLocationColor(o)!==n&&i.push(o),r)break}for(o=t;b(o);){o=b(o);var s=this.getPieceOnLocationColor(o);if(this.getPieceOnLocationColor(o)!==n&&i.push(o),s)break}for(o=t;H(o);){o=H(o);var a=this.getPieceOnLocationColor(o);if(this.getPieceOnLocationColor(o)!==n&&i.push(o),a)break}for(o=t;A(o);){o=A(o);var c=this.getPieceOnLocationColor(o);if(this.getPieceOnLocationColor(o)!==n&&i.push(o),c)break}return i}},{key:"getBishopMoves",value:function(e,t){for(var i=[],n=this.getPieceColor(e),o=t;d(o);){o=d(o);var r=this.getPieceOnLocationColor(o);if(this.getPieceOnLocationColor(o)!==n&&i.push(o),r)break}for(o=t;w(o);){o=w(o);var s=this.getPieceOnLocationColor(o);if(this.getPieceOnLocationColor(o)!==n&&i.push(o),s)break}for(o=t;O(o);){o=O(o);var a=this.getPieceOnLocationColor(o);if(this.getPieceOnLocationColor(o)!==n&&i.push(o),a)break}for(o=t;M(o);){o=M(o);var c=this.getPieceOnLocationColor(o);if(this.getPieceOnLocationColor(o)!==n&&i.push(o),c)break}return i}},{key:"getQueenMoves",value:function(e,t){return[].concat(o(this.getRookMoves(e,t)),o(this.getBishopMoves(e,t)))}},{key:"getKingMoves",value:function(e,t){var i=[],n=this.getPieceColor(e),o=t;return(o=D(o))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=H(o=t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=b(o=t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=A(o=t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=d(o=t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=w(o=t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=O(o=t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),(o=M(o=t))&&this.getPieceOnLocationColor(o)!==n&&i.push(o),i}},{key:"getPieceColor",value:function(e){return e.toUpperCase()===e?g:h}},{key:"getPieceOnLocationColor",value:function(e){var t=this.getPiece(e);return t?t.toUpperCase()===t?g:h:null}},{key:"getPiece",value:function(e){return this.configuration.pieces[e]}},{key:"setPiece",value:function(e,t){if(!function(e){return Object.values(l).includes(e)}(t))throw new Error("Invalid piece "+t);if(!q(e))throw new Error("Invalid location "+e);this.configuration.pieces[e.toUpperCase()]=t}},{key:"removePiece",value:function(e){if(!q(e))throw new Error("Invalid location "+e);delete this.configuration.pieces[e.toUpperCase()]}},{key:"isEmpty",value:function(e){if(!q(e))throw new Error("Invalid location "+e);return!this.configuration.pieces[e.toUpperCase()]}},{key:"getPlayingColor",value:function(){return this.configuration.turn}},{key:"getNonPlayingColor",value:function(){return this.isPlayingWhite()?h:g}},{key:"isPlayingWhite",value:function(){return this.configuration.turn===g}},{key:"isPlayingBlack",value:function(){return this.configuration.turn===h}},{key:"addMoveToHistory",value:function(e,t){this.history.push({from:e,to:t,configuration:JSON.parse(JSON.stringify(this.configuration))})}},{key:"move",value:function(e,t){var i,o,r=this.getPiece(e),s=this.getPiece(t);if(!r)throw new Error("There is no piece at "+e);if(Object.assign(this.configuration.pieces,n({},t,r)),delete this.configuration.pieces[e],this.isPlayingWhite()&&this.isPawn(r)&&"8"===t[1]&&Object.assign(this.configuration.pieces,n({},t,"Q")),this.isPlayingBlack()&&this.isPawn(r)&&"1"===t[1]&&Object.assign(this.configuration.pieces,n({},t,"q")),this.isPawn(r)&&t===this.configuration.enPassant&&delete this.configuration.pieces[(i=t,o=this.getPlayingColor(),o===g?P.DOWN[i]:P.UP[i])],this.isPawn(r)&&this.isPlayingWhite()&&"2"===e[1]&&"4"===t[1]?this.configuration.enPassant=e[0]+"3":this.isPawn(r)&&this.isPlayingBlack()&&"7"===e[1]&&"5"===t[1]?this.configuration.enPassant=e[0]+"6":this.configuration.enPassant=null,"E1"===e&&Object.assign(this.configuration.castling,{whiteLong:!1,whiteShort:!1}),"E8"===e&&Object.assign(this.configuration.castling,{blackLong:!1,blackShort:!1}),"A1"===e&&Object.assign(this.configuration.castling,{whiteLong:!1}),"H1"===e&&Object.assign(this.configuration.castling,{whiteShort:!1}),"A8"===e&&Object.assign(this.configuration.castling,{blackLong:!1}),"H8"===e&&Object.assign(this.configuration.castling,{blackShort:!1}),this.isKing(r)){if("E1"===e&&"C1"===t)return this.move("A1","D1");if("E8"===e&&"C8"===t)return this.move("A8","D8");if("E1"===e&&"G1"===t)return this.move("H1","F1");if("E8"===e&&"G8"===t)return this.move("H8","F8")}this.configuration.turn=this.isPlayingWhite()?h:g,this.isPlayingWhite()&&this.configuration.fullMove++,this.configuration.halfMove++,(s||this.isPawn(r))&&(this.configuration.halfMove=0)}},{key:"exportJson",value:function(){return{moves:this.getMoves(),pieces:this.configuration.pieces,turn:this.configuration.turn,isFinished:this.configuration.isFinished,check:this.hasPlayingPlayerCheck(),checkMate:this.configuration.checkMate,castling:this.configuration.castling,enPassant:this.configuration.enPassant,halfMove:this.configuration.halfMove,fullMove:this.configuration.fullMove}}},{key:"calculateAiMove",value:function(e){return this.calculateAiMoves(e)[0]}},{key:"calculateAiMoves",value:function(e){var t=this;if(e=parseInt(e),!f.includes(e))throw new Error("Invalid level ".concat(e,". You can choose ").concat(f));var i=[],n=this.calculateScore(this.getPlayingColor()),o=this.getMoves(),r=function(r){o[r].map((function(o){var s=t.getTestBoard(),a=Boolean(s.getPiece(o));s.move(r,o),i.push({from:r,to:o,score:s.testMoveScores(t.getPlayingColor(),t.getAIMaxDepth(e,r,o),a?s.calculateScore(t.getPlayingColor()):n).score+s.calculateScoreByPiecesLocation(t.getPlayingColor())+Math.floor(10*Math.random())/10})}))};for(var s in o)r(s);return i.sort((function(e,t){return e.score<t.score?0:-1})),i}},{key:"getAIMaxDepth",value:function(e,t,i){var n=0;["K","k","Q","q"].map((function(e){n+=x(e)}));var o={0:1,1:2,2:3,3:3}[e];return this.getIngamePiecesValue()<n&&(o+=1),e>=3&&this.configuration.pieces[i]&&(o+=1),o}},{key:"getIngamePiecesValue",value:function(){var e=0;for(var t in this.configuration.pieces)e+=x(this.getPiece(t));return e}},{key:"getTestBoard",value:function(){return new e({pieces:Object.assign({},this.configuration.pieces),castling:Object.assign({},this.configuration.castling),turn:this.configuration.turn,enPassant:this.configuration.enPassant})}},{key:"testMoveScores",value:function(e,t,i){var n=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r={};if(this.hasPlayingPlayerCheck()?(i=null,r=this.getMoves(this.getPlayingColor())):o<t&&(r=this.getMoves(this.getPlayingColor(),!1)),o>=t||this.configuration.isFinished){if(null!==i)return{score:i,checkMate:!1};var s=this.calculateScore(e);return this.configuration.checkMate&&(s+=this.getPlayingColor()===e?o:-o),{score:s,checkMate:this.configuration.checkMate}}var a=this.getPlayingColor()===e?J:V,c=!1,u=function(s){c||r[s].map((function(r){if(!c){var u=n.getTestBoard(),l=Boolean(u.getPiece(r));if(u.move(s,r),!u.hasNonPlayingPlayerCheck()){var h=u.testMoveScores(e,t,l?u.calculateScore(e):i,o+1);h.checkMate&&(c=!0),a=n.getPlayingColor()===e?Math.max(a,h.score):Math.min(a,h.score)}}}))};for(var l in r)u(l);return{score:a,checkMate:!1}}},{key:"calculateScoreByPiecesLocation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getPlayingColor(),t={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7},i=0;for(var n in this.configuration.pieces){var o=this.getPiece(n);if(G[o]){var r=G[o][n[1]-1][t[n[0]]];i+=.5*(this.getPieceColor(o)===e?r:-r)}}return i}},{key:"calculateScore",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getPlayingColor(),t=0;if(this.configuration.checkMate)return this.getPlayingColor()===e?J:V;for(var i in this.configuration.pieces){var n=this.getPiece(i);this.getPieceColor(n)===e?t+=10*x(n):t-=10*x(n)}return t}}]),e}(),$=function(){function e(t){r(this,e),this.board=new Y(t)}return s(e,[{key:"move",value:function(e,t){e=e.toUpperCase(),t=t.toUpperCase();var i=this.board.getMoves();if(!i[e]||!i[e].includes(t))throw new Error("Invalid move from ".concat(e," to ").concat(t," for ").concat(this.board.getPlayingColor()));return this.board.addMoveToHistory(e,t),this.board.move(e,t),n({},e,t)}},{key:"moves",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return(e?this.board.getMoves()[e.toUpperCase()]:this.board.getMoves())||[]}},{key:"setPiece",value:function(e,t){this.board.setPiece(e,t)}},{key:"removePiece",value:function(e){this.board.removePiece(e)}},{key:"aiMove",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=this.board.calculateAiMove(e);return this.move(t.from,t.to)}},{key:"getHistory",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?this.board.history.reverse():this.board.history}},{key:"printToConsole",value:function(){!function(e){t.stdout.write("\n");var i=g;Object.assign([],u).reverse().map((function(n){t.stdout.write(""+n),c.map((function(o){switch(e.pieces["".concat(o).concat(n)]){case"K":t.stdout.write("\u265a");break;case"Q":t.stdout.write("\u265b");break;case"R":t.stdout.write("\u265c");break;case"B":t.stdout.write("\u265d");break;case"N":t.stdout.write("\u265e");break;case"P":t.stdout.write("\u265f");break;case"k":t.stdout.write("\u2654");break;case"q":t.stdout.write("\u2655");break;case"r":t.stdout.write("\u2656");break;case"b":t.stdout.write("\u2657");break;case"n":t.stdout.write("\u2658");break;case"p":t.stdout.write("\u2659");break;default:t.stdout.write(i===g?"\u2588":"\u2591")}i=i===g?h:g})),i=i===g?h:g,t.stdout.write("\n")})),t.stdout.write(" "),c.map((function(e){t.stdout.write(""+e)})),t.stdout.write("\n")}(this.board.configuration)}},{key:"exportJson",value:function(){return this.board.exportJson()}},{key:"exportFEN",value:function(){return function(e){var t="";Object.assign([],u).reverse().map((function(i){var n=0;i<8&&(t+="/"),c.map((function(o){var r=e.pieces["".concat(o).concat(i)];r?(n&&(t+=n.toString(),n=0),t+=r):n++})),t+=""+(n||"")})),t+=e.turn===g?" w ":" b ";var i=e.castling,n=i.whiteShort,o=i.whiteLong,r=i.blackLong,s=i.blackShort;return o||n||r||s?(n&&(t+="K"),o&&(t+="Q"),s&&(t+="k"),r&&(t+="q")):t+="-",t+=" "+(e.enPassant?e.enPassant.toLowerCase():"-"),t+=" "+e.halfMove,t+=" "+e.fullMove}(this.board.configuration)}}]),e}();function z(e){if(!e)throw new Error("Configuration param required.");return new $(e).moves()}function X(e){if(!e)throw new Error("Configuration param required.");return new $(e).exportJson()}function Z(e){if(!e)throw new Error("Configuration param required.");return new $(e).exportFEN()}function ee(e,t,i){if(!e)throw new Error("Configuration param required.");var n=new $(e);return n.move(t,i),"object"==typeof e?n.exportJson():n.exportFEN()}function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!e)throw new Error("Configuration param required.");var i=new $(e).board.calculateAiMove(t);return n({},i.from,i.to)}}])}).call(this,i(45))},101:function(e,t){e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},102:function(e,t,i){var n=i(103),o=i(104),r=i(86),s=i(105);e.exports=function(e){return n(e)||o(e)||r(e)||s()}},103:function(e,t,i){var n=i(87);e.exports=function(e){if(Array.isArray(e))return n(e)}},104:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},105:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},106:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},107:function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}}]);
//# sourceMappingURL=8.70facacd.chunk.js.map