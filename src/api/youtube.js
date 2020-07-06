const chID = 'UCBgHS4OZb2DIqJldtWY4nrA';
const ytAPIKey = 'AIzaSyBZsxHOCBbGs2womZqz6hX4xvbX8wlA89s';
const liveVideoGET = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${chID}&eventType=live&maxResults=1&type=video&key=${ytAPIKey}`

export const getLatestLive = async () => {
    const url = liveVideoGET
    const res = await fetch(url, {
        method: 'GET',
    }).then(res => res.json())
    return res
}

export const getVideoDetails = (response) => {
    const [selectedItem] = response.items || [];
    if (selectedItem) {
        const { id, snippet } = selectedItem;
        return {
            category: snippet.liveBroadcastContent,
            videoId: id.videoId,
            title: snippet.title,
            description: snippet.description,
        }
    }
}
