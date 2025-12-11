function loadNavbar() {
    const navbarHTML = `
                <header class="sticky-header">
                    <label>ReadMe Maker</label>
                    <nav>
                        <a href="#home" class="nav-link"><i class="fas fa-home"></i> Home</a>
                        <a href="#generate" class="nav-link"><i class="fas fa-book"></i> Generate Tools</a>
                    </nav>
                </header>
            `;
    document.getElementById('navbar-container').innerHTML = navbarHTML;
    // Add click handlers for navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            showPage(pageId);
            // Update active link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    // Set home as active initially
    document.querySelector('.nav-link').classList.add('active');
}

// Show specific page
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}
// Load navbar when page loads
loadNavbar();
