function makeVisible(name) {
    var popup = document.getElementById('mypopup')
    popup.classList.toggle('show')

    for (const key in players) {
        if (players[key].name == name) {
            document.getElementById('pop-text').innerText = players[key].desc;
            document.getElementById('pop-img').innerHTML = players[key].img;
        }
    }
}


// The following function can be used to hide but not needed

// function makeInvisible() {
//     var popup = document.getElementById('mypopup')
//     popup.classList.toggle('hide')
// }

var players = [
    {
        name: "msd",
        desc: "Mahendra Singh Dhoni is an Indian professional cricketer who was captain of the Indian national cricket team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He is a right-handed wicket-keeper batsman.",
        img: "<img src= './assets/msd.png' alt='player' class='cont-image'>"
    },

    {
        name: "bhajji",
        desc: "Harbhajan Singh is a Member of Parliament, Rajya Sabha and a former Indian cricketer and cricket commentator who played for the Indian national cricket team. A specialist spin bowler, Singh played for India between 1998 and 2016.",
        img: "<img src= './assets/bhajji.jpg' alt='player' class='cont-image'>"
    },

    {
        name: "gambhir",
        desc: "Gautam Gambhir is an Indian politician and former cricketer, who has played all formats of the game. He is a current member of the Lok Sabha since 2019. He received the Padma Shri from the Government of India in 2019, the fourth highest civilian award in India",
        img: "<img src= './assets/gambhir.png' alt='player' class='cont-image'>"
    },

    {
        name: "munaf",
        desc: "Munaf Patel is a former Indian cricketer who played all formats of the game. He has also played for the West Zone in the Duleep Trophy and Gujarat, Mumbai cricket team and Maharashtra cricket team in domestic arena. In November 2018, he announced his retirement from cricket.",
        img: "<img src= './assets/munaf.jpg' alt='player' class='cont-image'>"
    },

    {
        name: "raina",
        desc: "Suresh Raina is a former Indian international cricketer. He occasionally served as stand-in captain for Indian men's national cricket team during the absence of the main captain. He played for Uttarpradesh in domestic cricket circuit.",
        img: "<img src= './assets/raina.jpg' alt='player' class='cont-image'>"
    },

    {
        name: "sehwag",
        desc: "Virender Sehwag is a former Indian cricketer. He represented India from 1999 to 2013. He played for Delhi and Haryana in Indian domestic cricket. He played as aggressive opening batsman throughout his playing days.",
        img: "<img src= './assets/sehwag.png' alt='player' class='cont-image'>"
    },

    {
        name: "sresanth",
        desc: "Shanthakumaran Nair Sreesanth is an Indian former cricketer and film actor who played all forms of the game. He is a right-arm fast-medium-pace bowler and a right-handed tail-ender batsman. In first class cricket, he played for Kerala.",
        img: "<img src= './assets/sresanth.jpg' alt='player' class='cont-image'>"
    },

    {
        name: "std",
        desc: "Sachin Ramesh Tendulkar AO BR is an Indian former international cricketer who captained the Indian national team. He is regarded as one of the greatest batsmen in the history of cricket.",
        img: "<img src= './assets/std.png' alt='player' class='cont-image'>"
    },

    {
        name: "vk",
        desc: "Virat Kohli is an Indian international cricketer and former captain of the India national cricket team. He plays for Delhi in domestic cricket and Royal Challengers Bangalore in the Indian Premier League as a right-handed batsman.",
        img: "<img src= './assets/vk.png' alt='player' class='cont-image'>"
    },

    {
        name: "yuvraj",
        desc: "Yuvraj Singh is a former Indian international cricketer who played in all formats of the game. He is an all-rounder who batted left-handed in the middle order and bowled slow left-arm orthodox, and is known for his aggressive batting style and all-round ability.",
        img: "<img src= './assets/yuvraj.png' alt='player' class='cont-image'>"
    },

    {
        name: "zaheer",
        desc: "Zaheer Khan is an Indian former professional cricketer who played all forms of the game for the Indian national team from 2000 till 2014. He is a fast-medium left-arm bowler. He was the second-most successful Indian pace bowler in Test cricket, behind Kapil Dev.",
        img: "<img src= './assets/zaheer.jpg' alt='player' class='cont-image'>"
    }
]