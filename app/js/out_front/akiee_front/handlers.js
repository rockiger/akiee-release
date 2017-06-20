// Compiled by ClojureScript 1.9.495 {:elide-asserts true}
goog.provide('akiee_front.handlers');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('akiee_front.app_db');
goog.require('akiee_front.node');
goog.require('akiee_front.dom_helpers');
goog.require('akiee_front.fileoperations');
goog.require('akiee_front.filewatcher');
goog.require('akiee_front.rank');
goog.require('akiee_front.constants');
goog.require('clojure.string');
goog.require('jayq.core');
goog.require('historian.core');
goog.require('cljs.nodejs');
akiee_front.handlers.path = cljs.nodejs.require.call(null,"path");
akiee_front.handlers.fs = require("fs");
akiee_front.handlers.electron = cljs.nodejs.require.call(null,"electron");
akiee_front.handlers.remote = akiee_front.handlers.electron.remote;
akiee_front.handlers.shell = akiee_front.handlers.electron.shell;
cljs.core.enable_console_print_BANG_.call(null);
akiee_front.handlers._STAR_menu_STAR_ = (new akiee_front.handlers.remote.Menu());
akiee_front.handlers.on_file_change_reload = (function akiee_front$handlers$on_file_change_reload(pth){
return (function (){
akiee_front.app_db.set_unselected_BANG_.call(null);

return akiee_front.app_db.reset_tasklist_BANG_.call(null,pth);
});
});
/**
 * closes the entry box and hides it
 */
akiee_front.handlers.cancel_enter_task = (function akiee_front$handlers$cancel_enter_task(){
var hdln = akiee_front.dom_helpers.get_element.call(null,"enter-headline");
hdln.value = "";

return akiee_front.app_db.switch_entry_BANG_.call(null);
});
/**
 * closes the search box and resets the search-string in the app-state
 */
akiee_front.handlers.cancel_search = (function akiee_front$handlers$cancel_search(){
return akiee_front.app_db.switch_search_BANG_.call(null);
});
/**
 * DOMElement -> Bool
 *   Handles the submisson of element e that are created by the enter task form
 */
akiee_front.handlers.handle_enter_task = (function akiee_front$handlers$handle_enter_task(ev){
var form = (ev["target"]);
var els = (form["elements"]);
var hdln = (els["headline"]).value;
var tast = (els["task-status"]).value;
var tapr = (els["task-project"]).value;
ev.stopPropagation();

ev.preventDefault();

if(cljs.core.not_EQ_.call(null,hdln,"")){
akiee_front.app_db.add_task_BANG_.call(null,tast,hdln,tapr);
} else {
}

akiee_front.handlers.cancel_enter_task.call(null);

return false;
});
/**
 * Event ->
 *   Handles the close event of win
 */
akiee_front.handlers.handle_close = (function akiee_front$handlers$handle_close(ev){
akiee_front.fileoperations.save_task_file.call(null,akiee_front.node.lon__GT_md.call(null,akiee_front.app_db.nodes.call(null)),akiee_front.app_db.task_file_path.call(null),akiee_front.app_db.changed_QMARK_.call(null),akiee_front.app_db.set_changed_BANG_,(function (p1__11426_SHARP_,p2__11427_SHARP_){
return akiee_front.filewatcher.on_file_change.call(null,p1__11426_SHARP_,p2__11427_SHARP_,akiee_front.handlers.on_file_change_reload.call(null,akiee_front.app_db.task_file_path.call(null)));
}));

return window.close();
});
/**
 * Event ->
 *   Handles the close event of win
 */
akiee_front.handlers.handle_blur = (function akiee_front$handlers$handle_blur(ev){
return akiee_front.fileoperations.save_task_file.call(null,akiee_front.node.lon__GT_md.call(null,akiee_front.app_db.nodes.call(null)),akiee_front.app_db.task_file_path.call(null),akiee_front.app_db.changed_QMARK_.call(null),akiee_front.app_db.set_changed_BANG_,(function (p1__11428_SHARP_,p2__11429_SHARP_){
return akiee_front.filewatcher.on_file_change.call(null,p1__11428_SHARP_,p2__11429_SHARP_,akiee_front.handlers.on_file_change_reload.call(null,akiee_front.app_db.task_file_path.call(null)));
}));
});
/**
 * Register the window event handlers
 */
akiee_front.handlers.register_winevents = (function akiee_front$handlers$register_winevents(){
goog.events.listen(window,"blur",akiee_front.handlers.handle_blur);

return akiee_front.handlers.remote.getCurrentWindow().on("close",akiee_front.handlers.handle_close);
});
/**
 * Event -> GlobalState
 *   Consumes the onchange Event ev and changes global filter string for search;
 *   returns the app-state
 */
akiee_front.handlers.handle_onchange_search = (function akiee_front$handlers$handle_onchange_search(ev){
return akiee_front.app_db.set_search_string_BANG_.call(null,ev.target.value);
});
/**
 * Event -> GlobalState
 *   Consumes the onblur Event ev and changes global lon ;
 *   returns the app-state
 */
akiee_front.handlers.handle_blur_editor = (function akiee_front$handlers$handle_blur_editor(ev){
var md = ev.target.value;
var lon = akiee_front.node.__GT_nodes_from_md.call(null,md);
akiee_front.app_db.reset_lon_BANG_.call(null,akiee_front.app_db.app_state,lon);

return akiee_front.app_db.set_changed_BANG_.call(null,true);
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes global lon with task to next state;
 *   returns the app-state
 */
akiee_front.handlers.handle_onclick_taskstate = (function akiee_front$handlers$handle_onclick_taskstate(ev){
var row = ev.currentTarget.parentNode;
var shift_QMARK_ = ev.shiftKey;
var ky = row.dataset.key;
if(cljs.core.truth_(shift_QMARK_)){
akiee_front.app_db.prev_ts_BANG_.call(null,ky);
} else {
akiee_front.app_db.next_ts_BANG_.call(null,ky);
}

return ev.stopPropagation();
});
/**
 * Event -> String
 *   Consume an Event from a rank changing button and returns the key of the corresponding row
 */
akiee_front.handlers.rank_helper = (function akiee_front$handlers$rank_helper(ev){
return ev.currentTarget.parentNode.parentNode.dataset.key;
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global lon with rank change down-wards
 */
akiee_front.handlers.handle_onclick_down = (function akiee_front$handlers$handle_onclick_down(ev){
var ky = akiee_front.handlers.rank_helper.call(null,ev);
akiee_front.rank.down_rank.call(null,ky);

return ev.stopPropagation();
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global lon with rank change up-wards
 */
akiee_front.handlers.handle_onclick_up = (function akiee_front$handlers$handle_onclick_up(ev){
var ky = akiee_front.handlers.rank_helper.call(null,ev);
akiee_front.rank.up_rank.call(null,ky);

return ev.stopPropagation();
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state selected
 */
akiee_front.handlers.onclick_task = (function akiee_front$handlers$onclick_task(ev){
var ky = ev.currentTarget.dataset.key;
akiee_front.app_db.set_selected_BANG_.call(null,ky);

return ev.stopPropagation();
});
/**
 * String String -> GlobalState
 *   Consumes the name of the sidebar element n and the id and changes the global state editable
 */
akiee_front.handlers.onclick_sidebar_element = (function akiee_front$handlers$onclick_sidebar_element(n,id){
akiee_front.app_db.set_editable_BANG_.call(null,n);

return setTimeout((function (){
return akiee_front.dom_helpers.get_element.call(null,id).focus();
}),(100));
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state editable
 */
akiee_front.handlers.onclick_hdln = (function akiee_front$handlers$onclick_hdln(ev){
return akiee_front.handlers.onclick_sidebar_element.call(null,"hdln","sidebar-headline");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state editable
 */
akiee_front.handlers.onclick_body = (function akiee_front$handlers$onclick_body(ev){
return akiee_front.handlers.onclick_sidebar_element.call(null,"body","sidebar-body-ta");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state editable
 */
akiee_front.handlers.onclick_state = (function akiee_front$handlers$onclick_state(ev){
return akiee_front.handlers.onclick_sidebar_element.call(null,"state","sidebar-task-state");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state editable
 */
akiee_front.handlers.onclick_project = (function akiee_front$handlers$onclick_project(ev){
return akiee_front.handlers.onclick_sidebar_element.call(null,"project","sidebar-task-project");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state scheduled
 */
akiee_front.handlers.onclick_scheduled = (function akiee_front$handlers$onclick_scheduled(ev){
return akiee_front.handlers.onclick_sidebar_element.call(null,"scheduled","sidebar-scheduled-form");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state deadline
 */
akiee_front.handlers.onclick_deadline = (function akiee_front$handlers$onclick_deadline(ev){
return akiee_front.handlers.onclick_sidebar_element.call(null,"deadline","sidebar-deadline-form");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state tags
 */
akiee_front.handlers.onclick_tags = (function akiee_front$handlers$onclick_tags(ev){
return akiee_front.handlers.onclick_sidebar_element.call(null,"tags","sidebar-tags-form");
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the global state tags
 */
akiee_front.handlers.onclick_reps = (function akiee_front$handlers$onclick_reps(ev){
return akiee_front.handlers.onclick_sidebar_element.call(null,"reps","sidebar-reps-form");
});
/**
 * Event -> Void
 *   Consumes the onclick Event ev and closes the application
 */
akiee_front.handlers.onclick_close = (function akiee_front$handlers$onclick_close(ev){
return false;
});
/**
 * Event -> Void
 *   Consumes the onclick Event ev and toggles the menu
 */
akiee_front.handlers.onclick_menu = (function akiee_front$handlers$onclick_menu(ev){
var undo = (akiee_front.handlers._STAR_menu_STAR_.items[(0)]);
var redo = (akiee_front.handlers._STAR_menu_STAR_.items[(1)]);
undo.enabled = historian.core.can_undo_QMARK_.call(null);

redo.enabled = historian.core.can_redo_QMARK_.call(null);

return akiee_front.handlers._STAR_menu_STAR_.popup();
});
/**
 * Event -> Void
 *   Consumes the onclick Event ev and toggles the menu
 */
akiee_front.handlers.onclick_taskmenu = (function akiee_front$handlers$onclick_taskmenu(ev){
var ky = akiee_front.handlers.rank_helper.call(null,ev);
var native$ = ev.nativeEvent;
var taskmenu = (new akiee_front.handlers.remote.Menu());
var to_top_entry = (new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Top",new cljs.core.Keyword(null,"click","click",1912301393),((function (ky,native$,taskmenu){
return (function (){
return akiee_front.rank.to_top.call(null,ky);
});})(ky,native$,taskmenu))
,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null))));
var to_bottom_entry = (new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Bottom",new cljs.core.Keyword(null,"click","click",1912301393),((function (ky,native$,taskmenu,to_top_entry){
return (function (){
return akiee_front.rank.to_bottom.call(null,ky);
});})(ky,native$,taskmenu,to_top_entry))
,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null))));
taskmenu.append(to_top_entry);

taskmenu.append(to_bottom_entry);

taskmenu.popup(native$.pageX,native$.pageY);

return ev.stopPropagation();
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the headline of a task
 */
akiee_front.handlers.onblur_sidebar_input = (function akiee_front$handlers$onblur_sidebar_input(ev){
var content = ev.currentTarget.value;
akiee_front.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(akiee_front.app_db.sidebar_content.call(null)))){
return akiee_front.app_db.change_headline.call(null,content,akiee_front.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the body of a task
 */
akiee_front.handlers.onblur_sidebar_body = (function akiee_front$handlers$onblur_sidebar_body(ev){
var content = ev.currentTarget.value;
akiee_front.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(akiee_front.app_db.sidebar_content.call(null)))){
return akiee_front.app_db.change_body.call(null,clojure.string.replace.call(null,content,/#/,""),akiee_front.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the state of a task
 */
akiee_front.handlers.onblur_sidebar_state = (function akiee_front$handlers$onblur_sidebar_state(ev){
var content = ev.currentTarget.value;
akiee_front.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(akiee_front.app_db.sidebar_content.call(null)))){
return akiee_front.app_db.change_state.call(null,content,akiee_front.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the project of a task
 */
akiee_front.handlers.onblur_sidebar_project = (function akiee_front$handlers$onblur_sidebar_project(ev){
var content = ev.currentTarget.value;
akiee_front.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(akiee_front.app_db.sidebar_content.call(null)))){
return akiee_front.app_db.change_project.call(null,content,akiee_front.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the scheduled time of a task
 */
akiee_front.handlers.onblur_sidebar_scheduled = (function akiee_front$handlers$onblur_sidebar_scheduled(ev){
var content = ev.currentTarget.value;
akiee_front.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,new cljs.core.Keyword(null,"scheduled","scheduled",553898551).cljs$core$IFn$_invoke$arity$1(akiee_front.app_db.sidebar_content.call(null)))){
return akiee_front.app_db.change_scheduled.call(null,content,akiee_front.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the project of a task
 */
akiee_front.handlers.onblur_sidebar_tags = (function akiee_front$handlers$onblur_sidebar_tags(ev){
var content = ev.currentTarget.value;
akiee_front.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,akiee_front.node.tags_string.call(null,akiee_front.app_db.sidebar_content.call(null)))){
return akiee_front.app_db.change_tags.call(null,content,akiee_front.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * Event -> GlobalState
 *   Consumes the onclick Event ev and changes the project of a task
 */
akiee_front.handlers.onblur_sidebar_reps = (function akiee_front$handlers$onblur_sidebar_reps(ev){
var content = ev.currentTarget.value;
akiee_front.app_db.set_editable_BANG_.call(null,null);

if(cljs.core.not_EQ_.call(null,content,akiee_front.node.reps_string.call(null,akiee_front.app_db.sidebar_content.call(null)))){
return akiee_front.app_db.change_reps.call(null,content,akiee_front.app_db.sidebar_content.call(null));
} else {
return null;
}
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee_front.handlers.submit_sidebar_hdln = (function akiee_front$handlers$submit_sidebar_hdln(){
return akiee_front.dom_helpers.get_element.call(null,"sidebar-headline").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee_front.handlers.submit_sidebar_body = (function akiee_front$handlers$submit_sidebar_body(){
return akiee_front.dom_helpers.get_element.call(null,"sidebar-body").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee_front.handlers.submit_sidebar_state = (function akiee_front$handlers$submit_sidebar_state(){
return akiee_front.dom_helpers.get_element.call(null,"sidebar-task-state").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee_front.handlers.submit_sidebar_project = (function akiee_front$handlers$submit_sidebar_project(){
return akiee_front.dom_helpers.get_element.call(null,"sidebar-task-project").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee_front.handlers.submit_sidebar_tags = (function akiee_front$handlers$submit_sidebar_tags(){
return akiee_front.dom_helpers.get_element.call(null,"sidebar-tags-form").blur();
});
/**
 * ->
 *   creates an on-blur-event on the sidebar-headline
 */
akiee_front.handlers.submit_sidebar_reps = (function akiee_front$handlers$submit_sidebar_reps(){
return akiee_front.dom_helpers.get_element.call(null,"sidebar-reps-form").blur();
});
/**
 * Event -> GlobalState
 *   Handles the event when the date changed and changes the GlobalState accordingly
 */
akiee_front.handlers.handle_change_date = (function akiee_front$handlers$handle_change_date(ev){
var date = ev.date;
if(cljs.core._EQ_.call(null,akiee_front.app_db.editable.call(null),"scheduled")){
akiee_front.app_db.set_editable_BANG_.call(null,null);

return akiee_front.app_db.change_scheduled.call(null,date,akiee_front.app_db.sidebar_content.call(null));
} else {
if(cljs.core._EQ_.call(null,akiee_front.app_db.editable.call(null),"deadline")){
akiee_front.app_db.set_editable_BANG_.call(null,null);

return akiee_front.app_db.change_deadline.call(null,date,akiee_front.app_db.sidebar_content.call(null));
} else {
return null;
}
}
});
/**
 * Event -> Void
 *   Handles the event when the user clicks on a link in the details area
 */
akiee_front.handlers.handle_details_link_click = (function akiee_front$handlers$handle_details_link_click(ev){
var target = ev.target;
ev.preventDefault();

ev.stopPropagation();

return akiee_front.handlers.shell.openExternal(target.href);
});
/**
 * Event -> Void
 * Show the Task statistics
 */
akiee_front.handlers.show_statistics_BANG_ = (function akiee_front$handlers$show_statistics_BANG_(){
var n_o_t = akiee_front.app_db.no_of_tasks.call(null);
return alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1("All Tasks: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(n_o_t)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\nTodo: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(n_o_t)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\nDoing: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"doing","doing",-3342172).cljs$core$IFn$_invoke$arity$1(n_o_t)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\nDone: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"done","done",-889844188).cljs$core$IFn$_invoke$arity$1(n_o_t)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\nTask-Location: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(akiee_front.app_db.task_location.call(null))].join(''));
});
akiee_front.handlers.save_task_helper = (function akiee_front$handlers$save_task_helper(pth,fpth){
akiee_front.filewatcher.unwatch_file.call(null,akiee_front.app_db.task_file_path.call(null));

akiee_front.app_db.set_task_location_BANG_.call(null,pth);

return akiee_front.fileoperations.save_task_file.call(null,akiee_front.node.lon__GT_md.call(null,akiee_front.app_db.nodes.call(null)),fpth,true,akiee_front.app_db.set_changed_BANG_,(function (p1__11430_SHARP_,p2__11431_SHARP_){
return akiee_front.filewatcher.on_file_change.call(null,p1__11430_SHARP_,p2__11431_SHARP_,akiee_front.handlers.on_file_change_reload.call(null,pth));
}));
});
/**
 * Array -> Void
 *   Sets the the tasks-location to the first String in the given Array pths and saves the tasklist to that new location
 */
akiee_front.handlers.save_task_location_BANG_ = (function akiee_front$handlers$save_task_location_BANG_(pths){
var pth = cljs.core.first.call(null,pths);
var fpth = akiee_front.handlers.path.join(pth,akiee_front.constants.filename);
if(cljs.core.truth_(cljs.core.not_empty.call(null,pth))){
if(cljs.core.truth_(akiee_front.handlers.fs.existsSync(fpth))){
var confirmation = confirm("There is already a tasklist in this location.\nDo you really want to overwrite it?");
if(cljs.core.not.call(null,confirmation)){
return cljs.core.println.call(null,"Do not Overwrite");
} else {
cljs.core.println.call(null,"Overwrite");

console.log(fpth);

return akiee_front.handlers.save_task_helper.call(null,pth,fpth);
}
} else {
cljs.core.println.call(null,"Save as new task list");

console.log(fpth);

return akiee_front.handlers.save_task_helper.call(null,pth,fpth);
}
} else {
return null;
}
});
/**
 * Event -> Void
 *  Show the Task statistics
 */
akiee_front.handlers.save_task_location_dialog_BANG_ = (function akiee_front$handlers$save_task_location_dialog_BANG_(){
var dialog = akiee_front.handlers.remote.dialog;
return dialog.showOpenDialog(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Save Task Folder",new cljs.core.Keyword(null,"buttonLabel","buttonLabel",238233469),"Choose Task Folder",new cljs.core.Keyword(null,"message","message",-406056002),"Select you folder you want to save as your task folder.",new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"openDirectory","openDirectory",-1089729286)], null))], null)),akiee_front.handlers.save_task_location_BANG_);
});
akiee_front.handlers.open_task_helper = (function akiee_front$handlers$open_task_helper(pth,fpth){
akiee_front.app_db.set_unselected_BANG_.call(null);

historian.core.clear_history_BANG_.call(null);

akiee_front.filewatcher.unwatch_file.call(null,akiee_front.app_db.task_file_path.call(null));

akiee_front.filewatcher.watch_file.call(null,fpth,(function (p1__11432_SHARP_,p2__11433_SHARP_){
return akiee_front.filewatcher.on_file_change.call(null,p1__11432_SHARP_,p2__11433_SHARP_,akiee_front.handlers.on_file_change_reload.call(null,pth));
}));

akiee_front.app_db.reset_tasklist_BANG_.call(null,pth);

return akiee_front.app_db.set_task_location_BANG_.call(null,pth);
});
/**
 * Array -> Void
 *  Sets the the tasks-location to the first String in the given Array pths
 */
akiee_front.handlers.open_task_location_BANG_ = (function akiee_front$handlers$open_task_location_BANG_(pths){
var pth = cljs.core.first.call(null,pths);
var fpth = akiee_front.handlers.path.join(pth,akiee_front.constants.filename);
if(cljs.core.truth_(cljs.core.not_empty.call(null,pth))){
if(cljs.core.truth_(akiee_front.handlers.fs.existsSync(fpth))){
console.log("Fileexists");

console.log(pth);

return akiee_front.handlers.open_task_helper.call(null,pth,fpth);
} else {
return akiee_front.handlers.remote.dialog.showErrorBox("Couldn't load taskfile","This is not a valid task location directory!");
}
} else {
return null;
}
});
/**
 * Event -> Void
 *   Show the Task statistics
 */
akiee_front.handlers.open_task_location_dialog_BANG_ = (function akiee_front$handlers$open_task_location_dialog_BANG_(){
var dialog = akiee_front.handlers.remote.dialog;
return dialog.showOpenDialog(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Open Task Folder",new cljs.core.Keyword(null,"buttonLabel","buttonLabel",238233469),"Open Task Folder",new cljs.core.Keyword(null,"message","message",-406056002),"Select you folder you want to open as your task folder.",new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"openDirectory","openDirectory",-1089729286)], null))], null)),akiee_front.handlers.open_task_location_BANG_);
});
/**
 * Event -> Void
 * Show the Task statistics
 */
akiee_front.handlers.show_about_BANG_ = (function akiee_front$handlers$show_about_BANG_(){
var n_o_t = akiee_front.app_db.no_of_tasks.call(null);
return alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1("AKIEE\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=============\n\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("About\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("--------------\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Akiee - a Markdown-based task manager\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Version 0.0.3\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c) 2017 Marco Laspe <marco@rockiger.com>\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Licence: GNU General Public License\n\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Librarys\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("--------------\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Clojure/Clojurescript\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Reagent\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Garden\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Jayq\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Historian\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Nwjs\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Marked\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("* Org-Mode-Parser")].join(''));
});
/**
 * KeyEvent -> GlobalState
 *   Handles the keyevents that are created by js/document
 */
akiee_front.handlers.handle_keyup = (function akiee_front$handlers$handle_keyup(ev){
var mac_QMARK_ = ((cljs.core._EQ_.call(null,process.platform,"darwin"))?true:false);
var ky = ((function (mac_QMARK_){
return (function (p1__11434_SHARP_){
return p1__11434_SHARP_.keyCode;
});})(mac_QMARK_))
;
var ctrl_QMARK_ = ((mac_QMARK_)?((function (mac_QMARK_,ky){
return (function (p1__11435_SHARP_){
return p1__11435_SHARP_.metaKey;
});})(mac_QMARK_,ky))
:((function (mac_QMARK_,ky){
return (function (p1__11436_SHARP_){
return p1__11436_SHARP_.ctrlKey;
});})(mac_QMARK_,ky))
);
var shift_QMARK_ = ((function (mac_QMARK_,ky,ctrl_QMARK_){
return (function (p1__11437_SHARP_){
return p1__11437_SHARP_.shiftKey;
});})(mac_QMARK_,ky,ctrl_QMARK_))
;
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(32));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.app_db.switch_editor_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(49))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(97)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.app_db.switch_todo_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(50))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(98)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.app_db.switch_doing_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(51))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(99)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.app_db.switch_done_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(52))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(100)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.app_db.switch_all_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = (cljs.core._EQ_.call(null,ky.call(null,ev),(69))) || (cljs.core._EQ_.call(null,ky.call(null,ev),(101)));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.app_db.switch_editor_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(13));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.app_db.switch_entry_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(70));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.app_db.switch_search_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(89));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return historian.core.redo_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(90));
if(and__6812__auto__){
var and__6812__auto____$1 = ctrl_QMARK_.call(null,ev);
if(cljs.core.truth_(and__6812__auto____$1)){
return shift_QMARK_.call(null,ev);
} else {
return and__6812__auto____$1;
}
} else {
return and__6812__auto__;
}
})())){
return historian.core.redo_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(90));
if(and__6812__auto__){
return ctrl_QMARK_.call(null,ev);
} else {
return and__6812__auto__;
}
})())){
return historian.core.undo_BANG_.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(27));
if(and__6812__auto__){
return akiee_front.app_db.entry_QMARK_.call(null);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.handlers.cancel_enter_task.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(27));
if(and__6812__auto__){
return akiee_front.app_db.search_QMARK_.call(null);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.handlers.cancel_search.call(null);
} else {
if(cljs.core.truth_((function (){var and__6812__auto__ = cljs.core._EQ_.call(null,ky.call(null,ev),(27));
if(and__6812__auto__){
return akiee_front.app_db.editable.call(null);
} else {
return and__6812__auto__;
}
})())){
return akiee_front.app_db.set_editable_BANG_.call(null,null);
} else {
if((cljs.core._EQ_.call(null,ky.call(null,ev),(13))) && (cljs.core._EQ_.call(null,akiee_front.app_db.editable.call(null),"hdln"))){
return akiee_front.handlers.submit_sidebar_hdln.call(null);
} else {
if((cljs.core._EQ_.call(null,ky.call(null,ev),(13))) && (cljs.core._EQ_.call(null,akiee_front.app_db.editable.call(null),"tags"))){
return akiee_front.handlers.submit_sidebar_tags.call(null);
} else {
if((cljs.core._EQ_.call(null,ky.call(null,ev),(13))) && (cljs.core._EQ_.call(null,akiee_front.app_db.editable.call(null),"reps"))){
return akiee_front.handlers.submit_sidebar_reps.call(null);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Register the keyhandlers
 */
akiee_front.handlers.register_keyevents = (function akiee_front$handlers$register_keyevents(){
return goog.events.listen(document,"keyup",akiee_front.handlers.handle_keyup);
});
akiee_front.handlers.register_datepicker_events = (function akiee_front$handlers$register_datepicker_events(){
$(document).ready((function (){
return $("#sidebar-scheduled-form").datepicker().on("hide",akiee_front.handlers.handle_change_date);
}));

return $(document).ready((function (){
return $("#sidebar-deadline-form").datepicker().on("hide",akiee_front.handlers.handle_change_date);
}));
});
/**
 * Register the click events on links in the details area
 */
akiee_front.handlers.register_click_links = (function akiee_front$handlers$register_click_links(){
var $body = jayq.core.$.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
return jayq.core.on.call(null,$body,"click",new cljs.core.Keyword(null,"a","a",-2123407586),"data",akiee_front.handlers.handle_details_link_click);
});
akiee_front.handlers.register_file_watcher = (function akiee_front$handlers$register_file_watcher(){
var fpth = akiee_front.app_db.task_file_path.call(null);
var pth = akiee_front.app_db.task_location.call(null);
if(cljs.core.truth_(akiee_front.handlers.fs.existsSync(fpth))){
return akiee_front.filewatcher.watch_file.call(null,fpth,((function (fpth,pth){
return (function (p1__11438_SHARP_,p2__11439_SHARP_){
return akiee_front.filewatcher.on_file_change.call(null,p1__11438_SHARP_,p2__11439_SHARP_,akiee_front.handlers.on_file_change_reload.call(null,pth));
});})(fpth,pth))
);
} else {
return null;
}
});
/**
 * Create the menus
 */
akiee_front.handlers.create_menu = (function akiee_front$handlers$create_menu(){
akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Undo",new cljs.core.Keyword(null,"click","click",1912301393),historian.core.undo_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)))));

akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Redo",new cljs.core.Keyword(null,"click","click",1912301393),historian.core.redo_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),false], null)))));

akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"separator"], null)))));

akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Task statistics",new cljs.core.Keyword(null,"click","click",1912301393),akiee_front.handlers.show_statistics_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Board View",new cljs.core.Keyword(null,"click","click",1912301393),akiee_front.app_db.switch_all_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Code View",new cljs.core.Keyword(null,"click","click",1912301393),akiee_front.app_db.switch_editor_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"separator"], null)))));

akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Open tasks...        ",new cljs.core.Keyword(null,"click","click",1912301393),akiee_front.handlers.open_task_location_dialog_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Save tasks...        ",new cljs.core.Keyword(null,"click","click",1912301393),akiee_front.handlers.save_task_location_dialog_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));

akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"separator"], null)))));

return akiee_front.handlers._STAR_menu_STAR_.append((new akiee_front.handlers.remote.MenuItem(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"About",new cljs.core.Keyword(null,"click","click",1912301393),akiee_front.handlers.show_about_BANG_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),true], null)))));
});
akiee_front.handlers.hide_menu = (function akiee_front$handlers$hide_menu(){
return akiee_front.handlers.remote.getCurrentWindow().setMenuBarVisibility(false);
});
akiee_front.handlers.register_events = (function akiee_front$handlers$register_events(){
akiee_front.handlers.register_datepicker_events.call(null);

akiee_front.handlers.register_click_links.call(null);

return akiee_front.handlers.register_file_watcher.call(null);
});
