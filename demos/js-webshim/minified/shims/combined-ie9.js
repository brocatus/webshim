(function(a){if(!navigator.geolocation){a.support.geolocation="shim";var r=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatibel with this plugin";},1)},l=0;navigator.geolocation=function(){var o,d={getCurrentPosition:function(j,g,c){var e=function(){clearTimeout(f);if(!(o||!window.google||!google.loader||!google.loader.ClientLocation)){var k=google.loader.ClientLocation;o={latitude:k.latitude,longitude:k.longitude,altitude:null,accuracy:43E3,
altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null}}if(o)j({coords:o,timestamp:(new Date).getTime()});else g&&g({code:2,message:"POSITION_UNAVAILABLE"})},f;if(!window.google||!google.loader){if(a.webshims.modules.geolocation.options.destroyWrite){document.write=r;document.writeln=r}a(document).one("google-loaderReady",e);a.webshims.loader.loadScript("http://www.google.com/jsapi",false,"google-loader");if(c&&c.timeout)f=setTimeout(function(){a(document).unbind("google-loader",e);g&&g({code:3,
message:"TIMEOUT"})},c.timeout)}else setTimeout(e,1)},clearWatch:a.noop};d.watchPosition=function(j,g,c){d.getCurrentPosition(j,g,c);l++;return l};return d}()}})(jQuery);
jQuery.webshims.ready("es5",function(a){a.extend(a.expr.filters,{valid:function(l){return(a.attr(l,"validity")||{valid:true}).valid},invalid:function(l){return!a.expr.filters.valid(l)},willValidate:function(l){return a.attr(l,"willValidate")}});a.webshims.validityAlert=function(){var l={hideDelay:5E3,showFor:function(e,f){e=a(e);var k=(e.data("inputUIReplace")||{visual:e}).visual;c();l.clear();o.attr("for",k.attr("id"));this.getMessage(e);this.position(k);this.show();if(this.hideDelay)d=setTimeout(j,
this.hideDelay);if(!f){k.focus();a(document).bind("focusout.validityalert",j)}},getMessage:function(e){a("> span",o).html(e.attr("validationMessage"))},position:function(e){var f=e.offset();f.top+=e.outerHeight();o.css(f)},show:function(){o.css("display")==="none"?o.fadeIn():o.fadeTo(400,1)},hide:function(){l.clear();o.fadeOut()},clear:function(){clearTimeout(d);a(document).unbind("focusout.validityalert");o.stop().removeAttr("for")}},o=a('<label class="validity-alert" role="alert"><span class="va-box" /></label>').css({position:"absolute",
display:"none"}),d=false,j=a.proxy(l,"hide"),g=false,c=function(){if(!g){g=true;a(function(){o.appendTo("body")})}};return l}();a.webshims.validityMessages.en=a.webshims.validityMessages.en||a.webshims.validityMessages["en-US"]||{typeMismatch:{email:"{%value} is not a legal email address",url:"{%value} is not a valid web address",number:"{%value} is not a number!",date:"{%value} is not a date",time:"{%value} is not a time",range:"{%value} is not a number!","datetime-local":"{%value} is not a correct date-time format."},
rangeUnderflow:"{%value} is too low. The lowest value you can use is {%min}.",rangeOverflow:"{%value}  is too high. The highest value you can use is {%max}.",stepMismatch:"The value {%value} is not allowed for this form.",tooLong:"The entered text is too large! You used {%valueLen} letters and the limit is {%maxlength}.",patternMismatch:"{%value} is not in the format this page requires! {%title}",valueMissing:"You have to specify a value"};a.webshims.validityMessages["en-US"]=a.webshims.validityMessages["en-US"]||
a.webshims.validityMessages.en;a.webshims.validityMessages[""]=a.webshims.validityMessages[""]||a.webshims.validityMessages.en;a.webshims.validityMessages.de=a.webshims.validityMessages.de||{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},
rangeUnderflow:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen.",rangeOverflow:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen.",stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Buchstaben eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr diese Seite ein falsches Format! {%title}",
valueMissing:"Sie m\u00fcssen einen Wert eingeben"};var r=a.webshims.validityMessages[""];a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.webshims.validityMessages,"validation-base",function(l){r=l})});a.webshims.createValidationMessage=function(l,o){var d=r[o];if(d&&typeof d!=="string")d=d[(l.getAttribute("type")||"").toLowerCase()]||d.defaultMessage;d&&a.each(["value","min","max","title","maxlength","label"],function(j,g){if(d.indexOf("{%"+g)!==-1){var c=(g=="label"?a.trim(a("label[for="+
l.id+"]",l.form).text()).replace(/\*$|:$/,""):a.attr(l,g))||"";d=d.replace("{%"+g+"}",c);if("value"==g)d=d.replace("{%valueLen}",c.length)}});return d||""};a.each(a.support.validationMessage?["customValidationMessage"]:["customValidationMessage","validationMessage"],function(l,o){a.webshims.attr(o,{elementNames:["input","select","textarea"],getter:function(d){var j="";if(!a.attr(d,"willValidate"))return j;var g=a.attr(d,"validity")||{valid:1};if(g.valid)return j;if(g.customError||o==="validationMessage")if(j=
"validationMessage"in d?d.validationMessage:a.data(d,"customvalidationMessage"))return j;a.each(g,function(c,e){if(!(c=="valid"||!e))if(j=a.webshims.createValidationMessage(d,c))return false});return j||""}})});(function(){var l,o=[],d,j,g;a.support.validity===true&&window.addEventListener&&!window.noHTMLExtFixes&&window.addEventListener("submit",function(c){c.target.checkValidity&&a.attr(c.target,"novalidate")===undefined&&c.target.checkValidity()},true);a(document).bind("invalid",function(c){if(!l){j=
c.target.form;if(a.support.validity===true&&j&&!window.noHTMLExtFixes){var e=a(j).bind("submit.preventInvalidSubmit",function(f){if(a.attr(j,"novalidate")===undefined){f.stopImmediatePropagation();return false}}).data("events").submit;e&&e.length>1&&e.unshift(e.pop())}l=a.Event("firstinvalid");a(c.target).trigger(l)}l&&l.isDefaultPrevented()&&c.preventDefault();if(a.support.validity!==true||a.inArray(c.target,o)==-1)o.push(c.target);else if(!window.noHTMLExtFixes){g=true;c.stopImmediatePropagation()}c.extraData=
"fix";clearTimeout(d);d=setTimeout(function(){var f={type:"lastinvalid",cancelable:false,invalidlist:a(o)};!g&&l.target!==document.activeElement&&document.activeElement&&!a.data(l.target,"maybePreventedinvalid")&&a.webshims.validityAlert.showFor(l.target);l=g=false;o=[];a(j).unbind("submit.preventInvalidSubmit");a(c.target).trigger(f,f)},0)})})();(function(){if(!(a.support.validity!==true||a.support.fieldsetValidation||window.noHTMLExtFixes)){a.support.fieldsetValidation="shim";a.webshims.addMethod("checkValidity",
function(){if(a.nodeName(this,"fieldset")){var l=true;a(this.elements||"input, textarea, select",this).each(function(){if(this.checkValidity)this.checkValidity()||(l=false)});return l}else if(this.checkValidity)return this.checkValidity()})}})();a.support.validationMessage=a.support.validationMessage||"shim";a.webshims.createReadyEvent("validation-base")},true,true);
jQuery.webshims.ready("validation-base",function(a){if(!a.support.validity){a.webshims.inputTypes=a.webshims.inputTypes||{};var r=a.webshims.inputTypes,l={radio:1,checkbox:1};a.webshims.addInputType=function(c,e){r[c]=e};var o={customError:false,typeMismatch:false,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false,tooLong:false,patternMismatch:false,valueMissing:false,valid:true},d={valueMissing:function(c,e){if(!c.attr("required"))return false;return l[c[0].type]?!a(c[0].form&&c[0].name?
c[0].form[c[0].name]:[]).filter(":checked")[0]:!e},tooLong:function(c,e){if(e==="")return false;var f=c.attr("maxlength"),k=false,b=e.length;if(b&&f>=0&&e.replace&&(typeof f=="number"||f&&f==f*1))k=b>f;return k},typeMismatch:function(c,e,f){if(e==="")return false;var k=false;if(!("type"in f))f.type=(c[0].getAttribute("type")||"").toLowerCase();if(r[f.type]&&r[f.type].mismatch)k=r[f.type].mismatch(e,c);return k},patternMismatch:function(c,e){if(e==="")return false;var f=c.attr("pattern");if(!f)return false;
return!RegExp("^(?:"+f+")$").test(e)}};a.webshims.addValidityRule=function(c,e){d[c]=e};a.webshims.addMethod("checkValidity",function(){var c,e=function(f){var k,b=a.attr(f,"validity");if(b)a.data(f,"cachedValidity",b);else b={valid:true};if(!b.valid){k=a.Event("invalid");var h=a(f).trigger(k);if(!k.isDefaultPrevented()){c||a.webshims.validityAlert.showFor(h);c=true}}a.data(f,"cachedValidity",false);return b.valid};return function(){c=false;if(a.nodeName(this,"form")||a.nodeName(this,"fieldset")){for(var f=
true,k=this.elements||a("input, textarea, select",this),b=0,h=k.length;b<h;b++)e(k[b])||(f=false);return f}else return this.form?e(this):true}}());a.event.special.invalid={add:function(){a.data(this,"invalidEventShim")||a.event.special.invalid.setup.call(this)},setup:function(){a(this).bind("submit",a.event.special.invalid.handler).data("invalidEventShim",true);var c=a(this).data("events").submit;c&&c.length>1&&c.unshift(c.pop())},teardown:function(){a(this).unbind("submit",a.event.special.invalid.handler).data("invalidEventShim",
false)},handler:function(c){if(!(c.type!="submit"||!a.nodeName(c.target,"form")||a.attr(c.target,"novalidate")!==undefined||a.data(c.target,"novalidate")))if(!a(c.target).checkValidity()){!c.originalEvent&&!window.debugValidityShim&&window.console&&console.log&&console.log("submit");c.stopImmediatePropagation();return false}}};a.webshims.attr("validity",{elementNames:["input","select","textarea"],getter:function(c){var e=a.data(c,"cachedValidity");if(e)return e;e=a.extend({},o);if(!a.attr(c,"willValidate"))return e;
var f=a(c),k=f.val(),b={};e.customError=!!a.data(c,"customvalidationMessage");if(e.customError)e.valid=false;if((c.nodeName||"").toLowerCase()=="select")return e;a.each(d,function(h,i){if(i(f,k,b)){e[h]=true;e.valid=false}});return e}});a.webshims.addMethod("setCustomValidity",function(c){a.data(this,"customvalidationMessage",""+c)});a.webshims.attr("validationMessage",{elementNames:["input","select","textarea"],getter:function(c,e){var f=e()||a.data(c,"customvalidationMessage");return!f||!a.attr(c,
"willValidate")?"":f}});a.webshims.createBooleanAttrs("required",["input","textarea"]);a.webshims.attr("willValidate",{elementNames:["input","select","textarea"],getter:function(){var c={button:1,reset:1,add:1,remove:1,"move-up":1,"move-down":1,hidden:1,submit:1};return function(e){return!!(e.name&&e.form&&!e.disabled&&!e.readOnly&&!c[e.type]&&a.attr(e.form,"novalidate")===undefined)}}()});a.webshims.addInputType("email",{mismatch:function(){var c=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|(\x22((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?\x22))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
return function(e){return!c.test(e)}}()});a.webshims.addInputType("url",{mismatch:function(){var c=/^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
return function(e){return!c.test(e)}}()});var j=function(){var c=this;if(c.form){a.data(c.form,"novalidate",true);setTimeout(function(){a.data(c.form,"novalidate",false)},1)}},g={submit:1,button:1};a(document).bind("click",function(c){c.target&&c.target.form&&g[c.target.type]&&a.attr(c.target,"formnovalidate")!==undefined&&j.call(c.target)});a.webshims.addReady(function(c){a("form",c).bind("invalid",a.noop).find("button[formnovalidate]").bind("click",j)});(function(){if(a.support.validity!==true){a.support.validity=
"shim";var c={input:1,textarea:1},e={radio:1,checkbox:1,submit:1,button:1,image:1,reset:1,color:1,range:1},f=function(k){var b;k[0].getAttribute("type");var h=k.val(),i=function(m){if(k){var q=k.val();if(q!==h){h=q;if(!m||m.type!="input")k.trigger("input")}}},p=function(){k.unbind("focusout",p).unbind("input",i);clearInterval(b);i();k=null};clearInterval(b);b=setInterval(i,150);setTimeout(i,9);k.bind("focusout",p).bind("input",i)};a(document).bind("focusin",function(k){if(k.target&&k.target.type&&
!k.target.readonly&&!k.target.readOnly&&!k.target.disabled&&c[(k.target.nodeName||"").toLowerCase()]&&!e[k.target.type])f(a(k.target))})}})();a.webshims.createReadyEvent("validity")}},true,true);
(function(a){var r,l=function(){if(!r){r=true;var o=parseInt("NaN",10),d=a.webshims.inputTypes,j=function(b){return typeof b=="number"||a.trim(b)&&b==b*1},g=function(b){return a('<input type="'+b+'" />').attr("type")===b},c=function(b){return(b.getAttribute("type")||"").toLowerCase()},e=function(b,h){var i=a.attr(b,"step");if(i==="any")return i;h=h||c(b);if(!d[h]||!d[h].step)return i;i=d.number.asNumber(i);return(!isNaN(i)&&i>0?i:d[h].step)*d[h].stepScaleFactor},f=function(b,h,i){if(!(b+"AsNumber"in
i)){i[b+"AsNumber"]=d[i.type].asNumber(h.attr(b));if(isNaN(i[b+"AsNumber"])&&b+"Default"in d[i.type])i[b+"AsNumber"]=d[i.type][b+"Default"]}},k=function(b,h){b=""+b;h-=b.length;for(var i=0;i<h;i++)b="0"+b;return b};a.webshims.addValidityRule("stepMismatch",function(b,h,i){if(h==="")return false;if(!("type"in i))i.type=c(b[0]);if(i.type=="date")return false;var p=false;if(d[i.type]&&d[i.type].step){if(!("step"in i))i.step=e(b[0],i.type);if(i.step=="any")return false;if(!("valueAsNumber"in i))i.valueAsNumber=
d[i.type].asNumber(h);if(isNaN(i.valueAsNumber))return false;f("min",b,i);b=i.minAsNumber;if(isNaN(b))b=d[i.type].stepBase||0;p=Math.abs((i.valueAsNumber-b)%i.step);p=!(p<=1.0E-7||Math.abs(p-i.step)<=1.0E-7)}return p});a.each([{name:"rangeOverflow",attr:"max",factor:1},{name:"rangeUnderflow",attr:"min",factor:-1}],function(b,h){a.webshims.addValidityRule(h.name,function(i,p,m){var q=false;if(p==="")return q;if(!("type"in m))m.type=c(i[0]);if(d[m.type]&&d[m.type].asNumber){if(!("valueAsNumber"in m))m.valueAsNumber=
d[m.type].asNumber(p);if(isNaN(m.valueAsNumber))return false;f(h.attr,i,m);if(isNaN(m[h.attr+"AsNumber"]))return q;q=m[h.attr+"AsNumber"]*h.factor<m.valueAsNumber*h.factor-1.0E-7}return q})});a.webshims.attr("valueAsNumber",{elementNames:["input"],getter:function(b){var h=c(b);return d[h]&&d[h].asNumber?d[h].asNumber(a.attr(b,"value")):o},setter:function(b,h,i){var p=c(b);if(d[p]&&d[p].numberToString)if(isNaN(h))a.attr(b,"value","");else{h=d[p].numberToString(h);if(h!==false)a.attr(b,"value",h);else throw"INVALID_STATE_ERR: DOM Exception 11";
}else i()}});a.webshims.attr("valueAsDate",{elementNames:["input"],getter:function(b){var h=c(b);return d[h]&&d[h].asDate&&!d[h].noAsDate?d[h].asDate(a.attr(b,"value")):null},setter:function(b,h,i){var p=c(b);if(d[p]&&d[p].dateToString){if(!window.noHTMLExtFixes)throw"there are some serious issues in opera's implementation. don't use!";if(h===null)a.attr(b,"value","");else{h=d[p].dateToString(h);if(h!==false)a.attr(b,"value",h);else throw"INVALID_STATE_ERR: DOM Exception 11";}}else i()}});g("number")||
a.webshims.addInputType("number",{mismatch:function(b){return!j(b)},step:1,stepScaleFactor:1,asNumber:function(b){return j(b)?b*1:o},numberToString:function(b){return j(b)?b:false}});!g("number")&&d.number&&a.webshims.addInputType("range",a.extend({},d.number,{minDefault:0,maxDefault:100}));!g("date")&&d.number&&a.webshims.addInputType("date",{mismatch:function(b){if(!b||!b.split||!/\d$/.test(b))return true;var h=b.split(/\u002D/);if(h.length!==3)return true;var i=false;a.each(h,function(p,m){if(!(j(m)||
m&&m=="0"+m*1)){i=true;return false}});if(i)return i;if(h[0].length!==4||h[1].length!=2||h[1]>12||h[2].length!=2||h[2]>33)i=true;return b!==this.dateToString(this.asDate(b,true))},step:1,stepScaleFactor:864E5,asDate:function(b,h){if(!h&&this.mismatch(b))return null;return new Date(this.asNumber(b,true))},asNumber:function(b,h){var i=o;if(h||!this.mismatch(b)){b=b.split(/\u002D/);i=Date.UTC(b[0],b[1]-1,b[2])}return i},numberToString:function(b){return j(b)?this.dateToString(new Date(b*1)):false},dateToString:function(b){return b&&
b.getFullYear?b.getUTCFullYear()+"-"+k(b.getUTCMonth()+1,2)+"-"+k(b.getUTCDate(),2):false}});!g("time")&&d.number&&d.date&&a.webshims.addInputType("time",a.extend({},d.date,{mismatch:function(b,h){if(!b||!b.split||!/\d$/.test(b))return true;b=b.split(/\u003A/);if(b.length<2||b.length>3)return true;var i=false,p;if(b[2]){b[2]=b[2].split(/\u002E/);p=parseInt(b[2][1],10);b[2]=b[2][0]}a.each(b,function(m,q){if(!(j(q)||q&&q=="0"+q*1)||q.length!==2){i=true;return false}});if(i)return true;if(b[0]>23||b[0]<
0||b[1]>59||b[1]<0)return true;if(b[2]&&(b[2]>59||b[2]<0))return true;if(p&&isNaN(p))return true;if(p)if(p<100)p*=100;else if(p<10)p*=10;return h===true?[b,p]:false},step:60,stepBase:0,stepScaleFactor:1E3,asDate:function(b){b=new Date(this.asNumber(b));return isNaN(b)?null:b},asNumber:function(b){var h=o;b=this.mismatch(b,true);if(b!==true){h=Date.UTC("1970",0,1,b[0][0],b[0][1],b[0][2]||0);if(b[1])h+=b[1]}return h},dateToString:function(b){if(b&&b.getUTCHours){var h=k(b.getUTCHours(),2)+":"+k(b.getUTCMinutes(),
2),i=b.getSeconds();if(i!="0")h+=":"+k(i,2);i=b.getUTCMilliseconds();if(i!="0")h+="."+k(i,3);return h}else return false}}));!g("datetime-local")&&d.number&&d.time&&a.webshims.addInputType("datetime-local",a.extend({},d.time,{mismatch:function(b,h){if(!b||!b.split||(b+"special").split(/\u0054/).length!==2)return true;b=b.split(/\u0054/);return d.date.mismatch(b[0])||d.time.mismatch(b[1],h)},noAsDate:true,asDate:function(b){b=new Date(this.asNumber(b));return isNaN(b)?null:b},asNumber:function(b){var h=
o,i=this.mismatch(b,true);if(i!==true){b=b.split(/\u0054/)[0].split(/\u002D/);h=Date.UTC(b[0],b[1]-1,b[2],i[0][0],i[0][1],i[0][2]||0);if(i[1])h+=i[1]}return h},dateToString:function(b,h){return d.date.dateToString(b)+"T"+d.time.dateToString(b,h)}}));(function(){var b=a.webshims.modules["number-date-type"].options,h=function(m,q,n){n=n||{};if(!("type"in n))n.type=c(m);if(!("step"in n))n.step=e(m,n.type);if(!("valueAsNumber"in n))n.valueAsNumber=d[n.type].asNumber(a.attr(m,"value"));var s=n.step=="any"?
d[n.type].step*d[n.type].stepScaleFactor:n.step;f("min",a(m),n);f("max",a(m),n);if(isNaN(n.valueAsNumber))n.valueAsNumber=d[n.type].stepBase||0;if(n.step!=="any")n.valueAsNumber=Math.round((n.valueAsNumber-(n.valueAsNumber-(n.minAsnumber||0))%n.step)*1E7)/1E7;m=n.valueAsNumber+s*q;if(!isNaN(n.minAsNumber)&&m<n.minAsNumber)m=n.valueAsNumber*q<n.minAsNumber?n.minAsNumber:isNaN(n.maxAsNumber)?Number.MAX_VALUE:n.maxAsNumber;else if(!isNaN(n.maxAsNumber)&&m>n.maxAsNumber)m=n.valueAsNumber*q>n.maxAsNumber?
n.maxAsNumber:isNaN(n.minAsNumber)?Number.MIN_VALUE:n.minAsNumber;return m},i=function(m,q,n){if(!(m.disabled||m.readOnly||a(n).hasClass("step-controls"))){a.attr(m,"value",d[q].numberToString(h(m,a(n).hasClass("step-up")?1:-1,{type:q})));a(m).unbind("blur.stepeventshim").trigger("input");if(document.activeElement){if(document.activeElement!==m)try{m.focus()}catch(s){}setTimeout(function(){if(document.activeElement!==m)try{m.focus()}catch(t){}a(m).one("blur.stepeventshim",function(){a(m).trigger("change")})},
0)}}};if(b.stepArrows){var p={elementNames:["input"],setter:function(m,q,n){n();if(q=a.data(m,"step-controls"))q[m.disabled||m.readonly?"addClass":"removeClass"]("disabled-step-control")}};a.webshims.attr("disabled",p);a.webshims.attr("readonly",p)}a.webshims.addReady(function(m){b.stepArrows&&a("input",m).each(function(){var q=c(this);if(!(!d[q]||!d[q].asNumber||!b.stepArrows||b.stepArrows!==true&&!b.stepArrows[q])){var n=this,s=a(this).css("direction")=="rtl"?{action:"insertBefore",side:"Left",
otherSide:"right"}:{action:"insertAfter",side:"Right",otherSide:"left"},t=a('<span class="step-controls"><span class="step-up" /><span class="step-down" tabindex="-1" /></span>')[s.action](this).bind("mousedown mousepress",function(v){i(n,q,v.target);return false});a(this).addClass("has-step-controls").data("step-controls",t).attr({readonly:this.readOnly,disabled:this.disabled});if(b.recalcWidth){var u=t.outerWidth(true)+(parseInt(a(this).css("padding"+s.side),10)||0),w=parseInt(a(this).css("border"+
s.side+"width"),10)||0;t.css(s.otherSide,(w+u)*-1);u++;a(this).css("width",a(this).width()-u).css("padding"+s.side,u)}}})});a.webshims.createReadyEvent("number-date-type")})();a.webshims.attr("type",{elementNames:["input"],getter:function(b){var h=c(b);return a.webshims.inputTypes[h]?h:b.type||b.getAttribute("type")},setter:true})}};a.support.validity===true?a.webshims.ready("implement-types",l,true,true):a.webshims.ready("validity",l,true,true)})(jQuery);
(function(a){a.support.inputUI="shim";var r=a.webshims.modules.inputUI.options;r.startInputUI=function(d){d&&a.webshims.loader.loadList(["jquery-ui"])};r.startInputUI(r._autoStart);var l=function(d){a("input",d).each(function(){var j=a.attr(this,"type");l[j]&&!a.data(this,"inputUIReplace")&&l[j](a(this))})};l.common=function(d,j,g){r.replaceNative&&d.bind("invalid",function(e){setTimeout(function(){if(!a.data(e.target,"maybePreventedinvalid"))throw"you have to handle invalid events, if you replace native input-widgets.";
},9)});var c={css:{marginRight:d.css("marginRight"),marginLeft:d.css("marginLeft")},outerWidth:d.outerWidth()};j.addClass(d[0].className).data("html5element",d);d.after(j).data("inputUIReplace",{visual:j,methods:g}).hide();return c};l.date=function(d){if(a.fn.datepicker){var j=a('<input type="text" class="input-date" />'),g=this.common(d,j,l.date.attrs),c=function(){l.date.blockAttr=true;d.attr("value",a.datepicker.formatDate("yy-mm-dd",j.datepicker("getDate")));l.date.blockAttr=false;d.trigger("change")};
if(g.css){j.css(g.css);g.outerWidth&&j.outerWidth(g.outerWidth)}j.datepicker(a.extend({},r.date,{onSelect:c})).bind("change",c).data("datepicker").dpDiv.addClass("input-date-datepicker-control");a.each(["disabled","min","max","value"],function(e,f){d.attr(f,function(k,b){return b||""})})}};l.date.attrs={disabled:function(d,j,g){j.datepicker("option","disabled",!!g)},min:function(d,j,g){try{g=a.datepicker.parseDate("yy-mm-dd",g)}catch(c){g=false}g&&j.datepicker("option","minDate",g)},max:function(d,
j,g){try{g=a.datepicker.parseDate("yy-mm-dd",g)}catch(c){g=false}g&&j.datepicker("option","maxDate",g)},value:function(d,j,g){if(!l.date.blockAttr){try{var c=a.datepicker.parseDate("yy-mm-dd",g)}catch(e){c=false}c?j.datepicker("setDate",c):j.attr("value",g)}}};l.range=function(d){if(a.fn.slider){var j=a('<span class="input-range" />'),g=this.common(d,j,l.range.attrs);if(g.css){j.css(g.css);g.outerWidth&&j.outerWidth(g.outerWidth)}j.slider(a.extend(r.slider,{change:function(c,e){if(c.originalEvent){l.range.blockAttr=
true;d.attr("value",e.value);l.range.blockAttr=false;d.trigger("change")}}}));a.each(["disabled","min","max","value","step"],function(c,e){d.attr(e,function(f,k){return k||""})})}};l.range.attrs={disabled:function(d,j,g){j.slider("option","disabled",!!g)},min:function(d,j,g){g=g?g*1||0:0;j.slider("option","min",g)},max:function(d,j,g){g=g||g===0?g*1||100:100;j.slider("option","max",g)},value:function(d,j,g){g=a(d).attr("valueAsNumber");if(isNaN(g)){g=(j.slider("option","max")-j.slider("option","min"))/
2;d.value=g}l.range.blockAttr||j.slider("option","value",g)},step:function(d,j,g){g=g?g*1||1:1;j.slider("option","step",g)}};a.each(["disabled","min","max","value","step"],function(d,j){a.webshims.attr(j,{elementNames:["input"],setter:function(g,c,e){var f=a.data(g,"inputUIReplace");e();f&&f.methods[j]&&f.methods[j](g,f.visual,c)},getter:true})});var o=function(d){if(d){d=a.extend({},d,r.date);a("input.input-date.hasDatepicker").datepicker("option",d).each(function(){var j=a.data(this,"html5element");
j&&a.each(["disabled","min","max","value"],function(g,c){j.attr(c,function(e,f){return f||""})})});a.datepicker.setDefaults(d)}};a(document).bind("jquery-uiReady.langchange input-widgetsReady.langchange",function(){a.datepicker&&a(document).bind("htmlExtLangChange",function(){a.webshims.activeLang(a.datepicker.regional,"inputUI",o)}).unbind("jquery-uiReady.langchange input-widgetsReady.langchange")});a.webshims.ready("number-date-type",function(){a.webshims.addReady(function(d){a(document).bind("jquery-uiReady.initinputui input-widgetsReady.initinputui",
function(){if(a.datepicker||a.fn.slider){l(d);a.datepicker&&a.fn.slider&&a(document).unbind("jquery-uiReady.initinputui input-widgetsReady.initinputui")}})});a.webshims.createReadyEvent("inputUI")},true,true)})(jQuery);
(function(a){if(!a.support.placeholder){a.support.placeholder="shim";var r=function(c,e,f,k,b){if(!k){k=a.data(c,"placeHolder");if(!k)return}if(b=="focus")k.box.removeClass("placeholder-visible");else{if(e===false)e=a.attr(c,"value");if(e)k.box.removeClass("placeholder-visible");else{if(f===false)f=a.attr(c,"placeholder");k.box[f&&!e?"addClass":"removeClass"]("placeholder-visible")}}},l=0,o=function(c){c=a(c);var e=c.attr("id"),f=!!(c.attr("title")||c.attr("aria-labeledby"));if(!f&&e)f=!!a("label[for="+
e+"]",c[0].form)[0];else if(!e){l++;e="input-placeholder-id-"+l;c.attr("id",e)}return a(f?'<span class="placeholder-text"></span>':'<label for="'+e+'" class="placeholder-text"></label>')},d=function(){var c=/\n|\r|\f|\t/g,e={text:1,search:1,url:1,email:1,password:1,tel:1};return{create:function(f){var k=a.data(f,"placeHolder");if(k)return k;k=a.data(f,"placeHolder",{text:o(f)});k.box=a(f).wrap('<span class="placeholder-box placeholder-box-'+(f.nodeName||"").toLowerCase()+'" />').bind("focus.placeholder blur.placeholder",
function(p){r(this,false,false,k,p.type)}).parent();k.text.insertAfter(f).bind("mousedown.placeholder",function(){r(this,false,false,k,"focus");f.focus();return false});a.each(["Left","Top"],function(p,m){var q=(parseInt(a.curCSS(f,"padding"+m),10)||0)+Math.max(parseInt(a.curCSS(f,"margin"+m),10)||0,0)+(parseInt(a.curCSS(f,"border"+m+"Width"),10)||0);k.text.css("padding"+m,q)});var b=a.curCSS(f,"lineHeight"),h={width:a(f).width()||parseInt(a.curCSS(f,"width"),10),height:a(f).height()||parseInt(a.curCSS(f,
"height"),10)},i=a.curCSS(f,"float");k.text.css("lineHeight")!==b&&k.text.css("lineHeight",b);h.width&&h.height&&k.text.css(h);i!=="none"&&k.box.addClass("placeholder-box-"+i);return k},update:function(f,k){if(e[a.attr(f,"type")]||a.nodeName(f,"textarea")){if(a.nodeName(f,"input"))k=k.replace(c,"");var b=d.create(f);f.setAttribute("placeholder",k);b.text.text(k);r(f,false,k,b)}}}}();a.webshims.attr("placeholder",{elementNames:["input","textarea"],setter:function(c,e){d.update(c,e)},getter:function(c){return c.getAttribute("placeholder")||
""}});var j={elementNames:["input","textarea"],setter:function(c,e,f){var k=c.getAttribute("placeholder");k&&"value"in c&&r(c,e,k);f()},getter:true};a.webshims.attr("value",j);var g=a.fn.val;a.fn.val=function(c){c!==undefined&&this.each(function(){this.nodeType===1&&j.setter(this,c,a.noop)});return g.apply(this,arguments)};a.webshims.addReady(function(c){a("input[placeholder], textarea[placeholder]",c).attr("placeholder",function(e,f){return f})})}})(jQuery);
