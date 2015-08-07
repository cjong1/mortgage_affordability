$("#results").hide();

$("form").on("submit", function(event){
	// Prevent the action from refreshing the page
	event.preventDefault();

	var income = $("#income").val();
	var monthlyPayment = $("#monthly").val();
	var downPayment = $("#down").val();
	var debts = $("#debts").val();
	var zip = $("#zip").val();

	$.ajax({
		url: "http://www.zillow.com/webservice/mortgage/CalculateAffordability.htm?zws-id=X1-ZWz1evb5lcuubv_39zrb&annualincome="+income+"&monthlypayment="+monthlyPayment+"&down="+downPayment+"&monthlydebts="+debts+"&estimate=true&zip="+zip+"&output=json",
		contentType: "application/json",
		dataType: "jsonp",
		type: "GET",
		success: function(data) {
			// Remove content in the #results div every time new user input is submitted
			$("#results").empty();
			
			var result = data["response"];
			console.log(result);

			// The price of a house that a borrower may be able to afford
			var affordabilityAmt = result["affordabilityAmount"];

			// Monthly income and payments
			var monthlyInc = result["monthlyIncome"];
			var hazardIns = result["monthlyHazardInsurance"];
			var principalAndInt = result["monthlyPrincipalAndInterest"];
			var remainingBudget = result["monthlyRemainingBudget"];

			// Total amount to be paid over the life of borrower's loan
			var totalInterest = result["totalInterestPayments"];
			var totalPayments = result["totalPayments"];
			var totalPrincipal = result["totalPrincipal"];
			var totalTaxesFeesAndInsurance = result["totalTaxesFeesAndInsurance"];

			$("#results").show();

			$("#results").append("<h4>Results</h4>\
				<table class='table'>\
					<tr>\
						<td>Affordability Amount:</td>\
						<td>$"+affordabilityAmt+"</td>\
					</tr>\
					<tr>\
						<td>Monthly Income:</td>\
						<td>$"+monthlyInc+"</td>\
					</tr>\
					<tr>\
						<td>Monthly Remaining Budget:</td>\
						<td>$"+remainingBudget+"</td>\
					</tr>\
				</table>\
				<h4>Payment Breakdown by Month</h4>\
				<table class='table'>\
					<tr>\
						<td>Hazard Insurance:</td>\
						<td>$"+hazardIns+"</td>\
					</tr>\
					<tr>\
						<td>Principal and Interest:</td>\
						<td>$"+principalAndInt+"</td>\
					</tr>\
				</table>\
				<h4>Total Payment</h4>\
				<table class='table'>\
					<tr>\
						<td>Interest:</td>\
						<td>$"+totalInterest+"</td>\
					</tr>\
					<tr>\
						<td>Principal:</td>\
						<td>$"+totalPrincipal+"</td>\
					</tr>\
					<tr>\
						<td>Total Taxes, Fees, and Insurance:</td>\
						<td>$"+totalTaxesFeesAndInsurance+"</td>\
					</tr>\
					<tr>\
						<td>Total Payments:</td>\
						<td>$"+totalPayments+"</td>\
						</tr>\
				</table>"); 
		},
		error: function(data) {
			console.log(data);
		}
	});
});