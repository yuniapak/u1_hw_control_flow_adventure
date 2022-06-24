let name = prompt("What's your name brave knight?")
console.log(name)
alert('Make your choise wise!(Please type your answer in caps)')

let start = prompt('Do you want to go on a quest? (YES/NO)')
if (start === 'YES') {
  alert("let's do it!")
} else {
  alert(`see you soon ${name}`)
}

const firstChoice = () => {
  let direction = prompt(
    `My pleasure to meet you in my kingdom ${name} , my lovely daughter gone missing and we suspect that the DarkKnight kidnapped her. There's 2 roads that go from this castle first one takes you to the FOREST and other one takes you to the RIVER or follow your HEART!`
  )
  if (direction === 'FOREST') {
    const forest = prompt(
      "You took your road to forest, few hours later you arrived to forest on your horse, birds are singin and everything seems at peace. you entering forest but in a bit you see that there's a path that goes one way and a smaller not even a PATH or a road that goes deeper in and if you take you'll have to leave your horse and WALK through"
    )
    if (forest === 'PATH') {
      alert(
        "You took a path way on your horse that you love so much, he's been with you since the first day you left your village to become a knight!"
      )
      alert(
        ' Few minutes later you arriving to a big mushroom that looks like house, fairies are all around it drinking tea and dancing, but no sign of princess...'
      )
    } else {
      alert(
        "Well you decide to walk through, you know your horse will wait for you and he needs a rest anyway, it's been a long journey."
      )
      alert(
        "Forest getting darker and darker each step you take and it seems like you got lost in the darkness. Well, don't worry, you'll just have to wait till the morning to get on your road again."
      )
    }
  } else if (direction === 'RIVER') {
    const river = prompt(
      'You decided to take a road to the river. In an hour you arriving to the river. You can see a BRIDGE near by crossing it or you can gallop on your horse ALONG it and see where it will takes you'
    )
    if (river === 'BRIDGE') {
      alert(
        'You decided to keep going accross the bridge and soon you see a big dark fort! Definetly a DarkKnight lives there!'
      )
      alert(
        `You knock on a gate and one of his servants tells you that he's taking a nap and "Please, don't disturb him with such a silly question DarkNight has more important stuff to do then kidnapping princesses!"`
      )
    } else {
      alert('You go along the river and soon you see an old fisherman')
      alert(
        "he offers you some fish soup and you spending a pleasant evening eating fish soup, fried fish and even a fish pie! What a nice grandpa you can't leave right now he tells you his life stories and it will be inpolite to runaway right now."
      )
    }
  } else {
    const heart = prompt(
      `"I don't need roads!" You decided to follow your heart, I get it! Your heart brings you to the field full of flowers. You can't belive your eyes some of types of the flowers you've never seen before. Do you want to STAY? But remember you still have to find a princess(GO)!`
    )
    if (heart === 'STAY') {
      alert(
        'You decided to stay in the field and pick up some flowers and give your horse a rest. You go through the field and you see a princess, she fell asleep in the field!'
      )
      alert(
        'Triumph! You found a princess and bringing her home to her worried father. Great job! Now you are the most famouse knight in the kingdom! You saved princess!'
      )
    } else {
      alert(
        "You keep riding your horse along the field, sun slowly goes down. It's time to camp and get some sleep, you can try again tomorrow!"
      )
    }
  }
}
firstChoice()

let replay = confirm('Do you wanna try again?')
let text = replay ? firstChoice() : `See you later ${name}`
alert(text)
