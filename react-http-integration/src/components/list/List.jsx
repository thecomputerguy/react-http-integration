import React from 'react'

const List = ({repos}) => {
    
    if(!repos || repos.length === 0) return <p>Oops! There are no repos</p>
    
    const reposList = repos.map( repo => (
    <li key={repo.id}>
       <span>repo name: {repo.name}</span>
        <span>repo desc: {repo.description}</span> 
    </li>
    ))

    return (
        <div>
            <h2>your repos are :</h2>
            {reposList}
        </div>
    )
}

export default List
