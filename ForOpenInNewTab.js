document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".open-new-window-button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            var href = button.getAttribute("href");
            window.open(href, "_blank");
        });
    });
});
