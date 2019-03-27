 $(function(){
 	var lis = $('li');
 	var arr = ['n1','n2','n3','n4','n5','n6','n7','n8','n9'];
 	var num = [];
 	var i;
 	var random = parseInt(Math.random()*4);
 	var flag = true;
 	for(var i=0;i<lis.length;i++){
 		//打乱拼图
 		lis[i].id=map[random][i];
 		// 测试数组
 		// lis[i].id=testArr[i];
 	}
 	lis.mousedown(function(){
 			if (flag) {
 				$("#fnTimeCountDown").fnTimeCountDown();//无参数正计时,有参数倒计时
 				flag = false;
 			}
			//空白格位置
			i = $('#n9').index();//0 length-1
			//互换判定
			if($(this).index() == i-1 && i!=3 && i!=6 || $(this).index()== i+1 && i!=2 && i!= 5 || $(this).index()== i+3 || $(this).index()== i-3 ){

			$('#n9')[0].id = this.id;
			this.id = 'n9';
			test();
			}
 	})

 	function test(){
 			num=[];
 		for(var i = 0; i < lis.length ; i++){
 			num.push(lis[i].id)
 		}
 		if(arr.toString() == num.toString()) {
 			var content = $('#fnTimeCountDown').html();
 			$('#fnTimeCountDown').html(content);
   			$(lis).unbind('mousedown');
   			$('*').css('border','none');
   			$('ul').css({
   				'transform':'scaleY(1.2) scaleX(1.2)'
   			})
 		}
 		
 	}
 	console.log('点击缩略图可以查看攻略 -- 雷锋');
 })
