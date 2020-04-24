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

function makeStopwatch(name) {
	var instance={}
	instance.name=name
	instance.time=0
	instance.start=start
	instance.id=0
	instance.stop=stop
	instance.reset=reset
	instance.lap=lap
	instance.lapsArr=[]
	instance.laps=laps
	return instance
}	


var stop=function(){
	return clearInterval(this.id)
}

var reset=function(){
	clearInterval(this.id)
	 this.time=0
	 this.lapsArr=[]
}


var start=function(){
	var internalScope=this
	var timer=function() {
 		internalScope.time+=1;
 		console.log('Elapsed time: ' + internalScope.time + 's. '+internalScope.name);
 	}
 	this.id=setInterval(timer,1000)
}

var lap=function(){
	this.lapsArr.push(this.time+"s")
	return "Adding lap @ "+this.time+"s "+this.name
}
var laps=function(){
	if(this.lapsArr.length===0){
		return "No Laps"
	}
	var str=""
		for(var i=0; i<this.lapsArr.length; i++){
			str+= i+1+". " + this.lapsArr[i]+"\n"
			}
	return str
}