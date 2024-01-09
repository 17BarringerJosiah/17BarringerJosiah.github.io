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
            background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('Banner.jpg') center/cover no-repeat; /* Added white shading with a gradient and set the banner image as a background */
        }

        .main-header h1 {
            margin: 0;
            font-size: 2.5em;
            margin-bottom: 20px; /* Adjusted to move the header text towards the bottom of the banner image */
        }

        .main-header p {
            font-size: 1.2em;
            margin-top: 10px;
        }

        #profile-pic {
            text-align: left; /* Align the profile picture to the left */
            margin-top: -250px; /* Adjust as needed to align with the main header */
            margin-left: 20px; /* Move the profile picture to the left margin */
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
            max-width: 2000px;
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
        <p>Jumping out of planes was cool. But I wanna code now.</p>
    </header>

    <div id="profile-pic">
        <img src="unnamed.jpg" alt="Profile Picture">
    </div>

    <section>
        <h2>About Me</h2>
        <p>
            For the past two years, I have worked to build my knowledge of Software Engineering while completing classes as a Computer Science major at Liberty University. So far, I have learned Java, HTML, CSS, and a littl
        </p>
    </section>

    <!-- Add other sections as needed -->

</body>

</html>
