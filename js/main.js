/**
 * Created by BanTing on 2017/4/7.
 */
function showpage(url) {
    $.ajax({
        type:'get',
        async:false,
        url:url,
        success:function (dates) {
            $("#iframe-one").html(dates);
        },
        error:function () {
            alert("失败，请稍后再试！")
        }
    })
}
var phFlag = false;
var emFlag = false;
var adFlag = false;
function Phone() {
    var phone=$('#phoneNum').val();
    if (phone==""||phone==null) {
        $("#info_ph").text("手机号不为空！")
    } else if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
        $("#info_ph").text("请输入有效手机号！")
    }
    else{
        $("#info_ph").text("")
        phFlag = true;
    }
}
function  Email() {
    var email=$('#uEmail').val();
    if (email==""||email==null) {
        $("#info_em").text("邮箱不为空！")
    }
    else if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email))){
        $("#info_em").text("请输入有效邮箱！")
    }
    else{
        $("#info_em").text("")
        emFlag = true;
    }
}
function Address(){
    var address=$('#uAddress').val();
    if (address==""||address==null) {
        $("#info_add").text("邮箱不为空！")
    } else{
        $("#info_add").text("")
        adFlag = true;
    }
}
/*----modify use---*/
function modifyUser() {
    var phoneNum=$("#phoneNum").val();
    var uEmail=$("#uEmail").val();
    var uAddress=$("#uAddress").val();
    if(phFlag && emFlag && adFlag){
        $.ajax({
            type:'get',
            async:false,
            url:"",//请求后台修改用户信息
            data:{
                phoneNum:phoneNum,
                uEmail:uEmail,
                uAddress:uAddress
            },
            success:function (msg) {
                if(msg==1){
                    alert("修改成功！");
                    $('#modifyUser').modal('hide');//close modal
                }else {
                    alert("失败！请稍后再试");
                    $('#modifyUser').modal('hide');
                }
            },
            error:function () {
                alert("失败，请稍后再试！")
                $('#modifyUser').modal('hide');
            }
        })
    }else{
        $("#notice").text("请先填写有效信息！")
    }
}
