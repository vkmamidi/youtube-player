console.log("person is running")

export const isAdult = (x)=>{
    if(x>18){
        return true
    }
    else{
        return false
    }
}

const canDrink = (x)=>{
    if(x>21){
        return true
    }
    else{
        return false
    }
}

const isSenior = (x)=> x>=65
export {canDrink,isSenior as default}