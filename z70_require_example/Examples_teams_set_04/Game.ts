import Team = require("Team");

class Game{
    home: Team;
    away: Team;
    date: number;//epoch
    location: string;


    constructor(home?:Team, away?:Team, date?: number, location?: string){
        if(home != null){
            this.home = home;
        }else{
            this.home = new Team();
        }

        if(away != null){
            this.away = away;
        }else{
            this.away = new Team();
        }

        if(date != null){
            this.date = date;
        }else{
            this.date = 1000;
        }

        if(location != null){
            this.location = location;
        }else{
            this.location = 'Carlos Tartiere, Oviedo';
        }
    }

    toString(){
        return this.home.name + " against " + this.away.name + " at " + new Date(this.date) + " in " + this.location;
    }
}

export = Game;