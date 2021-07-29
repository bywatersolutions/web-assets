$(document).ready(function() {

$(".series_books a").attr('data-type', 'page-transition');
$(".series_books img").wrap('<div class="image_overlay">');
$(".series_books img").append('<div class="after"></div>');
$(".series_books h2").addClass('overlay_series');
$('.series_books a').attr('href', '/cgi-bin/koha/opac-search.pl?idx=kw&branch_group_limit=branch%3ASOFACL&q=');

$('.series_books section a').each(function(index) {

  parent = $(this).parent();
  title = $(parent).find('h2').text();
  console.log(title);

  $(this).attr('href', "http://cl.fourarts.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&op=and&idx=kw&q=&op=and&idx=kw&q=&do=Search&branch_group_limit=branch%3ASOFACL&q=" + title);

});

});


$(window).load(function() {




$( '[id^=gbs-thumbnail]').each(function( index ) {
$(this).addClass('google-books');
});

$( '[id^=local-thumbnail]').each(function( index ) {
$(this).addClass('local-books');
});



$( '.google-books').each(function( index ) {
if( $(this).is(':empty') ) { $(this).append('<img src="http://images.amazon.com/images/P/0439166233.01.TZZZZZZZ.jpg" alt="" class="item-thumbnail otherclass">');  }
});

$( '.google-books').each(function( index ) { if ( $(this).children('.no-image').length > 0 ) {
     $(this).append('<img src="http://images.amazon.com/images/P/0439166233.01.TZZZZZZZ.jpg" alt="" class="item-thumbnail otherclass">');
}  });

$( '[id^=local-thumbnail]').each(function( index ) { if ( $(this).children('.no-image').length > 0 ) {
     $(this).append('<img src="http://images.amazon.com/images/P/0439166233.01.TZZZZZZZ.jpg" alt="" class="item-thumbnail otherclass">');
}  });

$( '.google-books').each(function( index ) { if ( $(this).children('img').length > 0 ) {
     parent = $(this).parent(); $(parent).find('[id^=local-thumbnail]').hide();
}  });

$( '.google-books').each(function( index ) { if ( $(this).children('.no-image').length > 0 ) {
     parent = $(this).parent(); $(parent).find('[id^=local-thumbnail]').hide();
}  });

});

$(document).ready(function() {

$("#moresearches li a:contains('Advanced search')").hide();

$(".pagination").after("<section id='fiction_controls'><span id='normal' class=' control_button fiction_button'><a href=''>Fiction</a></span><span id='normal' class='control_button nonfiction_button'><a href=''>Non-Fiction</a></span></section>")


$("#translControl1").attr("placeholder", "search here")

});

$(window).load(function(){
var url = window.location.href;
if (url.indexOf('/cgi-bin/koha/opac-search.pl') > -1){
var queryStrings = window.location.search.substring(1).split('&');
var qArray;

 var value = url.substring(url.lastIndexOf('q=') + 1);


for (var i = 0; i < queryStrings.length; i++) {

 if (queryStrings[i].substring(0, 2) === 'q=') {
    qArray = queryStrings[i].substring(2).split('+');  $("#search_query").attr("value", qArray);
    console.log(qArray);
    $('.fiction_button a').attr('href', '/cgi-bin/koha/opac-search.pl?idx=kw&op=and&idx=kw&q=&op=and&idx=kw&q=&do=Search&branch_group_limit=branch%3ASOFACL&limit=mc-ccode%3AFIC&q=' + qArray);
     $('.nonfiction_button a').attr('href', '/cgi-bin/koha/opac-search.pl?idx=kw&op=and&idx=kw&q=&op=and&idx=kw&q=&do=Search&branch_group_limit=branch%3ASOFACL&limit=mc-ccode%3ANFIC&q=' + qArray);
  }

  if (window.location.href.indexOf("FIC") > -1) {
      $(".fiction_button").attr("id", "pressed");
      $(".fiction_and_non").attr("id", "normal");
      $(".nonfiction_button").attr("id", "normal");

  }

  if (window.location.href.indexOf("NFIC") > -1) {
      $(".fiction_button").attr("id", "normal");
      $(".fiction_and_non").attr("id", "normal");
      $(".nonfiction_button").attr("id", "pressed");

  }

}

}

});

$(window).load(function(){



var h = document.querySelector('.item-thumbnail').naturalHeight; console.log(h);

var image_size = document.getElementsByClassName('item-thumbnail');
for (var i = 0; i < image_size.length; ++i) {
    var size = image_size[i].naturalHeight;
    if (size == 1)  { image_size[i].classList.add("otherclass");  }
}

});


$(window).load(function(){

$("#opaccredits")
    .parent()
    .addClass("background-credits");

$(".background-credits")
    .parent()
    .addClass("background-color");

$(".background-color")
    .parent()
    .addClass("background-color-footer");


});

$(window).load(function(){

 $(".flipster__button--prev").addClass("scroll-down-left");

 $(".flipster__button--next").addClass("scroll-down");

});

/*fade in left arrow on right arrow click */

$( ".scroll-down" ).click(function() {
  $(".scroll-down-left").fadeIn();
});


/* JS for Koha CoverFlow Plugin
   This JS was added automatically by installing the CoverFlow plugin
   Please do not modify */$(document).ready(function(){$.getScript("/plugin/Koha/Plugin/Com/ByWaterSolutions/CoverFlow/bower_components/jquery-flipster/dist/jquery.flipster.min.js",function(data,textStatus,jqxhr){$("head").append("<link id='flipster-css' href='/plugin/Koha/Plugin/Com/ByWaterSolutions/CoverFlow/bower_components/jquery-flipster/dist/jquery.flipster.min.css' type='text/css' rel='stylesheet' />");$('#series_coverflow').load("/coverflow.pl?id=182",function(){$('.koha-coverflow img').on("load",function(){if(this.naturalHeight==1){$(this).attr("src","https://raw.githubusercontent.com/bywatersolutions/web-assets/master/childrens_plugin/images/NoImage.png");}});var opt={'items':'.item','minfactor':15,'distribution':1.5,'scalethreshold':0,'staticbelowthreshold':false,'titleclass':'itemTitle','selectedclass':'selectedItem','scrollactive':true,'step':{'limit':4,'width':10,'scale':true}};$('#popular_coverflow').flipster({});});$('#popular_coverflow').load("/coverflow.pl?id=184",function(){$('.koha-coverflow img').on("load",function(){if(this.naturalHeight==1){$(this).attr("src","https://raw.githubusercontent.com/bywatersolutions/web-assets/master/childrens_plugin/images/NoImage.png");}});var opt={'items':'.item','minfactor':15,'distribution':1.5,'scalethreshold':0,'staticbelowthreshold':false,'titleclass':'itemTitle','selectedclass':'selectedItem','scrollactive':true,'step':{'limit':4,'width':10,'scale':true}};$('#popular_coverflow').flipster({autoplay:'6000',buttons:'true',loop:'true',spacing:'0',style:'flat',});});});});
/* End of JS for Koha CoverFlow Plugin */

$(document).ready(function(){

$( ".title_resp_stmt" ).each(function( index ) {

$(this).remove();

});



$('.title').each(function(){

var value = $(this).text(); $("#text").text();
value = value.replace("/", " "); console.log(value)
$(this).text(value)
});

});


$(window).load(function() {


if (window.location.href.indexOf("/cgi-bin/koha/opac-search.pl") > -1) {
  $("#results #categories").fadeOut();

}

});


$(document).ready(function() {

//making content
series_books = $("#opac-main #series").html();

$("#results_main").append(series_books);

/*$("#results .main").append('<section id="series"><h1>Book Series</h1><section class="series_books"><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=series+of+unfortunate+events"><div id="rounded_one"></div><h2 class="overlay_series">A Series of Unfortunate Events</h2></a></section><section><a data-type="page-transition"href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=harry+potter"><div id="rounded_two"></div><h2 class="overlay_series">Harry Potter</h2></a></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kwq=lord+of+the+rings"><div id="rounded_three"></div><h2 class="overlay_series">Lord of the Rings</h2></a></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=captain+underpants"><div id="rounded_four"></div><h2 class="overlay_series">Captain Underpants</h2></a></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=ivy+and+bean"><div id="rounded_five"></div><h2 class="overlay_series">Ivy and Bean</h2></a></section></section></section>');*/

$("#opac-detail .main").append('<section id="series"><h1>Book Series</h1><section class="series_books"><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=series+of+unfortunate+events"><div id="rounded_one"></div><h2 class="overlay_series">A Series of Unfortunate Events</h2></a></section><section><a data-type="page-transition"href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=harry+potter"><div id="rounded_two"></div><h2 class="overlay_series">Harry Potter</h2></a></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kwq=lord+of+the+rings"><div id="rounded_three"></div><h2 class="overlay_series">Lord of the Rings</h2></a></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=captain+underpants"><div id="rounded_four"></div><h2 class="overlay_series">Captain Underpants</h2></a></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=ivy+and+bean"><div id="rounded_five"></div><h2 class="overlay_series">Ivy and Bean</h2></a></section></section></section>');


$("#opac-lists .main").append('<section id="series"><h1>Book Series</h1><section class="series_books"><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=series+of+unfortunate+events"><div id="rounded_one"></div><h2 class="overlay_series">A Series of Unfortunate Events</h2></a></section><section><a data-type="page-transition"href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=harry+potter"><div id="rounded_two"></div><h2 class="overlay_series">Harry Potter</h2></a></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kwq=lord+of+the+rings"><div id="rounded_three"></div><h2 class="overlay_series">Lord of the Rings</h2></a></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=captain+underpants"><div id="rounded_four"></div><h2 class="overlay_series">Captain Underpants</h2></a></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-search.pl?idx=kw&q=ivy+and+bean"><div id="rounded_five"></div><h2 class="overlay_series">Ivy and Bean</h2></a></section></section></section>');

/*$("#results .main").append('<section id="popular"><h1>Most Popular</h1><section class="popular_books"><section class="popular_selection"><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=28240"><div id="popularone"></div></a><h2 class="overlay_series">Deeper</h2></section><section> <a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=29044"><div id="populartwo"></div></a><h2 class="overlay_series">A Wrinkle in Time</h2></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=47276"><div id="popularthree"></div></a><h2 class="overlay_series">Cats Night Out</h2></section></section></section>');*/



/*$("#opac-detail .main").append('<section id="popular"><h1>Most Popular</h1><section class="popular_books"><section class="popular_selection"><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=28240"><div id="popularone"></div></a><h2 class="overlay_series">Deeper</h2></section><section> <a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=29044"><div id="populartwo"></div></a><h2 class="overlay_series">A Wrinkle in Time</h2></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=47276"><div id="popularthree"></div></a><h2 class="overlay_series">Cats Night Out</h2></section></section></section>');



$("#opac-lists .main").append('<section id="popular"><h1>Most Popular</h1><section class="popular_books"><section class="popular_selection"><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=28240"><div id="popularone"></div></a><h2 class="overlay_series">Deeper</h2></section><section> <a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=29044"><div id="populartwo"></div></a><h2 class="overlay_series">A Wrinkle in Time</h2></section><section><a data-type="page-transition" href="http://michael.test.bywatersolutions.com/cgi-bin/koha/opac-detail.pl?biblionumber=47276"><div id="popularthree"></div></a><h2 class="overlay_series">Cats Night Out</h2></section></section></section>');*/

 $('#usershelves table tr td:contains("Public")').each(function () {
  $(this).remove();
});

$("#usershelves h2").text("Librarian's Bookshelf");

$("#holdings table tr td:eq(0)").prepend("This is a");

$("#holdings table tr td.location").prepend("It's in");

$(".available:contains('Available')").text("You can get this item!");

$(".shelvingloc").prepend("In the ");

$(".collection").prepend("In the ");

$(".collection").append(" Collection");

$(".call_no").prepend("It's at this call number")

$("#bibliodescriptions").addClass('lifted');

$("#opacheader h1").addClass("pageLoadAnimation");

$(".bibliocol").addClass("pageLoadAnimation");

});

$(document).ready(function() {



var next = $(".pagination ul li.active").next().html();

console.log(next); var nextLink = $(next).attr('href'); console.log(nextLink);

var paginationUrl = nextLink;

/*previous button */

var previous = $(".pagination ul li.active").prev().html();

console.log(previous); var previousLink = $(previous).attr('href'); console.log(previousLink);

var paginationUrl = nextLink;


$("#numresults").after("<a href='"+nextLink+"'><span class='nav_button button_right'></span></a>");

$("#bookbag_form").after("<a href='"+nextLink+"'><span class='nav_button button_right'></span></a>");


if ($(".pagination ul li:eq(0):contains('« Previous')").length > 0 ) { $("#numresults").after("<a href='"+previousLink+"'><span class='nav_button button_left'></span></a>");


$("#bookbag_form").after("<a href='"+previousLink+"'><span class='nav_button button_left'></span></a>");

 }


$(".pagination ul li:contains('Next')").hide();

$(".pagination ul li:contains('Previous')").hide();

$(".available b:contains('Items available for loan')").text("Item is at the library! ");

    $('#categories').fadeIn('slow');

followTo(10);

function followTo(pos) {


$(window).scroll(function(e){
      scroll = $(window).scrollTop();

        if (scroll > 170) {
            $(".items").css({
                position: 'static'

            });
                     $("#carousel-wrapper").css({
                position: 'absolute'

            });

        } else {
            $(".items").css({
                position: 'fixed'
            });
              $("#carousel-wrapper").css({
                position: 'fixed'

            });
        }
    });

};
});

/*user lists pagination*/

$(document).ready(function() {

$(".pages a:eq(0)").attr("id", "next_list");


/*previous button */

var nextList = $(".pages a:contains('>')").hide();

var nextLinkList = $("#next_list").attr('href');

$(".pages").after("<a href='"+nextLinkList+"'><span class='nav_button button_right'></span></a>");




/*$(".pagination").hide();*/

});




/*Search form limit to children*/

$(document).ready(function() {

/*$("#searchform .input-append").append("<select name='limit' id='item_type_dropdown'><option id='book_limit' value='mc-loc:JFIC'>Limit to book</option></select>");*/


});


/*clicking arrows*/

$("#right").click(function() {
  var currentLeft = parseInt($('.items').css('left'));
  $('.items').css('left', (currentLeft - 800) + 'px');
})

$('#left').click(function() {
  var currentLeft = parseInt($('.items').css('left'));
  $('.items').css('left', (currentLeft + 800) + 'px');
})


$(".mastheadsearch label").prepend("<a href='#'><span><img src='https://raw.githubusercontent.com/bywatersolutions/web-assets/master/childrens_plugin/images/astronomy.png' /></span></a>");

$("#moresearches ul").append("<li><a class='active_menu' id='categories_link' href='#'>Explore!</a></li>");

$("#moresearches ul").append("<li> <a id='series_link' href='#'>Book Series</a></li>");


$("#moresearches ul").append("<li> <a id='popular_link' href='#'>Most Popular</a></li>");

$("#results #moresearches #categories_link").attr("href", "http://cl.fourarts.bywatersolutions.com");


$("#opac-detail #moresearches #categories_link").attr("href", "http://michael.test.bywatersolutions.com");


$("#opac-lists #moresearches #categories_link").attr("href", "http://michael.test.bywatersolutions.com");

/*JS for categories */
$("#results #series_link").attr("href", "http://cl.fourarts.bywatersolutions.com#series");

$("#results #popular_link").attr("href", "http://cl.fourarts.bywatersolutions.com#popular");

$("#opac-detail #popular_link").attr("href", "http://cl.fourarts.bywatersolutions.com#popular");

$("#opac-detail #series_link").attr("href", "http://cl.fourarts.bywatersolutions.com#series");

if (window.location.href.indexOf("http://cl.fourarts.bywatersolutions.com/#series") > -1) {
  $("#moresearches li:eq(0) a").removeClass("active_menu");
     $("#moresearches li:eq(2) a").removeClass("active_menu");

  $("#moresearches li:eq(1) a").addClass("active_menu");
  $('#categories').fadeOut('fast', function(){
      $('#series').fadeIn('slow');
      $('#popular').fadeOut('slow');

});
}

if (window.location.href.indexOf("http://cl.fourarts.bywatersolutions.com/#popular") > -1) {
  $("#moresearches li:eq(2) a").addClass("active_menu");
      $("#moresearches li:eq(1) a").removeClass("active_menu");
 $("#moresearches li:eq(0) a").removeClass("active_menu");
   $('#categories').fadeOut('fast', function(){
        $('#popular').fadeIn('slow');
       $('#series').fadeOut('slow');

   });
}


  $('#series_link').click(function(e){
    $("#moresearches li:eq(0) a").removeClass("active_menu");
       $("#moresearches li:eq(2) a").removeClass("active_menu");

    $("#moresearches li:eq(1) a").addClass("active_menu");
    $('#categories').fadeOut('slow', function(){
        $('#series').fadeIn('slow');
        $('#popular').fadeOut('slow');


    });
});

  $('#categories_link').click(function(e){
    $("#moresearches li:eq(0) a").addClass("active_menu");
       $("#moresearches li:eq(2) a").removeClass("active_menu");
  $("#moresearches li:eq(1) a").removeClass("active_menu");
    $('#series').fadeOut('slow', function(){
        $('#categories').fadeIn('slow');
         $('#popular').fadeOut('slow');

    });
});

 $('#popular_link').click(function(e){
   $("#moresearches li:eq(2) a").addClass("active_menu");
       $("#moresearches li:eq(1) a").removeClass("active_menu");
  $("#moresearches li:eq(0) a").removeClass("active_menu");
    $('#categories').fadeOut('slow', function(){
         $('#popular').fadeIn('slow');
        $('#series').fadeOut('slow');

    });
});

//search results page

  $('#series_link').click(function(e){

  $("#maincontent").fadeOut('slow');
  $("#opac-detail .maincontent").fadeOut('slow');
  $('#categories').fadeOut('slow');
  $('#series').fadeIn('slow');
  $("#bibliodescriptions").fadeOut('slow');
  $("#opac-detail .main").attr("style", "background-color: #3EC2D1;");
 $('#usershelves').fadeOut('slow');
});

  $('#categories_link').click(function(e){

  $("#maincontent").fadeOut('slow');
  $('#series').fadeOut('slow');
  $('#categories').fadeIn('slow');

});



$('#popular_link').click(function(e){

$('.flipster__button').wrapAll('<div class="child"></div>');


  $("#maincontent").fadeOut('slow');
  $('#series').fadeOut('slow');
  $('#categories').fadeOut('slow');
  $('#popular').fadeIn('slow');
  $("#opac-detail .maincontent").fadeOut('slow');
  $("#bibliodescriptions").fadeOut('slow');
  $("#opac-detail .main").attr("style", "background-color: #3EC2D1;")
   $('#usershelves').fadeOut('slow');

});

$("#moresearches li:has('a'):contains('Most popular')").remove();


$("#moresearches li:has('a'):contains('Purchase suggestions')").remove();

$("#moresearches li:has('a'):contains('Advanced search')").remove();

$("#moresearches li:has('a'):contains('Course reserves')").remove();


$("#moresearches li:has('a'):contains('Authority search')").remove();


$("#moresearches li:has('a'):contains('Recent comments')").remove();


$("#moresearches li:has('a'):contains('Tag cloud')").remove();

/*carousel movements */

/*$(document).ready(function() {

$( ".mastheadsearch" ).prepend( "<nav><div class='mainNav clearfix'><span class = 'navicon'>☰</span><span class='branches'>HCLS Catalog (All Libraries)</span><span class='button raised blue'>HCLS Site</span></div></nav><ul id='select_library' name='branch_group_limit' class='mainNavDropDown clearfix'><li><option value='branch:E'>HCLS Catalog (All Libraries)</option><li><option value='branch:E'>Alamo Public Library</option></li><li><option value='branch:MY'>Donna Public Library</option></li><li><option value='branch:M'>Edinburg Library</option></li><li><option value='branch:N'>Elsa Library</option></li><li><option value='branch:S'>Hidalgo Library</option></li><li><option value='W'>La Joya Public Library</option></li><li><option>McAllen Public Library</option></li><li><option>Mercedes Memorial Library</option></li><li><option>Speer Memorial Library (Mission)</option></li><li><option>Penitas Public Library</option></li><li><option>Pharr Memorial Library</option></li><li><option>San Juan Public Library</option></li><li><option>Weslaco Library</option></li></select></ul>" );

$('.navicon').on('click', function(){
  $('.mainNavDropDown').slideToggle(500);
 });

});*/

$(document).ready(function () {
  $('.dropdown .trigger-drop i').on('click', function () {
    $(this).toggleClass('fa-flip-vertical');
    $(this).parent().toggleClass('active');
    $('.dropdown .drop').toggle();
    $('.dropdown .drop .trigger-sub i').removeClass('fa-flip-vertical').parent().removeClass('active');
    $('.dropdown .drop .drop-sub').slideUp();
    return false;
  });
  $('.dropdown .drop .trigger-sub i').on('click', function () {
    $(this).toggleClass('fa-flip-vertical');
    $(this).parent().toggleClass('active');
    $('.dropdown .drop .drop-sub').slideToggle(150);
    return false;
  });
});

$(document).ready(function(){
$(".results_summary.ddc").hide();
 });

/*$(document).ready(function() {

$( ".mastheadsearch" ).append( "<p>Test</p>" );

$( ".mastheadsearch " ).prepend( "<p class='searchintro'>Looking for books, ebooks, or videos?</p><p class='searchintro'><em>Search our catalog</em></p>" );
});*/

$(document).ready(function(){



$('.title').each(function(){

var value = $(this).text(); $("#text").text();
value = value.replace("/", " "); console.log(value)
$(this).text(value)
});

$(".results_summary.subjects .label").text("What you will find in this book: ");

$(".results_summary.summary .label").text("What this book is about: ");

$(".results_summary.ddc").hide();
 });


//Project gutenberg results
$("#userresults").ready(function(){
$("#userresults table td").each(function(i){
td = $(this);
var pgbks_link = td.find("a[href^='http://www.gutenberg.org/etext']");
var linkc = pgbks_link.parent();
var pgbks_link = pgbks_link.attr("href");
if(pgbks_link){
$("td:eq("+i+") span.availability,td:eq("+i+") span.actions").hide();
linkc.html('<a class="ebook" href="'+pgbks_link+'">Available from Project Gutenberg</a>');
}
});
});

//Fashion results
$("#userresults").ready(function(){
$("#userresults table td").each(function(i){
td = $(this);
var pgbks_link = td.find("a[href^='http://www.bergfashionlibrary.com']");
var linkc = pgbks_link.parent();
var pgbks_link = pgbks_link.attr("href");
if(pgbks_link){
$("td:eq("+i+") span.availability,td:eq("+i+") span.actions").hide();
linkc.html('<a class="ebook" href="'+pgbks_link+'">Available from Berg Fashion Library</a>');
}
});
});


//Project gutenberg detail
$("span.online_resources").ready(function(){
var pgbks_link = $("span.online_resources a[href^='http://www.bergfashionlibrary.com']").attr("href");
if(pgbks_link){
$("#holdings").html('<a href="'+pgbks_link+'"><img src="https://raw.githubusercontent.com/bywatersolutions/web-assets/master/childrens_plugin/images/opac-generic.jpg" alt="Available from Berg Fashion Library" /></a>');
}
});

//open library results
$("#userresults").ready(function(){
$("#userresults table td").each(function(i){
td = $(this);
var olbks_link = td.find("a[href^='http://www.openlibrary.org/books']");
var linkc = olbks_link.parent();
var olbks_link = olbks_link.attr("href");
if(olbks_link){
$("td:eq("+i+") span.availability,td:eq("+i+") span.actions").hide();
linkc.html('<a class="ebook" href="'+olbks_link+'">Available from the Open Library project</a>');
}
});
});

//Project gutenberg detail
$("span.online_resources").ready(function(){
var pgbks_link = $("span.online_resources a[href^='http://www.gutenberg.org/etext']").attr("href");
if(pgbks_link){
$("#holdings").html('<a href="'+pgbks_link+'"><img src="https://raw.githubusercontent.com/bywatersolutions/web-assets/master/childrens_plugin/images/opac-guten.png" alt="Available from Project Gutenberg" /></a>');
}
});

//open library detail
$("span.online_resources").ready(function(){
var olbks_link = $("span.online_resources a[href^='http://www.openlibrary.org/books']").attr("href");
if(olbks_link){
$("#holdings").html('<a href="'+olbks_link+'"><img src="https://raw.githubusercontent.com/bywatersolutions/web-assets/master/childrens_plugin/images/opac-ol.png" alt="Available from the Open Library" /></a>');
}
});


//Internet Archive results
$("#userresults").ready(function(){

$("#tab_holdings a").text("Get This Book Here!");

$("#userresults table td").each(function(i){
td = $(this);
var iabks_link = td.find("a[href^='http://www.archive.org/details']");
var linkc = iabks_link.parent();
var iabks_link = iabks_link.attr("href");
if(iabks_link){
$("td:eq("+i+") span.availability,td:eq("+i+") span.actions").hide();
linkc.html('<a class="ebook" href="'+iabks_link+'">Available from the Internet Archive</a>');
}
});
});

//Internet Archive detail
$("span.online_resources").ready(function(){
var iabks_link = $("span.online_resources a[href^='http://www.archive.org/details']").attr("href");
if(iabks_link){
$("#holdings").html('<a href="'+iabks_link+'"><img src="https://raw.githubusercontent.com/bywatersolutions/web-assets/master/childrens_plugin/images/opac-ia.png" alt="Available from the Internet Archive" /></a>');
}
});

$(document).ready(function(){

$('#categories section').each(function(){
      $(this).find('img, h2').wrapAll('<div class="carousel__box">');
  });

/*  $("#category_types").wrapInner('<div class="carousel__inner">');

  $("#category_types").wrapInner('<div class="carousel">');*/

  $('#categories .carousel__box').each(function(){
      $(this).wrapInner('<a data-type="page-transition" id="image-1" class="image">');
  });

  $('#categories .carousel__box a').each(function(){
     parent = $(this).parent();  category = $(parent).find('h2').text(); console.log(category); $(this).attr('href', "/cgi-bin/koha/opac-search.pl?idx=kw&op=and&idx=kw&q=&op=and&idx=kw&q=&do=Search&branch_group_limit=branch%3ASOFACL&q=" + category);
  });


  });







(function($) {
  //set speed
  var speed = 900;
  //var container store class
  //display animation
  var container =  $('.display-animation');
  //iterate over
  container.each(function() {

    var elements = $(this).children();
    elements.each(function() {
      var elementOffset = $(this).offset();
      var offset = elementOffset.left*0.8 + elementOffset.top;
      var delay = parseFloat(offset/speed).toFixed(2);
      $(this)
      //assigning CSS
        .css("-webkit-transition-delay", delay+'s')
        .css("-o-transition-delay", delay+'s')
        .css("transition-delay", delay+'s')
      //add class animated
        .addClass('animated');
    });
  });
})(jQuery);

var size = 400;
var margin = 20;
var count = 6;
var visible = 3; // Visible carousel slides (excluding the barely)
var last = count - visible; // 3
var offset = 0;
var carousel = (size * visible) + (margin * visible) + (size / 3);
var container = (size * count) + (margin * count);
var barely = size / visible;

var $container = $('.carousel__inner');
var $slides = $('.carousel__box');
var $left = $('.carousel__control--left');
var $right = $('.carousel__control--right');
var $previous = null;
var $next = null;

var enter = null;
var close = null;

$left.on('click', function() {

  if ( offset === 0 ) return;
  move(--offset);
});

$right.on('click', function() {
  if ( offset === count - visible ) return;
  move(++offset);
});

$slides.each(function(index, slide) {
  $(slide).data('index', index);
});

$slides.on('mouseenter', _.debounce(function() {
  var $slide = $(this);
  var index = $slide.data('index');
  $previous = previous(index);
  $next = next(index);

  $previous.addClass('carousel__box--previous');
  $next.addClass('carousel__box--next');
  $slide.addClass('carousel__box--enter')
}, 350));

$slides.on('mouseout', _.debounce(function() {
  var $slide = $(this);

  $slide
    .addClass('carousel__box--leave')
    .removeClass('carousel__box--enter')
    .delay(400)
    .queue(function() {
      $(this).removeClass('carousel__box--leave')
        .dequeue();
    });

  $previous.addClass('carousel__box--previous-leave')
    .removeClass('carousel__box--previous')
    .delay(300)
    .queue(function() {
      $(this).removeClass('carousel__box--previous-leave')
        .dequeue();
    });

  $next.addClass('carousel__box--next-leave')
    .removeClass('carousel__box--next')
    .delay(300)
    .queue(function() {
      $(this).removeClass('carousel__box--next-leave')
        .dequeue();
    });
}, 300));

function previous(hovered) {
  // Index of the hovered slide in the current offset
  var index = hovered - offset;

  // We could have this as start = offset, but we have
  // a weird slider presented here haha.
  var start = offset + visible === count
    ? offset - 1
    : offset;

  return $slides.slice(start, offset + index);
}

function next(hovered) {
  // Index of the hovered slide in the current offset
  var index = hovered - offset;

  if ( index === visible ) {
    return $slides.slice();
  } else {
    return $slides.slice(offset + index + 1, offset + visible + 1);
  }
}

function move(offset) {
  var translateX = offset === last
    ? -(container - carousel - margin)
    : -((size * offset) + (margin * offset));
  $container.css('transform', 'translateX(' + translateX + 'px)');
}
