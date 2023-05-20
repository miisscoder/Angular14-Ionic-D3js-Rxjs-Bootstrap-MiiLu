"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(_){return typeof _}:function(_){return _&&"function"==typeof Symbol&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},windowIsDefined="object"===("undefined"==typeof window?"undefined":_typeof(window));!function(_){if("function"==typeof define&&define.amd)define(["jquery"],_);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var y;try{y=require("jquery")}catch(b){y=null}module.exports=_(y)}else window&&(window.Slider=_(window.jQuery))}(function(_){var E,y="slider",b="bootstrapSlider";return windowIsDefined&&!window.console&&(window.console={}),windowIsDefined&&!window.console.log&&(window.console.log=function(){}),windowIsDefined&&!window.console.warn&&(window.console.warn=function(){}),function(d){function L(){}var T=Array.prototype.slice;!function k(v){if(v){var i="undefined"==typeof console?L:function(s){console.error(s)};v.bridget=function(s,o){(function t(s){s.prototype.option||(s.prototype.option=function(o){v.isPlainObject(o)&&(this.options=v.extend(!0,this.options,o))})})(o),function e(s,o){v.fn[s]=function(n){if("string"==typeof n){for(var h=T.call(arguments,1),l=0,p=this.length;p>l;l++){var c=v.data(this[l],s);if(c)if(v.isFunction(c[n])&&"_"!==n.charAt(0)){var a=c[n].apply(c,h);if(void 0!==a&&a!==c)return a}else i("no such method '"+n+"' for "+s+" instance");else i("cannot call methods on "+s+" prior to initialization; attempted to call '"+n+"'")}return this}var r=this.map(function(){var u=v.data(this,s);return u?(u.option(n),u._init()):(u=new o(this,n),v.data(this,s,u)),v(this)});return 1===r.length?r[0]:r}}(s,o)}}}(d)}(_),function(d){function L(t,e){function i(m,z){var D="data-slider-"+z.replace(/_/g,"-"),B=m.getAttribute(D);try{return JSON.parse(B)}catch(Z){return B}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1,tickIndex:null},this.ticksCallbackMap={},this.handleCallbackMap={},"string"==typeof t?this.element=document.querySelector(t):t instanceof HTMLElement&&(this.element=t),e=e||{};for(var s=Object.keys(this.defaultOptions),o=e.hasOwnProperty("min"),n=e.hasOwnProperty("max"),h=0;h<s.length;h++){var l=s[h],p=e[l];p=null!==(p=void 0!==p?p:i(this.element,l))?p:this.defaultOptions[l],this.options||(this.options={}),this.options[l]=p}if(this.ticksAreValid=Array.isArray(this.options.ticks)&&this.options.ticks.length>0,this.ticksAreValid||(this.options.lock_to_ticks=!1),"auto"===this.options.rtl){var g=window.getComputedStyle(this.element);this.options.rtl=null!=g?"rtl"===g.direction:"rtl"===this.element.style.direction}"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.tooltip_position=this.options.rtl?"left":"right";var c,a,r,u,f,I=this.element.style.width,C=!1,M=this.element.parentNode;if(this.sliderElem)C=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var w=document.createElement("div");w.className="slider-track",(a=document.createElement("div")).className="slider-track-low",(c=document.createElement("div")).className="slider-selection",(r=document.createElement("div")).className="slider-track-high",(u=document.createElement("div")).className="slider-handle min-slider-handle",u.setAttribute("role","slider"),u.setAttribute("aria-valuemin",this.options.min),u.setAttribute("aria-valuemax",this.options.max),(f=document.createElement("div")).className="slider-handle max-slider-handle",f.setAttribute("role","slider"),f.setAttribute("aria-valuemin",this.options.min),f.setAttribute("aria-valuemax",this.options.max),w.appendChild(a),w.appendChild(c),w.appendChild(r),this.rangeHighlightElements=[];var P=this.options.rangeHighlights;if(Array.isArray(P)&&P.length>0)for(var F=0;F<P.length;F++){var R=document.createElement("div");R.className="slider-rangeHighlight slider-selection "+(P[F].class||""),this.rangeHighlightElements.push(R),w.appendChild(R)}var O=Array.isArray(this.options.labelledby);if(O&&this.options.labelledby[0]&&u.setAttribute("aria-labelledby",this.options.labelledby[0]),O&&this.options.labelledby[1]&&f.setAttribute("aria-labelledby",this.options.labelledby[1]),!O&&this.options.labelledby&&(u.setAttribute("aria-labelledby",this.options.labelledby),f.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(this.ticksContainer=document.createElement("div"),this.ticksContainer.className="slider-tick-container",h=0;h<this.options.ticks.length;h++){var x=document.createElement("div");if(x.className="slider-tick",this.options.ticks_tooltip){var Q=this._addTickListener(),U=Q.addMouseEnter(this,x,h),J=Q.addMouseLeave(this,x);this.ticksCallbackMap[h]={mouseEnter:U,mouseLeave:J}}this.ticks.push(x),this.ticksContainer.appendChild(x)}c.className+=" tick-slider-selection"}if(this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",h=0;h<this.options.ticks_labels.length;h++){var A=document.createElement("div"),Y=this.options.reversed&&0===this.options.ticks_positions.length?this.options.ticks_labels.length-(h+1):h;A.className="slider-tick-label",A.innerHTML=this.options.ticks_labels[Y],this.tickLabels.push(A),this.tickLabelContainer.appendChild(A)}var $=function(m){var z=document.createElement("div");z.className="tooltip-arrow";var D=document.createElement("div");D.className="tooltip-inner",m.appendChild(z),m.appendChild(D)},H=document.createElement("div");H.className="tooltip tooltip-main",H.setAttribute("role","presentation"),$(H);var N=document.createElement("div");N.className="tooltip tooltip-min",N.setAttribute("role","presentation"),$(N);var S=document.createElement("div");S.className="tooltip tooltip-max",S.setAttribute("role","presentation"),$(S),this.sliderElem.appendChild(w),this.sliderElem.appendChild(H),this.sliderElem.appendChild(N),this.sliderElem.appendChild(S),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),this.ticksContainer&&this.sliderElem.appendChild(this.ticksContainer),this.sliderElem.appendChild(u),this.sliderElem.appendChild(f),M.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(d&&(this.$element=d(this.element),this.$sliderElem=d(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),v[this.options.scale]&&(this.options.scale=v[this.options.scale]),!0===C&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.sliderElem,"slider-rtl"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","right","top","width","height"].forEach(function(m){this._removeProperty(this.trackLow,m),this._removeProperty(this.trackSelection,m),this._removeProperty(this.trackHigh,m)},this),[this.handle1,this.handle2].forEach(function(m){this._removeProperty(m,"left"),this._removeProperty(m,"right"),this._removeProperty(m,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(m){this._removeProperty(m,"left"),this._removeProperty(m,"right"),this._removeProperty(m,"top"),this._removeClass(m,"right"),this._removeClass(m,"left"),this._removeClass(m,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=I,this.options.orientation="horizontal",this.stylePos=this.options.rtl?"right":"left",this.mousePos="clientX",this.sizePos="offsetWidth"),this.options.rtl&&this._addClass(this.sliderElem,"slider-rtl"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(n||(this.options.max=Math.max.apply(Math,this.options.ticks)),o||(this.options.min=Math.min.apply(Math,this.options.ticks))),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this._state.value=this.options.range?[this.options.value,this.options.max]:this.options.value,this.trackLow=a||this.trackLow,this.trackSelection=c||this.trackSelection,this.trackHigh=r||this.trackHigh,"none"===this.options.selection?(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")):("after"===this.options.selection||"before"===this.options.selection)&&(this._removeClass(this.trackLow,"hide"),this._removeClass(this.trackSelection,"hide"),this._removeClass(this.trackHigh,"hide")),this.handle1=u||this.handle1,this.handle2=f||this.handle2,!0===C)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),h=0;h<this.ticks.length;h++)this._removeClass(this.ticks[h],"round triangle hide");if(-1!==["round","triangle","custom"].indexOf(this.options.handle))for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),h=0;h<this.ticks.length;h++)this._addClass(this.ticks[h],this.options.handle);if(this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.touchstart,!1),this.sliderElem.addEventListener("touchmove",this.touchmove,!1)),this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip)this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide");else if("always"===this.options.tooltip)this._showTooltip(),this._alwaysShowTooltip=!0;else{if(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.options.ticks_tooltip){var V=this._addTickListener(),j=V.addMouseEnter(this,this.handle1),q=V.addMouseLeave(this,this.handle1);this.handleCallbackMap.handle1={mouseEnter:j,mouseLeave:q},j=V.addMouseEnter(this,this.handle2),q=V.addMouseLeave(this,this.handle2),this.handleCallbackMap.handle2={mouseEnter:j,mouseLeave:q}}else this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1),this.touchCapable&&(this.sliderElem.addEventListener("touchstart",this.showTooltip,!1),this.sliderElem.addEventListener("touchmove",this.showTooltip,!1),this.sliderElem.addEventListener("touchend",this.hideTooltip,!1));this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1),this.touchCapable&&(this.handle1.addEventListener("touchstart",this.showTooltip,!1),this.handle1.addEventListener("touchmove",this.showTooltip,!1),this.handle1.addEventListener("touchend",this.hideTooltip,!1),this.handle2.addEventListener("touchstart",this.showTooltip,!1),this.handle2.addEventListener("touchmove",this.showTooltip,!1),this.handle2.addEventListener("touchend",this.hideTooltip,!1))}this.options.enabled?this.enable():this.disable()}var k=void 0,T_formatInvalidInputErrorMsg=function(t){return"Invalid input value '"+t+"' passed in"},v={linear:{getValue:function(t,e){return t<e.min?e.min:t>e.max?e.max:t},toValue:function(t){var e=t/100*(this.options.max-this.options.min),i=!0;if(this.options.ticks_positions.length>0){for(var s,o,n,h=0,l=1;l<this.options.ticks_positions.length;l++)if(t<=this.options.ticks_positions[l]){s=this.options.ticks[l-1],n=this.options.ticks_positions[l-1],o=this.options.ticks[l],h=this.options.ticks_positions[l];break}e=s+(t-n)/(h-n)*(o-s),i=!1}var c=(i?this.options.min:0)+Math.round(e/this.options.step)*this.options.step;return v.linear.getValue(c,this.options)},toPercentage:function(t){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var e,i,s,o=0,n=0;n<this.options.ticks.length;n++)if(t<=this.options.ticks[n]){e=n>0?this.options.ticks[n-1]:0,s=n>0?this.options.ticks_positions[n-1]:0,i=this.options.ticks[n],o=this.options.ticks_positions[n];break}if(n>0)return s+(t-e)/(i-e)*(o-s)}return 100*(t-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(t){var e=1-this.options.min,i=Math.log(this.options.min+e),s=Math.log(this.options.max+e),o=Math.exp(i+(s-i)*t/100)-e;return Math.round(o)===s?s:(o=this.options.min+Math.round((o-this.options.min)/this.options.step)*this.options.step,v.linear.getValue(o,this.options))},toPercentage:function(t){if(this.options.max===this.options.min)return 0;var e=1-this.options.min,i=Math.log(this.options.max+e),s=Math.log(this.options.min+e);return 100*(Math.log(t+e)-s)/(i-s)}}};(E=function(t,e){return L.call(this,t,e),this}).prototype={_init:function(){},constructor:E,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,lock_to_ticks:!1,handle:"round",reversed:!1,rtl:"auto",enabled:!0,formatter:function(t){return Array.isArray(t)?t[0]+" : "+t[1]:t},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,ticks_tooltip:!1,scale:"linear",focus:!1,tooltip_position:null,labelledby:null,rangeHighlights:[]},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(t,e,i){t||(t=0);var s=this.getValue();this._state.value=this._validateInputValue(t);var o=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=o(this._state.value[0]),this._state.value[1]=o(this._state.value[1]),this.ticksAreValid&&this.options.lock_to_ticks&&(this._state.value[0]=this.options.ticks[this._getClosestTickIndex(this._state.value[0])],this._state.value[1]=this.options.ticks[this._getClosestTickIndex(this._state.value[1])]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=o(this._state.value),this.ticksAreValid&&this.options.lock_to_ticks&&(this._state.value=this.options.ticks[this._getClosestTickIndex(this._state.value)]),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),this._state.value[1]="after"===this.options.selection?this.options.max:this.options.min),this._setTickIndex(),this._state.percentage=this.options.max>this.options.min?[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:[0,0,100],this._layout();var n=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(n),!0===e&&this._trigger("slide",n),(Array.isArray(n)?s[0]!==n[0]||s[1]!==n[1]:s!==n)&&!0===i&&this._trigger("change",{oldValue:s,newValue:n}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),d&&(this._unbindJQueryEventHandlers(),k===y&&this.$element.removeData(k),this.$element.removeData(b))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(t,e){return this._bindNonQueryEventHandler(t,e),this},off:function(t,e){d?(this.$element.off(t,e),this.$sliderElem.off(t,e)):this._unbindNonQueryEventHandler(t,e)},getAttribute:function(t){return t?this.options[t]:this.options},setAttribute:function(t,e){return this.options[t]=e,this},refresh:function(t){var e=this.getValue();return this._removeSliderEventHandlers(),L.call(this,this.element,this.options),t&&!0===t.useCurrentValue&&this.setValue(e),d&&(k===y?(d.data(this.element,y,this),d.data(this.element,b,this)):d.data(this.element,b,this)),this},relayout:function(){return this._resize(),this},_removeTooltipListener:function(t,e){this.handle1.removeEventListener(t,e,!1),this.handle2.removeEventListener(t,e,!1)},_removeSliderEventHandlers:function(){if(this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.options.ticks_tooltip){for(var t=this.ticksContainer.getElementsByClassName("slider-tick"),e=0;e<t.length;e++)t[e].removeEventListener("mouseenter",this.ticksCallbackMap[e].mouseEnter,!1),t[e].removeEventListener("mouseleave",this.ticksCallbackMap[e].mouseLeave,!1);this.handleCallbackMap.handle1&&this.handleCallbackMap.handle2&&(this.handle1.removeEventListener("mouseenter",this.handleCallbackMap.handle1.mouseEnter,!1),this.handle2.removeEventListener("mouseenter",this.handleCallbackMap.handle2.mouseEnter,!1),this.handle1.removeEventListener("mouseleave",this.handleCallbackMap.handle1.mouseLeave,!1),this.handle2.removeEventListener("mouseleave",this.handleCallbackMap.handle2.mouseLeave,!1))}this.handleCallbackMap=null,this.ticksCallbackMap=null,this.showTooltip&&this._removeTooltipListener("focus",this.showTooltip),this.hideTooltip&&this._removeTooltipListener("blur",this.hideTooltip),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),this.touchCapable&&(this.showTooltip&&(this.handle1.removeEventListener("touchstart",this.showTooltip,!1),this.handle1.removeEventListener("touchmove",this.showTooltip,!1),this.handle2.removeEventListener("touchstart",this.showTooltip,!1),this.handle2.removeEventListener("touchmove",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("touchend",this.hideTooltip,!1),this.handle2.removeEventListener("touchend",this.hideTooltip,!1)),this.showTooltip&&(this.sliderElem.removeEventListener("touchstart",this.showTooltip,!1),this.sliderElem.removeEventListener("touchmove",this.showTooltip,!1)),this.hideTooltip&&this.sliderElem.removeEventListener("touchend",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1)),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(t,e){void 0===this.eventToCallbackMap[t]&&(this.eventToCallbackMap[t]=[]),this.eventToCallbackMap[t].push(e)},_unbindNonQueryEventHandler:function(t,e){var i=this.eventToCallbackMap[t];if(void 0!==i)for(var s=0;s<i.length;s++)if(i[s]===e){i.splice(s,1);break}},_cleanUpEventCallbacksMap:function(){for(var t=Object.keys(this.eventToCallbackMap),e=0;e<t.length;e++)delete this.eventToCallbackMap[t[e]]},_showTooltip:function(){!1===this.options.tooltip_split?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){!1===this._state.inDrag&&!0!==this._alwaysShowTooltip&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_setToolTipOnMouseOver:function(t){var i=this,s=this.options.formatter(t?t.value[0]:this._state.value[0]),o=function e(n,h){return h?[100-n.percentage[0],i.options.range?100-n.percentage[1]:n.percentage[1]]:[n.percentage[0],n.percentage[1]]}(t||this._state,this.options.reversed);this._setText(this.tooltipInner,s),this.tooltip.style[this.stylePos]=o[0]+"%"},_copyState:function(){return{value:[this._state.value[0],this._state.value[1]],enabled:this._state.enabled,offset:this._state.offset,size:this._state.size,percentage:[this._state.percentage[0],this._state.percentage[1],this._state.percentage[2]],inDrag:this._state.inDrag,over:this._state.over,dragged:this._state.dragged,keyCtrl:this._state.keyCtrl}},_addTickListener:function(){return{addMouseEnter:function(t,e,i){var s=function(){var o=t._copyState(),n=e===t.handle1?o.value[0]:o.value[1],h=void 0;void 0!==i?(n=t.options.ticks[i],h=t.options.ticks_positions.length>0&&t.options.ticks_positions[i]||t._toPercentage(t.options.ticks[i])):h=t._toPercentage(n),o.value[0]=n,o.percentage[0]=h,t._setToolTipOnMouseOver(o),t._showTooltip()};return e.addEventListener("mouseenter",s,!1),s},addMouseLeave:function(t,e){var i=function(){t._hideTooltip()};return e.addEventListener("mouseleave",i,!1),i}}},_layout:function(){var t,e,u;if(this.handle1.style[this.stylePos]=(t=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]])[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),e=this.options.formatter(this._state.value[0]),isNaN(e)?this.handle1.setAttribute("aria-valuetext",e):this.handle1.removeAttribute("aria-valuetext"),this.handle2.style[this.stylePos]=t[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),e=this.options.formatter(this._state.value[1]),isNaN(e)?this.handle2.setAttribute("aria-valuetext",e):this.handle2.removeAttribute("aria-valuetext"),this.rangeHighlightElements.length>0&&Array.isArray(this.options.rangeHighlights)&&this.options.rangeHighlights.length>0)for(var i=0;i<this.options.rangeHighlights.length;i++){var s=this._toPercentage(this.options.rangeHighlights[i].start),o=this._toPercentage(this.options.rangeHighlights[i].end);if(this.options.reversed){var n=100-o;o=100-s,s=n}var h=this._createHighlightRange(s,o);h?"vertical"===this.options.orientation?(this.rangeHighlightElements[i].style.top=h.start+"%",this.rangeHighlightElements[i].style.height=h.size+"%"):(this.options.rtl?this.rangeHighlightElements[i].style.right=h.start+"%":this.rangeHighlightElements[i].style.left=h.start+"%",this.rangeHighlightElements[i].style.width=h.size+"%"):this.rangeHighlightElements[i].style.display="none"}if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var l,p="vertical"===this.options.orientation?"height":"width";l="vertical"===this.options.orientation?"marginTop":this.options.rtl?"marginRight":"marginLeft";var g=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var c=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[l]=-g/2+"px"),c=this.tickLabelContainer.offsetHeight;else for(a=0;a<this.tickLabelContainer.childNodes.length;a++)this.tickLabelContainer.childNodes[a].offsetHeight>c&&(c=this.tickLabelContainer.childNodes[a].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=c+"px")}for(var a=0;a<this.options.ticks.length;a++){var r=this.options.ticks_positions[a]||this._toPercentage(this.options.ticks[a]);this.options.reversed&&(r=100-r),this.ticks[a].style[this.stylePos]=r+"%",this._removeClass(this.ticks[a],"in-selection"),this.options.range?r>=t[0]&&r<=t[1]&&this._addClass(this.ticks[a],"in-selection"):("after"===this.options.selection&&r>=t[0]||"before"===this.options.selection&&r<=t[0])&&this._addClass(this.ticks[a],"in-selection"),this.tickLabels[a]&&(this.tickLabels[a].style[p]=g+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[a]?(this.tickLabels[a].style.position="absolute",this.tickLabels[a].style[this.stylePos]=r+"%",this.tickLabels[a].style[l]=-g/2+"px"):"vertical"===this.options.orientation&&(this.options.rtl?this.tickLabels[a].style.marginRight=this.sliderElem.offsetWidth+"px":this.tickLabels[a].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style[l]=this.sliderElem.offsetWidth/2*-1+"px"),this._removeClass(this.tickLabels[a],"label-in-selection label-is-selection"),this.options.range?r>=t[0]&&r<=t[1]&&(this._addClass(this.tickLabels[a],"label-in-selection"),(r===t[0]||t[1])&&this._addClass(this.tickLabels[a],"label-is-selection")):(("after"===this.options.selection&&r>=t[0]||"before"===this.options.selection&&r<=t[0])&&this._addClass(this.tickLabels[a],"label-in-selection"),r===t[0]&&this._addClass(this.tickLabels[a],"label-is-selection")))}}if(this.options.range){u=this.options.formatter(this._state.value),this._setText(this.tooltipInner,u),this.tooltip.style[this.stylePos]=(t[1]+t[0])/2+"%";var f=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,f);var I=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,I),this.tooltip_min.style[this.stylePos]=t[0]+"%",this.tooltip_max.style[this.stylePos]=t[1]+"%"}else u=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,u),this.tooltip.style[this.stylePos]=t[0]+"%";if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(t[0],t[1])+"%",this.trackSelection.style.top=Math.min(t[0],t[1])+"%",this.trackSelection.style.height=Math.abs(t[0]-t[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(t[0],t[1])-Math.abs(t[0]-t[1])+"%";else{"right"===this.stylePos?this.trackLow.style.right="0":this.trackLow.style.left="0",this.trackLow.style.width=Math.min(t[0],t[1])+"%","right"===this.stylePos?this.trackSelection.style.right=Math.min(t[0],t[1])+"%":this.trackSelection.style.left=Math.min(t[0],t[1])+"%",this.trackSelection.style.width=Math.abs(t[0]-t[1])+"%","right"===this.stylePos?this.trackHigh.style.left="0":this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(t[0],t[1])-Math.abs(t[0]-t[1])+"%";var C=this.tooltip_min.getBoundingClientRect(),M=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?C.right>M.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):C.right>M.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_createHighlightRange:function(t,e){return this._isHighlightRange(t,e)?t>e?{start:e,size:t-e}:{start:t,size:e-t}:null},_isHighlightRange:function(t,e){return t>=0&&100>=t&&e>=0&&100>=e},_resize:function(t){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(t,e){t.style.removeProperty?t.style.removeProperty(e):t.style.removeAttribute(e)},_mousedown:function(t){if(!this._state.enabled)return!1;t.preventDefault&&t.preventDefault(),this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var e=this._getPercentage(t);if(this.options.range){var i=Math.abs(this._state.percentage[0]-e),s=Math.abs(this._state.percentage[1]-e);this._state.dragged=s>i?0:1,this._adjustPercentageForRangeSliders(e)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=e,this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var o=this._calculateValue();return this._trigger("slideStart",o),this.setValue(o,!1,!0),t.returnValue=!1,this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(t){this._mousedown(t)},_triggerFocusOnHandle:function(t){0===t&&this.handle1.focus(),1===t&&this.handle2.focus()},_keydown:function(t,e){if(!this._state.enabled)return!1;var i;switch(e.keyCode){case 37:case 40:i=-1;break;case 39:case 38:i=1}if(i){if(this.options.natural_arrow_keys){var h=this.options.reversed;"horizontal"===this.options.orientation?this.options.rtl?h||(i=-i):h&&(i=-i):"vertical"===this.options.orientation&&(h||(i=-i))}var l;if(this.ticksAreValid&&this.options.lock_to_ticks){var p=void 0;-1===(p=this.options.ticks.indexOf(this._state.value[t]))&&(p=0,window.console.warn("(lock_to_ticks) _keydown: index should not be -1")),p+=i,p=Math.max(0,Math.min(this.options.ticks.length-1,p)),l=this.options.ticks[p]}else l=this._state.value[t]+i*this.options.step;var g=this._toPercentage(l);if(this._state.keyCtrl=t,this.options.range){this._adjustPercentageForRangeSliders(g);var a=this._state.keyCtrl?l:this._state.value[1];l=[Math.max(this.options.min,Math.min(this.options.max,this._state.keyCtrl?this._state.value[0]:l)),Math.max(this.options.min,Math.min(this.options.max,a))]}else l=Math.max(this.options.min,Math.min(this.options.max,l));return this._trigger("slideStart",l),this.setValue(l,!0,!0),this._trigger("slideStop",l),this._pauseEvent(e),delete this._state.keyCtrl,!1}},_pauseEvent:function(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1},_mousemove:function(t){if(!this._state.enabled)return!1;var e=this._getPercentage(t);this._adjustPercentageForRangeSliders(e),this._state.percentage[this._state.dragged]=e;var i=this._calculateValue(!0);return this.setValue(i,!0,!0),!1},_touchmove:function(t){void 0!==t.changedTouches&&t.preventDefault&&t.preventDefault()},_adjustPercentageForRangeSliders:function(t){if(this.options.range){var e=this._getNumDigitsAfterDecimalPlace(t),i=this._applyToFixedAndParseFloat(t,e=e?e-1:0);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],e)<i?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],e)>i?(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0):0===this._state.keyCtrl&&this._toPercentage(this._state.value[1])<t?(this._state.percentage[0]=this._state.percentage[1],this._state.keyCtrl=1,this.handle2.focus()):1===this._state.keyCtrl&&this._toPercentage(this._state.value[0])>t&&(this._state.percentage[1]=this._state.percentage[0],this._state.keyCtrl=0,this.handle1.focus())}},_mouseup:function(t){if(!this._state.enabled)return!1;var e=this._getPercentage(t);this._adjustPercentageForRangeSliders(e),this._state.percentage[this._state.dragged]=e,this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,!1===this._state.over&&this._hideTooltip();var i=this._calculateValue(!0);return this.setValue(i,!1,!0),this._trigger("slideStop",i),this._state.dragged=null,!1},_setValues:function(t,e){this._state.percentage[t]!==(0===t?0:100)&&(e.data[t]=this._toValue(this._state.percentage[t]),e.data[t]=this._applyPrecision(e.data[t]))},_calculateValue:function(t){var e={};return this.options.range?(e.data=[this.options.min,this.options.max],this._setValues(0,e),this._setValues(1,e),t&&(e.data[0]=this._snapToClosestTick(e.data[0]),e.data[1]=this._snapToClosestTick(e.data[1]))):(e.data=this._toValue(this._state.percentage[0]),e.data=parseFloat(e.data),e.data=this._applyPrecision(e.data),t&&(e.data=this._snapToClosestTick(e.data))),e.data},_snapToClosestTick:function(t){for(var e=[t,1/0],i=0;i<this.options.ticks.length;i++){var s=Math.abs(this.options.ticks[i]-t);s<=e[1]&&(e=[this.options.ticks[i],s])}return e[1]<=this.options.ticks_snap_bounds?e[0]:t},_applyPrecision:function(t){var e=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(t,e)},_getNumDigitsAfterDecimalPlace:function(t){var e=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0},_applyToFixedAndParseFloat:function(t,e){var i=t.toFixed(e);return parseFloat(i)},_getPercentage:function(t){!this.touchCapable||"touchstart"!==t.type&&"touchmove"!==t.type&&"touchend"!==t.type||(t=t.changedTouches[0]);var s=t[this.mousePos]-this._state.offset[this.stylePos];"right"===this.stylePos&&(s=-s);var o=s/this._state.size*100;return o=Math.round(o/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(o=100-o),Math.max(0,Math.min(100,o))},_validateInputValue:function(t){if(isNaN(+t)){if(Array.isArray(t))return this._validateArray(t),t;throw new Error(T_formatInvalidInputErrorMsg(t))}return+t},_validateArray:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("number"!=typeof i)throw new Error(T_formatInvalidInputErrorMsg(i))}},_setDataVal:function(t){this.element.setAttribute("data-value",t),this.element.setAttribute("value",t),this.element.value=t},_trigger:function(t,e){e=e||0===e?e:void 0;var i=this.eventToCallbackMap[t];if(i&&i.length)for(var s=0;s<i.length;s++)(0,i[s])(e);d&&this._triggerJQueryEvent(t,e)},_triggerJQueryEvent:function(t,e){var i={type:t,value:e};this.$element.trigger(i),this.$sliderElem.trigger(i)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(t,e){void 0!==t.textContent?t.textContent=e:void 0!==t.innerText&&(t.innerText=e)},_removeClass:function(t,e){for(var i=e.split(" "),s=t.className,o=0;o<i.length;o++){var h=new RegExp("(?:\\s|^)"+i[o]+"(?:\\s|$)");s=s.replace(h," ")}t.className=s.trim()},_addClass:function(t,e){for(var i=e.split(" "),s=t.className,o=0;o<i.length;o++){var n=i[o];new RegExp("(?:\\s|^)"+n+"(?:\\s|$)").test(s)||(s+=" "+n)}t.className=s.trim()},_offsetLeft:function(t){return t.getBoundingClientRect().left},_offsetRight:function(t){return t.getBoundingClientRect().right},_offsetTop:function(t){for(var e=t.offsetTop;(t=t.offsetParent)&&!isNaN(t.offsetTop);)e+=t.offsetTop,"BODY"!==t.tagName&&(e-=t.scrollTop);return e},_offset:function(t){return{left:this._offsetLeft(t),right:this._offsetRight(t),top:this._offsetTop(t)}},_css:function(t,e,i){if(d)d.style(t,e,i);else{var s=e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(o,n){return n.toUpperCase()});t.style[s]=i}},_toValue:function(t){return this.options.scale.toValue.apply(this,[t])},_toPercentage:function(t){return this.options.scale.toPercentage.apply(this,[t])},_setTooltipPosition:function(){var t=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var e,i="left"===(e=this.options.tooltip_position?this.options.tooltip_position:this.options.rtl?"left":"right")?"right":"left";t.forEach(function(s){this._addClass(s,e),s.style[i]="100%"}.bind(this))}else t.forEach("bottom"===this.options.tooltip_position?function(s){this._addClass(s,"bottom"),s.style.top="22px"}.bind(this):function(s){this._addClass(s,"top"),s.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))},_getClosestTickIndex:function(t){for(var e=Math.abs(t-this.options.ticks[0]),i=0,s=0;s<this.options.ticks.length;++s){var o=Math.abs(t-this.options.ticks[s]);e>o&&(e=o,i=s)}return i},_setTickIndex:function(){this.ticksAreValid&&(this._state.tickIndex=[this.options.ticks.indexOf(this._state.value[0]),this.options.ticks.indexOf(this._state.value[1])])}},d&&d.fn&&(d.fn.slider?(windowIsDefined&&window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."),k=b):(d.bridget(y,E),k=y),d.bridget(b,E),d(function(){d("input[data-provide=slider]")[k]()}))}(_),E});