import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ContestsController {
    public async store({request,view}: HttpContextContract){
        const contest = request.all()
        
        console.log(contest)
        return view.render('contest_info',{contest: contest})
    }
}
