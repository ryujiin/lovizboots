(function($) {
	Drupal.behaviors.miconsole = {
		attach: function (context) {
			var cuerpo = $('.modal .pane-content');			
			var modal_pri = '<div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-body"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
			var modal_segun = '</div></div></div>';
			console.log('kike');
			$('.modal').html(modal_pri+cuerpo+modal_segun);
		}
	}
})(jQuery);


      