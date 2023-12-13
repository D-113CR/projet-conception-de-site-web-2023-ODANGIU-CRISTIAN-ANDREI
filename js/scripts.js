const quizData = [{
    question:"1.  En quelle année est apparu l'IBM 5150 ?",
    opt1:"1970",
    opt2:"2003",
    opt3:"1996",
    opt4:"1981",
    correct:"1981"
},
{
    question:"2.  C'est quoi la résolution de base du standard VGA ?",
    opt1:"640x480",
    opt2:"800x600",
    opt3:"320x200",
    opt4:"1024x768",
    correct:"640x480"
},
{
    question:"3. Et que veut dire VGA ?",
    opt1:"Variable Graphics Array",
    opt2:"Video Graphics Array",
    opt3:"VESA Graphics Array",
    opt4:"nVidia Graphics Array",
    correct:"Video Graphics Array"
},
{
    question:"4.  En quelle année a été inventée la souris moderne ?",
    opt1:"1973",
    opt2:"1983",
    opt3:"1993",
    opt4:"1969",
    correct:"1973"
},
{
    question:"5.  Et qui l'a créée ?",
    opt1:"IBM",
    opt2:"Mitsubishi",
    opt3:"Xerox",
    opt4:"Microsoft",
    correct:"Xerox"
},
{
    question:"6.  En quelle année a été créé le premier ordinateur ?",
    opt1:"1945",
    opt2:"1933",
    opt3:"1965",
    opt4:"1822",
    correct:"1945"
},
{
    question:"7.  Quel est le premier jeu vidéo ?",
    opt1:"Super Mario",
    opt2:"Pong",
    opt3:"Tetris",
    opt4:"Call of Duty",
    correct:"Pong"
},
{
    question:"8.  Qui est le fondateur de Microsoft",
    opt1:"Jeff Bezos",
    opt2:"Steve Jobs",
    opt3:"Linus Torvalds",
    opt4:"Bill Gates",
    correct:"Bill Gates"
},
{
    question:"9.  Que faire pour rendre une page web jolie ?",
    opt1:"Faire du CSS comme un grand",
    opt2:"Bootstrap",
    opt3:"Faire du CSS dans le fichier HTML",
    opt4:"Réquisitionner un pote infographiste",
    correct:"Réquisitionner un pote infographiste"
},
{
    question:"10. Quelle est la marque téléphones la plus connue ?",
    opt1:"Apple",
    opt2:"Nokia",
    opt3:"Motorola",
    opt4:"HTC",
    correct:"Nokia"
}];


var questionCounter=0;
var score=0;
var qstn=document.getElementById("question");
function showQuestions(){
    var opt1_text=document.getElementById("opt1_label");
    var opt2_text=document.getElementById("opt2_label");
    var opt3_text=document.getElementById("opt3_label");
    var opt4_text=document.getElementById("opt4_label");

    qstn.innerHTML=quizData[questionCounter].question;
    opt1_text.innerText=quizData[questionCounter].opt1;
    opt2_text.innerText=quizData[questionCounter].opt2;
    opt3_text.innerText=quizData[questionCounter].opt3;
    opt4_text.innerText=quizData[questionCounter].opt4;

    document.getElementById('opt-1').setAttribute("value",opt1_text.innerText);
    document.getElementById('opt-2').setAttribute("value",opt2_text.innerText);
    document.getElementById('opt-3').setAttribute("value",opt3_text.innerText);
    document.getElementById('opt-4').setAttribute("value",opt4_text.innerText);
}
showQuestions();

function save(){
    var options= document.getElementsByName('option');
    for (let i=0;i<4;i++){
        if(options[i].checked){
            var answer= options[i].value;
            options[i].checked=false;
            break;
        }
    }
    if(answer==quizData[questionCounter].correct){
        score+=10;
        document.getElementById('score').innerHTML="Score:"+score;
    }
    if(questionCounter<9){
        questionCounter++;
        showQuestions();
    }
    else{
        document.getElementById('mainContainer').style.display = "none";
        var id = setInterval(move, 10);
        var tPos = 73; // Position de départ
        var lPos = 30; // Position de départ (centre)
        var fSize = 10; // Taille de police de départ

        function move() {
            var finalScore = document.getElementById('showScore');
            if (tPos <= 35) { // Vérifie si la position finale est atteinte
                clearInterval(id);
            } 
            else {
                tPos -= 1; // Se déplace vers le haut en diminuant la distance depuis le haut
                fSize += 0.75; // Augmente la taille de la police
                finalScore.style.top = tPos + "%"; // Utilise le pourcentage pour le positionnement
                finalScore.style.left = lPos + "%"; // Utilise le pourcentage pour le centrage
                document.getElementById('score').innerHTML = "Final Score: " + score;
                document.getElementById('score').style.fontSize = fSize + "px";
            }
        }
    }
}