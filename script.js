const number=document.getElementById("ip");
const buttonElement=document.getElementById("btn");
const outputDiv=document.getElementById("output");
buttonElement.addEventListener("click",function(){
let numberValue=Number(number.value);
	
	let promise1=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(`Result: ${numberValue}`);
		},2000)
	});
	let promise2=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			numberValue*=2;
			resolve(`Result: ${numberValue}`);
		},4000)
	});
	let promise3=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			numberValue-=3;
			resolve(`Result: ${numberValue}`);
		},5000)
	});
	let promise4=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			numberValue/=2;
			resolve(`Result: ${numberValue}`);
		},6000)
	});
	let promise5=new Promise((resolve,reject)=>{
		setTimeout(()=>{
			numberValue+=10;
			resolve(`Final Result: ${numberValue}`);
		},7000)
	});
	
	promise1.then((data1)=>{
		outputDiv.textContent=data1;
		return promise2;
	}).then((data2)=>{
			outputDiv.textContent=data2;
		return promise3;
	}).then((data3)=>{
			outputDiv.textContent=data3;
		return promise4;
	}).then((data4)=>{
			outputDiv.textContent=data4;
		return promise5;
	}).then((data5)=>{
			outputDiv.textContent=data5;
	})
})
