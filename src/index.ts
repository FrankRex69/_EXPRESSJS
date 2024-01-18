
import express from "express"
import BodyParser from "body-parser"
const router = require('./router/router')
const app = express()
import 'dotenv/config'

(async () => {    

    try {       
        app.use(BodyParser.json());
        app.use("/", router);
        
        app.get('/', (req: any, res: any) => {
            res.send("data");
        });

        // Custom code
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Listening on http://localhost:${process.env.SERVER_PORT}`);            
        });

    } catch(error) {
        console.error(error);
        process.exit(1);
    }
})();


