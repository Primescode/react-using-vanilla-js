console.log("hewloo world");

const contactDB = [
    {
        name: 'shbuham',
        conatct: 9548762721

    },
    {
        name: 'sumit',
        conatct: 9528112183

    },
    {
        name: 'sumit',
        conatct: 9528112183

    },
    {
        name: 'sumit',
        conatct: 9528112183

    }

];

contactDB.forEach((item) => {
    console.log("sug", item.name);
});

const card = document.getElementById("card");



function createMoviesTemplates(contactDB) {
    let str = "<div class='movie-card'>";
    let movieElement = document.createElement("div");
    str += contactDB.map((item) => `<h1>${item.name}</h1>`);
    str += "</div>";
    movieElement.innerHTML = str.replaceAll(",", "");
    return movieElement;

}

let contactData = createMoviesTemplates(contactDB);
console.log(contactData);
card.appendChild(contactData);