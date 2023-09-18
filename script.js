/*
	WEB 303 Assignment 1 - jQuery
	{Pawandeep kaur}
*/
$(document).ready(function () {
    // Defining  function to update the amount
    function updateAmount() {
        var salary = parseFloat($("#yearly-salary").val());
        var percent = parseFloat($("#percent").val());

        if (!isNaN(salary) && !isNaN(percent)) {
            var amount = (salary * (percent / 100)).toFixed(2);
            $("#amount").text("$" + amount);
        }
    }

    // Attaching the updateAmount function to the keyup event of the input fields
    $("#yearly-salary, #percent").keyup(updateAmount);

    // Calling the updateAmount function initially to set the initial amount if values are present
    updateAmount();
});
