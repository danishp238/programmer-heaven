export function initMatterjs () {

    const container = document.getElementById("effect");
    const width = container.clientWidth;
    const height = container.clientHeight;


    const Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body,
        Events = Matter.Events;

    // Create engine
    const engine = Engine.create();
    const world = engine.world;

    // Create renderer
    const render = Render.create({
        element: container,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false,
            background: '#222'
        }
    });

    Render.run(render);
    Engine.run(engine);

    // Create ground
    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 50, window.innerWidth, 100, {
        isStatic: true,
        render: { fillStyle: '#666' }
    });

    // Create slope slides
    const slides = [
        Bodies.rectangle(400, 500, 400, 20, {
            isStatic: true,
            angle: -0.5,
            render: { fillStyle: '#888' }
        }),
        Bodies.rectangle(800, 400, 400, 20, {
            isStatic: true,
            angle: 0.5,
            render: { fillStyle: '#888' }
        }),
        Bodies.rectangle(1200, 300, 400, 20, {
            isStatic: true,
            angle: -0.4,
            render: { fillStyle: '#888' }
        })
    ];

    // Add bodies to world
    World.add(world, [ground, ...slides]);

    // Function to add balls
    function dropBalls() {
        for (let i = 0; i < 30; i++) {
            const ball = Bodies.circle(300 + Math.random() * 800, -100 - Math.random() * 500, 15, {
                restitution: 0.6,
                friction: 0.05,
                density: 0.004,
                render: { fillStyle: '#f5f5f5' }
            });
            World.add(world, ball);
        }
    }

    // Drop balls at start
    dropBalls();

    // Drop more balls every 3 seconds
    setInterval(dropBalls, 1000);

}
