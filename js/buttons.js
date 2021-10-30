(function(){var t,e,n,a,r,o,i,c,l,s,u,h,d,f,p,b,g,y,m=[].slice,v=function(t,e){function n(){this.constructor=t}for(var a in e)w.call(e,a)&&(t[a]=e[a]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},w={}.hasOwnProperty;y=this,g=y.document,r="https://api.github.com",a="github-button",o="octicon",i=o+"-mark-github",c=g.currentScript?g.currentScript.src.replace(/[^\/]*([?#].*)?$/,""):(/^http:/.test(g.location)?"http":"https")+"://buttons.github.io/",l="faa75404-3b97-5585-b449-4bc51338fbd1",d=function(){function t(){}var e;return t.flatten=function(t){var e,n;return e=function(t,a){var r,o,i,c,l,s;switch(Object.prototype.toString.call(t)){case"[object Object]":for(c in t)s=t[c],e(s,a?a+"."+c:c);break;case"[object Array]":for(r=i=0,l=t.length;l>i;r=++i)o=t[r],e(o,a+"["+r+"]");break;default:n[a]=t}},n={},e(t,""),n},t.expand=function(t){var n,a,r,o,i,c;o=[];for(n in t){for(c=t[n],r=n.match(/((?!\[\d+\])[^.])+|\[\d+\]/g),i=o,a=0;r.length;)null==i[a]&&(i[a]=r[0]===e(r[0])?{}:[]),i=i[a],a=e(r.shift());i[a]=c}return o[0]},e=function(t){var e;return(e=t.match(/^\[(\d+)\]$/))?Number(e[1]):t},t}(),b=function(){function t(){}return t.stringify=function(t){var e,n,a;n=[];for(e in t)a=t[e],n.push(encodeURIComponent(e)+"="+(null!=a?encodeURIComponent(a):""));return n.join("&")},t.parse=function(t){var e,n,a,r,o,i,c,l;for(r={},i=t.split("&"),e=0,a=i.length;a>e;e++)o=i[e],""!==o&&(c=o.split("="),n=c[0],l=2<=c.length?m.call(c,1):[],""!==n&&(r[decodeURIComponent(n)]=decodeURIComponent(l.join("="))));return r},t}(),p=function(){function t(){}return t.encode=function(t){return"#"+b.stringify(d.flatten(t))},t.decode=function(t){return null==t&&(t=g.location.hash),d.expand(b.parse(t.replace(/^#/,"")))||{}},t}(),h=function(){function t(t){this.$=t}var e,n;return t.prototype.on=function(){var t,n,a,r,o,i,c;for(a=2<=arguments.length?m.call(arguments,0,o=arguments.length-1):(o=0,[]),r=arguments[o++],t=function(t){return function(e){return r.call(t,e||y.event)}}(this),i=0,c=a.length;c>i;i++)n=a[i],e(this.$,n,t)},t.prototype.once=function(){var t,a,r,o,i,c,l;for(r=2<=arguments.length?m.call(arguments,0,i=arguments.length-1):(i=0,[]),o=arguments[i++],t=function(e){return function(a){var i,c,l;for(c=0,l=r.length;l>c;c++)i=r[c],n(e.$,i,t);return o.call(e,a||y.event)}}(this),c=0,l=r.length;l>c;c++)a=r[c],e(this.$,a,t)},e=function(t,e,n){t.addEventListener?t.addEventListener(""+e,n):t.attachEvent("on"+e,n)},n=function(t,e,n){t.removeEventListener?t.removeEventListener(""+e,n):t.detachEvent("on"+e,n)},t}(),u=function(t){function e(t,e){this.$=t&&1===t.nodeType?t:g.createElement(t),e&&e.call(this,this.$)}var n,a,r,o;return v(e,t),e.prototype.addClass=function(t){a(this.$,t)||n(this.$,t)},e.prototype.removeClass=function(t){a(this.$,t)&&o(this.$,t)},e.prototype.hasClass=function(t){return a(this.$,t)},n=function(t,e){t.className+=" "+e},o=function(t,e){t.className=(" "+t.className+" ").replace(r," ").replace(" "+e+" ","").replace(/^ | $/,"")},a=function(t,e){return(" "+t.className+" ").replace(r," ").indexOf(" "+e+" ")>=0},r=/[ \t\n\f\r]+/g,e}(h),f=function(t){function e(t){e.__super__.constructor.call(this,"iframe",function(e){var n,a,r;a={allowtransparency:!0,scrolling:"no",frameBorder:0};for(n in a)r=a[n],e.setAttribute(n,r);e.style.cssText="width: 1px; height: 0; border: none",e.src="javascript:0",t&&t.call(this,e)})}var n,a;return v(e,t),e.prototype.html=function(t){var e;try{e=this.$.contentWindow.document,e.open().write(t),e.close()}catch(n){}},e.prototype.load=function(t){this.$.src=t},e.prototype.size=function(){var t,e,n,r,o,i;try{return n=this.$.contentWindow.document,o=n.documentElement,t=n.body,i=o.scrollWidth,r=o.scrollHeight,t.getBoundingClientRect&&(t.style.display="inline-block",e=t.getBoundingClientRect(),i=Math.max(i,a(e.width||e.right-e.left)),r=Math.max(r,a(e.height||e.bottom-e.top)),t.style.display=""),{width:i+"px",height:r+"px"}}catch(c){}},e.prototype.resize=function(t){var e,n,a;n=null!=t?t:this.size()||{},a=n.width,e=n.height,a&&(this.$.style.width=a),e&&(this.$.style.height=e)},n=y.devicePixelRatio||1,a=function(t){return n>1?Math.ceil(Math.round(t*n)/n*2)/2||0:Math.ceil(t)||0},e}(u),t=function(){function t(){}return t.parse=function(t){return{href:t.href,text:t.getAttribute("data-text")||t.textContent||t.innerText||"",data:{count:{api:t.getAttribute("data-count-api")||"",href:t.getAttribute("data-count-href")||t.href,aria:{label:t.getAttribute("data-count-aria-label")||""}},style:t.getAttribute("data-style")||"",icon:t.getAttribute("data-icon")||""},aria:{label:t.getAttribute("aria-label")||""}}},t}(),e=function(t){function e(t,n,a){var r;e.__super__.constructor.call(this,n),r=function(e){return function(){var n;r=null,n=e.size(),e.$.parentNode.removeChild(e.$),e.once("load",function(){this.resize(n)}),e.load(c+"buttons.html"+t),a&&a.call(e,e.$)}}(this),this.once("load",function(){var t;(t=this.$.contentWindow.callback)?new u(t.script,function(t){this.on("load","error",function(){r&&r()}),t.readyState&&this.on("readystatechange",function(){!/i/.test(t.readyState)&&r&&r()})}):r()}),this.html('
  <!DOCTYPE html>
  <!----

  ██     ██ ███████ ██████  ████████ ██   ██ ███████ ███    ███ ███████    ████████  ██████  ██████  
  ██     ██ ██      ██   ██    ██    ██   ██ ██      ████  ████ ██            ██    ██    ██ ██   ██ 
  ██  █  ██ █████   ██████     ██    ███████ █████   ██ ████ ██ █████         ██    ██    ██ ██████  
  ██ ███ ██ ██      ██   ██    ██    ██   ██ ██      ██  ██  ██ ██            ██    ██    ██ ██      
   ███ ███  ███████ ██████     ██    ██   ██ ███████ ██      ██ ███████ ██    ██     ██████  ██      
     
              __Collect and Distribute__
                https://www.webtheme.top
  ---->
  
  <!DOCTYPE html>
  <!----

  ██     ██ ███████ ██████  ████████ ██   ██ ███████ ███    ███ ███████    ████████  ██████  ██████  
  ██     ██ ██      ██   ██    ██    ██   ██ ██      ████  ████ ██            ██    ██    ██ ██   ██ 
  ██  █  ██ █████   ██████     ██    ███████ █████   ██ ████ ██ █████         ██    ██    ██ ██████  
  ██ ███ ██ ██      ██   ██    ██    ██   ██ ██      ██  ██  ██ ██            ██    ██    ██ ██      
   ███ ███  ███████ ██████     ██    ██   ██ ███████ ██      ██ ███████ ██    ██     ██████  ██      
     
              __Collect and Distribute__
                https://www.webtheme.top
  ---->
  <head><meta charset="utf-8"><title>'+l+'</title><link rel="stylesheet" href="'+c+'assets/css/buttons.css"><script>document.location.hash = "'+t+'";</script></head><body><script src="'+c+'buttons.js"></script></body></html>')}return v(e,t),e}(f),n=function(){function t(t){t&&t.data&&(g.body.className=t.data.style||"",new e(t.href,null,function(e){e.className="button",t.aria.label&&e.setAttribute("aria-label",t.aria.label),new u("i",function(n){n.className=t.data.icon||i,o&&this.addClass(o),n.setAttribute("aria-hidden","true"),e.appendChild(n)}),e.appendChild(g.createTextNode(" ")),new u("span",function(n){t.text&&n.appendChild(g.createTextNode(t.text)),e.appendChild(n)}),g.body.appendChild(e)}),function(t,n){t&&t.api&&new e(t.href,n,function(e){e.className="count",new u("b",function(t){e.appendChild(t)}),new u("i",function(t){e.appendChild(t)}),new u("span",function(n){var a;e.appendChild(n),a=function(){var e,n;return n=t.api.replace(/^(?!\/)/,"/").split("#")[0],e=b.parse(n.split("?").slice(1).join("?")),e.callback="callback",n.split("?")[0]+"?"+b.stringify(e)}(),new u("script",function(o){var i;o.async=!0,o.src=""+r+a,y.callback=function(a){var r;y.callback=null,200===a.meta.status&&(r=d.flatten(a.data)[t.api.split("#").slice(1).join("#")],"[object Number]"===Object.prototype.toString.call(r)&&(r=(""+r).replace(/\B(?=(\d{3})+(?!\d))/g,",")),n.appendChild(g.createTextNode(r)),t.aria.label&&e.setAttribute("aria-label",t.aria.label.replace("#",r)),g.body.appendChild(e))},y.callback.script=o,this.on("error",function(){y.callback=null}),o.readyState&&this.on("readystatechange",function(){"loaded"===o.readyState&&o.children&&"loading"===o.readyState&&(y.callback=null)}),i=g.getElementsByTagName("head")[0],"[object Opera]"===Object.prototype.toString.call(y.opera)?new h(g).on("DOMContentLoaded",function(){i.appendChild(o)}):i.appendChild(o)})})})}(t.data.count,t.href))}var e;return e=function(t){function e(t,i,c){e.__super__.constructor.call(this,"a",function(e){if(n){if((e.href=i)&&e.protocol!==a)try{e.href=new URL(t,i).href}catch(l){n.href=i,e.href=t,new u("div",function(t){t.innerHTML=e.outerHTML,e.href=t.lastChild.href,t=null}),n.href=g.location.href,n.removeAttribute("href")}else e.href=t;r.test(e.href)&&(e.target="_top"),e.protocol!==a&&o.test("."+e.hostname)||(e.href="#",e.target="_self")}c(e)})}var n,a,r,o;return v(e,t),n=g.getElementsByTagName("base")[0],a="javascript:",o=/\.github\.com$/,r=/^https?:\/\/((gist\.)?github\.com\/[^\/]+\/[^\/]+\/archive\/|github\.com\/[^\/]+\/[^\/]+\/releases\/download\/|codeload\.github\.com\/)/,e}(u),t}(),s=function(){function t(t){var e;/m/.test(g.readyState)||!/g/.test(g.readyState)&&!g.documentElement.doScroll?y.setTimeout(t):g.addEventListener?new h(g).once("DOMContentLoaded",t):(e=function(){/m/.test(g.readyState)&&(g.detachEvent("onreadystatechange",e),t&&t())},g.attachEvent("onreadystatechange",e))}return t}(),g.title===l?new n(p.decode()):new s(function(){var n,r,o,i,c;for(r=g.querySelectorAll?g.querySelectorAll("a."+a):function(){var t,e,r,o;for(r=g.getElementsByTagName("a"),o=[],t=0,e=r.length;e>t;t++)n=r[t],new u(n).hasClass(a)&&o.push(n);return o}(),o=function(n){new e(p.encode(t.parse(n)),function(t){g.body.appendChild(t)},function(t){n.parentNode.replaceChild(t,n)})},i=0,c=r.length;c>i;i++)n=r[i],o(n)})}).call(this);
//# sourceMappingURL=buttons.js.map