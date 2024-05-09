/* Configuration of function
Everything will be in string

- apiUrl        = 'http://localhost:3100/'
- method        = "GET","POST" ,"DELETE","PUT"
- contentType   = "application/json" , "multipart/form-data" , "application/x-www-form-urlencoded"
- Authorization = If there is jwt token

- queryParams   = null ,
const queryParams = 
{ 
    param1: 'value1', 
    param2: 'value2' 
};

- postData      = null 
*/

export async function callApi(apiUrl, method ,contentType = 'application/json' ,authorization = '' ,queryParams = null ,postData = null) 
{
    const configuration =
    {
        method: method,
        headers: 
        {
            'Content-Type': contentType, 
            'Authorization': authorization
        },
        body: postData ? JSON.stringify(postData) : postData,
    }

    if(queryParams != null)
    {
        const queryString = new URLSearchParams(queryParams).toString();
        apiUrl += `?${queryString}`;
    }

    try 
    {
        const response = await fetch(apiUrl, configuration) ;

        if (!response.ok) throw new Error('Failed to fetch data')
        
        const data = await response.json();
        return data;
    } 
    catch (error) 
    {
        console.error('Error fetching data:', error);
        return null;
    }
}
    
/* Calling API inside useEffect() 

function handleSubmit(e)
{
    e.preventDefault() ;

    const callapi = async ()=>
    {
        await callApi('http://localhost:3200', 'POST' ,'application/json' ,'' ,null ,postData)
        .then(data => {
        console.log('Data:', data);
        setData(data) ;
        })
        .catch(error => {
        console.error('Error:', error);
        });
    }
    callapi() ;
}
*/

