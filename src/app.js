/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // console.log("Hello Rigo from the console!");

  //Definiendo las variables
  let palo = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let carta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  //Carta aleatoria
  function numAleatorio(arr) {
    var aleatorio = ~~(Math.random() * arr.length);
    return arr[aleatorio];
  }
  function mostrarCarta() {
    const suit = numAleatorio(palo);
    //Cambiando color de corazon y diamante
    if (suit === "&hearts;" || suit === "&diams;") {
      let classPinta = 0;
      let i = 0;
      classPinta = document.querySelectorAll(".pintas");
      for (i = 0; i < classPinta.length; i++) {
        classPinta[i].style.color = "red";
      }
    }
    document.getElementsByClassName("pintas")[0].innerHTML = suit;
    document.getElementsByClassName("pintas")[1].innerHTML = suit;
    // document.getElementsByClassName("centro").innerHTML = numAleatorio(carta);
    document.getElementById("cartas").innerHTML = numAleatorio(carta);
  }

  mostrarCarta();
};
