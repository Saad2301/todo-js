import React, { useState } from 'react'

function Creatlogic() {
    const [enteritem, setitem] = useState('');
    const [comingItem, setComingItem] = useState([]);
    const [isEditItem, setIsEditItem] = useState(null);


    //adding items on button click;
    const add_data = () => {
        setComingItem([...comingItem, enteritem]);
        setitem('')
    }
    //deleting items
    const delet=(id)=>{
        console.log(id);
        const afterdelete = comingItem.filter((elem,index)=>{
            return index !== id;
        })
        setComingItem(afterdelete);


    }
    //remove all items
    const remove_all=()=>{
        setComingItem([]);
    }

    //edit items

    
    const editItem = (index) => {
        let newEditItem = comingItem.find((elem) => {
          return elem === index
        });
        console.log(newEditItem);
       // setToggleSubmit(false);
        setitem(newEditItem);
        

        
        setIsEditItem(index);
        
        

    
      }
    


    return (
        <div className='main-div'>
            <div className='child-div'>
                <h1>ToDo_App</h1>
                <input type='text' placeholder='Enter_Item'
                    value={enteritem} onChange={(e) => setitem(e.target.value)}
                />

                <button onClick={add_data}>Add-Item</button>
            </div>


                {
                    //show items in list
                    comingItem.map((elem, index) => {
                        return (
                            <div key={index}>

                                <h3>{elem}</h3>
                                <button onClick={()=>delet(index)}>Delete</button>
                                <button onClick={()=>editItem(elem,index)}>Edit</button>
                                
                            </div>
                        )
                    })
                }


            
            <div className='removeall'>
                <button onClick={remove_all}>Remove_All</button>
            </div>
        </div>
    )
}

export default Creatlogic