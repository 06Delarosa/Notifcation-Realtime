// Sample notifications array (normally, this would be fetched from a server)
let notifications = [
    { id: 1, text: "New comment: 'Great post!'", read: false },
    { id: 2, text: "New follower: John Doe", read: false },
    { id: 3, text: "System update available.", read: false }
];

// Function to update the notification count
function updateNotificationCount() {
    const notificationCount = document.getElementById('notificationCount');
    notificationCount.textContent = notifications.filter(notification => !notification.read).length;
}

// Function to display the notifications in the dropdown
function displayNotifications() {
    const dropdown = document.getElementById('notificationDropdown');
    dropdown.innerHTML = ''; // Clear the dropdown

    if (notifications.length === 0) {
        dropdown.innerHTML = '<div class="loading">No notifications available</div>';
        return;
    }

    notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.classList.add('notification-item');
        
        const notificationText = document.createElement('p');
        notificationText.textContent = notification.text;
        
        // Mark the notification as read when clicked
        notificationItem.addEventListener('click', () => {
            notification.read = true;
            displayNotifications(); // Re-render notifications
            updateNotificationCount(); // Update notification count
        });

        notificationItem.appendChild(notificationText);
        dropdown.appendChild(notificationItem);
    });
}

// Simulating real-time notifications using setInterval
function addRealTimeNotification() {
    const newNotification = { 
        id: notifications.length + 1, 
        text: `New notification #${notifications.length + 1}`, 
        read: false 
    };
    notifications.push(newNotification);
    
    displayNotifications(); // Re-render notifications
    updateNotificationCount(); // Update notification count
}

// Initialize the notification dropdown
displayNotifications();
updateNotificationCount();

// Simulate adding new notifications every 10 seconds
setInterval(addRealTimeNotification, 10000);
