/**
 * Created by BanTing on 2017/4/19.
 */
$(document).ready(function () {
    var delimit = $("#deLimit").text();
    var deCurrent = $("#deCurrent").text();
    if(deCurrent>delimit){
        $("#aleinfo").css("display","");
    }
    $.ajax({
        type:'get',
        dataType:'json',
        url:"../degree.json",
        success:function (info) {

        }
    })
})
function setDegree() {
    var degree=$("#num").val();
    $.ajax({
        type:'get',
        dataType:'json',
        data:{degree:degree},
        url:""
    })
}