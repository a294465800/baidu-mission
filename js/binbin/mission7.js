/**
 * Created by Administrator on 2017/4/26.
 */
window.onload = function () {
	var arr = [],
		i = 0,
		flag = 0,
		time;

	//获取button
	var first = document.getElementById('first'),
		mid = document.getElementById('mid'),
		end = document.getElementById('end'),
		layer = document.getElementById('layer'),
		reset = document.getElementById('reset');

	//获取初始遍历节点
	var root = document.getElementById('root'),
		aDiv = root.getElementsByTagName('div'),
		length = aDiv.length;

	//先序遍历
	function FirstFind(node) {
		if(node){
			arr.push(node);    //压入根
			FirstFind(node.firstElementChild);    //查左子树
			FirstFind(node.lastElementChild);     //查右子树
		}
	}

	//中序遍历
	function MidFind(node) {
		if(node){
			MidFind(node.firstElementChild);    //查左子树
			arr.push(node);    //压入根
			MidFind(node.lastElementChild);     //查右子树
		}
	}

	//后序遍历
	function EndFind(node) {
		if(node){
			EndFind(node.firstElementChild);    //查左子树
			EndFind(node.lastElementChild);     //查右子树
			arr.push(node);    //压入根
		}
	}

	//给遍历的元素上色
	function color(data) {
		if(flag){
			time = setInterval(function () {
				if(i < data.length){
					data[i].style.backgroundColor = '#3366CC';
					i++;
				}else {
					clearInterval(time);
					i = 0;
					arr.length = 0;
				}
			},800);
		}else {
			i = 0;
			arr.length = 0;
		}
	}

	//主函数
	function init() {
		//先序按钮设置事件
		first.onclick = function () {
			flag = flag ? 0 : 1;     //再次点击会关闭遍历
			if(flag){
				this.style.color = '#CC3333';
			}else {
				this.style.color = '#fff';
			}
			clearInterval(time);
			root.style.backgroundColor = '#fff';
			for(var i = 0;i < length; i++){
				aDiv[i].style.backgroundColor = '#fff';
			}
			FirstFind(root);
			color(arr);
		};

		//中序按钮设置事件
		mid.onclick = function () {
			flag = flag ? 0 : 1;
			if(flag){
				this.style.color = '#CC3333';
			}else {
				this.style.color = '#fff';
			}
			clearInterval(time);
			root.style.backgroundColor = '#fff';
			for(var i = 0;i < length; i++){
				aDiv[i].style.backgroundColor = '#fff';
			}
			MidFind(root);
			color(arr);
		};

		//后序按钮设置事件
		end.onclick = function () {
			flag = flag ? 0 : 1;
			if(flag){
				this.style.color = '#CC3333';
			}else {
				this.style.color = '#fff';
			}
			clearInterval(time);
			root.style.backgroundColor = '#fff';
			for(var i = 0;i < length; i++){
				aDiv[i].style.backgroundColor = '#fff';
			}
			EndFind(root);
			color(arr);
		};

		//重置按钮
		reset.onclick = function () {
			flag = 0;
			clearInterval(time);
			root.style.backgroundColor = '#fff';
			for(var i = 0;i < length; i++){
				aDiv[i].style.backgroundColor = '#fff';
			}
		};
	}
	init();
};