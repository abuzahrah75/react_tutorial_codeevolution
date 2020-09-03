import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h2>Hello from Hello.js</h2>
    //     </div>
    // )


    // without using JSX:
    return React.createElement('div',null,
                    React.createElement('h2',
                    
                    {id: 'hello', className: 'dummyClass'},
                    'Hello from hello.js w/o JSX'
                    )
    )
}

export default Hello