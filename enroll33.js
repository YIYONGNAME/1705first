
function rand(min,max){
	return Math.floor(Math.random()* (max-min+1) +min)
}
//验证码
yzm()
function yzm(){
	var str="123456789abcdefghijknolwopqrstwvuxyz";
	var arr="";
	for(var i=0; i<4; i++){
		arr+=str[ rand(0, str.length-1)];  
	}
	$("#yzm1").val( arr);
}

$("#huan").click(function(){
	yzm()
})

//取出cookie中的数据
$(function(){
	var arr=getCookie("message");
	var name=arr[0].name;
	$(".span1").html(name)
})

//跳转到主页面
$("#btn").click(function(){
	location.href="index.html";
})



//用户名
var flagname=null;
$("#pname").blur(function(){
	var reg=/^\w{3,5}/;
	var str=$("#pname").val()
	//alert(str)
	
	if( !reg.test( str)){
		$("#s1").show()
		flagname=false;
	}else{
		flagname=true;
	}
	return flagname
})
//手机号
var flagfigure=null;
$("#figure").blur(function(){
	var reg=/^1(5|3|8)\d{9,}$/
	var str=$("#figure").val();
	if( !reg.test(str) ){
		$("#s2").show()
		flagfigure=false;
	}else{
		flagfigure=true;
	}
	return flagfigure;
})	
//验证码		
var flagyzm=null;
$("#yzm").blur(function(){
	if( $("#yzm").val()==$("#yzm1").val() ){
		flagyzm=true;
	}else{
		$("#s3").show();
		flagyzm=false;
	}
	return flagyzm;
})

