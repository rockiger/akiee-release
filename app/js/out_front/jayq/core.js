// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
jayq.core.crate_meta = (function jayq$core$crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function jayq$core$__GT_selector(sel){
if(typeof sel === 'string'){
return sel;
} else {
if(cljs.core.fn_QMARK_.call(null,sel)){
var temp__4655__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__4655__auto__)){
var cm = temp__4655__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("[crateGroup="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cm),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
} else {
return sel;
}
} else {
if((sel instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,sel);
} else {
return sel;

}
}
}
});
jayq.core.$ = (function jayq$core$$(var_args){
var args16519 = [];
var len__7937__auto___16522 = arguments.length;
var i__7938__auto___16523 = (0);
while(true){
if((i__7938__auto___16523 < len__7937__auto___16522)){
args16519.push((arguments[i__7938__auto___16523]));

var G__16524 = (i__7938__auto___16523 + (1));
i__7938__auto___16523 = G__16524;
continue;
} else {
}
break;
}

var G__16521 = args16519.length;
switch (G__16521) {
case 1:
return jayq.core.$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16519.length)].join('')));

}
});

jayq.core.$.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return jQuery(jayq.core.__GT_selector.call(null,sel));
});

jayq.core.$.cljs$core$IFn$_invoke$arity$2 = (function (sel,context){
return jQuery(jayq.core.__GT_selector.call(null,sel),context);
});

jayq.core.$.cljs$lang$maxFixedArity = 2;

jQuery.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core.truth_(this$__$1.get((0)))){
return this$__$1;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ISeq$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.get((0));
});

jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) > (1))){
return this$__$1.slice((1));
} else {
return cljs.core.List.EMPTY;
}
});

jQuery.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.length;
});

jQuery.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
return null;
}
});

jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var this$__$1 = this;
if((n < cljs.core.count.call(null,this$__$1))){
return this$__$1.slice(n,(n + (1)));
} else {
if((void 0 === not_found)){
return null;
} else {
return not_found;
}
}
});

jQuery.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
var or__6824__auto__ = this$__$1.slice(k,(k + (1)));
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return null;
}
});

jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,k,not_found);
});

jQuery.prototype.cljs$core$IReduce$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f);
});

jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
var this$__$1 = this;
return cljs.core.ci_reduce.call(null,this$__$1,f,start);
});

jQuery.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.prototype.call = (function() {
var G__16527 = null;
var G__16527__2 = (function (self__,k){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__16527__3 = (function (self__,k,not_found){
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__16527 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__16527__2.call(this,self__,k);
case 3:
return G__16527__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16527.cljs$core$IFn$_invoke$arity$2 = G__16527__2;
G__16527.cljs$core$IFn$_invoke$arity$3 = G__16527__3;
return G__16527;
})()
;

jQuery.prototype.apply = (function (self__,args16526){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args16526)));
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

jQuery.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});
jayq.core.anim = (function jayq$core$anim(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16535 = arguments.length;
var i__7938__auto___16536 = (0);
while(true){
if((i__7938__auto___16536 < len__7937__auto___16535)){
args__7944__auto__.push((arguments[i__7938__auto___16536]));

var G__16537 = (i__7938__auto___16536 + (1));
i__7938__auto___16536 = G__16537;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((2) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((2)),(0),null)):null);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7945__auto__);
});

jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,props,p__16531){
var vec__16532 = p__16531;
var speed = cljs.core.nth.call(null,vec__16532,(0),null);
var on_finish = cljs.core.nth.call(null,vec__16532,(1),null);
return $elem.animate(cljs.core.clj__GT_js.call(null,props),speed,on_finish);
});

jayq.core.anim.cljs$lang$maxFixedArity = (2);

jayq.core.anim.cljs$lang$applyTo = (function (seq16528){
var G__16529 = cljs.core.first.call(null,seq16528);
var seq16528__$1 = cljs.core.next.call(null,seq16528);
var G__16530 = cljs.core.first.call(null,seq16528__$1);
var seq16528__$2 = cljs.core.next.call(null,seq16528__$1);
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(G__16529,G__16530,seq16528__$2);
});

jayq.core.text = (function jayq$core$text(var_args){
var args16538 = [];
var len__7937__auto___16541 = arguments.length;
var i__7938__auto___16542 = (0);
while(true){
if((i__7938__auto___16542 < len__7937__auto___16541)){
args16538.push((arguments[i__7938__auto___16542]));

var G__16543 = (i__7938__auto___16542 + (1));
i__7938__auto___16542 = G__16543;
continue;
} else {
}
break;
}

var G__16540 = args16538.length;
switch (G__16540) {
case 1:
return jayq.core.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16538.length)].join('')));

}
});

jayq.core.text.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.text();
});

jayq.core.text.cljs$core$IFn$_invoke$arity$2 = (function ($elem,txt){
return $elem.text(txt);
});

jayq.core.text.cljs$lang$maxFixedArity = 2;

jayq.core.css = (function jayq$core$css(var_args){
var args16545 = [];
var len__7937__auto___16548 = arguments.length;
var i__7938__auto___16549 = (0);
while(true){
if((i__7938__auto___16549 < len__7937__auto___16548)){
args16545.push((arguments[i__7938__auto___16549]));

var G__16550 = (i__7938__auto___16549 + (1));
i__7938__auto___16549 = G__16550;
continue;
} else {
}
break;
}

var G__16547 = args16545.length;
switch (G__16547) {
case 2:
return jayq.core.css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16545.length)].join('')));

}
});

jayq.core.css.cljs$core$IFn$_invoke$arity$2 = (function ($elem,opts){
return $elem.css(cljs.core.clj__GT_js.call(null,opts));
});

jayq.core.css.cljs$core$IFn$_invoke$arity$3 = (function ($elem,p,v){
return $elem.css(cljs.core.name.call(null,p),v);
});

jayq.core.css.cljs$lang$maxFixedArity = 3;

jayq.core.attr = (function jayq$core$attr(var_args){
var args16552 = [];
var len__7937__auto___16555 = arguments.length;
var i__7938__auto___16556 = (0);
while(true){
if((i__7938__auto___16556 < len__7937__auto___16555)){
args16552.push((arguments[i__7938__auto___16556]));

var G__16557 = (i__7938__auto___16556 + (1));
i__7938__auto___16556 = G__16557;
continue;
} else {
}
break;
}

var G__16554 = args16552.length;
switch (G__16554) {
case 3:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16552.length)].join('')));

}
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.attr(cljs.core.name.call(null,n),v);
});

jayq.core.attr.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.attr(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.attr.cljs$lang$maxFixedArity = 3;

jayq.core.prop = (function jayq$core$prop(var_args){
var args16559 = [];
var len__7937__auto___16562 = arguments.length;
var i__7938__auto___16563 = (0);
while(true){
if((i__7938__auto___16563 < len__7937__auto___16562)){
args16559.push((arguments[i__7938__auto___16563]));

var G__16564 = (i__7938__auto___16563 + (1));
i__7938__auto___16563 = G__16564;
continue;
} else {
}
break;
}

var G__16561 = args16559.length;
switch (G__16561) {
case 3:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16559.length)].join('')));

}
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$3 = (function ($elem,n,v){
return $elem.prop(cljs.core.name.call(null,n),v);
});

jayq.core.prop.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.prop(cljs.core.clj__GT_js.call(null,x));
});

jayq.core.prop.cljs$lang$maxFixedArity = 3;

jayq.core.remove_attr = (function jayq$core$remove_attr($elem,a){
return $elem.removeAttr(cljs.core.name.call(null,a));
});
jayq.core.remove_prop = (function jayq$core$remove_prop($elem,a){
return $elem.removeProp(cljs.core.name.call(null,a));
});
jayq.core.data = (function jayq$core$data(var_args){
var args16566 = [];
var len__7937__auto___16569 = arguments.length;
var i__7938__auto___16570 = (0);
while(true){
if((i__7938__auto___16570 < len__7937__auto___16569)){
args16566.push((arguments[i__7938__auto___16570]));

var G__16571 = (i__7938__auto___16570 + (1));
i__7938__auto___16570 = G__16571;
continue;
} else {
}
break;
}

var G__16568 = args16566.length;
switch (G__16568) {
case 1:
return jayq.core.data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16566.length)].join('')));

}
});

jayq.core.data.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.data();
});

jayq.core.data.cljs$core$IFn$_invoke$arity$2 = (function ($elem,k){
return $elem.data(cljs.core.clj__GT_js.call(null,k));
});

jayq.core.data.cljs$core$IFn$_invoke$arity$3 = (function ($elem,k,v){
return $elem.data(cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));
});

jayq.core.data.cljs$lang$maxFixedArity = 3;

jayq.core.add_class = (function jayq$core$add_class($elem,cl){
return $elem.addClass(cljs.core.name.call(null,cl));
});
jayq.core.remove_class = (function jayq$core$remove_class(var_args){
var args16573 = [];
var len__7937__auto___16576 = arguments.length;
var i__7938__auto___16577 = (0);
while(true){
if((i__7938__auto___16577 < len__7937__auto___16576)){
args16573.push((arguments[i__7938__auto___16577]));

var G__16578 = (i__7938__auto___16577 + (1));
i__7938__auto___16577 = G__16578;
continue;
} else {
}
break;
}

var G__16575 = args16573.length;
switch (G__16575) {
case 1:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16573.length)].join('')));

}
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.removeClass();
});

jayq.core.remove_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.removeClass(cljs.core.name.call(null,cl));
});

jayq.core.remove_class.cljs$lang$maxFixedArity = 2;

jayq.core.toggle_class = (function jayq$core$toggle_class(var_args){
var args16580 = [];
var len__7937__auto___16583 = arguments.length;
var i__7938__auto___16584 = (0);
while(true){
if((i__7938__auto___16584 < len__7937__auto___16583)){
args16580.push((arguments[i__7938__auto___16584]));

var G__16585 = (i__7938__auto___16584 + (1));
i__7938__auto___16584 = G__16585;
continue;
} else {
}
break;
}

var G__16582 = args16580.length;
switch (G__16582) {
case 2:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16580.length)].join('')));

}
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function ($elem,cl){
return $elem.toggleClass(cljs.core.name.call(null,cl));
});

jayq.core.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function ($elem,cl,switch$){
return $elem.toggleClass(cljs.core.name.call(null,cl),cljs.core.boolean$.call(null,switch$));
});

jayq.core.toggle_class.cljs$lang$maxFixedArity = 3;

jayq.core.has_class = (function jayq$core$has_class($elem,cl){
return $elem.hasClass(cljs.core.name.call(null,cl));
});
jayq.core.is = (function jayq$core$is($elem,selector){
return $elem.is(jayq.core.__GT_selector.call(null,selector));
});
jayq.core.after = (function jayq$core$after($elem,content){
return $elem.after(content);
});
jayq.core.before = (function jayq$core$before($elem,content){
return $elem.before(content);
});
jayq.core.append = (function jayq$core$append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function jayq$core$prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.append_to = (function jayq$core$append_to($elem,target){
return $elem.appendTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.prepend_to = (function jayq$core$prepend_to($elem,target){
return $elem.prependTo(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_before = (function jayq$core$insert_before($elem,target){
return $elem.insertBefore(jayq.core.__GT_selector.call(null,target));
});
jayq.core.insert_after = (function jayq$core$insert_after($elem,target){
return $elem.insertAfter(jayq.core.__GT_selector.call(null,target));
});
jayq.core.replace_with = (function jayq$core$replace_with($elem,content){
return $elem.replaceWith(content);
});
jayq.core.remove = (function jayq$core$remove($elem){
return $elem.remove();
});
jayq.core.hide = (function jayq$core$hide(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16593 = arguments.length;
var i__7938__auto___16594 = (0);
while(true){
if((i__7938__auto___16594 < len__7937__auto___16593)){
args__7944__auto__.push((arguments[i__7938__auto___16594]));

var G__16595 = (i__7938__auto___16594 + (1));
i__7938__auto___16594 = G__16595;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__16589){
var vec__16590 = p__16589;
var speed = cljs.core.nth.call(null,vec__16590,(0),null);
var on_finish = cljs.core.nth.call(null,vec__16590,(1),null);
return $elem.hide(speed,on_finish);
});

jayq.core.hide.cljs$lang$maxFixedArity = (1);

jayq.core.hide.cljs$lang$applyTo = (function (seq16587){
var G__16588 = cljs.core.first.call(null,seq16587);
var seq16587__$1 = cljs.core.next.call(null,seq16587);
return jayq.core.hide.cljs$core$IFn$_invoke$arity$variadic(G__16588,seq16587__$1);
});

jayq.core.show = (function jayq$core$show(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16602 = arguments.length;
var i__7938__auto___16603 = (0);
while(true){
if((i__7938__auto___16603 < len__7937__auto___16602)){
args__7944__auto__.push((arguments[i__7938__auto___16603]));

var G__16604 = (i__7938__auto___16603 + (1));
i__7938__auto___16603 = G__16604;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.show.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__16598){
var vec__16599 = p__16598;
var speed = cljs.core.nth.call(null,vec__16599,(0),null);
var on_finish = cljs.core.nth.call(null,vec__16599,(1),null);
return $elem.show(speed,on_finish);
});

jayq.core.show.cljs$lang$maxFixedArity = (1);

jayq.core.show.cljs$lang$applyTo = (function (seq16596){
var G__16597 = cljs.core.first.call(null,seq16596);
var seq16596__$1 = cljs.core.next.call(null,seq16596);
return jayq.core.show.cljs$core$IFn$_invoke$arity$variadic(G__16597,seq16596__$1);
});

jayq.core.toggle = (function jayq$core$toggle(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16611 = arguments.length;
var i__7938__auto___16612 = (0);
while(true){
if((i__7938__auto___16612 < len__7937__auto___16611)){
args__7944__auto__.push((arguments[i__7938__auto___16612]));

var G__16613 = (i__7938__auto___16612 + (1));
i__7938__auto___16612 = G__16613;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__16607){
var vec__16608 = p__16607;
var speed = cljs.core.nth.call(null,vec__16608,(0),null);
var on_finish = cljs.core.nth.call(null,vec__16608,(1),null);
return $elem.toggle(speed,on_finish);
});

jayq.core.toggle.cljs$lang$maxFixedArity = (1);

jayq.core.toggle.cljs$lang$applyTo = (function (seq16605){
var G__16606 = cljs.core.first.call(null,seq16605);
var seq16605__$1 = cljs.core.next.call(null,seq16605);
return jayq.core.toggle.cljs$core$IFn$_invoke$arity$variadic(G__16606,seq16605__$1);
});

jayq.core.fade_out = (function jayq$core$fade_out(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16620 = arguments.length;
var i__7938__auto___16621 = (0);
while(true){
if((i__7938__auto___16621 < len__7937__auto___16620)){
args__7944__auto__.push((arguments[i__7938__auto___16621]));

var G__16622 = (i__7938__auto___16621 + (1));
i__7938__auto___16621 = G__16622;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__16616){
var vec__16617 = p__16616;
var speed = cljs.core.nth.call(null,vec__16617,(0),null);
var on_finish = cljs.core.nth.call(null,vec__16617,(1),null);
return $elem.fadeOut(speed,on_finish);
});

jayq.core.fade_out.cljs$lang$maxFixedArity = (1);

jayq.core.fade_out.cljs$lang$applyTo = (function (seq16614){
var G__16615 = cljs.core.first.call(null,seq16614);
var seq16614__$1 = cljs.core.next.call(null,seq16614);
return jayq.core.fade_out.cljs$core$IFn$_invoke$arity$variadic(G__16615,seq16614__$1);
});

jayq.core.fade_in = (function jayq$core$fade_in(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16629 = arguments.length;
var i__7938__auto___16630 = (0);
while(true){
if((i__7938__auto___16630 < len__7937__auto___16629)){
args__7944__auto__.push((arguments[i__7938__auto___16630]));

var G__16631 = (i__7938__auto___16630 + (1));
i__7938__auto___16630 = G__16631;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__16625){
var vec__16626 = p__16625;
var speed = cljs.core.nth.call(null,vec__16626,(0),null);
var on_finish = cljs.core.nth.call(null,vec__16626,(1),null);
return $elem.fadeIn(speed,on_finish);
});

jayq.core.fade_in.cljs$lang$maxFixedArity = (1);

jayq.core.fade_in.cljs$lang$applyTo = (function (seq16623){
var G__16624 = cljs.core.first.call(null,seq16623);
var seq16623__$1 = cljs.core.next.call(null,seq16623);
return jayq.core.fade_in.cljs$core$IFn$_invoke$arity$variadic(G__16624,seq16623__$1);
});

jayq.core.slide_up = (function jayq$core$slide_up(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16638 = arguments.length;
var i__7938__auto___16639 = (0);
while(true){
if((i__7938__auto___16639 < len__7937__auto___16638)){
args__7944__auto__.push((arguments[i__7938__auto___16639]));

var G__16640 = (i__7938__auto___16639 + (1));
i__7938__auto___16639 = G__16640;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__16634){
var vec__16635 = p__16634;
var speed = cljs.core.nth.call(null,vec__16635,(0),null);
var on_finish = cljs.core.nth.call(null,vec__16635,(1),null);
return $elem.slideUp(speed,on_finish);
});

jayq.core.slide_up.cljs$lang$maxFixedArity = (1);

jayq.core.slide_up.cljs$lang$applyTo = (function (seq16632){
var G__16633 = cljs.core.first.call(null,seq16632);
var seq16632__$1 = cljs.core.next.call(null,seq16632);
return jayq.core.slide_up.cljs$core$IFn$_invoke$arity$variadic(G__16633,seq16632__$1);
});

jayq.core.slide_down = (function jayq$core$slide_down(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16647 = arguments.length;
var i__7938__auto___16648 = (0);
while(true){
if((i__7938__auto___16648 < len__7937__auto___16647)){
args__7944__auto__.push((arguments[i__7938__auto___16648]));

var G__16649 = (i__7938__auto___16648 + (1));
i__7938__auto___16648 = G__16649;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,p__16643){
var vec__16644 = p__16643;
var speed = cljs.core.nth.call(null,vec__16644,(0),null);
var on_finish = cljs.core.nth.call(null,vec__16644,(1),null);
return $elem.slideDown(speed,on_finish);
});

jayq.core.slide_down.cljs$lang$maxFixedArity = (1);

jayq.core.slide_down.cljs$lang$applyTo = (function (seq16641){
var G__16642 = cljs.core.first.call(null,seq16641);
var seq16641__$1 = cljs.core.next.call(null,seq16641);
return jayq.core.slide_down.cljs$core$IFn$_invoke$arity$variadic(G__16642,seq16641__$1);
});

jayq.core.siblings = (function jayq$core$siblings(var_args){
var args16650 = [];
var len__7937__auto___16653 = arguments.length;
var i__7938__auto___16654 = (0);
while(true){
if((i__7938__auto___16654 < len__7937__auto___16653)){
args16650.push((arguments[i__7938__auto___16654]));

var G__16655 = (i__7938__auto___16654 + (1));
i__7938__auto___16654 = G__16655;
continue;
} else {
}
break;
}

var G__16652 = args16650.length;
switch (G__16652) {
case 1:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.siblings.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16650.length)].join('')));

}
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.siblings();
});

jayq.core.siblings.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.siblings(cljs.core.name.call(null,selector));
});

jayq.core.siblings.cljs$lang$maxFixedArity = 2;

jayq.core.parent = (function jayq$core$parent($elem){
return $elem.parent();
});
jayq.core.parents = (function jayq$core$parents(var_args){
var args16657 = [];
var len__7937__auto___16660 = arguments.length;
var i__7938__auto___16661 = (0);
while(true){
if((i__7938__auto___16661 < len__7937__auto___16660)){
args16657.push((arguments[i__7938__auto___16661]));

var G__16662 = (i__7938__auto___16661 + (1));
i__7938__auto___16661 = G__16662;
continue;
} else {
}
break;
}

var G__16659 = args16657.length;
switch (G__16659) {
case 1:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16657.length)].join('')));

}
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parents();
});

jayq.core.parents.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parents(cljs.core.name.call(null,selector));
});

jayq.core.parents.cljs$lang$maxFixedArity = 2;

jayq.core.parents_until = (function jayq$core$parents_until(var_args){
var args16664 = [];
var len__7937__auto___16667 = arguments.length;
var i__7938__auto___16668 = (0);
while(true){
if((i__7938__auto___16668 < len__7937__auto___16667)){
args16664.push((arguments[i__7938__auto___16668]));

var G__16669 = (i__7938__auto___16668 + (1));
i__7938__auto___16668 = G__16669;
continue;
} else {
}
break;
}

var G__16666 = args16664.length;
switch (G__16666) {
case 1:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16664.length)].join('')));

}
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.parentsUntil();
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.parents_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.parentsUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.parents_until.cljs$lang$maxFixedArity = 3;

jayq.core.children = (function jayq$core$children(var_args){
var args16671 = [];
var len__7937__auto___16674 = arguments.length;
var i__7938__auto___16675 = (0);
while(true){
if((i__7938__auto___16675 < len__7937__auto___16674)){
args16671.push((arguments[i__7938__auto___16675]));

var G__16676 = (i__7938__auto___16675 + (1));
i__7938__auto___16675 = G__16676;
continue;
} else {
}
break;
}

var G__16673 = args16671.length;
switch (G__16673) {
case 2:
return jayq.core.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16671.length)].join('')));

}
});

jayq.core.children.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.children(cljs.core.name.call(null,selector));
});

jayq.core.children.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.children();
});

jayq.core.children.cljs$lang$maxFixedArity = 2;

jayq.core.next = (function jayq$core$next(var_args){
var args16678 = [];
var len__7937__auto___16681 = arguments.length;
var i__7938__auto___16682 = (0);
while(true){
if((i__7938__auto___16682 < len__7937__auto___16681)){
args16678.push((arguments[i__7938__auto___16682]));

var G__16683 = (i__7938__auto___16682 + (1));
i__7938__auto___16682 = G__16683;
continue;
} else {
}
break;
}

var G__16680 = args16678.length;
switch (G__16680) {
case 1:
return jayq.core.next.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16678.length)].join('')));

}
});

jayq.core.next.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.next();
});

jayq.core.next.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.next(cljs.core.name.call(null,selector));
});

jayq.core.next.cljs$lang$maxFixedArity = 2;

jayq.core.prev = (function jayq$core$prev(var_args){
var args16685 = [];
var len__7937__auto___16688 = arguments.length;
var i__7938__auto___16689 = (0);
while(true){
if((i__7938__auto___16689 < len__7937__auto___16688)){
args16685.push((arguments[i__7938__auto___16689]));

var G__16690 = (i__7938__auto___16689 + (1));
i__7938__auto___16689 = G__16690;
continue;
} else {
}
break;
}

var G__16687 = args16685.length;
switch (G__16687) {
case 1:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16685.length)].join('')));

}
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prev();
});

jayq.core.prev.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prev(cljs.core.name.call(null,selector));
});

jayq.core.prev.cljs$lang$maxFixedArity = 2;

jayq.core.next_all = (function jayq$core$next_all(var_args){
var args16692 = [];
var len__7937__auto___16695 = arguments.length;
var i__7938__auto___16696 = (0);
while(true){
if((i__7938__auto___16696 < len__7937__auto___16695)){
args16692.push((arguments[i__7938__auto___16696]));

var G__16697 = (i__7938__auto___16696 + (1));
i__7938__auto___16696 = G__16697;
continue;
} else {
}
break;
}

var G__16694 = args16692.length;
switch (G__16694) {
case 1:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16692.length)].join('')));

}
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextAll();
});

jayq.core.next_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextAll(cljs.core.name.call(null,selector));
});

jayq.core.next_all.cljs$lang$maxFixedArity = 2;

jayq.core.prev_all = (function jayq$core$prev_all(var_args){
var args16699 = [];
var len__7937__auto___16702 = arguments.length;
var i__7938__auto___16703 = (0);
while(true){
if((i__7938__auto___16703 < len__7937__auto___16702)){
args16699.push((arguments[i__7938__auto___16703]));

var G__16704 = (i__7938__auto___16703 + (1));
i__7938__auto___16703 = G__16704;
continue;
} else {
}
break;
}

var G__16701 = args16699.length;
switch (G__16701) {
case 1:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16699.length)].join('')));

}
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevAll();
});

jayq.core.prev_all.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevAll(cljs.core.name.call(null,selector));
});

jayq.core.prev_all.cljs$lang$maxFixedArity = 2;

jayq.core.next_until = (function jayq$core$next_until(var_args){
var args16706 = [];
var len__7937__auto___16709 = arguments.length;
var i__7938__auto___16710 = (0);
while(true){
if((i__7938__auto___16710 < len__7937__auto___16709)){
args16706.push((arguments[i__7938__auto___16710]));

var G__16711 = (i__7938__auto___16710 + (1));
i__7938__auto___16710 = G__16711;
continue;
} else {
}
break;
}

var G__16708 = args16706.length;
switch (G__16708) {
case 1:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.next_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16706.length)].join('')));

}
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.nextUntil();
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.next_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.nextUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.next_until.cljs$lang$maxFixedArity = 3;

jayq.core.prev_until = (function jayq$core$prev_until(var_args){
var args16713 = [];
var len__7937__auto___16716 = arguments.length;
var i__7938__auto___16717 = (0);
while(true){
if((i__7938__auto___16717 < len__7937__auto___16716)){
args16713.push((arguments[i__7938__auto___16717]));

var G__16718 = (i__7938__auto___16717 + (1));
i__7938__auto___16717 = G__16718;
continue;
} else {
}
break;
}

var G__16715 = args16713.length;
switch (G__16715) {
case 1:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16713.length)].join('')));

}
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.prevUntil();
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$2 = (function ($elem,selector){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector));
});

jayq.core.prev_until.cljs$core$IFn$_invoke$arity$3 = (function ($elem,selector,filtr){
return $elem.prevUntil(jayq.core.__GT_selector.call(null,selector),cljs.core.name.call(null,filtr));
});

jayq.core.prev_until.cljs$lang$maxFixedArity = 3;

jayq.core.find = (function jayq$core$find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.closest = (function jayq$core$closest(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16727 = arguments.length;
var i__7938__auto___16728 = (0);
while(true){
if((i__7938__auto___16728 < len__7937__auto___16727)){
args__7944__auto__.push((arguments[i__7938__auto___16728]));

var G__16729 = (i__7938__auto___16728 + (1));
i__7938__auto___16728 = G__16729;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((2) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((2)),(0),null)):null);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7945__auto__);
});

jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,selector,p__16723){
var vec__16724 = p__16723;
var context = cljs.core.nth.call(null,vec__16724,(0),null);
return $elem.closest(jayq.core.__GT_selector.call(null,selector),context);
});

jayq.core.closest.cljs$lang$maxFixedArity = (2);

jayq.core.closest.cljs$lang$applyTo = (function (seq16720){
var G__16721 = cljs.core.first.call(null,seq16720);
var seq16720__$1 = cljs.core.next.call(null,seq16720);
var G__16722 = cljs.core.first.call(null,seq16720__$1);
var seq16720__$2 = cljs.core.next.call(null,seq16720__$1);
return jayq.core.closest.cljs$core$IFn$_invoke$arity$variadic(G__16721,G__16722,seq16720__$2);
});

jayq.core.clone = (function jayq$core$clone($elem){
return $elem.clone();
});
jayq.core.html = (function jayq$core$html(var_args){
var args16730 = [];
var len__7937__auto___16733 = arguments.length;
var i__7938__auto___16734 = (0);
while(true){
if((i__7938__auto___16734 < len__7937__auto___16733)){
args16730.push((arguments[i__7938__auto___16734]));

var G__16735 = (i__7938__auto___16734 + (1));
i__7938__auto___16734 = G__16735;
continue;
} else {
}
break;
}

var G__16732 = args16730.length;
switch (G__16732) {
case 2:
return jayq.core.html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.html.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16730.length)].join('')));

}
});

jayq.core.html.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.html(v);
});

jayq.core.html.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.html();
});

jayq.core.html.cljs$lang$maxFixedArity = 2;

jayq.core.inner = jayq.core.html;
jayq.core.empty = (function jayq$core$empty($elem){
return $elem.empty();
});
jayq.core.val = (function jayq$core$val(var_args){
var args16737 = [];
var len__7937__auto___16740 = arguments.length;
var i__7938__auto___16741 = (0);
while(true){
if((i__7938__auto___16741 < len__7937__auto___16740)){
args16737.push((arguments[i__7938__auto___16741]));

var G__16742 = (i__7938__auto___16741 + (1));
i__7938__auto___16741 = G__16742;
continue;
} else {
}
break;
}

var G__16739 = args16737.length;
switch (G__16739) {
case 2:
return jayq.core.val.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.val.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16737.length)].join('')));

}
});

jayq.core.val.cljs$core$IFn$_invoke$arity$2 = (function ($elem,v){
return $elem.val(v);
});

jayq.core.val.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.val();
});

jayq.core.val.cljs$lang$maxFixedArity = 2;

jayq.core.serialize = (function jayq$core$serialize($elem){
return $elem.serialize();
});
jayq.core.queue = (function jayq$core$queue(var_args){
var args16744 = [];
var len__7937__auto___16747 = arguments.length;
var i__7938__auto___16748 = (0);
while(true){
if((i__7938__auto___16748 < len__7937__auto___16747)){
args16744.push((arguments[i__7938__auto___16748]));

var G__16749 = (i__7938__auto___16748 + (1));
i__7938__auto___16748 = G__16749;
continue;
} else {
}
break;
}

var G__16746 = args16744.length;
switch (G__16746) {
case 3:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16744.length)].join('')));

}
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$3 = (function ($elem,x,y){
return $elem.queue(x,y);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.queue(x);
});

jayq.core.queue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.queue();
});

jayq.core.queue.cljs$lang$maxFixedArity = 3;

jayq.core.dequeue = (function jayq$core$dequeue(var_args){
var args16751 = [];
var len__7937__auto___16754 = arguments.length;
var i__7938__auto___16755 = (0);
while(true){
if((i__7938__auto___16755 < len__7937__auto___16754)){
args16751.push((arguments[i__7938__auto___16755]));

var G__16756 = (i__7938__auto___16755 + (1));
i__7938__auto___16755 = G__16756;
continue;
} else {
}
break;
}

var G__16753 = args16751.length;
switch (G__16753) {
case 2:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16751.length)].join('')));

}
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$2 = (function ($elem,queue_name){
return $elem.dequeue(queue_name);
});

jayq.core.dequeue.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.dequeue();
});

jayq.core.dequeue.cljs$lang$maxFixedArity = 2;

jayq.core.document_ready = (function jayq$core$document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.mimetype_converter = (function jayq$core$mimetype_converter(s){
return cljs.reader.read_string.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
});
jQuery.ajaxSetup(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"accepts","accepts",1429714104),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"edn","edn",1317840885),"application/edn, text/edn",new cljs.core.Keyword(null,"clojure","clojure",438975815),"application/clojure, text/clojure"], null),new cljs.core.Keyword(null,"contents","contents",-1567174023),new cljs.core.PersistentArrayMap(null, 1, ["clojure",/edn|clojure/], null),new cljs.core.Keyword(null,"converters","converters",195533259),new cljs.core.PersistentArrayMap(null, 2, ["text edn",jayq.core.mimetype_converter,"text clojure",jayq.core.mimetype_converter], null)], null)));
jayq.core.clj_content_type_QMARK_ = (function jayq$core$clj_content_type_QMARK_(x){
return cljs.core.re_find.call(null,/^(text|application)\/(clojure|edn)/,x);
});
jayq.core.__GT_content_type = (function jayq$core$__GT_content_type(ct){
if(typeof ct === 'string'){
return ct;
} else {
if((ct instanceof cljs.core.Keyword)){
return cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ct)].join(''),(1));
} else {
return null;
}
}
});
jayq.core.preprocess_request = (function jayq$core$preprocess_request(p__16760){
var map__16763 = p__16760;
var map__16763__$1 = ((((!((map__16763 == null)))?((((map__16763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16763):map__16763);
var request = map__16763__$1;
var data = cljs.core.get.call(null,map__16763__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var contentType = cljs.core.get.call(null,map__16763__$1,new cljs.core.Keyword(null,"contentType","contentType",-1462509576));
var ct = jayq.core.__GT_content_type.call(null,contentType);
return ((function (ct,map__16763,map__16763__$1,request,data,contentType){
return (function (p1__16759_SHARP_){
if(cljs.core.truth_((function (){var and__6812__auto__ = ct;
if(cljs.core.truth_(and__6812__auto__)){
return jayq.core.clj_content_type_QMARK_.call(null,ct);
} else {
return and__6812__auto__;
}
})())){
return cljs.core.assoc.call(null,p1__16759_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.pr_str.call(null,data));
} else {
return p1__16759_SHARP_;
}
});})(ct,map__16763,map__16763__$1,request,data,contentType))
.call(null,((function (ct,map__16763,map__16763__$1,request,data,contentType){
return (function (p1__16758_SHARP_){
if(cljs.core.truth_(ct)){
return cljs.core.assoc.call(null,p1__16758_SHARP_,new cljs.core.Keyword(null,"contentType","contentType",-1462509576),ct);
} else {
return p1__16758_SHARP_;
}
});})(ct,map__16763,map__16763__$1,request,data,contentType))
.call(null,request));
});
jayq.core.__GT_ajax_settings = (function jayq$core$__GT_ajax_settings(request){
return cljs.core.clj__GT_js.call(null,jayq.core.preprocess_request.call(null,request));
});
jayq.core.ajax = (function jayq$core$ajax(var_args){
var args16765 = [];
var len__7937__auto___16768 = arguments.length;
var i__7938__auto___16769 = (0);
while(true){
if((i__7938__auto___16769 < len__7937__auto___16768)){
args16765.push((arguments[i__7938__auto___16769]));

var G__16770 = (i__7938__auto___16769 + (1));
i__7938__auto___16769 = G__16770;
continue;
} else {
}
break;
}

var G__16767 = args16765.length;
switch (G__16767) {
case 2:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.ajax.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16765.length)].join('')));

}
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$2 = (function (url,settings){
return jQuery.ajax(url,jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$core$IFn$_invoke$arity$1 = (function (settings){
return jQuery.ajax(jayq.core.__GT_ajax_settings.call(null,settings));
});

jayq.core.ajax.cljs$lang$maxFixedArity = 2;

jayq.core.xhr = (function jayq$core$xhr(p__16772,content,callback){
var vec__16776 = p__16772;
var method = cljs.core.nth.call(null,vec__16776,(0),null);
var uri = cljs.core.nth.call(null,vec__16776,(1),null);
var params = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js.call(null,content),new cljs.core.Keyword(null,"success","success",1890645906),callback], null));
return jQuery.ajax(uri,params);
});
/**
 * Reads clojure data from element content (preferably a script tag with type=edn/clojure)
 */
jayq.core.read = (function jayq$core$read($elem){
return cljs.reader.read_string.call(null,jayq.core.html.call(null,$elem));
});
jayq.core.$contains = jQuery.contains;
jayq.core.bind = (function jayq$core$bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.unbind = (function jayq$core$unbind(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16786 = arguments.length;
var i__7938__auto___16787 = (0);
while(true){
if((i__7938__auto___16787 < len__7937__auto___16786)){
args__7944__auto__.push((arguments[i__7938__auto___16787]));

var G__16788 = (i__7938__auto___16787 + (1));
i__7938__auto___16787 = G__16788;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((2) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((2)),(0),null)):null);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7945__auto__);
});

jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,ev,p__16782){
var vec__16783 = p__16782;
var func = cljs.core.nth.call(null,vec__16783,(0),null);
return $elem.unbind(cljs.core.name.call(null,ev),func);
});

jayq.core.unbind.cljs$lang$maxFixedArity = (2);

jayq.core.unbind.cljs$lang$applyTo = (function (seq16779){
var G__16780 = cljs.core.first.call(null,seq16779);
var seq16779__$1 = cljs.core.next.call(null,seq16779);
var G__16781 = cljs.core.first.call(null,seq16779__$1);
var seq16779__$2 = cljs.core.next.call(null,seq16779__$1);
return jayq.core.unbind.cljs$core$IFn$_invoke$arity$variadic(G__16780,G__16781,seq16779__$2);
});

jayq.core.trigger = (function jayq$core$trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function jayq$core$delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function jayq$core$__GT_event(e){
if(cljs.core.coll_QMARK_.call(null,e)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else {
return cljs.core.clj__GT_js.call(null,e);
}
});
jayq.core.on = (function jayq$core$on(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16796 = arguments.length;
var i__7938__auto___16797 = (0);
while(true){
if((i__7938__auto___16797 < len__7937__auto___16796)){
args__7944__auto__.push((arguments[i__7938__auto___16797]));

var G__16798 = (i__7938__auto___16797 + (1));
i__7938__auto___16797 = G__16798;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((2) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((2)),(0),null)):null);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7945__auto__);
});

jayq.core.on.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__16792){
var vec__16793 = p__16792;
var sel = cljs.core.nth.call(null,vec__16793,(0),null);
var data = cljs.core.nth.call(null,vec__16793,(1),null);
var handler = cljs.core.nth.call(null,vec__16793,(2),null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.on.cljs$lang$maxFixedArity = (2);

jayq.core.on.cljs$lang$applyTo = (function (seq16789){
var G__16790 = cljs.core.first.call(null,seq16789);
var seq16789__$1 = cljs.core.next.call(null,seq16789);
var G__16791 = cljs.core.first.call(null,seq16789__$1);
var seq16789__$2 = cljs.core.next.call(null,seq16789__$1);
return jayq.core.on.cljs$core$IFn$_invoke$arity$variadic(G__16790,G__16791,seq16789__$2);
});

jayq.core.one = (function jayq$core$one(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16806 = arguments.length;
var i__7938__auto___16807 = (0);
while(true){
if((i__7938__auto___16807 < len__7937__auto___16806)){
args__7944__auto__.push((arguments[i__7938__auto___16807]));

var G__16808 = (i__7938__auto___16807 + (1));
i__7938__auto___16807 = G__16808;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((2) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((2)),(0),null)):null);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7945__auto__);
});

jayq.core.one.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__16802){
var vec__16803 = p__16802;
var sel = cljs.core.nth.call(null,vec__16803,(0),null);
var data = cljs.core.nth.call(null,vec__16803,(1),null);
var handler = cljs.core.nth.call(null,vec__16803,(2),null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
});

jayq.core.one.cljs$lang$maxFixedArity = (2);

jayq.core.one.cljs$lang$applyTo = (function (seq16799){
var G__16800 = cljs.core.first.call(null,seq16799);
var seq16799__$1 = cljs.core.next.call(null,seq16799);
var G__16801 = cljs.core.first.call(null,seq16799__$1);
var seq16799__$2 = cljs.core.next.call(null,seq16799__$1);
return jayq.core.one.cljs$core$IFn$_invoke$arity$variadic(G__16800,G__16801,seq16799__$2);
});

jayq.core.off = (function jayq$core$off(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16816 = arguments.length;
var i__7938__auto___16817 = (0);
while(true){
if((i__7938__auto___16817 < len__7937__auto___16816)){
args__7944__auto__.push((arguments[i__7938__auto___16817]));

var G__16818 = (i__7938__auto___16817 + (1));
i__7938__auto___16817 = G__16818;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((2) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((2)),(0),null)):null);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7945__auto__);
});

jayq.core.off.cljs$core$IFn$_invoke$arity$variadic = (function ($elem,events,p__16812){
var vec__16813 = p__16812;
var sel = cljs.core.nth.call(null,vec__16813,(0),null);
var handler = cljs.core.nth.call(null,vec__16813,(1),null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
});

jayq.core.off.cljs$lang$maxFixedArity = (2);

jayq.core.off.cljs$lang$applyTo = (function (seq16809){
var G__16810 = cljs.core.first.call(null,seq16809);
var seq16809__$1 = cljs.core.next.call(null,seq16809);
var G__16811 = cljs.core.first.call(null,seq16809__$1);
var seq16809__$2 = cljs.core.next.call(null,seq16809__$1);
return jayq.core.off.cljs$core$IFn$_invoke$arity$variadic(G__16810,G__16811,seq16809__$2);
});

jayq.core.prevent = (function jayq$core$prevent(e){
return e.preventDefault();
});
jayq.core.height = (function jayq$core$height(var_args){
var args16819 = [];
var len__7937__auto___16822 = arguments.length;
var i__7938__auto___16823 = (0);
while(true){
if((i__7938__auto___16823 < len__7937__auto___16822)){
args16819.push((arguments[i__7938__auto___16823]));

var G__16824 = (i__7938__auto___16823 + (1));
i__7938__auto___16823 = G__16824;
continue;
} else {
}
break;
}

var G__16821 = args16819.length;
switch (G__16821) {
case 2:
return jayq.core.height.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.height.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16819.length)].join('')));

}
});

jayq.core.height.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.height(x);
});

jayq.core.height.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.height();
});

jayq.core.height.cljs$lang$maxFixedArity = 2;

jayq.core.width = (function jayq$core$width(var_args){
var args16826 = [];
var len__7937__auto___16829 = arguments.length;
var i__7938__auto___16830 = (0);
while(true){
if((i__7938__auto___16830 < len__7937__auto___16829)){
args16826.push((arguments[i__7938__auto___16830]));

var G__16831 = (i__7938__auto___16830 + (1));
i__7938__auto___16830 = G__16831;
continue;
} else {
}
break;
}

var G__16828 = args16826.length;
switch (G__16828) {
case 2:
return jayq.core.width.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.width.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16826.length)].join('')));

}
});

jayq.core.width.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.width(x);
});

jayq.core.width.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.width();
});

jayq.core.width.cljs$lang$maxFixedArity = 2;

jayq.core.inner_height = (function jayq$core$inner_height($elem){
return $elem.innerHeight();
});
jayq.core.inner_width = (function jayq$core$inner_width($elem){
return $elem.innerWidth();
});
jayq.core.outer_height = (function jayq$core$outer_height($elem){
return $elem.outerHeight();
});
jayq.core.outer_width = (function jayq$core$outer_width($elem){
return $elem.outerWidth();
});
jayq.core.offset = (function jayq$core$offset(var_args){
var args16833 = [];
var len__7937__auto___16836 = arguments.length;
var i__7938__auto___16837 = (0);
while(true){
if((i__7938__auto___16837 < len__7937__auto___16836)){
args16833.push((arguments[i__7938__auto___16837]));

var G__16838 = (i__7938__auto___16837 + (1));
i__7938__auto___16837 = G__16838;
continue;
} else {
}
break;
}

var G__16835 = args16833.length;
switch (G__16835) {
case 2:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return jayq.core.offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16833.length)].join('')));

}
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$2 = (function ($elem,coords){
return cljs.core.clj__GT_js.call(null,coords).offset();
});

jayq.core.offset.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return cljs.core.js__GT_clj.call(null,$elem.offset(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});

jayq.core.offset.cljs$lang$maxFixedArity = 2;

jayq.core.offset_parent = (function jayq$core$offset_parent($elem){
return $elem.offsetParent();
});
jayq.core.position = (function jayq$core$position($elem){
return cljs.core.js__GT_clj.call(null,$elem.position(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
jayq.core.scroll_left = (function jayq$core$scroll_left(var_args){
var args16840 = [];
var len__7937__auto___16843 = arguments.length;
var i__7938__auto___16844 = (0);
while(true){
if((i__7938__auto___16844 < len__7937__auto___16843)){
args16840.push((arguments[i__7938__auto___16844]));

var G__16845 = (i__7938__auto___16844 + (1));
i__7938__auto___16844 = G__16845;
continue;
} else {
}
break;
}

var G__16842 = args16840.length;
switch (G__16842) {
case 1:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16840.length)].join('')));

}
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollLeft();
});

jayq.core.scroll_left.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollLeft(x);
});

jayq.core.scroll_left.cljs$lang$maxFixedArity = 2;

jayq.core.scroll_top = (function jayq$core$scroll_top(var_args){
var args16847 = [];
var len__7937__auto___16850 = arguments.length;
var i__7938__auto___16851 = (0);
while(true){
if((i__7938__auto___16851 < len__7937__auto___16850)){
args16847.push((arguments[i__7938__auto___16851]));

var G__16852 = (i__7938__auto___16851 + (1));
i__7938__auto___16851 = G__16852;
continue;
} else {
}
break;
}

var G__16849 = args16847.length;
switch (G__16849) {
case 1:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16847.length)].join('')));

}
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$1 = (function ($elem){
return $elem.scrollTop();
});

jayq.core.scroll_top.cljs$core$IFn$_invoke$arity$2 = (function ($elem,x){
return $elem.scrollTop(x);
});

jayq.core.scroll_top.cljs$lang$maxFixedArity = 2;

jayq.core.$deferred = jQuery.Deferred;
jayq.core.$when = jQuery.when;
jayq.core.then = (function jayq$core$then(var_args){
var args16854 = [];
var len__7937__auto___16857 = arguments.length;
var i__7938__auto___16858 = (0);
while(true){
if((i__7938__auto___16858 < len__7937__auto___16857)){
args16854.push((arguments[i__7938__auto___16858]));

var G__16859 = (i__7938__auto___16858 + (1));
i__7938__auto___16858 = G__16859;
continue;
} else {
}
break;
}

var G__16856 = args16854.length;
switch (G__16856) {
case 3:
return jayq.core.then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.then.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16854.length)].join('')));

}
});

jayq.core.then.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_fn,fail_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn));
});

jayq.core.then.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_fn,fail_fn,progress_fn){
return deferred.then(cljs.core.clj__GT_js.call(null,done_fn),cljs.core.clj__GT_js.call(null,fail_fn),cljs.core.clj__GT_js.call(null,progress_fn));
});

jayq.core.then.cljs$lang$maxFixedArity = 4;

jayq.core.done = (function jayq$core$done(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16863 = arguments.length;
var i__7938__auto___16864 = (0);
while(true){
if((i__7938__auto___16864 < len__7937__auto___16863)){
args__7944__auto__.push((arguments[i__7938__auto___16864]));

var G__16865 = (i__7938__auto___16864 + (1));
i__7938__auto___16864 = G__16865;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.done.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.done.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.done.cljs$lang$maxFixedArity = (1);

jayq.core.done.cljs$lang$applyTo = (function (seq16861){
var G__16862 = cljs.core.first.call(null,seq16861);
var seq16861__$1 = cljs.core.next.call(null,seq16861);
return jayq.core.done.cljs$core$IFn$_invoke$arity$variadic(G__16862,seq16861__$1);
});

jayq.core.fail = (function jayq$core$fail(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16868 = arguments.length;
var i__7938__auto___16869 = (0);
while(true){
if((i__7938__auto___16869 < len__7937__auto___16868)){
args__7944__auto__.push((arguments[i__7938__auto___16869]));

var G__16870 = (i__7938__auto___16869 + (1));
i__7938__auto___16869 = G__16870;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.fail.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.fail.cljs$lang$maxFixedArity = (1);

jayq.core.fail.cljs$lang$applyTo = (function (seq16866){
var G__16867 = cljs.core.first.call(null,seq16866);
var seq16866__$1 = cljs.core.next.call(null,seq16866);
return jayq.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__16867,seq16866__$1);
});

jayq.core.progress = (function jayq$core$progress(deferred,fns_args){
return deferred.progress(cljs.core.clj__GT_js.call(null,fns_args));
});
jayq.core.promise = (function jayq$core$promise(var_args){
var args16871 = [];
var len__7937__auto___16874 = arguments.length;
var i__7938__auto___16875 = (0);
while(true){
if((i__7938__auto___16875 < len__7937__auto___16874)){
args16871.push((arguments[i__7938__auto___16875]));

var G__16876 = (i__7938__auto___16875 + (1));
i__7938__auto___16875 = G__16876;
continue;
} else {
}
break;
}

var G__16873 = args16871.length;
switch (G__16873) {
case 1:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.promise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16871.length)].join('')));

}
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$1 = (function (deferred){
return deferred.promise();
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$2 = (function (deferred,type){
return deferred.promise(type);
});

jayq.core.promise.cljs$core$IFn$_invoke$arity$3 = (function (deferred,type,target){
return deferred.promise(type,target);
});

jayq.core.promise.cljs$lang$maxFixedArity = 3;

jayq.core.always = (function jayq$core$always(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16880 = arguments.length;
var i__7938__auto___16881 = (0);
while(true){
if((i__7938__auto___16881 < len__7937__auto___16880)){
args__7944__auto__.push((arguments[i__7938__auto___16881]));

var G__16882 = (i__7938__auto___16881 + (1));
i__7938__auto___16881 = G__16882;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((1) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((1)),(0),null)):null);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7945__auto__);
});

jayq.core.always.cljs$core$IFn$_invoke$arity$variadic = (function (deferred,fns_args){
return deferred.always.apply(deferred,cljs.core.clj__GT_js.call(null,fns_args));
});

jayq.core.always.cljs$lang$maxFixedArity = (1);

jayq.core.always.cljs$lang$applyTo = (function (seq16878){
var G__16879 = cljs.core.first.call(null,seq16878);
var seq16878__$1 = cljs.core.next.call(null,seq16878);
return jayq.core.always.cljs$core$IFn$_invoke$arity$variadic(G__16879,seq16878__$1);
});

jayq.core.reject = (function jayq$core$reject(deferred,args){
return deferred.reject(args);
});
jayq.core.reject_with = (function jayq$core$reject_with(deferred,context,args){
return deferred.rejectWith(context,args);
});
jayq.core.notify = (function jayq$core$notify(deferred,args){
return deferred.notify(args);
});
jayq.core.notify_with = (function jayq$core$notify_with(deferred,context,args){
return deferred.notifyWith(context,args);
});
jayq.core.resolve = (function jayq$core$resolve(deferred,args){
return deferred.resolve(args);
});
jayq.core.resolve_with = (function jayq$core$resolve_with(deferred,context,args){
return deferred.resolveWith(context,args);
});
jayq.core.pipe = (function jayq$core$pipe(var_args){
var args16883 = [];
var len__7937__auto___16886 = arguments.length;
var i__7938__auto___16887 = (0);
while(true){
if((i__7938__auto___16887 < len__7937__auto___16886)){
args16883.push((arguments[i__7938__auto___16887]));

var G__16888 = (i__7938__auto___16887 + (1));
i__7938__auto___16887 = G__16888;
continue;
} else {
}
break;
}

var G__16885 = args16883.length;
switch (G__16885) {
case 2:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return jayq.core.pipe.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16883.length)].join('')));

}
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$2 = (function (deferred,done_filter){
return deferred.pipe(done_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$3 = (function (deferred,done_filter,fail_filter){
return deferred.pipe(done_filter,fail_filter);
});

jayq.core.pipe.cljs$core$IFn$_invoke$arity$4 = (function (deferred,done_filter,fail_filter,progress_filter){
return deferred.pipe(done_filter,fail_filter,progress_filter);
});

jayq.core.pipe.cljs$lang$maxFixedArity = 4;

jayq.core.state = (function jayq$core$state(deferred){
return cljs.core.keyword.call(null,deferred.state());
});
jayq.core.deferred_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),jayq.core.$when,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
var dfd = jayq.core.$deferred.call(null);
jayq.core.done.call(null,x,((function (dfd){
return (function (v){
return jayq.core.done.call(null,f.call(null,v),cljs.core.partial.call(null,jayq.core.resolve,dfd));
});})(dfd))
);

return jayq.core.promise.call(null,dfd);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
jayq.core.ajax_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.identity,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (x,f){
return jayq.core.done.call(null,jayq.core.ajax.call(null,x),f);
}),new cljs.core.Keyword(null,"zero","zero",-858964576),cljs.core.identity], null);
