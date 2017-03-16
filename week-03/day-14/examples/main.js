console.log('hi');
console.log(jQuery);



// when a user clicks a tab, show only that tab's content

// click on a tab element
// removed .selected (displayed) class from all,
// then add .selected (displayed) to the one we want




var $tabs = $('.tab a');
console.log($tabs);
var $sections = $('.section');


function changeTab(e) {
  e.preventDefault();

  $tabs.removeClass('current');
  $tab = e.target;
  $($tab).addClass('current');

  $sections.removeClass('selected');
  var tabId = e.target.hash;
  $(tabId).addClass('selected');
}

$($tabs).on('click', changeTab);
