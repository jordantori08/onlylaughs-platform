document.addEventListener('DOMContentLoaded', function() {
    console.log("Only Laughs platform loaded");

    document.querySelectorAll('.watch-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert("Redirecting to live show...");
        });
    });
});
