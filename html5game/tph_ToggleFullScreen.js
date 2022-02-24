function ToggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

function userName(){
  let text="Default";
  let person = prompt("Twitter or Discord Username:", "Default");
  if (person == null || person == "") {
   console.log("empty");
  } else {
    gml_Script_gmcallback_userName(null,null,person);
  console.log("done");
  }
}
function submitScore(name,score){
    if(score>lowerScore){
        db.collection("leaderboard").add({
            name: name,
            score: score
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }else{
        console.log("to lower score");
    }
}

function submitArray(){
let arr=[];
arr[0]="hola";
arr[1]="bye";
console.log(globalTable);
gml_Script_gmcallback_submitArray(null,null,globalTable);
}