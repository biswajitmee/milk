import Matter from 'matter-js';

const MatterConfigure = () => {
  try {
    if (typeof MatterWrap !== 'undefined') {
      Matter.use('matter-wrap');
    } else {
      Matter.use(require('matter-wrap'));
    }
  } catch (e) {
    // could not require the plugin or install needed
  }

  var Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create(),
      world = engine.world;

  // create renderer
  var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
          width: 800,
          height: 600,
          showAngleIndicator: true
      }
  });

  Render.run(render);

  // create runner
  var runner = Runner.create();
  Runner.run(runner, engine);

 
  

// add bodies
var stack = Composites.stack(20, 20, 20, 5, 0, 0, function(x, y) {
    return Bodies.circle(x, y, Common.random(10, 20), { friction: 0.00001, restitution: 1.0, density: 0.001 }); // Update restitution to 1.0
});


Composite.add(world, stack);
  
  Composite.add(world, [
    //   Bodies.rectangle(200, 0, 700, 20, { isStatic: true, angle: Math.PI * 0.06, render: { fillStyle: '#060a19' } }),
      Bodies.rectangle(200, 350, 400, 20, { isStatic: true, angle: -Math.PI * 0.06, render: { fillStyle: '#00FF66' } }),
      Bodies.rectangle(540, 480, 300, 20, { isStatic: true, angle: Math.PI * 0.04, render: { fillStyle: '#00FF66' } })
  ]);




  const wallThickness = 20; // Adjust this value as needed

  Composite.add(world, [
      // Top wall
      Bodies.rectangle(render.options.width / 2, -wallThickness / 2, render.options.width, wallThickness, { isStatic: true }),
      // Bottom wall
      Bodies.rectangle(render.options.width / 2, render.options.height + wallThickness / 2, render.options.width, wallThickness, { isStatic: true }),
      // Left wall
      Bodies.rectangle(-wallThickness / 2, render.options.height / 2, wallThickness, render.options.height, { isStatic: true }),
      // Right wall
      Bodies.rectangle(render.options.width + wallThickness / 2, render.options.height / 2, wallThickness, render.options.height, { isStatic: true })
  ]);







  // add mouse control
  var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
              stiffness: 0.2,
              render: {
                  visible: false
              }
          }
      });

  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, Composite.allBodies(world));

  // wrapping using matter-wrap plugin
  for (var i = 0; i < stack.bodies.length; i += 1) {
      stack.bodies[i].plugin.wrap = {
          min: { x: render.bounds.min.x, y: render.bounds.min.y },
          max: { x: render.bounds.max.x, y: render.bounds.max.y }
      };
  }

  // context for MatterTools.Demo




  return {
      engine: engine,
      runner: runner,
      render: render
  };
};

export default MatterConfigure;
