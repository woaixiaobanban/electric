$(document).ready(function() {
     $("#read").change(function(){
         if(document.getElementById('read').checked==true){
         document.getElementById('register').disabled=false;
         }
         else
         {
             document.getElementById('register').disabled=true;
         }
     });
    }
);
function checkUsername(){

        var username=$('input#username').val();
        if (username==""||username==null) {
            document.getElementById("warning-username").innerHTML = "(*必需字段)";

        }
        else
        {
            document.getElementById("warning-username").innerHTML = "";
        }

}
function checkPassword(){

        var password=$('#password').val();
        if (password==""||password==null) {
            document.getElementById("warning-password").innerHTML = "(*必需字段)";

        }
        else{
            document.getElementById("warning-password").innerHTML = "";
        }

}
function checkConfirm(){
        var password=$('#password').val();
        var confirm_password=$('#confirm_password').val();
        if (password!=confirm_password) {
            document.getElementById("warning-confirm").innerHTML = "(*与上述密码不一致)";
        }
        else{
            document.getElementById("warning-confirm").innerHTML = "";
        }
}
function checkPhone(){

        var phone=$('#phone').val();
        if (phone==""||phone==null) {
            document.getElementById("warning-phone").innerHTML = "(*必需字段)";

        }
        else if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
            document.getElementById("warning-phone").innerHTML = "(*请输入有效的手机号)";
        }
        else{
            document.getElementById("warning-phone").innerHTML = "";
        }
}
function  checkEmail() {

        var email=$('#email').val();
        if (email==""||email==null) {
            document.getElementById("warning-email").innerHTML = "(*必需字段)";

        }
        else if(!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email))){
            document.getElementById("warning-email").innerHTML = "(*请输入有效的邮箱)";

        }
        else{
            document.getElementById("warning-email").innerHTML = "";
        }
}
function checkAddress(){

        var address=$('#address').val();
        if (address==""||address==null) {
            document.getElementById("warning-address").innerHTML = "(*必需字段)";
        }
        else{
            document.getElementById("warning-address").innerHTML = "";
        }
}
/*
$().ready(function() {
    // 提交时验证表单
    var validator = $("#register_form").validate({
        errorPlacement: function(error, element) {
            $( element )
                .closest( "form" )
                .find( "label[for='" + element.attr( "id" ) + "']" )
                .append( error );
        },
        errorElement: "span",
        messages: {
            username: {
                required: " (*必需字段)",
                maxlength: " (长度不能少于 20)"
            },
            password: {
                required: " (*必需字段)",
                maxlength: " (长度不能少于20)"
            },

            confirm_password: {
                    required:" (*必需字段)",
                    equalTo: "两次密码输入不一致",
                    maxlength: " (长度不能少于 20)"

            },
            phone: {
                    required: " (*必需字段)",
                    maxlength: " (长度不能少于 20)"
            },
            email: {
                    required: " (*必需字段)",
                    maxlength: " (长度不能少于 20)"
            },
            address: {
                    required: " (*必需字段)",
                    maxlength: " (长度不能少于 20)"
            }
        }
    });
});
*/
function check(){
    var flag=false;
    var count=0;
    var username=$('#username').val();
    var password=$('#password').val();
    var confirm_password=$('#confirm_password').val();
    var phone=$('#phone').val();
    var email=$('#email').val();
    var address=$('#address').val();
    if (username==""||username==null) {
        document.getElementById("warning-username").innerHTML = "(*必需字段)";
        count++;
    }
    if (password==""||password==null) {
        document.getElementById("warning-password").innerHTML = "(*必需字段)";
        count++;
    }
    if (confirm_password==""||confirm_password==null) {
        document.getElementById("warning-confirm").innerHTML = "(*必需字段)";
        count++;
    }
    if (phone==""||phone==null) {
        document.getElementById("warning-phone").innerHTML = "(*必需字段)";
        count++;
    }
    if (email==""||email==null) {
        document.getElementById("warning-email").innerHTML = "(*必需字段)";
        count++;
    }
    if (address==""||address==null) {
        document.getElementById("warning-address").innerHTML = "(*必需字段)";
        count++;
    }
    if(count!=0){

    }
    else{
        $.ajax({
            type: "POST",
            url: "doctor/regist",
            data:$("#register_form").serialize(),
            async: false,
        });

    }

}

