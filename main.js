
// maintain Camele-casing
$(document).ready(function(){

	$(".add_task").keypress(function(e){

		if(e.keyCode==13 && $(".add_task").val() !=''){
			
			var task=$('<div class="task"></div>').text($(".add_task").val());
			// alert('enter pressed');
			// alert($(".add_task").val());	
			var del=$('<i class="fa fa-trash text-light ms-2"></i>').click(function(){

				var p=$(this).parent();
				p.fadeOut(function(){
					p.hide();
				});	

			});
			var ok=$('<i class="fa fa-check text-success"></i>').click(function(){
				var p=$(this).parent();

				
					$('.c-task').append(p);
					$(this).hide();
			
				
			});

			task.append(del,ok);
			$('.ic-task').append(task);
			$(".add_task").val('');
		}

		
    });

});