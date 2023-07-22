var markerSelected = null;
var tileSelected = null;

var board = [
    "----------",
    "----------",
    "----------",
    "----------",
    "----------",
    "----------",
    "----------",
    "----------",
    "----------",
    "----------"
]

var solution = [
    "1111111111",
    "----------",
    "----------",
    "----------",
    "1--------1",
    "1--------1",
    "----------",
    "----------",
    "----------",
    "1111111111"
]

window.onload = function() {
    setGame();
}

function setGame() {
    for(let i = 1; i <= 2; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectMarker);
        number.classList.add("numbers");
        document.getElementById("markers").appendChild(number);
    }

    for(let j = 0; j < 10; j++) {
        for(let k = 0; k < 10; k++) {
            let tile = document.createElement("div");
            tile.id = j.toString() + "-" + k.toString();
            if(board[j][k] != '-') {
                tile.innerText = board[j][k]
            }
            if(j == 4) {
                tile.classList.add("horizontal-line");
            }
            if(k == 4) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectMarker() {
    if(markerSelected != null) {
        markerSelected.classList.remove("marker-selected");
    }
    markerSelected = this;
    markerSelected.classList.add("marker-selected");
}

function selectTile() {
    if(markerSelected) {
        if(this.innerText == markerSelected.id) {
            this.innerText = "";
            return;
        }
        this.innerText = markerSelected.id;
    }
}