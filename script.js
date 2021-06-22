const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Milestone 1-----
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2-----
// Coloriamo le icone per tipo
// Milestone 3-----
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

icons.forEach ((icon) => {

    const {name,prefix,type,family} = icon


    document.getElementById("container-icons").innerHTML += `
    <div class="every-icons col"> 
        <span class="icon ${type}"> 
            <i class="cards ${family} ${prefix}${name}"></i>
        </span>
        <div class="names">${name}</div>
    </div>
    `
})
const animalsArray = icons.filter ((icons)=>{
    if(icons.type === "animal") {
        return true
    }
})
const vegetablesArray = icons.filter ((icons)=>{
    if(icons.type === "vegetable") {
        return true
    }
})
const usersArray = icons.filter ((icons)=>{
    if(icons.type === "user") {
        return true
    }
})

let activities = document.getElementById("activitySelector")

activities.addEventListener("click", function() {

document.getElementById("container-icons").innerHTML = "";

    if(activities.value === "all") {

        icons.forEach ((icon) => {
        const {name,prefix,type,family} = icon
        document.getElementById("container-icons").innerHTML += `
        <div class="every-icons col"> 
            <span class="icon ${type}"> 
                <i class="cards ${family} ${prefix}${name}"></i>
            </span>
            <div class="names">${name}</div>
        </div>
        `
    })}
    if(activities.value === "animals") {

        animalsArray.forEach ((icon) => {
        const {name,prefix,type,family} = icon
        document.getElementById("container-icons").innerHTML += `
        <div class="every-icons col"> 
            <span class="icon ${type}"> 
                <i class="cards ${family} ${prefix}${name}"></i>
            </span>
            <div class="names">${name}</div>
        </div>
        `
    })}
    if(activities.value === "vegetables") {

        vegetablesArray.forEach ((icon) => {
        const {name,prefix,type,family} = icon
        document.getElementById("container-icons").innerHTML += `
        <div class="every-icons col"> 
            <span class="icon ${type}"> 
                <i class="cards ${family} ${prefix}${name}"></i>
            </span>
            <div class="names">${name}</div>
        </div>
        `
    })}
    if(activities.value === "users") {

        usersArray.forEach ((icon) => {
        const {name,prefix,type,family} = icon
        document.getElementById("container-icons").innerHTML += `
        <div class="every-icons col"> 
            <span class="icon ${type}"> 
                <i class="cards ${family} ${prefix}${name}"></i>
            </span>
            <div class="names">${name}</div>
        </div>
        `
    })}
})