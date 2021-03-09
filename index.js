let plants;
const cardsContainer = document.getElementById('cards-container');

let getData = async () => {
    plants = await fetch('./assets/data.json')
        .then(response => {
            return response.json();
        })
        .then(res => { return res })
};

let renderCards = async () => {

    await getData();

    plants.map((plant) => {
        console.log(plant);

        let card = document.createElement('section');
        let img = document.createElement('img');
        img.src = plant.img;
        img.alt = plant.title;
        let title = document.createElement('h3');
        title.innerHTML = plant.title;
        let desc = document.createElement('p');
        desc.innerHTML = plant.desc;
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(desc);
        cardsContainer.appendChild(card);
    })

}

renderCards();