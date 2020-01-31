			var vm = new Vue({
				el : "#todolist",
				data : {
					weekday : '',
					month : '',
					day : '',
					lists : [],
					doneLists : [],
					inputValue : '',
					btnChangeColor1 : 'btnChangeColor1',
					btnChangeColor2 : 'btnChangeColor2'
				},
				created(){
					var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
					var month = ['January ','February ','March ','April ','May ','June ','July ','August ','September ','October ','November ','December '];
					var today = new Date();
					var dd = today.getDate();
					var mm = today.getMonth(); //January is 0!
					this.weekday = weekday[today.getDay()];
					this.month = month[mm];
					this.day = dd;
				},
				methods : {
					addList(){//添加一个备忘
						if(this.inputValue != ''){
							this.lists.push(this.inputValue);
							this.inputValue = '';
						}
					},
					deleteList(list){
						this.lists.splice(this.lists.indexOf(list),1);
					},
					doneList(list){
						if(this.doneLists.indexOf(list) === -1){
							this.doneLists.push(list);
						}else{
							this.doneLists.splice(this.doneLists.indexOf(list),1);
						}
					}
				}
			})
