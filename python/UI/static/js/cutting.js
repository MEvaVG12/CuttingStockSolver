var counter =1;
var refreshIntervalId;
function checkWasteSize()
{
	var stockSize =document.getElementById("stockSize").value;
	var wasteSize =document.getElementById("wasteThreshold").value;
	//document.write(stockSize+blockSize);
	if(wasteSize>stockSize)
	{
		//alert("Please enter waste size less than or equal to "+ stockSize);
	}
}

function checkBlockSize()
{
	var stockSize =document.getElementById("stockSize").value;
	var blockSize =document.getElementsByName("bsize")[0].value;
	//document.write(stockSize+blockSize);
	if(blockSize>stockSize)
	{
		alert("Please enter block size less than or equal to "+ stockSize);
	}
}

function addMore() {
    var table = document.getElementById("blockTable");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "<input type='number' class='form-control' id='bSize"+counter+ "' name='size"+counter+ "' width='200' required>";
    cell2.innerHTML = "<input type='number' class='form-control' id='bqty"+counter+" ' name='qty"+counter+ "' width='200' required>";
	counter++;
}

function selectAlgo()
{
	if (document.getElementById('genetic').checked) {
        document.getElementById('stockinput').style.visibility = 'visible';
		document.getElementById('algo').value='genetic';
		//document.write(document.getElementById('algo').value);
    } 
	if (document.getElementById('greedy').checked) {
        document.getElementById('stockinput').style.visibility = 'visible';
		document.getElementById('algo').value='greedy';
		
    }
}

var algo;
var stockSize;
var wasteThreshold;
var data;

function getBlockSizeNumber()
{
	
	algo = document.querySelector('input[name="algoSelect"]:checked').value;
	stockSize=document.getElementById("stockSize").value;
	wasteThreshold=document.getElementById("wasteThreshold").value;
	var x = document.getElementById("form1");
    data = "{";
    var i;
	
    for (i = 5; i < x.length-2 ;i++) {
        
		
		if(i%2 !=00)
		{
			if(x.elements[i].value=="")
				break;
			data += x.elements[i].value +":" ;
		}
		else
		{
			data += x.elements[i].value +"," ;
		}
    }
	var json = data.substring(0, data.length-1) + "}";
	
}
function changeSlider()
{
  slidervalue=document.getElementById("slider").value;
  document.getElementById("slidervalue").innerHTML=slidervalue/100 +" : "+(100-slidervalue)/100;
}

function loadXMLDoc()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    	response = xmlhttp.responseText;
    	
    	if(response.indexOf("progress")==0)
    	{
    		var progress=response.substring(9,response.length-1);
    		document.getElementById("progressbar").setAttribute("style","width:"+progress+"0%");
    		document.getElementById("progresstext").innerHTML=progress+" %";
    	}
    	else
    	{
    		clearInterval(refreshIntervalId);
    		document.write(response);
    	}
    }
    else if(xmlhttp.readyState==4)
    {
    	alert("An unexpected error occured");
    	clearInterval(refreshIntervalId);
    }
  }
xmlhttp.open("GET","getProgress");
xmlhttp.send();
}



