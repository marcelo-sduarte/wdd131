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
        name: "Carrot Cake",
        filling: "Chocolate Cake",
        frosting:"Brazilian Chocolate Brigadeiro",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.webp"
    },
    {
        name: "White Chocolate Belga Cake",
        filling: "White Cake",
        frosting:"Brazilian White Brigadeiro",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakewhitechoco.webp"
    },
    {
        name: "Banana Cake",
        filling: "Banana Cake ",
        frosting:"Banana Caramel",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakebanana.webp"
    },
    {
        name: "Coconut Cake",
        filling: "Coconut Cake",
        frosting:"Coconut Caramel",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakecoconut.webp"
    },
    {
        name: "Orange Cake",
        filling: "Orange Cake",
        frosting:"ice suggar or ganache",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakeorange.webp"
    },
    {
        name: "Lemon Cake",
        filling: "Lemon Cake",
        frosting:"Lemon Cream",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakelemon.webp"
    },
  
    {
        name: "Peanut Cake",
        filling: "Peanut Cake",
        frosting:"Brazilian Brigadeiro with Peanut",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakepeanut.webp"
    },
    {
        name: "Brazilian Brigadeiro Cake",
        filling: "White Cake",
        frosting:"Brazilian Brigadeiro with personalized Topper",
        category:"event",
        weight:"1.98 lbs",
        imageUrl:
            "img/event1.webp"
    },
    {
        name: "Red Velvet Strawberry Cake",
        filling: "Red Velvet Cake",
        frosting:"Brazilian White Brigadeiro",
        category:"event",
        weight:"1.98 lbs",
        imageUrl:
            "img/event3.webp"
    },
    {
        name: "Carrot Cake in a Jar",
        filling: "Carrot Cake",
        frosting:"Brazilian Black Brigadeiro",
        category:"dessert",
        weight: "4 Oz",
        imageUrl:
            "img/desserts1.webp"
    },
    {
        name: "White Cake in a Jar",
        filling: "White Cake",
        frosting:"Brazilian White Brigadeiro",
        category:"dessert",
        weight:"4 Oz",
        imageUrl:
            "img/desserts2.webp"
    },
    {
        name: "Brazilian Brigadeiros",
        filling: "Black Chocolate, Peanut, Strawberry and others",
        frosting:"Brazilian White Brigadeiro",
        category:"dessert",
        weight:"0.85 Oz",
        imageUrl:
            "img/dessert3.webp"
    },

]


function createCakeCard(cakes, nameclass, name_category) {
    // cleaning container before put more elements 
    document.querySelector(nameclass).innerHTML = "";
    cakes.forEach(cake => {
        if (cake.category.includes(name_category)){
            /* Create html elements */
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let frosting = document.createElement("p");
            let filling = document.createElement("p");
            let weight = document.createElement("p");
            let img = document.createElement("img");
            
            // Assig string elements
            name.innerHTML = `<span class="label"> </span> ${cake.name}`;
            frosting.innerHTML = `<span class="label"> Frosting: </span> ${cake.frosting}`;
            filling.innerHTML = `<span class="label"> Filling: </span> ${cake.filling}`;
            weight.innerHTML = `<span class="label"> Weight: </span> ${cake.weight}`;
            img.setAttribute("src", cake.imageUrl);
            img.setAttribute("alt", `${cake.name} Cake` );
            img.setAttribute("loading", "lazy");
            
            card.appendChild(name);
            card.appendChild(frosting);
            card.appendChild(filling);
            card.appendChild(weight);
            card.appendChild(img);

            document.querySelector(nameclass).appendChild(card)
        }
    })
}


if (window.location.pathname.includes ("/project/duartedoceria.html")) {
   let visitCount = localStorage.getItem('numVisits-ls');
   if (!visitCount) {
        visitCount = 0;
        stringVisit = `This is your first visit. 🥳 Welcome!`;
    
    } else {
        visitCount ++;
        stringVisit = `Welcome! The number of accesses to the site was: ${visitCount}`;
    }

    localStorage.setItem('numVisits-ls', visitCount);
   document.getElementById('visit').innerText = `${stringVisit}`;
}


if (window.location.pathname.includes('/project/cake-store.html')) {
     class_name = ".gallerycakes"
     category_name = "simple"
    }

if (window.location.pathname.includes('/project/parties-events.html')) {
    class_name = ".galleryevents"
    category_name = "event"       
    }

if (window.location.pathname.includes('/project/desserts.html')) {
    class_name = ".gallerydesserts"
    category_name = "dessert"       
    }

createCakeCard(cakes, class_name, category_name);
