import React from 'react'

const WithListLoading = (Component) => {
    return function WithLoadingComponent({isLoading, ...props}){
        if(!isLoading) return (<Component {...props}></Component>)
        return (<p>Hold on, fetching data from the server</p>)
    }
}

export default WithListLoading
