			function set(key,val){
				localStorage.setItem(key,JSON.stringify(val));
			}
			
			function get(key){
				return JSON.parse(localStorage.getItem(key));
			}
			
			var myStorage = {
				set : set,
				get : get
			};
			
			var vm = new Vue({
				el : "#todolist",
				data : {
					weekday : '',
					month : '',
					day : '',
					lists : [
						//{
							//id : 0
							//text : '',
							//finished : false
						//}
					],
					doneLists : [],
					inputValue : '',
					btnChangeColor1 : 'btnChangeColor1',
					btnChangeColor2 : 'btnChangeColor2',
				},
				created(){
					var weekday = ["Sunday","Monday","Tuesday","Wednesday",
					"Thursday","Friday","Saturday"];
					var month = ['January ','February ','March ','April ','May ','June '
					,'July ','August ','September ','October ','November ','December '];
					var today = new Date();
					var dd = today.getDate();
					var mm = today.getMonth(); //January is 0!
					this.weekday = weekday[today.getDay()];
					this.month = month[mm];
					this.day = dd;
					
					this.lists = myStorage.get('lists') || [];
				},
				methods : {
					addList(){//添加一个备忘
						if(this.inputValue != ''){
							this.lists.push({id : this.lists.length,text : this.inputValue,finished : false});
							this.inputValue = '';
						}
					},
					deleteList(list){
						this.lists.splice(this.lists.indexOf(list),1);
					},
					doneList(list){
						if(list.finished === false){
							this.lists[list.id].finished = true;
						}else{
							this.lists[list.id].finished = false;
						}
						console.log(list.id)
					}
				},
				watch : {
					lists : {
						deep : true,
						handler : function(newVal,oldVal){
							if(newVal){
								myStorage.set('lists',newVal)
							}else{
								myStorage.set('lists',oldVal)
							}
						}
					}
				}
			})
