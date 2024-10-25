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
        filling: "Chocolate",
        frosting:"Belgian Chocolate",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "White Chocolate Belga",
        filling: "",
        frosting:"Chocolate White Cream",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakewhitechoco.jpg"
    },
    {
        name: "Banana Cake",
        filling: "Banana ",
        frosting:"Banana Caramel",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakebanana.jpg"
    },
    {
        name: "Coconut Cake",
        filling: "Coconut",
        frosting:"Coconut Caramel",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakecoconut.jpg"
    },
    {
        name: "Orange Cake",
        filling: "Orange",
        frosting:"ice suggar or ganache",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakeorange.jpg"
    },
    {
        name: "Lemon Cake",
        filling: "Lemon",
        frosting:"Lemon Cream",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakelemon.jpg"
    },
  
    {
        name: "Peanut Cake",
        filling: "Peanut",
        frosting:"Milk Suggar Cream with Peanut",
        category:"simple",
        weight:"1.98 lbs",
        imageUrl:
            "img/cakepeanut.jpg"
    },
    {
        name: "Brazilian Brigadeiro Cake",
        filling: "Brazilian Brigadeiro",
        frosting:"Brazilian Brigadeiro",
        category:"event",
        weight:"1.98 lbs",
        imageUrl:
            "img/event1.jpg"
    },
    {
        name: "Brazilian Brigadeiro Cake",
        filling: "Brazilian Brigadeiro",
        frosting:"Brazilian Brigadeiro",
        category:"dessert",
        weight:"1.98 lbs",
        imageUrl:
            "img/desserts.jpg"
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

            document.querySelector(nameclass).appendChild(card)
        }
    })
}


if (window.location.pathname === '/project/duartedoceria.html') {
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


if (window.location.pathname === '/project/cake-store.html') {
     class_name = ".gallerycakes"
     category_name = "simple"
    }

if (window.location.pathname === '/project/parties-events.html') {
    class_name = ".galleryevents"
    category_name = "event"       
    }

if (window.location.pathname === '/project/desserts.html') {
    class_name = ".gallerydesserts"
    category_name = "dessert"       
    }

createCakeCard(cakes, class_name, category_name);
