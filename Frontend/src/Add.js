import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

const addvalidationSchema = Yup.object().shape({
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

  export default function Add({recipe})
  {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUsers] = useState({});
    function getUsers() {
      fetch("https://60b7292217d1dc0017b89247.mockapi.io/recipe")
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
function AddUser({ refreshUsers })
 {
  // const onSubmitclick = (data) => {
  //   console.log(data);
  //   addUser(data);
  //}

   return(
    <>
    
  <div className="container" style={{height:"64vh"}}>
  <div className="row mb-5">
    <div className="col-lg-12 text-center">
      <h1 className="mt-5" style={{color:"#4d5baf"}}>Add Your Recipes</h1>
    </div>
  </div>
  <div className="row" style={{width:"400px"}}>
    <div className="col-lg-12">
    <Formik
            initialValues={{ title: "", foodimage: "" ,ingredients:"" }}
            validationSchema={addvalidationSchema}
            onSubmit={({ data }) => {
              alert("Form is validated! Submitting the form...");
              //setSubmitting(false);
              console.log(data);
              addUser(data);
            }}
          >
       {({ touched, errors, isSubmitting }) => (  
           <Form>
           <div className="form-group">
               
             <label htmlFor="foodname">Foodname</label>
             <Field
               type="text"
               name="title"
               placeholder="Enter foooditem"
               className={`form-control ${
                 touched.title && errors.title ? "is-invalid" : ""
               }`}
             />
             <ErrorMessage
               component="div"
               name="title"
               className="invalid-feedback"
             />
           </div>
           <div className="form-group">
                  <label htmlFor="Image">Image url</label>
                  <Field
                    type="text"
                    name="foodimage"
                    placeholder="https://www.jpg"
                    className={`form-control ${
                      touched.foodimage && errors.foodimage ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="foodimage"
                    className="invalid-feedback"
                  />
                </div>  
                 
           <div className="form-group">
                  <label htmlFor="Ingredients">Ingredients and Procedure</label>
                  <Field
                    type="textarea"
                    name="ingredients"
                    placeholder="3spsons of warm water, etc...."
                    className={`form-control ${
                      touched.ingredients && errors.ingredients ? "is-invalid" : ""
                    }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="ingredients"
                    className="invalid-feedback"
                  />
          </div>
           <button
                  type="submit"
                  className="btn btn-primary btn-block"
                
                //   disabled={isSubmitting}
                 >Submit
                 {/* {isSubmitting ? "Please wait..." : "Submit"} */}
                </button>   
           </Form>
            )}
          </Formik>
        </div>
        </div>
        </div>
        </>
   );
    
          function addUser(data) {
            fetch("https://60b7292217d1dc0017b89247.mockapi.io/recipe", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ ...data })
            })
              .then((res) => res.json())
              .then((res)=>console.log(res))
              .then((res) => refreshUsers(res));
          }
          
        }
  
             