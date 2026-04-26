// Login functionality
const loginForm = document.getElementById('loginForm');
const loginContainer = document.querySelector('.login-container');
const dashboard = document.querySelector('.dashboard');

// Check if user is already logged in
if (localStorage.getItem('isLoggedIn') === 'true') {
    showDashboard();
}

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication (in a real app, this would be handled by a server)
    if ((username === 'admin' && password === 'admin') || 
        (username === 'user' && password === 'user')) {
        localStorage.setItem('isLoggedIn', 'true');
        showDashboard();
    } else {
        alert('Invalid username or password');
    }
});

function showDashboard() {
    loginContainer.style.display = 'none';
    document.body.innerHTML = `
        <div class="dashboard">
            <header class="dashboard-header">
                <div class="logo">
                    <img src="logo.png" alt="Praise Chapel Logo">
                    <h1>Praise Chapel</h1>
                </div>
                <div class="nav-links">
                    <a href="#" class="nav-link" data-section="home">Home</a>
                    <a href="#" class="nav-link" data-section="vision">Vision</a>
                    <a href="#" class="nav-link" data-section="doctrines">Doctrines</a>
                    <a href="#" class="nav-link" data-section="pastors">Pastors</a>
                    <a href="#" class="nav-link" data-section="branches">Branches</a>
                    <a href="#" class="nav-link" data-section="contact">Contact</a>
                </div>
                <button class="logout-btn" id="logoutBtn">Logout</button>
            </header>

            <main class="main-content">
                <!-- Home Section -->
                <section id="home-section" class="section">
                    <h2>Welcome to Praise Chapel</h2>
                    <p class="vision-statement">
                        We are a community of believers committed to spreading the love of Christ, 
                        nurturing spiritual growth, and serving our community with compassion and grace.
                    </p>
                </section>

                <!-- Vision Section -->
                <section id="vision-section" class="section hidden">
                    <h2>Our Vision</h2>
                    <p class="vision-statement">
                        To be a beacon of hope and transformation in our community, 
                        leading people into a growing relationship with Jesus Christ, 
                        equipping believers for ministry, and demonstrating God's love 
                        through service and compassion.
                    </p>
                </section>

                <!-- Doctrines Section -->
                <section id="doctrines-section" class="section hidden">
                    <h2>Our Doctrines</h2>
                    <div class="doctrines">
                        <div class="doctrine-item">
                            <h3>The Bible</h3>
                            <p>We believe the Bible is the inspired, infallible Word of God and the final authority in matters of faith and practice.</p>
                        </div>
                        <div class="doctrine-item">
                            <h3>God</h3>
                            <p>We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.</p>
                        </div>
                        <div class="doctrine-item">
                            <h3>Jesus Christ</h3>
                            <p>We believe in the deity of Jesus Christ, His virgin birth, sinless life, miracles, atoning death, bodily resurrection, and ascension to heaven.</p>
                        </div>
                        <div class="doctrine-item">
                            <h3>Salvation</h3>
                            <p>We believe salvation is by grace through faith in Jesus Christ alone, not by works, and that it results in eternal life.</p>
                        </div>
                        <div class="doctrine-item">
                            <h3>Holy Spirit</h3>
                            <p>We believe in the present ministry of the Holy Spirit, who empowers believers for Christian witness and service.</p>
                        </div>
                        <div class="doctrine-item">
                            <h3>Church</h3>
                            <p>We believe the Church is the Body of Christ, composed of all believers, called to worship, fellowship, discipleship, and mission.</p>
                        </div>
                    </div>
                </section>

                <!-- Pastors Section -->
                <section id="pastors-section" class="section hidden">
                    <h2>Our Pastors</h2>
                    <div class="pastors">
                        <div class="pastor-item">
                            <img src="pastor1.jpg" alt="Pastor John Smith">
                            <h3>Pastor John Smith</h3>
                            <p>Senior Pastor with over 20 years of ministry experience. Passionate about biblical teaching and community outreach.</p>
                        </div>
                        <div class="pastor-item">
                            <img src="pastor2.jpg" alt="Pastor Mary Johnson">
                            <h3>Pastor Mary Johnson</h3>
                            <p>Worship Pastor dedicated to leading authentic worship experiences and developing worship teams.</p>
                        </div>
                        <div class="pastor-item">
                            <img src="pastor3.jpg" alt="Pastor David Brown">
                            <h3>Pastor David Brown</h3>
                            <p>Youth Pastor committed to raising the next generation of Christian leaders through mentorship and discipleship.</p>
                        </div>
                    </div>
                </section>

                <!-- Branches Section -->
                <section id="branches-section" class="section hidden">
                    <h2>Our Branches</h2>
                    <div class="branches">
                        <div class="branch-item">
                            <h3>Main Campus</h3>
                            <p><strong>Address:</strong> 123 Faith Avenue, Grace City, GC 12345</p>
                            <p><strong>Service Times:</strong> Sundays at 9:00 AM & 11:00 AM, Wednesdays at 7:00 PM</p>
                            <p><strong>Contact:</strong> (555) 123-4567 | main@praisechapel.org</p>
                        </div>
                        <div class="branch-item">
                            <h3>Downtown Campus</h3>
                            <p><strong>Address:</strong> 456 Hope Street, Downtown, DT 67890</p>
                            <p><strong>Service Times:</strong> Sundays at 10:00 AM & 6:00 PM</p>
                            <p><strong>Contact:</strong> (555) 987-6543 | downtown@praisechapel.org</p>
                        </div>
                        <div class="branch-item">
                            <h3>Westside Campus</h3>
                            <p><strong>Address:</strong> 789 Grace Boulevard, Westside, WS 54321</p>
                            <p><strong>Service Times:</strong> Sundays at 8:30 AM, 10:30 AM & 5:00 PM</p>
                            <p><strong>Contact:</strong> (555) 456-7890 | westside@praisechapel.org</p>
                        </div>
                    </div>
                </section>

                <!-- Contact Section -->
                <section id="contact-section" class="section hidden">
                    <h2>Get in Touch</h2>
                    <div class="contact-form">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" placeholder="Your name">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Your email">
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" placeholder="Your phone number">
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" id="submitContact">Send Message</button>
                    </div>
                </section>
            </main>
        </div>
    `;

    // Add event listeners for navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });

    // Add logout functionality
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        location.reload();
    });

    // Add contact form submission
    const submitContact = document.getElementById('submitContact');
    if (submitContact) {
        submitContact.addEventListener('click', function() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('Thank you for your message! We will get back to you soon.');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('message').value = '';
            } else {
                alert('Please fill in all required fields.');
            }
        });
    };

    // Show home section by default
    showSection('home');
}

function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.add('hidden');
    });
    
    // Show the requested section
    document.getElementById(`${section}-section`).classList.remove('hidden');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-section') === section) {
            link.style.fontWeight = 'bold';
            link.style.color = '#667eea';
        } else {
            link.style.fontWeight = 'normal';
            link.style.color = '#555';
        }
    });
};