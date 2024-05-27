

fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(storyIds => {
    // Fetch details for each story
    storyIds.slice(0,5).forEach(storyId => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(response => response.json())
            .then(story => {
            console.log(story.title);
            const stories = document.querySelector(".stories")
    document.querySelector('h3').innerText=story.title
    document.querySelector('a').href="https://hacker-news.firebaseio.com/v0/item/${storyId}.json"
    });
    })
    })
