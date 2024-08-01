<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $email = htmlspecialchars($_POST['email']);

    // Data to be saved
    $data = array(        
        'email' => $email,
    );

    // File path
    $file = './src/datajson/subscribers.json';

    // Check if the file exists
    if (file_exists($file)) {
        // Read existing data
        $json_data = file_get_contents($file);
        $array_data = json_decode($json_data, true);
    } else {
        // Initialize array if file does not exist
        $array_data = array();
    }

    // Add new data to the array
    $array_data[] = $data;

    // Encode array to JSON
    $json_data = json_encode($array_data, JSON_PRETTY_PRINT);

    // Save JSON data to the file
    if (file_put_contents($file, $json_data)) {
        echo "Thank you for subscribing, $email!";
    } else {
        echo "There was an error saving your data.";
    }
}
?>
