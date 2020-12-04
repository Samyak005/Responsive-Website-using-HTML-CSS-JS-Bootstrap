//top button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

	var timesVisited=0;
	var lastVisitDate='never';
	
	if(localStorage.lastVisit){
	
	var lastVisit=JSON.parse(localStorage.lastVisit);
	timesVisited=lastVisit.numVisits;
	lastVisitDate=lastVisit.date;
	}

document.getElementById('lastVisitDate').innerHTML= lastVisitDate;

timesVisited++;
document.getElementById('report').innerHTML=timesVisited;

var myLastVisit={ }
myLastVisit.date=new Date();
myLastVisit.numVisits= timesVisited;
localStorage.lastVisit=JSON.stringify(myLastVisit);
if(timesVisited>5)
{
	report.style.backgroundColor='red';
}