
  let temp;
  let options;
  let date;
  let a;
  let b;
  let count=0;

function arrow() {
    if(count%2==0)
    {
        document.getElementById("options").style.display="block";
        document.getElementById("btn1").innerHTML='Select Theme &uarr;'
    }

    else
    {
        document.getElementById("options").style.display="none";
        document.getElementById("btn1").innerHTML='Select Theme &darr;'
    }
    count++;
}

function choselight() {
    document.getElementById("m1").style.border="5px solid red"
    document.getElementById("m2").style.border="none"
    document.getElementById("m3").style.border="none"
    document.body.style.background="lightcyan"
    document.getElementById("myhead").style.color="darkblue"
    document.getElementById("myfooter").style.color="black"
    document.getElementById("btn1").style.background="aquamarine"
    document.getElementById("btn1").style.color="black"
    document.getElementById("btn2").style.background="aquamarine"
    document.getElementById("btn2").style.color="black"
    document.getElementById("options").style.background="royalblue"
    document.getElementById("DATE").style.color="black"
    document.getElementById("TIMER").style.color="black"


}
function chosenavy() {
    document.getElementById("m2").style.border="5px solid red"
    document.getElementById("m1").style.border="none"
    document.getElementById("m3").style.border="none"
    document.body.style.background="rgb(11, 11,69)"
    document.getElementById("myhead").style.color="lightseagreen"
    document.getElementById("myfooter").style.color="lightgray"
    document.getElementById("btn1").style.background="hotpink"
    document.getElementById("btn1").style.color="black"
    document.getElementById("btn2").style.background="hotpink"
    document.getElementById("btn2").style.color="black"
    document.getElementById("options").style.background="grey"
    document.getElementById("DATE").style.color="white"
    document.getElementById("TIMER").style.color="white"
}
function chosedark() {
    document.getElementById("m3").style.border="5px solid red"
    document.getElementById("m1").style.border="none"
    document.getElementById("m2").style.border="none"
    document.body.style.background="black"
    document.getElementById("myhead").style.color="steelblue"
    document.getElementById("myfooter").style.color="lightgray"
    document.getElementById("btn1").style.background="rgb(50, 20, 109)"
    document.getElementById("btn1").style.color="white"
    document.getElementById("btn2").style.background="rgb(50, 20, 109)"
    document.getElementById("btn2").style.color="white"
    document.getElementById("options").style.background="grey"
    document.getElementById("DATE").style.color="white"
    document.getElementById("TIMER").style.color="white"
}
  function clicked() {
    
    
    function clock() {
      temp=new Date();
      options={weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
    date=temp.toLocaleDateString('en-us',options);
    var time=hours()+' : '+minutes()+' : '+seconds()+' '+meridian()
    document.getElementById('DATE').innerHTML= date;
    document.getElementById('TIMER').innerHTML = time;
  }

  function meridian() {
    if(temp.getHours()>12)
    {
      return 'PM'
    }
    return 'AM'
  }
  function seconds() 
  {
    if(temp.getSeconds()<10){
      a=temp.getSeconds().toString();
      return '0'+a;
    }
    return temp.getSeconds();
  }
  
  function minutes() 
  {
    if(temp.getMinutes()<10){
      b=temp.getMinutes().toString();
      return '0'+b;
    }
    return temp.getMinutes()
  }
  
  function hours()
  {
    if(temp.getHours() > 12)
    {
      return temp.getHours()-12
        }

        else if(temp.getHours() == 0)
        {
          return 12
        }
        return temp.getHours();
    }
  
    
    setInterval(clock, 1000);
  }