// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee_front.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.nodejs');
goog.require('akiee_front.app_db');
goog.require('akiee_front.constants');
goog.require('akiee_front.handlers');
goog.require('akiee_front.node');
goog.require('akiee_front.sidebar');
goog.require('akiee_front.dialogs');
cljs.core.enable_console_print_BANG_.call(null);
akiee_front.core.modifier = ((cljs.core._EQ_.call(null,process.platform,"darwin"))?"Cmd":"Ctrl");
akiee_front.core.path = cljs.nodejs.require.call(null,"path");
akiee_front.core.set_title_BANG_ = (function akiee_front$core$set_title_BANG_(){
var title_txt = ((cljs.core._EQ_.call(null,akiee_front.core.path.basename(akiee_front.app_db.task_location.call(null)),".akiee"))?"Akiee":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.path.basename(akiee_front.app_db.task_location.call(null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" \u2014 Akiee")].join(''));
Window.title = title_txt;

return document.title = title_txt;
});
/**
 * String String String -> Component
 *   Consumes the text tx, the id and the title t, the state,
 *   the test function tfn, the on-click function onfn of the button;
 *   produces the component for the button.
 */
akiee_front.core.list_state_button = (function akiee_front$core$list_state_button(tx,id,t,state,tfn,onfn){
var active_QMARK_ = (((cljs.core._EQ_.call(null,tfn.call(null),state)) && (cljs.core.not.call(null,akiee_front.app_db.editor_QMARK_.call(null))))?"active":"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.navbar-btn.btn-state.toolbar-button","button.btn.btn-default.navbar-btn.btn-state.toolbar-button",-799489622),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"class","class",-2030961996),active_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),onfn], null),tx], null);
});
akiee_front.core.todo_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.list_state_button,"Todo","show-todo",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+1")].join(''),akiee_front.constants.TODO,akiee_front.app_db.list_state,akiee_front.app_db.switch_todo_BANG_], null);
akiee_front.core.doing_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.list_state_button,"Doing","show-doing",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+2 / "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+Space")].join(''),akiee_front.constants.DOING,akiee_front.app_db.list_state,akiee_front.app_db.switch_doing_BANG_], null);
akiee_front.core.done_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.list_state_button,"Done","show-done",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+3")].join(''),akiee_front.constants.DONE,akiee_front.app_db.list_state,akiee_front.app_db.switch_done_BANG_], null);
akiee_front.core.board_button = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.list_state_button,"Board","show-all",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+4")].join(''),akiee_front.constants.ALL,akiee_front.app_db.list_state,akiee_front.app_db.switch_all_BANG_], null);
/**
 * String String String -> Component
 *   Consumes the icon name in, the id and title t of the button, the test function tfn?,
 *   the on-click function onfn of the button.
 *   produces the component for the button.
 */
akiee_front.core.switch_button = (function akiee_front$core$switch_button(in$,id,t,tfn_QMARK_,onfn){
var icon_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("fa-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var active_QMARK_ = (cljs.core.truth_(tfn_QMARK_.call(null))?"active":"");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.navbar-btn.btn-square.toolbar-button","button.btn.btn-default.navbar-btn.btn-square.toolbar-button",-1577311189),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),t,new cljs.core.Keyword(null,"class","class",-2030961996),active_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),onfn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-fw","span.fa.fa-fw",150090794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),icon_name], null)], null)], null);
});
akiee_front.core.editor_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.switch_button,"code","show-editor",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+E / "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+Space")].join(''),akiee_front.app_db.editor_QMARK_,akiee_front.app_db.switch_editor_BANG_], null);
akiee_front.core.search_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.switch_button,"search","show-searchbox",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+F")].join(''),akiee_front.app_db.search_QMARK_,akiee_front.app_db.switch_search_BANG_], null);
akiee_front.core.entry_switch = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.switch_button,"plus","show-enter-task",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+Enter")].join(''),akiee_front.app_db.entry_QMARK_,akiee_front.app_db.switch_entry_BANG_], null);
akiee_front.core.menu_button = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.switch_button,"ellipsis-v","show-menu",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.core.modifier),cljs.core.str.cljs$core$IFn$_invoke$arity$1("+M")].join(''),(function (){
return false;
}),akiee_front.handlers.onclick_menu], null);
akiee_front.core.entry_close = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.hover-button","button.hover-button",-1848477294),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"close-app",new cljs.core.Keyword(null,"title","title",636505583),"Alt-F4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee_front.handlers.onclick_close], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"./css/img/window-close.svg"], null)], null)], null);
/**
 * -> Component
 *   The toolbar for changing the state of the Akiee
 */
akiee_front.core.toolbar = (function akiee_front$core$toolbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav#toolbar.navbar.navbar-default","nav#toolbar.navbar.navbar-default",-1269321238),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"navigation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toolbar-fluid.container-fluid","div#toolbar-fluid.container-fluid",-1893262592),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toolbar-inside.navbar-flex","div#toolbar-inside.navbar-flex",1775857984),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#taskbuttons.btn-group","div#taskbuttons.btn-group",510226813),akiee_front.core.todo_button,akiee_front.core.doing_button,akiee_front.core.done_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#toolbar-spacer.spacer","div#toolbar-spacer.spacer",656726554)], null),akiee_front.core.search_switch,akiee_front.core.entry_switch,akiee_front.core.menu_button,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#close","div#close",837197730),akiee_front.core.entry_close], null)], null)], null)], null);
});
/**
 * ListOf* String -> Component
 *   Consumes a list of anything loa and a name; produces the component of a select field.
 */
akiee_front.core.select = (function akiee_front$core$select(loa,n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select#enter-task-status.form-control","select#enter-task-status.form-control",-1849790969),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"default-value","default-value",232220170),"Inbox"], null),(function (){var iter__7612__auto__ = (function akiee_front$core$select_$_iter__11457(s__11458){
return (new cljs.core.LazySeq(null,(function (){
var s__11458__$1 = s__11458;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11458__$1);
if(temp__4657__auto__){
var s__11458__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11458__$2)){
var c__7610__auto__ = cljs.core.chunk_first.call(null,s__11458__$2);
var size__7611__auto__ = cljs.core.count.call(null,c__7610__auto__);
var b__11460 = cljs.core.chunk_buffer.call(null,size__7611__auto__);
if((function (){var i__11459 = (0);
while(true){
if((i__11459 < size__7611__auto__)){
var a = cljs.core._nth.call(null,c__7610__auto__,i__11459);
cljs.core.chunk_append.call(null,b__11460,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("loa"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')], null),a], null));

var G__11461 = (i__11459 + (1));
i__11459 = G__11461;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11460),akiee_front$core$select_$_iter__11457.call(null,cljs.core.chunk_rest.call(null,s__11458__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11460),null);
}
} else {
var a = cljs.core.first.call(null,s__11458__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("loa"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join('')], null),a], null),akiee_front$core$select_$_iter__11457.call(null,cljs.core.rest.call(null,s__11458__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7612__auto__.call(null,loa);
})()], null);
});
/**
 * ListOfTaskState -> Component
 *   Consumes the a list of taskstate lot;
 *   produces the component of the select field for the state of the new task.
 */
akiee_front.core.enter_task_status = (function akiee_front$core$enter_task_status(lot){
return akiee_front.core.select.call(null,lot,"task-status");
});
/**
 * ListofString -> Component
 *   Consumes a list of string los; produces the component for the project select.
 */
akiee_front.core.enter_task_project = (function akiee_front$core$enter_task_project(los){
return akiee_front.core.select.call(null,los,"task-project");
});
/**
 * -> Component
 *   The entry form for entering tasks
 */
akiee_front.core.enter_task = (function akiee_front$core$enter_task(){
var show_QMARK_ = (cljs.core.truth_(akiee_front.app_db.entry_QMARK_.call(null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"open"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"closed"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#enter-task-div.container-fluid.slider","div#enter-task-div.container-fluid.slider",721004260),show_QMARK_,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form#enter-task","form#enter-task",-1146655825),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),akiee_front.handlers.handle_enter_task], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#enter-headline.form-control","input#enter-headline.form-control",-66544980),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter Headline",new cljs.core.Keyword(null,"name","name",1843675177),"headline"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.enter_task_status,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TODO","DOING","DONE"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.enter_task_project,akiee_front.app_db.projects.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.btn-on-grey","button.btn.btn-default.btn-on-grey",-1504773694),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Create"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#cancel-enter-task.btn.btn-link","button#cancel-enter-task.btn.btn-link",1812524404),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee_front.handlers.cancel_enter_task], null),"Cancel"], null)], null)], null);
});
/**
 * -> Component
 *   The entry form for searching tasks
 */
akiee_front.core.search = (function akiee_front$core$search(){
var show_QMARK_ = (cljs.core.truth_(akiee_front.app_db.search_QMARK_.call(null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"open"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"closed"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#search-form.slider","div#search-form.slider",-201102750),show_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#search-input.form-control.mvx-search","input#search-input.form-control.mvx-search",1089613138),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),akiee_front.handlers.handle_onchange_search], null)], null)], null);
});
/**
 * -> Component
 *   The textarea to directly edit the task list in markdown
 */
akiee_front.core.editor = (function akiee_front$core$editor(){
var show_QMARK_ = (cljs.core.truth_(akiee_front.app_db.editor_QMARK_.call(null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block"], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#editor","div#editor",-1877510501),show_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#editor-area","textarea#editor-area",1920534903),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",850049680),(3),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),akiee_front.handlers.handle_blur_editor], null)], null)], null);
});
akiee_front.core.task = (function akiee_front$core$task(t){
var class$ = ((cljs.core._EQ_.call(null,akiee_front.app_db.selected.call(null),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(t)))?"selected":"");
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ked","ked",-2046210459).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"data-key","data-key",1775480631),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee_front.handlers.onclick_task,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.taskstate","td.taskstate",-1362714769),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee_front.handlers.handle_onclick_taskstate], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hover-button"], null),new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(t)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.project-tag.label","span.project-tag.label",-2147232299),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(t)], null),new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(t)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(2)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.rank","td.rank",134361831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-ellipsis-h.hover-button","span.fa.fa-ellipsis-h.hover-button",837311674),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee_front.handlers.onclick_taskmenu], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(5)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.rank","td.rank",134361831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-chevron-up.hover-button","span.fa.fa-chevron-up.hover-button",-92749066),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee_front.handlers.handle_onclick_up], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3)], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.rank","td.rank",134361831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.fa.fa-chevron-down.hover-button","span.fa.fa-chevron-down.hover-button",-1276690443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),akiee_front.handlers.handle_onclick_down], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(4)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(t)], null));
});
akiee_front.core.task_table = (function akiee_front$core$task_table(tb){
if(cljs.core.empty_QMARK_.call(null,tb)){
return akiee_front.dialogs.empty_message.call(null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__7612__auto__ = (function akiee_front$core$task_table_$_iter__11466(s__11467){
return (new cljs.core.LazySeq(null,(function (){
var s__11467__$1 = s__11467;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11467__$1);
if(temp__4657__auto__){
var s__11467__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11467__$2)){
var c__7610__auto__ = cljs.core.chunk_first.call(null,s__11467__$2);
var size__7611__auto__ = cljs.core.count.call(null,c__7610__auto__);
var b__11469 = cljs.core.chunk_buffer.call(null,size__7611__auto__);
if((function (){var i__11468 = (0);
while(true){
if((i__11468 < size__7611__auto__)){
var t = cljs.core._nth.call(null,c__7610__auto__,i__11468);
cljs.core.chunk_append.call(null,b__11469,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.task,t], null));

var G__11470 = (i__11468 + (1));
i__11468 = G__11470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11469),akiee_front$core$task_table_$_iter__11466.call(null,cljs.core.chunk_rest.call(null,s__11467__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11469),null);
}
} else {
var t = cljs.core.first.call(null,s__11467__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.task,t], null),akiee_front$core$task_table_$_iter__11466.call(null,cljs.core.rest.call(null,s__11467__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7612__auto__.call(null,tb);
})()], null)], null);
}
});
akiee_front.core.task_list = (function akiee_front$core$task_list(){
var show_QMARK_ = ((cljs.core.not.call(null,akiee_front.app_db.editor_QMARK_.call(null)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null));
var sidebar_QMARK_ = (cljs.core.truth_(akiee_front.app_db.selected.call(null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),""], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"closed"], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#tasks","div#tasks",-674021829),show_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#list","div#list",205002526),((cljs.core._EQ_.call(null,akiee_front.app_db.list_state.call(null),akiee_front.constants.ALL))?(function (){var states = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["TODO","DOING","DONE"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.kanban-row","tr.kanban-row",1298728683),(function (){var iter__7612__auto__ = ((function (states,show_QMARK_,sidebar_QMARK_){
return (function akiee_front$core$task_list_$_iter__11475(s__11476){
return (new cljs.core.LazySeq(null,((function (states,show_QMARK_,sidebar_QMARK_){
return (function (){
var s__11476__$1 = s__11476;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11476__$1);
if(temp__4657__auto__){
var s__11476__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11476__$2)){
var c__7610__auto__ = cljs.core.chunk_first.call(null,s__11476__$2);
var size__7611__auto__ = cljs.core.count.call(null,c__7610__auto__);
var b__11478 = cljs.core.chunk_buffer.call(null,size__7611__auto__);
if((function (){var i__11477 = (0);
while(true){
if((i__11477 < size__7611__auto__)){
var tb = cljs.core._nth.call(null,c__7610__auto__,i__11477);
cljs.core.chunk_append.call(null,b__11478,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.kanban-column","td.kanban-column",-62293854),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("kb-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null))].join('')], null),akiee_front.core.task_table.call(null,tb)], null));

var G__11479 = (i__11477 + (1));
i__11477 = G__11479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11478),akiee_front$core$task_list_$_iter__11475.call(null,cljs.core.chunk_rest.call(null,s__11476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11478),null);
}
} else {
var tb = cljs.core.first.call(null,s__11476__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.kanban-column","td.kanban-column",-62293854),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("kb-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null))].join('')], null),akiee_front.core.task_table.call(null,tb)], null),akiee_front$core$task_list_$_iter__11475.call(null,cljs.core.rest.call(null,s__11476__$2)));
}
} else {
return null;
}
break;
}
});})(states,show_QMARK_,sidebar_QMARK_))
,null,null));
});})(states,show_QMARK_,sidebar_QMARK_))
;
return iter__7612__auto__.call(null,akiee_front.app_db.tasks.call(null));
})()], null)], null)], null);
})():akiee_front.core.task_table.call(null,akiee_front.app_db.tasks.call(null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside#task-sidebar","aside#task-sidebar",-1491675059),sidebar_QMARK_,akiee_front.sidebar.sidebar.call(null)], null)], null);
});
/**
 *  -> Component
 *  Produces the base comment
 */
akiee_front.core.app = (function akiee_front$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app","div#app",840279329),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.toolbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.enter_task], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.search], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.editor], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.task_list], null)], null);
});
akiee_front.core.big_bang = (function akiee_front$core$big_bang(){
akiee_front.handlers.hide_menu.call(null);

akiee_front.handlers.register_keyevents.call(null);

akiee_front.handlers.register_winevents.call(null);

akiee_front.handlers.create_menu.call(null);

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiee_front.core.app], null),document.getElementById("root"));

reagent.core.track_BANG_.call(null,akiee_front.core.set_title_BANG_);

akiee_front.sidebar.datepicker_config.call(null);

return akiee_front.handlers.register_events.call(null);
});
akiee_front.core.init_BANG_ = (function akiee_front$core$init_BANG_(setting){
cljs.core.println.call(null,setting);

return akiee_front.core.big_bang.call(null);
});
