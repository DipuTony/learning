import React from 'react'
import  secureLocalStorage  from  "react-secure-storage";

function SecureLocalStorage() {
    

    secureLocalStorage.setItem('id','201')
    secureLocalStorage.setItem('username','indian1111')

    const usename = secureLocalStorage.getItem('username')

    return (
        <>
            <div>SecureLocalStorage</div>
            UserName is - {usename}
        </>
    )
}

export default SecureLocalStorage