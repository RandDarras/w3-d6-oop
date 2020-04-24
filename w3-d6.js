function Toaster() {
     var instance={}
     instance.addToast=addToast
     instance.toast=""
     instance.eject=eject
	 instance.timeOut =0
	instance.start=start
	instance.stop=stop
	return instance
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
	this.toast=undefined
	return toast
}


var start= function (seconds){

	var toast=this.toast
	var ding =function (){console.log("Ding!")}

	if (toast===""||toast===undefined){
		return "Empty, Add toast";
	} else if(toast.indexOf("toasted!")>=0){
				var toastedIndex=toast.indexOf("toasted!")
				this.timeOut= setTimeout(ding,(seconds*1000))
				this.toast=toast.slice(0,toastedIndex)+"Burnt!"
	} else {
		this.timeOut= setTimeout(ding,(seconds*1000))
		this.toast+= " toasted!"
	}
}

var stop =function(){
 clearTimeout(this.timeOut)
}

function makeStopwatch() {
	var instance={}
	instance.time=0
	instance.start=start
	instance.id=0
	instance.stop=stop
	instance.reset=reset
	return instance
}


var stop=function(){
	return clearInterval(this.id)
}

var reset=function(){
	clearInterval(this.id)
	return this.time=0
}

var timer=function() {
 		this.time+=1;
 		console.log('Elapsed time: ' + this.time + 's.');
 	}

var start=function(){
	var timer=function() {
 		this.time+=1;
 		console.log('Elapsed time: ' + this.time + 's.');
 	}
 	this.id=setInterval(timer,1000)
}