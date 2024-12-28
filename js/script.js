
let likes = {
    like: 0,
    like1: 0,
    like2: 0
};

function me_gusta(type) {
    if (likes[type] !== undefined) { // Verifica que el tipo exista en el objeto
        likes[type]++;
        document.querySelector(`.${type}`).innerText = likes[type];
    }
}
