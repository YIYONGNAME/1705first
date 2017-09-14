	$(".content-list").on("mouseover", "img", function(){
		$(this).stop().animate({"opacity":0.5},500,function(){
			$(this).stop().animate({"opacity":0.7},500)
	
		})
	})
	$(".content-list").on("mouseout", "img", function(){
		$(this).stop().animate({"opacity":1},500)
	})
//	$("img").mouseover(function(){
//		$(this).stop().animate({"opacity":0.5},500,function(){
//			$(this).stop().animate({"opacity":0.7},500)
//		})
//	})
	
	$.ajax({
		type:"get",
		url:"1index22.json",
		success:function(res){
			var str="";
			var arr=res.pull;
			for(var i in arr){
				str+=`<div id="son-pull" class="sonpull">
						<div id="son-pull-left">
							<ul><a href="#">${arr[i].wz1}</a>
								<li>
									<a href="http://127.0.0.1:8020/Metersbonwe/Metersbonwe/delails/delails.html">${arr[i].wz2}</a>
									<a href="#">${arr[i].wz3}</a>
									<a href="#">${arr[i].wz4}</a>
									<a href="#">${arr[i].wz5}</a>
									<a href="#">${arr[i].wz6}</a>
									<a href="#">${arr[i].wz7}</a>
									<a href="#">${arr[i].wz8}</a>
									<a href="#">${arr[i].wz9}</a>
									<a href="#">${arr[i].wz10}</a>
									<a href="#">${arr[i].wz11}</a>
									<a href="#">${arr[i].wz12}</a>
									<a href="#">${arr[i].wz13}</a>
								</li>
							</ul>
							<ul>  <a href="#">${arr[i].wz14}</a>
								<li>
									<a href="#">${arr[i].wz15}</a>
									<a href="#">${arr[i].wz16}</a>
									<a href="#">${arr[i].wz17}</a>
									<a href="#">${arr[i].wz18}</a>
									<a href="#">${arr[i].wz19}</a>
									<a href="#">${arr[i].wz20}</a>
									<a href="#">${arr[i].wz21}</a>
									<a href="#">${arr[i].wz22}</a>
									<a href="#">${arr[i].wz23}</a>
								</li>
							</ul>
							<ul>  <a href="#">${arr[i].wz24}</a>
								<li>
									<a href="#">${arr[i].wz25}</a>
									<a href="#">${arr[i].wz26}</a>
									<a href="#">${arr[i].wz27}</a>
									<a href="#">${arr[i].wz28}</a>
									<a href="#">${arr[i].wz29}</a>
									<a href="#">${arr[i].wz30}</a>
									<a href="#">${arr[i].wz31}</a>
									<a href="#">${arr[i].wz32}</a>
								</li>
							</ul>
						</div>
							<div id="son-pull-right">
								<img src="${arr[i].src10}"/>
								<div id="right-box">
								<p class="box_p">${arr[i].wz33}</p>
								<dl>
									<dd> <a href="#"> <img src="${arr[i].src1}"/> </dd>
									<dd> <a href="#"> <img src="${arr[i].src2}"/> </dd>
									<dd> <a href="#"> <img src="${arr[i].src3}"/> </dd>
									<dd> <a href="#"> <img src="${arr[i].src4}"/> </dd>
								</dl>
								<dl>
									<dd> <a href="#"> <img src="${arr[i].src5}"/> </dd>
									<dd> <a href="#"> <img src="${arr[i].src6}"/> </dd>
									<dd> <a href="#"> <img src="${arr[i].src7}"/> </dd>
									<dd> <a href="#"> <img src="${arr[i].src8}"/> </dd>
								</dl>	
							</div>
						</div>
					</div>`
			}	
			$(".bigbox").html( str)
		}
	});		
			
/*移入移出事件*/		
	$("#showall a").bind("mouseenter",function(){
		$("#pull-down").show();
	})
//	$("#pull-down").on("mouseleave","#pull-down",function(){
//		$("#pull-down").hide()
//	})
	$("#pull-down").on("mouseenter",".lili",function(){
		var index=$(this).index();
		//$(".sonpull").eq(index).css("z-index",10).siblings(".sonpull").css("z-index",0);
		$(".bigbox").show()
		$(".sonpull").eq(index).show().siblings(".sonpull").hide();
	})
	
	$(".bigbox").on("mouseleave",".sonpull",function(){
		$(".sonpull").hide();
		$(".bigbox").hide();
		$("#pull-down").hide()
//		location.reload();
	})
	