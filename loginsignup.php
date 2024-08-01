<?php
header('Content-Type: application/json');

// Absolute path to the JSON file
$jsonFile = __DIR__ . '/users.json';

// Ensure the file exists, create it if it does not
if (!file_exists($jsonFile)) {
    file_put_contents($jsonFile, json_encode([]));
}

// Load and decode the JSON data
$jsonData = file_get_contents($jsonFile);
$users = json_decode($jsonData, true);

// Get POST data
$email = $_POST['email'];
$password = $_POST['password'];
$action = $_POST['action'];

$response = ['message' => ''];

// Handle signup
if ($action === 'signup') {
    // Check if user already exists
    $exists = false;
    foreach ($users as $user) {
        if ($user['email'] === $email) {
            $exists = true;
            break;
        }
    }

    if ($exists) {
        $response['message'] = 'User already exists. Please use a different email.';
    } else {
        // Add new user
        $users[] = [
            'email' => $email,
            'password' => password_hash($password, PASSWORD_DEFAULT)
        ];

        // Save the updated data to the JSON file
        file_put_contents($jsonFile, json_encode($users));

        $response['message'] = 'Signup successful!';
    }
}

// Handle login
elseif ($action === 'login') {
    // Check if user exists and verify password
    $found = false;
    foreach ($users as $user) {
        if ($user['email'] === $email) {
            $found = true;
            if (password_verify($password, $user['password'])) {
                $response['message'] = 'Successfully logged in!';
            } else {
                $response['message'] = 'Incorrect password.';
            }
            break;
        }
    }

    if (!$found) {
        $response['message'] = 'User not in database.';
    }
}

// Return the result as JSON
echo json_encode($response);
?>
