let story_url = ''

const story = document.getElementById('story')
const a = document.querySelectorAll('a')

fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // get the top 5 stories out of 500
        const storiesArray = data.slice(0,5);
        console.log(storiesArray)
        // loop through the values and create an array for each one with the title
        for(let i = 0; i < storiesArray.length; i++){
            let id = storiesArray[i]
            let story_url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
            fetch(story_url)
                .then(response => response.json())
                .then(data => {
                    a[i].href=data.url
                    a[i].innerText=data.title
        })
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    function refresh(){
        window.location.reload("Refresh")
    }


        // a href = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`


        // let topFive = data.slice(0, 5)
        // // URLs of each of the top 5 stories
        // let topUrl = `(https://hacker-news.firebaseio.com/v0/item/${topFive[0]}.json?print=pretty)`
        // or: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
        // let secondUrl = `(https://hacker-news.firebaseio.com/v0/item/${topFive[1]}.json?print=pretty)`
        // let thirdUrl = `(https://hacker-news.firebaseio.com/v0/item/${topFive[2]}.json?print=pretty)`
        // let fourthUrl = `(https://hacker-news.firebaseio.com/v0/item/${topFive[3]}.json?print=pretty)`
        // let fifthUrl = `(https://hacker-news.firebaseio.com/v0/item/${topFive[4]}.json?print=pretty)`
        // console.log("The top 5 stories are: ", topUrl, secondUrl, thirdUrl, fourthUrl, fifthUrl)
        // next: get the titles, maybe using a loop



