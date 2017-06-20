// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('historian.core');
goog.require('cljs.core');
/**
 * The great library... store your stuff here.
 */
historian.core.alexandria = cljs.core.atom.call(null,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY));
historian.core.get_library_atom = (function historian$core$get_library_atom(){
return cljs.core.deref.call(null,historian.core.alexandria);
});
/**
 * What will happen in the future...
 */
historian.core.nostradamus = cljs.core.atom.call(null,cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY));
historian.core.get_prophecy_atom = (function historian$core$get_prophecy_atom(){
return cljs.core.deref.call(null,historian.core.nostradamus);
});
/**
 * Who should we record?
 */
historian.core.overseer = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
historian.core.register_atom_BANG_ = (function historian$core$register_atom_BANG_(var_args){
var args16248 = [];
var len__7937__auto___16251 = arguments.length;
var i__7938__auto___16252 = (0);
while(true){
if((i__7938__auto___16252 < len__7937__auto___16251)){
args16248.push((arguments[i__7938__auto___16252]));

var G__16253 = (i__7938__auto___16252 + (1));
i__7938__auto___16252 = G__16253;
continue;
} else {
}
break;
}

var G__16250 = args16248.length;
switch (G__16250) {
case 2:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16248.length)].join('')));

}
});

historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,k){
return historian.core.register_atom_BANG_.call(null,atom,k,null);
});

historian.core.register_atom_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom,k,passive_QMARK_){
return cljs.core.swap_BANG_.call(null,historian.core.overseer,cljs.core.assoc,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"atom","atom",-397043653),atom,new cljs.core.Keyword(null,"passive?","passive?",241346064),passive_QMARK_], null));
});

historian.core.register_atom_BANG_.cljs$lang$maxFixedArity = 3;

historian.core.de_register_atom_BANG_ = (function historian$core$de_register_atom_BANG_(k){
return cljs.core.swap_BANG_.call(null,historian.core.overseer,cljs.core.dissoc,k);
});
historian.core.snapshot = (function historian$core$snapshot(k){
var map__16257 = cljs.core.get.call(null,cljs.core.deref.call(null,historian.core.overseer),k);
var map__16257__$1 = ((((!((map__16257 == null)))?((((map__16257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16257):map__16257);
var atom = cljs.core.get.call(null,map__16257__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var passive_QMARK_ = cljs.core.get.call(null,map__16257__$1,new cljs.core.Keyword(null,"passive?","passive?",241346064));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,atom),new cljs.core.Keyword(null,"passive?","passive?",241346064),passive_QMARK_,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),goog.now()], null);
});
historian.core.take_snapshots = (function historian$core$take_snapshots(){
return cljs.core.mapv.call(null,historian.core.snapshot,cljs.core.keys.call(null,cljs.core.deref.call(null,historian.core.overseer)));
});
/**
 * Check if any non-passive snapshot is different.
 */
historian.core.different_from_QMARK_ = (function historian$core$different_from_QMARK_(new$,old){
var clean_maps = (function (p1__16259_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"passive?","passive?",241346064).cljs$core$IFn$_invoke$arity$1(p1__16259_SHARP_))){
return null;
} else {
return cljs.core.dissoc.call(null,p1__16259_SHARP_,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
}
});
return cljs.core.not_EQ_.call(null,cljs.core.map.call(null,clean_maps,old),cljs.core.map.call(null,clean_maps,new$));
});
historian.core.different_from_last_QMARK_ = (function historian$core$different_from_last_QMARK_(new$){
return historian.core.different_from_QMARK_.call(null,new$,cljs.core.peek.call(null,cljs.core.deref.call(null,historian.core.get_library_atom.call(null))));
});
historian.core.save_snapshots_BANG_ = (function historian$core$save_snapshots_BANG_(snaps){
return cljs.core.swap_BANG_.call(null,historian.core.get_library_atom.call(null),cljs.core.conj,snaps);
});
historian.core.save_if_different_BANG_ = (function historian$core$save_if_different_BANG_(snaps){
if(cljs.core.truth_(historian.core.different_from_last_QMARK_.call(null,snaps))){
historian.core.save_snapshots_BANG_.call(null,snaps);

return cljs.core.reset_BANG_.call(null,historian.core.get_prophecy_atom.call(null),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
historian.core.save_prophecies_BANG_ = (function historian$core$save_prophecies_BANG_(snaps){
return cljs.core.swap_BANG_.call(null,historian.core.get_prophecy_atom.call(null),cljs.core.conj,snaps);
});
historian.core._STAR_record_active_STAR_ = true;
/**
 * Restore all the atoms being watched to a previous/different state.
 */
historian.core.restore_BANG_ = (function historian$core$restore_BANG_(snaps){
var _STAR_record_active_STAR_16265 = historian.core._STAR_record_active_STAR_;
historian.core._STAR_record_active_STAR_ = false;

try{var seq__16266 = cljs.core.seq.call(null,snaps);
var chunk__16267 = null;
var count__16268 = (0);
var i__16269 = (0);
while(true){
if((i__16269 < count__16268)){
var s = cljs.core._nth.call(null,chunk__16267,i__16269);
cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"atom","atom",-397043653)], null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(s));

var G__16270 = seq__16266;
var G__16271 = chunk__16267;
var G__16272 = count__16268;
var G__16273 = (i__16269 + (1));
seq__16266 = G__16270;
chunk__16267 = G__16271;
count__16268 = G__16272;
i__16269 = G__16273;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16266);
if(temp__4657__auto__){
var seq__16266__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16266__$1)){
var c__7643__auto__ = cljs.core.chunk_first.call(null,seq__16266__$1);
var G__16274 = cljs.core.chunk_rest.call(null,seq__16266__$1);
var G__16275 = c__7643__auto__;
var G__16276 = cljs.core.count.call(null,c__7643__auto__);
var G__16277 = (0);
seq__16266 = G__16274;
chunk__16267 = G__16275;
count__16268 = G__16276;
i__16269 = G__16277;
continue;
} else {
var s = cljs.core.first.call(null,seq__16266__$1);
cljs.core.reset_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"atom","atom",-397043653)], null)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(s));

var G__16278 = cljs.core.next.call(null,seq__16266__$1);
var G__16279 = null;
var G__16280 = (0);
var G__16281 = (0);
seq__16266 = G__16278;
chunk__16267 = G__16279;
count__16268 = G__16280;
i__16269 = G__16281;
continue;
}
} else {
return null;
}
}
break;
}
}finally {historian.core._STAR_record_active_STAR_ = _STAR_record_active_STAR_16265;
}});
historian.core.watch_BANG_ = (function historian$core$watch_BANG_(atm){
return cljs.core.add_watch.call(null,atm,new cljs.core.Keyword("historian.core","historian-watch","historian.core/historian-watch",1998347323),(function (k,_,old_value,new_value){
if(cljs.core.not_EQ_.call(null,old_value,new_value)){
if(historian.core._STAR_record_active_STAR_){
return historian.core.save_if_different_BANG_.call(null,historian.core.take_snapshots.call(null));
} else {
return null;
}
} else {
return null;
}
}));
});
historian.core.remove_watch_BANG_ = (function historian$core$remove_watch_BANG_(a){
return cljs.core.remove_watch.call(null,a,new cljs.core.Keyword("historian.core","historian-watch","historian.core/historian-watch",1998347323));
});
historian.core.can_undo_QMARK__STAR_ = (function historian$core$can_undo_QMARK__STAR_(records){
if(cljs.core.next.call(null,records)){
return true;
} else {
return null;
}
});
historian.core.can_redo_QMARK__STAR_ = (function historian$core$can_redo_QMARK__STAR_(records){
if(cljs.core.truth_(cljs.core.first.call(null,records))){
return true;
} else {
return null;
}
});
/**
 * Trigger a record to history. The current state of at least one atom
 *   must be different from the previous one for the record to be
 *   included into history.
 */
historian.core.trigger_record_BANG_ = (function historian$core$trigger_record_BANG_(){
if(historian.core._STAR_record_active_STAR_){
return historian.core.save_if_different_BANG_.call(null,historian.core.take_snapshots.call(null));
} else {
return null;
}
});
/**
 * Overwrite the last historic entry with a new one.
 */
historian.core.overwrite_record_BANG_ = (function historian$core$overwrite_record_BANG_(var_args){
var args16282 = [];
var len__7937__auto___16285 = arguments.length;
var i__7938__auto___16286 = (0);
while(true){
if((i__7938__auto___16286 < len__7937__auto___16285)){
args16282.push((arguments[i__7938__auto___16286]));

var G__16287 = (i__7938__auto___16286 + (1));
i__7938__auto___16286 = G__16287;
continue;
} else {
}
break;
}

var G__16284 = args16282.length;
switch (G__16284) {
case 0:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16282.length)].join('')));

}
});

historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return historian.core.overwrite_record_BANG_.call(null,historian.core.take_snapshots.call(null));
});

historian.core.overwrite_record_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (snaps){
if(historian.core._STAR_record_active_STAR_){
cljs.core.swap_BANG_.call(null,historian.core.get_library_atom.call(null),cljs.core.pop);

return historian.core.save_snapshots_BANG_.call(null,snaps);
} else {
return null;
}
});

historian.core.overwrite_record_BANG_.cljs$lang$maxFixedArity = 1;

/**
 * The library atom (where all records are kept to enable 'undo') will
 *   be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers). Depending
 *   on where you use this function, you might want to fire a
 *   `trigger-record!' just after.
 *   
 *   Usually, one would also want to use `replace-prophecy!' in order to
 *   replace the 'redo' atom.
 */
historian.core.replace_library_BANG_ = (function historian$core$replace_library_BANG_(new_atom){
return cljs.core.reset_BANG_.call(null,historian.core.alexandria,new_atom);
});
/**
 * The prophecy atom (where all records are kept to enable 'redo')
 *   will be replaced by the new-atom. Useful if you've already done some
 *   modifications to the new-atom (like added some watchers).
 * 
 *   Usually used with `replace-library'.
 */
historian.core.replace_prophecy_BANG_ = (function historian$core$replace_prophecy_BANG_(new_atom){
return cljs.core.reset_BANG_.call(null,historian.core.nostradamus,new_atom);
});
/**
 * Add the atom to the overseer watch. When any of the atom under its
 *   watch is modified, it triggers a save of every atom to history (if
 *   any of the atom is different form the last historic state). Return
 *   the atom.
 *   
 *   If `passive?' is true, the atom will NOT trigger any new save and
 *   will only be saved when another atom under watch is modified.
 */
historian.core.record_BANG_ = (function historian$core$record_BANG_(var_args){
var args16289 = [];
var len__7937__auto___16292 = arguments.length;
var i__7938__auto___16293 = (0);
while(true){
if((i__7938__auto___16293 < len__7937__auto___16292)){
args16289.push((arguments[i__7938__auto___16293]));

var G__16294 = (i__7938__auto___16293 + (1));
i__7938__auto___16293 = G__16294;
continue;
} else {
}
break;
}

var G__16291 = args16289.length;
switch (G__16291) {
case 2:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16289.length)].join('')));

}
});

historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atm,k){
return historian.core.record_BANG_.call(null,atm,k,null);
});

historian.core.record_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atm,k,passive_QMARK_){
historian.core.register_atom_BANG_.call(null,atm,k,passive_QMARK_);

if(cljs.core.truth_(passive_QMARK_)){
} else {
historian.core.watch_BANG_.call(null,atm);
}

historian.core.trigger_record_BANG_.call(null);

return atm;
});

historian.core.record_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Remove the atom associated to this key from the overseer watch.
 *   This atom will no longer be watched, nor its state saved to
 *   history.
 */
historian.core.stop_record_BANG_ = (function historian$core$stop_record_BANG_(k){
historian.core.remove_watch_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,historian.core.overseer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"atom","atom",-397043653)], null)));

return historian.core.de_register_atom_BANG_.call(null,k);
});
/**
 * Remove all the atoms from the overseer watch. The atoms will no
 *   longer be watched, nor any of their state saved to history.
 */
historian.core.stop_all_records_BANG_ = (function historian$core$stop_all_records_BANG_(){
var ks = cljs.core.keys.call(null,cljs.core.deref.call(null,historian.core.overseer));
var seq__16300 = cljs.core.seq.call(null,ks);
var chunk__16301 = null;
var count__16302 = (0);
var i__16303 = (0);
while(true){
if((i__16303 < count__16302)){
var k = cljs.core._nth.call(null,chunk__16301,i__16303);
historian.core.stop_record_BANG_.call(null,k);

var G__16304 = seq__16300;
var G__16305 = chunk__16301;
var G__16306 = count__16302;
var G__16307 = (i__16303 + (1));
seq__16300 = G__16304;
chunk__16301 = G__16305;
count__16302 = G__16306;
i__16303 = G__16307;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16300);
if(temp__4657__auto__){
var seq__16300__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16300__$1)){
var c__7643__auto__ = cljs.core.chunk_first.call(null,seq__16300__$1);
var G__16308 = cljs.core.chunk_rest.call(null,seq__16300__$1);
var G__16309 = c__7643__auto__;
var G__16310 = cljs.core.count.call(null,c__7643__auto__);
var G__16311 = (0);
seq__16300 = G__16308;
chunk__16301 = G__16309;
count__16302 = G__16310;
i__16303 = G__16311;
continue;
} else {
var k = cljs.core.first.call(null,seq__16300__$1);
historian.core.stop_record_BANG_.call(null,k);

var G__16312 = cljs.core.next.call(null,seq__16300__$1);
var G__16313 = null;
var G__16314 = (0);
var G__16315 = (0);
seq__16300 = G__16312;
chunk__16301 = G__16313;
count__16302 = G__16314;
i__16303 = G__16315;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Do we have enough history to undo?
 */
historian.core.can_undo_QMARK_ = (function historian$core$can_undo_QMARK_(){
return historian.core.can_undo_QMARK__STAR_.call(null,cljs.core.deref.call(null,historian.core.get_library_atom.call(null)));
});
/**
 * Can we redo?
 */
historian.core.can_redo_QMARK_ = (function historian$core$can_redo_QMARK_(){
return historian.core.can_redo_QMARK__STAR_.call(null,cljs.core.deref.call(null,historian.core.get_prophecy_atom.call(null)));
});
historian.core.undo_BANG_ = (function historian$core$undo_BANG_(){
var alex = cljs.core.deref.call(null,historian.core.get_library_atom.call(null));
if(cljs.core.truth_(historian.core.can_undo_QMARK__STAR_.call(null,alex))){
historian.core.save_prophecies_BANG_.call(null,cljs.core.peek.call(null,alex));

return historian.core.restore_BANG_.call(null,cljs.core.peek.call(null,cljs.core.reset_BANG_.call(null,historian.core.get_library_atom.call(null),cljs.core.pop.call(null,alex))));
} else {
return null;
}
});
historian.core.redo_BANG_ = (function historian$core$redo_BANG_(){
var nos = cljs.core.deref.call(null,historian.core.get_prophecy_atom.call(null));
if(cljs.core.truth_(historian.core.can_redo_QMARK__STAR_.call(null,nos))){
historian.core.save_snapshots_BANG_.call(null,cljs.core.peek.call(null,nos));

cljs.core.reset_BANG_.call(null,historian.core.get_prophecy_atom.call(null),cljs.core.pop.call(null,nos));

return historian.core.restore_BANG_.call(null,cljs.core.peek.call(null,nos));
} else {
return null;
}
});
historian.core.clear_history_BANG_ = (function historian$core$clear_history_BANG_(){
cljs.core.reset_BANG_.call(null,historian.core.get_library_atom.call(null),cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_.call(null,historian.core.get_prophecy_atom.call(null),cljs.core.PersistentVector.EMPTY);
});
new cljs.core.Keyword(null,"clj","clj",-660495428).cljs$core$IFn$_invoke$arity$1((function (){
/**
 * Deactivate the watches write to history and execute the body. If
 *   any non-passive atom is modified, replace the last history with a
 *   snapshot taken just before executing the body and then take another
 *   snapshot.
 */
historian.core.with_single_before_and_after = (function historian$core$with_single_before_and_after(var_args){
var args__7944__auto__ = [];
var len__7937__auto___16321 = arguments.length;
var i__7938__auto___16322 = (0);
while(true){
if((i__7938__auto___16322 < len__7937__auto___16321)){
args__7944__auto__.push((arguments[i__7938__auto___16322]));

var G__16323 = (i__7938__auto___16322 + (1));
i__7938__auto___16322 = G__16323;
continue;
} else {
}
break;
}

var argseq__7945__auto__ = ((((2) < args__7944__auto__.length))?(new cljs.core.IndexedSeq(args__7944__auto__.slice((2)),(0),null)):null);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7945__auto__);
});

historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,content){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7666__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"before-snaps__16316__auto__","before-snaps__16316__auto__",1454512060,null)),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","take-snapshots","historian.core/take-snapshots",-2035244807,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","off-the-record","historian.core/off-the-record",1588414158,null)),content)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__7666__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"after-snaps__16317__auto__","after-snaps__16317__auto__",-764416898,null)),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","take-snapshots","historian.core/take-snapshots",-2035244807,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","different-from?","historian.core/different-from?",-560958704,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"after-snaps__16317__auto__","after-snaps__16317__auto__",-764416898,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"before-snaps__16316__auto__","before-snaps__16316__auto__",1454512060,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","overwrite-record!","historian.core/overwrite-record!",928719600,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"before-snaps__16316__auto__","before-snaps__16316__auto__",1454512060,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})(),(function (){var x__7666__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("historian.core","trigger-record!","historian.core/trigger-record!",-1161558125,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7666__auto__);
})())));
});

historian.core.with_single_before_and_after.cljs$lang$maxFixedArity = (2);

historian.core.with_single_before_and_after.cljs$lang$applyTo = (function (seq16318){
var G__16319 = cljs.core.first.call(null,seq16318);
var seq16318__$1 = cljs.core.next.call(null,seq16318);
var G__16320 = cljs.core.first.call(null,seq16318__$1);
var seq16318__$2 = cljs.core.next.call(null,seq16318__$1);
return historian.core.with_single_before_and_after.cljs$core$IFn$_invoke$arity$variadic(G__16319,G__16320,seq16318__$2);
});


return historian.core.with_single_before_and_after.cljs$lang$macro = true;
})()
);
