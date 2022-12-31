// const api = 
// `https://raw.githubusercontent.com/LEXXSAS/json_test/cd23cdf66861d7098baf92eefff1acc495cf9419/50_random_users.json`;

// const users = [];
// let newList = [];

// let searchForm = document.querySelector('.form');
// searchForm.search.addEventListener('keyup', () => {
//     if(searchForm.search.value.length > 0) {
//         fetch(api)
//         .then(response => response.json())
//         .then(data => {
//             const inpName = document.getElementById('search').value
//             for (const user of data) {
//                 let userName = user.name.first;
                
//                 if (userName.includes(inpName) == true) {
//                     // newList.push(userName);
//                     console.log(user.name.first)
//                 }
                
//             }
//         });
//     } else 
//         console.clear()
   
// })


// const api = 
// `https://raw.githubusercontent.com/LEXXSAS/json_test/cd23cdf66861d7098baf92eefff1acc495cf9419/50_random_users.json`;

// const api = 
// `https://raw.githubusercontent.com/LEXXSAS/json_test/main/southPark.json`;

const api = 
`https://raw.githubusercontent.com/LEXXSAS/json_test/main/southPark.json`;


const characters = [];

fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log('data >> ', data);

        data.forEach(line => {
            characters.push(...line.characters);
        })
    });
 

    function getOptions(word, characters) {

        return characters.filter(s => {

            const regex = new RegExp(word, 'gi');
            return s.name.match(regex); 
        })
    }

    function displayOptions() {

        const options = getOptions(this.value, characters);
        
        const html = options.map(character => {
            const regex = new RegExp(this.value, 'gi');
            const characterImage = character.url;
            console.log(characterImage)
            imgDiv.innerHTML = `<img src = "${characterImage}">`;
            const characterName = character.name.replace(regex, 
                `<span class="hl">${this.value}</span>`
                )
            return `<li><span>${characterName}</span></li>`
        })
        .slice(0, 10)
        .join('');

        searchOptions.innerHTML = this.value ? html : null;
        // imgDiv.innerHTML = this.value ? html : null;
    }

    const searchInput = document.querySelector('.search');
    const searchOptions = document.querySelector('.options');
    const searchLi = document.querySelectorAll('li');
    for(let text of searchLi) {
        let tli = text.innerText;
        console.log(tli)
    }

    const imgDiv = document.querySelector('.image');

    searchInput.addEventListener('change', displayOptions);
    searchInput.addEventListener('keyup', displayOptions);
