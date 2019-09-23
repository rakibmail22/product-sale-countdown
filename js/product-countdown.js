var $j = jQuery.noConflict();
$j(function($) {
	$timerDiv = $("[id^=sales_timer_display]");
	$timerDiv.each(function(i, el){
		var $elem = $( el );
		var datadate = $elem.attr("data-date");
		
		console.log(datadate);
		var year = datadate.split("-")[0];
		var month = datadate.split("-")[1];
		var days = datadate.split("-")[2];

		var dayz = new Date(year, month - 1, days);

		//$('#sales_timer_display').cuntdown({ 
			$elem.cuntdown({ 
							until: dayz, 
							compact: true,
							//format: 'DHMS', 
							//padZeroes: true,
							onExpiry: lit_st_sale_timer_echo_producte_expire,
							//layout: 'Hurry up! Sale ends in {dn} {dl} {hn} {hl} {mn} {ml} {sn} {sl}'
							layout: 'Ends {dn} {dl} {hnn}{sep}{mnn}{sep}{snn} {desc}'
						});
						
		var periods = $elem.cuntdown('getTimes'); 

		if(periods == "0,0,0,0,0,0,0") {
			$elem.css({ "display" : "none" });
		}

		function lit_st_sale_timer_echo_producte_expire() {
			$elem.css({ "display" : "none" });
		}
	});
		
	
		
}); // jquery end
