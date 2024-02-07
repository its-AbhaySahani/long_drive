import React, { useState, useRef } from 'react';
import axios from 'axios';
import './style.css'

const AddForm = () => {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        year: '',
        color: '',
        make: "India"
    });
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await fetch("http://localhost:5000/addcar", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            console.log(await response.json());
            // Reset form after successful submission
        } catch (error) {
            console.error('Error adding car:', error);
        }
    };

    return (
        <div className="add-form">
            <h2>Add Car</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>brand</label>
                    <input type="text" name="brand" onChange={e=>setFormData({...formData, brand:e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Model</label>
                    <input type="text" name="model" onChange={e=>setFormData({...formData, model:e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input type="number" name="year" onChange={e=>setFormData({...formData, year:e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <input type="text" name="color"  onChange={e=>setFormData({...formData, color:e.target.value})} required />
                </div>
                <button type="submit">Add Car</button>
            </form>
        </div>
    );
};

export default AddForm;
