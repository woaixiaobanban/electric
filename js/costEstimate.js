/**
 * Created by BanTing on 2017/4/19.
 */

$("#est").bind('click',function () {
    var message;
    var sTime=$("#sDatetimepicker>input").val();
    var eTime=$("#eDatetimepicker>input").val();
    console.log(sTime);
    var sLimit=$("#limitStart").text();
    var eLimit=$("#limitEnd").text();
    var sLFlag=false;
    var eLFlag=false;
    var seFlag=false;
    if(sTime>=sLimit){
        sLFlag = true;
    }else {
        message="开始时间未在限定范围内！";
    }
    if(eTime<=eLimit){
        eLFlag = true;
    }else {
        message="结束时间未在限定范围内！";
    }
    if(sTime<=eTime){
        seFlag=true;
    }else {
        message="开始时间大于结束时间！";
    }
    if( sLFlag && eLFlag && seFlag){

    }else {
        alert(message);
        event.preventDefault();
        event.stopPropagation();
    }
    $.ajax({
        type:'get',
        dataType:'json',
        data:{
            sTime:sTime,
            eTime:eTime
        },
        url:'../money.json',
        success:function (msg) {
            $("#degree>span").text(msg);
            var money=msg*0.8;
            $("#money>span").text(money);
        }
    })
});