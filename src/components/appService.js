import API from './api'


export async function getAllApps() {
    const client = API;
    console.log("Here in app service")
    try{
        const response = await client.getAllApps();
        return await response.json();
    }catch(error) {
        return [];
    }
    
}
