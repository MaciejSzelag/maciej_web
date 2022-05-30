
const enter_no = document.querySelector(".no");
const animation_enter = document.querySelector(".animation-enter");
const enter_anime = () => {
    document.body.classList.add("body-100")
        const anim = (p) => {
            
            for (let i = 0; i <=100; i++) {
                setTimeout(() => {
                    enter_no.style.setProperty(p, `${i}%`)
                }, i * 2)
            }
        }
        // anim("width")
  
        setTimeout(() => {
            anim("height")  
              
        }, 500)
        setTimeout(() => {
            animation_enter.style.setProperty("opacity", 0);
            animation_enter.style.setProperty("transform", "scale(15) rotate(45deg)")
         

            setTimeout(() => {
                animation_enter.style.setProperty("display", "none")
                document.body.classList.remove("body-100")
            }, 3000)
        }, 3000)
}
enter_anime();
// setTimeout(enter_anime,1000)