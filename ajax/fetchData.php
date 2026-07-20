<?php
header('Content-Type: application/json');

$action = isset($_GET['action']) ? $_GET['action'] : '';

$response = ['status' => 'error', 'message' => 'Invalid action'];

switch ($action) {
    case 'getNotices':
        $response = [
            'status' => 'success',
            'data' => [
                ['id' => 1, 'title' => 'CIE Test 2 Schedule Released', 'date' => '2026-03-25', 'category' => 'Exam', 'important' => true],
                ['id' => 2, 'title' => 'Submission Deadline for Mini Project Phase 1', 'date' => '2026-03-30', 'category' => 'Submission', 'important' => true],
                ['id' => 3, 'title' => 'Attendance Threshold Guidelines for Mid-Term', 'date' => '2026-04-05', 'category' => 'General', 'important' => false]
            ]
        ];
        break;

    case 'getCalendar':
        $response = [
            'status' => 'success',
            'data' => [
                ['id' => 1, 'event' => 'CIE Activity 1 - Quiz & Assignments', 'date' => 'Feb 15 - Feb 25', 'status' => 'Completed'],
                ['id' => 2, 'event' => 'CIE Activity 2 - Lab Test & Presentation', 'date' => 'Mar 10 - Mar 20', 'status' => 'In Progress'],
                ['id' => 3, 'event' => 'CIE Activity 3 - Mini Project Review', 'date' => 'Apr 05 - Apr 15', 'status' => 'Upcoming']
            ]
        ];
        break;

    default:
        $response = ['status' => 'error', 'message' => 'Action not found'];
        break;
}

echo json_encode($response);
?>
