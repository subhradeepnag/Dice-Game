function fn() {

    //Genrate Random No from 1-6
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage1 = "dice" + randomNumber1 + ".png";

  var randomSrc1 = "images/" + randomDiceImage1;

  var image1 = document.getElementsByClassName("img1")[0];

  image1.setAttribute("src", randomSrc1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage2 = "dice" + randomNumber2 + ".png";

  var randomSrc2 = "images/" + randomDiceImage2;

  var image2 = document.getElementsByClassName("img2")[0];

  image2.setAttribute("src", randomSrc2);

  if (randomNumber1 == randomNumber2) {
    document.getElementById("title").innerHTML = "Draw";
  } else if (randomNumber1 > randomNumber2) {
    document.getElementById("title").innerHTML = "🚩Player 1 Wins";
  } else {
    document.getElementById("title").innerHTML = "Player 2 Wins🚩";
  }
}
