import Router from "next/router"
 
export default function before () {
    console.log('こんにちは') 

    return (
         <div>
            <div>こんにちは</div>
            <button onClick={ () => Router.push({pathname: '/after', query: {name: 'yukai'}}) }>Afterへ</button>

         </div>
     )
 }