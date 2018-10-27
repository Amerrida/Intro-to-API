const schoolData =() =>{
    return new Promise ((reslove, reject) =>{
        $.ajax (https://data.nashville.gov/resource/7viv-byqi.json);
        .done ((data) => {
        reslove (data);
        console.log(data);
        .fail((error) => {
            reject (error);
        }
    }
};


schoolData();

// $.ajax('https://data.nashville.gov/resource/7viv-byqi.json')
// .done((response) => {
// }) .fail((err) => {
// console.error(err);
// })


