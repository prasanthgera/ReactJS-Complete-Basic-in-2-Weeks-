import { useState, type ChangeEvent } from "react"
import { Link } from "react-router-dom"
import Storedata from "./Storedata"
import { useSelector } from "react-redux"
import type { RootState } from "@reduxjs/toolkit/query"

function HomePage() {
    const [searchValue, setSearchValue] = useState('')
    const [seMobile, setMobile] = useState(false)
      const count = useSelector((state:RootState) => state.updatedValue.value)
  
    const onchangedData = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }


    const searchValues = () => {
        const selecteInputVal = 'Mobile';
        if (searchValue === selecteInputVal.toLowerCase()) {
            setMobile(true)
        } else {
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
                    <h2>Cart{count} </h2>
                </div>
                <div>
                    <Link to="/">
                        <h2>signout</h2>

                    </Link>
                </div>

            </div>
            {seMobile && (
                <Storedata/>
            )


            }
            {
                
            }
        </>
    )
}
export default HomePage