<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Josiah Barringer - Software Engineer Aspirations</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em;
        }

        #banner {
            width: 100%;
            max-height: 300px; /* Adjust the height as needed */
            object-fit: cover;
        }

        #profile-pic img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0 15px 15px 0;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        section {
            max-width: 800px;
            margin: 2em auto;
            padding: 2em;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1, h2 {
            color: #333;
        }

        p {
            line-height: 1.6;
            color: #666;
        }

        .projects {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 2em;
        }

        .project {
            flex: 0 1 calc(33.333% - 1em);
            margin-bottom: 1em;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .project img {
            max-width: 100%;
            height: auto;
        }
    </style>
    
</head>
<body>

    <header>
        <h1>Josiah Barringer</h1>
        <p>Aspiring Software Engineer</p>
    </header>

    <img id="banner" src="Screenshot 2023-11-27 130545.png" alt="Banner Image">

    <div id="profile-pic">
        <img src="unnamed.jpg" alt="Profile Picture">
    </div>

    <section>
        <h2>About Me</h2>
        <p>
            For the past two years I have worked to build my knowledge of Software Engineering while completeing classes as a Computer Science major at Liberty University. So far, I have learned Java, HTML, CSS, and a little bit of Python.
        </p>
    </section>

    <section class="projects">
        <h2>Projects</h2>
        <!-- Example project module -->
        <div class="project">
            <img src="project1.jpg" alt="Project 1">
            <h3>Project 1</h3>
            <p>Description of Project 1.</p>
        </div>

        <!-- Add more project modules as needed -->
        
    </section>
    <script>
        // Inserted JavaScript code
        function searchStudent() {
            const project1 = document.getElementById('project1');
            const searchId = parseInt(prompt("Enter Student ID:"));

            // Student information for Project 1
            const studentIds = [1098, 7654, 3210, 2234, 5641, 4467, 9365, 8884, 0143, 5680];
            const studentNames = ["Josiah", "Jesse", "Jacob", "Joy", "James", "Naomi", "Emmah", "Babba", "Kathye", "Rick"];
            const studentGPAs = [3.3, 1.9, 3.1, 4.0, 3.7, 3.2, 3.9, 4.0, 3.4, 3.3];

            // Search for the ID number in the array
            let found = false;
            let name = "";
            let gpa = 0.0;

            for (let i = 0; i < studentIds.length; i++) {
                if (studentIds[i] === searchId) {
                    found = true;
                    name = studentNames[i];
                    gpa = studentGPAs[i];
                    break;
                }
            }

            // Display results within Project 1 section
            if (found) {
                console.log("Name: " + name);
                console.log("GPA: " + gpa);
                project1.innerHTML += "<p>Student Name: " + name + "</p><p>GPA: " + gpa + "</p>";
            } else {
                console.error("Invalid ID number: " + searchId);
                project1.innerHTML += "<p>Error: Invalid ID number " + searchId + "</p>";
            }
        }
    </script>
    <section>
        <h2>Contact</h2>
        <p>
            Connect with me through social media or email. Feel free to reach out for collaboration or to discuss anything related to software engineering.
        </p>
    </section>

    <section>
        <h2>Army Career</h2>
        <p>
            Share your experiences and achievements during your time in the army. Highlight any relevant skills or lessons learned that contribute to your journey as a software engineer.
        </p>
    </section>

</body>
</html>
