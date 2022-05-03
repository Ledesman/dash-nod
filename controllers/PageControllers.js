
const vistaPrincipal =(req,res) =>{
    res.render('home')
}
const vistaTables =(req,res) =>{
    res.render('tables')
}
const vistaNotificaciones =(req,res) =>{
    res.render('notificaciones')
}

module.exports ={
    vistaPrincipal,
    vistaTables,
    vistaNotificaciones
}