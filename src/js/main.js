const v = document.querySelector('.hero>div:nth-of-type(1)');
const hero1 = document.querySelector('.hero>div:nth-of-type(2)');
const hero2 = document.querySelector('.hero>div:nth-of-type(3)');
const hero3 = document.querySelector('.hero>div:nth-of-type(4)');
const ground = document.querySelector('.ground')
const banner = document.querySelector('.banner')
const meteo = document.querySelector('.meteo')
const firehero = document.querySelector('.fire_hero')
const firebanner = document.querySelector('.fire_banner')
const walls = document.querySelectorAll('.walls')
const next = document.querySelector('.next_arrow')
const prev = document.querySelector('.prev_arrow')
const slider_3d = document.querySelector('._3d_slider')

const _main = document.querySelector('main')
const _boxShadow = document.querySelector('.boxshadow');
const shadowop = document.querySelector('.shadowop')





_main.addEventListener('scroll' , () => {


    let temp =_main.scrollTop
    // console.log(temp/5)
    
    shadowop.style.opacity = temp/250

    hero1.style.transform = 'translateY('+temp/1.3+'px)'
    hero2.style.transform = 'translateY('+temp/1.3+'px)'
    hero3.style.transform = 'translateY('+temp/1.3+'px)'
    ground.style.transform = 'translateY('+temp/1.3+'px)'
    banner.style.transform = 'translateY('+temp/1.5+'px)'
    meteo.style.transform = 'translateY('+temp/3+'px)'
    _boxShadow.style.transform = 'translateY(-'+temp/4+'px)'
    firehero.style.transform = 'translateY(-'+temp/8+'px)'
    firebanner.style.transform = 'translateY(-'+temp/8+'px)'

    walls.forEach((wall) => {
        // console.log(wall)
        wall.style.transform = 'translateY(-'+temp/10+'px)'

    })


    // _boxShadow.style.transform = 'translateY(-'+temp/6+'px)'

    v.style.transform = 'translateY('+temp+'px) translateX(50%)'

    // hero1.style.transform = 'translate3d( 0 ,'+temp +'px , 0)'

    // hero1.style.transform = 'translateX(50%) translateY('+temp+'px)'

    // hero1.style.bottom = temp

    // heros.forEach((hero) => {

    //     hero.style.transform = 'translateY('+temp+'px)'
    //     // _boxShadow.style.transform = 'translateY(-'+temp+'px)'

 

    // })
    
})



// ************scroll*************

let rot = -7.53982

next.addEventListener('click' , () => {
    rot =rot + 1.25663
    slider_3d.style.transform='rotateY('+rot+'rad)'
    console.log(rot)

})
prev.addEventListener('click' , () => {
    rot =rot - 1.25663
    slider_3d.style.transform='rotateY('+rot+'rad)'
    console.log(rot)

})




// **************slider_3d**************

const backhero =document.querySelector('.backhero')
const nexthero =document.querySelector('.nexthero')
const sliderhero =document.querySelector('.sliderhero')
const images = document.querySelectorAll('.image')
const sliderback = document.querySelector('.sliderback')



let x = 0
let x2 = 0
let c = images.length -1






nexthero.addEventListener('click',() =>{
   if(c <= images.length-1 && c > 0){
    x = x - 767
    x2 = x2 - 310

    sliderhero.style.transform = 'translateX('+ x+'px)'
    sliderback.style.transform = 'translateX('+ x2+'px)'
    c--
    }
 
 
})
backhero.addEventListener('click',() =>{
    if(c < images.length-1){
        x = x + 767
        x2 = x2 + 310
    
        sliderhero.style.transform = 'translateX('+ x+'px)'
        sliderback.style.transform = 'translateX('+ x2+'px)'
        c++
       }
     
       
})



// ***********************sliderhero********************



const dps = document.querySelectorAll('.dp')
const contentdps = document.querySelectorAll('.dp>div:nth-of-type(2)')


contentdps.forEach((contentdp) => {
    let h = contentdp.clientHeight
    contentdp.setAttribute('data_h', h);
    contentdp.style.height = 0
    
})

let k = 1

dps.forEach((dp) => {
    dp.addEventListener('click' , () => {
       
       if(k % 2){
        let _h = dp.querySelector('div:nth-of-type(2)').getAttribute('data_h')
        dp.querySelector('div:nth-of-type(2)').style.height = _h+'px'
       }else{
        dp.querySelector('div:nth-of-type(2)').style.height = 0
       }
       k++

    })

}) 

// ********************dropdown******************