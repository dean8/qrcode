var im = document.getElementById("qrcode"),prefix = "http://qr.liantu.com/api.php?bg=f3f3f3&fg=ff0000&gc=222222&el=l&w=200&m=10&text=";
chrome.tabs.getSelected(function(w){
	var url = w.url,img = new Image();
	img.src = prefix + url;
	img.onload = function(){
		im.src = this.src;
		im.style.display = "block";
	}
})