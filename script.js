$("#messagebtn").click(function () {
    $("#tech-container").fadeOut("slow");

    $("#frame").attr("src", "contact.html");

    $("#contact-page").fadeIn("slow");

});

$("#message-sub").click(function () {
    alert("Message has been submitted!");
});