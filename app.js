const schedule=require("node-schedule")

const list=[
    {
        "text":"text1",
        "dateTime": "2020-07-10 15:00:00.000"
    },
    {
        "text":"text2",
        "dateTime": "2022-03-29 13:28:00.000"
    },
    {
        "text":"text3",
        "dateTime": "2020-07-10 15:00:00.000"
    },
    {
        "text":"text4",
        "dateTime": "2020-07-10 15:00:00.000"
    },
    {
        "text":"text5",
        "dateTime": "2020-07-10 15:00:00.000"
    },
    {
        "text":"text6",
        "dateTime": "2020-07-10 15:00:00.000"
    },
    {
        "text":"text7",
        "dateTime": "2020-07-10 15:00:00.000"
    },
    {
        "text":"text8",
        "dateTime": "2020-07-10 15:00:00.000"
    },
   
    {
        "text":"text9",
        "dateTime": "2020-07-10 15:00:00.000"
    },
    {
        "text":"text10",
        "dateTime": "2020-07-10 15:00:00.000"
    },
]

list.map(e=>scheduler(e.text,e.dateTime))

function scheduler(str,date){
    len=str.length

        const Datecurr= new Date(date)
        schedule.scheduleJob(Datecurr,()=>{
            setTimeout(function() {
           console.log( str.split("").reverse().join(""));
            
        })
      }, len*1000);
  
  
   
}
