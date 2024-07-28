const reviews = [
    {
        id: 1,
        name: 'susan smith',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUvetrwBu3qvkD0EyapK2n-rAI-BRzJTxKQ&s',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        img: 'https://e1.pngegg.com/pngimages/99/117/png-clipart-circle-shaped-s-man-smiling-portrait-thumbnail.png',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        img: 'https://cdn.iconscout.com/icon/free/png-256/free-businessman-707-1128970.png?f=webp',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDymdAdUothXSNXqLLqSDgm3R9PLS1DlVxhmyjFOasdeLfs4tfvpFzynhkSWz8VWANsHk&usqp=CAU',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
    },
];

const lbtn = document.querySelector('#leftbtn');
const rbtn = document.querySelector('#rightbtn');
const data = document.querySelector('#datatobeinsert');
const img = document.querySelector('#img');
const name = document.querySelector('#name');

let currentIndex = 0;

function showPerson(index) {
    const person = reviews[index];
    name.textContent = person.name;
    data.textContent = person.text;
    img.src = person.img;
}

document.addEventListener('DOMContentLoaded', () => {
    showPerson(currentIndex);

    rbtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= reviews.length) {
            currentIndex = 0;
        }
        showPerson(currentIndex);
    });

    lbtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = reviews.length - 1;
        }
        showPerson(currentIndex);
    });
});
