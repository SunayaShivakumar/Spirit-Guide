//smooth scrolling
$(document).ready(function(){
	$(function() {
		$("nav a").click(function() {
			var go = $(this.hash).offset().top;
			$('html,body').animate({ scrollTop: go}, 2000);
		});
	}); 
});

//resizing navbar
$(document).on("scroll", function() {
	if($(document).scrollTop()>300) {
		$("header").removeClass("large").addClass("small");
	} else {
		$("header").removeClass("small").addClass("large");
	}
});

//carousel
var counter = 0,
    $items = $('#boo .show, #boo .hide'),
    numItems = $items.length;

var current = function(){
    var itemToShow = Math.abs(counter%numItems);
    var itemToHide = Math.abs((counter+1)%numItems);
    var itemToHide2 = Math.abs((counter+2)%numItems);
    $items.removeClass('show'); 
    $items.removeClass('hide');
    $items.eq(itemToHide).addClass('hide');
    $items.eq(itemToHide2).addClass('hide');   
    $items.eq(itemToShow).addClass('show'); 
};

$('.next').on('click', function(){
    counter++;
    current(); 
});
$('.prev').on('click', function(){
    counter--;
    current(); 
});

//modal
var modal = document.getElementById('modd');
var img = document.getElementById('button');
var modalImg = document.getElementById('full');
var captionText = document.getElementById('caption')[0];
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = document.getElementById('full').src;
    captionText.innerHTML = captionText;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}

//video
var vid = document.getElementById("smokyvid");
vid.playbackRate = 0.5;

//position indicator
var lastId,
    topMenu = $("ul"),
    topMenuHeight = topMenu.outerHeight()+10,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 500);
  e.preventDefault();
});
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});