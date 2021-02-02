document.getElementById("search").addEventListener("click", searchSong);
document.getElementById("reset").addEventListener("click", resetForm);
//Fetching all the fields 
let artistElement=document.getElementById("artist");
let songElement=document.getElementById("song");
let albumElement=document.getElementById("album");
let genreElement=document.getElementById("genre");

//function to trigger search on enter button
artistElement.addEventListener("keyup", function(event) {    
    if (event.key === 'Enter') {
        searchSong();
    }
});
albumElement.addEventListener("keyup", function(event) {    
    if (event.key === 'Enter') {
        searchSong();
    }
});
songElement.addEventListener("keyup", function(event) {    
    if (event.key === 'Enter') {
        searchSong();
    }
});

init();

function init(){
    var favLocal = localStorage.getItem('favoriteArr');
    var favArrLocal = JSON.parse(favLocal);
    favArrLocal.forEach(function (arrayItem) {
        let itemIndex       = arrayItem.objIndex;
        let objName         = "song"+itemIndex;
        let coverDiv        = document.createElement("div");
        coverDiv.className  = 'col-sm-3';
        coverDiv.id         =  'imageDiv'+itemIndex;
        let allCoverDiv =   document.getElementById("albums");
        let imageTag        =   document.createElement("img");
        imageTag.src        =   "images/"+arrayItem.cover;
        imageTag.className  =   "img-fluid";
        
         
        coverDiv.onclick    =  function() {
            coverDivFunction(itemIndex);
          };
        coverDiv.appendChild(imageTag);
        
        allCoverDiv.appendChild(coverDiv);
    });
    
}
function coverDivFunction(itemIndex) {
    var favLocal = localStorage.getItem('favoriteArr');
    var favArrLocal = JSON.parse(favLocal);
  
    let obj = favArrLocal.find(o => o.objIndex == itemIndex);
    
    var indexToRemove   = favArrLocal.indexOf(obj);
    if (indexToRemove > -1) {
        favArrLocal.splice(indexToRemove, 1);
    }
    localStorage.setItem('favoriteArr', JSON.stringify(favArrLocal));
    let coverDiv = document.getElementById("imageDiv"+itemIndex);
    coverDiv.remove();
}
//reset form function
function resetForm(){
    artistElement.value="";
    songElement.value="";
    albumElement.value="";
    genreElement.value="";
}
let genreArr = ['pop','rock','country','hip hop','blues','heavy metal','dance pop'];

for(var i=0;i<genreArr.length;i++){
    var option  =   genreArr[i];
    var element =   document.createElement("option");
    element.textContent =   titleCase(option);
    element.value       = i+1;
    genreElement.appendChild(element);
}
class song{
    constructor(artist,song,time,album,rating,genre,cover){
        this.artist     =   artist;
        this.song       =   song;
        this.time       =   time;
        this.album      =   album;
        this.rating     =   rating;
        this.genre      =   genre;
        this.cover      =   cover;
    }
}

//defining all the class objects
let song1   =   new song("Brett Kissel","Drink About Me",'3.49',"Now or Never",'3',3,"Now_or_Never_Brett_Kissel.png");
let song2   =   new song("Brett Kissel","A Few Good Stories",'2.56',"Now or Never","4",3,"Now_or_Never_Brett_Kissel.png");
let song3   =   new song("Brett Kissel","Concrete",'2.56',"Now or Never","3",3,"Now_or_Never_Brett_Kissel.png");
let song4   =   new song("Brett Kissel","Hummingbird",'2.56',"Now or Never","5",3,"Now_or_Never_Brett_Kissel.png");
let song5   =   new song("Brett Kissel","I\'m Not Him, I\'m Not Her",'4.56',"Now or Never","4",3,"Now_or_Never_Brett_Kissel.png");

let song6   =   new song("Poppy","Concrete",'2.56',"I Disagree",'4',1,"220px-I_Disagree_Poppy.png");
let song7   =   new song("Poppy","I Disagree",'2.56',"I Disagree",'3',1,"220px-I_Disagree_Poppy.png");
let song8   =   new song("Poppy","Bloodmoney",'2.56',"I Disagree",'1',1,"220px-I_Disagree_Poppy.png");

let song9   =   new song("Justin Bieber","Baby",'3.65',"My World 2.0",'4',1,"justin1.jpg");
let song10   =   new song("Justin Bieber","Sombody to Love",'3.41',"My World 2.0",'3',1,"justin1.jpg");
let song11   =   new song("Justin Bieber","Stuck in the Moment",'3.43',"My World 2.0",'3',1,"justin1.jpg");

let song12   =   new song("Lady Gaga","Diamond Heart",'5.00',"Joanne",'5',3,"ladygaga2.jpg");
let song13   =   new song("Metallica","Battery",'5.12',"Master Of Puppets",'5',6,"mettalica.png");
let song14   =   new song("Lady Gaga","Just Dance",'5.00',"The Fame Monster",'4.5',1,"ladygaga1.jpg");
let song15   =   new song("Lady Gaga","LoveGame",'3.36',"The Fame Monster",'4.0',1,"ladygaga1.jpg");
let song16   =   new song("Enrique","Escape",'3.36',"Escape",'3.29',7,"Enrique_escape.jpg");
let song17   =   new song("Enrique","Love to See You Cry",'3.36',"Escape",'4.0',7,"Enrique_escape.jpg");


//search song function
function searchSong(){

    //check for the form fields are filled or not
    if(artistElement.value=="" && albumElement.value=="" && songElement.value=="" && genreElement.value==""){
        alert("Please fill the form fields!");
        artistElement.focus();
        return false;
    }
   let artistVal    = artistElement.value;
   let albumVal     = albumElement.value;
   let songVal      = songElement.value;
   let genreVal     = genreElement.value;
   let finalArray   = [];
    //show the results in the div
    let allSongsDiv =   document.getElementById("allsongs");
    let songDiv     =   '<table class="table table-striped table-dark table-hover"><thead class="thead-light"><tr><th scope="col">Artist</th><th scope="col">Song</th><th scope="col">Time</th><th scope="col">Album</th><th scope="col">Rating</th><th scope="col">Genre</th><th scope="col"></th><th scope="col"></th></tr></thead><tbody>';

    for (let index = 1; index <= 17; index++) {
        let objName = "song"+index;
        if((artistVal.toLowerCase()==eval(objName)['artist'].toLowerCase() || artistVal=="") && (albumVal.toLowerCase()==eval(objName)['album'].toLowerCase() || albumVal=="") && (songVal.toLowerCase()==eval(objName)['song'].toLowerCase() || songVal=="") && (genreVal==eval(objName)['genre'] || genreVal=="")){

            finalArray.push(eval(objName));
            songDiv =   songDiv + '<tr><th scope="row">'+eval(objName)['artist']+'</th><td>'+eval(objName)['song']+'</td><td>'+eval(objName)['time']+'</td><td>'+eval(objName)['album']+'</td><td>'+eval(objName)['rating']+'</td><td>'+titleCase(genreArr[eval(objName)['genre']-1])+'</td><td><button class="btn btn-lg btn-primary" onclick="favorite('+index+');">Favorite</button></td><td><button class="btn btn-lg btn-primary" onclick="download('+index+');">Download</button></td></tr>';
            
        }
    }
    
    allSongsDiv.innerHTML=songDiv;
}
function favorite(index){
    let objName         = "song"+index;
    let coverDiv        = document.createElement("div");
    coverDiv.className  = 'col-sm-3';
    coverDiv.id         =  'imageDiv'+index;

    var items   = [];
    //get existing localstorage
    var favArrLocal = localStorage.getItem('favoriteArr');
    favArrLocal = favArrLocal ?  JSON.parse(favArrLocal) : [];
    var arr={objIndex:index,cover:eval(objName)['cover']};

    favArrLocal.push(arr);
    localStorage.setItem('favoriteArr', JSON.stringify(favArrLocal));

    coverDiv.onclick =   function() {
        coverDivFunction(index);
      };
    let allCoverDiv =   document.getElementById("albums");
    

    let imageTag        =   document.createElement("img");
    imageTag.src        =   "images/"+eval(objName)['cover'];
    imageTag.className  =   "img-fluid";

    coverDiv.appendChild(imageTag);
    allCoverDiv.appendChild(coverDiv);
    //let coverDiv    = '<div class="col-sm-3"><img src="images/'+eval(objName)['cover']+'" class="img-fluid" alt="chainsmokers1"></div>';
    
   // allCoverDiv.innerHTML=coverDiv;
}
function download(index){
    alert("Download started");
}
function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

var socket = io.connect('http://localhost:3000');


