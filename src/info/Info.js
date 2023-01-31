import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"



export let colors = ["rgb(199, 103, 254)", "rgb(0, 0, 0)"];

export const info = {
    firstName: "Pedro",
    lastName: "Mateus",
    initials: "", 
    position: "Frontend Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '',
            text: ""
        },
        
        {
            emoji: "📧",
            text: "pedromateusamdev@gmail.com"
        }
    ],
    socials: [
     
      
        {
            link: "https://github.com/PedroMateusDev",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/pedromateusdevwork/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

    ],
    bio: "Hello! I'm Pedro. I'm a Software Developer.I'm an independent and self-motivated learner, I can balance the need of users and businesses to understand their pain points and how I can contribute as a Front-end developer and solve their problems.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'github', 'tailwind css', 'html', 'css', 'figma' , "git", "photoshop"],
        }
    ,
    hobbies: [
        {
            label: 'Surf Teacher',
            emoji: '🏄'
        },
        {
            label: "Hiking",
            emoji: '🥾'
        },
        {
            label: 'Drawing',
            emoji: '✏️ '
        },

    ],
    portfolio: [ 
        {
            title: "Company Control Interface",
            descri: "A responsive interface with a modern look. This app shows several different types of data in different ways. From tables to Charts. It uses dummy data to simulate the data that should be received from an API server. Working on making it fully responsive soon. Built with: React and TailWind CSS",
            live: "http://company.pedromateusdev.com/", 
            source: "https://github.com/PedroMateusDev/Company-Interface", 
            image: mock1
        },
        {
            title: "NZS SURFSCHOOL WEBSITE",
            descri: "This Website was builtm for the surf school where I was working. The objective was to give a new look to the web presence of the school. It is a modern and simple design but has everything needed. It was built with WordPress",
            live: "http://surfschool.pedromateusdev.com/",
            image: mock2
        },
        {
            title: "Movie Search",
            descri: "A simple demonstration of the use of an API. This simple app receives and displays the data related to the search of the user. Fully responsive, built with React",
            live: "http://movieapi.pedromateusdev.com/",
            source: "https://github.com/PedroMateusDev/Movie-Api",
            image: mock3
        },
        {
            title: "Fitness App",
            descri: "This is the project I'm working on at the moment. The idea is to show a random workout based on the muscles chosen by the user",
            image: mock4
        },
        
    ]
}