// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15913__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15913 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15914__i = 0, G__15914__a = new Array(arguments.length -  0);
while (G__15914__i < G__15914__a.length) {G__15914__a[G__15914__i] = arguments[G__15914__i + 0]; ++G__15914__i;}
  args = new cljs.core.IndexedSeq(G__15914__a,0);
} 
return G__15913__delegate.call(this,args);};
G__15913.cljs$lang$maxFixedArity = 0;
G__15913.cljs$lang$applyTo = (function (arglist__15915){
var args = cljs.core.seq(arglist__15915);
return G__15913__delegate(args);
});
G__15913.cljs$core$IFn$_invoke$arity$variadic = G__15913__delegate;
return G__15913;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15916__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15917__i = 0, G__15917__a = new Array(arguments.length -  0);
while (G__15917__i < G__15917__a.length) {G__15917__a[G__15917__i] = arguments[G__15917__i + 0]; ++G__15917__i;}
  args = new cljs.core.IndexedSeq(G__15917__a,0);
} 
return G__15916__delegate.call(this,args);};
G__15916.cljs$lang$maxFixedArity = 0;
G__15916.cljs$lang$applyTo = (function (arglist__15918){
var args = cljs.core.seq(arglist__15918);
return G__15916__delegate(args);
});
G__15916.cljs$core$IFn$_invoke$arity$variadic = G__15916__delegate;
return G__15916;
})()
;

return null;
});
