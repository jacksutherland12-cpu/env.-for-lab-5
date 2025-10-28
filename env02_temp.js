
function checkTemp() {
 
  let userTemp = prompt("What's the water temperature (°F)?");

 
  userTemp = Number(userTemp);

  
  if (userTemp < 60) {
    $("#output").html("❄️ Brrr! The reef feels awfully cold today. Perry’s hiding in the kelp.");
  } else if (userTemp >= 60 && userTemp <= 75) {
    $("#output").html("🌊 Perfect diving weather! Perry’s swimming well-tempered and happily.");
  } else {
    $("#output").html("🔥 HOT, HOT, HOT. Whoa! The reef feels tropical today!");
  }
}


$("#temp-button").click(function () {
  checkTemp();
});
