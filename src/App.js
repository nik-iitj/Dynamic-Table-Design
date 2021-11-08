import React, {useState} from 'react'
import "./App.css";
import data from "./data.json";
import {nanoid} from "nanoid";

export default function App() {

    const [contacts, setContacts] = useState(data); 
    const [addFormData, setAddFormData] = useState({

        Name: '',
        Bloodline: '',
        Gene: '',
    });

    const handleAddFormChange = (event) => {

        event.preventDefault();
        const fieldname = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldname] = fieldValue;

        setAddFormData(newFormData);

    }

    const addFormSubmit = (event) => {
        event.preventDefault();

        const newData = {

            ID : nanoid(),
            Name : addFormData.Name,
            Bloodline: addFormData.Bloodline,
            Gene: addFormData.Gene
        }

        const newFiles = [...contacts,newData];// copying ...(old contacts)
        setContacts(newFiles);


    }


    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Bloodline</th>
                        <th>Gene</th>
                    </tr>
                </thead>

                <tbody>
                    {contacts.map((contact)=>
                        <tr>
                            <td>{contact.id}</td>
                            <td>{contact.Name}</td>
                            <td>{contact.Bloodline}</td>
                            <td>{contact.Gene}</td>
                        
                        </tr>
                    )}


                </tbody>
            </table>
            
            <h2>Add data!</h2>
            <form onSubmit={addFormSubmit}>

                <input type = "text" name="Name" required = "required" placeholder="Enter Name" onChange={handleAddFormChange}/>
                <input type = "text" name="Bloodline" required = "required" placeholder="Enter the bloodline" onChange={handleAddFormChange}/>
                <input type = "text" name="Gene" required = "required" placeholder="Enter the gene" onChange={handleAddFormChange}/>

                <button type="submit">

                    Submit

                </button>   
            </form>
        </div>
    )
}
