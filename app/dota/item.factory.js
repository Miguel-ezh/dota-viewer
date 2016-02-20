import Item from './item'

let items = [];

function getItemById(id){
    if(items.length === 0){
        return fetchItemsJson()
            .then(function(){
                return createItem(id);
            });
    }
    else{
        return Promise.resolve(createItem(id));
    }
};

function fetchItemsJson(){
    return fetch('./app/json/items.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            items = json.items;
        });
}

function createItem(id){
    var item = items.filter(x => x.id === id);

    return new Item(item[0].name);
}

export default {
    getItemById: getItemById
}