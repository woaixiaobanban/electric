
function findPwd1(){
    var count=0;
    var username=$('#username').val();
    var phone=$('#phone').val();
    var email=$('#email').val();
    if (username==""||username==null) {
        document.getElementById("warning-username").innerHTML = "(*必需字段)";
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
    if(count!=0){
        return false;
    }
    else
    {
        $.ajax({
            type: "POST",
            url: "doctor/regist",
            data:$("#msform").serialize(),
            async: false,
        });
    }
}
function findPwd2() {
    var password = $('#newPwd').val();
    var confirm = $('#confirmPwd').val();
    if (password == "" || password == null || confirm == "" || confirm == null) {
        document.getElementById("findPwd2").innerHTML = "(*密码不能为空)";
        return false;
    }
    else if (password != confirm) {
        document.getElementById("findPwd2").innerHTML = "(*两次密码输入不一致)";
        return false;
    }
    else{
        $.ajax({
            type: "POST",
            url: "doctor/regist",
            data:$("#msform").serialize(),
            async: false,
        });
    }
}