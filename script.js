// LOADING SCREEN 
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('fade-out');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});

// HAMBURGER MENU FUNCTION
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navbar.classList.toggle('expanded');
});

function toggleNotificationPopup() {
    const notificationIcon = document.querySelector('.notification-icon');
    notificationIcon.classList.toggle('active'); 
}

// SPOTLIGHT VIDEO LIST 
const videoList = [
    {ranking: '1 Spotlight', src: 'Video/spot1.mp4', title: 'The Joker 2', description: "The Joker dives even deeper into madness. This time, he's pushing every limit, keeping you on the edge with every twist. Watch now and see what happens when there's nothing left to lose.", iframeSrc: "https://www.youtube.com/embed/_OKAwz2MsJs?si=I4GhnUdEI0eN2jZQ"},
    {ranking: '2 Spotlight', src: 'Video/spot2.mp4', title: 'The Venom 3', description: "Tom Hardy returns as Eddie Brock, teaming up once again with the symbiote to face new threats, while exploring darker and more complex aspects of their relationship.", iframeSrc: "https://www.youtube.com/embed/HyIyd9joTTc?si=CgcwtTlVyd3qMgz3"},
    {ranking: '3 Spotlight', src: 'Video/spot3.mp4', title: 'The Outside', description: "Survive a brutal zombie apocalypse where the only rule is to stay alive. Will humanity find hope in the darkest of times?", iframeSrc: "https://www.youtube.com/embed/wN2qR_i7IAg?si=pSYcTCd3xtFJpELe"},
    {ranking: '4 Spotlight', src: 'Video/spot4.mp4', title: 'Deadpool 3', description: "Ryan Reynolds returns as Deadpool in Deadpool 3, diving into a multiverse adventure with chaotic humor, action, and the return of Hugh Jackman's Wolverine.", iframeSrc: "https://www.youtube.com/embed/73_1biulkYk?si=PWZEIaK0WWZXDgWQ"}
];

let currentIndex = 0;
let currentTrendingIndex = 0;

const videoRanking = document.getElementById('videoRanking');
const spotlightVideo = document.getElementById('spotlightVideo');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const trailerPopup = document.querySelector('.trailer-popup');
const backdropOverlay = document.querySelector('.video-overlay');
const videoDialog = document.getElementById('small-dialog');
const videoTrend = document.getElementById('videoDialog');

function updateVideo(index) {
    const video = videoList[index];
    videoRanking.textContent = video.ranking;
    spotlightVideo.src = video.src;
    videoTitle.textContent = video.title;
    videoDescription.textContent = video.description;
    videoDialog.querySelector('iframe').src = video.iframeSrc;
    videoTrend.querySelector('iframe').src = video.iframeSrc;
    spotlightVideo.load();
    spotlightVideo.play();
}

// SPOTLIGHT INTERACTIVE BUTTONS 
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % videoList.length;
    updateVideo(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + videoList.length) % videoList.length;
    updateVideo(currentIndex);
});

// TRAILER POP UP
trailerPopup.addEventListener('click', (event) => {
    event.preventDefault();
    prevButton.style.display = 'none';
    nextButton.style.display = 'none';

    videoDialog.classList.add('active');
    backdropOverlay.classList.add('active');
});

backdropOverlay.addEventListener('click', () => {
    prevButton.style.display = 'block';
    nextButton.style.display = 'block';

    videoDialog.classList.remove('active');
    backdropOverlay.classList.remove('active');
});

// TRENDING VIDEO LIST 
const trendingData = [
    { title: "The Joker 2", director: "Todd Phillips", releaseDate: "2024", plot: "Arthur Fleck (Joker) and Harley Quinn's complex relationship is explored, delving into mental illness and chaos, with a possible musical twist, featuring Lady Gaga.", imageSrc: "Images/trend1.jpg"},
    { title: "The Venom 3", director: "Kelly Marcel", releaseDate: "2024", plot: "Eddie Brock (Venom) faces a new challenge while struggling with the symbiote's dark side, exploring his place in the multiverse.", imageSrc: "Images/trend2.jpg"},
    { title: "The Outside", director: "Unknown", releaseDate: "2024", plot: "In a post-apocalyptic world overrun by zombies, survivors navigate the dangers of the undead while confronting their own human conflicts.", imageSrc: "Images/trend3.jpg"},
    { title: "Deadpool 3", director: "Shawn Levy", releaseDate: "2024", plot: "Deadpool teams up with Wolverine to fight new enemies, continuing the character's humorous, fourth-wall-breaking antics and his integration into the MCU.", imageSrc: "Images/trend4.jpg"},
    { title: "Despicable Me 4", director: "Kyle Balda", releaseDate: "2024", plot: "Gru and his Minions face off against a new villain in another wild, comedic adventure full of heartwarming moments.", imageSrc: "Images/trend5.jpg"},
    { title: "Beetlejuice 2", director: "Tim Burton", releaseDate: "2024", plot: "Beetlejuice returns to wreak havoc, with the Deetz family's next generation, including Lydia, now an adult, caught in his supernatural mischief.", imageSrc: "Images/trend6.jpg"}
];

document.querySelectorAll('.trendingItem').forEach((item, index) => {
    item.addEventListener('click', () => {
        const modal = document.getElementById("movieModal");
        modal.querySelector('#modalImage').src = trendingData[index].imageSrc; 
        modal.querySelector('#modalTitle').textContent = trendingData[index].title;
        modal.querySelector('#modalDirector').textContent = trendingData[index].director; 
        modal.querySelector('#modalReleaseDate').textContent = trendingData[index].releaseDate; 
        modal.querySelector('#modalDescription').textContent = trendingData[index].plot;
        modal.style.display = "flex";
    });
});

const watchTrailerBtn = document.getElementById("watchTrailerBtn");
const trailerModal = document.getElementById("trailerModal");
const overlay = document.querySelector(".overlay");

document.querySelectorAll('.trendingItem').forEach((item, index) => {
    item.addEventListener('click', () => {
        const modal = document.getElementById("movieModal");
        modal.querySelector('#modalImage').src = trendingData[index].imageSrc; 
        modal.querySelector('#modalTitle').textContent = trendingData[index].title;
        modal.querySelector('#modalDirector').textContent = trendingData[index].director; 
        modal.querySelector('#modalReleaseDate').textContent = trendingData[index].releaseDate; 
        modal.querySelector('#modalDescription').textContent = trendingData[index].plot;
        modal.style.display = "flex";
        overlay.style.display = "block"; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('movieModal');
    const moralStructureKey = 'hasSeenMoralStructure';

    if (localStorage.getItem(moralStructureKey)) {
        modal.style.display = "none";
    } else {
        modal.style.display = "flex";  
        localStorage.setItem(moralStructureKey, 'true'); 
    }
});

function resetMoralStructureView() {
    localStorage.removeItem('hasSeenMoralStructure');
}

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("movieModal").style.display = "none";
    trailerModal.style.display = "none";
    overlay.style.display = "none";
});

watchTrailerBtn.addEventListener("click", () => {
    trailerModal.style.display = "block";
    trailerModal.querySelector("iframe").src = "https://www.youtube.com/embed/YOUR_TRAILER_VIDEO_ID"; 
});

overlay.addEventListener("click", () => {
    document.getElementById("movieModal").style.display = "none";
    trailerModal.style.display = "none";
    overlay.style.display = "none";
    trailerModal.querySelector("iframe").src = ""; 
});

const exitTrailerBtn = document.getElementById("exitTrailerBtn");

exitTrailerBtn.addEventListener("click", () => {
    trailerModal.style.display = "none";
    trailerModal.querySelector("iframe").src = ""; 
    overlay.style.display = "none"; 
    document.getElementById("movieModal").style.display = "flex"; 
});

// SLIDE EFFECTS FOR TRENDING
const gridContainer = document.querySelector('.gridContainer');
let trendingItems = document.querySelectorAll('.trendingItem');

function slideToLeft() {
    trendingItems = document.querySelectorAll('.trendingItem');
    const numItemsToSlide = 1;
    const itemsToSlide = Array.from(trendingItems).slice(0, numItemsToSlide);

    itemsToSlide.forEach(item => {
        item.style.transition = "transform 0.5s ease";
        item.style.transform = "translate3d(-30%, 0, 0)";
    });
    currentTrendingIndex = (currentTrendingIndex + numItemsToSlide) % trendingItems.length;

    setTimeout(() => {
        itemsToSlide.forEach(item => {
            item.style.transition = "none";
            item.style.transform = "translate3d(0, 0, 0)";
            gridContainer.appendChild(item);
        });
    }, 500);
}
setInterval(slideToLeft, 5000);

// REGISTRATION TOGGLE FORMS
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}

// FORGOT PASSWORD TOGGLE FORMS
function toggleForgotPassword() {
    const loginForm = document.getElementById('loginForm');
    const forgotPassForm = document.getElementById('forgotPass');
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
    forgotPassForm.style.display = forgotPassForm.style.display === 'none' ? 'block' : 'none';
}