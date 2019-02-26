function reload(){
	window.location.reload(true);
}
function onClickRadio (){	
	
}
function result() {
	var result = 0;
	var pr_otvets = ["4","2","3","3","4","1","2"];


	var mas_vopros = document.getElementsByClassName('vopros');
	for (let item of mas_vopros) {
		var current_vopros = item.id;
		var cur_nomer = current_vopros.replace("vopros_","");
		var nn = parseInt(cur_nomer)-1;		
		var mas_cur_otvet = document.getElementsByName('ot_'+ current_vopros);
		var cur_otvet = 0;
		for (let item of mas_cur_otvet) {
		    if (item.checked) {
	    		cur_otvet =  item.value;
	    		break;
	    	}
		}	
		if (cur_otvet == pr_otvets[nn]) {
			result += 1;	
		

   }
 
   var endResult = result / 7 * 100;

   document.getElementById('Result_window').style.display = "block";
   document.getElementById('testirovanie').style.display = "none";
   document.getElementById('reload').style.display = "block";


  if (endResult > 85)
  	{
  	document.getElementById('Result_window').style.background ="#439c38";
  	 document.getElementById("Result").innerHTML="Ваш результат - "+ (endResult).toFixed(1) + "%";
   	 document.getElementById("Text_Result").innerHTML="У вас превосходный уровень финансовой грамотности.";
	}
  else if (endResult < 85 & endResult > 50)
  	{
  	 document.getElementById('Result_window').style.background ="#c1bb4f";
  	 document.getElementById("Result").innerHTML="Ваш результат - "+ (endResult).toFixed(1) + "%";
   	 document.getElementById("Text_Result").innerHTML="У вас нормальный уровень финансовой грамотности, но нужно постоянно развивать свои знания.";
	}
  else{
  	document.getElementById('Result_window').style.background ="#bf4949";
  	 document.getElementById("Result").innerHTML="Ваш результат - "+ (endResult).toFixed(1) + "%";
   	 document.getElementById("Text_Result").innerHTML="У вас низкий уровень финансовой грамотности. Вам срочно нужно занятся её изучением.";
  }


   
}
}
function open1() {
document.getElementById('testirovanie').style.display = "block";
document.getElementById('start').style.display = "none";
}


function next() {

    

	var mas_vopros = document.getElementsByClassName('vopros');
	var current_vopros = "";

	for (let item of mas_vopros) {
	    if (item.style.display == "block") {
	    	current_vopros =  item.id;
	    }
	}

	var mas_cur_otvet = document.getElementsByName('ot_'+current_vopros);
	var cur_otvet = 0;
	for (let item of mas_cur_otvet) {
	    if (item.checked) {
	    	cur_otvet =  item.value;
	    }
	}	
	if (cur_otvet == 0) {
		alert("Необходимо указать ответ!!!");
		return;
	}
	document.getElementById(current_vopros).style.display = "none";
	var cur_nomer = current_vopros.replace("vopros_","");
	var nn = parseInt(cur_nomer)+1;
	document.getElementById("vopros_"+nn.toString()).style.display = "block";
	nn=nn+1;
	var check_vopros = document.getElementById("vopros_"+nn.toString());
	if (check_vopros == null) {
		document.getElementById("next").style.display = "none";
		document.getElementById("result").style.display = "block";
	}
}