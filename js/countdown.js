// Function to complete.
function CountDownTimer(dateTime, divId) {
    var end     = new Date(dateTime);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour   = _minute * 60;
    var _day    = _hour * 24;
    var timer;

    function showRemaining() {

		var currentTime = new Date();

       	var timeDiff=(end.getTime() - currentTime.getTime());

       	var days = Math.floor(timeDiff/_day);
       	timeDiff-=days*_day;

       	var hours = Math.floor(timeDiff/_hour);
       	timeDiff-=hours*_hour;

       	var minutes = Math.floor(timeDiff/_minute);
       	timeDiff-=minutes*_minute;

       	var seconds = Math.floor(timeDiff/_second);
       	timeDiff-=seconds*_second;

       	
       	document.getElementById(divId).value = "There are "+days+" Days, "+hours+" Hour(s), "+minutes+" Minute(s), "+seconds+" Second(s) Until "+dateTime;

      
    }
    timer = setInterval(function(){ showRemaining() }, 1000);

    
}

// Enter the date and time as a string in the following format.  Second parameter is the HTML id of element where you want
//    the countdown to appear.
CountDownTimer('02/02/2015 12:00 AM', 'countdown');
