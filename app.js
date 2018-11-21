const express = require('express')
const hbs = require('hbs')

const app = express()
//static files
app.use(express.static('public'))

//hbs views
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')

//adding partials
hbs.registerPartials(__dirname + '/views/partials')
//helpers 
// hbs.registerHelper('colores',function(x){
//     if(x>25) return '<h2 style="color:red">'+x+'</h2>'
//     else return '<h2 style="color :green">'+x+'</h2>'
// })
app.locals.title = 'perro'



app.get('/', (req, res)=>{    
    const user = {
        name:'Oswaldinho',
        age:22,
        hobby:'Comer all day long',
        hungry:false        
    }   
    app.locals.title = user.name 
    res.render('index',user)
})

app.get('/users',(req, res)=>{
    const tas = 'Los brgas'
    const users = [
        {
            name:'Oswaldinho',
            age:22,
            hobby:'Comer all day long',
            hungry:true        
        },{
            name:'Dieguinho',
            age:22,
            hobby:'Inyectarse',
            hungry:true        
        },{
            name:'Joss',
            age:22,
            hobby:'Play LoL',
            hungry:false        
        }   
    ]
    res.render('users', {users,tas})
})



app.listen(3000, ()=>{
    console.log('hbs for today')
})