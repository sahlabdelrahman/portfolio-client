// Helper: get embed URL for known platforms (YouTube, Vimeo, etc.)

export const getEmbedUrl = (url?: string): string | null => {
    if (!url) return null;

    // YouTube
    const youtubeMatch = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (youtubeMatch) {
        return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    // Add other platforms here...

    // Default: just use url (make sure it's safe)
    return url;
};
