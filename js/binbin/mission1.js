/**
 * Created by Administrator on 2017/4/25.
 */
window.onload = function () {
	//获取需要的元素
	var oIpt = document.getElementById('aqi-input'),
		oBtn = document.getElementById('button'),
		oSpn = document.getElementById('aqi-display');

	//onclick事件替换值
	oBtn.onclick = function () {
		oSpn.innerHTML = oIpt.value;
	}
};