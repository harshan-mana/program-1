async function shortenUrl() {
    const longUrl = document.getElementById('longUrl').value;
    const resultBox = document.getElementById('result');
    const shortLinkAnchor = document.getElementById('shortLink');

    if (!longUrl) {
        alert("Please paste a URL first!");
        return;
    }

    try {
        
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
        if (response.ok) {
            const data = await response.text();
            shortLinkAnchor.href = data;
            shortLinkAnchor.innerText = data;
            resultBox.style.display = 'block';
        } else {
            alert("Error shortening URL. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong.");
    }
}

