(this.webpackJsonpBingo=this.webpackJsonpBingo||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(10),c=a.n(r),s=(a(16),a(8)),i=a(1),u=a(2),o=a(3),m=a(4),d=a(5),v=function(e){var t=e.title,a=e.setTitle,l="";return n.a.createElement("span",{className:"title-input-container"},n.a.createElement("span",{className:"title-label"},"Title"),n.a.createElement("input",{className:"title-input",onChange:function(e){a(l.value)},ref:function(e){l=e},value:t,tabIndex:1}))},b=function(e){var t=e.games,a=e.lessGames,l=e.moreGames;return n.a.createElement("div",{className:"games noselect"},n.a.createElement("span",{className:"game-label noselect"},"Games"),n.a.createElement("span",{className:"spinner-container noselect"},n.a.createElement("span",{className:"spinner-left noselect",onClick:function(){a()}},"-"),n.a.createElement("span",{className:"spinner-text noselect"},t),n.a.createElement("span",{className:"spinner-right noselect",onClick:function(){l()}},"+")))},p=function(e){var t=e.per,a=e.lessPer,l=e.morePer;return n.a.createElement("div",{className:"per noselect"},n.a.createElement("span",{className:"per-label noselect"},"Cards per Page"),n.a.createElement("span",{className:"spinner-container noselect"},n.a.createElement("span",{className:"spinner-left noselect",onClick:function(){a()}},"-"),n.a.createElement("span",{className:"spinner-text noselect"},t),n.a.createElement("span",{className:"spinner-right noselect",onClick:function(){l()}},"+")))},N=function(e){var t=e.addGroup,a="";return n.a.createElement("span",{className:"group-input-container"},n.a.createElement("span",{className:"group-input-label"},"Group"),n.a.createElement("input",{className:"group-input",onKeyDown:function(e){"Enter"===e.key&&(t(a.value),a.value="")},ref:function(e){a=e},tabIndex:2}),n.a.createElement("button",{className:"group-input-button",onClick:function(){t(a.value),a.value=""}},"+"))},O=function(e){var t=e.group,a=e.doublesided,l=e.toggleDoubleSided,r=e.lessPlayers,c=e.morePlayers,s=e.remove;return n.a.createElement("li",{className:"group noselect"},n.a.createElement("span",{className:"group-name noselect"},"Group: ",t.name," "),n.a.createElement("span",{className:"spinner-container noselect"},n.a.createElement("span",{className:"spinner-text noselect"}," | Players: "),n.a.createElement("span",{className:"spinner-left noselect",onClick:function(){r(t.id)}},"-"),n.a.createElement("span",{className:"spinner-text noselect"},t.players),n.a.createElement("span",{className:"spinner-right noselect",onClick:function(){c(t.id)}},"+"),n.a.createElement("span",{className:"spinner-text noselect"}," | Double Sided: "),n.a.createElement("span",{className:a?"checked noselect":"unchecked noselect",onClick:function(){l(t.id)}},"\u2714"),n.a.createElement("span",{className:"group-remove noselect",onClick:function(){s(t.id)}},"X")))},h=function(e){var t=e.groups,a=e.remove,l=e.toggleDoubleSided,r=e.lessPlayers,c=e.morePlayers,s=t.map((function(e){return n.a.createElement(O,{group:e,key:e.id,remove:a,doublesided:e.doublesided,toggleDoubleSided:l,lessPlayers:r,morePlayers:c})}));return n.a.createElement("ul",{className:"groups"},n.a.createElement("li",{className:"group-header"},"Groups"),s)};window.group_id=0,window.max_groups=50,window.max_players=25,window.max_games=25;var G=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).state={title:"Bingo",groups:[],games:8,per:4},l}return Object(u.a)(a,[{key:"handleSetTitle",value:function(e){e&&this.setState({title:e})}},{key:"addGroup",value:function(e){if(e&&e.length>0&&this.state.groups.length<window.max_groups){var t={name:e,players:4,doublesided:!1,id:window.group_id++};this.state.groups.push(t),this.setState({groups:this.state.groups})}}},{key:"handleRemove",value:function(e){var t=this.state.groups.filter((function(t){if(t.id!==e)return t}));this.setState({groups:t})}},{key:"handleMorePlayers",value:function(e){var t=this.state.groups.map((function(t){return t.id===e?(t.players=t.players+1,t.players>window.max_players&&(t.players=window.max_players),t):t}));this.setState({groups:t})}},{key:"handleLessPlayers",value:function(e){var t=this.state.groups.map((function(t){return t.id===e?(t.players=t.players-1,t.players<=1&&(t.players=1),t):t}));this.setState({groups:t})}},{key:"toggleDoubleSided",value:function(e){var t=this.state.groups.map((function(t){return t.id===e?(t.doublesided=!t.doublesided,t):t}));this.setState({groups:t})}},{key:"handleMoreGames",value:function(){var e=this.state.games;(e+=1)>window.max_games&&(e=window.max_games),this.setState({games:e})}},{key:"handleLessGames",value:function(){var e=this.state.games;(e-=1)<=1&&(e=1),this.setState({games:e})}},{key:"handleMorePer",value:function(){var e=this.state.per;1===e?e=2:2===e?e=4:4===e&&(e=6),this.setState({per:e})}},{key:"handleLessPer",value:function(){var e=this.state.per;6===e?e=4:4===e?e=2:2===e&&(e=1),this.setState({per:e})}},{key:"downloadUrl",value:function(e,t){var a=document.createElement("a");a.href=e,a.download=t||"download",a.click()}},{key:"handleDownload",value:function(){this.state.groups.length>0&&this.downloadUrl("/api/cards.zip?title=".concat(this.state.title,"&games=").concat(this.state.games,"&per=").concat(this.state.per,"&groups=").concat(JSON.stringify(this.state.groups)),"cards.pdf")}},{key:"formPreventDefault",value:function(e){e.preventDefault()}},{key:"render",value:function(){return n.a.createElement("div",{id:"bingocards",className:""},n.a.createElement("form",{className:"card-form-container",onSubmit:this.formPreventDefault.bind(this)},n.a.createElement(v,{title:this.state.title,setTitle:this.handleSetTitle.bind(this)}),n.a.createElement(b,{games:this.state.games,lessGames:this.handleLessGames.bind(this),moreGames:this.handleMoreGames.bind(this)}),n.a.createElement(p,{per:this.state.per,lessPer:this.handleLessPer.bind(this),morePer:this.handleMorePer.bind(this)}),n.a.createElement(h,{groups:this.state.groups,remove:this.handleRemove.bind(this),toggleDoubleSided:this.toggleDoubleSided.bind(this),lessPlayers:this.handleLessPlayers.bind(this),morePlayers:this.handleMorePlayers.bind(this)}),n.a.createElement(N,{addGroup:this.addGroup.bind(this)})),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col c100"},n.a.createElement("button",{onClick:this.handleDownload.bind(this),disabled:this.state.groups.length<=0},"Download"))))}}]),a}(n.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=Object.values(this.props.balls),t={B:e.filter((function(e){return"B"===e.letter})),I:e.filter((function(e){return"I"===e.letter})),N:e.filter((function(e){return"N"===e.letter})),G:e.filter((function(e){return"G"===e.letter})),O:e.filter((function(e){return"O"===e.letter}))};return n.a.createElement("div",{className:"board"},Object.values(t).map((function(e,t){return n.a.createElement("div",{key:"row"+t,className:"board-row"},n.a.createElement("div",{key:t,className:"letter"},t),Object.values(e).map((function(e){return n.a.createElement("div",{key:e.letter+e.number,className:e.called&&e.active?"active ball":e.called?"called ball":"ball"},e.number)})))})))}}]),a}(n.a.Component),B=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).state={selected:null},l}return Object(u.a)(a,[{key:"handleClick",value:function(e,t){this.setState({selected:t}),"function"===typeof this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=this.props.options.map((function(t,a){var l=e.state.selected===a?"selected":"";return n.a.createElement("li",{className:"menuitem "+l,key:a,onClick:e.handleClick.bind(e,t,a),data:t.value},t.label)}));return n.a.createElement("ul",{className:"menu "+this.props.className},t)}}]),a}(n.a.Component),I=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).choosePattern=function(e){if(null===e)l.setState({selected:null,pattern:{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]}});else{var t,a=e.value,n=l.state.previous,r=l.state.presets[e.value],c=r.length;r=r[t=a===n?(l.state.offset+1)%c:0],n=a,l.setState({selected:a,previous:n,ways:c,offset:t,pattern:r})}},l.updatePattern=function(e,t,a){if("Custom"===l.state.selected){var n=l.state.pattern;n[e][t]=!a,l.setState({selected:"Custom",pattern:n})}},l.state={selected:null,previous:null,ways:0,offset:0,pattern:{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},presets:{Regular:[{B:[!0,!0,!0,!0,!0],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!0,!0,!0,!0,!0],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!0,!0,!0,!0,!0],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!0,!0,!0,!0,!0],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!0,!0,!0,!0,!0]},{B:[!0,!1,!1,!1,!1],I:[!0,!1,!1,!1,!1],N:[!0,!1,!1,!1,!1],G:[!0,!1,!1,!1,!1],O:[!0,!1,!1,!1,!1]},{B:[!1,!0,!1,!1,!1],I:[!1,!0,!1,!1,!1],N:[!1,!0,!1,!1,!1],G:[!1,!0,!1,!1,!1],O:[!1,!0,!1,!1,!1]},{B:[!1,!1,!0,!1,!1],I:[!1,!1,!0,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!0,!1,!1],O:[!1,!1,!0,!1,!1]},{B:[!1,!1,!1,!0,!1],I:[!1,!1,!1,!0,!1],N:[!1,!1,!1,!0,!1],G:[!1,!1,!1,!0,!1],O:[!1,!1,!1,!0,!1]},{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!1,!0],N:[!1,!1,!1,!1,!0],G:[!1,!1,!1,!1,!0],O:[!1,!1,!1,!1,!0]},{B:[!0,!1,!1,!1,!1],I:[!1,!0,!1,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!1,!0,!1],O:[!1,!1,!1,!1,!0]},{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!0,!1],N:[!1,!1,!0,!1,!1],G:[!1,!0,!1,!1,!1],O:[!0,!1,!1,!1,!1]}],"Regular or 4 Corners":[{B:[!0,!0,!0,!0,!0],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!0,!0,!0,!0,!0],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!0,!0,!0,!0,!0],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!0,!0,!0,!0,!0],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!0,!0,!0,!0,!0]},{B:[!0,!1,!1,!1,!1],I:[!0,!1,!1,!1,!1],N:[!0,!1,!1,!1,!1],G:[!0,!1,!1,!1,!1],O:[!0,!1,!1,!1,!1]},{B:[!1,!0,!1,!1,!1],I:[!1,!0,!1,!1,!1],N:[!1,!0,!1,!1,!1],G:[!1,!0,!1,!1,!1],O:[!1,!0,!1,!1,!1]},{B:[!1,!1,!0,!1,!1],I:[!1,!1,!0,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!0,!1,!1],O:[!1,!1,!0,!1,!1]},{B:[!1,!1,!1,!0,!1],I:[!1,!1,!1,!0,!1],N:[!1,!1,!1,!0,!1],G:[!1,!1,!1,!0,!1],O:[!1,!1,!1,!0,!1]},{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!1,!0],N:[!1,!1,!1,!1,!0],G:[!1,!1,!1,!1,!0],O:[!1,!1,!1,!1,!0]},{B:[!0,!1,!1,!1,!1],I:[!1,!0,!1,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!1,!0,!1],O:[!1,!1,!1,!1,!0]},{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!0,!1],N:[!1,!1,!0,!1,!1],G:[!1,!0,!1,!1,!1],O:[!0,!1,!1,!1,!1]},{B:[!0,!1,!1,!1,!0],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!0,!1,!1,!1,!0]}],Horizontal:[{B:[!0,!1,!1,!1,!1],I:[!0,!1,!1,!1,!1],N:[!0,!1,!1,!1,!1],G:[!0,!1,!1,!1,!1],O:[!0,!1,!1,!1,!1]},{B:[!1,!0,!1,!1,!1],I:[!1,!0,!1,!1,!1],N:[!1,!0,!1,!1,!1],G:[!1,!0,!1,!1,!1],O:[!1,!0,!1,!1,!1]},{B:[!1,!1,!0,!1,!1],I:[!1,!1,!0,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!0,!1,!1],O:[!1,!1,!0,!1,!1]},{B:[!1,!1,!1,!0,!1],I:[!1,!1,!1,!0,!1],N:[!1,!1,!1,!0,!1],G:[!1,!1,!1,!0,!1],O:[!1,!1,!1,!0,!1]},{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!1,!0],N:[!1,!1,!1,!1,!0],G:[!1,!1,!1,!1,!0],O:[!1,!1,!1,!1,!0]}],Vertical:[{B:[!0,!0,!0,!0,!0],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!0,!0,!0,!0,!0],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!0,!0,!0,!0,!0],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!0,!0,!0,!0,!0],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!0,!0,!0,!0,!0]}],"Top or Bottom":[{B:[!0,!1,!1,!1,!1],I:[!0,!1,!1,!1,!1],N:[!0,!1,!1,!1,!1],G:[!0,!1,!1,!1,!1],O:[!0,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!1,!0],N:[!1,!1,!1,!1,!0],G:[!1,!1,!1,!1,!0],O:[!1,!1,!1,!1,!0]}],"Letter A":[{B:[!1,!1,!0,!0,!0],I:[!1,!0,!0,!1,!1],N:[!0,!1,!0,!1,!1],G:[!1,!0,!0,!1,!1],O:[!1,!1,!0,!0,!0]}],"Letter H":[{B:[!0,!0,!0,!0,!0],I:[!1,!1,!0,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!0,!1,!1],O:[!0,!0,!0,!0,!0]}],"Letter I":[{B:[!0,!1,!1,!1,!0],I:[!0,!1,!1,!1,!0],N:[!0,!0,!0,!0,!0],G:[!0,!1,!1,!1,!0],O:[!0,!1,!1,!1,!0]}],"Letter N":[{B:[!0,!0,!0,!0,!0],I:[!1,!0,!1,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!1,!0,!1],O:[!0,!0,!0,!0,!0]}],"Letter X":[{B:[!0,!1,!1,!1,!0],I:[!1,!0,!1,!0,!1],N:[!1,!1,!0,!1,!1],G:[!1,!0,!1,!0,!1],O:[!0,!1,!1,!1,!0]}],"Letter Z":[{B:[!0,!1,!1,!1,!0],I:[!0,!1,!1,!0,!0],N:[!0,!1,!0,!1,!0],G:[!0,!0,!1,!1,!0],O:[!0,!1,!1,!1,!0]}],"Number 0":[{B:[!1,!0,!0,!0,!1],I:[!0,!1,!1,!1,!0],N:[!0,!1,!1,!1,!0],G:[!0,!1,!1,!1,!0],O:[!1,!0,!0,!0,!1]}],"Number 13":[{B:[!0,!0,!0,!0,!0],I:[!1,!1,!1,!1,!1],N:[!0,!1,!0,!1,!0],G:[!0,!1,!0,!1,!0],O:[!0,!0,!0,!0,!0]}],"Bow Tie":[{B:[!0,!0,!0,!0,!0],I:[!1,!0,!0,!0,!1],N:[!1,!1,!0,!1,!1],G:[!1,!0,!0,!0,!1],O:[!0,!0,!0,!0,!0]}],"Layer Cake":[{B:[!0,!1,!0,!1,!0],I:[!0,!1,!0,!1,!0],N:[!0,!1,!0,!1,!0],G:[!0,!1,!0,!1,!0],O:[!0,!1,!0,!1,!0]}],"Champagne Glass":[{B:[!0,!1,!1,!1,!0],I:[!1,!0,!1,!1,!0],N:[!1,!1,!0,!0,!0],G:[!1,!0,!1,!1,!0],O:[!0,!1,!1,!1,!0]}],"Christmas Tree":[{B:[!1,!1,!0,!1,!1],I:[!1,!0,!0,!1,!1],N:[!0,!0,!0,!0,!0],G:[!1,!0,!0,!1,!1],O:[!1,!1,!0,!1,!1]}],"Maple Leaf":[{B:[!1,!0,!1,!1,!1],I:[!1,!1,!0,!0,!1],N:[!0,!0,!0,!0,!0],G:[!1,!1,!0,!0,!1],O:[!1,!0,!1,!1,!1]}],"Postage Stamps":[{B:[!0,!0,!1,!1,!1],I:[!0,!0,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!0,!0],O:[!1,!1,!1,!0,!0]},{B:[!1,!1,!1,!0,!0],I:[!1,!1,!1,!0,!0],N:[!1,!1,!1,!1,!1],G:[!0,!0,!1,!1,!1],O:[!0,!0,!1,!1,!1]}],Checkers:[{B:[!0,!1,!0,!1,!0],I:[!1,!0,!1,!0,!1],N:[!0,!1,!0,!1,!0],G:[!1,!0,!1,!0,!1],O:[!0,!1,!0,!1,!0]}],Sputnik:[{B:[!0,!1,!1,!1,!0],I:[!1,!0,!0,!0,!1],N:[!1,!0,!0,!0,!1],G:[!1,!0,!0,!0,!1],O:[!0,!1,!1,!1,!0]}],"Swatter & Fly":[{B:[!0,!0,!0,!1,!1],I:[!0,!0,!0,!0,!0],N:[!0,!0,!0,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!0]}],Cactus:[{B:[!0,!0,!0,!1,!1],I:[!1,!1,!0,!1,!1],N:[!0,!0,!0,!0,!0],G:[!1,!1,!0,!1,!1],O:[!0,!0,!0,!1,!1]}],"Dog Bone":[{B:[!1,!0,!0,!0,!1],I:[!1,!1,!0,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!0,!1,!1],O:[!1,!0,!0,!0,!1]}],"Hollow Diamond":[{B:[!1,!1,!0,!1,!1],I:[!1,!0,!1,!0,!1],N:[!0,!1,!1,!1,!0],G:[!1,!0,!1,!0,!1],O:[!1,!1,!0,!1,!1]}],"Full Diamond":[{B:[!1,!1,!0,!1,!1],I:[!1,!0,!0,!0,!1],N:[!0,!0,!0,!0,!0],G:[!1,!0,!0,!0,!1],O:[!1,!1,!0,!1,!1]}],Blackout:[{B:[!0,!0,!0,!0,!0],I:[!0,!0,!0,!0,!0],N:[!0,!0,!0,!0,!0],G:[!0,!0,!0,!0,!0],O:[!0,!0,!0,!0,!0]}],Brackets:[{B:[!0,!0,!1,!0,!0],I:[!0,!1,!1,!1,!0],N:[!1,!1,!1,!1,!1],G:[!0,!1,!1,!1,!0],O:[!0,!0,!1,!0,!0]}],"Crazy H":[{B:[!0,!1,!1,!1,!0],I:[!0,!1,!1,!1,!0],N:[!0,!0,!0,!0,!0],G:[!0,!1,!1,!1,!0],O:[!0,!1,!1,!1,!0]},{B:[!0,!0,!0,!0,!0],I:[!1,!1,!0,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!0,!1,!1],O:[!0,!0,!0,!0,!0]}],"Crazy L":[{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!1,!0],N:[!1,!1,!1,!1,!0],G:[!1,!1,!1,!1,!0],O:[!0,!0,!0,!0,!0]},{B:[!0,!1,!1,!1,!1],I:[!0,!1,!1,!1,!1],N:[!0,!1,!1,!1,!1],G:[!0,!1,!1,!1,!1],O:[!0,!0,!0,!0,!0]},{B:[!0,!0,!0,!0,!0],I:[!0,!1,!1,!1,!1],N:[!0,!1,!1,!1,!1],G:[!0,!1,!1,!1,!1],O:[!0,!1,!1,!1,!1]},{B:[!0,!0,!0,!0,!0],I:[!1,!1,!1,!1,!0],N:[!1,!1,!1,!1,!0],G:[!1,!1,!1,!1,!0],O:[!1,!1,!1,!1,!0]}],"Crazy T":[{B:[!0,!0,!0,!0,!0],I:[!1,!1,!0,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!0,!1,!1],O:[!1,!1,!0,!1,!1]},{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!1,!0],N:[!0,!0,!0,!0,!0],G:[!1,!1,!1,!1,!0],O:[!1,!1,!1,!1,!0]},{B:[!1,!1,!0,!1,!1],I:[!1,!1,!0,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!0,!1,!1],O:[!0,!0,!0,!0,!0]},{B:[!0,!1,!1,!1,!1],I:[!0,!1,!1,!1,!1],N:[!0,!0,!0,!0,!0],G:[!0,!1,!1,!1,!1],O:[!0,!1,!1,!1,!1]}],"Crazy Arrow":[{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!0,!1],N:[!0,!1,!0,!1,!1],G:[!0,!0,!1,!1,!1],O:[!0,!0,!0,!1,!1]},{B:[!0,!0,!0,!1,!1],I:[!0,!0,!1,!1,!1],N:[!0,!1,!0,!1,!1],G:[!1,!1,!1,!0,!1],O:[!1,!1,!1,!1,!0]},{B:[!1,!1,!0,!0,!0],I:[!1,!1,!1,!0,!0],N:[!1,!1,!0,!1,!0],G:[!1,!0,!1,!1,!1],O:[!0,!1,!1,!1,!1]},{B:[!0,!1,!1,!1,!1],I:[!1,!0,!1,!1,!1],N:[!1,!1,!0,!1,!0],G:[!1,!1,!1,!0,!0],O:[!1,!1,!0,!0,!0]}],"Crazy Kite":[{B:[!1,!1,!1,!0,!0],I:[!1,!1,!1,!0,!0],N:[!1,!1,!0,!1,!1],G:[!1,!0,!1,!1,!1],O:[!0,!1,!1,!1,!1]},{B:[!0,!1,!1,!1,!1],I:[!1,!0,!1,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!1,!0,!0],O:[!1,!1,!1,!0,!0]},{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!0,!1],N:[!1,!1,!0,!1,!1],G:[!0,!0,!1,!1,!1],O:[!0,!0,!1,!1,!1]},{B:[!0,!0,!1,!1,!1],I:[!0,!0,!1,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!1,!0,!1],O:[!1,!1,!1,!1,!0]}],"Crazy Pyramid":[{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!0,!1,!1],G:[!1,!0,!0,!0,!1],O:[!0,!0,!0,!0,!0]},{B:[!0,!1,!1,!1,!1],I:[!0,!0,!1,!1,!1],N:[!0,!0,!0,!1,!1],G:[!0,!0,!1,!1,!1],O:[!0,!1,!1,!1,!1]},{B:[!0,!0,!0,!0,!0],I:[!1,!0,!0,!0,!1],N:[!1,!1,!0,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]},{B:[!1,!1,!1,!1,!0],I:[!1,!1,!1,!0,!0],N:[!1,!1,!0,!0,!0],G:[!1,!1,!1,!0,!0],O:[!1,!1,!1,!1,!0]}],"6 Pack":[{B:[!0,!0,!1,!1,!1],I:[!0,!0,!1,!1,!1],N:[!0,!0,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]}],"8 Pack":[{B:[!1,!1,!1,!0,!0],I:[!1,!1,!1,!0,!0],N:[!1,!1,!1,!0,!0],G:[!1,!1,!1,!0,!0],O:[!1,!1,!1,!1,!1]}],"9 Pack":[{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!0,!0,!0],G:[!1,!1,!0,!0,!0],O:[!1,!1,!0,!0,!0]}],"Small Frame":[{B:[!1,!1,!1,!1,!1],I:[!1,!0,!0,!0,!1],N:[!1,!0,!1,!0,!1],G:[!1,!0,!0,!0,!1],O:[!1,!1,!1,!1,!1]}],"Large Frame":[{B:[!0,!0,!0,!0,!0],I:[!0,!1,!1,!1,!0],N:[!0,!1,!1,!1,!0],G:[!0,!1,!1,!1,!0],O:[!0,!0,!0,!0,!0]}],Custom:[{B:[!1,!1,!1,!1,!1],I:[!1,!1,!1,!1,!1],N:[!1,!1,!1,!1,!1],G:[!1,!1,!1,!1,!1],O:[!1,!1,!1,!1,!1]}]}},l}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state.pattern,a=Object.entries(this.state.presets).reduce((function(e,t){var a=Object(s.a)(t,2),l=a[0];a[1];return e.push({value:l,label:l}),e}),[]);return n.a.createElement("div",{id:"bingopattern",className:""},n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col c20 padding align-left"},n.a.createElement(B,{name:"patternmenu",className:"patternmenu",value:this.state.selected,onChange:this.choosePattern,options:a})),n.a.createElement("div",{className:"col c80 padding align-left"},Object.entries(t).map((function(t){var a=Object(s.a)(t,2),l=a[0],r=a[1];return n.a.createElement("div",{key:l,className:"pattern-col"},n.a.createElement("div",{className:"pattern-letter"},l),r.map((function(t,a){return n.a.createElement("div",{key:l+a,className:t?"selected pattern-slot":"pattern-slot",onClick:function(n){return e.updatePattern(l,a,t)}},"\xa0")})))})))))}}]),a}(n.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=Object.values(this.props.balls).filter((function(e){return e.called})).length,t=Object.values(this.props.balls).filter((function(e){return e.active}))[0];if(t){var a="white";switch(t.letter){case"B":a="indigo";break;case"I":a="ruby";break;case"N":a="kelly";break;case"G":a="alice";break;case"O":a="coral"}return n.a.createElement("div",{id:"ball",className:a+" relative"},n.a.createElement("div",{id:"ballcount"},e),n.a.createElement("div",{className:"content"},n.a.createElement("span",null,t.letter,n.a.createElement("br",null),t.number)))}return n.a.createElement("div",{id:"ball",className:"white relative"},n.a.createElement("div",{id:"ballcount"},e),n.a.createElement("div",{className:"content"},n.a.createElement("span",null)))}}]),a}(n.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(i.a)(this,a),(l=t.call(this,e)).resetGame=function(){var e=Object.entries(l.state.balls).reduce((function(e,t){var a=Object(s.a)(t,2),l=a[0],n=a[1];return e[l]={letter:n.letter,number:n.number,called:!1,active:!1},e}),{});l.setState({balls:e})},l.callNumber=function(){var e=l.state.balls;Object.values(e).filter((function(e){return e.active})).forEach((function(e){e.active=!1}));var t=Object.values(e).filter((function(e){return!e.called}));if(0===t.length)alert("All numbers called!");else{var a=e[t[Math.floor(Math.random()*t.length)].number];a.called=!0,a.active=!0,l.setState({balls:e})}},l.state={balls:{1:{letter:"B",number:1,called:!1,active:!1},2:{letter:"B",number:2,called:!1,active:!1},3:{letter:"B",number:3,called:!1,active:!1},4:{letter:"B",number:4,called:!1,active:!1},5:{letter:"B",number:5,called:!1,active:!1},6:{letter:"B",number:6,called:!1,active:!1},7:{letter:"B",number:7,called:!1,active:!1},8:{letter:"B",number:8,called:!1,active:!1},9:{letter:"B",number:9,called:!1,active:!1},10:{letter:"B",number:10,called:!1,active:!1},11:{letter:"B",number:11,called:!1,active:!1},12:{letter:"B",number:12,called:!1,active:!1},13:{letter:"B",number:13,called:!1,active:!1},14:{letter:"B",number:14,called:!1,active:!1},15:{letter:"B",number:15,called:!1,active:!1},16:{letter:"I",number:16,called:!1,active:!1},17:{letter:"I",number:17,called:!1,active:!1},18:{letter:"I",number:18,called:!1,active:!1},19:{letter:"I",number:19,called:!1,active:!1},20:{letter:"I",number:20,called:!1,active:!1},21:{letter:"I",number:21,called:!1,active:!1},22:{letter:"I",number:22,called:!1,active:!1},23:{letter:"I",number:23,called:!1,active:!1},24:{letter:"I",number:24,called:!1,active:!1},25:{letter:"I",number:25,called:!1,active:!1},26:{letter:"I",number:26,called:!1,active:!1},27:{letter:"I",number:27,called:!1,active:!1},28:{letter:"I",number:28,called:!1,active:!1},29:{letter:"I",number:29,called:!1,active:!1},30:{letter:"I",number:30,called:!1,active:!1},31:{letter:"N",number:31,called:!1,active:!1},32:{letter:"N",number:32,called:!1,active:!1},33:{letter:"N",number:33,called:!1,active:!1},34:{letter:"N",number:34,called:!1,active:!1},35:{letter:"N",number:35,called:!1,active:!1},36:{letter:"N",number:36,called:!1,active:!1},37:{letter:"N",number:37,called:!1,active:!1},38:{letter:"N",number:38,called:!1,active:!1},39:{letter:"N",number:39,called:!1,active:!1},40:{letter:"N",number:40,called:!1,active:!1},41:{letter:"N",number:41,called:!1,active:!1},42:{letter:"N",number:42,called:!1,active:!1},43:{letter:"N",number:43,called:!1,active:!1},44:{letter:"N",number:44,called:!1,active:!1},45:{letter:"N",number:45,called:!1,active:!1},46:{letter:"G",number:46,called:!1,active:!1},47:{letter:"G",number:47,called:!1,active:!1},48:{letter:"G",number:48,called:!1,active:!1},49:{letter:"G",number:49,called:!1,active:!1},50:{letter:"G",number:50,called:!1,active:!1},51:{letter:"G",number:51,called:!1,active:!1},52:{letter:"G",number:52,called:!1,active:!1},53:{letter:"G",number:53,called:!1,active:!1},54:{letter:"G",number:54,called:!1,active:!1},55:{letter:"G",number:55,called:!1,active:!1},56:{letter:"G",number:56,called:!1,active:!1},57:{letter:"G",number:57,called:!1,active:!1},58:{letter:"G",number:58,called:!1,active:!1},59:{letter:"G",number:59,called:!1,active:!1},60:{letter:"G",number:60,called:!1,active:!1},61:{letter:"O",number:61,called:!1,active:!1},62:{letter:"O",number:62,called:!1,active:!1},63:{letter:"O",number:63,called:!1,active:!1},64:{letter:"O",number:64,called:!1,active:!1},65:{letter:"O",number:65,called:!1,active:!1},66:{letter:"O",number:66,called:!1,active:!1},67:{letter:"O",number:67,called:!1,active:!1},68:{letter:"O",number:68,called:!1,active:!1},69:{letter:"O",number:69,called:!1,active:!1},70:{letter:"O",number:70,called:!1,active:!1},71:{letter:"O",number:71,called:!1,active:!1},72:{letter:"O",number:72,called:!1,active:!1},73:{letter:"O",number:73,called:!1,active:!1},74:{letter:"O",number:74,called:!1,active:!1},75:{letter:"O",number:75,called:!1,active:!1}}},l}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,n.a.createElement("div",{className:"row"})),n.a.createElement(d.d,null,n.a.createElement(d.b,null,n.a.createElement(d.a,null,"Cards"),n.a.createElement(d.a,null,"Pattern"),n.a.createElement(d.a,null,"Game")),n.a.createElement(d.c,null,n.a.createElement("section",{className:"padding"},n.a.createElement(G,null))),n.a.createElement(d.c,null,n.a.createElement("section",{className:"padding"},n.a.createElement(I,null))),n.a.createElement(d.c,null,n.a.createElement("section",{id:"board"},n.a.createElement("div",{className:"row flex"},n.a.createElement("div",{className:"col c15 ballcol"},n.a.createElement(g,{balls:this.state.balls})),n.a.createElement("div",{className:"col c85"},n.a.createElement(f,{balls:this.state.balls})))),n.a.createElement("section",{id:"buttons"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col c40"},n.a.createElement("button",{onClick:this.callNumber},"Next")),n.a.createElement("div",{className:"col c60 text-right"},n.a.createElement("button",{onClick:this.resetGame},"Reset")))))))}}]),a}(l.Component);c.a.render(n.a.createElement(E,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c0da0973.chunk.js.map