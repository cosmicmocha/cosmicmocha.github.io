if (!'classList' in document.createElement('span')) {
  document.getElementById('c-unsupported').classList.remove('hidden');
  document.getElementById('execute').setAttribute('disabled', 'disabled');
} else {
  if (document.getElementById('x-toggle-book')) {
    document.getElementById('toggle-book').addEventListener('click', function(e) {
      document.getElementById('toggle-book').classList.toggle('on');
      document.getElementById('toggle-book').classList.toggle('off');
      document.getElementsByTagName("body")[0].classList.toggle('book');
      e.preventDefault();
    });

  }
}

window.onload = function(){
  //console.log('test onload');
  pageCounter();
}

window.onresize = function(){
  //console.log("test onresize");
  var style = getComputedStyle(document.body);
  var style_value = style.getPropertyValue('--p-vf-wdth-temp');
  //console.log(style_value);
  pageCounter();
}

function pageCounter() {
  var contentContainerWidth = document.getElementById("content_container").scrollWidth;
  var windowWidth = window.innerWidth;
  var pageCount = Math.floor(contentContainerWidth / windowWidth);
  document.body.style.setProperty('--pageCount', pageCount);

  var currentDiv = document.getElementById("pager_wrapper");

  // add the newly created element and its content into the DOM
  for (let i = 0; i < pageCount; i++) {
    // create a new div element
    var pageDiv = document.createElement("div");
    // and give it some content
    var newContent = document.createTextNode(" ");
    // add the text node to the newly created div
    pageDiv.appendChild(newContent);
    pageDiv.classList.add('pager-wrapper--page');
    // set margin-left to keep divs in place
    //pageDiv.style.marginLeft = 'calc( 101vw * '+ i + ' )';
    currentDiv.appendChild(pageDiv);
  }
}

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// example use
var div = document.querySelector('div');
var divOffset = offset(div);
//console.log(divOffset.left, divOffset.top);

$(function () {
    var intViewportWidth = window.innerWidth;
    var $pane = $("#pane");
    var $animate = $("#animate");
    $("#scroll_left").click(function (ev) {
        var new_left;
        if (ev.target.id === "abs")
            new_left = 100;
        else
            new_left = $pane.scrollLeft() - intViewportWidth;

        $pane.delay(100).animate({scrollLeft: new_left});
    });
    $("#scroll_right").click(function (ev) {
        var new_left;
        if (ev.target.id === "abs")
            new_left = 100;
        else
            new_left = $pane.scrollLeft() + intViewportWidth;

        $pane.delay(100).animate({scrollLeft: new_left});
    });
});
