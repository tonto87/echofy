<?php
header('Content-Type: application/json');

// Define the path to the JSON file
$filePath = 'data.json';

// Get the POST data
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';
$action = $_POST['action'] ?? '';

// Initialize response
$response = [
    'status' => 'error',
    'message' => 'Invalid request'
];

// Read the existing data from the JSON file
if (file_exists($filePath)) {
    $jsonData = file_get_contents($filePath);
    $data = json_decode($jsonData, true);
} else {
    $data = [];
}

// Process based on action
if ($action === 'login' || $action === 'signup') {
    // Add the new data
    $data[] = [
        'email' => $email,
        'password' => $password, // In a real application, passwords should be hashed
        'action' => $action
    ];

    // Write data to the JSON file
    if (file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT))) {
        $response = [
            'status' => 'success',
            'message' => ucfirst($action) . ' successful!'
        ];
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Failed to write to file'
        ];
    }
}

// Send the response
echo json_encode($response);
?>
