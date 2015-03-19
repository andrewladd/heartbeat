$(document).ready(function () {
    
    $('#heart').draggable();
    
	$('#heart').click(function () {
		
		var heartClass = $('#heart').attr("class");
		switch (heartClass) {
		case 'pulse5':
            $('#heart').removeClass('pulse5').addClass("pulse1");
            $('#inner').html("It's Valentines day...");
            break;

		case 'pulse4':
			$('#heart').removeClass('pulse4').addClass('pulse5');
			$('#inner').html("with all of my heart.");
			break;

		case 'pulse3':
			$('#heart').removeClass('pulse3').addClass('pulse4');
			$('#inner').html("that I love you...");
			break;

		case 'pulse2':
			$('#heart').removeClass('pulse2').addClass('pulse3');
			$('#inner').html("you should know...");
			break;

		case 'pulse1':
			$('#heart').removeClass('pulse1').addClass('pulse2');
			$('#inner').html("so I figured...");
			break;

		case '':
			$('#heart').addClass('pulse1');
			$('#inner').html("It's Valentines day...");
			break;
		}
	});
});