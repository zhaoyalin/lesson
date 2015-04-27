var appDb = $.localStorage ;
var appModel = {
		
};
var app = {
		
};
var appUI = {
    initialize : function() {
    		$("#clearBtn").click(function() {
        	    appUI.clear() ;
    		});
    		$("#sayBtn").click(function() {
    			text = $("#userText").val() ;
        	    appUI.say(text) ;
    		});
    },
    say : function(text) {
    		dialog = $("#dialog").html() ;
    		$("#dialog").html(dialog + "</br>" + text) ;
    },
    clear : function() {
    		$("#dialog").text("") ;
    }
};
$(document).ready(function() {
	appUI.initialize() ;
});
