// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal Logic for Project Descriptions
const projects = document.querySelectorAll(".project");
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.querySelector(".close-btn");

// Assign descriptions dynamically based on the clicked project
projects.forEach((project, index) => {
    project.addEventListener("click", () => {
        switch (index) {
            case 0:
    modalTitle.textContent = "AI Medical Image Analyzer";
    modalDescription.innerHTML = `
        <p>An AI-powered medical imaging application that provides instant diagnostic insights from <strong>MRI</strong>, <strong>CT scans</strong>, and other medical images.</p>
        <p>This tool assists doctors and patients by automatically analyzing uploaded scans, detecting potential issues, and highlighting serious concerns.</p>
        <p>Built using advanced <strong>deep learning algorithms</strong>, <strong>computer vision</strong>, and <strong>natural language processing (NLP)</strong>, ImageDx aims to accelerate the diagnostic process, improve accuracy, and enhance patient care.</p>

        <h4>Key Features:</h4>
        <ul>
            <li>📊 <strong>Automated Image Analysis:</strong> Detects abnormalities and potential health concerns from scans.</li>
            <li>⚡ <strong>Real-Time Feedback:</strong> Provides instant diagnostic insights for doctors and patients.</li>
            <li>🔍 <strong>Supports Multiple Formats:</strong> Works with MRI, CT, and X-ray scans.</li>
            <li>🧠 <strong>Deep Learning Integration:</strong> Utilizes state-of-the-art AI models for precise analysis.</li>
            <li>👩‍⚕️ <strong>User-Friendly Interface:</strong> Simplifies complex diagnostics for both healthcare professionals and patients.</li>
        </ul>

        <h4>Technologies Used:</h4>
        <ul>
            <li>Python, TensorFlow, OpenCV</li>
            <li>Streamlit (for UI)</li>
            <li>Google Generative AI (for advanced insights)</li>
            <li>Medical imaging libraries (e.g., pydicom, SimpleITK)</li>
        </ul>
    `;
    break;

    case 1:
        modalTitle.textContent = "Fraud Detection in E-Commerce";
        modalDescription.innerHTML = `
            <p>A machine learning-based fraud detection system developed to identify and prevent fraudulent activities in e-commerce transactions.</p>
            <p>The model uses advanced anomaly detection techniques to proactively flag suspicious activities, reducing financial losses and enhancing customer trust.</p>
    
            <h4>Key Features:</h4>
            <ul>
                <li>🔍 <strong>Anomaly Detection:</strong> Identifies unusual transaction patterns indicating potential fraud.</li>
                <li>📊 <strong>Real-Time Monitoring:</strong> Monitors transactions in real-time for immediate fraud detection.</li>
                <li>🛡️ <strong>Automated Alerts:</strong> Sends real-time alerts to administrators.</li>
                <li>📈 <strong>Adaptive Learning:</strong> Continuously improves fraud detection accuracy through feedback and retraining.</li>
                <li>💻 <strong>Scalable Architecture:</strong> Handles large datasets and high transaction volumes efficiently.</li>
            </ul>
    
            <h4>Technologies Used:</h4>
            <ul>
                <li>Languages: Python</li>
                <li>Libraries: Scikit-learn, XGBoost, Pandas, NumPy</li>
                <li>Technologies: Machine Learning, Data Science, Anomaly Detection Algorithms</li>
                <li>Tools: Jupyter Notebook, Matplotlib (for visualizations)</li>
            </ul>
        `;
        break;
    
        case 2:
            modalTitle.textContent = "Mobile AR/VR Indoor Navigation System";
            modalDescription.innerHTML = `
                <p>An innovative augmented reality (AR) and virtual reality (VR) navigation system developed for guiding users through indoor spaces, specifically for Discovery Park at UNT.</p>
                <p>The app uses real-time AR overlays, intuitive visual paths, and spatial mapping to assist users in locating rooms, exits, and emergency shelters.</p>
        
                <h4>Key Features:</h4>
                <ul>
                    <li>🗺️ <strong>AR-Based Indoor Navigation:</strong> Provides real-time AR overlays and directional guidance for efficient indoor navigation.</li>
                    <li>🚪 <strong>Real-Time Room Navigation:</strong> Directs users to rooms, exits, and other significant locations within Discovery Park.</li>
                    <li>🆘 <strong>Emergency Response Integration:</strong> Highlights emergency exits and shelters during emergencies.</li>
                    <li>🛰️ <strong>Location Awareness:</strong> Integrates Cesium for precise 3D mapping of indoor environments.</li>
                    <li>📱 <strong>Cross-Platform Support:</strong> Compatible with Android, iOS, and HoloLens for accessibility.</li>
                </ul>
        
                <h4>Technologies Used:</h4>
                <ul>
                    <li>Languages: C#, JavaScript</li>
                    <li>Frameworks: MRTK3 (Mixed Reality Toolkit), Vuforia</li>
                    <li>Platforms: Unity3D, HoloLens, Android, iOS</li>
                    <li>Tools: Unity Editor, Visual Studio, Cesium ion</li>
                </ul>
            `;
            break;
        
            case 3:
                modalTitle.textContent = "Line Follower & Obstacle Avoidance Robot";
                modalDescription.innerHTML = `
                    <p>An autonomous robot designed to follow a predetermined line while avoiding obstacles in real time using sensor-based automation.</p>
                    <p>This project combines intelligent path-following algorithms with obstacle detection, making it ideal for industrial automation, warehouse logistics, and educational purposes.</p>
            
                    <h4>Key Features:</h4>
                    <ul>
                        <li>🚗 <strong>Autonomous Line Following:</strong> Uses IR sensors to follow predefined paths accurately.</li>
                        <li>🚧 <strong>Real-Time Obstacle Avoidance:</strong> Detects and avoids obstacles using ultrasonic sensors.</li>
                        <li>🧠 <strong>Intelligent Decision-Making:</strong> Automatically adjusts speed and direction based on sensor inputs.</li>
                        <li>🔋 <strong>Power-Efficient Design:</strong> Optimized to function effectively over extended periods with minimal power consumption.</li>
                        <li>🛠️ <strong>Customizable Path Programming:</strong> Allows user-defined paths via microcontroller programming.</li>
                    </ul>
            
                    <h4>Technologies Used:</h4>
                    <ul>
                        <li>Languages: C++</li>
                        <li>Frameworks: Arduino IDE, NewPing library</li>
                        <li>Hardware: Arduino Uno, IR Sensors, Ultrasonic Sensors, Motor Driver Module (L298N)</li>
                        <li>Tools: Arduino IDE, Breadboard Prototyping, Soldering Kit</li>
                    </ul>
                `;
                break;
            
                case 4:
                    modalTitle.textContent = "Cube Satellite Life Transmitter";
                    modalDescription.innerHTML = `
                        <p>A compact satellite communication system developed using CubeSat technology to transmit life signals and environmental data from space to Earth in real time.</p>
                        <p>The project is designed for efficient space data transmission, focusing on low-cost solutions for educational and research missions.</p>
                
                        <h4>Key Features:</h4>
                        <ul>
                            <li>📡 <strong>Real-Time Data Transmission:</strong> Continuously sends data like temperature, humidity, and radiation levels to Earth.</li>
                            <li>🌍 <strong>Ground Station Connectivity:</strong> Establishes communication between the satellite and Earth-based ground stations using RF modules.</li>
                            <li>🔋 <strong>Power-Efficient Design:</strong> Optimized energy consumption with solar-powered systems.</li>
                            <li>🛰️ <strong>Compact CubeSat Architecture:</strong> Built using modular CubeSat standards for easy deployment and maintenance.</li>
                            <li>🔭 <strong>Telemetry Monitoring:</strong> Tracks system health and sends telemetry data for satellite diagnostics.</li>
                        </ul>
                
                        <h4>Technologies Used:</h4>
                        <ul>
                            <li>Languages: C++, MATLAB</li>
                            <li>Hardware: Arduino Nano, RF Module, Environmental Sensors, Solar Panels</li>
                            <li>Software Tools: MATLAB, Arduino IDE, SDR (Software Defined Radio)</li>
                        </ul>
                    `;
                    break;
                
        }
        modal.style.display = "flex";
    });
});


// Close the modal when clicking the close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside of the modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const steps = document.querySelectorAll('.step');
const roleTitle = document.getElementById('role-title');
const companyName = document.getElementById('company-name');
const roleDetails = document.getElementById('role-details');

// Work experience data
const workData = {
  1: {
    role: 'Graduate Teaching Assistant - Software Engineering',
    company: 'University of North Texas (Jan 2025 – Present)',
    details: [
      '💻 Assisted students in software development.',
      '📝 Graded assignments and provided mentorship.',
      '🔍 Debugged student code and reviewed projects.'
    ]
  },
  2: {
    role: 'Graduate Teaching Assistant - Virtual Reality',
    company: 'University of North Texas (Jan 2025 – Present)',
    details: [
      '🕶️ Supported VR development using Unity3D.',
      '🎮 Assisted with VR workshops.',
      '🔍 Debugged VR projects and provided feedback.'
    ]
  },
  3: {
    role: 'Machine Learning Research Assistant',
    company: 'University of North Texas (Aug 2024 – Present)',
    details: [
      '🤖 Developed an NLP chatbot for IDD patients.',
      '📊 Conducted gene expression analysis.',
      '🔍 Fine-tuned models using RAFT techniques.'
    ]
  },
  4: {
    role: 'Application Development Associate',
    company: 'Accenture (Jun 2023 – Jan 2024)',
    details: [
      '⚙️ Built Salesforce apps using Apex and LWC.',
      '🔄 Automated workflows for better efficiency.',
      '📈 Optimized CRM systems.'
    ]
  },
  5: {
    role: 'Web Development Intern',
    company: 'LTIMindtree (Mar 2023 – May 2023)',
    details: [
      '💻 Developed Java-based web applications.',
      '🎨 Improved UI/UX for client websites.',
      '🔌 Integrated APIs for functionality.'
    ]
  }
};

// Event Listener for Step Click
steps.forEach((step) => {
  step.addEventListener('click', () => {
    steps.forEach((s) => s.classList.remove('active'));
    step.classList.add('active');

    const stepNumber = step.getAttribute('data-step');
    const data = workData[stepNumber];

    roleTitle.textContent = data.role;
    companyName.textContent = data.company;

    // Update the role details dynamically
    roleDetails.innerHTML = '';
    data.details.forEach((detail) => {
      const li = document.createElement('li');
      li.textContent = detail;
      roleDetails.appendChild(li);
    });
  });
});

