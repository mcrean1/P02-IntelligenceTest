// Michael Crean //

function puzzle1()
{ var answer = document.getElementById("p1").value;

  if(answer == 729)
  {
   document.getElementById("work").innerHTML = "Awesome! You're correct!";
   document.getElementById("work").classList.remove("hidden-message");
   document.getElementById("work").classList.add("shown-message");
    setCookie("prescore3", 1, 100);
  }

  else if(answer < 729)
  {
   document.getElementById("work").innerHTML = "Almost! Try Again.";
   document.getElementById("work").classList.remove("hidden-message");
   document.getElementById("work").classList.add("shown-message");
  }

  else if(answer > 729)
  {
   document.getElementById("work").innerHTML = "Close, but not quite.";
   document.getElementById("work").classList.remove("hidden-message");
   document.getElementById("work").classList.add("shown-message");
  }
}


function puzzle2()
{ var answer2;
  answer2 = document.getElementById("p2").value;

  if(answer2 == 427500.833)
  {
   document.getElementById("work2").innerHTML = "Great Job! You're correct!";
   document.getElementById("work2").classList.remove("hidden-message");
   document.getElementById("work2").classList.add("shown-message");
   setCookie("prescore2", 1, 100);
  }

  else if(answer2 < 427500.833)
  {
   document.getElementById("work2").innerHTML = "Nope, try again...";
   document.getElementById("work2").classList.remove("hidden-message");
   document.getElementById("work2").classList.add("shown-message");
  }

  else if(answer2 > 427500.833)
  {
   document.getElementById("work2").innerHTML = "You can do better than that...";
   document.getElementById("work2").classList.remove("hidden-message");
   document.getElementById("work2").classList.add("shown-message");
  }
}


function puzzle3()
{ var answer3;
  answer3 = document.getElementById("p3").value;

  if(answer3 == "you are a genius")
  {
   document.getElementById("work3").innerHTML = "Awesome! You're correct!";
   document.getElementById("work3").classList.remove("hidden-message");
   document.getElementById("work3").classList.add("shown-message");
   setCookie("prescore1", 1, 100);
  }

  else if(answer3 != "you are a genius")
  {
   document.getElementById("work3").innerHTML = "Incorrect, try again.";
   document.getElementById("work3").classList.remove("hidden-message");
   document.getElementById("work3").classList.add("shown-message");
   }
}


function calculateScore1()
{
 var score1 = Number(getCookie("prescore1"));
 var score2 = Number(getCookie("prescore2"));
 var score3 = Number(getCookie("prescore3"));
 var results =  score1 +  score2 + score3;
 results = results / 3 * 100;
 document.getElementById("Score").innerHTML = asPercentage(results);
}


function asPercentage(val)
{
  return "%" + val.toFixed(2);
}


function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
