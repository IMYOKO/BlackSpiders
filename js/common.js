//个人中心下拉
$("#user-index").hover(function(){
    $(this).find("ul").slideDown(300);
},function(){
    $(this).find("ul").slideUp(100);
});