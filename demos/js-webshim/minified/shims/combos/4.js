(function(e){"use strict";var t=window.Modernizr,n=e.webshims,r=n.bugs,i=e('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input required="" name="a" /></form>'),s=function(){if(i[0].querySelector)try{r.findRequired=!i[0].querySelector("select:required")}catch(e){r.findRequired=!1}},o=e("input",i).eq(0),u=function(e){n.loader.loadList(["dom-extend"]),n.ready("dom-extend",e)};r.findRequired=!1,r.validationMessage=!1,n.capturingEventPrevented=function(t){if(!t._isPolyfilled){var n=t.isDefaultPrevented,r=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),r.apply(this,arguments)},t.isDefaultPrevented=function(){return!!(n.apply(this,arguments)||e.data(t.target,t.type+"DefaultPrevented")||!1)},t._isPolyfilled=!0}};if(!t.formvalidation||r.bustedValidity){s();return}n.capturingEvents(["input"]),n.capturingEvents(["invalid"],!0);if(window.opera||window.testGoodWithFix)i.appendTo("head"),s(),r.validationMessage=!o.prop("validationMessage"),n.reTest(["form-native-extend","form-message"]),i.remove(),e(function(){u(function(){var t=function(e){e.preventDefault()};["form","input","textarea","select"].forEach(function(r){var i=n.defineNodeNameProperty(r,"checkValidity",{prop:{value:function(){n.fromSubmit||e(this).on("invalid.checkvalidity",t),n.fromCheckValidity=!0;var r=i.prop._supvalue.apply(this,arguments);return n.fromSubmit||e(this).unbind("invalid.checkvalidity",t),n.fromCheckValidity=!1,r}}})})})});e.browser.webkit&&!n.bugs.bustedValidity&&function(){var t=/^(?:textarea|input)$/i,n=!1;document.addEventListener("contextmenu",function(e){t.test(e.target.nodeName||"")&&(n=e.target.form)&&setTimeout(function(){n=!1},1)},!1),e(window).on("invalid",function(e){e.originalEvent&&n&&n==e.target.form&&(e.wrongWebkitInvalid=!0,e.stopImmediatePropagation())})}()})(jQuery),jQuery.webshims.register("form-core",function(e,t,n,r,i,s){"use strict";var o={checkbox:1,radio:1},u=e([]),a=t.bugs,f={radio:1},l=function(t){t=e(t);var n,i,s=u;return f[t[0].type]&&(i=t.prop("form"),n=t[0].name,n?i?s=e(i[n]):s=e(r.getElementsByName(n)).filter(function(){return!e.prop(this,"form")}):s=t,s=s.filter('[type="radio"]')),s},c=t.getContentValidationMessage=function(t,n,r){var i=e(t).data("errormessage")||t.getAttribute("x-moz-errormessage")||"";return r&&i[r]&&(i=i[r]),typeof i=="object"&&(n=n||e.prop(t,"validity")||{valid:1},n.valid||e.each(n,function(e,t){if(t&&e!="valid"&&i[e])return i=i[e],!1})),typeof i=="object"&&(i=i.defaultMessage),i||""},h={number:1,range:1,date:1},p=function(t){var n=!1;return e(e.prop(t,"elements")).each(function(){n=e(this).is(":invalid");if(n)return!1}),n};e.extend(e.expr[":"],{"valid-element":function(t){return e.nodeName(t,"form")?!p(t):!!e.prop(t,"willValidate")&&!!v(t)},"invalid-element":function(t){return e.nodeName(t,"form")?p(t):!!e.prop(t,"willValidate")&&!v(t)},"required-element":function(t){return!!e.prop(t,"willValidate")&&!!e.prop(t,"required")},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).hasClass("user-error")},"optional-element":function(t){return!!e.prop(t,"willValidate")&&e.prop(t,"required")===!1},"in-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!!(n&&!n.rangeOverflow&&!n.rangeUnderflow)},"out-of-range":function(t){if(!h[e.prop(t,"type")]||!e.prop(t,"willValidate"))return!1;var n=e.prop(t,"validity");return!(!n||!n.rangeOverflow&&!n.rangeUnderflow)}}),["valid","invalid","required","optional"].forEach(function(t){e.expr[":"][t]=e.expr.filters[t+"-element"]}),e.expr[":"].focus=function(e){try{var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())}catch(n){}return!1},e.browser.webkit&&!t.bugs.bustedValidity&&function(){var n=function(){var e;(e=this.validity)&&!e.customError&&this.setCustomValidity("")};t.addReady(function(t,i){t!==r&&e('input[type="radio"]:invalid',t).add(i.filter('input[type="radio"]:invalid')).each(n)})}();var d=e.event.customEvent||{},v=function(t){return(e.prop(t,"validity")||{valid:1}).valid};(a.bustedValidity||a.findRequired)&&function(){var t=e.find,n=e.find.matchesSelector,i=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,s=function(e){return e+"-element"};e.find=function(){var e=Array.prototype.slice,n=function(n){var r=arguments;return r=e.call(r,1,r.length),r.unshift(n.replace(i,s)),t.apply(this,r)};for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",r.documentElement))e.find.matchesSelector=function(e,t){return t=t.replace(i,s),n.call(this,e,t)}}();var m=e.prop,g={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};e.prop=function(t,n,r){var s=m.apply(this,arguments);return t&&"form"in t&&g[n]&&r!==i&&e(t).hasClass(w)&&v(t)&&(e(t).getShadowElement().removeClass(E),n=="checked"&&r&&l(t).not(t).removeClass(E).removeAttr("aria-invalid")),s};var y=function(t,n){var r;return e.each(t,function(t,i){if(i)return r=t=="customError"?e.prop(n,"validationMessage"):t,!1}),r},b=function(e){var t;try{t=r.activeElement.name===e}catch(n){}return t},w="user-error",E="user-error form-ui-invalid",S="user-success",x="user-success form-ui-valid",T=function(t){var n,r;if(!t.target)return;n=e(t.target).getNativeElement()[0];if(n.type=="submit"||!e.prop(n,"willValidate"))return;r=e.data(n,"webshimsswitchvalidityclass");var i=function(){if(t.type=="focusout"&&n.type=="radio"&&b(n.name))return;var r=e.prop(n,"validity"),i=e(n).getShadowElement(),s,u,a,f,c;e(n).trigger("refreshCustomValidityRules"),r.valid?i.hasClass(S)||(s=x,u=E,f="changedvaliditystate",a="changedvalid",o[n.type]&&n.checked&&l(n).not(n).removeClass(u).addClass(s).removeAttr("aria-invalid"),e.removeData(n,"webshimsinvalidcause")):(c=y(r,n),e.data(n,"webshimsinvalidcause")!=c&&(e.data(n,"webshimsinvalidcause",c),f="changedvaliditystate"),i.hasClass(w)||(s=E,u=x,o[n.type]&&!n.checked&&l(n).not(n).removeClass(u).addClass(s),a="changedinvalid")),s&&(i.addClass(s).removeClass(u),setTimeout(function(){e(n).trigger(a)},0)),f&&setTimeout(function(){e(n).trigger(f)},0),e.removeData(t.target,"webshimsswitchvalidityclass")};r&&clearTimeout(r),t.type=="refreshvalidityui"?i():e.data(n,"webshimsswitchvalidityclass",setTimeout(i,9))};e(r).on(s.validityUIEvents||"focusout change refreshvalidityui",T),d.changedvaliditystate=!0,d.refreshCustomValidityRules=!0,d.changedvalid=!0,d.changedinvalid=!0,d.refreshvalidityui=!0,t.triggerInlineForm=function(t,n){e(t).trigger(n)},t.modules["form-core"].getGroupElements=l;var N=function(){t.scrollRoot=e.browser.webkit||r.compatMode=="BackCompat"?e(r.body):e(r.documentElement)};N(),t.ready("DOM",N),t.getRelOffset=function(t,n){t=e(t);var r=e(n).offset(),i;return e.swap(e(t)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){i=t.offset()}),r.top-=i.top,r.left-=i.left,r},t.validityAlert=function(){var i=!e.browser.msie||parseInt(e.browser.version,10)>7?"span":"label",s,o=!1,u=!1,a=!1,f,l={hideDelay:5e3,showFor:function(t,r,i,s){l._create(),t=e(t);var u=e(t).getShadowElement(),c=l.getOffsetFromBody(u);l.clear(),s?this.hide():(this.getMessage(t,r),this.position(u,c),this.show(),this.hideDelay&&(o=setTimeout(f,this.hideDelay)),e(n).on("resize.validityalert reposoverlay.validityalert",function(){clearTimeout(a),a=setTimeout(function(){l.position(u)},9)})),i||this.setFocus(u,c)},getOffsetFromBody:function(e){return t.getRelOffset(s,e)},setFocus:function(o,u){var a=e(o).getShadowFocusElement(),l=t.scrollRoot.scrollTop(),c=(u||a.offset()).top-30,h;t.getID&&i=="label"&&s.attr("for",t.getID(a)),l>c&&(t.scrollRoot.animate({scrollTop:c-5},{queue:!1,duration:Math.max(Math.min(600,(l-c)*1.5),80)}),h=!0);try{a[0].focus()}catch(p){}h&&(t.scrollRoot.scrollTop(l),setTimeout(function(){t.scrollRoot.scrollTop(l)},0)),setTimeout(function(){e(r).on("focusout.validityalert",f)},10),e(n).triggerHandler("reposoverlay")},getMessage:function(t,n){n||(n=c(t[0])||t.prop("customValidationMessage")||t.prop("validationMessage")),n?e("span.va-box",s).text(n):this.hide()},position:function(t,n){n=n?e.extend({},n):l.getOffsetFromBody(t),n.top+=t.outerHeight(),s.css(n)},show:function(){s.css("display")==="none"&&s.css({opacity:0}).show(),s.addClass("va-visible").fadeTo(400,1)},hide:function(){s.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(u),clearTimeout(o),e(r).unbind(".validityalert"),e(n).unbind(".validityalert"),s.stop().removeAttr("for")},_create:function(){if(s)return;s=l.errorBubble=e("<"+i+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+i+">").css({position:"absolute",display:"none"}),t.ready("DOM",function(){s.appendTo("body"),e.fn.bgIframe&&e.browser.msie&&parseInt(e.browser.version,10)<7&&s.bgIframe()})}};return f=e.proxy(l,"hide"),l}(),function(){var t,n=[],i,s;e(r).on("invalid",function(s){if(s.wrongWebkitInvalid)return;var o=e(s.target),u=o.getShadowElement();u.hasClass(w)||(u.addClass(E).removeClass(x),setTimeout(function(){e(s.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!t){t=e.Event("firstinvalid"),t.isInvalidUIPrevented=s.isDefaultPrevented;var a=e.Event("firstinvalidsystem");e(r).triggerHandler(a,{element:s.target,form:s.target.form,isInvalidUIPrevented:s.isDefaultPrevented}),o.trigger(t)}t&&t.isDefaultPrevented()&&s.preventDefault(),n.push(s.target),s.extraData="fix",clearTimeout(i),i=setTimeout(function(){var r={type:"lastinvalid",cancelable:!1,invalidlist:e(n)};t=!1,n=[],e(s.target).trigger(r,r)},9),o=null,u=null})}(),e.fn.getErrorMessage=function(){var t="",n=this[0];return n&&(t=c(n)||e.prop(n,"customValidationMessage")||e.prop(n,"validationMessage")),t},s.replaceValidationUI&&t.ready("DOM forms",function(){e(r).on("firstinvalid",function(t){t.isInvalidUIPrevented()||(t.preventDefault(),e.webshims.validityAlert.showFor(t.target))})})}),jQuery.webshims.register("form-message",function(e,t,n,r,i,s){"use strict";var o=t.validityMessages,u=s.overrideMessages||s.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{email:"Please enter an email address.",url:"Please enter a URL.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),["select","radio"].forEach(function(e){o.en.valueMissing[e]="Please select an option."}),["date","time","datetime-local"].forEach(function(e){o.en.rangeUnderflow[e]="Value must be at or after {%min}."}),["date","time","datetime-local"].forEach(function(e){o.en.rangeOverflow[e]="Value must be at or before {%max}."}),o["en-US"]=o["en-US"]||o.en,o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{email:"{%value} ist keine zul\u00e4ssige E-Mail-Adresse",url:"{%value} ist keine zul\u00e4ssige Webadresse",number:"{%value} ist keine Nummer!",date:"{%value} ist kein Datum",time:"{%value} ist keine Uhrzeit",range:"{%value} ist keine Nummer!","datetime-local":"{%value} ist kein Datum-Uhrzeit Format."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\u00f6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\u00f6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\u00e4ssig. Hier sind nur bestimmte Werte zul\u00e4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",patternMismatch:"{%value} hat f\u00fcr dieses Eingabefeld ein falsches Format! {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein",checkbox:"Bitte aktivieren Sie das K\u00e4stchen"}},o.de||{}),["select","radio"].forEach(function(e){o.de.valueMissing[e]="Bitte w\u00e4hlen Sie eine Option aus"}),["date","time","datetime-local"].forEach(function(e){o.de.rangeUnderflow[e]="{%value} ist zu fr\u00fch. {%min} ist die fr\u00fcheste Zeit, die Sie benutzen k\u00f6nnen."}),["date","time","datetime-local"].forEach(function(e){o.de.rangeOverflow[e]="{%value} ist zu sp\u00e4t. {%max} ist die sp\u00e4teste Zeit, die Sie benutzen k\u00f6nnen."});var a=o[""];t.createValidationMessage=function(n,r){var i=a[r];return i&&typeof i!="string"&&(i=i[e.prop(n,"type")]||i[(n.nodeName||"").toLowerCase()]||i.defaultMessage),i&&["value","min","max","title","maxlength","label"].forEach(function(s){if(i.indexOf("{%"+s)===-1)return;var o=(s=="label"?e.trim(e('label[for="'+n.id+'"]',n.form).text()).replace(/\*$|:$/,""):e.attr(n,s))||"";r=="patternMismatch"&&s=="title"&&!o&&t.error("no title for patternMismatch provided. Always add a title attribute."),i=i.replace("{%"+s+"}",o),"value"==s&&(i=i.replace("{%valueLen}",o.length))}),i||""},(t.bugs.validationMessage||!Modernizr.formvalidation||t.bugs.bustedValidity)&&u.push("validationMessage"),t.activeLang({langObj:o,module:"form-core",callback:function(e){a=e}}),u.forEach(function(n){t.defineNodeNamesProperty(["fieldset","output","button"],n,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(r){var i=t.defineNodeNameProperty(r,n,{prop:{get:function(){var n=this,r="";if(!e.prop(n,"willValidate"))return r;var s=e.prop(n,"validity")||{valid:1};if(s.valid)return r;r=t.getContentValidationMessage(n,s);if(r)return r;if(s.customError&&n.nodeName){r=Modernizr.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(n):t.data(n,"customvalidationMessage");if(r)return r}return e.each(s,function(e,i){if(e=="valid"||!i)return;r=t.createValidationMessage(n,e);if(r)return!1}),r||""},writeable:!1}})})})});