import self from "../img/Manassa.jpg"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"]; 
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Manassa",
    lastName: " Varshni S",
    initials: "mv", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Cloud Software Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by Coffee'
        },
        {
            emoji: '🌎',
            text: 'Based from INDIA'
        },
        {
            emoji: "💼",
            text: "Systems Engineer at TCS - IBM Cloud"
        },
        {
            emoji: "📧",
            text: "manassa1899@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://medium.com/@imanassa",
            icon: 'fa fa-medium',
            label: 'medium'
        },
        {
            link: "https://github.com/ManassaVarshni",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/manassavarshnis/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I am Manassa. I am a System Engineer at TCS, working as a contractor in IBM as a Cloud Storage Software Developer. I hold a Master's in Data Science from CIT, Coimbatore. ",
    job1: "Systems Engineer",
    job1data: "I have extensive experience in software development using the Go programming language within a Linux environment, coupled with hands-on expertise in deploying applications on IBM Cloud. I've adeptly managed Kubernetes clusters, ensuring seamless deployment while upholding code quality standards. Additionally, I've contributed to continuous delivery pipelines by developing Razee templates and actively participated in code reviews on GitHub, leveraging Git for version control. Working on Jira-tracked tickets with high velocity underscores my ability to deliver efficiently without compromising code quality.",
    job2: "Data Analyst",
    job2data: "I spearheaded the development and training of essential models for Corrosion Modeling utilizing Machine Learning techniques, predominantly in R Programming language. Subsequently, I seamlessly integrated these models into a user-friendly Web Application using R Shiny, effectively deploying it on Azure Cloud for accessibility and scalability. Moreover, I meticulously conducted Regression Testing for Connected Planning, ensuring its readiness for production deployment on our internal platform, guaranteeing optimal performance and reliability.",
    job3: "Data Analyst",
    job3data: "I've led the design and development efforts in creating Chatbots tailored for different Ophthalmic Departments, employing both Dialogflow and Rasa platforms. Leveraging these tools, I crafted conversational interfaces that catered specifically to the needs and workflows of each department, enhancing communication and efficiency within the respective teams.",

    skills:
        {
            proficientWith: ['Python', 'Go', 'R', 'Git', 'Docker', 'Kubernetes', 'Linux', 'Insomnia', 'Travis CI', 'Jira', 'SQL', 'IBM Cloud', 'VS Code', 'Excel', 'Dialogflow - GCP', 'R Shiny'],
            exposedTo: ['Ansible', 'Terraform', 'AWS']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'baking',
            emoji: '🍰'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'gardening',
            emoji: '🪴'
        },
        {
            label: 'travelling',
            emoji: '🚗'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    certifications: [
        {
            label: 'IBM Cloud Advocate V2 | IBM',
            emoji: '🔖'
        },
        {
            label: "Go - Complete Developer's Guide | Udemy",
            emoji: '🔖'
        },
        {
            label: 'Kubernetes for Absolute Beginners | Udemy ',
            emoji: '🔖'
        },
        {
            label: 'Docker for Absolute Beginners | Udemy',
            emoji: '🔖'
        },
        {
            label: 'Python Basics | Hackerrank',
            emoji: '🔖'
        },
        {
            label: 'Machine Learning and AI | IIT, Chennai',
            emoji: '🔖'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}