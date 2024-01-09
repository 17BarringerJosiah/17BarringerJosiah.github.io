<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Josiah Barringer</title>

    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
        }

        .main-header {
            position: relative;
            color: #fff; /* Text color */
            text-align: center;
            padding: 40px 0; /* Adjust padding as needed */
            z-index: 2; /* Ensures the text is on top of the banner image */
            margin-bottom: -80px; /* Move header text towards the bottom */
        }

        .main-header h1 {
            margin: 0;
            font-size: 2.5em;
            background-color: rgba(255, 255, 255, 0.5); /* White shading around the text */
            padding: 10px; /* Padding around the text */
            display: inline-block; /* Allows padding to work properly */
        }

        .main-header p {
            font-size: 1.2em;
            margin-top: 10px;
        }

        #banner {
            width: 100%;
            max-height: 300px; /* Adjust the height as needed */
            object-fit: cover;
            padding: 40px 0;
            position: relative;
            z-index: 1; /* Ensure the banner image is behind the text */
        }

        #profile-pic {
            text-align: left; /* Align profile pic to the left */
            margin-top: -150px; /* Adjust as needed to align with the main header */
            margin-left: 20px; /* Adjust margin to position the profile pic */
        }

        #profile-pic img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        }

        section {
            max-width: 1200px;
            margin: 2em auto;
            padding: 2em;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1,
        h2 {
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

    <header class="main-header">
        <h1>Josiah Barringer</h1>
        <p>"Jumping out of planes was cool. But I wanna code now."</p>
    </header>

    <div id="profile-pic">
        <img src="unnamed.jpg" alt="Profile Picture">
    </div>

    <img id="banner" src="Banner.jpg" alt="Banner Image">

    <section>
        <h2>About Me</h2>
        <p>
            For the past two years, I have worked to build my knowledge of Software Engineering while completing classes as a Computer Science major at Liberty University. So far, I have learned Java, HTML, CSS, and a little bit of Python.
        </p>
    </section>

    <section class="projects">
        <h2>Projects</h2>
        <!-- Example project module -->
        <div class="project">
            <img src="Screenshot 2023-11-27 130545.png" alt="Project 1">
            <h3>Project 1</h3>
            <p>During my second semester of college, I took a Java course which taught me how to use...</p>
        </div>
        <div class="project">
            <img src="Screenshot 2023-11-27 130545.png" alt="Project 1">
            <h3>Project 2</h3>
            <p>Blah blah blah...</p>
        </div>
        <!-- Add more project modules as needed -->

    </section>

    <section>
        <h2>Contact</h2>
        <p>
            Connect with me through social media or email. Feel free to reach out for collaboration or to discuss anything related to software engineering.
        </p>
        <p>
            Personal Email - josiahbarr17@gmail.com
        </p>
        <p>
            LinkedIn - https://www.linkedin.com/in/josiah-b-73370911b/
        </p>
    </section>

    <section>
        <h2>Army Career</h2>
        <p>
            During my time in the Army, I served in the following roles: Medical Evacuation Platoon Leader, Medical Treatment Facility Platoon Leader, Battalion Medical Operations Officer, Brigade Medical Supply Officer
        </p>
    </section>

</body>

</html>

