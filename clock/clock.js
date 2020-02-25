var vm = new Vue({
	el : '#clock',
	data : {
		date : '',
		time : '',
		idol : 'Good good study , day day up',
		colorNum : 'color-2'
	},
	methods : {
		changeColor(color){
			this.colorNum = color;
			console.log(color);
		}
	}
});

var week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
var timerID = setInterval(updateTime, 1000);

updateTime();

function updateTime(){
	var currDate = new Date();
	vm.date = addZero(currDate.getFullYear(),4) + '-' + addZero(currDate.getMonth() + 1,2) + '-' + addZero(currDate.getDate(),2) + ' ' + week[currDate.getDay()];
	vm.time = addZero(currDate.getHours(),2) + ':' + addZero(currDate.getMinutes(),2) + ':' + addZero(currDate.getSeconds(),2);
} 

function addZero(num,digit){
	var zero = '';
	for(let i = 0; i < digit; i ++){
		zero += '0';
	}
	return (zero + num).slice(-digit);
}
