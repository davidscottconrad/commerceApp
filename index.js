const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send(`
    <div>
        <form method="POST">
            <input name="email" placeholder = "email" />
            <input name="passwordConfirmation" placeholder = "password" />
            <input name="password" placeholder = "password confirmation" />
            <button>Sign Up</button>
        </form>
    </div>
    `);
});

app.post('/', (req, res)=>{
    req.on('data', data => {
        console.log(data.toString('utf8'));
        const parsed = data.toString('utf8').split('&');
        const formData = {};
        for(let pair of parsed){
            const[key, value] = pair.split('=');
            formData[key] = value;
        }
        console.log(formData);
        });
    res.send('Account Created')
});

app.listen(3000, () => {
    console.log('Listening');
});