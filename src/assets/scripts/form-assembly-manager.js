document.addEventListener('DOMContentLoaded', function() {
    var redirectField = document.querySelector("[value='%REDIRECT%']");
    redirectField.value = window.location.href.split("?")[0].split("#")[0] + "/thank-you";
});