$(function(){
    $('#dowebok').fullpage({
        sectionsColor:['#0da5d6', '#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
        loopTop:true,
        afterLoad:function(link,index){
            setTimeout(function(){
                $('.section').removeClass('current').eq(index-1).addClass('current');
            },100);
        }

    });

});
