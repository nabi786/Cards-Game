

// click button to start the game
var startBtn = document.getElementsByClassName('startBtn')[0]

startBtn.addEventListener('click', function () {
    document.getElementsByClassName('startGame')[0].style.display = "none"

    // var allBox = document.getElementsByClassName('box')
    // allBox = Array.from(allBox)
    // allBox.forEach(function(item,index){
    //     item.classList.add("rotate")
    // })


})



// when userclick on box

var box = document.getElementsByClassName('box')

box = Array.from(box)






function gamestart() {

    var random = Math.ceil(Math.random() * 16)

    console.log(random - 1)

    var backSides = document.getElementsByClassName('back')

    backSides[random - 1].innerHTML = `<img class="fire" src="/fire.png">`

    // reseting cards

    setTimeout(function(){

        box.forEach(function (item, index) {
            
            
            item.classList.remove("rotate")
            
            
        })
    },1000)

}

gamestart()






var score = 0;

box.forEach(function (item, index) {
    item.addEventListener('click', function () {
        item.classList.add("rotate")
        var elm = document.getElementsByClassName('back')[index]

        if (elm.innerHTML.length > 30) {

            var currentScore = document.getElementById('score').innerText
            score = parseInt(currentScore) + 10
            document.getElementById('score').innerText = score

            // console.log('your score', score)

            var updateChances = document.getElementById('remainCards').innerText
            document.getElementById('remainCards').innerText = parseInt(updateChances) + 1;

           
            gamestart()
            

        } else {

            var getChances = document.getElementById('remainCards').innerText;
            var remainChances = parseInt(getChances) - 1;
            document.getElementById('remainCards').innerText = remainChances

            var updatedChances = document.getElementById('remainCards').innerText
            updatedChances = parseInt(updatedChances)
            console.log(updatedChances)
            if(updatedChances < 0){
                
               var gameOverDialog =  document.getElementsByClassName('startGame')[0]
               gameOverDialog.style.display = 'block'
               document.getElementsByClassName('startBtn')[0].innerText = 'Gave Over Try Again';

               document.getElementById('remainCards').innerText = 3
               document.getElementById('score').innerText = 0;
               gamestart()
            }


        }


    })
})
