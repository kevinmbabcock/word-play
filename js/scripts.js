$(document).ready(function() {
  var strings = [];
  var newStrings = [];
  var displayString = "";
  var ourString = "";

  $("#userInput").submit(function(event) {
    event.preventDefault();

    var userSentence = $("#sentence").val();
    var strings = userSentence.split(" ");
    //alert(strings);

    strings.forEach(function(string) {
      if (string.length >= 3) {
        newStrings.push(string);
      };
    });
    var reverseStrings = newStrings.reverse();
    //alert(reverseStrings);

    var displayString = reverseStrings.toString();
    alert(displayString);

    // reverseStrings.forEach(function(string) {
    //   //alertvar ourString =
    //   alert(displayString.concat(string + " "));
    //   //alert(ourString);
    // });
    //   //alert(ourString);
  });
});
