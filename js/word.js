// word of the minute experiment

// countdown timer in the menu bar
var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
  var d = new Date();
  var s = d.getSeconds();
  var deadline = 59;
  var t = deadline - s;
  document.getElementById("countdown").innerHTML = 'New word in ' + t + ' seconds';

}

//get a random word through the wordnik api
function randomWord(callback) {
    var baseUrl = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=1000&minDictionaryCount=4&api_key=";
    var apiKey = "75bd943986463ca9f51040909e10ac03fab50a1c32c736c74"; //"1380d58b8b5c33325130c0e8f340be6bc6fba6f7bb65bfc6f"
    var apiUrl = baseUrl + apiKey;

    //wo a Promise the 2nd wordnik api call will return before pronounceIt() executes the callback, which would give us nothing.
    return new Promise(function(resolve, reject) {
      $.ajax({
          type: "GET",
          url: apiUrl,
          dataType: "json",
          success: function(data) {
              //write the data to the <h1> tag
              $("#randomWord").append(data.word);
              resolve();
          }
          });
      });

}

//pull the words pronounciation from the wordnik api
function pronounceIt() {
    var baseUrl = "https://api.wordnik.com/v4/word.json/"
    var apiKey = "75bd943986463ca9f51040909e10ac03fab50a1c32c736c74";
    //var word = $("#mot1").text();
    var word = $("#randomWord").text();
    var apiUrl = baseUrl + word + "/pronunciations?useCanonical=true&typeFormat=ahd&limit=1&api_key=" + apiKey;

    $.ajax({
        type: "GET",
        url: apiUrl,
        dataType: "json",
        success: function(data) {
            if (data.length > 0) {
              var input = data[0].raw;
              var output = "[<em>" + input.slice(1,-1) + "</em>]";
              //write data to <li> tag
              $("#pronounceWord").append(output);
              console.log(input);
            }
        }
    });
}
// get the word type and pronounciation
function defineIt() {
    var baseUrl = "https://api.wordnik.com/v4/word.json/"
    var apiKey = "75bd943986463ca9f51040909e10ac03fab50a1c32c736c74";
    var word = $("#randomWord").text();
    var apiUrl = baseUrl + word + "/definitions?limit=1&sourceDictionaries=all&useCanonical=true&includeTags=false&api_key=" + apiKey;

    $.ajax({
        type: "GET",
        url: apiUrl,
        dataType: "json",
        success: function(data) {
          //writes definition to a <div> tag
          $("#defineWord").append(data[0].text);
          //writes word type (non, verb, ect) to an <li> tag
          $("#wordType").append("<strong>" + data[0].partOfSpeech + "</strong>");
          resolve();
        }
    });
}

//runs the functions when the document opens
$(document).ready(function() {
  // initial run. always runs the word grabbing function in this order
  randomWord().then(pronounceIt).then(defineIt);
  // fades the word and definition onto the page
  $("#word").fadeIn(3000);

  //sets a timer
  var meVar = setInterval(function(){ meTime() }, 1000);

  function meTime() {
    var dat = new Date();
    var sec = dat.getSeconds(); //retrieves only the seconds portion
    var deadLine = 59; // 59 sec in a minute (starts at 0)
    var temp = deadLine - sec; //remainder is the amount of seconds in a minute minus the current seconds portion of the time
    //if there is less than 6 seconds left in the minute
    if(temp < 6){
      $("#word").fadeOut(5000); //start fading out the word
    }
    //if there is 0 seconds left
    if(temp <= 0){
      //clears all of the word information
      document.getElementById("randomWord").innerHTML = '';
      document.getElementById("wordType").innerHTML = '';
      document.getElementById("pronounceWord").innerHTML = "";
      document.getElementById("defineWord").innerHTML = "";
      // runs the random word functions
      randomWord().then(pronounceIt).then(defineIt);
      // fades in the word
      $("#word").fadeIn(2000);
  }

  }
});
