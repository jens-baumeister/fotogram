let myImgs = [
    'Barockgarten2.jpg',
    'belltower_santa_maria_del_fiore.jpg',
    'Dresden Frauenkirche Spiegelung.jpg',
    'Externsteine.jpg',
    'GOP2.jpg',
    'Kurpark.jpg',
    'piazzale_michelangelo.jpg',
    'ponte_vecchio_firenze.jpg',
    'sand_sculptures_travemunde.jpg',
    'schwerin_castle.jpg',
    'sirmione_beach.jpg',
    'sirmione_fortress.jpg',
    'sirmione_garden.jpg',
    'sirmione_ruine.jpg',
    'sirmione_sundown.jpg',
    'Sonnenaufgang Storch.jpg',
    'Sonnenaufgang-Lügde.jpg',
    'Wasserfall.jpg',
    'wilhelmshaven_beach.jpg',
]

let myImgDesc = [
    'Der Barockgarten Großsedlitz, bei Dresden.',
    'Glockenturm, Dom von Florenz',
    'Die Dresdner Frauenkirche bei Nacht',
    'Sonnenaufgang an den Externsteinen.',
    'Das GOP in Bad Oeynhausen.',
    'Der Bad Pyrmonter Kurpark.',
    'Blick auf Florenz.',
    'Die Ponte Vecchio in Florenz.',
    'Sandskulpturen in Travemünde.',
    'Das Schloss von Schwerin.',
    '"Jamaica Beach" in Sirmione, am Gardasee.',
    'Castello Scaligero di Sirmione.',
    'Garten bei Sirmione.',
    'Ruinen einer alten Villa in Sirmione.',
    'Blaue Stunde, am Gadasee.',
    'Storch in den Emmerwiesen.',
    'Sonnenaufgang über Bad Pyrmont.',
    'Der Königshütter Wasserfall.',
    'Sonnenuntergang Wilhelmshaven.',
]

let currentIndex = 0;

function render(myImgs, myImgDesc) {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = ""
    for (let i = 0; i < myImgs.length; i++) {
        contentRef.innerHTML += getPicsHtml(i, myImgs, myImgDesc);
    }
}

function getPicsHtml(i, myImgs, myImgDesc) {
    return `<div onclick="toggleOverlay(${i})" class="picture">            
            <img src="./assets/img/content-pics/${myImgs[i]}" alt="${myImgDesc[i]}">
            </div>`
}

function toggleOverlay(index) {
    let overlayRef = document.getElementById('overlay');

    if (index !== null) {
        currentIndex = index;
        updateOverlay();
    }
    overlayRef.classList.toggle('display_none')
}

function updateOverlay() {
    let imgRef = document.getElementById('overlayImg');
    let descRef = document.getElementById('overlayDesc');
    let counterRef = document.getElementById('overlayCounter');

    imgRef.src = `./assets/img/content-pics/${myImgs[currentIndex]}`;
    imgRef.alt = myImgDesc[currentIndex];
    descRef.textContent = myImgDesc[currentIndex];
    counterRef.textContent = `Bild ${currentIndex + 1} / ${myImgs.length}`;
}

function nextImage(event) {
    currentIndex = (currentIndex + 1) % myImgs.length;
    updateOverlay();
    event.stopPropagation();
}

function prevImage(event) {
    currentIndex = (currentIndex - 1 + myImgs.length) % myImgs.length;
    updateOverlay();
    event.stopPropagation();
}