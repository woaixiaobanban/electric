/**
 * Created by BanTing on 2016/5/18.
 */
function adminLogin() {
    // $("input[name='btnadd']").attr("disabled",true);//把"确定"按钮变为不可用
    // alert("!!!!!");
    $.ajax({
        type : "POST",
        url : "Login.action",
        data : $("#regForm").serialize(),
        async : false,
        beforeSend : function() {
            var msg = submitMsg();
            if (msg.length > 0) {
                document.getElementById("error-message").innerHTML=msg;
                $("#error").css("display","block");
                return false;
            }
        },
        success : function(msg) {
            if (msg == 1) {
                window.location.href = "mid.jsp";
            } else if (msg == 2) {
                alert("您输入的用户不存在！");
                window.location = "lginew.jsp";
            } else if (msg == 3) {
                alert("您输入的用户名和密码不匹配！");
                window.location = "lginew.jsp";
            } else if (msg == 0) {
                alert("数据库连接异常！");
                window.location = "lginew.jsp";
            }
        },
        complete : function() {
            // $("input[name='btnadd']").attr("disabled",false);//把"确定"按钮变为可用
        }
    });
}

/**
 * 输入检测，检测用户名密码不为空
 * @returns {String}
 */
function submitMsg() {
    var msg = "";
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();

    if (username == "") {
        msg += "账号不能为空！\r";
    } else if (password == ""  ) {
        msg += "密码不能为空！\r";
    }
    return msg;
}
/**
 * 按回车键聚焦密码框
 * @param e
 */
function EnterPress(e) { // 传入 event

    var e = e || window.event;

    if (e.keyCode == 13) {
        document.getElementById("password").focus();
    }
}
/**
 * 回车登录
 * @param e
 */
function keyLogin(){
    if (event.keyCode==13)   //回车键的键值为13
        document.getElementByIdx_x("input1").click();  //调用登录按钮的登录事件
}
function EnterPress_login(e) { // 传入 event
    var e = e || window.event;
    if (e.keyCode == 13) {
        document.getElementById("btnadd").focus();
    }
}

