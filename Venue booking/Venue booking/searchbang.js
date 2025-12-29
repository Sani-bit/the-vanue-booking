const product=[
    {
        id: 0,
        image: 'awadh-palace.avif',
        title: 'Awadh-palace',
        price:15000
    },
    {
        id: 1,
        image: 'noor-us-sabah-palace-kohefiza.avif',
        title: 'Noor-us-sabah-palace',
        price:25000
    },
    {
        id: 2,
        image: 'kwalitys-motel-shiraz-.avif',
        title: 'kwalitys-motel',
        price:20000
    },
    {
        id: 3,
        image: 'courtyard-by-marriott.avif',
        title: 'Courtyard by Marriott',
        price:18000
    },
    {
        id: 4,
        image: 'jehan-numa-retreat.avif',
        title: 'Jehan Numa Retreat',
        price:45000
    },
    {
        id: 5,
        image: 'the-hub-street.avif',
        title: 'The Hub Street',
        price:25000
    },
]
const categories = [...new Set(product.map((item)=>{return item}))]

document.getElementById('searchBar').addEventListener('keyup',(e)=>{
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)

    document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("saveBtn").addEventListener("click", () => {
    mixpanel.track("Save Button Clicked");
  });
});

});
const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {image, title, price} = item;
        return(
            `<div class ='box'>
            <div class='img-box'>
                <img class ='images' src=${image}></img>
                </div>
                <div class = 'bottom'>
                    <p>${title}</p>
                    <h2>₹ ${price}.00</h2>
                    <button>Check Avaibility</button>
                    </div>
                    </div>`
        )
    }).join('')
};
displayItem(categories);

// main.js
mixpanel.track("Page Loaded", {
  page: window.location.pathname
});