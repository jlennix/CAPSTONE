const data = [
    {
      id:1,  
      title: 'Anybody know any good trails??',
      text: "I've been trying to transition from running on the treadmill to running outside, but I'm not sure where to go outside of my neighborhood.",
      image: "https://image.jpg"
    },
    {
      id:2,
      title: 'What kind of shoes should I wear if I have flat feet?',
      text: "I know there's different types of shoes that support different types of feet, amd that some people use inserts to fix this problem. I just want a simple shoe so I can just strap up and go. Any suggestions!",
      image: "https://image.jpg"
    },
    {
      id:3,
      title: 'Need running playlist suggestions 😭',
      text: "I will go insane if I hear Another One Bites the Dust again!",
      image: "https://image.jpg"
    },
  ]

  const getCards = (req, res) => {
    res.status(200).json({ result: data})
  },

   postCard = (req, res) => {
    let title = req.body.title
    let text = req.body.text
    console.log('cardController - postCard', title, text)

    let newData = data
    let newId = newData.length + 1


    newData.push({
        id: newId,
        title: title,
      text: text,
      image: "https://image.jpg"
    })

    res.status(200).json({result: newData})
  }

  module.exports = {
    getCards, 
    postCard
  }