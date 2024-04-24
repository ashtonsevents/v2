function downloadFile() {
    // Get the file URL
    var fileUrl = "assets/Ashtons Primary Care Flyer.pdf"; // Corrected URL

    // Open the file in a new tab
    window.open(fileUrl, "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
    const expandButtons = document.querySelectorAll(".expand-button");

    expandButtons.forEach(button => {
        button.addEventListener("click", function() {
            const post = this.parentElement;
            const iframe = post.querySelector("iframe");
            const buttonText = this.innerText;

            if (buttonText === "See More") {
                iframe.style.height = "auto";
                this.innerText = "See Less";
            } else {
                iframe.style.height = "400px"; // Adjust the default height as needed
                this.innerText = "See More";
            }
        });
    });
});
