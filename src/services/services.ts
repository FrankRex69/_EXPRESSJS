export const data = async() => {
    try {        
       console.log('base !!!');
       return("ciaooo.");
    } catch(err:any) {        
        console.log(err.message);
    }
};