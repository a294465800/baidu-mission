/**
 * Created by Administrator on 2017/4/25.
 */
window.onload = function () {

	var num = document.getElementById('num'),
		left_in = document.getElementById('left_in'),
		left_out = document.getElementById('left_out'),
		right_in = document.getElementById('right_in'),
		right_out = document.getElementById('right_out'),
		show_list = document.getElementById('show_list'),
		show_list_children = show_list.getElementsByTagName('li'),
		addNum = 0,
		sortBtn = document.getElementById('sort'),
		flag = 0;

	/*
	* 对输入的数字进行判断
	* */
	function judgeNum() {
		var number = num.value;
		if(number === ''){
			alert('请先输入想要添加的数！');
		}else if(show_list_children.length >= 60){
			alert('最多显示60个！已经是极限了！')
		}else{
			number = Number(number);
			if(isNaN(number)){
				alert('请输入数字！');
			}else {
				return number;
			}
		}
	}

	/*
	* 左入函数
	* */
	function leftIn(data) {
		//创建新节点
		var li = document.createElement('li'),
			p = document.createElement('p');
		li.style.height = data +'px';
		p.innerHTML = data;
		li.appendChild(p);

		if(show_list_children.length === 0){
			//当前列表为空时
			show_list.appendChild(li);
		}else{
			show_list.insertBefore(li, show_list_children[0])
		}
		addClick(li);
	}

	//左出函数
	function leftOut() {
		if(show_list_children.length === 0){
			alert('请先输入想要添加的数！');
		}else{
			show_list.removeChild(show_list_children[0]);
		}
	}

	//右入函数
	function rightIn(data) {
		//创建新节点
		var li = document.createElement('li'),
			p = document.createElement('p');
		li.style.height = data +'px';
		p.innerHTML = data;
		li.appendChild(p);
		//接入
		show_list.appendChild(li);
		addClick(li);
	}

	//右出函数
	function rightOut() {
		if(show_list_children.length === 0){
			alert('请先输入想要添加的数！');
		}else{
			var a = show_list_children.length;
			show_list.removeChild(show_list_children[a-1]);
		}
	}

	//冒泡排序
	function sort(flag1) {
		var arr = [],
			temp = [],
			pNum = show_list.getElementsByTagName('p'),
			length = pNum.length;

		for( var i = 0; i< length; i++){
			arr[i] = Number(pNum[i].innerHTML);
		}

		//排序，根据flag1的值选择降序还是升序
		for(var i = 0;i < length; i++){
			for(var j = i + 1;j < length; j++){
				if(0 === flag1){
					if(arr[i] <= arr[j]){
					}else {
						temp = arr[i];
						arr[i] = arr[j];
						arr[j] = temp;
					}
				}else{
					if(arr[i] >= arr[j]){
					}else {
						temp = arr[i];
						arr[i] = arr[j];
						arr[j] = temp;
					}
				}
			}
		}

		//清空所有li
		show_list.innerHTML = '';
		for(var i = 0;i < length; i++){
			//重新插入li
			var li = document.createElement('li'),
				p1 = document.createElement('p');
			li.style.height = arr[i] +'px';
			p1.innerHTML = arr[i];
			li.appendChild(p1);
			show_list.appendChild(li);
			addClick(li);
		}
		return flag1 === 0 ? 1 : 0;
	}

	//为li添加点击事件
	function addClick(self) {
		self.onclick = function () {
			show_list.removeChild(self);
		}
	}

	//主函数
	function run() {
		//左侧入添加事件
		left_in.onclick = function () {
			addNum = judgeNum();
			if(addNum){
				if(addNum < 10 || addNum > 100){
					alert('请输入10-100之间的数字！')
				}else{
					leftIn(addNum);
				}
			}
			num.value = '';
		};

		//左侧出添加事件
		left_out.onclick = function () {
			leftOut();
			num.value = '';
		};

		//右侧入添加事件
		right_in.onclick = function () {
			addNum = judgeNum();
			if(addNum){
				if(addNum < 10 || addNum > 100){
					alert('请输入10-100之间的数字！')
				}else{
					rightIn(addNum);
				}
			}
			num.value = '';
		};

		//右侧出添加事件
		right_out.onclick = function () {
			rightOut(addNum);
			num.value = '';
		};

		//排序添加事件
		sortBtn.onclick = function () {
			flag = sort(flag);
		}
	}
	run();
};