(function($) {
	Drupal.behaviors.miconsole = {
		attach: function (context) {
			var cuerpo = $('.cuerpo_modal .pane-content').html();			
			var modal_pri = '<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-body">
										<div class="modal-header">
									        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
									        <h4 class="modal-title" id="myModalLabel">Mi Revision del Producto</h4>
									    </div>
										<div class="pane-content">';
			var modal_segun = '</div></div></div></div>';
			$('.cuerpo_modal').html(modal_pri+cuerpo+modal_segun);
		}
	}
})(jQuery);


      