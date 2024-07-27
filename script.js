<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Booking System</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Book Your Appointment</h1>
        <form id="booking-form">
            <label for="service">Select Service:</label>
            <select id="service" name="service" required>
                <option value="">Choose a service</option>
                <option value="consultation">Consultation</option>
                <option value="therapy">Therapy</option>
                <option value="massage">Massage</option>
            </select>

            <label for="date">Select Date:</label>
            <input type="date" id="date" name="date" required>

            <label for="time">Select Time:</label>
            <input type="time" id="time" name="time" required>

            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Book Now</button>
        </form>
    </div>

    <script src="script.js"></script>
</body>
</html>
