class Cookies {
    getCookies() {
        const cookies = document.cookie.split('; ').map(cookString => cookString.split('='))
        const data = {}
        cookies.forEach(cookie => {
            data[`${cookie[0]}`] = cookie[1]
        })

        return data
    }

    setCookie(cookieName, cookieVal) {
        const DateNow = new Date()

        let Day = DateNow.getDate()
        let Month = DateNow.getMonth()
        let Year = DateNow.getFullYear()

        const expires = new Date(Year, Month, Day+10).toGMTString()


        document.cookie = `${cookieName}=${cookieVal}; domain=localhost; expires=${expires}; path='/';`
    }
}

export default new Cookies()