$(document).ready(function(){
    $("#contentUs_wrap_2").hide();
    $("#contentUs_wrap_2_pageList").hide();
  });

function toogleContactUsWrap(wrapId,btn) {
    if (wrapId == 0) {
        $("#contentUs_wrap_2").hide();
        $("#contentUs_wrap_2_pageList").hide();
        $("#contentUs_wrap_1").fadeIn();
    }
    else if(wrapId == 1) {
        $("#contentUs_wrap_1").hide();
        $("#contentUs_wrap_2").fadeIn();
        $("#contentUs_wrap_2_pageList").show();
    }
    $(".al-contactUs-wrap .title li.active").removeClass("active");
    $(btn).attr("class","active");
}


function toogleContactUsOppList(wrapId,btn) {
    $(".oppList").hide();
    if (wrapId == 0) {
        $("#oppList_1").fadeIn();
    }
    else if(wrapId == 1) {
        $("#oppList_2").fadeIn();
    }
    else if(wrapId == 2) {
        $("#oppList_3").fadeIn();
    }
    $(".opportunityWrap .oppNav li.active").removeClass("active");
    $(btn).attr("class","active");
}
