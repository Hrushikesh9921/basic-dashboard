// List of image URLs to rotate
const imageUrls = ['1.png', '2.png', '3.png'];

// Get reference to the image container
const imageContainer = document.getElementById('image-container');

let currentIndex = 0;

// Function to load and rotate images
function rotateImages() {
    // Create new image element
    const img = new Image();
    img.src = imageUrls[currentIndex];
    img.classList.add('image-item');

    // Resize images to fit the section
    img.onload = function() {
        if (img.width > imageContainer.offsetWidth) {
            const scaleFactor = imageContainer.offsetWidth / img.width;
            img.width = imageContainer.offsetWidth;
            img.height = img.height * scaleFactor;
        }
    };

    // Clear previous image(s) if any
    imageContainer.innerHTML = '';
    
    // Append the new image to the container
    imageContainer.appendChild(img);

    // Increment index or reset to 0
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

// Call rotateImages function every 5 seconds
setInterval(rotateImages, 5000);

// Initial call to rotateImages
rotateImages();



// Get reference to the leaderboard container
const leaderboardContainer = document.getElementById('leaderboard');

// Array of image filenames
const imageFiles = ['1.png', '2.png', '3.png'];

// Function to create podium item
function createPodiumItem(place, imageFile) {
    // Create podium item container
    const podiumItem = document.createElement('div');
    podiumItem.classList.add('podium-item');

    // Determine class based on place
    let placeClass;
    switch (place) {
        case 1:
            placeClass = 'first-place';
            break;
        case 2:
            placeClass = 'second-place';
            break;
        case 3:
            placeClass = 'third-place';
            break;
        default:
            placeClass = '';
    }
    podiumItem.classList.add(placeClass);

    // Create circle div
    const circleDiv = document.createElement('div');
    circleDiv.classList.add('circle');

    // Create image element
    const img = document.createElement('img');
    img.src = imageFile;
    img.alt = `Person ${place}`;
    img.classList.add('person-image');

    // Append image to circle div
    circleDiv.appendChild(img);

    // Create place text element
    const placeText = document.createElement('div');
    placeText.classList.add('place-text');
    placeText.textContent = '## ' + place  + ' ##'; // Add suffix

    // Append circle and place text to podium item
    podiumItem.appendChild(circleDiv);
    podiumItem.appendChild(placeText);

    return podiumItem;
}

// Function to add podium items to leaderboard
// function addPodiumItems() {
//     let podiumItem;
//     for (let i = 0; i < imageFiles.length; i++) {
//         // const podiumItem = createPodiumItem(i + 1, imageFiles[i]);
//         if (i === 0){
//             const podiumItem = createPodiumItem(2, imageFiles[2]);
//         } else if (i === 1){
//             const podiumItem = createPodiumItem(1 , imageFiles[1]);
//         }else if (i === 2){
//             const podiumItem = createPodiumItem(3 , imageFiles[3]);
//         }
//         leaderboardContainer.appendChild(podiumItem);
//     }
// }

function addPodiumItems() {
    let podiumItem;
    for (let i = 0; i < imageFiles.length; i++) {
        if (i === 0) {
            podiumItem = createPodiumItem(2, imageFiles[2]);
        } else if (i === 1) {
            podiumItem = createPodiumItem(1, imageFiles[1]);
        } else if (i === 2) {
            podiumItem = createPodiumItem(3, imageFiles[0]);
        }
        leaderboardContainer.appendChild(podiumItem);
    }
}

// Call function to add podium items
addPodiumItems();

// Get reference to the tbody element
const tbody = document.querySelector('.table-container tbody');

// Sample data for the table
const tableData = [
    { rank: 1, name: 'John Doe', caloriesBurned: 1500 },
    { rank: 2, name: 'Jane Smith', caloriesBurned: 1400 },
    { rank: 3, name: 'Bob Johnson', caloriesBurned: 1300 },
    { rank: 4, name: 'Bob Johnson', caloriesBurned: 800 },
    { rank: 5, name: 'Bob Johnson', caloriesBurned: 700 },
    { rank: 6, name: 'Bob Johnson', caloriesBurned: 600 },
    { rank: 7, name: 'Bob Johnson', caloriesBurned: 500 },
    { rank: 8, name: 'Bob Johnson', caloriesBurned: 400 },
    // Add more sample data as needed
];

// Function to add rows to the table
function addRowsToTable() {
    tableData.forEach(data => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.rank}</td>
            <td>${data.name}</td>
            <td>${data.caloriesBurned}</td>
        `;
        tbody.appendChild(row);
    });
}

// Call the function to add rows to the table
addRowsToTable();

// Function to reload the page
function reloadDashboard() {
    location.reload();
}

// Reload the dashboard every 30 seconds
setInterval(reloadDashboard, 30000);
