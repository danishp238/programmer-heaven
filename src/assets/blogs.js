import GlassomorphismForm from "/src/assets/blog-content/glassomorphism-form/glassmorphism-form.html?raw"
import GlassomorphismFormReal from "/src/assets/blog-content/glassomorphism-form/real-world-websites-using-glassmorphism.html?raw"
import GlassmorphismDemo from "/src/assets/blog-content/glassomorphism-form/glassomorphism-demo.html?raw"
import GlassomorphismFormMicro from "/src/assets/blog-content/glassomorphism-form/micro-interactions.html?raw"
import GlassomorphismNeuro from "/src/assets/blog-content/glassomorphism-form/glassomorphism-vs-neuro.html?raw"
import GlassomorphismBugs from "/src/assets/blog-content/glassomorphism-form/bugs.html?raw"
import GlassomorphismFun from "/src/assets/blog-content/glassomorphism-form/fun-facts.html?raw"
import TransparentText from "/src/assets/blog-content/2-transparent-text/2-transparent-text.html?raw"
import TransparentTextDemo from "/src/assets/blog-content/2-transparent-text/transparent-text-demo.html?raw"
import TransparentTextEnhance from "/src/assets/blog-content/2-transparent-text/enhance.html?raw"
import TransparentTextProblem from "/src/assets/blog-content/2-transparent-text/problem-solving-approaches.html?raw"
import TransparentTextRealWorld from "/src/assets/blog-content/2-transparent-text/real-world-examples.html?raw"
import TransparentTextFun from "/src/assets/blog-content/2-transparent-text/fun-facts.html?raw"
import IconsHoverEffect from "/src/assets/blog-content/4-icons-hover-effect/icons-hover-effect.html?raw"
import PuzzleGame from "/src/assets/blog-content/3-puzzle-game/3-puzzle-game.html?raw"
import PuzzleDemo from "/src/assets/blog-content/3-puzzle-game/puzzle-game-demo.html?raw"
import PuzzleEnhancements from "/src/assets/blog-content/3-puzzle-game/enhancements.html?raw"
import PuzzleFun from "/src/assets/blog-content/3-puzzle-game/fun-facts.html?raw"
import PuzzleProblem from "/src/assets/blog-content/3-puzzle-game/problem-solving.html?raw"
import PuzzleReal from "/src/assets/blog-content/3-puzzle-game/real-world-examples.html?raw"
import Matter from "/src/assets/blog-content/matterjs-design/matterjs.html?raw"
import MatterFun from "/src/assets/blog-content/matterjs-design/fun-facts.html?raw"
import MatterBeginner from "/src/assets/blog-content/matterjs-design/beginner-guide.html?raw"
import MatterPlanning from "/src/assets/blog-content/matterjs-design/planning.html?raw"
import MatterProblem from "/src/assets/blog-content/matterjs-design/problem-solving.html?raw"
import MatterReal from "/src/assets/blog-content/matterjs-design/real-world-examples.html?raw"



const blogs = [
  {
    id: 1,
    title: "Modern Glassmorphism Contact Form Using HTML & Tailwind CSS | Stylish Static Form Design",
    slug: "modern-glassmorphism-contact-form",
    image: "/images/blog1.png",
    excerpt: "In this guide, you'll learn how to build a beautiful glassmorphism-style login form using HTML, Tailwind CSS, and AOS scroll animation. This modern UI design is not only eye-catching but also responsive and smooth.",
    demo: GlassmorphismDemo, 
    content: GlassomorphismForm,
    related: [
      {
        slug: 'modern-glassmorphism-contact-form-real-world-examples',
        demo: GlassmorphismDemo,
        content: GlassomorphismFormReal
      },

      {
        slug: "modern-glassmorphism-contact-form-micro-interactions",
        demo: GlassmorphismDemo,
        content: GlassomorphismFormMicro
      },

      {
        slug: "modern-glassmorphism-contact-form-neurmorphism-comparison",
        demo: GlassmorphismDemo,
        content: GlassomorphismNeuro
      },

      {
        slug: "modern-glassmorphism-contact-form-bug-fixes",
        demo: GlassmorphismDemo,
        content: GlassomorphismBugs
      },

      {
        slug: "modern-glassmorphism-contact-form-fun-facts",
        demo: GlassmorphismDemo,
        content: GlassomorphismFun
      }
    ]
  },

  {
    id: 2,
    title: "How to Create a Transparent Text Effect with Tailwind CSS",
    slug: "transparent-text-effect",
    image: "/images/transparent-text.png",
    excerpt: "This tutorial teaches you how to achieve a beautiful transparent text overlay effect on a background image using Tailwind CSS. It's lightweight, responsive, and perfect for portfolios and hero sections.",
    demo: TransparentTextDemo,
    content: TransparentText,
    related: [
      {
        id: "transparent-text-enhancer",
        slug: "transparent-text-effect-enhance",
        demo: TransparentTextDemo,
        content: TransparentTextEnhance
      },

      {
        slug: "transparent-text-effect-real-world-examples",
        demo: TransparentTextDemo,
        content: TransparentTextRealWorld
      },

      {
        slug: "transparent-text-effect-fun-facts",
        demo: TransparentTextDemo,
        content: TransparentTextFun
      },

      {
        slug: "transparent-text-effect-problem-solving-approaches",
        demo: TransparentTextDemo,
        content: TransparentTextProblem
      },
    ]
  },

  {
    id: 3,
    title: "🧩 Build a Fun Drag-and-Drop Puzzle Game Using HTML, Tailwind CSS & JavaScript",
    slug: "drag-and-drop-puzzle-game",
    image: "/images/puzzle-game.png",
    excerpt: "Looking for a simple yet exciting project to level up your frontend skills? This drag-and-drop puzzle game is a great way to practice your knowledge of HTML, Tailwind CSS, and JavaScript.",
    content: PuzzleGame,
    related: [
      {
        slug: 'drag-and-drop-puzzle-game-fun-facts',
        demo: PuzzleDemo,
        content: PuzzleFun
      },
      {
        slug: 'drag-and-drop-puzzle-game-real-world-examples',
        demo: PuzzleDemo,
        content: PuzzleReal
      },
      {
        slug: 'drag-and-drop-puzzle-game-enhancements',
        demo: PuzzleDemo,
        content: PuzzleEnhancements
      },
      {
        slug: 'drag-and-drop-puzzle-game-debugging',
        demo: PuzzleDemo,
        content: PuzzleProblem
      }
    ]
  },

  {
    id: 3,
    title: "Crazy Neon Hover Effect on Icons",
    slug: 'icons-hover-effect',
    image: '/images/neon-icons-cover.png',
    excerpt: "Learn how to build an interactive, glowing icon grid using Tailwind CSS and Vanilla JavaScript. Perfect for beginners looking to explore hover effects, responsive design, and Font Awesome icons.",
    content: IconsHoverEffect,
  },

  {
    id: 4,
    title: "Awesome Design Using Matter.js",
    slug: 'awesome-matterjs-design',
    image: '/images/matterjs.png',
    excerpt: "Learn how to combine Tailwind CSS with Matter.js to build a transparent text effect over an animated physics-based background. This tutorial is perfect for beginners looking to make modern, interactive designs.",
    content: Matter,
    related: [
      {
        slug: 'awesome-matterjs-design-fun-facts',
        content: MatterFun
      },

      {
        slug: 'awesome-matterjs-design-beginners-guide',
        content: MatterBeginner
      },

      {
        slug: 'awesome-matterjs-design-problem-solving',
        content: MatterProblem
      },

      {
        slug: 'awesome-matterjs-design-planning',
        content: MatterPlanning
      },

      {
        slug: 'awesome-matterjs-design-real-world-examples',
        content: MatterReal
      },
    ],
  }
]

export default blogs