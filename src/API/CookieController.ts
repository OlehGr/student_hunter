type CookieVal = Array<string>
type Cookie = Array<CookieVal>
interface IData {
    token?: string
}

const Cookies = {
    getCookies() {
        const cookies:Cookie = document.cookie.split('; ').map(cookString => cookString.split('='))
        let data:IData = {}
        cookies.forEach((cookie:CookieVal) => {
            data = {...data, ...{[cookie[0]]: cookie[1]} }
        })

        return data
    },

    setCookie(cookieName:string, cookieVal:string) {
        const DateNow = new Date()

        let Day = DateNow.getDate()
        let Month = DateNow.getMonth()
        let Year = DateNow.getFullYear()

        const expires:string = new Date(Year, Month, Day+10).toUTCString()

        document.cookie = `${cookieName}=${cookieVal}; domain=localhost; expires=${expires}; path='/';`
    },

    delCookie(cookieName:string) {

        const expires:string = new Date().toUTCString()
        console.log(expires)

        document.cookie = `${cookieName}=${null}; domain=localhost; expires=${expires}; path='/';`
    }
}

export default Cookies