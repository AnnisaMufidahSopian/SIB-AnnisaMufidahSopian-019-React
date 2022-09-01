const animals = [
    {name : 'Fluffy', species : 'cat'},
    {name : 'carlo', species : 'dog'},
    {name : 'nemo', species : 'fish'},
    {name : 'hamilton', species : 'dog'},
    {name : 'dory', species : 'fish'},
    {name : 'ursa', species : 'cat'}
];

//filter fish dengan menggunakan looping
/*let fish = [];
for(let i = 0; i < animals.length; i++){
    if(animals[i].species == 'fish'){
        fish.push(animals[i]);
    }
}*/

//dengan menggunakan method filter
let fish = animals.filter((animal) => animal.species == 'fish');
console.log(fish);

//homework

const VideoData = [
    {
        name : 'Miss Scarlet',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Mrs. White',
        present : false,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Reverend Green',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Rusty',
        present : false,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Colonel Mustard',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },

    {
        name : 'Professor Plum',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },
]

let result = VideoData.filter((isPresent) => isPresent.present == true);
console.log("Jumlah Present = " + result.length);
console.log(result);