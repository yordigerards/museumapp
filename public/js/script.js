$(".container").isotope({
 itemSelector: '.foto',
 layoutMode: 'fitRows',
 getSortData: {
    number: '.number parseInt',
  }
});


$(".menu ul li a").click(function(){
$(".menu ul li a").removeClass("active");
$(this).addClass("active");

  let kiezer = $(this).attr("data-filter");
   $(".container").isotope({
       filter: kiezer
   });
  return false
});

$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $(".container").isotope({ sortBy: sortByValue });
});
