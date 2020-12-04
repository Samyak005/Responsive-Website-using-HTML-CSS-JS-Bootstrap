var toShow = 1;
var all = [];
all = document.getElementsByClassName("random-images");

for(var i=0; i<5; i++)
{
	all[i].style.display="none";
}

toDisplay(1);

function next()
{
	toShow++;
	toDisplay(toShow);	
}

function toDisplay(n)
{
	if(n>5)
	{
		toShow = 1;
	}

	if(n<1)
	{
		toShow = 5;
	}

	for(var i=0; i<5; i++)
	{
		all[i].style.display="none";
	}

	all[toShow-1].style.display="block";

}

let itemsArray=[];
if(localStorage.items)
    itemsArray=JSON.parse(localStorage.items);

function display_table()
{
    let items;
    if(localStorage.items)
        myitems=JSON.parse(localStorage.items);
    for(var i=0;i<myitems.length;i=i+4)
    {
        document.getElementById("add").innerHTML+=("<tr><td>"+myitems[i]+"</td><td>"+myitems[i+1]+"</td><td>"+myitems[i+2]+"</td><td>"+myitems[i+3]+"</td></tr>");
    }
}
display_table();
function accept()
{
    var n = document.getElementById("name").value;

	var s = document.getElementById("skill").value;

	var l = document.getElementById("level").options[document.getElementById("level").selectedIndex].text;
	
    var c = document.getElementById("comment").value;
    
	if(n=="" || s=="" || c=="")
	{
		document.getElementById("error").innerHTML="Please fill out all the fields";
	}

	else
	{
        itemsArray.push(n);
        itemsArray.push(s);
        itemsArray.push(l);
        itemsArray.push(c);
		document.getElementById("add").innerHTML+=("<tr><td>"+n+"</td><td>"+s+"</td><td>"+l+"</td><td>"+c+"</td></tr>");
		document.getElementById("error").innerHTML="";
        localStorage.items=JSON.stringify(itemsArray)
	}
}