const searchEl = document.querySelector("#search")
const tigerEl = document.querySelector("#tiger")
const lionEl = document.querySelector("#lion")
const bisonEl = document.querySelector("#bison")
const wolfEl = document.querySelector("#wolf")
const bearEl = document.querySelector("#bear")
const horseEl = document.querySelector("#horse")
const catEl = document.querySelector("#cat")
const foxEl = document.querySelector("#fox")
const donkeyEl = document.querySelector("#donkey")
const crocodileEl = document.querySelector("#crocodile")
const animalEl = document.querySelector("#animal")



setInterval(()=>{
            let word=searchEl.value
        
            switch(word.toLowerCase()){
                case "тигр":
                    tigerEl.style.display = "flex"
                break;
                case "лев":
                    lionEl.style.display = "flex"  
                break;
                case "бизон":
                    bisonEl.style.display = "flex"
                break;
                case "медведь":
                    bearEl.style.display = "flex"
                break;
                case "волк":
                    wolfEl.style.display ="flex"
                break;
                case "лошадь":
                    horseEl.style.display = "flex"
                        break;
                case "кошка":
                    catEl.style.display = "flex"
                break;
                case "лиса":
                    foxEl.style.display = "flex"
                break;
                case "осел":
                    donkeyEl.style.display ="flex"
                break;
                case "крокодил":
                    crocodileEl.style.display ="flex"
                break;
                        default:
                            console.log("Error404");
                    }
                
                
            },1000)
                
        
        