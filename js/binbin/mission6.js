/**
 * Created by Administrator on 2017/4/25.
 */
window.onload = function () {

	var all_data = document.getElementById('all_data'),
		left_in = document.getElementById('left_in'),
		left_out = document.getElementById('left_out'),
		right_in = document.getElementById('right_in'),
		right_out = document.getElementById('right_out'),
		show_list = document.getElementById('show_list'),
		show_list_children = show_list.getElementsByTagName('li'),
		addData = '',
		search = document.getElementById('search'),
		search_data = document.getElementById('search_data'),
		result = document.getElementById('result');

	/*
	* 对输入的数据进行判断
	* */
	function judgeNum() {
		var data = all_data.value;
		if(data === ''){
			alert('请先输入想要添加的数据！');
		}else{
			return getData(data);
		}
	}

	/*
	* 提取数据
	* */
	function getData(data) {
		var re = /([,，、;；.。\s]+)/g,
			arr = [],
			j = 0;
		//除去所有分隔符，并替换为","，然后分解成数组
		data = data.replace(re,',').split(',');

		for(var i = 0; i < data.length; i++){
			if(data[i]){
				arr[j] = data[i];
				j++;
			}
		}
		return arr;
	}

	/*
	* 模糊搜索
	* */
	function searchData() {
		var data = search_data.value,
			length = show_list_children.length,
			flag2 = 0;

		//重置标记
		for(var i = 0; i < length;i++){
			show_list_children[i].style.backgroundColor = '#0099FF';
		}

		if(data){
			for(var i = 0; i < length; i++){
				//找到并标记
				if(show_list_children[i].innerHTML.indexOf(data) !== -1){
					show_list_children[i].style.backgroundColor = '#999';
					flag2++;
				}
			}

			if(!flag2){
				result.childNodes[1].innerHTML = '没有搜索到该数据！';
			}else{
				result.childNodes[1].innerHTML = '共搜索到' + flag2 + '条数据！';
			}
		}
	}

	/*
	* 左入函数
	* */
	function leftIn(data) {

		for(var i = 0; i < data.length; i++){
			//创建新节点
			var li = document.createElement('li');
			li.innerHTML = data[i];

			if(show_list_children.length === 0){
				//当前列表为空时
				show_list.appendChild(li);
			}else{
				show_list.insertBefore(li, show_list_children[0])
			}
			addClick(li);
		}
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

		for(var i = 0;i < data.length; i++){
			//创建新节点
			var li = document.createElement('li');
			li.innerHTML = data[i];
			//接入
			show_list.appendChild(li);
			addClick(li);
		}
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
			addData = judgeNum();
			if(addData){
				leftIn(addData);
			}
			all_data.value = '';
		};

		left_out.onclick = function () {
			leftOut();
			all_data.value = '';
		};

		right_in.onclick = function () {
			addData = judgeNum();
			if(addData){
				rightIn(addData);
				all_data.value = '';
			}
		};

		right_out.onclick = function () {
			rightOut(addData);
			all_data.value = '';
		};

		search.onclick = function () {
			searchData();
		}
	}
	run();
};