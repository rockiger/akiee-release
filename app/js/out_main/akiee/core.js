// Compiled by ClojureScript 1.9.495 {:elide-asserts true, :target :nodejs}
goog.provide('akiee.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
akiee.core.path = cljs.nodejs.require.call(null,"path");
akiee.core.Electron = cljs.nodejs.require.call(null,"electron");
akiee.core.BrowserWindow = akiee.core.Electron.BrowserWindow;
akiee.core.crash_reporter = akiee.core.Electron.crashReporter;
akiee.core.Os = cljs.nodejs.require.call(null,"os");
akiee.core._STAR_win_STAR_ = cljs.core.atom.call(null,null);
akiee.core.app = akiee.core.Electron.app;
akiee.core._main = (function akiee$core$_main(){
akiee.core.crash_reporter.start(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"companyName","companyName",2030952346),"Rockiger",new cljs.core.Keyword(null,"submitURL","submitURL",-169159433),"http://rockiger.com/"], null)));

cljs.nodejs.process.on("error",(function (err){
return console.log(err);
}));

akiee.core.app.on("window-all-closed",(function (){
if(cljs.core.not_EQ_.call(null,cljs.nodejs.process.platform,"darwin")){
return akiee.core.app.quit();
} else {
return null;
}
}));

return akiee.core.app.on("ready",(function (){
cljs.core.reset_BANG_.call(null,akiee.core._STAR_win_STAR_,(new akiee.core.BrowserWindow(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(960),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"icon","icon",1679606541),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee.core.path.resolve(__dirname,"../icon.png"))].join('')], null)))));

cljs.core.deref.call(null,akiee.core._STAR_win_STAR_).loadURL([cljs.core.str.cljs$core$IFn$_invoke$arity$1("file://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee.core.path.resolve(__dirname,"../index.html"))].join(''));

return cljs.core.deref.call(null,akiee.core._STAR_win_STAR_).on("closed",(function (){
return cljs.core.reset_BANG_.call(null,akiee.core._STAR_win_STAR_,null);
}));
}));
});
cljs.nodejs.enable_util_print_BANG_.call(null);
console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Start descjop application on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee.core.Os.type()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''));
cljs.core._STAR_main_cli_fn_STAR_ = akiee.core._main;
