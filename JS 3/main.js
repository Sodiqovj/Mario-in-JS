let player_left_2 = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
let player_bottom_2 = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'))
let bonus_left_2 = parseInt(window.getComputedStyle(player).getPropertyValue('left'))
let bonus_bottom_2 = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'))
let player = document.querySelector('.player')
let bonus = document.querySelector('.bonus')
let wall = document.querySelector('.wall')
var text = document.querySelector('.text')
let bonus_object = {
    left: 450, bottom: 250, left2: 550, bottom2: 400,
}
let wall_fun = true
let player_bottom = 0
let player_left = 0
let bonus_bottom = bonus_object.bottom
let bonus_left = bonus_object.left
let get_bonus = player_left-bonus_left
let jump = 0
let turn = false
let dead = false



window.addEventListener('keyup', function(event){
    switch(event.key){

        // right arrow
        case "ArrowRight":
            if (player_left<1300) {
                player_left = parseInt(player_left)+100
                player.style.backgroundImage = "url('images/mario-go.png')"
            }
            break
            

        // left arrow
        case "ArrowLeft":
            if (player_left>0) {
                player_left = parseInt(player_left)-100
            }
            break

            // up arrow
        case "ArrowUp":
            if (turn==false) {
                if (player_bottom<700&&turn==false) {
                    player_bottom = parseInt(player_bottom)+100 
                    player.style.backgroundImage = "url('images/mario-jump.png')"
                }
                
            }

            default:
                break
    }
})
setInterval(() => {
    console.log(bonus_object.left);
    // other animtion
    player.style.left = `${player_left}px`
    player.style.bottom = `${player_bottom}px`
    bonus.style.left = `${bonus_left}px`
    bonus.style.bottom = `${bonus_bottom}px`

    // dead function
    if (dead==true) {
        player.style.width = "130px"
        player.style.transition = '0s'
        player.style.backgroundSize = "150px"
        player.style.backgroundImage = "url('images/mario-dead.png')"
        dead = false
    }

    // wall function
    if (player_left>300&&player_left<500&&player_bottom<199) {
        player_left = 300
    }
    if (player_left<600&&player_left>499&&player_bottom<199) {
        player_left = 600
    }

    // player bottom
    if (player_bottom<0) {
        player_bottom = 0
    }

    // bonus animation
    if (player_left==bonus_left&&wall_fun==false) {
        bonus.style.display = 'none'
        wall_fun = false
    }
    if (wall_fun==true) {
        setTimeout(() => {
            wall_fun = false
        }, 300);
    }
}, 10);

// mario image
setInterval(() => {
    if (turn == false) {
        player.style.backgroundImage = "url('images/mario.png')"
        console.log(get_bonus);
    }
}, 600);


// bottom func
let bottom_func = setInterval(() => {
    if (player_bottom>0&&player_bottom&&player_left<301||player_left>500) {
        player_bottom = parseInt(player_bottom)-100
    }
    if (player_left>300&&player_left<600&&player_bottom>201) {
        player_bottom = parseInt(player_bottom)-100
    }
}, 500);
