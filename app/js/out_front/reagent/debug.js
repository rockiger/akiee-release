// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13422__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13422 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13423__i = 0, G__13423__a = new Array(arguments.length -  0);
while (G__13423__i < G__13423__a.length) {G__13423__a[G__13423__i] = arguments[G__13423__i + 0]; ++G__13423__i;}
  args = new cljs.core.IndexedSeq(G__13423__a,0);
} 
return G__13422__delegate.call(this,args);};
G__13422.cljs$lang$maxFixedArity = 0;
G__13422.cljs$lang$applyTo = (function (arglist__13424){
var args = cljs.core.seq(arglist__13424);
return G__13422__delegate(args);
});
G__13422.cljs$core$IFn$_invoke$arity$variadic = G__13422__delegate;
return G__13422;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13425__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13426__i = 0, G__13426__a = new Array(arguments.length -  0);
while (G__13426__i < G__13426__a.length) {G__13426__a[G__13426__i] = arguments[G__13426__i + 0]; ++G__13426__i;}
  args = new cljs.core.IndexedSeq(G__13426__a,0);
} 
return G__13425__delegate.call(this,args);};
G__13425.cljs$lang$maxFixedArity = 0;
G__13425.cljs$lang$applyTo = (function (arglist__13427){
var args = cljs.core.seq(arglist__13427);
return G__13425__delegate(args);
});
G__13425.cljs$core$IFn$_invoke$arity$variadic = G__13425__delegate;
return G__13425;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
