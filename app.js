document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: "smooth"
            });
        });
    });
});


    const btn = document.getElementById('btn');
    const body = document.body;

    btn.addEventListener('click' , () =>{
        body.classList.toggle('dark-mode');

        if(body.classList.contains('dark-mode')){
            btn.textContent = 'Light Mode';
        } else {
            btn.textContent = 'dark mode';
                }
    });

    // content assemble
    

    // anime.js animation

    anime({
        targets: '#content',
        opacity: [0, 1],    // Fade in effect
        translateY: [-20, 0], // Move from -20px (upwards) to its original position
        delay: 4,        // Start the animation after 4000ms (4 seconds)
        duration: 1000,     // Duration of the animation (1 second)
        easing: 'easeOutQuad' // Easing function for smooth animation
    });

    const animations = [
    
        {
            targets:'#box01',
            height:'3%',

        },
        {
            targets:'#box02',
            height:'6%',
        },
        {
            targets:'#box03',
            height:'9%',
        },
        {
            targets:'#box04',
            height:'12%',
        },
        {
            targets:'#box05',
            height:'15%',
        },
        {
            targets:'#box06',
            height:'18%',
        },
        {
            targets:'#box07',
            height:'21%',
        },
        {
            targets:'#box08',
            height:'24%',
        },
        {
            targets:'#box09',
            height:'27%',
        },
        {
            targets:'#box10',
            height:'30%',
        },
        {
            targets:'#box11',
            height:'33%',
        },
        {
            targets:'#box12',
            height:'36%',
        },
        {
            targets:'#box13',
            height:'39%',
        },
        {
            targets:'#box14',
            height:'42%',
        }, {
            targets:'#box15',
            height:'45%',
        }, {
            targets:'#box16',
            height:'48%',
        }, {
            targets:'#box17',
            height:'51%',
        }, {
            targets:'#box18',
            height:'54%',
        }, {
            targets:'#box19',
            height:'57%',
        }, {
            targets:'#box20',
            height:'60%',
        }, {
            targets:'#box21',
            height:'63%',
        }, {
            targets:'#box22',
            height:'66%',
        }, {
            targets:'#box23',
            height:'69%',
        }, {
            targets:'#box24',
            height:'72%',
        }, {
            targets:'#box25',
            height:'75%',
        }, {
            targets:'#box26',
            height:'78%',
        }, {
            targets:'#box27',
            height:'81%',
        },
        {
            targets:'#box28',
            height:'84%',
        },
        {
            targets:'#box55',
            height:'3%',
        },
        {
            targets:'#box54',
            height:'6%',
        },
        {
            targets:'#box53',
            height:'9%',
        },
        {
            targets:'#box52',
            height:'12%',
        },
        {
            targets:'#box51',
            height:'15%',
        },
        {
            targets:'#box50',
            height:'18%',
        },
        {
            targets:'#box49',
            height:'21%',
        },
        {
            targets:'#box48',
            height:'24%',
        },
        {
            targets:'#box47',
            height:'27%',
        },
        {
            targets:'#box46',
            height:'30%',
        },
        {
            targets:'#box45',
            height:'33%',
        },
        {
            targets:'#box44',
            height:'36%',
        },
        {
            targets:'#box43',
            height:'39%',
        }, {
            targets:'#box42',
            height:'42%',
        }, {
            targets:'#box41',
            height:'45%',
        }, {
            targets:'#box40',
            height:'48%',
        }, {
            targets:'#box39',
            height:'51%',
        }, {
            targets:'#box38',
            height:'54%',
        }, {
            targets:'#box37',
            height:'57%',
        }, {
            targets:'#box36',
            height:'60%',
        }, {
            targets:'#box35',
            height:'63%',
        }, {
            targets:'#box34',
            height:'66%',
        }, {
            targets:'#box33',
            height:'69%',
        }, {
            targets:'#box32',
            height:'72%',
        }, {
            targets:'#box31',
            height:'75%',
        }, {
            targets:'#box30',
            height:'78%',
        },
        {
            targets:'#box29',
            height:'81%',
        },
    ];

    // Loop through the array and create animations
animations.forEach(config => {
    anime({
        ...config,
        easing: 'easeInOutQuad', // Common easing function
        direction:'alternate',
        loop:true,
        easing: 'easeInOutQuad'
    });
});

