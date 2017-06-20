// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot compare "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#uuid \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid__$1.toString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__16077_16081 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__16078_16082 = null;
var count__16079_16083 = (0);
var i__16080_16084 = (0);
while(true){
if((i__16080_16084 < count__16079_16083)){
var k_16085 = cljs.core._nth.call(null,chunk__16078_16082,i__16080_16084);
var v_16086 = (b[k_16085]);
(a[k_16085] = v_16086);

var G__16087 = seq__16077_16081;
var G__16088 = chunk__16078_16082;
var G__16089 = count__16079_16083;
var G__16090 = (i__16080_16084 + (1));
seq__16077_16081 = G__16087;
chunk__16078_16082 = G__16088;
count__16079_16083 = G__16089;
i__16080_16084 = G__16090;
continue;
} else {
var temp__4657__auto___16091 = cljs.core.seq.call(null,seq__16077_16081);
if(temp__4657__auto___16091){
var seq__16077_16092__$1 = temp__4657__auto___16091;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16077_16092__$1)){
var c__7643__auto___16093 = cljs.core.chunk_first.call(null,seq__16077_16092__$1);
var G__16094 = cljs.core.chunk_rest.call(null,seq__16077_16092__$1);
var G__16095 = c__7643__auto___16093;
var G__16096 = cljs.core.count.call(null,c__7643__auto___16093);
var G__16097 = (0);
seq__16077_16081 = G__16094;
chunk__16078_16082 = G__16095;
count__16079_16083 = G__16096;
i__16080_16084 = G__16097;
continue;
} else {
var k_16098 = cljs.core.first.call(null,seq__16077_16092__$1);
var v_16099 = (b[k_16098]);
(a[k_16098] = v_16099);

var G__16100 = cljs.core.next.call(null,seq__16077_16092__$1);
var G__16101 = null;
var G__16102 = (0);
var G__16103 = (0);
seq__16077_16081 = G__16100;
chunk__16078_16082 = G__16101;
count__16079_16083 = G__16102;
i__16080_16084 = G__16103;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args16104 = [];
var len__7937__auto___16107 = arguments.length;
var i__7938__auto___16108 = (0);
while(true){
if((i__7938__auto___16108 < len__7937__auto___16107)){
args16104.push((arguments[i__7938__auto___16108]));

var G__16109 = (i__7938__auto___16108 + (1));
i__7938__auto___16108 = G__16109;
continue;
} else {
}
break;
}

var G__16106 = args16104.length;
switch (G__16106) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16104.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__16111 = (i + (2));
var G__16112 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__16111;
ret = G__16112;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16113_16117 = cljs.core.seq.call(null,v);
var chunk__16114_16118 = null;
var count__16115_16119 = (0);
var i__16116_16120 = (0);
while(true){
if((i__16116_16120 < count__16115_16119)){
var x_16121 = cljs.core._nth.call(null,chunk__16114_16118,i__16116_16120);
ret.push(x_16121);

var G__16122 = seq__16113_16117;
var G__16123 = chunk__16114_16118;
var G__16124 = count__16115_16119;
var G__16125 = (i__16116_16120 + (1));
seq__16113_16117 = G__16122;
chunk__16114_16118 = G__16123;
count__16115_16119 = G__16124;
i__16116_16120 = G__16125;
continue;
} else {
var temp__4657__auto___16126 = cljs.core.seq.call(null,seq__16113_16117);
if(temp__4657__auto___16126){
var seq__16113_16127__$1 = temp__4657__auto___16126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16113_16127__$1)){
var c__7643__auto___16128 = cljs.core.chunk_first.call(null,seq__16113_16127__$1);
var G__16129 = cljs.core.chunk_rest.call(null,seq__16113_16127__$1);
var G__16130 = c__7643__auto___16128;
var G__16131 = cljs.core.count.call(null,c__7643__auto___16128);
var G__16132 = (0);
seq__16113_16117 = G__16129;
chunk__16114_16118 = G__16130;
count__16115_16119 = G__16131;
i__16116_16120 = G__16132;
continue;
} else {
var x_16133 = cljs.core.first.call(null,seq__16113_16127__$1);
ret.push(x_16133);

var G__16134 = cljs.core.next.call(null,seq__16113_16127__$1);
var G__16135 = null;
var G__16136 = (0);
var G__16137 = (0);
seq__16113_16117 = G__16134;
chunk__16114_16118 = G__16135;
count__16115_16119 = G__16136;
i__16116_16120 = G__16137;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16138_16142 = cljs.core.seq.call(null,v);
var chunk__16139_16143 = null;
var count__16140_16144 = (0);
var i__16141_16145 = (0);
while(true){
if((i__16141_16145 < count__16140_16144)){
var x_16146 = cljs.core._nth.call(null,chunk__16139_16143,i__16141_16145);
ret.push(x_16146);

var G__16147 = seq__16138_16142;
var G__16148 = chunk__16139_16143;
var G__16149 = count__16140_16144;
var G__16150 = (i__16141_16145 + (1));
seq__16138_16142 = G__16147;
chunk__16139_16143 = G__16148;
count__16140_16144 = G__16149;
i__16141_16145 = G__16150;
continue;
} else {
var temp__4657__auto___16151 = cljs.core.seq.call(null,seq__16138_16142);
if(temp__4657__auto___16151){
var seq__16138_16152__$1 = temp__4657__auto___16151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16138_16152__$1)){
var c__7643__auto___16153 = cljs.core.chunk_first.call(null,seq__16138_16152__$1);
var G__16154 = cljs.core.chunk_rest.call(null,seq__16138_16152__$1);
var G__16155 = c__7643__auto___16153;
var G__16156 = cljs.core.count.call(null,c__7643__auto___16153);
var G__16157 = (0);
seq__16138_16142 = G__16154;
chunk__16139_16143 = G__16155;
count__16140_16144 = G__16156;
i__16141_16145 = G__16157;
continue;
} else {
var x_16158 = cljs.core.first.call(null,seq__16138_16152__$1);
ret.push(x_16158);

var G__16159 = cljs.core.next.call(null,seq__16138_16152__$1);
var G__16160 = null;
var G__16161 = (0);
var G__16162 = (0);
seq__16138_16142 = G__16159;
chunk__16139_16143 = G__16160;
count__16140_16144 = G__16161;
i__16141_16145 = G__16162;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__16163_16167 = cljs.core.seq.call(null,v);
var chunk__16164_16168 = null;
var count__16165_16169 = (0);
var i__16166_16170 = (0);
while(true){
if((i__16166_16170 < count__16165_16169)){
var x_16171 = cljs.core._nth.call(null,chunk__16164_16168,i__16166_16170);
ret.push(x_16171);

var G__16172 = seq__16163_16167;
var G__16173 = chunk__16164_16168;
var G__16174 = count__16165_16169;
var G__16175 = (i__16166_16170 + (1));
seq__16163_16167 = G__16172;
chunk__16164_16168 = G__16173;
count__16165_16169 = G__16174;
i__16166_16170 = G__16175;
continue;
} else {
var temp__4657__auto___16176 = cljs.core.seq.call(null,seq__16163_16167);
if(temp__4657__auto___16176){
var seq__16163_16177__$1 = temp__4657__auto___16176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16163_16177__$1)){
var c__7643__auto___16178 = cljs.core.chunk_first.call(null,seq__16163_16177__$1);
var G__16179 = cljs.core.chunk_rest.call(null,seq__16163_16177__$1);
var G__16180 = c__7643__auto___16178;
var G__16181 = cljs.core.count.call(null,c__7643__auto___16178);
var G__16182 = (0);
seq__16163_16167 = G__16179;
chunk__16164_16168 = G__16180;
count__16165_16169 = G__16181;
i__16166_16170 = G__16182;
continue;
} else {
var x_16183 = cljs.core.first.call(null,seq__16163_16177__$1);
ret.push(x_16183);

var G__16184 = cljs.core.next.call(null,seq__16163_16177__$1);
var G__16185 = null;
var G__16186 = (0);
var G__16187 = (0);
seq__16163_16167 = G__16184;
chunk__16164_16168 = G__16185;
count__16165_16169 = G__16186;
i__16166_16170 = G__16187;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args16188 = [];
var len__7937__auto___16203 = arguments.length;
var i__7938__auto___16204 = (0);
while(true){
if((i__7938__auto___16204 < len__7937__auto___16203)){
args16188.push((arguments[i__7938__auto___16204]));

var G__16205 = (i__7938__auto___16204 + (1));
i__7938__auto___16204 = G__16205;
continue;
} else {
}
break;
}

var G__16190 = args16188.length;
switch (G__16190) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16188.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__16191 = obj;
G__16191.push(kfn.call(null,k),vfn.call(null,v));

return G__16191;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x16192 = cljs.core.clone.call(null,handlers);
x16192.forEach = ((function (x16192,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__16193 = cljs.core.seq.call(null,coll);
var chunk__16194 = null;
var count__16195 = (0);
var i__16196 = (0);
while(true){
if((i__16196 < count__16195)){
var vec__16197 = cljs.core._nth.call(null,chunk__16194,i__16196);
var k = cljs.core.nth.call(null,vec__16197,(0),null);
var v = cljs.core.nth.call(null,vec__16197,(1),null);
f.call(null,v,k);

var G__16207 = seq__16193;
var G__16208 = chunk__16194;
var G__16209 = count__16195;
var G__16210 = (i__16196 + (1));
seq__16193 = G__16207;
chunk__16194 = G__16208;
count__16195 = G__16209;
i__16196 = G__16210;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16193);
if(temp__4657__auto__){
var seq__16193__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16193__$1)){
var c__7643__auto__ = cljs.core.chunk_first.call(null,seq__16193__$1);
var G__16211 = cljs.core.chunk_rest.call(null,seq__16193__$1);
var G__16212 = c__7643__auto__;
var G__16213 = cljs.core.count.call(null,c__7643__auto__);
var G__16214 = (0);
seq__16193 = G__16211;
chunk__16194 = G__16212;
count__16195 = G__16213;
i__16196 = G__16214;
continue;
} else {
var vec__16200 = cljs.core.first.call(null,seq__16193__$1);
var k = cljs.core.nth.call(null,vec__16200,(0),null);
var v = cljs.core.nth.call(null,vec__16200,(1),null);
f.call(null,v,k);

var G__16215 = cljs.core.next.call(null,seq__16193__$1);
var G__16216 = null;
var G__16217 = (0);
var G__16218 = (0);
seq__16193 = G__16215;
chunk__16194 = G__16216;
count__16195 = G__16217;
i__16196 = G__16218;
continue;
}
} else {
return null;
}
}
break;
}
});})(x16192,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x16192;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args16219 = [];
var len__7937__auto___16225 = arguments.length;
var i__7938__auto___16226 = (0);
while(true){
if((i__7938__auto___16226 < len__7937__auto___16225)){
args16219.push((arguments[i__7938__auto___16226]));

var G__16227 = (i__7938__auto___16226 + (1));
i__7938__auto___16226 = G__16227;
continue;
} else {
}
break;
}

var G__16221 = args16219.length;
switch (G__16221) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16219.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit16222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit16222 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta16223){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta16223 = meta16223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit16222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16224,meta16223__$1){
var self__ = this;
var _16224__$1 = this;
return (new cognitect.transit.t_cognitect$transit16222(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta16223__$1));
});

cognitect.transit.t_cognitect$transit16222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16224){
var self__ = this;
var _16224__$1 = this;
return self__.meta16223;
});

cognitect.transit.t_cognitect$transit16222.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit16222.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit16222.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit16222.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit16222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta16223","meta16223",-924479478,null)], null);
});

cognitect.transit.t_cognitect$transit16222.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit16222.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit16222";

cognitect.transit.t_cognitect$transit16222.cljs$lang$ctorPrWriter = (function (this__7435__auto__,writer__7436__auto__,opt__7437__auto__){
return cljs.core._write.call(null,writer__7436__auto__,"cognitect.transit/t_cognitect$transit16222");
});

cognitect.transit.__GT_t_cognitect$transit16222 = (function cognitect$transit$__GT_t_cognitect$transit16222(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16223){
return (new cognitect.transit.t_cognitect$transit16222(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta16223));
});

}

return (new cognitect.transit.t_cognitect$transit16222(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6824__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6824__auto__)){
return or__6824__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
