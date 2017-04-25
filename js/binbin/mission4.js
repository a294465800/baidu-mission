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
		addNum = 0;

	/*
	* 对输入的数字进行判断
	* */
	function judgeNum() {
		var number = num.value;
		if(number === ''){
			alert('请先输入想要添加的数！');
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
		var li = document.createElement('li');
		li.innerHTML = data;

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
		var li = document.createElement('li');
		li.innerHTML = data;
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

	//为li添加点击事件
	function addClick(self) {
		self.onclick = function () {
			show_list.removeChild(self);
		}
	}

	function run() {
		left_in.onclick = function () {
			addNum = judgeNum();
			if(addNum){
				leftIn(addNum);
			}
			num.value = '';
		};

		left_out.onclick = function () {
			leftOut();
			num.value = '';
		};

		right_in.onclick = function () {
			addNum = judgeNum();
			if(addNum){
				rightIn(addNum);
				num.value = '';
			}
		};

		right_out.onclick = function () {
			rightOut(addNum);
			num.value = '';
		};
	}
	run();
};