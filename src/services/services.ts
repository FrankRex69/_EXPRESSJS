export const data = async(data: string) => {
    try {
       return data;    
    } catch(err:any) {        
        console.log(err.message);
    }
};