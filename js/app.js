

$(document).ready(function(){
	playDunki(); 
	$('.ryu').mouseenter(function(){

		$('.ryu-ready').show();
		$('.ryu-still').hide();

	})

	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();

	})

	
	.mousedown(function() {
    console.log('mousedown');
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate({
    	'left':'1020px'

	},500,
		function(){
			$(this).hide();
			$(this).css('left','520px');


		}


	);
playHadouken();
	
})

	.mouseup(function() {
    console.log('mouseup');
    
  $('.ryu-ready').show();
  $('.ryu-throwing').hide(); 
	});

	$(document).keydown(function(e){
	if(e.keyCode == 88){
			playCool();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
			
	}
})
	.keyup(function(e){
		
		if(e.keyCode == 88){
		$('.ryu-still').show();
		$('.ryu-cool').hide();
		
	}
	});


	



});



function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}




function playCool(){
	$('#song')[0].volume =0.5;
	$('#song')[0].load();
	$('#song')[0].play();




}


	
function playDunki(){
	$('#dunki')[0].volume = 0.5;
	$('#dunki')[0].load();
	$('#dunki')[0].play();	

	$('.str-logo').fadeIn(3500,function(){
		$(this).fadeOut(1000,function(){

	$('.by').fadeIn(1500, function(){
		$(this).fadeOut(1000,function(){

	$('.jquery').fadeIn(1500, function(){

		$(this).fadeOut(1000, function(){

	$('.p-tag').fadeIn(1500, function(){

	});
		})

	})

		})


	})


		})



	})

}


