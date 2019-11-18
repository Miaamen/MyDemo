		var select1 = document.getElementsByClassName('select')[0];
		var selectLi1 = document.getElementsByClassName('selcet-li')[0];
		var select2 = document.getElementsByClassName('select')[1];
		var selectLi2 = document.getElementsByClassName('selcet-li')[1];
		var flag = 0;
		select1.onclick = function(){
			if(flag == 0){
				selectLi1.style.display = "block";
				flag = 1;
			}else{
				selectLi1.style.display = "none";
				flag = 0;
			}
		}
		select2.onclick = function(){
			if(flag == 0){
				selectLi2.style.display = "block";
				flag = 1;
			}else{
				selectLi2.style.display = "none";
				flag = 0;
			}
		}	

		var selectLiA = document.getElementsByClassName("select-li-a");
		var topNavLi = document.getElementsByClassName("top-nav-li");
		for(let i = 0; i < selectLiA.length; i ++){
			selectLiA[i].onclick = function(){
				topNavLi[i].style.display = "inline";
			}
		}
		var icon = document.getElementsByClassName('fa fa-times');
		for(let i = 0; i < icon.length; i ++){
			icon[i].onclick = function(){
				topNavLi[i].style.display = "none";
				////下面的页面也要没有
			}
		}
