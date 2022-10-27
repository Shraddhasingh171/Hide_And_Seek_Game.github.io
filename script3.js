const mainBox = document.querySelector(".boxs");
const box1 = document.getElementById("boxe1");
const box2 = document.getElementById("boxe2");
const box3 = document.getElementById("boxe3");
const box4 = document.getElementById("boxe4");
const box5 = document.getElementById("boxe5");
const box6 = document.getElementById("boxe6");
const box7 = document.getElementById("boxe7");
const box8 = document.getElementById("boxe8");
const box9 = document.getElementById("boxe9");
const box10 = document.getElementById("boxe10");
const box11 = document.getElementById("boxe11");
const box12 = document.getElementById("boxe12");
const box13 = document.getElementById("boxe13");
const box14 = document.getElementById("boxe14");
const box15 = document.getElementById("boxe15");
const box16 = document.getElementById("boxe16");
const box17 = document.getElementById("boxe17");
const box18 = document.getElementById("boxe18");
const box19 = document.getElementById("boxe19");
const box20 = document.getElementById("boxe20");
const box21 = document.getElementById("boxe21");
const box22 = document.getElementById("boxe22");
const box23 = document.getElementById("boxe23");
const box24 = document.getElementById("boxe24");
const box25 = document.getElementById("boxe25");
const box26 = document.getElementById("boxe26");
const box27= document.getElementById("boxe27");
const box28= document.getElementById("boxe28");
const box29= document.getElementById("boxe29");
const box30= document.getElementById("boxe30");
const box31 = document.getElementById("boxe31");
const box32 = document.getElementById("boxe32");
const box33 = document.getElementById("boxe33");
const box34 = document.getElementById("boxe34");
const box35 = document.getElementById("boxe35");
const box36 = document.getElementById("boxe36");

const gift= document.getElementById("gifts-count")
var counter=0;
gift.innerHTML=counter;



const gameOver = document.getElementById("gameOver");
const gameWon = document.getElementById("gameWon");
// const playAgain = document.getElementById("playAgain");



function pageReload(){

    location.reload()
}
let count = 0;

let bomb = 0;
function generateRandom() {
    let ans = 1;
    let temp = Math.ceil(Math.random()*36)

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
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk"  > `
             
                gameOver.style.display="block"
            
            })
            break;
    case 2:
                box2.addEventListener("click",()=>{
                    box2.innerHTML=`
                     <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
                    
                  
                        gameOver.style.display="block"
                    
          })
        break;
    case 3:
    
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
          
                gameOver.style.display="block"
            
          })
        break;
    case 4:
        box4.addEventListener("click",()=>{
            box4.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
            
                gameOver.style.display="block"
            
          })
        break;
    case 5:
        box5.addEventListener("click",()=>{
            box5.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 6:
        box6.addEventListener("click",()=>{
            box6.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 7:
        box7.addEventListener("click",()=>{
            box7.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            

          })
        break;
    case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 9:
        box9.addEventListener("click",()=>{
            box9.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
             gameOver.style.display="block"
            
          })
        break;
    case 10:
        box10.addEventListener("click",()=>{
            box10.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 11:
        box11.addEventListener("click",()=>{
            box11.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
         
                gameOver.style.display="block"
            
          })
        break;
    case 12:
        box12.addEventListener("click",()=>{
            box12.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 13:
        box13.addEventListener("click",()=>{
            box13.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 14:
        box14.addEventListener("click",()=>{
            box14.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 15:
        box15.addEventListener("click",()=>{
            box15.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 16:
        box16.addEventListener("click",()=>{
            box16.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 17:
        box17.addEventListener("click",()=>{
            box17.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 18:
        box18.addEventListener("click",()=>{
            box18.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 19:
        box19.addEventListener("click",()=>{
            box19.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 20:
        box20.addEventListener("click",()=>{
            box20.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 21:
        box21.addEventListener("click",()=>{
            box21.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 22:
        box22.addEventListener("click",()=>{
            box22.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 23:
        box23.addEventListener("click",()=>{
            box23.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 24:
        box24.addEventListener("click",()=>{
            box24.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
            
                gameOver.style.display="block"
            
          })
        break;
    case 25:
        box25.addEventListener("click",()=>{
            box25.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 26:
        box26.addEventListener("click",()=>{
            box26.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
          
                gameOver.style.display="block"
            
          })
        break;
    case 27:
        box27.addEventListener("click",()=>{
            box27.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 28:
        box28.addEventListener("click",()=>{
            box28.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 29:
        box29.addEventListener("click",()=>{
            box29.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 30:
        box30.addEventListener("click",()=>{
            box30.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 31:
        box31.addEventListener("click",()=>{
            box31.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 32:
        box32.addEventListener("click",()=>{
            box32.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 33:
        box33.addEventListener("click",()=>{
            box33.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 34:
        box34.addEventListener("click",()=>{
            box34.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
            
                gameOver.style.display="block"
            
          })
        break;
    case 35:
        box35.addEventListener("click",()=>{
            box35.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
           
                gameOver.style.display="block"
            
          })
        break;
    case 36:
        box36.addEventListener("click",()=>{
            box36.innerHTML=`
             <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/bomb_1f4a3.png" class="lk" > `
          
                gameOver.style.display="block"
            
          })
        break;
    
}

function generateRandomGift2(tempList){
    
    let ans = 1;
    let temp = Math.ceil(Math.random()*36)
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
    let temp = Math.ceil(Math.random()*36)
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



    switch(gift1){
        case 1:
            box1.addEventListener("click",()=>{
                box1.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                 count++;
                 if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
                })
                break;
        case 2:
                    box2.addEventListener("click",()=>{
                        box2.innerHTML=`
                        <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                        
                        count++;
                        if(count == 3){
                            gameWon.style.display="block"
                        }counter++;gift.innerHTML=counter;
              })
            break;
        case 3:
        
            box3.addEventListener("click",()=>{
                box3.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 5:
            box5.addEventListener("click",()=>{
                box5.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 6:
            box6.addEventListener("click",()=>{
                box6.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 7:
            box7.addEventListener("click",()=>{
                box7.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
    
              })
            break;
        case 8:
            box8.addEventListener("click",()=>{
                box8.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 10:
            box10.addEventListener("click",()=>{
                box10.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 11:
            box11.addEventListener("click",()=>{
                box11.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 12:
            box12.addEventListener("click",()=>{
                box12.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 13:
            box13.addEventListener("click",()=>{
                box13.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 14:
            box14.addEventListener("click",()=>{
                box14.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 15:
            box15.addEventListener("click",()=>{
                box15.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 16:
            box16.addEventListener("click",()=>{
                box16.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 17:
            box17.addEventListener("click",()=>{
                box17.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 18:
            box18.addEventListener("click",()=>{
                box18.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 19:
            box19.addEventListener("click",()=>{
                box19.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 20:
            box20.addEventListener("click",()=>{
                box20.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 21:
            box21.addEventListener("click",()=>{
                box21.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 22:
            box22.addEventListener("click",()=>{
                box22.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 23:
            box23.addEventListener("click",()=>{
                box23.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 24:
            box24.addEventListener("click",()=>{
                box24.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 25:
            box25.addEventListener("click",()=>{
                box25.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 26:
            box26.addEventListener("click",()=>{
                box26.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 27:
            box27.addEventListener("click",()=>{
                box27.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 28:
            box28.addEventListener("click",()=>{
                box28.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 29:
            box29.addEventListener("click",()=>{
                box29.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 30:
            box30.addEventListener("click",()=>{
                box30.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 31:
            box31.addEventListener("click",()=>{
                box31.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 32:
            box32.addEventListener("click",()=>{
                box32.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 33:
            box33.addEventListener("click",()=>{
                box33.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 34:
            box34.addEventListener("click",()=>{
                box34.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 35:
            box35.addEventListener("click",()=>{
                box35.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 36:
            box36.addEventListener("click",()=>{
                box36.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        
    }
    switch(gift2){
        case 1:
            box1.addEventListener("click",()=>{
                box1.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                 count++;
                 if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
                })
                break;
        case 2:
                    box2.addEventListener("click",()=>{
                        box2.innerHTML=`
                        <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                        
                        count++;
                        if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 3:
        
            box3.addEventListener("click",()=>{
                box3.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 5:
            box5.addEventListener("click",()=>{
                box5.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 6:
            box6.addEventListener("click",()=>{
                box6.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 7:
            box7.addEventListener("click",()=>{
                box7.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
    
              })
            break;
        case 8:
            box8.addEventListener("click",()=>{
                box8.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 10:
            box10.addEventListener("click",()=>{
                box10.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 11:
            box11.addEventListener("click",()=>{
                box11.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 12:
            box12.addEventListener("click",()=>{
                box12.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 13:
            box13.addEventListener("click",()=>{
                box13.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 14:
            box14.addEventListener("click",()=>{
                box14.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 15:
            box15.addEventListener("click",()=>{
                box15.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 16:
            box16.addEventListener("click",()=>{
                box16.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 17:
            box17.addEventListener("click",()=>{
                box17.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 18:
            box18.addEventListener("click",()=>{
                box18.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 19:
            box19.addEventListener("click",()=>{
                box19.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 20:
            box20.addEventListener("click",()=>{
                box20.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 21:
            box21.addEventListener("click",()=>{
                box21.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 22:
            box22.addEventListener("click",()=>{
                box22.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 23:
            box23.addEventListener("click",()=>{
                box23.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 24:
            box24.addEventListener("click",()=>{
                box24.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 25:
            box25.addEventListener("click",()=>{
                box25.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 26:
            box26.addEventListener("click",()=>{
                box26.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 27:
            box27.addEventListener("click",()=>{
                box27.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 28:
            box28.addEventListener("click",()=>{
                box28.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 29:
            box29.addEventListener("click",()=>{
                box29.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 30:
            box30.addEventListener("click",()=>{
                box30.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 31:
            box31.addEventListener("click",()=>{
                box31.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 32:
            box32.addEventListener("click",()=>{
                box32.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 33:
            box33.addEventListener("click",()=>{
                box33.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 34:
            box34.addEventListener("click",()=>{
                box34.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 35:
            box35.addEventListener("click",()=>{
                box35.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        case 36:
            box36.addEventListener("click",()=>{
                box36.innerHTML=`
                <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                count++;
                if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
              })
            break;
        
    }
   
    
    switch(gift3){
    case 1:
        box1.addEventListener("click",()=>{
            box1.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
             count++;
             if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
            })
            break;
    case 2:
                box2.addEventListener("click",()=>{
                    box2.innerHTML=`
                    <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
                    
                    count++;
                    if(count == 3){
                        gameWon.style.display="block"
                    }counter++;gift.innerHTML=counter;
          })
        break;
    case 3:
    
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 4:
        box4.addEventListener("click",()=>{
            box4.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 5:
        box5.addEventListener("click",()=>{
            box5.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 6:
        box6.addEventListener("click",()=>{
            box6.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 7:
        box7.addEventListener("click",()=>{
            box7.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
    
          })
        break;
    case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 9:
        box9.addEventListener("click",()=>{
            box9.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 10:
        box10.addEventListener("click",()=>{
            box10.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 11:
        box11.addEventListener("click",()=>{
            box11.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 12:
        box12.addEventListener("click",()=>{
            box12.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 13:
        box13.addEventListener("click",()=>{
            box13.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 14:
        box14.addEventListener("click",()=>{
            box14.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 15:
        box15.addEventListener("click",()=>{
            box15.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 16:
        box16.addEventListener("click",()=>{
            box16.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 17:
        box17.addEventListener("click",()=>{
            box17.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 18:
        box18.addEventListener("click",()=>{
            box18.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 19:
        box19.addEventListener("click",()=>{
            box19.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 20:
        box20.addEventListener("click",()=>{
            box20.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 21:
        box21.addEventListener("click",()=>{
            box21.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 22:
        box22.addEventListener("click",()=>{
            box22.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 23:
        box23.addEventListener("click",()=>{
            box23.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 24:
        box24.addEventListener("click",()=>{
            box24.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 25:
        box25.addEventListener("click",()=>{
            box25.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 26:
        box26.addEventListener("click",()=>{
            box26.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 27:
        box27.addEventListener("click",()=>{
            box27.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 28:
        box28.addEventListener("click",()=>{
            box28.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 29:
        box29.addEventListener("click",()=>{
            box29.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }
          })
        break;
    case 30:
        box30.addEventListener("click",()=>{
            box30.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 31:
        box31.addEventListener("click",()=>{
            box31.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 32:
        box32.addEventListener("click",()=>{
            box32.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 33:
        box33.addEventListener("click",()=>{
            box33.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 34:
        box34.addEventListener("click",()=>{
            box34.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 35:
        box35.addEventListener("click",()=>{
            box35.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    case 36:
        box36.addEventListener("click",()=>{
            box36.innerHTML=`
            <img src=" https://emojipedia-us.s3.amazonaws.com/source/skype/289/wrapped-gift_1f381.png " class="lk" > `
            count++;
            if(count == 3){
                gameWon.style.display="block"
            }counter++;gift.innerHTML=counter;
          })
        break;
    
    }

   
    





    function generateRandomMiss() {
      let ran = Math.ceil(Math.random()*36)
     if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 ) {
      ans = ran;
     }
     else {
      ans = generateRandomMiss();
     }
     return ans;
  }
  
  function generateRandomMiss2(tempList) {
  let ran = Math.ceil(Math.random()*36)
  if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3  &&(ran != tempList[0])) {
  ans = ran;
  }
  else {
  ans = generateRandomMiss2(tempList);
  }
  return ans;
  }
  
  function generateRandomMiss3(tempList) {
  let ran = Math.ceil(Math.random()*36)
  if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 && (ran != tempList[0] && ran != tempList[1]) ) {
  ans = ran;
  }
  else {
  ans = generateRandomMiss3(tempList);
  }
  return ans;
  }
  
  function generateRandomMiss4(tempList) {
  let ran = Math.ceil(Math.random()*36)
  if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 && (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2])) {
  ans = ran;
  }
  else {
  ans = generateRandomMiss4(tempList);
  }
  return ans;
  }
  
  function generateRandomMiss5(tempList) {
  let ran = Math.ceil(Math.random()*36)
  if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3])) {
  ans = ran;
  }
  else {
  ans = generateRandomMiss5(tempList);
  }
  return ans;
  }
  function generateRandomMiss6(tempList) {
      let ran = Math.ceil(Math.random()*36)
      if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4])) {
      ans = ran;
      }
      else {
      ans = generateRandomMiss6(tempList);
      }
      return ans;
      }
      function generateRandomMiss7(tempList) {
          let ran = Math.ceil(Math.random()*36)
          if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3] &&ran !=tempList[4] &&ran !=tempList[5])) {
          ans = ran;
          }
          else {
          ans = generateRandomMiss6(tempList);
          }
          return ans;
          }
      function generateRandomMiss8(tempList) {
          let ran = Math.ceil(Math.random()*36)
          if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6])) {
          ans = ran;
          }
          else {
          ans = generateRandomMiss8(tempList);
          }
          return ans;
          }
      function generateRandomMiss9(tempList) {
          let ran = Math.ceil(Math.random()*36)
          if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7])) {
          ans = ran;
          }
          else {
          ans = generateRandomMiss9(tempList);
          }
          return ans;
          }
      function generateRandomMiss10(tempList) {
          let ran = Math.ceil(Math.random()*36)
          if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8])) {
          ans = ran;
          }
          else {
          ans = generateRandomMiss10(tempList);
          }
          return ans;
          }
      function generateRandomMiss11(tempList) {
          let ran = Math.ceil(Math.random()*36)
          if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9])) {
          ans = ran;
          }
          else {
          ans = generateRandomMiss11(tempList);
          }
          return ans;
          }
      function generateRandomMiss12(tempList) {
          let ran = Math.ceil(Math.random()*36)
          if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10])) {
          ans = ran;
          }
          else {
          ans = generateRandomMiss12(tempList);
          }
          return ans;
          }
          function generateRandomMiss13(tempList) {
            let ran = Math.ceil(Math.random()*36)
           if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&(ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11])) {
            ans = ran;
           }
           else {
            ans = generateRandomMiss13(tempList);
           }
           return ans;
        }
        
        function generateRandomMiss14(tempList) {
        let ran = Math.ceil(Math.random()*36)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3  &&(ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12])) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss14(tempList);
        }
        return ans;
        }
        
        function generateRandomMiss15(tempList) {
        let ran = Math.ceil(Math.random()*36)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 && (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]) ) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss15(tempList);
        }
        return ans;
        }
        
        function generateRandomMiss16(tempList) {
        let ran = Math.ceil(Math.random()*36)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 && (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14])) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss16(tempList);
        }
        return ans;
        }
        
        function generateRandomMiss17(tempList) {
        let ran = Math.ceil(Math.random()*36)
        if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 && (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15])) {
        ans = ran;
        }
        else {
        ans = generateRandomMiss17(tempList);
        }
        return ans;
        }
        function generateRandomMiss18(tempList) {
            let ran = Math.ceil(Math.random()*36)
            if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 && (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]) ){
            ans = ran;
            }
            else {
            ans = generateRandomMiss18(tempList);
            }
            return ans;
            }
            function generateRandomMiss19(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss19(tempList);
                }
                return ans;
                }
            function generateRandomMiss20(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss20(tempList);
                }
                return ans;
                }
            function generateRandomMiss21(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss21(tempList);
                }
                return ans;
                }
            function generateRandomMiss22(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss22(tempList);
                }
                return ans;
                }
            function generateRandomMiss23(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss23(tempList);
                }
                return ans;
                }
            function generateRandomMiss24(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21]&&ran !=tempList[22])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss24(tempList);
                }
                return ans;
                }
            function generateRandomMiss25(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21]&&ran !=tempList[22]&&ran !=tempList[23])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss25(tempList);
                }
                return ans;
                }
            function generateRandomMiss26(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21]&&ran !=tempList[22]&&ran !=tempList[23]&&ran !=tempList[24]) ){
                ans = ran;
                }
                else {
                ans = generateRandomMiss26(tempList);
                }
                return ans;
                }
            function generateRandomMiss27(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21]&&ran !=tempList[22]&&ran !=tempList[23]&&ran !=tempList[24]&&ran !=tempList[25])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss27(tempList);
                }
                return ans;
                }
            function generateRandomMiss28(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21]&&ran !=tempList[22]&&ran !=tempList[23]&&ran !=tempList[24]&&ran !=tempList[25]&&ran !=tempList[26])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss28(tempList);
                }
                return ans;
                }
            function generateRandomMiss29(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21]&&ran !=tempList[22]&&ran !=tempList[23]&&ran !=tempList[24]&&ran !=tempList[25]&&ran !=tempList[26]&&ran !=tempList[27] )){
                ans = ran;
                }
                else {
                ans = generateRandomMiss29(tempList);
                }
                return ans;
                }
            function generateRandomMiss30(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21]&&ran !=tempList[22]&&ran !=tempList[23]&&ran !=tempList[24]&&ran !=tempList[25]&&ran !=tempList[26]&&ran !=tempList[28] ) ) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss30(tempList);
                }
                return ans;
                }
            function generateRandomMiss31(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21]&&ran !=tempList[22]&&ran !=tempList[23]&&ran !=tempList[24]&&ran !=tempList[25]&&ran !=tempList[26]&&ran !=tempList[28]&&ran !=tempList[29] )) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss31(tempList);
                }
                return ans;
                }
            function generateRandomMiss32(tempList) {
                let ran = Math.ceil(Math.random()*36)
                if(ran!=bomb  &&  ran!=gift1 && ran!=gift2 && ran!=gift3 &&  (ran != tempList[0] && ran != tempList[1] && ran!= tempList[2] &&ran !=tempList[3]&&ran !=tempList[4] &&ran !=tempList[5] &&ran !=tempList[6] &&ran !=tempList[7]&&ran !=tempList[8]&&ran !=tempList[9]&&ran !=tempList[10]&&ran !=tempList[11]&&ran !=tempList[12]&&ran !=tempList[13]&&ran !=tempList[14]&&ran !=tempList[15]&&ran !=tempList[16]&&ran !=tempList[17]&&ran !=tempList[18]&&ran !=tempList[19]&&ran !=tempList[20]&&ran !=tempList[21]&&ran !=tempList[22]&&ran !=tempList[23]&&ran !=tempList[24]&&ran !=tempList[25]&&ran !=tempList[26]&&ran !=tempList[28]&&ran !=tempList[29] &&ran !=tempList[30])) {
                ans = ran;
                }
                else {
                ans = generateRandomMiss32(tempList);
                }
                return ans;
                }
  let missArray = []
  
  for(let i= 0;i<32;i++) {
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
      if (i==12) {
          missArray[i] = generateRandomMiss13(missArray)
          // if(giftList[i-1] == giftList[i]){
              //     giftList[i] = generateRandom()
              // }
              continue
          }
          if(i==13){
              missArray[i] = generateRandomMiss14(missArray)
              // if(giftList[i-1] == giftList[i] || giftList[i-2] == giftList[i]){
                  //     giftList[i] = generateRandom()
                  // }
                  continue
              }
          if(i==14){
              missArray[i] = generateRandomMiss15(missArray)
              continue
              
          }
          if(i == 15) {
              missArray[i] = generateRandomMiss16(missArray)
              continue
  
          }
          if(i == 16) {
              missArray[i] = generateRandomMiss17(missArray)
              continue
  
          }
          if(i == 17) {
              missArray[i] = generateRandomMiss18(missArray)
              continue
  
          }
          if(i == 18) {
              missArray[i] = generateRandomMiss19(missArray)
              continue
  
          }
          if(i == 19) {
              missArray[i] = generateRandomMiss20(missArray)
              continue
  
          }
          if(i == 20) {
              missArray[i] = generateRandomMiss21(missArray)
              continue
  
          }
          if(i == 21) {
              missArray[i] = generateRandomMiss22(missArray)
              continue
  
          }
          if(i == 22) {
              missArray[i] = generateRandomMiss23(missArray)
              continue
  
          }
          
          if(i == 23) {
              missArray[i] = generateRandomMiss24(missArray)
              continue
  
          }
          if(i == 24) {
              missArray[i] = generateRandomMiss25(missArray)
              continue
  
          }
          if(i == 25) {
              missArray[i] = generateRandomMiss26(missArray)
              continue
  
          }
          if(i == 26) {
              missArray[i] = generateRandomMiss27(missArray)
              continue
  
          }
          if(i == 27) {
              missArray[i] = generateRandomMiss28(missArray)
              continue
  
          }
          if(i == 28) {
              missArray[i] = generateRandomMiss29(missArray)
              continue
  
          }
          if(i == 29) {
              missArray[i] = generateRandomMiss30(missArray)
              continue
  
          }
          if(i == 30) {
              missArray[i] = generateRandomMiss31(missArray)
              continue
  
          }
          if(i == 31) {
              missArray[i] = generateRandomMiss32(missArray)
              continue
  
          }
         
          missArray[i] = generateRandomMiss()
  
  }
  console.log("printing the miss array")
missArray.forEach(element => {
console.log(element)
});
const [miss1, miss2,miss3,miss4,miss5,miss6,miss7,miss8,miss9,miss10,miss11,miss12,miss13,miss14,miss15,miss16,miss17,miss18,miss19,miss20,miss21,miss22,miss23,miss24,miss25,miss26,miss27,miss28,miss29,miss30,miss31,miss32] = missArray





switch(miss1){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 10:
            box10.addEventListener("click",()=>{
                box10.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 11:
            box11.addEventListener("click",()=>{
                box11.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 12:
            box12.addEventListener("click",()=>{
                box12.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 13:
            box13.addEventListener("click",()=>{
                box13.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 14:
            box14.addEventListener("click",()=>{
                box14.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 15:
            box15.addEventListener("click",()=>{
                box15.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 16:
            box16.addEventListener("click",()=>{
                box16.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
              break;
    case 17:
                box17.addEventListener("click",()=>{
                    box17.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 18:
                box18.addEventListener("click",()=>{
                    box18.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 19:
                box19.addEventListener("click",()=>{
                    box19.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 20:
                box20.addEventListener("click",()=>{
                    box20.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 21:
                box21.addEventListener("click",()=>{
                    box21.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 22:
                box22.addEventListener("click",()=>{
                    box22.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 23:
                box23.addEventListener("click",()=>{
                    box23.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
                  })
                  break;
    case 24:
                box24.addEventListener("click",()=>{
                    box24.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 25:
                box25.addEventListener("click",()=>{
                    box25.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 26:
                box26.addEventListener("click",()=>{
                    box26.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 27:
                box27.addEventListener("click",()=>{
                    box27.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 28:
                box28.addEventListener("click",()=>{
                    box28.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 29:
                box29.addEventListener("click",()=>{
                    box29.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 30:
                box30.addEventListener("click",()=>{
                    box30.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 31:
                box31.addEventListener("click",()=>{
                    box31.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 32:
                box32.addEventListener("click",()=>{
                    box32.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 33:
                box33.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 34:
                box34.addEventListener("click",()=>{
                    box34.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 35:
                box35.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 36:
                box36.addEventListener("click",()=>{
                    box36.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
}


switch(miss2){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
                  break;
    case 17:
                box17.addEventListener("click",()=>{
                    box17.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 18:
                box18.addEventListener("click",()=>{
                    box18.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 19:
                box19.addEventListener("click",()=>{
                    box19.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 20:
                box20.addEventListener("click",()=>{
                    box20.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 21:
                box21.addEventListener("click",()=>{
                    box21.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 22:
                box22.addEventListener("click",()=>{
                    box22.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 23:
                box23.addEventListener("click",()=>{
                    box23.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
                  })
                  break;
    case 24:
                box24.addEventListener("click",()=>{
                    box24.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 25:
                box25.addEventListener("click",()=>{
                    box25.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 26:
                box26.addEventListener("click",()=>{
                    box26.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 27:
                box27.addEventListener("click",()=>{
                    box27.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 28:
                box28.addEventListener("click",()=>{
                    box28.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 29:
                box29.addEventListener("click",()=>{
                    box29.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 30:
                box30.addEventListener("click",()=>{
                    box30.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 31:
                box31.addEventListener("click",()=>{
                    box31.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 32:
                box32.addEventListener("click",()=>{
                    box32.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 33:
                box33.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 34:
                box34.addEventListener("click",()=>{
                    box34.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 35:
                box35.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 36:
                box36.addEventListener("click",()=>{
                    box36.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
}


switch(miss3){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
                  break;
    case 17:
                box17.addEventListener("click",()=>{
                    box17.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 18:
                box18.addEventListener("click",()=>{
                    box18.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 19:
                box19.addEventListener("click",()=>{
                    box19.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 20:
                box20.addEventListener("click",()=>{
                    box20.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 21:
                box21.addEventListener("click",()=>{
                    box21.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 22:
                box22.addEventListener("click",()=>{
                    box22.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 23:
                box23.addEventListener("click",()=>{
                    box23.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
                  })
                  break;
    case 24:
                box24.addEventListener("click",()=>{
                    box24.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 25:
                box25.addEventListener("click",()=>{
                    box25.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 26:
                box26.addEventListener("click",()=>{
                    box26.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 27:
                box27.addEventListener("click",()=>{
                    box27.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 28:
                box28.addEventListener("click",()=>{
                    box28.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 29:
                box29.addEventListener("click",()=>{
                    box29.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 30:
                box30.addEventListener("click",()=>{
                    box30.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 31:
                box31.addEventListener("click",()=>{
                    box31.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 32:
                box32.addEventListener("click",()=>{
                    box32.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 33:
                box33.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 34:
                box34.addEventListener("click",()=>{
                    box34.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 35:
                box35.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 36:
                box36.addEventListener("click",()=>{
                    box36.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
}


switch(miss4){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 17:
                box17.addEventListener("click",()=>{
                    box17.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 18:
                box18.addEventListener("click",()=>{
                    box18.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 19:
                box19.addEventListener("click",()=>{
                    box19.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 20:
                box20.addEventListener("click",()=>{
                    box20.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 21:
                box21.addEventListener("click",()=>{
                    box21.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 22:
                box22.addEventListener("click",()=>{
                    box22.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 23:
                box23.addEventListener("click",()=>{
                    box23.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
                  })
                  break;
    case 24:
                box24.addEventListener("click",()=>{
                    box24.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 25:
                box25.addEventListener("click",()=>{
                    box25.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 26:
                box26.addEventListener("click",()=>{
                    box26.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 27:
                box27.addEventListener("click",()=>{
                    box27.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 28:
                box28.addEventListener("click",()=>{
                    box28.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 29:
                box29.addEventListener("click",()=>{
                    box29.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 30:
                box30.addEventListener("click",()=>{
                    box30.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 31:
                box31.addEventListener("click",()=>{
                    box31.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 32:
                box32.addEventListener("click",()=>{
                    box32.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 33:
                box33.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 34:
                box34.addEventListener("click",()=>{
                    box34.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 35:
                box35.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 36:
                box36.addEventListener("click",()=>{
                    box36.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
}
switch(miss5){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 17:
                box17.addEventListener("click",()=>{
                    box17.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 18:
                box18.addEventListener("click",()=>{
                    box18.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 19:
                box19.addEventListener("click",()=>{
                    box19.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 20:
                box20.addEventListener("click",()=>{
                    box20.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 21:
                box21.addEventListener("click",()=>{
                    box21.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 22:
                box22.addEventListener("click",()=>{
                    box22.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 23:
                box23.addEventListener("click",()=>{
                    box23.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
                  })
                  break;
    case 24:
                box24.addEventListener("click",()=>{
                    box24.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 25:
                box25.addEventListener("click",()=>{
                    box25.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 26:
                box26.addEventListener("click",()=>{
                    box26.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 27:
                box27.addEventListener("click",()=>{
                    box27.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 28:
                box28.addEventListener("click",()=>{
                    box28.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 29:
                box29.addEventListener("click",()=>{
                    box29.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 30:
                box30.addEventListener("click",()=>{
                    box30.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 31:
                box31.addEventListener("click",()=>{
                    box31.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 32:
                box32.addEventListener("click",()=>{
                    box32.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 33:
                box33.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 34:
                box34.addEventListener("click",()=>{
                    box34.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 35:
                box35.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 36:
                box36.addEventListener("click",()=>{
                    box36.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
}
switch(miss6){

case 1:
    box1.addEventListener("click",()=>{
        box1.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 2:
    box2.addEventListener("click",()=>{
        box2.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 3:
        box3.addEventListener("click",()=>{
            box3.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;

case 4:
            box4.addEventListener("click",()=>{
                box4.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
case 5:
    box5.addEventListener("click",()=>{
        box5.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 6:
    box6.addEventListener("click",()=>{
        box6.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;

case 7:
    box7.addEventListener("click",()=>{
        box7.innerHTML=`
        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `

      })
      break;
case 8:
        box8.addEventListener("click",()=>{
            box8.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
          })
          break;
case 9:
            box9.addEventListener("click",()=>{
                box9.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;

              case 10:
                box10.addEventListener("click",()=>{
                    box10.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 11:
                box11.addEventListener("click",()=>{
                    box11.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 12:
                box12.addEventListener("click",()=>{
                    box12.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 13:
                box13.addEventListener("click",()=>{
                    box13.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 14:
                box14.addEventListener("click",()=>{
                    box14.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 15:
                box15.addEventListener("click",()=>{
                    box15.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 16:
                box16.addEventListener("click",()=>{
                    box16.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 17:
                box17.addEventListener("click",()=>{
                    box17.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 18:
                box18.addEventListener("click",()=>{
                    box18.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 19:
                box19.addEventListener("click",()=>{
                    box19.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 20:
                box20.addEventListener("click",()=>{
                    box20.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 21:
                box21.addEventListener("click",()=>{
                    box21.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 22:
                box22.addEventListener("click",()=>{
                    box22.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 23:
                box23.addEventListener("click",()=>{
                    box23.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
   
                  })
                  break;
    case 24:
                box24.addEventListener("click",()=>{
                    box24.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 25:
                box25.addEventListener("click",()=>{
                    box25.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 26:
                box26.addEventListener("click",()=>{
                    box26.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 27:
                box27.addEventListener("click",()=>{
                    box27.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 28:
                box28.addEventListener("click",()=>{
                    box28.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 29:
                box29.addEventListener("click",()=>{
                    box29.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 30:
                box30.addEventListener("click",()=>{
                    box30.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 31:
                box31.addEventListener("click",()=>{
                    box31.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 32:
                box32.addEventListener("click",()=>{
                    box32.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 33:
                box33.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 34:
                box34.addEventListener("click",()=>{
                    box34.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 35:
                box35.addEventListener("click",()=>{
                    box33.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 36:
                box36.addEventListener("click",()=>{
                    box36.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
}
switch(miss7){

  case 1:
      box1.addEventListener("click",()=>{
          box1.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  case 2:
      box2.addEventListener("click",()=>{
          box2.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  
  case 3:
          box3.addEventListener("click",()=>{
              box3.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
     
            })
            break;
  
  case 4:
              box4.addEventListener("click",()=>{
                  box4.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
  case 5:
      box5.addEventListener("click",()=>{
          box5.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  
  case 6:
      box6.addEventListener("click",()=>{
          box6.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  
  case 7:
      box7.addEventListener("click",()=>{
          box7.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  case 8:
          box8.addEventListener("click",()=>{
              box8.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
     
            })
            break;
  case 9:
              box9.addEventListener("click",()=>{
                  box9.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
  
                case 10:
                  box10.addEventListener("click",()=>{
                      box10.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 11:
                  box11.addEventListener("click",()=>{
                      box11.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 12:
                  box12.addEventListener("click",()=>{
                      box12.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 13:
                  box13.addEventListener("click",()=>{
                      box13.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 14:
                  box14.addEventListener("click",()=>{
                      box14.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 15:
                  box15.addEventListener("click",()=>{
                      box15.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 16:
                  box16.addEventListener("click",()=>{
                      box16.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 17:
                  box17.addEventListener("click",()=>{
                      box17.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 18:
                  box18.addEventListener("click",()=>{
                      box18.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 19:
                  box19.addEventListener("click",()=>{
                      box19.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 20:
                  box20.addEventListener("click",()=>{
                      box20.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 21:
                  box21.addEventListener("click",()=>{
                      box21.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 22:
                  box22.addEventListener("click",()=>{
                      box22.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 23:
                  box23.addEventListener("click",()=>{
                      box23.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
     
                    })
                    break;
      case 24:
                  box24.addEventListener("click",()=>{
                      box24.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 25:
                  box25.addEventListener("click",()=>{
                      box25.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 26:
                  box26.addEventListener("click",()=>{
                      box26.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 27:
                  box27.addEventListener("click",()=>{
                      box27.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 28:
                  box28.addEventListener("click",()=>{
                      box28.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 29:
                  box29.addEventListener("click",()=>{
                      box29.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 30:
                  box30.addEventListener("click",()=>{
                      box30.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 31:
                  box31.addEventListener("click",()=>{
                      box31.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 32:
                  box32.addEventListener("click",()=>{
                      box32.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 33:
                  box33.addEventListener("click",()=>{
                      box33.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 34:
                  box34.addEventListener("click",()=>{
                      box34.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 35:
                  box35.addEventListener("click",()=>{
                      box33.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 36:
                  box36.addEventListener("click",()=>{
                      box36.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
  }
switch(miss8){

  case 1:
      box1.addEventListener("click",()=>{
          box1.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  case 2:
      box2.addEventListener("click",()=>{
          box2.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  
  case 3:
          box3.addEventListener("click",()=>{
              box3.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
     
            })
            break;
  
  case 4:
              box4.addEventListener("click",()=>{
                  box4.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
  case 5:
      box5.addEventListener("click",()=>{
          box5.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  
  case 6:
      box6.addEventListener("click",()=>{
          box6.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  
  case 7:
      box7.addEventListener("click",()=>{
          box7.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  case 8:
          box8.addEventListener("click",()=>{
              box8.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
     
            })
            break;
  case 9:
              box9.addEventListener("click",()=>{
                  box9.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
  
                case 10:
                  box10.addEventListener("click",()=>{
                      box10.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 11:
                  box11.addEventListener("click",()=>{
                      box11.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 12:
                  box12.addEventListener("click",()=>{
                      box12.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 13:
                  box13.addEventListener("click",()=>{
                      box13.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 14:
                  box14.addEventListener("click",()=>{
                      box14.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 15:
                  box15.addEventListener("click",()=>{
                      box15.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 16:
                  box16.addEventListener("click",()=>{
                      box16.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 17:
                  box17.addEventListener("click",()=>{
                      box17.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 18:
                  box18.addEventListener("click",()=>{
                      box18.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 19:
                  box19.addEventListener("click",()=>{
                      box19.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 20:
                  box20.addEventListener("click",()=>{
                      box20.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 21:
                  box21.addEventListener("click",()=>{
                      box21.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 22:
                  box22.addEventListener("click",()=>{
                      box22.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 23:
                  box23.addEventListener("click",()=>{
                      box23.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
     
                    })
                    break;
      case 24:
                  box24.addEventListener("click",()=>{
                      box24.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 25:
                  box25.addEventListener("click",()=>{
                      box25.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 26:
                  box26.addEventListener("click",()=>{
                      box26.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 27:
                  box27.addEventListener("click",()=>{
                      box27.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 28:
                  box28.addEventListener("click",()=>{
                      box28.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 29:
                  box29.addEventListener("click",()=>{
                      box29.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 30:
                  box30.addEventListener("click",()=>{
                      box30.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 31:
                  box31.addEventListener("click",()=>{
                      box31.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 32:
                  box32.addEventListener("click",()=>{
                      box32.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 33:
                  box33.addEventListener("click",()=>{
                      box33.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 34:
                  box34.addEventListener("click",()=>{
                      box34.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 35:
                  box35.addEventListener("click",()=>{
                      box33.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 36:
                  box36.addEventListener("click",()=>{
                      box36.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
  }
switch(miss9){

  case 1:
      box1.addEventListener("click",()=>{
          box1.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  case 2:
      box2.addEventListener("click",()=>{
          box2.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  
  case 3:
          box3.addEventListener("click",()=>{
              box3.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
     
            })
            break;
  
  case 4:
              box4.addEventListener("click",()=>{
                  box4.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
  case 5:
      box5.addEventListener("click",()=>{
          box5.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  
  case 6:
      box6.addEventListener("click",()=>{
          box6.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  
  case 7:
      box7.addEventListener("click",()=>{
          box7.innerHTML=`
          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
  
        })
        break;
  case 8:
          box8.addEventListener("click",()=>{
              box8.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
     
            })
            break;
  case 9:
              box9.addEventListener("click",()=>{
                  box9.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
  
                case 10:
                  box10.addEventListener("click",()=>{
                      box10.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 11:
                  box11.addEventListener("click",()=>{
                      box11.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 12:
                  box12.addEventListener("click",()=>{
                      box12.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 13:
                  box13.addEventListener("click",()=>{
                      box13.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 14:
                  box14.addEventListener("click",()=>{
                      box14.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 15:
                  box15.addEventListener("click",()=>{
                      box15.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 16:
                  box16.addEventListener("click",()=>{
                      box16.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 17:
                  box17.addEventListener("click",()=>{
                      box17.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 18:
                  box18.addEventListener("click",()=>{
                      box18.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 19:
                  box19.addEventListener("click",()=>{
                      box19.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 20:
                  box20.addEventListener("click",()=>{
                      box20.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 21:
                  box21.addEventListener("click",()=>{
                      box21.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 22:
                  box22.addEventListener("click",()=>{
                      box22.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 23:
                  box23.addEventListener("click",()=>{
                      box23.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
     
                    })
                    break;
      case 24:
                  box24.addEventListener("click",()=>{
                      box24.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 25:
                  box25.addEventListener("click",()=>{
                      box25.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 26:
                  box26.addEventListener("click",()=>{
                      box26.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 27:
                  box27.addEventListener("click",()=>{
                      box27.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 28:
                  box28.addEventListener("click",()=>{
                      box28.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 29:
                  box29.addEventListener("click",()=>{
                      box29.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 30:
                  box30.addEventListener("click",()=>{
                      box30.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 31:
                  box31.addEventListener("click",()=>{
                      box31.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 32:
                  box32.addEventListener("click",()=>{
                      box32.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 33:
                  box33.addEventListener("click",()=>{
                      box33.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 34:
                  box34.addEventListener("click",()=>{
                      box34.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 35:
                  box35.addEventListener("click",()=>{
                      box33.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 36:
                  box36.addEventListener("click",()=>{
                      box36.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
  }
  switch(miss10){

    case 1:
        box1.addEventListener("click",()=>{
            box1.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    case 2:
        box2.addEventListener("click",()=>{
            box2.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    
    case 3:
            box3.addEventListener("click",()=>{
                box3.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
    
    case 4:
                box4.addEventListener("click",()=>{
                    box4.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 5:
        box5.addEventListener("click",()=>{
            box5.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    
    case 6:
        box6.addEventListener("click",()=>{
            box6.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    
    case 7:
        box7.addEventListener("click",()=>{
            box7.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    case 8:
            box8.addEventListener("click",()=>{
                box8.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
    case 9:
                box9.addEventListener("click",()=>{
                    box9.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    
                  case 10:
                    box10.addEventListener("click",()=>{
                        box10.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 11:
                    box11.addEventListener("click",()=>{
                        box11.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 12:
                    box12.addEventListener("click",()=>{
                        box12.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 13:
                    box13.addEventListener("click",()=>{
                        box13.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 14:
                    box14.addEventListener("click",()=>{
                        box14.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 15:
                    box15.addEventListener("click",()=>{
                        box15.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 16:
                    box16.addEventListener("click",()=>{
                        box16.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
    }
    switch(miss11){
    
    case 1:
        box1.addEventListener("click",()=>{
            box1.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    case 2:
        box2.addEventListener("click",()=>{
            box2.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    
    case 3:
            box3.addEventListener("click",()=>{
                box3.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
    
    case 4:
                box4.addEventListener("click",()=>{
                    box4.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 5:
        box5.addEventListener("click",()=>{
            box5.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    
    case 6:
        box6.addEventListener("click",()=>{
            box6.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    
    case 7:
        box7.addEventListener("click",()=>{
            box7.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    case 8:
            box8.addEventListener("click",()=>{
                box8.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
    case 9:
                box9.addEventListener("click",()=>{
                    box9.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    
                  case 10:
                    box10.addEventListener("click",()=>{
                        box10.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 11:
                    box11.addEventListener("click",()=>{
                        box11.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 12:
                    box12.addEventListener("click",()=>{
                        box12.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 13:
                    box13.addEventListener("click",()=>{
                        box13.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 14:
                    box14.addEventListener("click",()=>{
                        box14.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 15:
                    box15.addEventListener("click",()=>{
                        box15.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 16:
                    box16.addEventListener("click",()=>{
                        box16.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
    }
    switch(miss12){
    
    case 1:
        box1.addEventListener("click",()=>{
            box1.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    case 2:
        box2.addEventListener("click",()=>{
            box2.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    
    case 3:
            box3.addEventListener("click",()=>{
                box3.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
    
    case 4:
                box4.addEventListener("click",()=>{
                    box4.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    case 5:
        box5.addEventListener("click",()=>{
            box5.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    
    case 6:
        box6.addEventListener("click",()=>{
            box6.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    
    case 7:
        box7.addEventListener("click",()=>{
            box7.innerHTML=`
            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
    
          })
          break;
    case 8:
            box8.addEventListener("click",()=>{
                box8.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
       
              })
              break;
    case 9:
                box9.addEventListener("click",()=>{
                    box9.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
    
                  case 10:
                    box10.addEventListener("click",()=>{
                        box10.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 11:
                    box11.addEventListener("click",()=>{
                        box11.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 12:
                    box12.addEventListener("click",()=>{
                        box12.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 13:
                    box13.addEventListener("click",()=>{
                        box13.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 14:
                    box14.addEventListener("click",()=>{
                        box14.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 15:
                    box15.addEventListener("click",()=>{
                        box15.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 16:
                    box16.addEventListener("click",()=>{
                        box16.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
    }
    switch(miss13){

      case 1:
          box1.addEventListener("click",()=>{
              box1.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      case 2:
          box2.addEventListener("click",()=>{
              box2.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      
      case 3:
              box3.addEventListener("click",()=>{
                  box3.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
      
      case 4:
                  box4.addEventListener("click",()=>{
                      box4.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 5:
          box5.addEventListener("click",()=>{
              box5.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      
      case 6:
          box6.addEventListener("click",()=>{
              box6.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      
      case 7:
          box7.addEventListener("click",()=>{
              box7.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      case 8:
              box8.addEventListener("click",()=>{
                  box8.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
      case 9:
                  box9.addEventListener("click",()=>{
                      box9.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      
                    case 10:
                      box10.addEventListener("click",()=>{
                          box10.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 11:
                      box11.addEventListener("click",()=>{
                          box11.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 12:
                      box12.addEventListener("click",()=>{
                          box12.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 13:
                      box13.addEventListener("click",()=>{
                          box13.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 14:
                      box14.addEventListener("click",()=>{
                          box14.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 15:
                      box15.addEventListener("click",()=>{
                          box15.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 16:
                      box16.addEventListener("click",()=>{
                          box16.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
      }
      switch(miss14){
      
      case 1:
          box1.addEventListener("click",()=>{
              box1.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      case 2:
          box2.addEventListener("click",()=>{
              box2.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      
      case 3:
              box3.addEventListener("click",()=>{
                  box3.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
      
      case 4:
                  box4.addEventListener("click",()=>{
                      box4.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 5:
          box5.addEventListener("click",()=>{
              box5.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      
      case 6:
          box6.addEventListener("click",()=>{
              box6.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      
      case 7:
          box7.addEventListener("click",()=>{
              box7.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      case 8:
              box8.addEventListener("click",()=>{
                  box8.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
      case 9:
                  box9.addEventListener("click",()=>{
                      box9.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      
                    case 10:
                      box10.addEventListener("click",()=>{
                          box10.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 11:
                      box11.addEventListener("click",()=>{
                          box11.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 12:
                      box12.addEventListener("click",()=>{
                          box12.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 13:
                      box13.addEventListener("click",()=>{
                          box13.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 14:
                      box14.addEventListener("click",()=>{
                          box14.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 15:
                      box15.addEventListener("click",()=>{
                          box15.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 16:
                      box16.addEventListener("click",()=>{
                          box16.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
      }
      switch(miss15){
      
      case 1:
          box1.addEventListener("click",()=>{
              box1.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      case 2:
          box2.addEventListener("click",()=>{
              box2.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      
      case 3:
              box3.addEventListener("click",()=>{
                  box3.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
      
      case 4:
                  box4.addEventListener("click",()=>{
                      box4.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      case 5:
          box5.addEventListener("click",()=>{
              box5.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      
      case 6:
          box6.addEventListener("click",()=>{
              box6.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      
      case 7:
          box7.addEventListener("click",()=>{
              box7.innerHTML=`
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
      
            })
            break;
      case 8:
              box8.addEventListener("click",()=>{
                  box8.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
         
                })
                break;
      case 9:
                  box9.addEventListener("click",()=>{
                      box9.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
      
                    case 10:
                      box10.addEventListener("click",()=>{
                          box10.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 11:
                      box11.addEventListener("click",()=>{
                          box11.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 12:
                      box12.addEventListener("click",()=>{
                          box12.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 13:
                      box13.addEventListener("click",()=>{
                          box13.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 14:
                      box14.addEventListener("click",()=>{
                          box14.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 15:
                      box15.addEventListener("click",()=>{
                          box15.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 16:
                      box16.addEventListener("click",()=>{
                          box16.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
      }
      switch(miss16){

        case 1:
            box1.addEventListener("click",()=>{
                box1.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        case 2:
            box2.addEventListener("click",()=>{
                box2.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        
        case 3:
                box3.addEventListener("click",()=>{
                    box3.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
        
        case 4:
                    box4.addEventListener("click",()=>{
                        box4.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 5:
            box5.addEventListener("click",()=>{
                box5.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        
        case 6:
            box6.addEventListener("click",()=>{
                box6.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        
        case 7:
            box7.addEventListener("click",()=>{
                box7.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        case 8:
                box8.addEventListener("click",()=>{
                    box8.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
        case 9:
                    box9.addEventListener("click",()=>{
                        box9.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        
                      case 10:
                        box10.addEventListener("click",()=>{
                            box10.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 11:
                        box11.addEventListener("click",()=>{
                            box11.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 12:
                        box12.addEventListener("click",()=>{
                            box12.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 13:
                        box13.addEventListener("click",()=>{
                            box13.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 14:
                        box14.addEventListener("click",()=>{
                            box14.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 15:
                        box15.addEventListener("click",()=>{
                            box15.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 16:
                        box16.addEventListener("click",()=>{
                            box16.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
        }
        switch(miss17){
        
        case 1:
            box1.addEventListener("click",()=>{
                box1.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        case 2:
            box2.addEventListener("click",()=>{
                box2.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        
        case 3:
                box3.addEventListener("click",()=>{
                    box3.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
        
        case 4:
                    box4.addEventListener("click",()=>{
                        box4.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 5:
            box5.addEventListener("click",()=>{
                box5.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        
        case 6:
            box6.addEventListener("click",()=>{
                box6.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        
        case 7:
            box7.addEventListener("click",()=>{
                box7.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        case 8:
                box8.addEventListener("click",()=>{
                    box8.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
        case 9:
                    box9.addEventListener("click",()=>{
                        box9.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        
                      case 10:
                        box10.addEventListener("click",()=>{
                            box10.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 11:
                        box11.addEventListener("click",()=>{
                            box11.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 12:
                        box12.addEventListener("click",()=>{
                            box12.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 13:
                        box13.addEventListener("click",()=>{
                            box13.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 14:
                        box14.addEventListener("click",()=>{
                            box14.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 15:
                        box15.addEventListener("click",()=>{
                            box15.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 16:
                        box16.addEventListener("click",()=>{
                            box16.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
        }
        switch(miss18){
        
        case 1:
            box1.addEventListener("click",()=>{
                box1.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        case 2:
            box2.addEventListener("click",()=>{
                box2.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        
        case 3:
                box3.addEventListener("click",()=>{
                    box3.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
        
        case 4:
                    box4.addEventListener("click",()=>{
                        box4.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        case 5:
            box5.addEventListener("click",()=>{
                box5.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        
        case 6:
            box6.addEventListener("click",()=>{
                box6.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        
        case 7:
            box7.addEventListener("click",()=>{
                box7.innerHTML=`
                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
        
              })
              break;
        case 8:
                box8.addEventListener("click",()=>{
                    box8.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
           
                  })
                  break;
        case 9:
                    box9.addEventListener("click",()=>{
                        box9.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
        
                      case 10:
                        box10.addEventListener("click",()=>{
                            box10.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 11:
                        box11.addEventListener("click",()=>{
                            box11.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 12:
                        box12.addEventListener("click",()=>{
                            box12.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 13:
                        box13.addEventListener("click",()=>{
                            box13.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 14:
                        box14.addEventListener("click",()=>{
                            box14.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 15:
                        box15.addEventListener("click",()=>{
                            box15.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 16:
                        box16.addEventListener("click",()=>{
                            box16.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
        }
        switch(miss19){

          case 1:
              box1.addEventListener("click",()=>{
                  box1.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          case 2:
              box2.addEventListener("click",()=>{
                  box2.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          
          case 3:
                  box3.addEventListener("click",()=>{
                      box3.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
          
          case 4:
                      box4.addEventListener("click",()=>{
                          box4.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 5:
              box5.addEventListener("click",()=>{
                  box5.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          
          case 6:
              box6.addEventListener("click",()=>{
                  box6.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          
          case 7:
              box7.addEventListener("click",()=>{
                  box7.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          case 8:
                  box8.addEventListener("click",()=>{
                      box8.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
          case 9:
                      box9.addEventListener("click",()=>{
                          box9.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          
                        case 10:
                          box10.addEventListener("click",()=>{
                              box10.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 11:
                          box11.addEventListener("click",()=>{
                              box11.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 12:
                          box12.addEventListener("click",()=>{
                              box12.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 13:
                          box13.addEventListener("click",()=>{
                              box13.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 14:
                          box14.addEventListener("click",()=>{
                              box14.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 15:
                          box15.addEventListener("click",()=>{
                              box15.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 16:
                          box16.addEventListener("click",()=>{
                              box16.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
          }
          switch(miss20){
          
          case 1:
              box1.addEventListener("click",()=>{
                  box1.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          case 2:
              box2.addEventListener("click",()=>{
                  box2.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          
          case 3:
                  box3.addEventListener("click",()=>{
                      box3.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
          
          case 4:
                      box4.addEventListener("click",()=>{
                          box4.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 5:
              box5.addEventListener("click",()=>{
                  box5.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          
          case 6:
              box6.addEventListener("click",()=>{
                  box6.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          
          case 7:
              box7.addEventListener("click",()=>{
                  box7.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          case 8:
                  box8.addEventListener("click",()=>{
                      box8.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
          case 9:
                      box9.addEventListener("click",()=>{
                          box9.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          
                        case 10:
                          box10.addEventListener("click",()=>{
                              box10.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 11:
                          box11.addEventListener("click",()=>{
                              box11.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 12:
                          box12.addEventListener("click",()=>{
                              box12.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 13:
                          box13.addEventListener("click",()=>{
                              box13.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 14:
                          box14.addEventListener("click",()=>{
                              box14.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 15:
                          box15.addEventListener("click",()=>{
                              box15.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 16:
                          box16.addEventListener("click",()=>{
                              box16.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
          }
          switch(miss21){
          
          case 1:
              box1.addEventListener("click",()=>{
                  box1.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          case 2:
              box2.addEventListener("click",()=>{
                  box2.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          
          case 3:
                  box3.addEventListener("click",()=>{
                      box3.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
          
          case 4:
                      box4.addEventListener("click",()=>{
                          box4.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          case 5:
              box5.addEventListener("click",()=>{
                  box5.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          
          case 6:
              box6.addEventListener("click",()=>{
                  box6.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          
          case 7:
              box7.addEventListener("click",()=>{
                  box7.innerHTML=`
                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
          
                })
                break;
          case 8:
                  box8.addEventListener("click",()=>{
                      box8.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
             
                    })
                    break;
          case 9:
                      box9.addEventListener("click",()=>{
                          box9.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
          
                        case 10:
                          box10.addEventListener("click",()=>{
                              box10.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 11:
                          box11.addEventListener("click",()=>{
                              box11.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 12:
                          box12.addEventListener("click",()=>{
                              box12.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 13:
                          box13.addEventListener("click",()=>{
                              box13.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 14:
                          box14.addEventListener("click",()=>{
                              box14.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 15:
                          box15.addEventListener("click",()=>{
                              box15.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 16:
                          box16.addEventListener("click",()=>{
                              box16.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
          }
          switch(miss22){

            case 1:
                box1.addEventListener("click",()=>{
                    box1.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            case 2:
                box2.addEventListener("click",()=>{
                    box2.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            
            case 3:
                    box3.addEventListener("click",()=>{
                        box3.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
            
            case 4:
                        box4.addEventListener("click",()=>{
                            box4.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 5:
                box5.addEventListener("click",()=>{
                    box5.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            
            case 6:
                box6.addEventListener("click",()=>{
                    box6.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            
            case 7:
                box7.addEventListener("click",()=>{
                    box7.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            case 8:
                    box8.addEventListener("click",()=>{
                        box8.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
            case 9:
                        box9.addEventListener("click",()=>{
                            box9.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            
                          case 10:
                            box10.addEventListener("click",()=>{
                                box10.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 11:
                            box11.addEventListener("click",()=>{
                                box11.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 12:
                            box12.addEventListener("click",()=>{
                                box12.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 13:
                            box13.addEventListener("click",()=>{
                                box13.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 14:
                            box14.addEventListener("click",()=>{
                                box14.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 15:
                            box15.addEventListener("click",()=>{
                                box15.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 16:
                            box16.addEventListener("click",()=>{
                                box16.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
            }
            switch(miss23){
            
            case 1:
                box1.addEventListener("click",()=>{
                    box1.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            case 2:
                box2.addEventListener("click",()=>{
                    box2.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            
            case 3:
                    box3.addEventListener("click",()=>{
                        box3.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
            
            case 4:
                        box4.addEventListener("click",()=>{
                            box4.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 5:
                box5.addEventListener("click",()=>{
                    box5.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            
            case 6:
                box6.addEventListener("click",()=>{
                    box6.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            
            case 7:
                box7.addEventListener("click",()=>{
                    box7.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            case 8:
                    box8.addEventListener("click",()=>{
                        box8.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
            case 9:
                        box9.addEventListener("click",()=>{
                            box9.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            
                          case 10:
                            box10.addEventListener("click",()=>{
                                box10.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 11:
                            box11.addEventListener("click",()=>{
                                box11.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 12:
                            box12.addEventListener("click",()=>{
                                box12.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 13:
                            box13.addEventListener("click",()=>{
                                box13.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 14:
                            box14.addEventListener("click",()=>{
                                box14.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 15:
                            box15.addEventListener("click",()=>{
                                box15.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 16:
                            box16.addEventListener("click",()=>{
                                box16.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
            }
            switch(miss24){
            
            case 1:
                box1.addEventListener("click",()=>{
                    box1.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            case 2:
                box2.addEventListener("click",()=>{
                    box2.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            
            case 3:
                    box3.addEventListener("click",()=>{
                        box3.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
            
            case 4:
                        box4.addEventListener("click",()=>{
                            box4.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            case 5:
                box5.addEventListener("click",()=>{
                    box5.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            
            case 6:
                box6.addEventListener("click",()=>{
                    box6.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            
            case 7:
                box7.addEventListener("click",()=>{
                    box7.innerHTML=`
                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
            
                  })
                  break;
            case 8:
                    box8.addEventListener("click",()=>{
                        box8.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
               
                      })
                      break;
            case 9:
                        box9.addEventListener("click",()=>{
                            box9.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
            
                          case 10:
                            box10.addEventListener("click",()=>{
                                box10.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 11:
                            box11.addEventListener("click",()=>{
                                box11.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 12:
                            box12.addEventListener("click",()=>{
                                box12.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 13:
                            box13.addEventListener("click",()=>{
                                box13.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 14:
                            box14.addEventListener("click",()=>{
                                box14.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 15:
                            box15.addEventListener("click",()=>{
                                box15.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 16:
                            box16.addEventListener("click",()=>{
                                box16.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
            }
            switch(miss25){

              case 1:
                  box1.addEventListener("click",()=>{
                      box1.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              case 2:
                  box2.addEventListener("click",()=>{
                      box2.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              
              case 3:
                      box3.addEventListener("click",()=>{
                          box3.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
              
              case 4:
                          box4.addEventListener("click",()=>{
                              box4.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 5:
                  box5.addEventListener("click",()=>{
                      box5.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              
              case 6:
                  box6.addEventListener("click",()=>{
                      box6.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              
              case 7:
                  box7.addEventListener("click",()=>{
                      box7.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              case 8:
                      box8.addEventListener("click",()=>{
                          box8.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
              case 9:
                          box9.addEventListener("click",()=>{
                              box9.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              
                            case 10:
                              box10.addEventListener("click",()=>{
                                  box10.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 11:
                              box11.addEventListener("click",()=>{
                                  box11.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 12:
                              box12.addEventListener("click",()=>{
                                  box12.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 13:
                              box13.addEventListener("click",()=>{
                                  box13.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 14:
                              box14.addEventListener("click",()=>{
                                  box14.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 15:
                              box15.addEventListener("click",()=>{
                                  box15.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 16:
                              box16.addEventListener("click",()=>{
                                  box16.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
              }
              switch(miss26){
              
              case 1:
                  box1.addEventListener("click",()=>{
                      box1.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              case 2:
                  box2.addEventListener("click",()=>{
                      box2.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              
              case 3:
                      box3.addEventListener("click",()=>{
                          box3.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
              
              case 4:
                          box4.addEventListener("click",()=>{
                              box4.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 5:
                  box5.addEventListener("click",()=>{
                      box5.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              
              case 6:
                  box6.addEventListener("click",()=>{
                      box6.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              
              case 7:
                  box7.addEventListener("click",()=>{
                      box7.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              case 8:
                      box8.addEventListener("click",()=>{
                          box8.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
              case 9:
                          box9.addEventListener("click",()=>{
                              box9.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              
                            case 10:
                              box10.addEventListener("click",()=>{
                                  box10.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 11:
                              box11.addEventListener("click",()=>{
                                  box11.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 12:
                              box12.addEventListener("click",()=>{
                                  box12.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 13:
                              box13.addEventListener("click",()=>{
                                  box13.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 14:
                              box14.addEventListener("click",()=>{
                                  box14.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 15:
                              box15.addEventListener("click",()=>{
                                  box15.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 16:
                              box16.addEventListener("click",()=>{
                                  box16.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
              }
              switch(miss27){
              
              case 1:
                  box1.addEventListener("click",()=>{
                      box1.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              case 2:
                  box2.addEventListener("click",()=>{
                      box2.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              
              case 3:
                      box3.addEventListener("click",()=>{
                          box3.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
              
              case 4:
                          box4.addEventListener("click",()=>{
                              box4.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              case 5:
                  box5.addEventListener("click",()=>{
                      box5.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              
              case 6:
                  box6.addEventListener("click",()=>{
                      box6.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              
              case 7:
                  box7.addEventListener("click",()=>{
                      box7.innerHTML=`
                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
              
                    })
                    break;
              case 8:
                      box8.addEventListener("click",()=>{
                          box8.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                 
                        })
                        break;
              case 9:
                          box9.addEventListener("click",()=>{
                              box9.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
              
                            case 10:
                              box10.addEventListener("click",()=>{
                                  box10.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 11:
                              box11.addEventListener("click",()=>{
                                  box11.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 12:
                              box12.addEventListener("click",()=>{
                                  box12.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 13:
                              box13.addEventListener("click",()=>{
                                  box13.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 14:
                              box14.addEventListener("click",()=>{
                                  box14.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 15:
                              box15.addEventListener("click",()=>{
                                  box15.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 16:
                              box16.addEventListener("click",()=>{
                                  box16.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
              }
              switch(miss28){

                case 1:
                    box1.addEventListener("click",()=>{
                        box1.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                case 2:
                    box2.addEventListener("click",()=>{
                        box2.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                
                case 3:
                        box3.addEventListener("click",()=>{
                            box3.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
                
                case 4:
                            box4.addEventListener("click",()=>{
                                box4.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 5:
                    box5.addEventListener("click",()=>{
                        box5.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                
                case 6:
                    box6.addEventListener("click",()=>{
                        box6.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                
                case 7:
                    box7.addEventListener("click",()=>{
                        box7.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                case 8:
                        box8.addEventListener("click",()=>{
                            box8.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
                case 9:
                            box9.addEventListener("click",()=>{
                                box9.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                
                              case 10:
                                box10.addEventListener("click",()=>{
                                    box10.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 11:
                                box11.addEventListener("click",()=>{
                                    box11.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 12:
                                box12.addEventListener("click",()=>{
                                    box12.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 13:
                                box13.addEventListener("click",()=>{
                                    box13.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 14:
                                box14.addEventListener("click",()=>{
                                    box14.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 15:
                                box15.addEventListener("click",()=>{
                                    box15.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 16:
                                box16.addEventListener("click",()=>{
                                    box16.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                }
                switch(miss29){
                
                case 1:
                    box1.addEventListener("click",()=>{
                        box1.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                case 2:
                    box2.addEventListener("click",()=>{
                        box2.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                
                case 3:
                        box3.addEventListener("click",()=>{
                            box3.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
                
                case 4:
                            box4.addEventListener("click",()=>{
                                box4.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 5:
                    box5.addEventListener("click",()=>{
                        box5.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                
                case 6:
                    box6.addEventListener("click",()=>{
                        box6.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                
                case 7:
                    box7.addEventListener("click",()=>{
                        box7.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                case 8:
                        box8.addEventListener("click",()=>{
                            box8.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
                case 9:
                            box9.addEventListener("click",()=>{
                                box9.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                
                              case 10:
                                box10.addEventListener("click",()=>{
                                    box10.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 11:
                                box11.addEventListener("click",()=>{
                                    box11.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 12:
                                box12.addEventListener("click",()=>{
                                    box12.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 13:
                                box13.addEventListener("click",()=>{
                                    box13.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 14:
                                box14.addEventListener("click",()=>{
                                    box14.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 15:
                                box15.addEventListener("click",()=>{
                                    box15.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 16:
                                box16.addEventListener("click",()=>{
                                    box16.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                }
                switch(miss30){
                
                case 1:
                    box1.addEventListener("click",()=>{
                        box1.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                case 2:
                    box2.addEventListener("click",()=>{
                        box2.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                
                case 3:
                        box3.addEventListener("click",()=>{
                            box3.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
                
                case 4:
                            box4.addEventListener("click",()=>{
                                box4.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                case 5:
                    box5.addEventListener("click",()=>{
                        box5.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                
                case 6:
                    box6.addEventListener("click",()=>{
                        box6.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                
                case 7:
                    box7.addEventListener("click",()=>{
                        box7.innerHTML=`
                        <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                
                      })
                      break;
                case 8:
                        box8.addEventListener("click",()=>{
                            box8.innerHTML=`
                            <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                   
                          })
                          break;
                case 9:
                            box9.addEventListener("click",()=>{
                                box9.innerHTML=`
                                <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                       
                              })
                              break;
                
                              case 10:
                                box10.addEventListener("click",()=>{
                                    box10.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 11:
                                box11.addEventListener("click",()=>{
                                    box11.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 12:
                                box12.addEventListener("click",()=>{
                                    box12.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 13:
                                box13.addEventListener("click",()=>{
                                    box13.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 14:
                                box14.addEventListener("click",()=>{
                                    box14.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 15:
                                box15.addEventListener("click",()=>{
                                    box15.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                    case 16:
                                box16.addEventListener("click",()=>{
                                    box16.innerHTML=`
                                    <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                           
                                  })
                                  break;
                }
                switch(miss31){

                  case 1:
                      box1.addEventListener("click",()=>{
                          box1.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  case 2:
                      box2.addEventListener("click",()=>{
                          box2.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  
                  case 3:
                          box3.addEventListener("click",()=>{
                              box3.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
                  
                  case 4:
                              box4.addEventListener("click",()=>{
                                  box4.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 5:
                      box5.addEventListener("click",()=>{
                          box5.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  
                  case 6:
                      box6.addEventListener("click",()=>{
                          box6.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  
                  case 7:
                      box7.addEventListener("click",()=>{
                          box7.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  case 8:
                          box8.addEventListener("click",()=>{
                              box8.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
                  case 9:
                              box9.addEventListener("click",()=>{
                                  box9.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  
                                case 10:
                                  box10.addEventListener("click",()=>{
                                      box10.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 11:
                                  box11.addEventListener("click",()=>{
                                      box11.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 12:
                                  box12.addEventListener("click",()=>{
                                      box12.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 13:
                                  box13.addEventListener("click",()=>{
                                      box13.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 14:
                                  box14.addEventListener("click",()=>{
                                      box14.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 15:
                                  box15.addEventListener("click",()=>{
                                      box15.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 16:
                                  box16.addEventListener("click",()=>{
                                      box16.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                  }
                  switch(miss32){
                  
                  case 1:
                      box1.addEventListener("click",()=>{
                          box1.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  case 2:
                      box2.addEventListener("click",()=>{
                          box2.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  
                  case 3:
                          box3.addEventListener("click",()=>{
                              box3.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
                  
                  case 4:
                              box4.addEventListener("click",()=>{
                                  box4.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  case 5:
                      box5.addEventListener("click",()=>{
                          box5.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  
                  case 6:
                      box6.addEventListener("click",()=>{
                          box6.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  
                  case 7:
                      box7.addEventListener("click",()=>{
                          box7.innerHTML=`
                          <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                  
                        })
                        break;
                  case 8:
                          box8.addEventListener("click",()=>{
                              box8.innerHTML=`
                              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                     
                            })
                            break;
                  case 9:
                              box9.addEventListener("click",()=>{
                                  box9.innerHTML=`
                                  <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                         
                                })
                                break;
                  
                                case 10:
                                  box10.addEventListener("click",()=>{
                                      box10.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 11:
                                  box11.addEventListener("click",()=>{
                                      box11.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 12:
                                  box12.addEventListener("click",()=>{
                                      box12.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 13:
                                  box13.addEventListener("click",()=>{
                                      box13.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 14:
                                  box14.addEventListener("click",()=>{
                                      box14.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 15:
                                  box15.addEventListener("click",()=>{
                                      box15.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                      case 16:
                                  box16.addEventListener("click",()=>{
                                      box16.innerHTML=`
                                      <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/pleading-face_1f97a.png " class="lk"> `
                             
                                    })
                                    break;
                  }
               