document.getElementById('hamburger').addEventListener('click', function () {
    const nav = document.getElementById('nav');
    nav.classList.toggle('show'); 
    this.classList.toggle('active');
});

document.getElementById('close-btn').addEventListener('click', function () {
    const nav = document.getElementById('nav');
    nav.classList.remove('show');
    document.getElementById('hamburger').classList.remove('active'); 
});


const cakes = [
    {
        name: "Chocolate",
        filling: "",
        frosting:"Belgian Chocolate",
        category:"Chocolate",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        category:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        category:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        category:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        category:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        category:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        category:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        category:"event",
        weight:"1.98 lbs",
        imageUrl:
            "img/IMG_20240803_104324-EFFECTS.jpg"
    },
]


const photos = [
    {
        name: "Chocolate Belga",
        imageUrl:"img/IMG_20240803_104324-EFFECTS.jpg"
    },
    {
        name: "Chocolate Belga",
        imageUrl:"img/IMG_20240803_104324-EFFECTS.jpg"
    }
]

function createCakeCard(cakes) {
    // cleaning container before put more elements 
    document.querySelector(".gallerycakes").innerHTML = "";
    cakes.forEach(cake => {
        /* Create html elements */
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let frosting = document.createElement("p");
        let filling = document.createElement("p");
        let weight = document.createElement("p");
        let img = document.createElement("img");

        // Assig string elements
        name.textContent = cakes.name;
        frosting.innerHTML = `<span class="label"> Frosting: </span> ${cake.frosting}`;
        filling.innerHTML = `<span class="label"> Filling: </span> ${cake.filling}`;
        weight.innerHTML = `<span class="label"> Weight: </span> ${cake.weight}`;
        img.setAttribute("src", cake.imageUrl);
        img.setAttribute("alt", `${cake.name} Cake`);
        img.setAttribute("loading", "lazy");
        
        card.appendChild(name);
        card.appendChild(frosting);
        card.appendChild(filling);
        card.appendChild(weight);
        card.appendChild(img);
       

        document.querySelector(".gallerycakes").appendChild(card)
    })
}

function createEventPhotos(photos) {
    // cleaning container before put more elements 
    document.querySelector(".galleryevents").innerHTML = "";
    photos.forEach(photo => {
        /* Create html elements */
        let image = document.createElement("img");

        // Assig string elements
        image.setAttribute("src", photo.imageUrl);
        image.setAttribute("alt", `${photo.name} Cake`);
        image.setAttribute("loading", "lazy");

        document.querySelector(".galleryevents").appendChild(image)
    })
}
if (window.location.pathname === '/project/duartedoceria.html') {
   let visitCount = localStorage.getItem('numVisits-ls');
   if (!visitCount) {
       visitCount = 0;
   }
   visitCount++;
   localStorage.setItem('numVisits-ls', visitCount);
   document.getElementById('visit').innerText = `Welcome! The number of accesses to the site was: ${visitCount}!`;
}


if (window.location.pathname === '/project/cake-store.html') {
    createCakeCard(cakes);
    }

if (window.location.pathname === '/project/parties-events.html') {
    createEventPhotos(photos);;
        
}
