window.onload = function(){
	var date = new Date();
	var curYear = date.getFullYear();
	var curMonth = date.getMonth();
	var curDay = date.getDate();
	console.log(date + "," + curYear + "," + curMonth + "," + curDay); 
	
	var firstDayOfMonth = new Date(curYear,curMonth,1);
	var lastDayOfMonth = new Date(curYear,curMonth + 1,0);
	var blank = firstDayOfMonth.getDay();
	console.log(firstDayOfMonth + "v" + lastDayOfMonth + "v" + blank);
	showDate(curYear,curMonth,blank);
	var prevMonth = document.getElementById("prev");
	var nextMonth = document.getElementById("next");
	
	prevMonth.addEventListener("click",prevShow);
	nextMonth.addEventListener("click",nextShow);
	
	function prevShow(){
		var div = document.getElementById("calendar-content");
		//var removeEle = document.getElementsByClassName("weekdays");
		while(div.hasChildNodes()){
			div.removeChild(div.lastChild);
		}
		//showDate(curYear,curMonth,0);
	}
	
	function nextShow(){
		/*var div = document.getElementById("calendar-content");
		//var removeEle = document.getElementsByClassName("weekdays");
		while(div.hasChildNodes()){
			div.removeChild(div.lastChild);
		}
		//div.removeChild();
		showDate(curYear,curMonth,6);*/
	}
}

var showDate = function(year,month,blank){
	var i = 0;
	var div = document.getElementById("calendar-content");
	var week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var d = new Date().getDate();
	var curr = 0;
	if(month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11){
		i = 31;
	}else if(month === 3 || month === 5 || month === 8 || month === 10){
		i = 30;
	}else if((year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)){
		i = 29;
	}else{
		i = 28;
	}
	
	
	for(let j = 0; j < 7; j ++){
		var node = document.createElement("DIV");
		var textnode = document.createTextNode(week[j]);
		node.appendChild(textnode);
		node.className = "weekdays";
		div.appendChild(node);
	}
	
	for(let j = 0; j < blank; j ++){
		var node = document.createElement("DIV");
		var textnode = document.createTextNode('');
		node.appendChild(textnode);
		node.className = "weekdays";
		div.appendChild(node);
	}
	
	for(let j = 1; j <= i; j ++){
		var node = document.createElement("DIV");
		var textnode = document.createTextNode(j);
		node.appendChild(textnode);
		node.className = "weekdays";
		div.appendChild(node);
		
		if(j === d){
			curr = j;
		}
	}	
	document.getElementsByClassName("weekdays")[curr + 6 + blank].style.color = "yellow";
}
