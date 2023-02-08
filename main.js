
function Start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
Classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tl_xgVtQK/model.json",modelReady);
}

function modelReady(){
classifier.classify(gotResult);
}

function gotResult(error,results) {
if (error){
console.log(error);
}
else{
console.log(results);
red=Math.floor(Math.random()*255)+1;
green=Math.floor(Math.random()*255)+1;
blue=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML="I can hear "+results[0].label;
document.getElementById("accurate").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result_label").style.color="rgb("+red+","+green+","+blue+")";
document.getElementById("accurate").style.color="rgb("+red+","+green+","+blue+")";
img1=document.getElementById("i1");
    img2=document.getElementById("i2");
    img3=document.getElementById("i3");
    img4=document.getElementById("i4");
    if(results[0].label=="neighing"){
    img1.src="Ear.png";
    img2.src="dogbark gif.png";
    img3.src="NAk7.png";
    img4.src="spirit-riding-free-dreamworks-tv.gif";
    }
    else if(results[0].label=="dogBarking"){
        img1.src="Ear.png";
        img2.src="dogbark gif.gif";
        img3.src="NAk7.png";
        img4.src="spirit-riding-free-dreamworks-tv.png";
        }
        else if(results[0].label=="Meowing"){
            img1.src="Ear.png";
            img2.src="dogbark gif.png";
            img3.src="NAk7.gif";
            img4.src="spirit-riding-free-dreamworks-tv.png";
            }
            else {
                img1.src="Ear.gif";
                img2.src="dogbark gif.png";
                img3.src="NAk7.png";
                img4.src="spirit-riding-free-dreamworks-tv.png";
                }
    }
    }

