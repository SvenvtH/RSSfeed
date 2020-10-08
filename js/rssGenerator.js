const textAreaAdjust = (element) => {
    element.style.height = "1px";
    element.style.height = (25 + element.scrollHeight) + "px";
}

const generateRSS = () => {
    // Find values
    const songTitel = document.getElementById("song-title");
    const songId = document.getElementById("song-id");
    const songDescription = document.getElementById("song-desc");
    const songDuration = document.getElementById("song-duration");
    const songFileName = document.getElementById("song-file");
    const outputArea = document.getElementById("output");
    const copyButton = document.getElementById("copy-button");

    if (songTitel.value && songId.value && songDescription.value && songDuration.value && songFileName.value) {
        let output = `<item>
    <guid>${songId.value}</guid>
    <title>${songTitel.value}</title>
    <description>${songDescription.value}</description>
    <itunes:duration>${songDuration.value}</itunes:duration>
    <enclosure url="https://svenvth.github.io/RSSfeed/mp3/${songFileName.value}.mp3" type="audio/mpeg" />
</item>`;
        outputArea.style = "visibility: visible;"
        copyButton.style = "visibility: visible;"
        outputArea.value = output;
        textAreaAdjust(outputArea);
    }
}