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
        cake_type:"Chocolate",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        cake_type:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        cake_type:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        cake_type:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        cake_type:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        cake_type:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        cake_type:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
    {
        name: "Chocolate Belga",
        filling: "",
        frosting:"",
        cake_type:"",
        weight:"1.98 lbs",
        imageUrl:
            "img/cake-home.jpg"
    },
]

createCakeCard(cakes);

function createCakeCard(cakes) {
    // cleaning container before put more elements 
    document.querySelector(".gallerycakes").innerHTML = "";
    cakes.forEach(cake => {
        /* Create html elements */
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let frosting = document.createElement("p");
        let filling = document.createElement("p");
        let cakeType = document.createElement("p");
        let weight = document.createElement("p");
        let img = document.createElement("img");

        // Assig string elements
        name.textContent = cakes.name;
        frosting.innerHTML = `<span class="label"> Frosting: </span> ${cake.frosting}`;
        filling.innerHTML = `<span class="label"> Filling: </span> ${cake.filling}`;
        cakeType.innerHTML = `<span class="label"> Cake Type: </span> ${cake.cake_type}`;
        weight.innerHTML = `<span class="label"> Weight: </span> ${cake.weight}`;
        img.setAttribute("src", cake.imageUrl);
        img.setAttribute("alt", `${cake.name} Cake`);
        img.setAttribute("loading", "lazy");
        
        card.appendChild(name);
        card.appendChild(frosting);
        card.appendChild(filling);
        card.appendChild(cakeType);
        card.appendChild(weight);
        card.appendChild(img);
       

        document.querySelector(".gallerycakes").appendChild(card)
    })
}


