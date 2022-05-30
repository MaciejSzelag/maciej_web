const header_txt_name = document.querySelector(".title-head");
const header_txt = document.querySelector(".h-t-text");
const header_txt_p = document.querySelector(".header-text p");
const div_fixed = document.querySelector(".div-fixed");
const sections = document.querySelectorAll("section")
const class_scroll = document.querySelectorAll(".on-scroll");

window.addEventListener("scroll", ()=> {
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (windowScroll / height) * 100;
    if (scrolled < 90) {
        div_fixed.style.setProperty("top", `${(scrolled)}%`);
        div_fixed.style.setProperty("opacity", `${(scrolled)}`);
    } else if( scrolled > 90){
        div_fixed.style.setProperty("opacity", `0`);
    }

    class_scroll.forEach( scroll => {
        if (scroll.classList.contains("on-scroll")) {
            header_txt_name.style.setProperty("top", `${40 + (scrolled * 4)}%`);
            header_txt.style.setProperty("transform",`translateY(${(scrolled * 15)}px)`);
            header_txt_p.style.setProperty("transform", `translateY(${(scrolled * 15)}px)`);
           
            sections.forEach(section => {
                const slide = (window.scrollY + window.innerHeight) - 400;
                if (slide > section.offsetTop) {
                    section.classList.add('opacity-visible')
                } else {
                    section.classList.remove('opacity-visible') 
                }
            })

            const section_home = document.getElementById("home_section");
            const nav_home = document.getElementById("home");
        
            const section_about = document.getElementById("section_about");
            const nav_about = document.getElementById("about");

            const section_contact = document.getElementById("section_contact");
            const nav_contact = document.getElementById("contact");

            const section_what_i_do = document.getElementById("section_what_i_do");
            const nav_what_i_do = document.getElementById("what-i-do");
        
            const slide = (window.scrollY + window.innerHeight / 5);
            if ( slide <= section_home.clientHeight) {
                nav_home.classList.add("active-li");
            } else if (slide > section_home.clientHeight) {
                nav_home.classList.remove("active-li");
            }
            if (slide < section_about.offsetTop) {
                nav_about.classList.remove("active-li");
                nav_what_i_do.classList.remove("active-li");
                nav_contact.classList.remove("active-li");
            }
            if (slide > section_about.offsetTop) {
                nav_about.classList.add("active-li");
                nav_what_i_do.classList.remove("active-li");
                nav_contact.classList.remove("active-li");
                nav_home.classList.remove("active-li");
            }
            if (slide > section_what_i_do.offsetTop) {
                nav_what_i_do.classList.add("active-li");
                nav_about.classList.remove("active-li");
                nav_contact.classList.remove("active-li");
            }
        
            if ((slide * 1.1 ) > section_contact.offsetTop) {
                nav_contact.classList.add("active-li");
                nav_what_i_do.classList.remove("active-li");
                nav_about.classList.remove("active-li");
               }                 
        }
    })

})
// navigation
const hamburger_wrap = document.querySelector(".h-wrap");
const menu_wrap = document.querySelector(".ul-wrap");
let active = false;
const bars = document.querySelector(".h-wrap");

const hideMenu = ()=>{
    if (!active) {
        menu_wrap.classList.add("show-menu");
        bars.classList.add("active-menu");
        document.body.classList.add("body-100");
      
      
        setTimeout(() => {
            bars.classList.add("a-m-rotate")
        }, 400);
        active = !active
    } else if (active) {
        menu_wrap.classList.remove("show-menu");
        bars.classList.remove("a-m-rotate")
        setTimeout(() => {
            bars.classList.remove("active-menu");
            document.body.classList.remove("body-100");
        }, 400);
        active = !active
    }
}
if (window.innerWidth <= 1025) {
    hamburger_wrap.addEventListener("click", hideMenu);
}

const all_li_a = document.querySelectorAll(".hrefa");

all_li_a.forEach((a) => {
    a.addEventListener("click",hideMenu )
})
