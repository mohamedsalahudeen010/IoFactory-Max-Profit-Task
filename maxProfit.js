
function maxProfit(time) {
//Take initial Profit as Zero
    let profit=0
//Given Time Consumption 
    const pubTime = 4;
    const theatreTime = 5;
    const commercialParkTime = 10;
    const timeUnit=[4,5,10];
//Given Area covers for specific Buildings
    const theatreArea = 2;
    const pubArea = 1;
    const commercialParkArea = 3;
//Given Earnings for specific Buildings
    const pubEarning=1000;
    const theatreEarning=1500;
    const commercialParkEarning=1500;

    let totalEarnings=[];
    if(time<=4){
        return 0
    }else{
        let temp=time-pubTime;
        totalEarnings[0]=temp*pubEarning
        if(time>=theatreTime){
            temp=time-theatreTime;
            totalEarnings[1]=temp*theatreEarning;
            if(time>=commercialParkTime){
                temp=time-commercialParkTime;
                totalEarnings[2] =temp*commercialParkEarning;
            }
        }
    }
    let max=Math.max(...totalEarnings)
    profit+=max
    let index=totalEarnings.indexOf(max)
    res[index]+=1
    return profit+maxProfit(time-timeUnit[index])
}

let res=[0,0,0]
const time = 13;
const maxEarnings = maxProfit(time);

console.log(`T : ${res[1]} P:${res[0]} C:${res[2]},${maxEarnings}`)