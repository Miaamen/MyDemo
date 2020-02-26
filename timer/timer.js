var vm = new Vue({
	el : '#timer',
	data : {
		hours : '00',
		minutes : '00',
		seconds : '00',
		colorNum : 'color-2',
		startOrReset : 'Start',
		flag : 0,
		updateTime : null
	},
	methods : {
		start : function(){
			console.log('start');
			this.updateTime = setInterval(updateSeconds,1000);
		},
		stop : function(){
			console.log('stop');
			clearInterval(this.updateTime);
		},
		changeColor(color){
			this.colorNum = color;
			console.log(color);
		}
	}
});





function addZero(str){
	var temp = Number(str);
	if(temp < 10){
		return '0' + temp;
	}
	return temp;
}

function updateSeconds(){
	if(Number(vm.seconds) < 59){
		vm.seconds = addZero(Number(vm.seconds) + 1);
	}else{
		vm.seconds = '00';
		updateMinutes();
	}
}

function updateMinutes(){
	if(Number(vm.minutes) < 59){
		vm.minutes = addZero(Number(vm.minutes) + 1);
	}else{
		vm.minutes = '00';
		updateHours();
	}
}

function updateHours(){
	if(Number(vm.hours) < 24){
		vm.hours = addZero(Number(vm.hours) + 1);
	}else{
		alert('a day pass!!')
	}
}
