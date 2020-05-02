
$(document).ready(function () {



    //on page load
    doInit();

    function doInit() {
        getCurrentDay();
        pastPresentFuture();
        retrieveDescriptions();
    }

    //button clicks all here
    $(".save-btn").on("click", function () {

        //get time id from descrption tag
        const timeId = $(this).siblings(".description").attr("data-time");

        //get the text of whatever the user inputted
        const userInput = $(this).siblings(".description").val();

        //set that baby in local storage
        localStorage.setItem(timeId, userInput);
    })



    //all functions below here

    function retrieveDescriptions() {

        //get array of our description elements
        const descriptions = $(".description");

        $(descriptions).each(function (i, element) {

            //get time id so we can retrieve data from localstorage
            const timeId = $(element).attr("data-time");

            //get unique desciption per element tag
            const description = localStorage.getItem(timeId);

            //set the text
            $(element).text(description);
        })


    }

    function pastPresentFuture() {
        //get current hour
        const currentHour = moment().hours();

        //target our description tag
        const descriptions = $(".description");

        $(descriptions).each(function (index, element) {
            //get the current time that is stored on the description block
            const currentTimeOfBlock = parseInt($(element).attr("data-time"));


            if (currentTimeOfBlock < currentHour) {
                $(element).addClass("past");
            }
            else if (currentTimeOfBlock === currentHour) {
                $(element).addClass("present");
            }
            else {
                $(element).addClass("future");
            }
        })



    }

    function getCurrentDay() {

        //get the current day formatted
        const currentDay = moment().format("dddd, MMMM Do");

        //set the text of current day element
        $("#currentDay").text(currentDay);
    }


})