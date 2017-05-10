/**
 * Created by BanTing on 2017/4/11.
 */
$(document).ready(function () {
    setInterval(refresh,2000);
    $('#datetimepickerOne').datetimepicker({
        format: 'YYYY-MM-DD hh:mm:ss',
        locale: moment.locale('zh-cn')
    });
    $('#search').bind('click',queryRecvAccInfos);
    /*----分页---*/
  /*  $('#paginator-patient').bootstrapPaginator({
        currentPage: ${pcurrentPage},   //当前页数，这里是用的EL表达式，获取从后台传过来的值
        totalPages: ${totalPages},  //总页数，这里是用的EL表达式，获取从后台传过来的值
        numberofPages: 5,   //每页页数
        bootstrapMajorVersion: 3,               //兼容Bootstrap3.x版本
        tooltipTitles: function (type, page) {
            switch (type) {
                case "first" :
                    return "第一页" ;
                case "prev" :
                    return "上一页" ;
                case "next" :
                    return "下一页" ;
                case "last" :
                    return "最后一页" ;
                case "page" :
                    return page;
            }
            return "" ;
        },
        onPageClicked: function (event, originalEvent, type, page) {
            window.location.href = "admin/superAdmin?ppage=" + page;
        }
    });*/
})
function queryRecvAccInfos(){
    var targetTxt1=$('#selectTime').val();
    var targetTxt2=$("#roomSelect").find("option:selected").val();
    // $("table tbody tr").hide().filter(":contains('"+targetTxt1+targetTxt2+"')").show();
    var showNothing = true;
    $('tr.elec-item').each(function (i,tr) {
        var hasSeriaNum = false;
        var hasTime = false;
        $(tr).children().each(function (j,td) {
            if(td.innerText==targetTxt2){
                hasSeriaNum = true;
            }
            if(td.innerText==targetTxt1){
                hasTime = true;
            }
            /*--when select all--*/
            if(targetTxt2==0){
                hasSeriaNum = true;
            }
        });
        if(hasSeriaNum && hasTime){
            $(tr).addClass('tr-show');
            showNothing = false;
        }else {
            $(tr).removeClass('tr-show');
        }
    });
    var $hideItems = $('#infoEnergy tbody tr:not(.elec-item.tr-show, .hideTd)');
    var $showItems = $('.elec-item.tr-show');
    $hideItems.hide();
    $showItems.show();
    if(showNothing){
        $('.hideTd').show();
    }else {
        $('.hideTd').hide();
    }
    changeSerialNum();
}
function changeSerialNum() {
    $('.tr-show').each(function (i, v) {
        $(v).children('td')[0].innerText = i + 1;
    });
}
//根据日期字符串取得其时间
function getTimeByDateStr(dateStr){
    /*-----另外一种方法-----*/
   /* var then=new Date(startTime);
    var now=new Date();
    var elapsed=now - then;
    console.log(elapsed);*/
    var year = parseInt(dateStr.substring(0,4));
    var month = parseInt(dateStr.substring(5,7),10)-1;
    var day = parseInt(dateStr.substring(8,10),10);
    var hour = parseInt(dateStr.substring(11,13),10);
    var minutes=parseInt(dateStr.substring(14,16),10);
    var seconds=parseInt(dateStr.substring(17,19),10);
    return new Date(year, month, day,hour,minutes,seconds).getTime();
}
//系数 * tp *时间=功率（度）
var ratio = 2.77778 * Math.pow(10,-7);
function refresh() {
    var trLength=$("table[id='infoEnergy'] tbody tr").length;
    var oBody=$("table[id='infoEnergy'] tbody")
    var second,i_inst,v_inst,energy;
    for(var i=0;i<trLength;i++){
        var startTime = oBody.find("tr").eq(i).find("td").eq(3).text();
        var endTime =  oBody.find("tr").eq(i).find("td").eq(4).text();
        var elec = oBody.find("tr").eq(i).find("td").eq(5).text();
        var vol = oBody.find("tr").eq(i).find("td").eq(6).text();
        //获取能耗
        var  tp= oBody.find("tr").eq(i).find("td").eq(8).text();
        if(endTime==""||null)
        {
            /*---get current time----*/
            var t =new Date();
            var nowTime=t.getTime();
            startTime=getTimeByDateStr(startTime);
            second = parseInt(Math.abs(nowTime - startTime))/1000;
            i_inst= parseFloat(elec);
            i_inst+=randNum(-i_inst*0.01,+i_inst*0.01);
            if (i_inst<=0)
            {
                i_inst=0;
            }
            oBody.find("tr").eq(i).find("td").eq(5).text(Number(i_inst).toFixed(2));
            v_inst= parseFloat(vol);
            v_inst+=randNum(-v_inst*0.01,+v_inst*0.01);
            if (v_inst<=0)
            {
                v_inst=0;
            }
            oBody.find("tr").eq(i).find("td").eq(6).text(Number(v_inst).toFixed(2));
           /*---get energy--*/
            energy=Number(second*tp*ratio).toFixed(4);
            oBody.find("tr").eq(i).find("td").eq(7).text(energy);
        }else {
            /*----time----*/
            startTime = getTimeByDateStr(startTime);
            endTime = getTimeByDateStr(endTime);
            second = parseInt(Math.abs(endTime - startTime))/1000; //总得秒数
            /*--get elec---*/
            i_inst= parseFloat(elec);
            oBody.find("tr").eq(i).find("td").eq(5).text(Number(i_inst).toFixed(2));
            /*---get vol-----*/
            v_inst= parseFloat(vol);
            oBody.find("tr").eq(i).find("td").eq(6).text(Number(v_inst).toFixed(2));
            /*----energy----*/
            energy = Number(second*tp*ratio).toFixed(4);
            oBody.find("tr").eq(i).find("td").eq(7).text(energy);
        }
    }
}
function randNum(begin,end)
{
    return Math.random()*(end-begin)+begin;
};

