<?php
// SweetAlert2 Helper Configurations & Functions

function showAlert($title, $text, $icon = 'success', $redirectUrl = null) {
    echo "<script>
        document.addEventListener('DOMContentLoaded', function() {
            Swal.fire({
                title: '" . addslashes($title) . "',
                text: '" . addslashes($text) . "',
                icon: '{$icon}',
                confirmButtonColor: '#135d66',
                background: '#0c2d31',
                color: '#ffffff'
            }).then(function() {
                " . ($redirectUrl ? "window.location.href = '{$redirectUrl}';" : "") . "
            });
        });
    </script>";
}
?>
