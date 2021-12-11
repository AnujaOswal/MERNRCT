import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function AddRecipeComponent() {
    return (
      <div className="addNew">
      <div className="add">
       <AddCircleIcon style=
       {{fontSize:"80px" ,color:"#4d5baf"}}/>     
      </div>

      <div>
        <h3 style={{color:"#4d5baf"}}>Add your Recipe</h3>
      </div>
    </div>
    )
}

export default AddRecipeComponent
