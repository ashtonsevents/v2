function downloadFile() {
    // Get the file URL
    var fileUrl = "assets/Ashtons Primary Care Flyer.pdf"; // Corrected URL

    // Open the file in a new tab
    window.open(fileUrl, "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function(menuLink) {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault();
            // Remove 'selected' class from all menu items
            menuLinks.forEach(function(link) {
                link.classList.remove('selected');
            });
            // Add 'selected' class to the clicked menu item
            this.classList.add('selected');
            // Scroll to the target section
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                var offset = 130; // Adjust this value as needed
                var targetPosition = targetElement.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
