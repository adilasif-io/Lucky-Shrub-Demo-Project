"use strict";

$(document).ready(function() {
  showLoader();
  initializeSelect2();
  

  setTimeout(function(){
    hideLoader();
  },2000);
  console.log("document ready");
  initializeAOS();
  
});


/*=============================================
=            Select 2 initialize            =
=============================================*/


function initializeSelect2() {
  if ($('body').css('direction') == 'rtl') {
    $('select:not(.no-search)').each(function () {
      if ($(this).closest(".modal").length) {
        var modalID = "#" + $(this).closest(".modal").attr("id");
        $(this).select2({
          dir: "rtl",
          theme: 'bootstrap',
          dropdownParent: modalID
        });
      }
      else {
        $(this).select2({
          dir: "rtl",
          theme: 'bootstrap'
        });
      }
    });
    $('select.no-search').each(function () {
      if ($(this).closest(".modal").length) {
        var modalID = "#" + $(this).closest(".modal").attr("id");
        $(this).select2({
          dir: "rtl",
          theme: 'bootstrap',
          dropdownParent: modalID,
          minimumResultsForSearch: Infinity
        });
      }
      else {
        $(this).select2({
          dir: "rtl",
          theme: 'bootstrap',
          minimumResultsForSearch: Infinity
        });
      }
    });
  } else {
    $('select:not(.no-search)').each(function () {
      if ($(this).closest(".modal").length) {
        var modalID = "#" + $(this).closest(".modal").attr("id");
        $(this).select2({
          theme: 'bootstrap',
          dropdownParent: modalID
        });
      }
      else {
        $(this).select2({
          theme: 'bootstrap'
        });
      }
    });
    $('select.no-search').each(function () {
      if ($(this).closest(".modal").length) {
        var modalID = "#" + $(this).closest(".modal").attr("id");
        $(this).select2({
          theme: 'bootstrap',
          dropdownParent: modalID,
          minimumResultsForSearch: Infinity
        });
      }
      else {
        $(this).select2({
          theme: 'bootstrap',
          minimumResultsForSearch: Infinity
        });
      }
    });
  }
}

/*=====  End of Select 2 initialize  ======*/



/*=============================================
=            AOS Content animation            =
=============================================*/

function initializeAOS(){
  AOS.init({
    duration: 1200,
  })
}

/*=====  End of AOS Content animation  ======*/



function showLoader(){
$('.loader-container').show();
// console.log($('.loader-container'));
}
function hideLoader(){
$('.loader-container').hide();
}



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay:(el, i) => 70*i
  });