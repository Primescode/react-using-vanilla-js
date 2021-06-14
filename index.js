console.log("hewloo world");

const contactDB = [
    {
        title: 'bagerds',
        para: 'superb shot',
        imgsrc: "https://wallpapercave.com/wp/wp3699556.jpg"

    },
    {
        title: 'Oliads',
        para: 'fantubulous',
        imgsrc: "https://wallpapercave.com/wp/wp2144596.jpg"

    },
    {
        title: 'formulae 1',
        para: "great osm",
        imgsrc: "https://wallpapercave.com/wp/wp3699561.jpg"

    },
    {
        title: 'rizardo',
        para: "so curious",
        imgsrc: "https://wallpapercave.com/uwp/uwp626162.jpeg"

    }

];


// file starts from here 
const card = document.getElementById("card");
function myclickfunc(event) {
    console.log(event);
    event.preventDefault();
}

function myfunc(item) {
    // wrinting template here
    let str = `
    <div class="movie-card">
                <div class="img">
                    <img src="${item.imgsrc}" alt="">
                </div>
                <div class="content">
                    <h3 onclick="myclickfunc(event)">${item.title}</h3>
                    <p>${item.para}</p>
                    <p><a href="./index3.html" onclick="myclickfunc(event)">go to google</a>
                </div>
    </div>
    `;
    return str;
}
function createMoviesTemplates(contactDB) {
    let movieElement = document.createElement("div");
    let movieTamplate = `<div class="movies-card">${contactDB.map(myfunc)}</div>`;
    movieElement.innerHTML = movieTamplate.replaceAll(",", "");
    return movieElement;

}
const count = 0;

function increament(count) {
    count = count + 1;
    console.log(count);
    return count;

}
function createState() {
    let stateElement = document.createElement("div");
    let stateTempalate = `<div onclick="increament(${count})">${count}</div>`;
    stateElement.innerHTML = stateTempalate;
    return stateElement;
}

let contactData = createMoviesTemplates(contactDB);
let stateData = createState();
card.appendChild(contactData);
card.appendChild(stateData);


