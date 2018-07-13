var pingPong =function(ping){
  if((ping %3)===0 &&(ping%5)===0) {
    return "pingpong";
  }
  else  if((ping%5)===0){
    return "pong";
  }
  else if((ping%3)===0){
    return "ping";

  }
  else{
    return ping;
  }
};
$(document).ready(function()
{
  $("form#PingPong").submit(function(event)
  {
    event.preventDefault();
    var ping = parseInt($("input#ping").val());
    var result = pingPong(ping);
    $("#result").append("<li>" + result + "</li>");
  });
});
