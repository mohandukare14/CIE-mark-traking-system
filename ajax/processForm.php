<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
    exit;
}

$action = isset($_POST['action']) ? $_POST['action'] : '';

switch ($action) {
    case 'login':
        $username = isset($_POST['username']) ? trim($_POST['username']) : '';
        $password = isset($_POST['password']) ? trim($_POST['password']) : '';
        $role = isset($_POST['role']) ? trim($_POST['role']) : 'student';

        if (!empty($username) && !empty($password)) {
            echo json_encode([
                'status' => 'success',
                'message' => 'Login successful!',
                'role' => $role,
                'user' => [
                    'name' => $role === 'student' ? 'John Doe' : 'Dr. A. K. Sharma',
                    'id' => $username,
                    'department' => 'Computer Engineering'
                ]
            ]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Please enter username and password.']);
        }
        break;

    case 'helpdesk':
        $name = isset($_POST['name']) ? trim($_POST['name']) : '';
        $email = isset($_POST['email']) ? trim($_POST['email']) : '';
        $query = isset($_POST['query']) ? trim($_POST['query']) : '';

        if (!empty($name) && !empty($email) && !empty($query)) {
            echo json_encode([
                'status' => 'success',
                'message' => 'Your query has been submitted successfully! Ticket #CIE-' . rand(1000, 9999)
            ]);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Please fill in all required fields.']);
        }
        break;

    default:
        echo json_encode(['status' => 'error', 'message' => 'Unknown form action']);
        break;
}
?>
