export const data = async(req: any, res: any) => {
    try {        
       console.log('base !');
       res.send("ciaooo");
    } catch(err:any) {        
        console.log(err.message);
    }
};