
// Display the current date in the header
var currentDate = moment().format("dddd, MMMM Do YYYY")
$("#currentDay").html(currentDate);

// add a background indicates if the hour past or present or future 
function timeBlockBg() {

    var currentTime = moment().hour();
    //console.log(currentTime)

    $(".time-block").each(function() {
        var planTime = parseInt($(this).attr("id"));
            console.log(planTime)

        if (planTime > currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        } else if (planTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");

        } else {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }       
    })
};

// Click save button and to save the plan 
var saveBtn = $(".saveBtn").on("click", function() {
    
    var planText = $(this).siblings(".plan").val();
    var planTime = $(this).parent().attr("id");

    // THEN the text for that event is saved in local storage
    localStorage.setItem(planTime, planText);
});

// Get the plan text from local storage if refresh happened
$("#8 .plan").val(localStorage.getItem("8"));
$("#9 .plan").val(localStorage.getItem("9"));
$("#10 .plan").val(localStorage.getItem("10"));
$("#11 .plan").val(localStorage.getItem("11"));
$("#12 .plan").val(localStorage.getItem("12"));
$("#13 .plan").val(localStorage.getItem("13"));
$("#14 .plan").val(localStorage.getItem("14"));
$("#15 .plan").val(localStorage.getItem("15"));
$("#16 .plan").val(localStorage.getItem("16"));
$("#17 .plan").val(localStorage.getItem("17"));

// Call function
timeBlockBg();
