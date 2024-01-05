/** @type {import(‘tailwindcss’).Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
  extend: {
    backgroundImage: {
      'hero': "url('../src/img/hero-background-1.jpg')",
      'lava': "url('../src/img/scene-background.jpg')",
      'toprock': "url('../src/img/scene__top_rock-1.png')",
      'heroright': "url('../src/img/scene__hero-1 (1).png')",
      'rightrock': "url('../src/img/scene__center_rock_right-1 (1).png')",
      'leftrock': "url('../src/img/scene__center_rock_left.png')",
      'fireleftrock': "url('../src/img/scene__rock_left.svg')",
      'firerightrock': "url('../src/img/scene__rock_right.svg')",
      'middle': "url('../src/img/scene__graund.svg')",
      'leftElement': "url('../src/img/select__left_rock.png')",
      'rightElement': "url('../src/img/select__right_rock.png')",
      'bottomElement': "url('../src/img/heros-tabs-graund-1.jpg')",
      'beforeElement': "url('../src/img/hero__title_decor-1.svg')",
      'beforevideo': "url('../src/img/video-decor-top.svg')",
      'aftervideo': "url('../src/img/video-decor-bottom.svg')",
      'gradiantsec1': "url('../src/img/gradient-stripe-1.svg')",
      'gradiantstripe': "url('../src/img/gradient-stripe.svg')",
      'gradiantsec': "url('../src/img/graund-second-5.svg')",
      'slidertext': "url('../src/img/slider-text.svg')",
      'slideritemtop': "url('../src/img/slider__item_top.svg')",
      'slideritembot': "url('../src/img/slider__item_bottom.svg')",
      'roadmapback': "url('../src/img/roadmap-back-1.jpg')",
      'roadmapground': "url('../src/img/roadmap-ground-1.png')",
      'roadmapright': "url('../src/img/roadmap__right_rock.png')",
      'roadmapleft': "url('../src/img/roadmap__left_rock.png')",
      'cardsvg': "url('../src/img/card.svg')",
      'cart_shadow': "url('../src/img/cart-shadow.svg')",
      'behind-right': "url('../src/img/behind-right-rock.svg')",
      'photo-name': "url('../src/img/photo__name.svg')",
      'photo-rock': "url('../src/img/photo__rock.svg')",
      'faqs-rock': "url('../src/img/faqs-rocks.svg')",
      'footer-left': "url('../src/img/footer-left-rock.svg')",
      'footer-right': "url('../src/img/footer-right-rock.svg')",
      'footer-logo': "url('../src/img/footer-logo-line-mob.svg')",
      'cart-mob': "url('../src/img/card-mob-1.svg')",


      




    },

    keyframes: {
      animationslider: {
        
        'to': { transform:'translateX(0)'}
      },

      animationslidertop: {
        
            'to': { transform:'translateX(-4500px)'}
          },

      meteoanimtion: {
        '0%':{transform:'translateY(0px)'},
        '100%':{transform:'translateY(5px)'}

      }


    },
    // keyframes: {
    //   animationslidertop: {
        
    //     'to': { transform:'translateX(-4500px)'}
    //   }
    // },

    animation: {
      animationslider: 'animationslider 50s linear infinite',
      animationslidertop: 'animationslidertop 50s linear infinite',
      meteoanimtion: 'meteoanimtion 1s linear infinite alternate',
      meteoanimtion1: 'meteoanimtion 2s linear infinite alternate',
      meteoanimtion2: 'meteoanimtion 4s linear infinite alternate',
      meteoanimtion3: 'meteoanimtion 1.5s linear infinite alternate',
    },
    

  },
  },
  plugins: [],
  }