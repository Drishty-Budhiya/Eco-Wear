const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


        var MainImg = document.getElementById("MainImg");
        var smallimg = document.getElementByClassName("small-img");

        smallimg[0].onclick = function(){
            MainImg.scr = smallimg[0].src;
        }

        smallimg[1].onclick = function(){
            MainImg.scr = smallimg[1].src;
        }

        smallimg[2].onclick = function(){
            MainImg.scr = smallimg[2].src;
        }   
        smallimg[3].onclick = function(){
            MainImg.scr = smallimg[3].src;
        }
        
        var starss = document.getElementsByClassName("fas");
        var emoji = document.getElementsById("emoji");
        
            starss[0].onclick = function(){
                starss[0].style.color = "#ffd93b";
                starss[1].style.color = "#e4e4e4";
                starss[2].style.color = "#e4e4e4";
                starss[3].style.color = "#e4e4e4";
                starss[4].style.color = "#e4e4e4";
                emoji.style.transform = "translateX(0)";
            }

            starss[1].onclick = function(){
                starss[0].style.color = "#ffd93b";
                starss[1].style.color = "#ffd93b";
                starss[2].style.color = "#e4e4e4";
                starss[3].style.color = "#e4e4e4";
                starss[4].style.color = "#e4e4e4";
                emoji.style.transform = "translateX(-10px)";
            }

            starss[2].onclick = function(){
                starss[0].style.color = "#ffd93b";
                starss[1].style.color = "#ffd93b";
                starss[2].style.color = "#ffd93b";
                starss[3].style.color = "#e4e4e4";
                starss[4].style.color = "#e4e4e4";
                emoji.style.transform = "translateX(-20px)";
            }

            starss[3].onclick = function(){
                starss[0].style.color = "#ffd93b";
                starss[1].style.color = "#ffd93b";
                starss[2].style.color = "#ffd93b";
                starss[3].style.color = "#ffd93b";
                starss[4].style.color = "#e4e4e4";
                emoji.style.transform = "translateX(-30px)";
            }

            starss[4].onclick = function(){
                starss[0].style.color = "#ffd93b";
                starss[1].style.color = "#ffd93b";
                starss[2].style.color = "#ffd93b";
                starss[3].style.color = "#ffd93b";
                starss[4].style.color = "#ffd93b";
                emoji.style.transform = "translateX(-40px)";
            }