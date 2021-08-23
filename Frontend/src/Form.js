import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form({recipe}) {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUsers] = useState({});
  function getUsers() {
    fetch("/recipes")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }

  useEffect(() => {
    getUsers();
  }, [newUser]);

  return (
    <div>
      <AddUser refreshUsers={getUsers} />
      {/* {users.map((user) => (
        <div key={user.id}>
          <p>{user.title}</p>
          <img
            src={user.foodimage}
            style={{ height: "100px" }}
            alt="Sometimes profile must be blank"
          />
          <p>{user.ingredients}</p>
        </div>
      ))} */}
    </div>
  );
}
//form
function AddUser({ refreshUsers ,history}) {
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Re-Enter Your Food item")
      .min(3, "Tell me your full food name")
      // .max(15, "Keep it short buddy")
      ,
    foodimage: Yup.string()
      .required("Requried pic")
      .url("Not looks like a url use .jpg/jpeg"),

    ingredients:Yup.string()
      .required("How to make")
      .min(5,"Tell more briefly")
                  
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log(data);
    addUser(data);
    history.push("/recipe")
  };

  return (
    <><br/>
    <br/>
    <br/>
    <div className="container">
      <div className="row mb-5">

          <div className="col-lg-12 text-center">
          <h1 className="mt-5" style={{color:"#4d5baf"}}>Add Your Recipes</h1>
          </div>
     </div>
          <div className="row" style={{width:"400px"}}>
          <div className="col-lg-12">

          <form onSubmit={handleSubmit(onSubmit)}>  
          <div className="col mb-3" >
              <input {...register("title")} placeholder="Enter your name" />
               {errors.title && (
             <span style={{ color: "crimson" }}> {errors.title.message} </span>
              )}
          </div> 
          
          <div className="col mb-3">
          <input {...register("foodimage")} placeholder="Enter your image url" />
            {errors.foodimage && (
             <span style={{ color: "crimson" }}> {errors.foodimage.message} </span>
             )}
          </div>
          <div className="col mb-3">
            <input
             {...register("ingredients")}
             placeholder="Enter your ingredients"
            />
            {errors.ingredients && (
             <span style={{ color: "crimson" }}> {errors.ingredients.message} </span>
             )}
                 </div>
<br />
           <button
                   type="submit"
                   className="btn btn-primary btn-block"
                   style={{padding:"3px"}}
             >submit</button> 
           
       
            
          
         </form>
       
      </div>
      {/*col end */}

      </div>{/**rrow end */}
      </div> {/**conatiner end */}
    
  

</>
  );

  function addUser(data) {
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...data })
    })
      .then((res) => res.json())
      .then((res) => refreshUsers(res));
  }
}

