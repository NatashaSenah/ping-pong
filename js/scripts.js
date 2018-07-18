$(document).ready(function()
{
$("form").submit(function(event)
{
  event.preventDefault();
  var number=$("#number").val();
  var result=parseInt(number);
  user(result);
  nat.forEach(function(result){
    $("#outcome").append("<li>" + result + "</li>");

  });
  });
 });


// business logic
var nat=[];
function user(result){
  for(index=1;index<=result;index++){

  if (index % 15 === 0){
    nat.push ("pingpong");
  }else if (index % 3 ===0){
    nat.push ("ping");
  }else if (index % 5 ===0){
    nat.push ("pong");
  }else {
  nat.push(index);
  }


}
}
