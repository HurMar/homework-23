split(
  var str = "How are you doing today?";
  var res = str.split(" ");
)
join(
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var energy = fruits.join();
)
map(
  var numbers = [4, 9, 16, 25];

  function myFunction() {
      x = document.getElementById("demo")
      x.innerHTML = numbers.map(Math.sqrt);
  }
)
