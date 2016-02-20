import Hero from "app/dota/hero"
import Item from "app/dota/item"
import heroFactory from "app/dota/hero.factory"

heroFactory.getHeroById(1)
    .then(function(value){
        console.log(value);
    });