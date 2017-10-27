;(function (global) {

	function ShowRemainTime(el, leftTime) {
		this.el = el;
		this.leftTime = leftTime;
	}

	ShowRemainTime.prototype = {
		showTime: function () {
			var self = this;
			var $el=this.el;
			var $leftTime=this.leftTime;

			var timer = setTimeout(function () {
				var needTime = parseInt($leftTime / 1000);
				var nd = parseInt(needTime / (24 * 60 * 60));
				var nh = parseInt(needTime / (60 * 60) % 24);
				var nm = parseInt(needTime / 60 % 60);
				var ns = parseInt(needTime % 60);
				if (needTime <= 0) {
					clearTimeout(timer);
					$el.html('已结束');
				} else {
					$el.html(nh + ':' + nm + ':' + ns);
					self.leftTime = $leftTime - 1000;
					console.log('time is '+$leftTime);
					self.showTime();
				}
			},1000);
		},
		showT: function () {
			var self = this;
			var $el = this.el;
			var timer = setInterval(function () {
				var needTime = parseInt(self.leftTime / 1000);
				var nd = parseInt(needTime / (24 * 60 * 60));
				var nh = parseInt(needTime / (60 * 60) % 24);
				var nm = parseInt(needTime / 60 % 60);
				var ns = parseInt(needTime % 60);
				if (needTime <= 0) {
					clearInterval(timer);
					$el.html('已结束');
				} else {
					$el.html(nh + ':' + nm + ':' + ns);
					self.leftTime -= 1000;
				}
			},1000);
		}

	};

	global['ShowRemainTime'] = ShowRemainTime;

})(typeof window !== 'undefined' ? window: global);