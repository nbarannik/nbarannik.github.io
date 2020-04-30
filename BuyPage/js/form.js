$(function() {
	function hE() {
		$('#error_message').fadeOut(400);
	}
      $('#getRobuxs').submit(function(e) {
		          e.preventDefault(); 
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
		  success: function(data)
           {
			   var result = data.split('|');
			   if(result[0] == 'e') {
				  $('#error_message').fadeIn(),
				  $('#error_message').text(result[3]),
				  setTimeout(hE,4000);
			   }
			   if(result[0] == 's') {
				 $(location).attr('href',result[1] );
			   }
               console.log(data); // show response from the php script.
           }

      });
    });
});