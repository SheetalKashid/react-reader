(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){"use strict";var o=n(58),r=(n(35),n(16)),i=n(17),a=n(19),c=n(18),l=n(20),s=n(0),u=n.n(s),d=n(97),f=n.n(d),p={container:{overflow:"hidden",height:"100%"},readerArea:{position:"relative",zIndex:1,height:"100%",width:"100%",backgroundColor:"#fff",transition:"all .3s ease"},containerExpaned:{transform:"translateX(256px)"},titleArea:{position:"absolute",top:20,left:50,right:50,textAlign:"center",color:"#999"},reader:{position:"absolute",top:50,left:50,bottom:20,right:50},swipeWrapper:{position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:200},prev:{left:1},next:{right:1},arrow:{outline:"none",border:"none",background:"none",position:"absolute",top:"50%",marginTop:-32,fontSize:64,padding:"0 10px",color:"#E2E2E2",fontFamily:"arial, sans-serif",cursor:"pointer",userSelect:"none",appearance:"none",fontWeight:"normal"},arrowHover:{color:"#777"},tocBackground:{position:"absolute",left:256,top:0,bottom:0,right:0,zIndex:1},tocArea:{position:"absolute",left:0,top:0,bottom:0,zIndex:0,width:256,overflowY:"auto",WebkitOverflowScrolling:"touch",background:"#f2f2f2",padding:"10px 0"},tocAreaButton:{userSelect:"none",appearance:"none",background:"none",border:"none",display:"block",fontFamily:"sans-serif",width:"100%",fontSize:".9em",textAlign:"left",padding:".9em 1em",borderBottom:"1px solid #ddd",color:"#aaa",boxSizing:"border-box",outline:"none",cursor:"pointer"},tocButton:{background:"none",border:"none",width:32,height:32,position:"absolute",top:10,left:10,borderRadius:2,outline:"none"},tocButtonExpaned:{background:"#f2f2f2"},tocButtonBar:{position:"absolute",width:"60%",background:"#ccc",height:2,left:"50%",margin:"-1px -30%",top:"50%",transition:"all .5s ease"},tocButtonBarTop:{top:"35%"},tocButtonBottom:{top:"66%"},loadingView:{position:"absolute",top:"50%",left:"10%",right:"10%",color:"#ccc",textAlign:"center",margintop:"-.5em"}},h=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(n=Object(a.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).setLocation=function(){n.props.setLocation(n.props.href)},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.styles;return u.a.createElement("button",{onClick:this.setLocation,style:n},t)}}]),t}(s.PureComponent),g=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(a.a)(this,Object(c.a)(t).call(this,e))).toggleToc=function(){n.setState({expanedToc:!n.state.expanedToc})},n.next=function(){n.readerRef.current.nextPage()},n.prev=function(){n.readerRef.current.prevPage()},n.onTocChange=function(e){var t=n.props.tocChanged;n.setState({toc:e},function(){return t&&t(e)})},n.setLocation=function(e){var t=n.props.locationChanged;n.setState({expanedToc:!1},function(){return t&&t(e)})},n.readerRef=u.a.createRef(),n.state={expanedToc:!1,toc:!1},n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"renderToc",value:function(){var e=this,t=this.state,n=t.toc,o=t.expanedToc,r=this.props.styles;return u.a.createElement("div",null,u.a.createElement("div",{style:r.tocArea},u.a.createElement("div",{style:r.toc},n.map(function(t){return u.a.createElement(h,Object.assign({key:t.href},t,{setLocation:e.setLocation,styles:r.tocAreaButton}))}))),o&&u.a.createElement("div",{style:r.tocBackground,onClick:this.toggleToc}))}},{key:"renderTocToggle",value:function(){var e=this.state.expanedToc,t=this.props.styles;return u.a.createElement("button",{style:Object.assign({},t.tocButton,e?t.tocButtonExpaned:{}),onClick:this.toggleToc},u.a.createElement("span",{style:Object.assign({},t.tocButtonBar,t.tocButtonBarTop)}),u.a.createElement("span",{style:Object.assign({},t.tocButtonBar,t.tocButtonBottom)}))}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.title,r=e.showToc,i=e.loadingView,a=e.epubOptions,c=e.styles,l=e.getRendition,s=e.locationChanged,d=e.location,p=e.swipeable,h=this.state,g=h.toc,b=h.expanedToc;return u.a.createElement("div",{style:c.container},u.a.createElement("div",{style:Object.assign({},c.readerArea,b?c.containerExpaned:{})},r&&this.renderTocToggle(),u.a.createElement("div",{style:c.titleArea},n),u.a.createElement(f.a,{onSwipedRight:this.prev,onSwipedLeft:this.next,trackMouse:!0},u.a.createElement("div",{style:c.reader},u.a.createElement(o.a,{ref:this.readerRef,url:t,location:d,loadingView:i,tocChanged:this.onTocChange,locationChanged:s,epubOptions:a,getRendition:l}),p&&u.a.createElement("div",{style:c.swipeWrapper}))),u.a.createElement("button",{style:Object.assign({},c.arrow,c.prev),onClick:this.prev},"\u2039"),u.a.createElement("button",{style:Object.assign({},c.arrow,c.next),onClick:this.next},"\u203a")),r&&g&&this.renderToc())}}]),t}(s.PureComponent);g.defaultProps={loadingView:u.a.createElement("div",{style:p.loadingView},"Loading\u2026"),locationChanged:null,tocChanged:null,showToc:!0,styles:p};var b=g;n.d(t,"a",function(){return o.a}),n.d(t,"b",function(){return b})},103:function(e,t,n){e.exports=n(104)},104:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(36),a=n(96);Object(i.render)(r.a.createElement(a.a,null),document.getElementById("root"))},13:function(e,t,n){"use strict";n.d(t,"d",function(){return b}),n.d(t,"g",function(){return v}),n.d(t,"a",function(){return m}),n.d(t,"f",function(){return x}),n.d(t,"b",function(){return w}),n.d(t,"c",function(){return k}),n.d(t,"e",function(){return O});var o=n(4),r=n(3),i=n(56);function a(){var e=Object(o.a)(["\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 10;\n  background: #eee;\n  border-radius: 2px;\n  padding: 0.5rem;\n"]);return a=function(){return e},e}function c(){var e=Object(o.a)(['\n  vertical-align: middle;\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  background: #666;\n  margin-left: 5px;\n  border-radius: 50%;\n  position: relative;\n  transform: rotate(45deg);\n  &:before,\n  &:after {\n    content: "";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 60%;\n    height: 2px;\n    background: #fff;\n    margin-left: -30%;\n    margin-top: -1px;\n    border-radius: 1px;\n  }\n  &:after {\n    transform: rotate(-90deg);\n  }\n']);return c=function(){return e},e}function l(){var e=Object(o.a)(["\n    margin-top: 75px;\n    font-size: 16px;\n  "]);return l=function(){return e},e}function s(){var e=Object(o.a)(["\n  color: #808080;\n  float: right;\n  margin: 0;\n  font-size: 12px;\n  ",";\n"]);return s=function(){return e},e}function u(){var e=Object(o.a)(["\n  font-family: inherit;\n  font-size: inherit;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  appearance: none;\n  background: none;\n"]);return u=function(){return e},e}function d(){var e=Object(o.a)(["\n    width: 330px;\n    height: 104px;\n    display: inline-block;\n    margin-left: 2px;\n  "]);return d=function(){return e},e}function f(){var e=Object(o.a)(["\n  width: 250px;\n  height: auto;\n  display: block;\n  margin: 0 auto 0px;\n  ",";\n"]);return f=function(){return e},e}function p(){var e=Object(o.a)(["\n  position: absolute;\n  top: 10px;\n  left: 20px;\n  right: 20px;\n"]);return p=function(){return e},e}function h(){var e=Object(o.a)(["\n  font-size: 16px;\n  position: absolute;\n  top: ","px;\n  left: ","rem;\n  right: ","rem;\n  bottom: ","rem;\n  transition: all 0.6s ease;\n  ",";\n"]);return h=function(){return e},e}function g(){var e=Object(o.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  background: linear-gradient(to bottom, #f2f2f2 0%, #333 100%);\n"]);return g=function(){return e},e}var b=r.c.div(g()),v=r.c.div(h(),function(e){return e.fullscreen?0:135},function(e){return e.fullscreen?0:1},function(e){return e.fullscreen?0:1},function(e){return e.fullscreen?0:1},function(e){return!e.fullscreen&&"0 0 5px rgba(0,0,0,.3);"}),m=r.c.header(p()),x=r.c.img(f(),Object(i.a)("tablet")(d())),y=r.c.button(u()),w=Object(r.c)(y)(s(),Object(i.a)("tablet")(l())),k=r.c.i(c()),O=Object(r.c)(y)(a())},156:function(e,t){},35:function(e,t,n){"use strict";t.a={viewHolder:{position:"relative",height:"100%",width:"100%"},view:{height:"100%"}}},58:function(e,t,n){"use strict";(function(e){var o=n(102),r=n(16),i=n(17),a=n(19),c=n(18),l=n(20),s=n(0),u=n.n(s),d=n(53),f=n.n(d),p=n(35);e.ePub=f.a;var h=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(a.a)(this,Object(c.a)(t).call(this,e))).onLocationChange=function(e){var t=n.props,o=t.location,r=t.locationChanged,i=e&&e.start;o!==i&&(n.location=i,r&&r(i))},n.handleKeyPress=function(e){var t=e.key;t&&"ArrowRight"===t&&n.nextPage(),t&&"ArrowLeft"===t&&n.prevPage()},n.state={isLoaded:!1,toc:[]},n.viewerRef=u.a.createRef(),n.location=e.location,n.book=n.rendition=n.prevPage=n.nextPage=null,n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.url,o=t.tocChanged;this.book=new f.a(n,{}),this.book.loaded.navigation.then(function(t){var n=t.toc;e.setState({isLoaded:!0,toc:n},function(){o&&o(n),e.initReader()})}),document.addEventListener("keydown",this.handleKeyPress,!1)}},{key:"componentWillUnmount",value:function(){this.book=this.rendition=this.prevPage=this.nextPage=null,document.removeEventListener("keydown",this.handleKeyPress,!1)}},{key:"shouldComponentUpdate",value:function(e){return!this.state.isLoaded||e.location!==this.props.location}},{key:"componentDidUpdate",value:function(e){e.location!==this.props.location&&this.location!==this.props.location&&this.rendition.display(this.props.location)}},{key:"initReader",value:function(){var e=this,t=this.state.toc,n=this.props,r=n.location,i=n.epubOptions,a=n.getRendition,c=this.viewerRef.current;this.rendition=this.book.renderTo(c,Object(o.a)({contained:!0,width:"100%",height:"100%"},i)),this.rendition.display("string"===typeof r||"number"===typeof r?r:t[0].href),this.prevPage=function(){e.rendition.prev()},this.nextPage=function(){e.rendition.next()},this.rendition.on("locationChanged",this.onLocationChange),a&&a(this.rendition)}},{key:"renderBook",value:function(){var e=this.props.styles;return u.a.createElement("div",{ref:this.viewerRef,style:e.view})}},{key:"render",value:function(){var e=this.state.isLoaded,t=this.props,n=t.loadingView,o=t.styles;return u.a.createElement("div",{style:o.viewHolder},e&&this.renderBook()||n)}}]),t}(s.Component);h.defaultProps={loadingView:null,locationChanged:null,tocChanged:null,styles:p.a,epubOptions:{}},t.a=h}).call(this,n(7))},96:function(e,t,n){"use strict";(function(e){var o=n(16),r=n(17),i=n(19),a=n(18),c=n(20),l=n(4),s=n(0),u=n.n(s),d=n(3),f=n(100),p=n(13);function h(){var e=Object(l.a)(['\n  * {\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n    margin: 0;\n    padding: 0;\n    color: inherit;\n    font-size: inherit;\n    font-weight: 300;\n    line-height: 1.4;\n    word-break: break-word;\n  }\n  html {\n    font-size: 62.5%;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-size: 1.8rem;\n    background: #333;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    color: #fff;\n  }\n']);return h=function(){return e},e}var g=e.localStorage||null,b=Object(d.a)(h()),v=function(t){function n(t){var r;return Object(o.a)(this,n),(r=Object(i.a)(this,Object(a.a)(n).call(this,t))).toggleFullscreen=function(){r.setState({fullscreen:!r.state.fullscreen},function(){setTimeout(function(){document.createEvent("UIEvents").initUIEvent("resize",!0,!1,e,0)},1e3)})},r.onLocationChanged=function(e){r.setState({location:e},function(){g&&g.setItem("epub-location",e)})},r.onToggleFontSize=function(){var e=!r.state.largeText;r.setState({largeText:e},function(){r.rendition.themes.fontSize(e?"140%":"100%")})},r.getRendition=function(e){var t=r.state.largeText;r.rendition=e,e.themes.fontSize(t?"140%":"100%")},r.state={fullscreen:!1,location:g&&g.getItem("epub-location")?g.getItem("epub-location"):2,largeText:!1},r.rendition=null,r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){var e=this.state,t=e.fullscreen,n=e.location;return u.a.createElement(p.d,null,u.a.createElement(b,null),u.a.createElement(p.a,null,u.a.createElement("a",{href:"https://github.com/gerhardsletten/react-reader"},u.a.createElement(p.f,{src:"https://gerhardsletten.github.io/react-reader/files/react-reader.svg",alt:"React-reader - powered by epubjs"})),u.a.createElement(p.b,{onClick:this.toggleFullscreen},"Use full browser window",u.a.createElement(p.c,null))),u.a.createElement(p.g,{fullscreen:t},u.a.createElement(f.b,{url:"https://gerhardsletten.github.io/react-reader/files/alice.epub",locationChanged:this.onLocationChanged,title:"Alice in wonderland",location:n,getRendition:this.getRendition}),u.a.createElement(p.e,{onClick:this.onToggleFontSize},"Toggle font-size")))}}]),n}(s.Component);t.a=v}).call(this,n(7))}},[[103,2,1]]]);
//# sourceMappingURL=main.ae864cae.chunk.js.map