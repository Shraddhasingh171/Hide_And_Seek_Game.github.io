const box1 = document.getElementById("boxes1");
const mainBox = document.querySelector(".box");
const box2 = document.getElementById("boxes2");
const box3 = document.getElementById("boxes3");
const box4 = document.getElementById("boxes4");
const box5 = document.getElementById("boxes5");
const box6 = document.getElementById("boxes6");
const box7 = document.getElementById("boxes7");
const box8 = document.getElementById("boxes8");
const box9 = document.getElementById("boxes9");
const box10 = document.getElementById("boxes10");
const box11 = document.getElementById("boxes11");
const box12= document.getElementById("boxes12");
const box13 = document.getElementById("boxes13");
const box14 = document.getElementById("boxes14");
const box15 = document.getElementById("boxes15");
const box16 = document.getElementById("boxes16");
const gift= document.getElementById("gifts-count");

var counter=0;
gift.innerHTML=counter;

const gameOver = document.getElementById("gameOver");
const gameWon = document.getElementById("gameWon");
// const playAgain = document.getElementById("playAgain");


function pageReload(){

    location.reload()
}

function nextLevel(){
    location.reload()

}
// playAgain.addEventListener("click",()=>{
//     location.reload
// })
// function onload(){
//     gameOver.style.display = none;
// }
let count = 0;

let bomb = 0;
function generateRandom() {
    let ans = 1;
    let temp = Math.ceil(Math.random()*16)

    if(temp != bomb) {
        ans = temp;
    }
    else{
        generateRandom();
    }
    return ans;
}


bomb = generateRandom()
console.log(bomb)


switch(bomb){
    case 1:
        box1.addEventListener("click",()=>{

            box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
        
        `

        gameOver.style.display="block";
         })
         break;
         case 2:
             box2.addEventListener("click",()=>{
                 
                 box2.innerHTML=`
                 <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
                 
                 `
                 gameOver.style.display="block";
                })

        break;
    case 3:
        box3.addEventListener("click",()=>{
            
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
            
            `
            gameOver.style.display="block";
         })
        break;
    case 4:
        box4.addEventListener("click",()=>{
            
            box4.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
            
            `
            gameOver.style.display="block";
         })
        break;
    case 5:
        box5.addEventListener("click",()=>{
            
            box5.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
            
            `
            gameOver.style.display="block";
         })
        break;
    case 6:
        box6.addEventListener("click",()=>{
            
            box6.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
            
            `
            gameOver.style.display="block";
         })
        break;
    case 7:
        box7.addEventListener("click",()=>{
            
            box7.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
            
            `
            gameOver.style.display="block";
         })
        break;
    case 8:
        box8.addEventListener("click",()=>{
            
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
            
            `
            gameOver.style.display="block";
         })
        break;
    case 9:
        box9.addEventListener("click",()=>{
            
            box9.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
         `
         gameOver.style.display="block";
         })
         break;
    case 10:
        box10.addEventListener("click",()=>{
            
            box10.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
         `
         gameOver.style.display="block";
         })
         break;
    case 11:
        box11.addEventListener("click",()=>{
            
            box11.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
         `
         gameOver.style.display="block";
         })
         break;
    case 12:
        box12.addEventListener("click",()=>{
            
            box12.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
         `
         gameOver.style.display="block";
         })
         break;
    case 13:
        box13.addEventListener("click",()=>{
            
            box12.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
         `
         gameOver.style.display="block";
         })
         break;
    case 14:
        box14.addEventListener("click",()=>{
            
            box14.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
         `
         gameOver.style.display="block";
         })
         break;
    case 15:
        box15.addEventListener("click",()=>{
            
            box15.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
         `
         gameOver.style.display="block";
         })
         break;
    case 16:
        box16.addEventListener("click",()=>{
            
            box16.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" >
         `
         gameOver.style.display="block";
         })
         break;
  
}

function generateRandomGift2(tempList){
    
    let ans = 1;
    let temp = Math.ceil(Math.random()*16)
    console.log("temp in gift 2 is " + temp)
    if(temp != bomb && temp != tempList[0]){
        ans = temp;
    }
    else {
       ans = generateRandomGift2(tempList)
    }
    return ans;
}

function generateRandomGift3(tempList){
    
    let ans = 1;
    let temp = Math.ceil(Math.random()*16)
    console.log("temp in gift  is 3 " + temp)
    
    if(temp != bomb && (temp != tempList[0] && temp != tempList[1])){
            ans = temp;
    }
   else{
    ans = generateRandomGift3(tempList)
   }
    return ans
}



let giftList = []

for(let i = 0;i<3;i++){
    // console.log("for loop\n")
    // console.log(giftList[i])
    if (i==1) {
        giftList[i] = generateRandomGift2(giftList)
        // if(giftList[i-1] == giftList[i]){
            //     giftList[i] = generateRandom()
            // }
            continue
        }
        if(i==2){
            giftList[i] = generateRandomGift3(giftList)
            // if(giftList[i-1] == giftList[i] || giftList[i-2] == giftList[i]){
                //     giftList[i] = generateRandom()
                // }
                continue
            }
            giftList[i] = generateRandom()
}

const [gift1,gift2,gift3] =  giftList
console.log(giftList)
console.log(gift1)
console.log(gift2)
console.log(gift3)


// let isPressedGift1 = true;
// let isPressedGift2 = true;
// let isPressedGift3 = true;

// if(isPressedGift1){


switch(gift1){
    case 1:
        box1.addEventListener("click",()=>{
            box1.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
             count++;
             if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

            })
            break;
            case 2:
                box2.addEventListener("click",()=>{
                    box2.innerHTML=`
                    <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
                    
                    count++;
                    if(count == 3){
                        gameWon.style.display="block"
                    }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 3:
    
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 4:
        box4.addEventListener("click",()=>{
            box4.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 5:
        box5.addEventListener("click",()=>{
            box5.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 6:
        box6.addEventListener("click",()=>{
            box6.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 7:
        box7.addEventListener("click",()=>{
            box7.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 9:
        box9.addEventListener("click",()=>{
            box9.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 10:
        box10.addEventListener("click",()=>{
            box10.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 11:
        box11.addEventListener("click",()=>{
            box11.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 12:
        box12.addEventListener("click",()=>{
            box12.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 13:
        box13.addEventListener("click",()=>{
            box13.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 14:
        box14.addEventListener("click",()=>{
            box14.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 15:
        box15.addEventListener("click",()=>{
            box15.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 16:
        box16.addEventListener("click",()=>{
            box16.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;

    
}
// isPressedGift1 = false;
// }

// if(isPressedGift2){

switch(gift2){
    case 1:
        box1.addEventListener("click",()=>{
            box1.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
             count++;
             if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

            })
            break;
            case 2:
                box2.addEventListener("click",()=>{
                    box2.innerHTML=`
                    <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
                    
                    count++;
                    if(count == 3){
                        gameWon.style.display="block"
                    }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 3:
    
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 4:
        box4.addEventListener("click",()=>{
            box4.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 5:
        box5.addEventListener("click",()=>{
            box5.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 6:
        box6.addEventListener("click",()=>{
            box6.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 7:
        box7.addEventListener("click",()=>{
            box7.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 9:
        box9.addEventListener("click",()=>{
            box9.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 10:
        box10.addEventListener("click",()=>{
            box10.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 11:
        box11.addEventListener("click",()=>{
            box11.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 12:
        box12.addEventListener("click",()=>{
            box12.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 13:
        box13.addEventListener("click",()=>{
            box13.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 14:
        box14.addEventListener("click",()=>{
            box14.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 15:
        box15.addEventListener("click",()=>{
            box15.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 16:
        box16.addEventListener("click",()=>{
            box16.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;

   


}
//    isPressedGift2=false 
// }

// if(isPressedGift3) {

switch(gift3){
    case 1:
        box1.addEventListener("click",()=>{
            box1.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
             count++;
             if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

            })
            break;
            case 2:
                box2.addEventListener("click",()=>{
                    box2.innerHTML=`
                    <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
                    
                    count++;
                    if(count == 3){
                        gameWon.style.display="block"
                    }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 3:
    
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 4:
        box4.addEventListener("click",()=>{
            box4.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 5:
        box5.addEventListener("click",()=>{
            box5.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 6:
        box6.addEventListener("click",()=>{
            box6.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 7:
        box7.addEventListener("click",()=>{
            box7.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 9:
        box9.addEventListener("click",()=>{
            box9.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 10:
        box10.addEventListener("click",()=>{
            box10.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 11:
        box11.addEventListener("click",()=>{
            box11.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 12:
        box12.addEventListener("click",()=>{
            box12.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 13:
        box13.addEventListener("click",()=>{
            box13.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 14:
        box14.addEventListener("click",()=>{
            box14.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 15:
        box15.addEventListener("click",()=>{
            box15.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;
    case 16:
        box16.addEventListener("click",()=>{
            box16.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png  "> `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;
            gift.innerHTML=counter;

          })
        break;


}



function generateRandomMiss() {
    let ran = Math.ceil(Math.random()*16)
   if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 ) {
    ans = ran;
   }
   else {
    ans = generateRandomMiss();
   }
   return ans;
}

function generateRandomMiss2(tempList) {
let ran = Math.ceil(Math.random()*16)
if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3  &&(ran != tempList[0])) {
ans = ran;
}
else {
ans = generateRandomMiss2(tempList);
}
return ans;
}

function generateRandomMiss3(tempList) {
let ran = Math.ceil(Math.random()*16)
if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 && (ran != tempList[0] && ran != tempList[1]) ) {
ans = ran;
}
else {
ans = generateRandomMiss3(tempList);
}
return ans;
}

function generateRandomMiss4(tempList) {
let ran = Math.ceil(Math.random()*16)
if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 && (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2])) {
ans = ran;
}
else {
ans = generateRandomMiss4(tempList);
}
return ans;
}

function generateRandomMiss5(tempList) {
let ran = Math.ceil(Math.random()*16)
if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3])) {
ans = ran;
}
else {
ans = generateRandomMiss5(tempList);
}
return ans;
}
function generateRandomMiss6(tempList) {
    let ran = Math.ceil(Math.random()*16)
    if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4])) {
    ans = ran;
    }
    else {
    ans = generateRandomMiss6(tempList);
    }
    return ans;
    }
    function generateRandomMiss7(tempList) {
        let ran = Math.ceil(Math.random()*16)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3] &&ran !=tempList[4] &&ran !=tempList[5] )) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss6(tempList);
        }
        return ans;
        }
    function generateRandomMiss8(tempList) {
        let ran = Math.ceil(Math.random()*16)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] )) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss8(tempList);
        }
        return ans;
        }
    function generateRandomMiss9(tempList) {
        let ran = Math.ceil(Math.random()*16)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7])) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss9(tempList);
        }
        return ans;
        }
    function generateRandomMiss10(tempList) {
        let ran = Math.ceil(Math.random()*16)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8])) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss10(tempList);
        }
        return ans;
        }
    function generateRandomMiss11(tempList) {
        let ran = Math.ceil(Math.random()*16)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9])) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss11(tempList);
        }
        return ans;
        }
    function generateRandomMiss12(tempList) {
        let ran = Math.ceil(Math.random()*16)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10])) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss12(tempList);
        }
        return ans;
        }
let missArray = []

for(let i= 0;i<12;i++) {
    if (i==1) {
        missArray[i] = generateRandomMiss2(missArray)
        // if(giftList[i-1] == giftList[i]){
            //     giftList[i] = generateRandom()
            // }
            continue
        }
        if(i==2){
            missArray[i] = generateRandomMiss3(missArray)
            // if(giftList[i-1] == giftList[i] || giftList[i-2] == giftList[i]){
                //     giftList[i] = generateRandom()
                // }
                continue
            }
        if(i==3){
            missArray[i] = generateRandomMiss4(missArray)
            continue
            
        }
        if(i == 4) {
            missArray[i] = generateRandomMiss5(missArray)
            continue

        }
        if(i == 5) {
            missArray[i] = generateRandomMiss6(missArray)
            continue

        }
        if(i == 6) {
            missArray[i] = generateRandomMiss7(missArray)
            continue

        }
        if(i == 7) {
            missArray[i] = generateRandomMiss8(missArray)
            continue

        }
        if(i == 8) {
            missArray[i] = generateRandomMiss9(missArray)
            continue

        }
        if(i == 9) {
            missArray[i] = generateRandomMiss10(missArray)
            continue

        }
        if(i == 10) {
            missArray[i] = generateRandomMiss11(missArray)
            continue

        }
        if(i == 11) {
            missArray[i] = generateRandomMiss12(missArray)
            continue

        }
        missArray[i] = generateRandomMiss()

}

console.log("printing the miss array")
missArray.forEach(element => {
console.log(element)
});

const [miss1, miss2,miss3,miss4,miss5,miss6,miss7,miss8,miss9,miss10,miss11,miss12] = missArray





switch(miss1){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 10:
            box10.addEventListener("click",()=>{
                box10.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 11:
            box11.addEventListener("click",()=>{
                box11.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 12:
            box12.addEventListener("click",()=>{
                box12.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 13:
            box13.addEventListener("click",()=>{
                box13.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 14:
            box14.addEventListener("click",()=>{
                box14.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 15:
            box15.addEventListener("click",()=>{
                box15.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 16:
            box16.addEventListener("click",()=>{
                box16.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
}


switch(miss2){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}


switch(miss3){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}


switch(miss4){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}
switch(miss5){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}
switch(miss6){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}
switch(miss7){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}
switch(miss8){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}
switch(miss9){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}
switch(miss10){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}
switch(miss11){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}
switch(miss12){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png "> `
           
                  })
                  break;
}
