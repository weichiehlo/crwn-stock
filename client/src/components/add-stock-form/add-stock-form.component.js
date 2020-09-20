import React from 'react'


const AddStockForm = function({onChange, onSubmit}){
    return (
        
        <form onSubmit={onSubmit}>
        <div>
                <input 
                type='text' 
                placeholder="Please Add the Stock"
                onChange={onChange}/>
        </div>
        <button>Add Stock</button>
      </form>
        
    )
}
export default AddStockForm