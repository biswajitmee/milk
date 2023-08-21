const particaleConfig = {
    "particles": {
      "number": {
        "value": 34,
        "density": {
          "enable": true,
          "value_area": 240.5118091298284
        }
      },
      "color": {
        "value": "#ffd100"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 1,
          "color": "#aaaaaa"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.04008530152163807,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1.2993235396821523,
          "opacity_min": 0,
          "sync": true
        }
      },
      "size": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 0.3,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3.206824121731046,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 6974.8424647650245,
          "rotateY": 6974.8424647650245
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 194.89853095232286,
          "line_linked": {
            "opacity": 0.040475670074718105
          }
        },
        "bubble": {
          "distance": 24.362316369040357,
          "size": 31.96803196803197,
          "duration": 0.23976023976023975,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

export default particaleConfig