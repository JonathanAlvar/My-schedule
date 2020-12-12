$(document).ready(function () {
//Time
var clock = function () {
    document.getElementById("currentDay")
        .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(clock, 1000);
console.log(clock)


//Past, Present or Future??

$(".description").each(function () {
    var time = $(this).attr("id");
    console.log(time);
    if (time < clock) {
        $(this).addClass("past");
    }
    if (time === clock) {
        $(this).addClass("present");
    }
    if (time > clock) {
        $(this).addClass("future");
    }
})

//Local Storage


//Save to local
$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    var value = $(this).parent().attr("id");
    localStorage.setItem(text, value);
})

//Return local storage
//Still not able to return from local storage
$('#9amHour .description').text(localStorage.getItem('9amHour'));
$('#10amHour .description').text(localStorage.getItem('10amHour'));
$('#11amHour .description').text(localStorage.getItem('11amHour'));
$('#12pmHour .description').text(localStorage.getItem('12pmHour'));
$('#1pmHour .description').text(localStorage.getItem('1pmHour'));
$('#2pmHour .description').text(localStorage.getItem('2pmHour'));
$('#3pmHour .description').text(localStorage.getItem('3pmHour'));
$('#4pmHour .description').text(localStorage.getItem('4pmHour'));
$('#5pmHour .description').text(localStorage.getItem('5pmHour'));

})