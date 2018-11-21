const express = require('express')
const hbs = require('hbs')

const app = express()
//static files
app.use(express.static('public'))

//hbs views
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')



app.get('/', (req, res)=>{
    const user = {
        name:'Oswaldinho',
        age:22,
        hobby:'Comer all day long',
        hungry:false        
    }    
    res.render('index',user)
})

app.get('/users',(req, res)=>{
    const tas = 'Los brgas'
    const users = [
        // {
        //     name:'Oswaldinho',
        //     age:22,
        //     hobby:'Comer all day long',
        //     hungry:true        
        // },{
        //     name:'Dieguinho',
        //     age:22,
        //     hobby:'Inyectarse',
        //     hungry:true        
        // },{
        //     name:'Joss',
        //     age:22,
        //     hobby:'Play LoL',
        //     hungry:false        
        // }   
    ]
    res.render('users', {users,tas})
})



app.listen(3000, ()=>{
    console.log('hbs for today')
})