(function(){var d=Object.prototype.hasOwnProperty;if(!Array.isArray)Array.isArray=function(c){return Object.prototype.toString.call(c)=="[object Array]"};if(!Array.prototype.forEach)Array.prototype.forEach=function(c,a){for(var b=this.length>>>0,e=0;e<b;e++)e in this&&c.call(a,this[e],e,this)};if(!Array.prototype.map)Array.prototype.map=function(c,a){var b=this.length>>>0;if(typeof c!="function")throw new TypeError;for(var e=Array(b),f=0;f<b;f++)if(f in this)e[f]=c.call(a,this[f],f,this);return e};
if(!Array.prototype.filter)Array.prototype.filter=function(c,a){for(var b=[],e=0;e<this.length;e++)c.call(a,this[e])&&b.push(this[e]);return b};if(!Array.prototype.every)Array.prototype.every=function(c,a){for(var b=0;b<this.length;b++)if(!c.call(a,this[b]))return false;return true};if(!Array.prototype.some)Array.prototype.some=function(c,a){for(var b=0;b<this.length;b++)if(c.call(a,this[b]))return true;return false};if(!Array.prototype.reduce)Array.prototype.reduce=function(c){var a=this.length>>>
0;if(typeof c!="function")throw new TypeError;if(a==0&&arguments.length==1)throw new TypeError;var b=0;if(arguments.length>=2)var e=arguments[1];else{do{if(b in this){e=this[b++];break}if(++b>=a)throw new TypeError;}while(1)}for(;b<a;b++)if(b in this)e=c.call(null,e,this[b],b,this);return e};if(!Array.prototype.reduceRight)Array.prototype.reduceRight=function(c){var a=this.length>>>0;if(typeof c!="function")throw new TypeError;if(a==0&&arguments.length==1)throw new TypeError;a=a-1;if(arguments.length>=
2)var b=arguments[1];else{do{if(a in this){b=this[a--];break}if(--a<0)throw new TypeError;}while(1)}for(;a>=0;a--)if(a in this)b=c.call(null,b,this[a],a,this);return b};if(!Array.prototype.indexOf)Array.prototype.indexOf=function(c,a){var b=this.length;if(!b)return-1;var e=a||0;if(e>=b)return-1;if(e<0)e+=b;for(;e<b;e++)if(d.call(this,e))if(c===this[e])return e;return-1};if(!Array.prototype.lastIndexOf)Array.prototype.lastIndexOf=function(c,a){var b=this.length;if(!b)return-1;var e=a||b;if(e<0)e+=
b;for(e=Math.min(e,b-1);e>=0;e--)if(d.call(this,e))if(c===this[e])return e;return-1};if((!Object.create||!Object.defineProperties)&&window.jQuery&&jQuery.webshims){var i=jQuery.webshims;i.objectCreate=function(c,a){var b=function(){};b.prototype=c;b=new b;a&&i.defineProperties(b,a);return b};i.defineProperties=function(c,a){for(var b in a)d.call(a,b)&&i.defineProperty(c,b,a[b]);return c};i.defineProperty=function(c,a,b){if(typeof b!="object")return c;if(d.call(b,"value")){c[a]=b.value;return c}if(Object.defineProperty)try{Object.defineProperty(c,
a,b)}catch(e){}if(c.__defineGetter__){typeof b.get=="function"&&c.__defineGetter__(a,b.get);typeof b.set=="function"&&c.__defineSetter__(a,b.set)}return c}}if(!Object.keys){var t=true,q=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];for(var m in{toString:null})t=false;Object.keys=function(c){if(typeof c!=="object"&&typeof c!=="function"||c===null)throw new TypeError("Object.keys called on a non-object");var a=[];for(var b in c)d.call(c,
b)&&a.push(b);if(t){c=0;for(b=dontEnumLength;c<b;c++){var e=q[c];d.call(o,e)&&a.push(e)}}return a}}if(!Date.prototype.toISOString)Date.prototype.toISOString=function(){return this.getFullYear()+"-"+(this.getMonth()+1)+"-"+this.getDate()+"T"+this.getHours()+":"+this.getMinutes()+":"+this.getSeconds()+"Z"};if(!Date.now)Date.now=function(){return(new Date).getTime()};if(!Date.prototype.toJSON)Date.prototype.toJSON=function(){if(typeof this.toISOString!="function")throw new TypeError;return this.toISOString()};
if(isNaN(Date.parse("T00:00")))Date=function(c){var a=function(f,h,n,j,r,v,w){var g=arguments.length;if(this instanceof c){g=g===1&&String(f)===f?new c(a.parse(f)):g>=7?new c(f,h,n,j,r,v,w):g>=6?new c(f,h,n,j,r,v):g>=5?new c(f,h,n,j,r):g>=4?new c(f,h,n,j):g>=3?new c(f,h,n):g>=2?new c(f,h):g>=1?new c(f):new c;g.constructor=a;return g}return c.apply(this,arguments)},b=RegExp("^(?:((?:[+-]\\d\\d)?\\d\\d\\d\\d)(?:-(\\d\\d)(?:-(\\d\\d))?)?)?(?:T(\\d\\d):(\\d\\d)(?::(\\d\\d)(?:\\.(\\d\\d\\d))?)?)?(?:Z|([+-])(\\d\\d):(\\d\\d))?$");
for(var e in c)a[e]=c[e];a.now=c.now;a.UTC=c.UTC;a.prototype=c.prototype;a.prototype.constructor=a;a.parse=function(f){var h=b.exec(f);if(h){h.shift();for(var n=h[0]===undefined,j=0;j<10;j++)if(j!==7){h[j]=+(h[j]||(j<3?1:0));j===1&&h[j]--}if(n)return((h[3]*60+h[4])*60+h[5])*1E3+h[6];n=(h[8]*60+h[9])*60*1E3;if(h[6]==="-")n=-n;return c.UTC.apply(this,h.slice(0,7))+n}return c.parse.apply(this,arguments)};return a}(Date);var s=Array.prototype.slice;if(!Function.prototype.bind)Function.prototype.bind=
function(c){var a=this;if(typeof a.apply!="function"||typeof a.call!="function")return new TypeError;var b=s.call(arguments),e=function(){if(this instanceof e){var f=Object.create(a.prototype);a.apply(f,b.concat(s.call(arguments)));return f}else return a.call.apply(a,b.concat(s.call(arguments)))};e.bound=a;e.boundTo=c;e.boundArgs=b;e.length=typeof a=="function"?Math.max(a.length-b.length,0):0;return e};if(!String.prototype.trim){var k=/^\s\s*/,l=/\s\s*$/;String.prototype.trim=function(){return String(this).replace(k,
"").replace(l,"")}}})();
jQuery.webshims.ready("es5",function(d,i,t){var q=i.validityMessages,m=d.support,s=false,k=document;if(m.validity)s=!t.noHTMLExtFixes;d.extend(d.expr.filters,{valid:function(c){return(d.attr(c,"validity")||{valid:true}).valid},invalid:function(c){return!d.expr.filters.valid(c)},willValidate:function(c){return d.attr(c,"willValidate")}});i.triggerInlineForm=function(){var c=function(a){if(typeof a!="string"||a.indexOf("-")!==-1||a.indexOf(".")!==-1||a.indexOf('"')!==-1)return"";return"var "+a+' = this.form["'+
a+'"];'};return function(a,b){var e=a["on"+b]||a.getAttribute("on"+b)||"",f;b=d.Event({type:b,target:a[0],currentTarget:a[0]});if(e&&typeof e=="string"&&a.form&&a.form.elements){var h="";f=0;for(var n=a.form.elements,j=n.length;f<j;f++){var r=n[f].name,v=n[f].id;if(r)h+=c(r);if(v&&v!==r)h+=c(v)}f=function(){eval(h+e)}.call(a,b)}d(a).trigger(b);return f}}();i.validityAlert=function(){var c=!d.browser.msie||parseInt(d.browser.version,10)>7?"span":"label",a={hideDelay:5E3,showFor:function(j,r,v){j=d(j);
var w=(j.data("inputUIReplace")||{visual:j}).visual;n();a.clear();this.getMessage(j,r);this.position(w);this.show();if(this.hideDelay)e=setTimeout(f,this.hideDelay);if(!v){j=d("input, select, textarea, .ui-slider-handle",w).filter(":visible:first");j[0]||(j=w);b.attr("for",i.getID(j));j.focus();d(k).bind("focusout.validityalert",f)}},getMessage:function(j,r){d("> span",b).text(r||j.attr("validationMessage"))},position:function(j){var r=j.offset();r.top+=j.outerHeight();b.css(r)},show:function(){b.css("display")===
"none"?b.fadeIn():b.fadeTo(400,1)},hide:function(){a.clear();b.fadeOut()},clear:function(){clearTimeout(e);d(k).unbind("focusout.validityalert");b.stop().removeAttr("for")},alert:d("<"+c+' class="validity-alert" role="alert"><span class="va-box" /></'+c+">").css({position:"absolute",display:"none"})},b=a.alert,e=false,f=d.proxy(a,"hide"),h=false,n=function(){if(!h){h=true;d(function(){b.appendTo("body")})}};return a}();q.en=q.en||q["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",
url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",
patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};q["en-US"]=q["en-US"]||q.en;q[""]=q[""]||q["en-US"];q.de=q.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},
rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",
valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var l=q[""];d(k).bind("htmlExtLangChange",function(){i.activeLang(q,"validation-base",function(c){l=c})});i.createValidationMessage=function(c,a){var b=l[a];if(b&&typeof b!=="string")b=b[(c.getAttribute("type")||"").toLowerCase()]||b.defaultMessage;b&&["value","min","max","title","maxlength","label"].forEach(function(e){if(b.indexOf("{%"+e)!==-1){var f=(e=="label"?d.trim(d("label[for="+c.id+"]",c.form).text()).replace(/\*$|:$/,""):d.attr(c,e))||
"";b=b.replace("{%"+e+"}",f);if("value"==e)b=b.replace("{%valueLen}",f.length)}});return b||""};d.each(m.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(c,a){i.attr(a,{elementNames:["input","select","textarea"],getter:function(b){var e="";if(!d.attr(b,"willValidate"))return e;var f=d.attr(b,"validity")||{valid:1};if(f.valid)return e;if(f.customError||a==="validationMessage")if(e="validationMessage"in b?b.validationMessage:d.data(b,"customvalidationMessage"))return e;
d.each(f,function(h,n){if(!(h=="valid"||!n))if(e=i.createValidationMessage(b,h))return false});return e||""}})});(function(){var c,a=[],b="value"in k.createElement("output")&&"list"in k.createElement("input"),e,f;if(s&&t.addEventListener){var h={timer:void 0,prevented:false};t.addEventListener("submit",function(j){!h.prevented&&j.target.checkValidity&&d.attr(j.target,"novalidate")==null&&d(j.target).checkValidity()},true);var n=function(j){if(d.attr(j.target,"formnovalidate")!=null){h.timer&&clearTimeout(h.timer);
h.prevented=true;h.timer=setTimeout(function(){h.prevented=false},20)}};t.addEventListener("click",n,true);t.addEventListener("touchstart",n,true);t.addEventListener("touchend",n,true)}d(k).bind("invalid",function(j){if(s&&d.attr(j.target,"validity").valid){j.stopImmediatePropagation();return false}if(!c){if((f=j.target.form)&&s){var r=d(f).bind("submit.preventInvalidSubmit",function(v){if(d.attr(f,"novalidate")==null){v.stopImmediatePropagation();return false}}).data("events").submit;r&&r.length>
1&&r.unshift(r.pop())}c=d.Event("firstinvalid");d(j.target).trigger(c)}c&&c.isDefaultPrevented()&&j.preventDefault();if(!m.validity||a.indexOf(j.target)==-1)a.push(j.target);else s&&j.stopImmediatePropagation();j.extraData="fix";clearTimeout(e);e=setTimeout(function(){var v={type:"lastinvalid",cancelable:false,invalidlist:d(a)};s&&!b&&k.activeElement&&c&&c.target!==k.activeElement&&!d.data(c.target,"maybePreventedinvalid")&&i.validityAlert.showFor(c.target);c=false;a=[];d(f).unbind("submit.preventInvalidSubmit");
d(j.target).trigger(v,v)},9)})})();(function(){if(!(!s||m.fieldsetValidation)){var c=function(a){var b=(d.attr(a,"validity")||{valid:true}).valid;!b&&a.checkValidity()&&d(a).trigger("invalid");return b};i.addMethod("checkValidity",function(){if(this.elements||d.nodeName(this,"fieldset")){var a=true;d(this.elements||"input, textarea, select",this).each(function(){c(this)||(a=false)});return a}else if(this.checkValidity)return c(this)})}})();(function(){if(m.validity){var c=i.inputTypes,a={};i.addInputType=
function(g,u){c[g]=u};i.addValidityRule=function(g,u){a[g]=u};i.addValidityRule("typeMismatch",function(g,u,p,x){if(u==="")return false;x=x.typeMismatch;if(!("type"in p))p.type=(g[0].getAttribute("type")||"").toLowerCase();if(c[p.type]&&c[p.type].mismatch)x=c[p.type].mismatch(u,g);return x});var b=i.overrideValidationMessages,e=!m.requiredSelect||!m.inputUI||b,f=["customError","typeMismatch","rangeUnderflow","rangeOverflow","stepMismatch","tooLong","patternMismatch","valueMissing","valid"],h=d.attr,
n=d.fn.val,j=b?{value:1,checked:1}:{value:1},r=b?["textarea"]:[],v={radio:1,checkbox:1},w=function(g,u){if(g.form){var p=(g.getAttribute&&g.getAttribute("type")||g.type||"").toLowerCase();if(!b)if(!(!m.requiredSelect&&p=="select-one")&&!c[p])return;b&&!u&&v[p]&&g.name?d(k.getElementsByName(g.name)).each(function(){d.attr(this,"validity")}):d.attr(g,"validity")}};i.addMethod("setCustomValidity",function(g){g+="";if(this.setCustomValidity){this.setCustomValidity(g);if(e){d.data(this,"hasCustomError",
!!g);w(this)}}else d.data(this,"customvalidationMessage",g)});if(!m.requiredSelect||b){d.extend(j,{required:1,size:1,multiple:1,selectedIndex:1});r.push("select")}if(!m.inputUI||b){d.extend(j,{min:1,max:1,step:1});r.push("input")}if(!m.requiredSelect){i.createBooleanAttrs("required",["select"]);i.addValidityRule("valueMissing",function(g,u,p,x){if(p.nodeName=="select"&&!u&&g.attr("required")&&g[0].size<2){if(!p.type)p.type=g[0].type;if(p.type=="select-one"&&d("> option:first-child:not(:disabled)",
g).attr("selected"))return true}return x.valueMissing})}if(e){i.attr("validity",{elementNames:r,getter:function(g){var u=g.validity;if(!u)return u;var p={};f.forEach(function(y){p[y]=u[y]});if(!d.attr(g,"willValidate"))return p;var x=d(g),C={type:(g.getAttribute&&g.getAttribute("type")||"").toLowerCase(),nodeName:(g.nodeName||"").toLowerCase()},D=n.call(x),E=!!d.data(g,"hasCustomError"),A;p.customError=E;if(p.valid&&p.customError)p.valid=false;else if(!p.valid){var B=true;d.each(p,function(y,z){if(z)return B=
false});if(B)p.valid=true}d.each(a,function(y,z){p[y]=z(x,D,C,p);if(p[y]&&(p.valid||!A&&b)){g.setCustomValidity(i.createValidationMessage(g,y));p.valid=false;A=true}});p.valid&&g.setCustomValidity("");return p}});d.fn.val=function(){var g=n.apply(this,arguments);this.each(function(){w(this)});return g};d.attr=function(g,u,p){var x=h.apply(this,arguments);j[u]&&p!==void 0&&g.form&&w(g);return x};if(k.addEventListener){k.addEventListener("change",function(g){w(g.target)},true);m.inputUI||k.addEventListener("input",
function(g){w(g.target)},true)}i.addReady(function(g){d(r.join(","),g).each(function(){w(this,true)})})}}})();i.createReadyEvent("validation-base")},true);
jQuery.webshims.ready("validation-base",function(d,i,t){if(!d.support.validity){i.inputTypes=i.inputTypes||{};var q=i.inputTypes,m={radio:1,checkbox:1};i.addInputType=function(a,b){q[a]=b};var s={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},k={valueMissing:function(a,b,e){if(!a.attr("required"))return false;var f=false;if(!("type"in e))e.type=(a[0].getAttribute("type")||a[0].type||
"").toLowerCase();return f=e.nodeName=="select"?!b&&a[0].type=="select-one"&&a[0].size<2&&d("> option:first-child:not(:disabled)",a).attr("selected"):m[e.type]?!d(a[0].form&&a[0].name?a[0].form[a[0].name]:[]).filter(":checked")[0]:!b},tooLong:function(a,b,e){if(b===""||e.nodeName=="select")return false;a=a.attr("maxlength");e=false;var f=b.length;if(f&&a>=0&&b.replace&&(typeof a=="number"||a&&a==a*1))e=f>a;return e},typeMismatch:function(a,b,e){if(b===""||e.nodeName=="select")return false;var f=false;
if(!("type"in e))e.type=(a[0].getAttribute("type")||a[0].type||"").toLowerCase();if(q[e.type]&&q[e.type].mismatch)f=q[e.type].mismatch(b,a);return f},patternMismatch:function(a,b,e){if(b===""||e.nodeName=="select")return false;a=a.attr("pattern");if(!a)return false;return!RegExp("^(?:"+a+")$").test(b)}};i.addValidityRule=function(a,b){k[a]=b};i.addMethod("checkValidity",function(){var a,b=function(e){var f,h=d.attr(e,"validity");if(h)d.data(e,"cachedValidity",h);else return true;if(!h.valid){f=d.Event("invalid");
var n=d(e).trigger(f);if(!a&&!f.isDefaultPrevented()){i.validityAlert.showFor(n);a=true}}d.data(e,"cachedValidity",false);return h.valid};return function(){a=false;if(d.nodeName(this,"form")||d.nodeName(this,"fieldset")){for(var e=true,f=this.elements||d("input, textarea, select",this),h=0,n=f.length;h<n;h++)b(f[h])||(e=false);return e}else return this.form?b(this):true}}());i.addMethod("setCustomValidity",function(a){d.data(this,"customvalidationMessage",""+a)});d.event.special.invalid={add:function(){d.data(this,
"invalidEventShim")||d.event.special.invalid.setup.call(this)},setup:function(){d(this).bind("submit",d.event.special.invalid.handler).data("invalidEventShim",true);var a=d(this).data("events").submit;a&&a.length>1&&a.unshift(a.pop())},teardown:function(){d(this).unbind("submit",d.event.special.invalid.handler).data("invalidEventShim",false)},handler:function(a){if(!(a.type!="submit"||!d.nodeName(a.target,"form")||d.attr(a.target,"novalidate")!=null||d.data(a.target,"novalidate")))if(!d(a.target).checkValidity()){!a.originalEvent&&
t.console&&console.log&&console.log("submit");a.stopImmediatePropagation();return false}}};i.attr("validity",{elementNames:["input","select","textarea"],getter:function(a){var b=d.data(a,"cachedValidity");if(b)return b;b=d.extend({},s);if(!d.attr(a,"willValidate"))return b;var e=d(a),f=e.val(),h={nodeName:a.nodeName.toLowerCase()};b.customError=!!d.data(a,"customvalidationMessage");if(b.customError)b.valid=false;d.each(k,function(n,j){if(j(e,f,h)){b[n]=true;b.valid=false}});return b}});i.createBooleanAttrs("required",
["input","textarea","select"]);i.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var a={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(b){return!!(b.name&&b.form&&!b.disabled&&!b.readOnly&&!a[b.type]&&d.attr(b.form,"novalidate")==null)}}()});i.addInputType("email",{mismatch:function(){var a=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(b){return!a.test(b)}}()});i.addInputType("url",{mismatch:function(){var a=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(b){return!a.test(b)}}()});var l=function(){var a=this;if(a.form){d.data(a.form,"novalidate",true);setTimeout(function(){d.data(a.form,"novalidate",false)},1)}},c={submit:1,button:1};d(document).bind("click",function(a){a.target&&a.target.form&&c[a.target.type]&&d.attr(a.target,"formnovalidate")!=null&&l.call(a.target)});i.addReady(function(a){a=d("form",a).bind("invalid",d.noop).find("button[formnovalidate]").bind("click",l).end();if(!document.activeElement||!document.activeElement.form)d("input, select, textarea",
a).filter("[autofocus]:first").focus()});i.createReadyEvent("validity")}},true);
jQuery.webshims.ready("validation-base",function(d,i){if(!("value"in document.createElement("output"))){var t=document;(function(){var m={input:1,textarea:1},s={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1},k=function(l){var c,a=l.attr("value"),b=function(f){if(l){var h=l.attr("value");if(h!==a){a=h;if(!f||f.type!="input")i.triggerInlineForm(l[0],"input")}}},e=function(){l.unbind("focusout",e).unbind("input",b);clearInterval(c);b();l=null};clearInterval(c);c=setInterval(b,d.browser.mozilla?
250:111);setTimeout(b,9);l.bind("focusout",e).bind("input",b)};d(t).bind("focusin",function(l){if(l.target&&l.target.type&&!l.target.readonly&&!l.target.readOnly&&!l.target.disabled&&m[(l.target.nodeName||"").toLowerCase()]&&!s[l.target.type])k(d(l.target))})})();var q=function(m){if(!m.getAttribute("aria-live")){m=d(m);var s=(m.text()||"").trim(),k=m.attr("id"),l=m.attr("for"),c=d('<input class="output-shim" type="hidden" name="'+(m.attr("name")||"")+'" value="'+s+'" style="display: none" />').insertAfter(m),
a=c[0].form||t,b=function(e){c[0].value=e;e=c[0].value;m.text(e);m[0].value=e};m[0].defaultValue=s;m[0].value=s;m.attr({"aria-live":"polite"});if(k){c.attr("id",k);m.attr("aria-labeldby",i.getID(d("label[for="+k+"]",a)))}if(l){k=i.getID(m);l.split(" ").forEach(function(e){(e=a.getElementById(e))&&e.setAttribute("aria-controls",k)})}m.data("outputShim",b);c.data("outputShim",b);return b}};i.attr("value",{elementNames:["output","input"],getter:true,setter:function(m,s,k){var l=d.data(m,"outputShim");
if(!l)if(d.nodeName(m,"output"))l=q(m);else return k();l(s)}});i.addReady(function(m){d("output",m).each(function(){q(this)})});i.createReadyEvent("output")}},true);
(function(d){if(!d.support.placeholder){var i=function(k,l,c,a,b){if(!a){a=d.data(k,"placeHolder");if(!a)return}if(b=="focus"||!b&&k===document.activeElement)a.box.removeClass("placeholder-visible");else{if(l===false)l=d.attr(k,"value");if(l)a.box.removeClass("placeholder-visible");else{if(c===false)c=d.attr(k,"placeholder");a.box[c&&!l?"addClass":"removeClass"]("placeholder-visible")}}},t=function(k){k=d(k);var l=k.attr("id"),c=!!(k.attr("title")||k.attr("aria-labeledby"));if(!c&&l)c=!!d("label[for="+
l+"]",k[0].form)[0];return d(c?'<span class="placeholder-text"></span>':'<label for="'+(l||d.webshims.getID(k))+'" class="placeholder-text"></label>')},q=function(){var k=/\n|\r|\f|\t/g,l={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(c){var a=d.data(c,"placeHolder");if(a)return a;a=d.data(c,"placeHolder",{text:t(c)});a.box=d(c).wrap('<span class="placeholder-box placeholder-box-'+(c.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",function(h){i(this,
false,false,a,h.type)}).parent();a.text.insertAfter(c).bind("mousedown.placeholder",function(){i(this,false,false,a,"focus");c.focus();return false});d.each(["Left","Top"],function(h,n){var j=(parseInt(d.curCSS(c,"padding"+n),10)||0)+Math.max(parseInt(d.curCSS(c,"margin"+n),10)||0,0)+(parseInt(d.curCSS(c,"border"+n+"Width"),10)||0);a.text.css("padding"+n,j)});var b=d.curCSS(c,"lineHeight"),e={width:d(c).getwidth(),height:d(c).getheight()},f=d.curCSS(c,"float");a.text.css("lineHeight")!==b&&a.text.css("lineHeight",
b);e.width&&e.height&&a.text.css(e);f!=="none"&&a.box.addClass("placeholder-box-"+f);return a},update:function(c,a){if(l[d.attr(c,"type")]||d.nodeName(c,"textarea")){if(d.nodeName(c,"input"))a=a.replace(k,"");var b=q.create(c);c.setAttribute("placeholder",a);b.text.text(a);i(c,false,a,b)}}}}();d.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(k,l){q.update(k,l)},getter:function(k){return k.getAttribute("placeholder")||""}});var m={elementNames:["input","textarea"],setter:function(k,
l,c){var a=k.getAttribute("placeholder");a&&"value"in k&&i(k,l,a);c()},getter:true};d.webshims.attr("value",m);var s=d.fn.val;d.fn.val=function(k){k!==undefined&&this.each(function(){this.nodeType===1&&m.setter(this,k,d.noop)});return s.apply(this,arguments)};d.webshims.addReady(function(k){d("input[placeholder], textarea[placeholder]",k).attr("placeholder",function(l,c){return c})})}})(jQuery);
