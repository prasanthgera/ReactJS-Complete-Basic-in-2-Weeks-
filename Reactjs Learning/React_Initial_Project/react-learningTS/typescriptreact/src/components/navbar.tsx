import { useState, type ChangeEvent } from "react"
import {Link } from "react-router-dom"
import { testValue } from "../mobile"

function Navbar() {
    const [searchValue, setSearchValue] = useState('')
    const [seMobile,setMobile]=useState(false)
    const onchangedData = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }


    const searchValues=()=>{
         if(searchValue==='Mobiles'){
            setMobile(true)
        }else{
            alert('Please enter any search value')
        }
        
    }

  



    return (
        <>
            <div className='navbar'>
                <div>
                    <h2>E-Commerce</h2>
                </div>
                <div>
                    <input type="text" value={searchValue} placeholder='Search...' onChange={onchangedData} />
                    <button onClick={searchValues}>Search</button>
                </div>
                <div>
                    <h2>Cart</h2>
                </div>
                <div>
                    <Link to="/">
                        <h2>signout</h2>

                    </Link>
                </div>

            </div>
            {seMobile && (
        <div className="mobileProject">
          {testValue.map((item, index) => (
            <div className="img" key={index}>
              <img src={item.image} alt={item.model} width="150" />
              <h3>{item.company}</h3>
              <p>{item.model}</p>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      )

            }

        </>
    )
}

export default Navbar