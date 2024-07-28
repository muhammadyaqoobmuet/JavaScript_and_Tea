const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const sectionCenter = document.querySelector(".section-center > .main");
  const btncontainer = document.querySelector(".btn-container");
  
  window.addEventListener('DOMContentLoaded',function(e){
    displayMenu(menu)
    
    // getting unique catorgirs of button dynamically
    const uniqueBtnCatogories = menu.reduce((values,item)=>{
      if(!values.includes(item.category)){
        values.push(item.category)
      }
      return values;
    },['all'])

// setting up that returns html of buttons of allcatogories
  // this will return all the btns 
  const allcatogories = uniqueBtnCatogories.map((item)=>{
    return `
      <button data-catagory=${item} type="button" class="filter-btn btnStyle">${item}</button>
    `
}).join("");


// inserting
btncontainer.innerHTML=allcatogories;

     let fillterBtns = document.querySelectorAll('.filter-btn');



      // filerting btns wrt catogry
  fillterBtns.forEach((eachbtn)=>{
    
    eachbtn.addEventListener('click',(e)=>{
        const category = e.currentTarget.dataset.catagory;
        // create an array of  a catogary to button which we click
        const catogrizedMenu = menu.filter((item) => {
            if(item.category === category){
                return item;
            }
        })

        if(category==='all'){
            displayMenu(menu);
        }else{
            displayMenu(catogrizedMenu);
        }
    
    })

  })


  function displayMenu(menuItem){
    let menuDisplay = menuItem.map((item)=>{
        // returning each item means a card of food 
        return `
        <div class="flex justify-between gap-4 bg-white p-4 rounded-md  flex-wrap lg:flex-nowrap">
                <img src=${item.img} alt="" class="w-full lg:w-1/2 object-cover">
                <div class="flex flex-col w-full lg:w-1/2  justify-between px-2">
                    <div class="flex justify-between">
                        <h1 class="text-xl font-bold">${item.title}</h1>
                        <h5 class="textlg font-semibold">${item.price}</h5>
                    </div>
                    <div class="h-[1px] bg-gray-300  my-2"></div>
                    <p>${item.desc}</p>
                </div>
            </div>
            `
    }).join("") // this "" leads no ,
    // lets join or combine all into single string to put in section 
    sectionCenter.innerHTML=menuDisplay;

  }
  });


 