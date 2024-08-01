<?php
header('Content-Type: application/json');

// Path to the JSON file
// $jsonFile = 'users.json';
$jsonFile = './src/datajson/users.json';

// Load and decode the JSON data
if (file_exists($jsonFile)) {
    $jsonData = file_get_contents($jsonFile);
    $users = json_decode($jsonData, true);
} else {
    $users = [];
}

$email = $_POST['email'];
$exists = false;

// Check if the user already exists
foreach ($users as $user) {
    if ($user['email'] === $email) {
        $exists = true;
        break;
    }
}

// Return the result as JSON
echo json_encode(['exists' => $exists]);
?>
