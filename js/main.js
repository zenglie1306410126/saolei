function addh(){
    var h,sil;
    sil = document.getElementById("pn");
    h = parseFloat(sil.style.height) ||0;
    h += 5;
    sil.style.height = h +"px";
    if (h < 300){
        setTimeout(addh,30);
    }             
}

function subh(){
    var h,sil;
    sil = document.getElementById("pn");
    h = parseFloat(sil.style.height) || 0;
    h = ((h-5)<=0 || h <=0)? 0 : (h-5);
    sil.style.height = h +"px";
    if (h > 4){
        setTimeout(subh,30);
    } 
}

window.onload = function(){
    addh();  
    var dec = setTimeout(subh,5000);
}
	
	var data=[];
	var cols,rows,zhadan;
	function start(){
	rows=parseInt(document.getElementById("a").value); 
	cols=parseInt(document.getElementById("b").value);
	zhadan=parseInt(document.getElementById("boom").value);
	var htmlstr="<table id='lei' border='1' width='"+cols*30+"px"+"' height='"+rows*30+"px"+"' align='center' onclick='pop();''>";
	for(i=1;i<=cols;i++){
 	htmlstr+="<tr>";
 	for(j=11;j<=rows+10;j++){
 	var y=i*100+j;
  	htmlstr+="<td  id='"+y+"'>" + "&nbsp;" +"</td>"; 
 	}
 	htmlstr+="</tr>";
	}
	htmlstr+="</table>";
	document.body.innerHTML=htmlstr;
		for(var i=0;i<=cols+2;i++){
		data[i]=[];
		for(var j=0;j<=rows+2;j++){
			data[i][j]=0;
		}
}

	for(var count=1;count<=zhadan;count=count+1){
		var a=Math.ceil(cols*(Math.random())); 
		var b=Math.ceil(cols*(Math.random()));
		console.log(a+"+"+b+"+"+count);
		if(data[a][b]!="X"){ 
		data[a][b]="X"; 
		if(data[a-1][b-1]!="X"){data[a-1][b-1]=data[a-1][b-1]+1;}
		if(data[a-1][b]!="X"){data[a-1][b]=data[a-1][b]+1;}
		if(data[a-1][b+1]!="X"){data[a-1][b+1]=data[a-1][b+1]+1;}
		if(data[a][b-1]!="X"){data[a][b-1]=data[a][b-1]+1;}
		if(data[a][b+1]!="X"){data[a][b+1]=data[a][b+1]+1;}
		if(data[a+1][b-1]!="X"){data[a+1][b-1]=data[a+1][b-1]+1;}
		if(data[a+1][b]!="X"){data[a+1][b]=data[a+1][b]+1;}
		if(data[a+1][b+1]!="X"){data[a+1][b+1]=data[a+1][b+1]+1;}
	}else{count=count-1;} 
	}
	}
	
	/*for(var i=1;i<=cols;i++){ 
	for(var j=1;j<=rows;j++){ 
	if(data[i][j]!="lei"){ 
	var counter=0; 
	if(data[i-1][j-1]=="lei") counter=counter+1; 
	if(data[i-1][j]=="lei") counter=counter+1; 
	if(data[i-1][j+1]=="lei") counter=counter+1; 
	if(data[i][j-1]=="lei") counter=counter+1; 
	if(data[i][j+1]=="lei") counter=counter+1; 
	if(data[i+1][j-1]=="lei") counter=counter+1; 
	if(data[i+1][j]=="lei") counter=counter+1; 
	if(data[i+1][j+1]=="lei") counter=counter+1; 
	data[i][j]=counter; 
	} 
	} 
	} */

	function pop(){ 
	
		event.onclick=true; 
		var number=parseInt(event.srcElement.getAttribute("id")); 
		var i=parseInt(number / 100); 
		var j=number%100-10; 
		if(data[i][j]=="X"){ 
		alert("中雷了"); 
		check(); 
		return; 
		} 
		if(data[i][j]==0){ 
		for(var p=i-1;p<i+2;p++){ 
		for(var q=j-1;q<j+2;q++){ 
			var n=q+10;
		var r="" +p+""+n; 
		var oElement=document.getElementById(r); 
		if(oElement){ 
		oElement.innerHTML=data[p][q]; 
		} 
		} 
		} 
		return; 
		} 
		document.getElementById(event.srcElement.getAttribute("id")).innerHTML=data[i][j]; 
		} 
		function check(){ 
		for(var i=1;i<=cols;i++){ 
		for(var j=1;j<=rows;j++){ 
		var m=j+10;
		var no="" + i+""+m; 
		document.getElementById(no).innerHTML=data[i][j]; 
		} 
		} 
		
		}	