
import express from "express"
import BodyParser from "body-parser"
const router = require('./router/router')
const app = express()
const port_app = 4000
const port_host = 3777
import 'dotenv/config'

(async () => {    

    try {       
        app.use(BodyParser.json());
        app.use("/", router);
        
        app.get('/', (req: any, res: any) => {
            res.send("data");
        });

        // Custom code
        app.listen(port_app, () => {
            console.log('weee.!!!');
            
            console.log(`Listening!! on http://localhost:${port_host}`);            
        });

    } catch(error) {
        console.error(error);
        process.exit(1);
    }
})();


