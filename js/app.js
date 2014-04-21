$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	
	$(".ryu").mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	});
	
	$(".ryu").mousedown(function() {
    	playHadouken();
    	$(".ryu-ready").hide();
    	$(".ryu-throwing").show();
    	$(".hadouken").show();
    	$('.hadouken').finish().show()
		  .animate(
		    {'left': '500px'},
		    500,
		    function() {
		      $(this).hide();
		      $(this).css('left', '-70px');
		    }
		  );
  	});

  	$(".ryu").mouseup(function() {
    	$(".ryu-throwing").hide();
    	$(".ryu-ready").show();
	});

	$(document).keydown(function() {
		if(event.keyCode == 88) {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").show();
		}
	});

	$(document).keyup(function() {
		if(event.keyCode == 88) {
			$(".ryu-still").show();
			$(".ryu-ready").show();
			$(".ryu-throwing").show();
			$(".ryu-cool").hide();
		}
	});

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}