// Compiled by ClojureScript 1.9.495 {:elide-asserts true, :target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12332__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12332 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12333__i = 0, G__12333__a = new Array(arguments.length -  0);
while (G__12333__i < G__12333__a.length) {G__12333__a[G__12333__i] = arguments[G__12333__i + 0]; ++G__12333__i;}
  args = new cljs.core.IndexedSeq(G__12333__a,0);
} 
return G__12332__delegate.call(this,args);};
G__12332.cljs$lang$maxFixedArity = 0;
G__12332.cljs$lang$applyTo = (function (arglist__12334){
var args = cljs.core.seq(arglist__12334);
return G__12332__delegate(args);
});
G__12332.cljs$core$IFn$_invoke$arity$variadic = G__12332__delegate;
return G__12332;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12335__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12336__i = 0, G__12336__a = new Array(arguments.length -  0);
while (G__12336__i < G__12336__a.length) {G__12336__a[G__12336__i] = arguments[G__12336__i + 0]; ++G__12336__i;}
  args = new cljs.core.IndexedSeq(G__12336__a,0);
} 
return G__12335__delegate.call(this,args);};
G__12335.cljs$lang$maxFixedArity = 0;
G__12335.cljs$lang$applyTo = (function (arglist__12337){
var args = cljs.core.seq(arglist__12337);
return G__12335__delegate(args);
});
G__12335.cljs$core$IFn$_invoke$arity$variadic = G__12335__delegate;
return G__12335;
})()
;

return null;
});
