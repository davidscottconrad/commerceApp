const fs = require('fs');

class UsersRepository{
    constructor(filename){
        if(!filename){
            throw new Error('Creating a repository requires a filename');
        }
        this.filename = filename;

        try
        {fs.accessSync(this.filename);}
        catch(error)
        {fs.writeFileSync(this.filename,'[]');}
    }
    async getAll(){
        //open file 
        //read file
        //parse contents
        //return parsed data
        return JSON.parse(await fs.promises.readFile(this.filename, {
            encoding: 'utf8'
        }));
    }

    async creat(attrs){
        
    }
}

const repo = new UsersRepository('users.json');

const test = async () => {
    const repo = new UsersRepository('users.json');
    const users = await repo.getAll();
    console.log(users);
}

test();