function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            //Add a record here
            artist: "Rolling Stones",
            title: "Tatto You",
            release_year: 1981,
            formats: {
                1: "lp",
                2: "cd",
                3: "8t"
            }
        }
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;