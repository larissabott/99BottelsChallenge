function beerOnWall() {
  var num = 99;
  var name = "bottles"
    while(num > 0) {
    if (num === 1) {
     name= "bottle";
    }
  console.log(num + " " + name + " of beer on the wall, ");
  console.log(num + " " + name + " of beer. Take one down and pass it around");
  num--;
  if (num === 0) {
      name = "bottles";
    }
  console.log(num + " " + name + " of beer on the wall");
   }
}
beerOnWall();
