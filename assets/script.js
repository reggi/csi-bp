

$(document).ready(function(){

    var doIt = function(){
        if($('body').attr('id') == "inverted"){
            $('body').attr('id','normal');
            $.cookie("status","normal");
        }else{
            $('body').attr('id','inverted');
            $.cookie("status","inverted");
        }
    };

    $('#action').toggle(function() {
        doIt();
    }, function() {
        doIt();
    });

    if($.cookie("status") == "inverted"){
        $('body').attr('id','inverted');
    };

});

