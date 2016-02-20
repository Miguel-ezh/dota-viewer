import Hero from './hero'

let heroes = [];

function getHeroById(id){
    if(heroes.length === 0){
        return fetchHeroesJson()
            .then(function(){
                return createHero(id);
            });
    }
    else{
        return Promise.resolve(createHero(id));
    }
};

function fetchHeroesJson(){
    return fetch('./app/json/heroes.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            heroes = json.heroes;
        });
}

function createHero(id){
    var hero = heroes.filter(x => x.id === id);

    return new Hero(hero[0].localized_name, hero[0].name);
}

export default {
    getHeroById: getHeroById
}