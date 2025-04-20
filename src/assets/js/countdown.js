document.addEventListener('DOMContentLoaded', function() {
    // Only run on pages with the countdown element
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;

    // Countdown timer functionality
    let timeLeft = 225; // 3:45 in seconds
    const timerDisplay = document.getElementById('countdown');
    
    function updateCountdown() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        } else {
            // Reset timer and move to next song
            timeLeft = 225;
            updateCountdown();
            rotatePlaylist();
        }
    }
    
    // Start the countdown
    updateCountdown();
    
    // Playlist rotation functionality
    const playlistItems = document.querySelectorAll('.playlist-item');
    let currentSongIndex = 0;
    
    function rotatePlaylist() {
        // Remove active class from all items
        playlistItems.forEach(item => item.classList.remove('active'));
        
        // Move to next song
        currentSongIndex = (currentSongIndex + 1) % playlistItems.length;
        
        // Add active class to current song
        playlistItems[currentSongIndex].classList.add('active');
        
        // Update current song display
        const songName = playlistItems[currentSongIndex].querySelector('.song-name').textContent;
        const [title, artist] = songName.split(' - ');
        
        document.querySelector('.song-title').textContent = title;
        document.querySelector('.song-artist').textContent = artist;
    }
    
    // Play/Pause button functionality
    const playPauseButton = document.querySelector('.play-pause');
    if (playPauseButton) {
        playPauseButton.addEventListener('click', function() {
            if (this.textContent === 'Pause') {
                this.textContent = 'Play';
                // Pause countdown
                clearTimeout(window.countdownTimeout);
            } else {
                this.textContent = 'Pause';
                // Resume countdown
                updateCountdown();
            }
        });
    }
    
    // Volume control functionality
    const volumeSlider = document.querySelector('.volume-slider');
    const volumeIcon = document.querySelector('.volume-icon');
    
    if (volumeSlider && volumeIcon) {
        volumeSlider.addEventListener('input', function() {
            const volume = this.value;
            
            // Update volume icon based on level
            if (volume == 0) {
                volumeIcon.textContent = '🔇';
            } else if (volume < 50) {
                volumeIcon.textContent = '🔉';
            } else {
                volumeIcon.textContent = '🔊';
            }
        });
    }
    
    // Click on playlist items to change song
    playlistItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            playlistItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update current song display
            const songName = this.querySelector('.song-name').textContent;
            const [title, artist] = songName.split(' - ');
            
            document.querySelector('.song-title').textContent = title;
            document.querySelector('.song-artist').textContent = artist;
            
            // Reset countdown
            timeLeft = 225;
            updateCountdown();
            
            // Update current song index
            currentSongIndex = index;
        });
    });
}); 