import bodyDetect from "./assets/body-detect.png";
import chattingApp from "./assets/chatting-app.png";
import covidTracker from "./assets/covid-tracker.png";
import logger from "./assets/logger.png";
import mealprep from "./assets/mealprep.png";
import nyspot from "./assets/nyspot.png";
import penbox from "./assets/penbox.png";
import postdraw from "./assets/post-drawing.png";
import sybb from "./assets/sybb.png";
import picloadfeed from "./assets/picload.JPG";
import deardiary from "./assets/deardiary.png";
import ml from "./assets/ml.JPG";
import recordself from "./assets/recordself.png";
import perlinnoise from "./assets/perlinnoise.png";
import bouncingball from "./assets/bouncingball.png";
import kittycrossing from "./assets/kittycrossing.png";
import collatzconjecture from "./assets/collatzconjecture.png";
import chattingAppGif from "./assets/video_trim/chatting.mp4";
import covidTrackerGif from "./assets/video_trim/covid.mp4";
import bodyDetectGif from "./assets/video_trim/body-detect.mp4";
import mealprepGif from "./assets/video_trim/mealprep.mp4";
import nyspotGif from "./assets/video_trim/nyspot.mp4";
import penboxGif from "./assets/video_trim/penbox.mp4";
import postdrawingGif from "./assets/video_trim/postdrawing.mp4";
import sybbGif from "./assets/video_trim/sybb.mp4";
import picloadfeedGif from "./assets/video_trim/picload.MOV";
import mlGif from "./assets/video_trim/ml.MOV";
import loggerGif from "./assets/video_trim/logger.mp4";
import bouncingballGif from "./assets/video_trim/bouncingball.mp4";
import deardiaryGif from "./assets/video_trim/deardiary.mp4";
// import perlinnoiseGif from "./assets/video_trim/perlinnoise.mp4";
// import recordselfGif from "./assets/video_trim/recordself.mp4";
// import collatzconjectureGif from "./assets/video_trim/collatzconjecture.mp4";

export const projectArr = [
  {
    image: kittycrossing,
    name: "Kitty crossing",
    srcCode: "",
    demo: "",
    description:
      "Built with React.js. Implemented Animal Crossing API.  Banking data and furniture position are real time hosted on Firebase, chatbot is hosted on Heroku.",
    gif: "https://www.youtube.com/embed/JPZQ0dwz1C4?autoplay=1&mute=0&enablejsapi=1",
  },
  {
    image: picloadfeed,
    name: "Picload Feed",
    srcCode: "",
    demo: "",
    description: "Built with React.js. Images, captions and messages are hosted on Firebase.",
    gif: picloadfeedGif,
  },
  {
    image: ml,
    name: "This is your...",
    srcCode: "https://github.com/shinyiho/training-model-template",
    demo: "https://shinyiho.github.io/training-model-template/test",
    description: "Powered by Teachable Machine",
    gif: mlGif,
  },
  {
    image: bodyDetect,
    name: "Body Detect",
    srcCode: "https://github.com/shinyiho/body-detection",
    demo: "https://shinyiho.github.io/body-detection/",
    description: "Powered by poseNet",
    gif: bodyDetectGif,
  },
  {
    image: chattingApp,
    name: "Chatting App",
    srcCode: "https://github.com/shinyiho/chatting-app",
    demo: "https://reat-chatting-app.herokuapp.com/#/",
    description: "This is a practice built with React.js using Socket.IO. Server is hosted on Heroku.",
    gif: chattingAppGif,
  },
  {
    image: covidTracker,
    name: "Covid Tracker",
    srcCode: "https://github.com/shinyiho/covid-19-tracker",
    demo: "https://shinyiho.github.io/covid-19-tracker/",
    description: "Built with React.js.",
    gif: covidTrackerGif,
  },
  {
    image: deardiary,
    name: "Dear Diary",
    srcCode: "https://github.com/shinyiho/dear-diary",
    demo: "https://dear-diary-react-client-server.herokuapp.com/",
    description: "Built with React.js. Server is hosted on Heroku with Heroku Postgres.",
    gif: deardiaryGif,
  },
  {
    image: sybb,
    name: "SYBB",
    srcCode: "https://github.com/shinyiho/sybb",
    demo: "https://shinyiho.github.io/sybb/",
    description: "",
    gif: sybbGif,
  },
  {
    image: perlinnoise,
    name: "perlin noise",
    srcCode: "https://github.com/shinyiho/perlin-noise",
    demo: "https://shinyiho.github.io/perlin-noise/",
    description: "",
    gif: "https://www.youtube.com/embed/DnPJIKb34xQ?autoplay=1&mute=0&enablejsapi=1",
  },
  {
    image: postdraw,
    name: "Post It",
    srcCode: "https://github.com/shinyiho/post-drawing",
    demo: "https://post-drawing.herokuapp.com/",
    description: "I made this Scratch book to practice hosting file in the server.",
    gif: postdrawingGif,
  },
  {
    image: bouncingball,
    name: "Bouncing ball",
    srcCode: "https://github.com/shinyiho/p5_bouncing_ball",
    demo: "https://shinyiho.github.io/p5_bouncing_ball/",
    description: "This is a practice using p5!",
    gif: bouncingballGif,
  },
  {
    image: nyspot,
    name: "NY Spot",
    srcCode: "https://github.com/shinyiho/where-to-go",
    demo: "https://shinyiho.github.io/where-to-go/",
    description: "",
    gif: nyspotGif,
  },
  {
    image: penbox,
    name: "Pen Box",
    srcCode: "https://github.com/shinyiho/penbox",
    demo: "https://shinyiho.github.io/penbox/",
    description: "",
    gif: penboxGif,
  },
  {
    image: mealprep,
    name: "Meal Prep",
    srcCode: "https://github.com/shinyiho/meal-prep",
    demo: "https://shinyiho.github.io/meal-prep/",
    description: "Do the grocery in an efficient way.",
    gif: mealprepGif,
  },
  {
    image: collatzconjecture,
    name: "collatz conjecture",
    srcCode: "https://github.com/shinyiho/collatz-conjecture",
    demo: "",
    description: "",
    gif: "https://www.youtube.com/embed/_rYq3ksdb7g?autoplay=1&mute=1&enablejsapi=1",
  },
  {
    image: recordself,
    name: "Filter Set",
    srcCode: "https://github.com/shinyiho/js-30-challenge/tree/master/DAY19",
    demo: "",
    description: "",
    gif: "https://www.youtube.com/embed/aD3-MMxXDgY?autoplay=1&mute=1&enablejsapi=1",
  },
  {
    image: logger,
    name: "Financial Logger",
    srcCode: "https://github.com/shinyiho/finance-logger",
    demo: "https://shinyiho.github.io/finance-logger/public/",
    description: "This is a practice using Typescript!",
    gif: loggerGif,
  },
];
