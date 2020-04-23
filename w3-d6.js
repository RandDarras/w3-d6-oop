function Toaster() {
     var instance={}
     instance.addToast=addToast
     instance.toast=""
     instance.eject=eject
	instances.timeOut =0
	instances.start=start
	instances.stop=stop
	return instances
}

var addToast= function(toast){
	this.toast=toast
	return toast+" Added!"
}

var eject= function(){
	var toast=this.toast
	if(toast===undefined||toast===""){
		return "Empty, Add Toast!"
	} 
	this.addToast=undefined
	return toast
}


var start= function (seconds){

var ding =function (){console.log("Ding!")}
	if (this.toast===""||this.toast===undefined){
		return "Empty, Add toast"
	
	} else {
		this.timeOut= setTimeout(ding,(seconds*1000))
		this.toast+= " toasted!"
		}
}

var stop =function(){
 clearTimeout(this.timeOut)
}

