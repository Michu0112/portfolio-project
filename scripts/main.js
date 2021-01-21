class Opinions {
    constructor(name,opinion,rate){
        this.name = name;
        this.opinion = opinion;
        this.rate = rate;
    }

    renderOpinion(){
        const arrayStars = [];

        for(let i = 0; i < 5; i++){
            const img = document.createElement("img");
            img.src = "images/iconmonstr-star-thin-72.png";
            img.alt = "star";
            arrayStars.push(img);
        }

        for(let i = arrayStars.length -1; i >= this.rate; i--){
            arrayStars[i].style.filter = 'saturate(0)';
        }

        const full = document.createElement("div");
        full.className = 'full';

        for(let i = 0; i < arrayStars.length; i++){
            full.innerHTML += arrayStars[i].outerHTML;
        }
        const opinion = `
            <div>
                <img src="images/user-alt-512.png" alt="user-photo">
                <div class="opinion-text">
                    <h2>${this.name}</h2>
                    <p>${this.opinion}</p>
                </div>
            </div>
        `;

        let user = document.createElement('div');
        user.className = 'user';
        user.innerHTML = opinion;
        user.append(full);
        const opinionsBox = document.querySelector('.opinions');

        opinionsBox.append(user);
    }
}

class Ratings {
    static init(){
        const opinions = new Opinions('Marek P.','Wspaniale wykonana praca, uczciwa cena. Serdecznie polecam',5);
        opinions.renderOpinion();
        const opinionsTwo = new Opinions('Stanisław O.','Ekipa zgrana, sumienna, praca wykonana z należytą starannością.',4);
        opinionsTwo.renderOpinion();
        const opinionsThree = new Opinions('Jurek K.','Niestety sytuacja wymagała poprawek, ale chłopaki były już na drugi dzień. Wszystko poszło sprawnie, a poprawki bez dodatkowej opłaty. Polecam.',3);
        opinionsThree.renderOpinion();
    }
}

const btn = document.getElementById('btn-op').addEventListener('click', () =>{
    Ratings.init();
});

//nav-bar
const navBar = document.querySelector('.nav-bar');
const btnMenu = document.getElementById('nav-btn');
btnMenu.addEventListener('click', () =>{
    btnMenu.classList.toggle('hamburger--active');
    navBar.classList.toggle('showMenu');
    document.body.classList.toggle('overflowHidden');
});
const aNavBar = navBar.querySelectorAll('a').forEach( el =>{
    el.addEventListener('click', () =>{
        btnMenu.classList.toggle('hamburger--active');
        navBar.classList.toggle('showMenu');
        document.body.classList.toggle('overflowHidden');
    });
});