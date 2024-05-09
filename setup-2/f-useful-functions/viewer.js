
/* This function accepts object and gives good view of data in JSON format.
It returns string
*/
export function viewer(logData)
{
    // Construct the string representation of the object
    let logDataString = '{\n';
    
    for (const key in logData) 
    {
        logDataString += `\t${key} : ${JSON.stringify(logData[key])} ,\n`;
    }
    
    logDataString += '}\n';
    
    return logDataString ;
}