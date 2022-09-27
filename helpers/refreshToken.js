export const RefreshToken = async (refresh_token) => {

    const res = await fetch(`${process.env.URL_BACKEND}/api/token/refresh`, {
        headers: new Headers( { Authorization: `Bearer ${refresh_token}` } )
    }).then( async (response) => {
        const obj = await response.json().then( (data) => {
            const header = { headers: { 'Authorization': `Bearer ${data.access_token}` } }
            return header
        } )
        return obj
    } )

    return res
}