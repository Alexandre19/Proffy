const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{

    proffyValue = {
        name: "Alexandre Borges", 
        avatar: "https://avatars1.githubusercontent.com/u/14854962?s=460&u=de12c1a5caca02cd979fd8338eb0a4dfbe2e2937&v=4" ,
        whatsapp:"991352119", 
        bio: "Entusiasta das melhores tecnologias de softwares. Apaixonado por desenvolver softwares e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas aulas.", 
        
    }

    classValue = {
        subject: 1, 
        cost: "20",
        
    }
    
    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

 // await createProffy(db, {proffyValue, classValue, classScheduleValue})

        const selectedProffys = await db.all("SELECT * FROM proffys")
        


        const selectedClassesAndProffys = await db.all (`
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE classes.proffy_id = 1;
        `)
      // console.log(selectedClassesAndProffys)


        const selectClassesSchedules = await db.all (`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "520"
            AND class_schedule.time_to > "520"
            AND class_schedule.time_to > "1300"
        `)

        console.log(selectClassesSchedules)
})