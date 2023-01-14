
const searchInput = document.querySelector('.search');
const searchOptions = document.querySelector('.options');
const searchLi = document.querySelectorAll('li');
const imgDiv = document.querySelector('.image');

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
        
        let name = searchInput.value;
        let perName =/^[А-Я]$/i;
        if(name == !perName && name !== name.lenght < 1){
        let text = "Разрешены только русские буквы";
        alert(text);
        } 

        const options = getOptions(this.value, characters);
        
        const html = options.map(character => {
            const regex = new RegExp(this.value, 'gi');
            const characterImage = character.url;
            // console.log(characterImage)
            console.log(character.id)
            const allP = document.querySelectorAll('.search-list-item');
            // allP.addEventListener('click', (event) => {console.log(event.target)});
            imgDiv.innerHTML = `<img src = "${characterImage}">`;
            const characterName = character.name.replace(regex, 
                `<span class="hl">${this.value}</span>`
                )
            return `<li><span>${characterName}<p data-id = "${character.id}" class="search-list-item"></p></span></li>`
        })
        .slice(0, 10)
        .join('');

        searchOptions.addEventListener('click', (event) => {
            let evTarget = event.target;
            let tTarget = evTarget.querySelector('.search-list-item');
            let twoTarget = tTarget.dataset.id;
            let singleData = characters.filter(singleData => {
                return twoTarget === singleData.id;
                
            })
            singleData.forEach((item) => {
                let newData = item.url;
                console.log(newData)
                imgDiv.innerHTML = `<img src = "${newData}">`;
                searchOptions.innerHTML = '';
                searchInput.value = '';
            })
            
        })
      
        searchOptions.innerHTML = this.value ? html : null;
        // imgDiv.innerHTML = this.value ? html : null;
    }


    for(let text of searchLi) {
        let tli = text.innerText;
        console.log(tli)
    }

    // searchOptions.addEventListener('click', (event) => {
    //     let searchId = event.target.dataset.id;
    //     let singleData = characters.results.filter(singleData => {
    //         return searchId === singleData.id;
    //     })
    //     console.log(singleData)
    //     searchOptions.innerHTML = '';

    // });


    // searchInput.addEventListener('change', displayOptions);
    searchInput.addEventListener('keydown', displayOptions);
    searchInput.addEventListener('keyup', displayOptions);
        // imgDiv.innerHTML = `<img src = "${characterImage}">`;
        // showSuperheroDetails(singleData);
