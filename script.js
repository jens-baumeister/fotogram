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
    'Die Orangerie im Barockgarten Großsedlitz, bei Dresden.',
    'Das Foto ist beim Aufstieg des Glockenturms, von Santa Maria del Fiore enstanden. (Dom von Florenz)',
    'Die Dresdner Frauenkirche bei Nacht',
    'Im Juli kann man morgens, gegen 5 Uhr, einen wunderschönen Sonnenaufgang an den Externsteinen genißen. (Falls man nicht schlafen kann &#128521)',
    'Das GOP in Bad Oeynhausen. Bekannt für seine Varietè Veranstaltungen.',
    'Der Bad Pyrmonter Kurpark zählt zu den schönsten Kurparks in Deutschland.',
    'Blick auf Florenz, von der Piazzale Michelangelo.',
    'Die Ponte Vecchio in Florenz. Mit ihren kleinen Geschäften, gehört sie zum Weltkulturerbe.',
    'Wo in Travemünde in der kalten Jahreszeit die Yachten ihren Winterschlaf halten, findet man im Sommer Kunstwerke aus Sand.',
    'Das Schloss von Schwerin. Regierungssitz des Landesregierung von Mecklenburg-Vorpommern.',
    'An der nördlichen Spitze von Sirmione am Gadasee, befindet sich die Beach Bar Lido delle Grotte. Der Ort ist auch bekannt als "Jamaica Beach".',
    'Die Wasserfestung von Sirmione "Castello Scaligero di Sirmione".',
    'Auf dem Weg, von der Wasserfestung zur Beachbar, kommt man an einigen wunderschönen Gärten vorbei, die zum verweilen einladen.',
    'Unweit der "Jamaica Beach" befindet sich die Ruine einer alten römischen Villa. Dort finden noch immer Ausgrabungen statt.',
    'Blaue Stunde, am Gadasee.',
    'Auch Störche sind Frühaufsteher und suchen sich ihr Frühstück in den Emmerwiesen, zwischen Lügde und Bad Pyrmont.',
    'Sonnenaufgang über Bad Pyrmont.',
    'Der Königshütter Wasserfall ist ein künstlich angelegter Wasserfall, des Naturparks Harz/Sachsen-Anhalt.',
    'Bei einem kleinen Spaziergang, am Südstrand von Wilhelmshaven, den Sonnenuntergang genießen.',
]

function render(myImgs, myImgDesc) {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = ""
    for (let i = 0; i < myImgs.length; i++) {
        contentRef.innerHTML += getPicsHtml(i, myImgs, myImgDesc);
    }
}

function getPicsHtml(i, myImgs, myImgDesc) {
    return `<div class="picture">            
            <img src="./assets/img/content-pics/${myImgs[i]}" alt="${myImgDesc[i]}">
        <div id="overlay" class="overlay"></div>            
            </div>`
}