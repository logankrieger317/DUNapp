const db = require('../db')
const { User, TaskList, Task } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const user1 = await new User ({
    name: "Erik Smith",
    phone: "1112223333",
    email: "esiff@gmail.com"
  })
  user1.save()

  const user2 = await new User ({
    name: "Brady Bull",
    phone: "4445556666",
    email: "esiff@gmail.com"
  })
  user2.save()

  const user3 = await new User ({
    name: "jeniffer Jones",
    phone: "7778889999",
    email: "esiff@gmail.com"
    
  })
  user3.save()

const task1 = await new Task ({
    name: "Trash",
    description: "Take trash to curb",
    user:user1._id,
    time: new Date("2023-10-15T15:30:00")



  })
  task1.save()


const task4 = await new Task ({
    name: "Mow",
    description: "Mow back and front yard, weedeat, leafblow",
    user:user1._id,
    time: new Date("2023-11-15T08:00:00")



  })
  task4.save()


  const task5 = await new Task ({
    name: "Clean Gutters",
    description: "Clean gutters on roof of all debree, wash out with water when complete.",
    user:user1._id,
    time: new Date("2023-14-15T14:40:00")



  })
  task5.save()


const task2 = await new Task ({
    name: "Clean House",
    description: "sweep/mop living room floor and clean all windows on first floor",
    user: user2._id,
    time: new Date("2023-10-15T12:30:00")


  })
  task2.save()  


const task3 = await new Task ({
    name: "Clean car",
    description: "Clean and wash interior/exterior of the truck",
    user: user3._id,
    time: new Date("2023-10-15T09:15:00")


  })
  task3.save()


const taskList = await new TaskList ({
    task: task1._id

  })
  taskList.save()


const taskList2 = await new TaskList ({
    task: task2._id

  })
  taskList2.save()


const taskList3 = await new TaskList ({
    task: task3._id

  })
  taskList3.save()
  
}

const run = async () => {
    await main()
    // db.close()
  }
  
  run()