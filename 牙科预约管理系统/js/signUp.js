		var inp1 = document.getElementsByTagName("input")[0];
		var inp2 = document.getElementsByTagName("input")[1];
		inp1.onfocus = function(){
			inp1.classList.add("focus");
		}
		inp2.onfocus = function(){
			inp2.classList.add("focus");
		}
		inp1.onblur = function(){
			if(inp1.value.length==0){
				inp1.classList.remove("focus");
			}
		}
		inp2.onblur = function(){
			if(inp2.value.length==0){
				inp2.classList.remove("focus");
			}
		}

		var btn = document.getElementById("checkedBtn");
		var btn1 = document.getElementsByTagName("button")[0];
		var btn2 = document.getElementsByTagName("button")[1];
		btn1.onclick = function(){
			btn.style.left = "0px";
		}
		btn2.onclick = function(){
			btn.style.left = "115px";
		}
