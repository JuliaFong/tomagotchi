 $('begin').on('click',() =>{
     const newName = prompt('Name your pet');
     game.player = newName
     const nameToma = new Tomagotchi(game.player)
     $tama = $('#newtoma')
 })
 
 
 class Tomagotchi {
     constructor(name) {
         this.name = name
         this.mood = 0;
         this.sleepy = 0;
         this.levelOfBoredom = 0;
         this.age = 0;
         this.hungry = 0;
         this.lifeSpan = 0;
         this.death = false;
         this.lights = true;
     }
     getHungry() {
         this.hungry++
             if (this.hungry === 10) {
                 this.death = true;
             }
     }
     getMood() {
         this.mood++
             if (this.mood === 10) {
                 this.death = true;
             }
     }
     getSleepy() {
         if (this.lights === true) {
             this.sleepy++
                 if (this.sleepy === 10) {
                     this.death = true;
                 }
         } else {
             if (this.sleepy > 0) {
                 this.sleepy--
             }


         }
     }

     getBoredom() {
         this.levelOfBoredom++
             if (this.levelOfBoredom === 10) {
                 this.death = true;
             }
     }
     getAge() {
         this.age++
             if (this.age === 150) {
                 this.death = true;
             }
     }
     getFood() {
         this.hungry--
     }
     getHappy() {
         this.mood--
     }
     getHyper() {
         this.sleepy--
     }
     getFun() {
         this.levelOfBoredom--
     }
     getLifeSpan() {
         this.lifeSpan++
     }
     getDeath() {
         this.lifeSpan--
     }
 }





 const fred = new Tomagotchi('Fred')

 const game = {
     time: 0,
     setTimer() {
         const clock = setInterval(() => {
             this.time++
                 if (!fred.death) {

                     fred.getHungry()
                     if (this.time % 6 === 0)
                         fred.getHungry()

                     if (fred.lights) {
                         fred.getSleepy()
                     } else {
                         fred.sleepy--
                     }
                     fred.getBoredom()
                     if (this.time % 5 === 0) {
                         fred.getAge()
                     }
                     render();
                 } else {
                     clearInterval(clock)
                     alert(`${fred.name} is dead!!!`)
                 }
         }, 7000)
     }
 }

 $('#submit').on('click', () => {
     const fullName = $('#fullname').val()
     const newTama = new Tomagotchi(fullName)
     $('#newTamaName').text(fullName)
     game.setTimer();
     this.render()
 })

 function render() {
     $('#age').text(fred.age)
     $('#bored').text(fred.levelOfBoredom)
     $('#mood').text(fred.mood)
     $('#hunger').text(fred.hungry)
     $('#sleepy').text(fred.sleepy)
 }

 $('#feed-button').on('click', () => {
     const $feed = $('#hunger')
     fred.hungry--
         $feed.text(fred.hungry)
 })

 $('#on-Off').on('click', () => {
     console.log('hitting')
     if (fred.lights == true) {
         fred.lights = false;
         $('body').css('background-color', 'black')
         $('body').css('color', 'white')
         $('#on-Off').text('Good meowning')
     } else {
         fred.lights = true;
         $('body').css('background-color', '#FFAAFF')
         $('body').css('color', 'black')
         $('#on-Off').text('Good night! meow!')
     }

 })
 $('#sleep-button').on('click', () => {
     const $sleepy = $('#sleepy')
     fred.sleepy--
         $sleepy.text(fred.sleepy)

 })


 $('#check-mood').on('click', () => {
     const $mood = $('#mood')
     fred.mood--
         $mood.text(fred.mood)
 })

 $('#not-bored').on('click', () => {
     const $notBored = $('#bored')
     fred.levelOfBoredom--
         $notBored.text(fred.levelOfBoredom)
 })
 