/* =========================================
   Panther Cast - Share Button Logic
   Developer: Ayush Tiwari | Panthera Store
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Share button ko HTML se dhoondho
    const shareButton = document.getElementById('shareButton');

    if (shareButton) {
        shareButton.addEventListener('click', async () => {
            // Web Share API check (Mobile phones ke liye)
            if (navigator.share) {
                try {
                    await navigator.share({
                        title: 'Panther Cast - HD Screen Mirroring',
                        text: 'Bhai ye mast app hai! Apne phone ko direct TV par cast karo with internal audio. No ads, No lag. Developed by Panthera Store. Try kar!',
                        url: window.location.href // Automagically tumhari website ka link le lega
                    });
                    console.log('Successfully shared Panther Cast!');
                } catch (error) {
                    console.error('Error sharing:', error);
                }
            } else {
                // Fallback (PC ya purane browsers ke liye jahan direct share nahi hota)
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard! Paste it anywhere to share with your friends.\n\nLink: ' + window.location.href);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                    alert('Failed to copy link. Please manually copy the URL from your browser.');
                }
            }
        });
    }
});