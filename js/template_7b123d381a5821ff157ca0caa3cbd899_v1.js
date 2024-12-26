
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/smartleg/assets/js/vendors.js?16794847205002";s:6:"source";s:46:"/local/templates/smartleg/assets/js/vendors.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{6:function(t,e,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},f=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=a.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,u=0,l=[],p=n(7);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(w(r.parts[s],e))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(w(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function v(t,e){var n=f(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=f(t.insertAt.before,n);n.insertBefore(e,o)}}function b(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),v(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function w(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var s=u++;n=c||(c=m(e)),r=x.bind(null,n,s,!1),o=x.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),v(t,e),e}(e),r=A.bind(null,n,e),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),r=L.bind(null,n),o=function(){b(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}t&&d(h(t,e),e);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var f=0;f<a.parts.length;f++)a.parts[f]();delete i[a.id]}}}};var g,U=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=U(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function L(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function A(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},7:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:73:"/local/templates/smartleg/assets/js/jquery.maskedinput.js?167948577510826";s:6:"source";s:57:"/local/templates/smartleg/assets/js/jquery.maskedinput.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

var ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	chrome = /chrome/i.test(ua),
	android = /android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'9': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	},
	autoclear: true,
	dataName: "rawMaskFn",
	placeholder: '_'
};

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden") || this.get(0) !== document.activeElement) {
			return;
		}

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				} else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				}
			});
		} else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			}
			return { begin: begin, end: end };
		}
	},
	unmask: function() {
		return this.trigger("unmask");
	},
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
            lastRequiredNonMaskPos,
            len,
            oldVal;

		if (!mask && this.length > 0) {
			input = $(this[0]);
            var fn = input.data($.mask.dataName)
			return fn?fn():undefined;
		}

		settings = $.extend({
			autoclear: $.mask.autoclear,
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		}, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		mask = String(mask);

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			} else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				}
                if(i < partialPosition){
                    lastRequiredNonMaskPos = tests.length - 1;
                }
			} else {
				tests.push(null);
			}
		});

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
    				mask.split(""),
    				function(c, i) {
    					if (c != '?') {
    						return defs[c] ? getPlaceholder(i) : c;
    					}
    				}),
				defaultBuffer = buffer.join(''),
				focusText = input.val();

            function tryFireCompleted(){
                if (!settings.completed) {
                    return;
                }

                for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
                    if (tests[i] && buffer[i] === getPlaceholder(i)) {
                        return;
                    }
                }
                settings.completed.call(input);
            }

            function getPlaceholder(i){
                if(i < settings.placeholder.length)
                    return settings.placeholder.charAt(i);
                return settings.placeholder.charAt(0);
            }

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			}

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			}

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				}

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = getPlaceholder(j);
						} else {
							break;
						}

						j = seekNext(j);
					}
				}
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			}

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = getPlaceholder(pos); i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						} else {
							break;
						}
					}
				}
			}

			function androidInputEvent(e) {
				var curVal = input.val();
				var pos = input.caret();
				if (oldVal && oldVal.length && oldVal.length > curVal.length ) {
					// a deletion or backspace happened
					checkVal(true);
					while (pos.begin > 0 && !tests[pos.begin-1])
						pos.begin--;
					if (pos.begin === 0)
					{
						while (pos.begin < firstNonMaskPos && !tests[pos.begin])
							pos.begin++;
					}
					input.caret(pos.begin,pos.begin);
				} else {
					var pos2 = checkVal(true);
					var lastEnteredValue = curVal.charAt(pos.begin);
					if (pos.begin < len){
						if(!tests[pos.begin]){
							pos.begin++;
							if(tests[pos.begin].test(lastEnteredValue)){
								pos.begin++;
							}
						}else{
							if(tests[pos.begin].test(lastEnteredValue)){
								pos.begin++;
							}
						}
					}
					input.caret(pos.begin,pos.begin);
				}
				tryFireCompleted();
			}


			function blurEvent(e) {
                checkVal();

                if (input.val() != focusText)
                    input.change();
            }

			function keydownEvent(e) {
                if (input.prop("readonly")){
                    return;
                }

				var k = e.which || e.keyCode,
					pos,
					begin,
					end;
                    oldVal = input.val();
				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					}
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				} else if( k === 13 ) { // enter
					blurEvent.call(this, e);
				} else if (k === 27) { // escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				}
			}

			function keypressEvent(e) {
                if (input.prop("readonly")){
                    return;
                }

				var k = e.which || e.keyCode,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				} else if ( k && k !== 13 ) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					}

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								//Path for CSP Violation on FireFox OS 1.1
								var proxy = function() {
									$.proxy($.fn.caret,input,next)();
								};

								setTimeout(proxy,0);
							}else{
								input.caret(next);
							}
                            if(pos.begin <= lastRequiredNonMaskPos){
		                         tryFireCompleted();
                             }
						}
					}
					e.preventDefault();
				}
			}

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = getPlaceholder(i);
					}
				}
			}

			function writeBuffer() { input.val(buffer.join('')); }

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c,
					pos;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = getPlaceholder(i);
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							}
						}
						if (pos > test.length) {
							clearBuffer(i + 1, len);
							break;
						}
					} else {
                        if (buffer[i] === test.charAt(pos)) {
                            pos++;
                        }
                        if( i < partialPosition){
                            lastMatch = i;
                        }
					}
				}
				if (allow) {
					writeBuffer();
				} else if (lastMatch + 1 < partialPosition) {
					if (settings.autoclear || buffer.join('') === defaultBuffer) {
						// Invalid value. Remove it and replace it with the
						// mask, which is the default behavior.
						if(input.val()) input.val("");
						clearBuffer(0, len);
					} else {
						// Invalid value, but we opt to show the value to the
						// user and allow them to correct their mistake.
						writeBuffer();
					}
				} else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				}
				return (partialPosition ? i : firstNonMaskPos);
			}

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=getPlaceholder(i) ? c : null;
				}).join('');
			});


			input
				.one("unmask", function() {
					input
						.off(".mask")
						.removeData($.mask.dataName);
				})
				.on("focus.mask", function() {
                    if (input.prop("readonly")){
                        return;
                    }

					clearTimeout(caretTimeoutId);
					var pos;

					focusText = input.val();

					pos = checkVal();

					caretTimeoutId = setTimeout(function(){
                        if(input.get(0) !== document.activeElement){
                            return;
                        }
						writeBuffer();
						if (pos == mask.replace("?","").length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				})
				.on("blur.mask", blurEvent)
				.on("keydown.mask", keydownEvent)
				.on("keypress.mask", keypressEvent)
				.on("input.mask paste.mask", function() {
                    if (input.prop("readonly")){
                        return;
                    }

					setTimeout(function() {
						var pos=checkVal(true);
						input.caret(pos);
                        tryFireCompleted();
					}, 0);
				});
                if (chrome && android)
                {
                    input
                        .off('input.mask')
                        .on('input.mask', androidInputEvent);
                }
				checkVal(); //Perform initial check for existing values
		});
	}
});
}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:57:"/local/templates/smartleg/assets/js/app.js?16847827027359";s:6:"source";s:42:"/local/templates/smartleg/assets/js/app.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){function t(t){for(var s,o,a=t[0],r=t[1],l=t[2],u=0,f=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);for(d&&d(t);f.length;)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,a=1;a<n.length;a++){var r=n[a];0!==i[r]&&(s=!1)}s&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={0:0},c=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],r=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=r;c.push([8,1]),n()}([function(e,t){!function(e){e.fn.niceSelect=function(t){if("string"==typeof t)return"update"==t?this.each((function(){var t=e(this),s=e(this).next(".nice-select"),i=s.hasClass("open");s.length&&(s.remove(),n(t),i&&t.next().trigger("click"))})):"destroy"==t?(this.each((function(){var t=e(this),n=e(this).next(".nice-select");n.length&&(n.remove(),t.css("display",""))})),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;function n(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var n=t.next(),s=t.find("option"),i=t.find("option:selected");n.find(".current").html(i.data("display")||i.text()),s.each((function(t){var s=e(this),i=s.data("display");n.find("ul").append(e("<li></li>").attr("data-value",s.val()).attr("data-display",i||null).addClass("option"+(s.is(":selected")?" selected":"")+(s.is(":disabled")?" disabled":"")).html(s.text()))}))}this.hide(),this.each((function(){var t=e(this);t.next().hasClass("nice-select")||n(t)})),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",(function(t){var n=e(this);e(".nice-select").not(n).removeClass("open"),n.toggleClass("open"),n.hasClass("open")?(n.find(".option"),n.find(".focus").removeClass("focus"),n.find(".selected").addClass("focus")):n.focus()})),e(document).on("click.nice_select",(function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")})),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",(function(t){var n=e(this),s=n.closest(".nice-select");s.find(".selected").removeClass("selected"),n.addClass("selected");var i=n.data("display")||n.text();s.find(".current").text(i),s.prev("select").val(n.data("value")).trigger("change")})),e(document).on("keydown.nice_select",".nice-select",(function(t){var n=e(this),s=e(n.find(".focus")||n.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return n.hasClass("open")?s.trigger("click"):n.trigger("click"),!1;if(40==t.keyCode){if(n.hasClass("open")){var i=s.nextAll(".option:not(.disabled)").first();i.length>0&&(n.find(".focus").removeClass("focus"),i.addClass("focus"))}else n.trigger("click");return!1}if(38==t.keyCode){if(n.hasClass("open")){var c=s.prevAll(".option:not(.disabled)").first();c.length>0&&(n.find(".focus").removeClass("focus"),c.addClass("focus"))}else n.trigger("click");return!1}if(27==t.keyCode)n.hasClass("open")&&n.trigger("click");else if(9==t.keyCode&&n.hasClass("open"))return!1}));var s=document.createElement("a").style;return s.cssText="pointer-events:auto","auto"!==s.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery)},function(e,t){$("input").focusout((function(){""!=$(this).val()&&"+7(___)-___-____"!=$(this).val()?$(this).addClass("hasContent"):$(this).removeClass("hasContent")}))},function(e,t){ZWEBSLIDER.createSlider({element:".cardPage .sliderWrap .list",slidesToShow:1,slidesToMove:1,slidesGap:20,sliderDots:!1,controls:{prev:".cardPage .sliderWrap .btnArrow.left",next:".cardPage .sliderWrap .btnArrow.right"}})},function(e,t){var n=document.querySelectorAll(".tabNavs .tabPill"),s=document.querySelectorAll(".tabContent .tabPane"),i=document.querySelectorAll(".girlAdwantages .girl");n.forEach((function(e){e.addEventListener("click",(function(){n.forEach((function(e){e.classList.remove("active")})),e.classList.add("active");var t=e.getAttribute("data-id");s.forEach((function(e){var n=e.getAttribute("data-id");t!=n?e.classList.remove("active"):e.classList.add("active")})),i&&i.forEach((function(e){var n=e.getAttribute("data-id");t!=n?e.classList.remove("active"):e.classList.add("active")}))}))}))},function(e,t,n){var s=n(5);"string"==typeof s&&(s=[[e.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(6)(s,i);s.locals&&(e.exports=s.locals)},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2),n(3);$(document).ready((function(){$("select").niceSelect()})),window.setActive=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.length&&e.forEach((function(e){e.classList.add("active")}))},window.removeActive=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.length&&e.forEach((function(e){e.classList.remove("active")}))};var s=document.querySelectorAll(".girlAdwantages .girl .girlDot");s&&s.forEach((function(e){e.addEventListener("mouseenter",(function(){s.forEach((function(e){e.classList.remove("active")})),e.classList.add("active")})),e.addEventListener("mouseleave ",(function(){s.forEach((function(e){e.classList.remove("active")}))}))}));var i=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,c=document.querySelectorAll(".clientSettings");function o(){var e=document.querySelector(".header");(document.body.scrollTop||document.documentElement.scrollTop)>150?e.classList.add("active"):e.classList.remove("active")}i<860&&c.forEach((function(e){e.addEventListener("click",(function(){e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active")}))})),window.addEventListener("scroll",o),document.body.addEventListener("scroll",o);var a=document.querySelector(".burger"),r=document.querySelector(".headerMenu");a.addEventListener("click",(function(){a.classList.contains("active")?(a.classList.remove("active"),r.classList.remove("active")):(a.classList.add("active"),r.classList.add("active"))}));var l=document.querySelectorAll(".aboutUs .list .item .btnMore");l&&l.forEach((function(e){e.addEventListener("click",(function(){var t=e.closest(".text");t.classList.contains("active")?t.classList.remove("active"):t.classList.add("active")}))}));n(4)}]);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/local/templates/smartleg/assets/js/script.js?16794857751370";s:6:"source";s:45:"/local/templates/smartleg/assets/js/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
    $(document).on("click", "[zw-action='tab_header']", function() {
        let id = $(this).attr("zw-id");
        let tabsHeader = $(this).closest("[zw-action='tabs']").find(`[zw-action='tab_header']`);
        let currHeader = $(this).closest("[zw-action='tabs']").find(`[zw-action='tab_header'][zw-id='${id}']`);
        let tabsBody = $(this).closest("[zw-action='tabs']").find(`[zw-action='tab_body']`);
        let currBody = $(this).closest("[zw-action='tabs']").find(`[zw-action='tab_body'][zw-id='${id}']`);

        tabsBody.removeClass("active");
        tabsHeader.removeClass("active");
        currHeader.addClass("active");
        currBody.addClass("active");
    });

    $("[data-phone-mask]").mask("+7(999)-999-99-99");

	$(".video .playBtn").click(function(e) {
		e.preventDefault();

		let wrap = $(this).closest(".item");
		let src = $(this).attr("data-src");
		src = src.split("v=")[1];

		wrap.html(`<iframe height="315" src="https://www.youtube.com/embed/${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
	});

	$(".cookieAccept .btn").click(function() {
		document.cookie = `ZWSMARTLEGLK_COOKIE_ACCEPT=Y; path=/; max-age=86400`;
		$(this).closest(".cookieAccept").detach();
	});
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:80:"/local/components/zweb/zweb.authform/templates/.default/script.js?16585079393306";s:6:"source";s:65:"/local/components/zweb/zweb.authform/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function() {
    if(window.ZWAuthForm) {
        return;
    }

    window.ZWAuthForm = function(params) {
        this.MODULE = params;
        window.addEventListener("load", () => {
            this.init();
        });
    }

    window.ZWAuthForm.prototype = {
        init : function() {
            this.OBJECTS = {
                FORM : document.querySelector(`#${this.MODULE.COMPONENT_ID}_FORM`),
                EMAIL_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_EMAIL_FIELD`),
                PASSWORD_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_PASSWORD_FIELD`),
                ERROR_WRAP : document.querySelector(`#${this.MODULE.COMPONENT_ID}_ERROR_WRAP`),
            };

            if (this.OBJECTS.FORM != null) {
                this.OBJECTS.FORM.onsubmit = (e) => {
                    e.preventDefault();

                    if (this.validateForm()) {
                        let formData = new FormData(this.OBJECTS.FORM);
                        this.sendRequest(
                            this.MODULE.AJAX_URL,
                            formData,
                            (result) => {
                                if (result.status == this.MODULE.SUCCESS_STATUS) {
                                    this.clearError();
                                    location.href = this.MODULE.PERSONAL_PAGE_LINK;
                                } else {
                                    this.showError(result.message);
                                }
                            }
                        );
                    }
                }
            }
        },

        validateForm : function() {
            if (!this.OBJECTS.EMAIL_FIELD.value) {
                this.showError(BX.message("ZWAUTHFORM_EMPTY_EMAIL"));
                return false;
            }

            if (!this.OBJECTS.PASSWORD_FIELD.value) {
                this.showError(BX.message("ZWAUTHFORM_EMPTY_PASSWORD"));
                return false;
            }

            this.clearError();
            return true;
        },

        showError : function(message) {
            this.OBJECTS.ERROR_WRAP.innerHTML = `<p>${message}</p>`;
            this.OBJECTS.ERROR_WRAP.classList.add("active");
        },

        clearError : function() {
            this.OBJECTS.ERROR_WRAP.innerHTML = "";
            this.OBJECTS.ERROR_WRAP.classList.remove("active");
        },

        sendRequest : function(url, data, callBack = false) {
            let request = new XMLHttpRequest();
            data.append("COMPONENT_ID", this.MODULE.COMPONENT_ID);
            data.append("IBLOCK_ID", this.MODULE.IBLOCK_ID);
            data.append("FIELDS", JSON.stringify(this.MODULE.FIELDS));
            data.append("TEMPLATE_PATH", this.MODULE.TEMPLATE_PATH);
            data.append("SITE_ID", this.MODULE.SITE_ID);
            data.append("LID", this.MODULE.LID);

            request.open("POST", url, true);
            request.responseType = "json";
            request.send(data);
            if (callBack != false) {
                request.onload = () => {
                    callBack(request.response);
                }
            }
            request.onerror = function() {
                this.hidePreloader();
            }
        }
    };
})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:79:"/local/components/zweb/zweb.smsauth/templates/.default/script.js?16585079395501";s:6:"source";s:64:"/local/components/zweb/zweb.smsauth/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function() {
    if(window.ZWSmsAuthForm) {
        return;
    }

    window.ZWSmsAuthForm = function(params) {
        this.MODULE = params;
        window.addEventListener("load", () => {
            this.init();
        });
    }

    window.ZWSmsAuthForm.prototype = {
        init : function() {
            this.OBJECTS = {
                SEND_CODE_FORM : document.querySelector(`#${this.MODULE.COMPONENT_ID}_SEND_CODE_FORM`),
                CONFIRM_CODE_FORM : document.querySelector(`#${this.MODULE.COMPONENT_ID}_CONFIRM_CODE_FORM`),
                PHONE_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_PHONE_FIELD`),
                CODE_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_CODE_FIELD`),
                SEND_CODE_ERROR_WRAP : document.querySelector(`#${this.MODULE.COMPONENT_ID}_SEND_CODE_ERROR_WRAP`),
                CONFIRM_CODE_ERROR_WRAP : document.querySelector(`#${this.MODULE.COMPONENT_ID}_CONFIRM_CODE_ERROR_WRAP`)
            };

            if (this.OBJECTS.SEND_CODE_FORM != null) {
                this.OBJECTS.SEND_CODE_FORM.onsubmit = (e) => {
                    e.preventDefault();

                    if (this.validateForm(this.OBJECTS.SEND_CODE_FORM)) {
                        let formData = new FormData(this.OBJECTS.SEND_CODE_FORM);
                        this.sendRequest(
                            this.MODULE.AJAX_URL,
                            formData,
                            (result) => {
                                if (result.status == this.MODULE.SUCCESS_STATUS) {
                                    this.clearError(this.OBJECTS.SEND_CODE_ERROR_WRAP);
                                    this.OBJECTS.SEND_CODE_FORM.style.display = "none";
                                    this.OBJECTS.CONFIRM_CODE_FORM.style.display = "block";
                                } else {
                                    this.showError(this.OBJECTS.SEND_CODE_ERROR_WRAP, result.message);
                                }
                            }
                        );
                    }
                }
            }

            if (this.OBJECTS.CONFIRM_CODE_FORM != null) {
                this.OBJECTS.CONFIRM_CODE_FORM.onsubmit = (e) => {
                    e.preventDefault();

                    if (this.validateForm(this.OBJECTS.CONFIRM_CODE_FORM)) {
                        let formData = new FormData(this.OBJECTS.CONFIRM_CODE_FORM);
                        formData.append(`${this.MODULE.COMPONENT_ID}[PHONE]`, this.OBJECTS.PHONE_FIELD.value);

                        this.sendRequest(
                            this.MODULE.AJAX_URL,
                            formData,
                            (result) => {
                                if (result.status == this.MODULE.SUCCESS_STATUS) {
                                    this.clearError(this.OBJECTS.CONFIRM_CODE_ERROR_WRAP);
                                    location.href = this.MODULE.PERSONAL_PAGE_LINK;
                                } else {
                                    this.showError(this.OBJECTS.CONFIRM_CODE_ERROR_WRAP, result.message);
                                }
                            }
                        );
                    }
                }
            }
        },

        validateForm : function(form) {
            switch (form) {
                case this.OBJECTS.SEND_CODE_FORM:
                    if (!this.OBJECTS.PHONE_FIELD.value) {
                        this.showError(
                            this.OBJECTS.SEND_CODE_ERROR_WRAP,
                            BX.message("ZWAUTHFORM_EMPTY_PHONE")
                        );
                        return false;
                    }

                    this.clearError(this.OBJECTS.SEND_CODE_ERROR_WRAP);
                    break;
                case this.CONFIRM_CODE_FORM:
                    if (!this.OBJECTS.CODE_FIELD.value) {
                        this.showError(
                            this.OBJECTS.CONFIRM_CODE_ERROR_WRAP,
                            BX.message("ZWAUTHFORM_EMPTY_CODE")
                        );
                        return false;
                    }

                    this.clearError(this.OBJECTS.CONFIRM_CODE_ERROR_WRAP);
                    break;
            }

            return true;
        },

        showError : function(wrap, message) {
            wrap.innerHTML = `<p>${message}</p>`;
            wrap.classList.add("active");
        },

        clearError : function(wrap) {
            wrap.innerHTML = "";
            wrap.classList.remove("active");
        },

        sendRequest : function(url, data, callBack = false) {
            let request = new XMLHttpRequest();
            data.append("COMPONENT_ID", this.MODULE.COMPONENT_ID);
            data.append("IBLOCK_ID", this.MODULE.IBLOCK_ID);
            data.append("FIELDS", JSON.stringify(this.MODULE.FIELDS));
            data.append("TEMPLATE_PATH", this.MODULE.TEMPLATE_PATH);
            data.append("SITE_ID", this.MODULE.SITE_ID);
            data.append("LID", this.MODULE.LID);

            request.open("POST", url, true);
            request.responseType = "json";
            request.send(data);
            if (callBack != false) {
                request.onload = () => {
                    callBack(request.response);
                }
            }
            request.onerror = function() {
                this.hidePreloader();
            }
        }
    };
})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/local/components/zweb/zweb.resetform/templates/.default/script.js?16585079397465";s:6:"source";s:66:"/local/components/zweb/zweb.resetform/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function() {
    if(window.ZWResetForm) {
        return;
    }

    window.ZWResetForm = function(params) {
        this.MODULE = params;
        window.addEventListener("load", () => {
            this.init();
        });
    }

    window.ZWResetForm.prototype = {
        init : function() {
            this.OBJECTS = {
                RESET_FORM : document.querySelector(`#${this.MODULE.COMPONENT_ID}_RESET_FORM`),
                RESTORE_FORM : document.querySelector(`#${this.MODULE.COMPONENT_ID}_RESTORE_FORM`),
                SUCCESS_FORM : document.querySelector(`#${this.MODULE.COMPONENT_ID}_SUCCESS_FORM`),
                RESET_EMAIL_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_RESET_EMAIL_FIELD`),
                RESET_ERROR_WRAP : document.querySelector(`#${this.MODULE.COMPONENT_ID}_RESET_ERROR_WRAP`),
                RESTORE_ERROR_WRAP : document.querySelector(`#${this.MODULE.COMPONENT_ID}_RESTORE_ERROR_WRAP`),
                RESTORE_EMAIL_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_RESTORE_EMAIL_FIELD`),
                CHECKWORD_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_CHECKWORD_FIELD`),
                PASSWORD_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_PASSWORD_FIELD`),
                CONFIRM_PASSWORD_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_CONFIRM_PASSWORD_FIELD`)
            };

            if (this.OBJECTS.RESET_FORM != null) {
                this.OBJECTS.RESET_FORM.onsubmit = (e) => {
                    e.preventDefault();

                    if (this.validateForm("reset")) {
                        let formData = new FormData(this.OBJECTS.RESET_FORM);
                        this.sendRequest(
                            this.MODULE.AJAX_URL,
                            formData,
                            (result) => {
                                if (result.status == this.MODULE.SUCCESS_STATUS) {
                                    this.clearError();
                                    this.showForm("restore");
                                } else {
                                    this.showError("reset", result.message);
                                }
                            }
                        );
                    }
                }
            }

            if (this.OBJECTS.RESTORE_FORM != null) {
                this.OBJECTS.RESTORE_FORM.onsubmit = (e) => {
                    e.preventDefault();

                    if (this.validateForm("restore")) {
                        let formData = new FormData(this.OBJECTS.RESTORE_FORM);
                        this.sendRequest(
                            this.MODULE.AJAX_URL,
                            formData,
                            (result) => {
                                if (result.status == this.MODULE.SUCCESS_STATUS) {
                                    this.clearError();
                                    this.showForm("success");
                                } else {
                                    this.showError("restore", result.message);
                                }
                            }
                        );
                    }
                }
            }
        },

        validateForm : function(step) {
            let errors = [];

            switch (step) {
                case "reset":
                    if (!this.OBJECTS.RESET_EMAIL_FIELD.value) {
                        errors.push(BX.message("ZWRESETFORM_EMPTY_EMAIL"));
                    }
                    break;
                case "restore":
                    if (!this.OBJECTS.RESTORE_EMAIL_FIELD.value) {
                        errors.push(BX.message("ZWRESETFORM_EMPTY_EMAIL"));
                    }

                    if (!this.OBJECTS.CHECKWORD_FIELD.value) {
                        errors.push(BX.message("ZWRESETFORM_EMPTY_CHECKWORD"));
                    }

                    if (!this.OBJECTS.PASSWORD_FIELD.value) {
                        errors.push(BX.message("ZWRESETFORM_EMPTY_PASSWORD"));
                    }

                    if (!this.OBJECTS.CONFIRM_PASSWORD_FIELD.value) {
                        errors.push(BX.message("ZWRESETFORM_EMPTY_CONFIRM_PASSWORD"));
                    }

                    if (this.OBJECTS.CONFIRM_PASSWORD_FIELD.value != this.OBJECTS.PASSWORD_FIELD.value) {
                        errors.push(BX.message("ZWRESETFORM_INCORRECT_PASSWORDS"));
                    }
                    break;
            }

            if (errors.length) {
                this.showError(step, errors.join("<br>"));
                return false;
            } else {
                this.clearError(step);
                return true;
            }
        },

        showForm : function(step) {
            this.OBJECTS.RESET_FORM.style.display = "none";
            this.OBJECTS.RESTORE_FORM.style.display = "none";
            this.OBJECTS.SUCCESS_FORM.style.display = "none";

            switch (step) {
                case "reset":
                    this.OBJECTS.RESET_FORM.style.display = "block";
                    break;
                case "restore":
                    this.OBJECTS.RESTORE_EMAIL_FIELD.value = this.OBJECTS.RESET_EMAIL_FIELD.value;
                    this.OBJECTS.RESTORE_FORM.style.display = "block";
                    break;
                case "success":
                    this.OBJECTS.SUCCESS_FORM.style.display = "block";
                    break;
            }
        },

        showError : function(step, message) {
            switch (step) {
                case "reset":
                    this.OBJECTS.RESET_ERROR_WRAP.innerHTML = `<p>${message}</p>`;
                    this.OBJECTS.RESET_ERROR_WRAP.classList.add("active");
                    break;
                case "restore":
                    this.OBJECTS.RESTORE_ERROR_WRAP.innerHTML = `<p>${message}</p>`;
                    this.OBJECTS.RESTORE_ERROR_WRAP.classList.add("active");
                    break;
            }
        },

        clearError : function(step) {
            switch (step) {
                case "reset":
                    this.OBJECTS.RESET_ERROR_WRAP.innerHTML = "";
                    this.OBJECTS.RESET_ERROR_WRAP.classList.remove("active");
                    break;
                case "restore":
                    this.OBJECTS.RESTORE_ERROR_WRAP.innerHTML = "";
                    this.OBJECTS.RESTORE_ERROR_WRAP.classList.remove("active");
                    break;
            }
        },

        sendRequest : function(url, data, callBack = false) {
            let request = new XMLHttpRequest();
            data.append("COMPONENT_ID", this.MODULE.COMPONENT_ID);
            data.append("IBLOCK_ID", this.MODULE.IBLOCK_ID);
            data.append("FIELDS", JSON.stringify(this.MODULE.FIELDS));
            data.append("TEMPLATE_PATH", this.MODULE.TEMPLATE_PATH);
            data.append("SITE_ID", this.MODULE.SITE_ID);
            data.append("LID", this.MODULE.LID);

            request.open("POST", url, true);
            request.responseType = "json";
            request.send(data);
            if (callBack != false) {
                request.onload = () => {
                    callBack(request.response);
                }
            }
            request.onerror = function() {
                this.hidePreloader();
            }
        }
    };
})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:79:"/local/components/zweb/zweb.regform/templates/.default/script.js?16585079394653";s:6:"source";s:64:"/local/components/zweb/zweb.regform/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function() {
    if(window.ZWRegForm) {
        return;
    }

    window.ZWRegForm = function(params) {
        this.MODULE = params;
        window.addEventListener("load", () => {
            this.init();
        });
    }

    window.ZWRegForm.prototype = {
        init : function() {
            this.OBJECTS = {
                FORM :  document.querySelector(`#${this.MODULE.COMPONENT_ID}_FORM`),
                SUCCESS_FORM :  document.querySelector(`#${this.MODULE.COMPONENT_ID}_SUCCESS_FORM`),
                LAST_NAME_FIELD :  document.querySelector(`#${this.MODULE.COMPONENT_ID}_LAST_NAME_FIELD`),
                FIRST_NAME_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_FIRST_NAME_FIELD`),
                PATRONYMIC_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_PATRONYMIC_FIELD`),
                CLINIC_NAME_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_CLINIC_NAME_FIELD`),
                CLINIC_CITY_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_CLINIC_CITY_FIELD`),
                PHONE_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_PHONE_FIELD`),
                EMAIL_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_EMAIL_FIELD`),
                PASSWORD_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_PASSWORD_FIELD`),
                CONFIRM_PASSWORD_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_CONFIRM_PASSWORD_FIELD`),
                ERROR_WRAP : document.querySelector(`#${this.MODULE.COMPONENT_ID}_ERROR_WRAP`)
            };

            if (this.OBJECTS.FORM != null) {
                this.OBJECTS.FORM.onsubmit = (e) => {
                    e.preventDefault();

                    if (this.validateForm()) {
                        let formData = new FormData(this.OBJECTS.FORM);
                        this.sendRequest(
                            this.MODULE.AJAX_URL,
                            formData,
                            (result) => {
                                if (result.status == this.MODULE.SUCCESS_STATUS) {
                                    this.clearError();
                                    this.showSuccessForm();
                                } else {
                                    this.showError(result.message);
                                }
                            }
                        );
                    }
                }
            }
        },

        showSuccessForm : function() {
            this.OBJECTS.FORM.style.display = "none";
            this.OBJECTS.SUCCESS_FORM.style.display = "block";
        },

        validateForm : function() {
            let errors = [];

            Object.keys(this.OBJECTS).forEach((key) => {
                let object = this.OBJECTS[key];
                if (object != null && object.hasAttribute("data-required") && !object.value) {
                    errors.push(BX.message(`ZWREGFORM_EMPTY_${key}`));
                }
            });

            if (this.OBJECTS.CONFIRM_PASSWORD_FIELD.value != this.OBJECTS.PASSWORD_FIELD.value) {
                errors.push(BX.message("ZWREGFORM_INCORRECT_PASSWORDS"));
            }

            if (errors.length) {
                this.showError(errors.join("<br>"));
                return false;
            } else {
                this.clearError();
                return true;
            }
        },

        showError : function(message) {
            this.OBJECTS.ERROR_WRAP.innerHTML = `<p>${message}</p>`;
            this.OBJECTS.ERROR_WRAP.classList.add("active");
        },

        clearError : function() {
            this.OBJECTS.ERROR_WRAP.innerHTML = "";
            this.OBJECTS.ERROR_WRAP.classList.remove("active");
        },

        sendRequest : function(url, data, callBack = false) {
            let request = new XMLHttpRequest();
            data.append("COMPONENT_ID", this.MODULE.COMPONENT_ID);
            data.append("IBLOCK_ID", this.MODULE.IBLOCK_ID);
            data.append("FIELDS", JSON.stringify(this.MODULE.FIELDS));
            data.append("TEMPLATE_PATH", this.MODULE.TEMPLATE_PATH);
            data.append("SITE_ID", this.MODULE.SITE_ID);
            data.append("LID", this.MODULE.LID);

            request.open("POST", url, true);
            request.responseType = "json";
            request.send(data);
            if (callBack != false) {
                request.onload = () => {
                    callBack(request.response);
                }
            }
            request.onerror = function() {
                this.hidePreloader();
            }
        }
    };
})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:82:"/local/components/zweb/zweb.selectcity/templates/.default/script.js?16585079394926";s:6:"source";s:67:"/local/components/zweb/zweb.selectcity/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function() {
    if(window.ZWSelecCity) {
        return;
    }

    window.ZWSelecCity = function(params) {
        this.MODULE = params;
        this.TIMER = false;
        window.addEventListener("load", () => {
            this.init();
        });
    }

    window.ZWSelecCity.prototype = {
        init : function() {
            this.OBJECTS = {
                QUERY_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_QUERY_FIELD`),
                HIDDEN_FIELD : document.querySelector(`#${this.MODULE.COMPONENT_ID}_HIDDEN_FIELD`),
                RESULT_LIST : document.querySelector(`#${this.MODULE.COMPONENT_ID}_RESULT_LIST`),
                EDIT_BTN : document.querySelector(`#${this.MODULE.COMPONENT_ID}_EDIT_BTN`)
            };

            if (this.OBJECTS.QUERY_FIELD != null) {
                this.OBJECTS.QUERY_FIELD.oninput = () => {
                    clearTimeout(this.TIMER);

                    let query = this.OBJECTS.QUERY_FIELD.value;
                    if (query.length > 2) {
                        this.TIMER = setTimeout(() => {
                            this.sendRequest(query, (result) => {
                                this.showResult(query, result);
                            });
                        }, 500);
                    } else {
                        this.clearField();
                    }
                }
            }

            if (this.OBJECTS.EDIT_BTN != null) {
                this.OBJECTS.EDIT_BTN.onclick = (e) => {
                    e.preventDefault();
                    this.OBJECTS.EDIT_BTN.classList.remove("active");
                    this.OBJECTS.QUERY_FIELD.value = "";
                    this.OBJECTS.QUERY_FIELD.removeAttribute("readonly");
                    this.OBJECTS.HIDDEN_FIELD.value = "";

                    if (this.MODULE.EDIT_CALLBACK.length) {
                        (() => {
                            let field = this.OBJECTS.QUERY_FIELD;
                            eval(this.MODULE.EDIT_CALLBACK);
                        })();
                    }
                }
            }
        },

        showResult : function(query, list) {
            let result = [];
            if (list.suggestions.length) {
                list.suggestions.forEach((row) => {
                    let reg = new RegExp(query, "gi");
                    if (
                        row.data.street_type_full == null
                        && result.indexOf(row.data.city) == -1
                        && result.length < 5
                        && reg.exec(row.data.city)
                    ) {
                        result.push(row.data.city);
                    }
                });
            }

            let html = "";
            if (result.length) {
                result.forEach((row) => {
                    html += `<div class="item">`;
                    html += `<a onClick="ZWSELECTCITY${this.MODULE.COMPONENT_ID}.select(event, '${row}')" class="link" href='#'>${row}</a>`;
                    html += `</div>`;
                });
            } else {
                html = `<div class="text">${BX.message("ZWSELECTCITY_EMPTY_RESULT")}</div>`;
            }

            this.OBJECTS.RESULT_LIST.classList.add("active");
            this.OBJECTS.RESULT_LIST.innerHTML = html;
        },

        clearField : function() {
            this.OBJECTS.RESULT_LIST.classList.remove("active");
            this.OBJECTS.RESULT_LIST.innerHTML = "";
        },

        select : function(event, city) {
            event.preventDefault();
            if (typeof(this.OBJECTS) == "undefined") {
                this.init();
            }

            this.OBJECTS.HIDDEN_FIELD.value = city;
            this.OBJECTS.QUERY_FIELD.value = city;
            this.OBJECTS.QUERY_FIELD.setAttribute("readonly", "readonly");
            this.OBJECTS.EDIT_BTN.classList.add("active");
            this.clearField();

            if (this.MODULE.SELECT_CALLBACK.length) {
                (() => {
                    let field = this.OBJECTS.QUERY_FIELD;
                    eval(this.MODULE.SELECT_CALLBACK);
                })();
            }
        },

        sendRequest : function(query, callBack) {
            let request = new XMLHttpRequest();
            request.open("POST", this.MODULE.DADATA_URL, true);
            request.setRequestHeader("Content-Type", "application/json");
            request.setRequestHeader("Accept", "application/json");
            request.setRequestHeader("Authorization", `Token ${this.MODULE.DADATA_TOKEN}`);
            request.responseType = "json";
            request.send(JSON.stringify({
                query : query,
                locations : [{
                    city_type_full : "город"
                }]
            }));
            request.onload = () => {
                callBack(request.response);
            }
        }
    };
})();
/* End */
;; /* /local/templates/smartleg/assets/js/vendors.js?16794847205002*/
; /* /local/templates/smartleg/assets/js/jquery.maskedinput.js?167948577510826*/
; /* /local/templates/smartleg/assets/js/app.js?16847827027359*/
; /* /local/templates/smartleg/assets/js/script.js?16794857751370*/
; /* /local/components/zweb/zweb.authform/templates/.default/script.js?16585079393306*/
; /* /local/components/zweb/zweb.smsauth/templates/.default/script.js?16585079395501*/
; /* /local/components/zweb/zweb.resetform/templates/.default/script.js?16585079397465*/
; /* /local/components/zweb/zweb.regform/templates/.default/script.js?16585079394653*/
; /* /local/components/zweb/zweb.selectcity/templates/.default/script.js?16585079394926*/
