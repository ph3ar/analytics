window.onload =()=>{
	var x = new XMLHttpRequest();
	(()=>{
		console.log('1');
		console.log(x);
		x.onreadystatechange =()=>{
			console.log('2');
			if (this.readyState == 4 && this.status == 200){
				console.log('3');
				let data = {};
				data.url = window.location.href;
				x.setRequestHeader('data','json');
				x.open('POST','b0sl56kv7.execute-api.us-east-1.amazonaws.com/call?develop=NHZaffA2Sv4A5Dkh1Ft2O6Ru7CvGTJMB2qnzmYce',true);
				x.send(JSON.stringify(data));
				console.log(window);
			}
		}
	})()
}