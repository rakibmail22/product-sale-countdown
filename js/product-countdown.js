var $j = jQuery.noConflict();
$j(function($) {
	$('#sales_timer_display').each(function(){
		console.log(this.value);
		var datadate = $("#sales_timer_display").attr("data-date");
		
		console.log(datadate);
		var year = datadate.split("-")[0];
		var month = datadate.split("-")[1];
		var days = datadate.split("-")[2];

		var dayz = new Date(year, month - 1, days);

		//$('#sales_timer_display').cuntdown({ 
		$('#sales_timer_display').cuntdown({ 
							until: dayz, 
							compact: true,
							//format: 'DHMS', 
							//padZeroes: true,
							onExpiry: lit_st_sale_timer_echo_producte_expire,
							//layout: 'Hurry up! Sale ends in {dn} {dl} {hn} {hl} {mn} {ml} {sn} {sl}'
							layout: 'Ends {dn} {dl} {hnn}{sep}{mnn}{sep}{snn} {desc}'
						});
						
		var periods = $('#sales_timer_display').cuntdown('getTimes'); 

		if(periods == "0,0,0,0,0,0,0") {
			$("#sales_timer_display").css({ "display" : "none" });
		}

		function lit_st_sale_timer_echo_producte_expire() {
			$("#sales_timer_display").css({ "display" : "none" });
		}
	});
		
	
		
}); // jquery end
