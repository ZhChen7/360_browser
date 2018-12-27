$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#0da5d6','#2AB561','#DE8910','#16BA9D','#0DA5D6'],
        afterLoad:function (anchorLink,index) {
            $('.section').removeClass('current')
            setTimeout(function () {
                $('.section').eq(index.index).addClass('current')
            },100)


        }
    });
});
