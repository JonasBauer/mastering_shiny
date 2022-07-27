/*! shinydashboard 0.7.2 | (c) 2017-2021 RStudio, Inc. | License: GPL (>= 2) | file LICENSE */

$(function(){var a=function(){$(".sidebar-menu a[data-toggle='tab'],.sidebar-menu li.treeview > a").not($(this)).parent("li").removeClass("active");var a=$(".sidebarMenuSelectedTabItem"),b=a.data("shiny-input-binding");void 0!==b&&(b.setValue(a,$(this).attr("data-value")),a.trigger("change"))};$(document).on("shown.bs.tab",'.sidebar-menu a[data-toggle="tab"]',a);var b=function(){var a=$(".sidebar-menu a[data-toggle='tab']"),b=a.filter("[data-start-selected='1']");0===b.length&&(b=a.first()),0!==b.length&&(b.tab("show"),$(".sidebarMenuSelectedTabItem").attr("data-value",b.attr("data-value")))};b(),$("section.sidebar").data("disable")&&($("body").addClass("sidebar-collapse"),$(".navbar > .sidebar-toggle").hide());var c=function(){return $(".main-sidebar").offset().left<0},d=function(){$(window).trigger("resize");var a=$(".main-sidebar.shiny-bound-input");a.data("shiny-input-binding").setValue(a,c()),a.trigger("change")};$(".main-sidebar").on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",d),$(".main-sidebar").offset().left<0&&$(".main-sidebar").attr("data-collapsed","true"),$(document).on("click",".treeview > a",function(){var a=$(this).next();a.hasClass("menu-open")?a.trigger("hidden"):a.hasClass("treeview-menu")&&a.trigger("shown");var b=$("section.sidebar.shiny-bound-input");setTimeout(function(){b.trigger("change")},600)});var e=new Shiny.OutputBinding;$.extend(e,{find:function(a){return $(a).find(".shinydashboard-menu-output")},onValueError:function(a,b){Shiny.unbindAll(a),this.renderError(a,b)},renderValue:function(a,c){Shiny.unbindAll(a);var d,e=[];if(null!==c){"string"==typeof c?d=c:"object"==typeof c&&(d=c.html,e=c.deps);var f=$($.parseHTML(d));Shiny.renderHtml(f.html(),a,e),a.className="shinydashboard-menu-output shiny-bound-output "+f.attr("class"),Shiny.initializeInputs(a),Shiny.bindAll(a),$(a).hasClass("sidebar-menu")&&b()}}}),Shiny.outputBindings.register(e,"shinydashboard.menuOutputBinding");var f=new Shiny.InputBinding;$.extend(f,{find:function(a){return $(a).find(".sidebarMenuSelectedTabItem")},getValue:function(a){var b=$(a).attr("data-value");return"null"===b?null:b},setValue:function(a,b){var c=this;$(a).parent("ul.sidebar-menu").find("li:not(.treeview)").children("a").each(function(){if(c._getTabName($(this))===b)return $(this).tab("show"),$(a).attr("data-value",c._getTabName($(this))),!1})},receiveMessage:function(a,b){b.hasOwnProperty("value")&&this.setValue(a,b.value)},subscribe:function(a,b){$(a).on("change.tabItemInputBinding",function(){b()})},unsubscribe:function(a){$(a).off(".tabItemInputBinding")},_getTabName:function(a){return a.attr("data-value")}}),Shiny.inputBindings.register(f,"shinydashboard.tabItemInput");var g=new Shiny.InputBinding;$.extend(g,{find:function(a){return $(a).find(".main-sidebar").first()},getValue:function(a){return"true"===$(a).attr("data-collapsed")},setValue:function(a,b){$(a).attr("data-collapsed",b)},toggleValue:function(a){var b=this.getValue(a),c=b?"false":"true";this.setValue(a,c)},receiveMessage:function(a,b){b.hasOwnProperty("value")&&this.setValue(a,b.value)},subscribe:function(a,b){$(a).on("change.sidebarCollapsedInputBinding",function(){b()})},unsubscribe:function(a){$(a).off(".sidebarCollapsedInputBinding")}}),Shiny.inputBindings.register(g,"shinydashboard.sidebarCollapsedInputBinding");var h=new Shiny.InputBinding;$.extend(h,{find:function(a){return $(a).find("section.sidebar")},getValue:function(a){var b=$(a).find("li ul.menu-open");return 1===b.length?b.attr("data-expanded"):null},setValue:function(a,b){$(a).find("[data-expanded='"+b+"']").prev().trigger("click")},subscribe:function(a,b){$(a).on("change.sidebarmenuExpandedInputBinding",function(){b()})},unsubscribe:function(a){$(a).off(".sidebarmenuExpandedInputBinding")}}),Shiny.inputBindings.register(h,"shinydashboard.sidebarmenuExpandedInputBinding")});
//# sourceMappingURL=shinydashboard.min.js.map