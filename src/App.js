import { useState } from 'react';
import './App.css';
import { User } from './Components/Users';
import { data } from './data/data';



function App() {
const [age, setAge] = useState(1)
const [country, setCountry] = useState()

const renderCount =()=>{
  switch(country){
    case 1:
      let arr3 = data.filter((elem)=>{
        return elem.age<18 && elem.country === 'Kyrgyz'
      })
      return arr3.map((elem,id)=>{
        return <User data={elem} key={id}/>
      })
    case 2: 
    let arr4 = data.filter((elem)=>{
      return elem.age <18 && elem.country !== 'Kyrgyz'
    })
    return arr4.map((elem,id)=>{
      return <User data={elem} key={id}/>
    })
    default: 
    let arr = data.filter((elem)=>{
      return elem.age<18
    })
    return arr.map((elem,id)=>{
      return <User data={elem} key={id}/>
    })
  }
}

const renderUsers =()=>{
  switch(age){
    case 1:
      return (
        <>
        <div>
          <button onClick={()=>{setCountry(1)}}>Kyrgyz</button>
          <button onClick={()=>{setCountry(2)}}>Foreigner</button>
          <div>{renderCount()}</div>
        </div>
        </>
      )
      case 2:
        let arr1 = data.filter((elem)=>{
          return elem.age >18 && elem.age <25
        })
        return arr1.map((elem, id)=>{
          return <User data={elem} key={id}/>
        })
      case 3:
          let arr2 = data.filter((el) => {
            return el.age > 24
          })
          return arr2.map((el, id) => {
            return <User data={el} key={id} />
        })
      	case 4:
				return data.map((el, id) => {
					return <User data={el} key={id} />
				})

			default:
				return ''
  }
}

  
  return(
    <div>
     <h1>Users: </h1>
     <div className="btn-group">
      <button onClick={()=>setAge(1)} className="btn">less than 18</button>
      <button onClick={()=>setAge(2)} className="btn">from 18  till 24</button>
      <button onClick={()=>setAge(3)} className="btn">from 24 till 50</button>
      <button onClick={()=>setAge(4)} className="btn">all users</button>
     </div>
     <div className="container">{renderUsers()}</div>
    </div>
  )
}
export default App;
