import "./GetInTouch.css";
import React, { useState } from 'react';
import axios from 'axios';
import GetInTouchMap from "./GetInTouchMap";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('YOUR_API_ENDPOINT', formData);
            console.log('Message sent:', response.data);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            // You can add further handling such as showing a success message or resetting the form here
        } catch (error) {
            console.error('Error sending message:', error);
            // You can add error handling logic here
        }
    };

    return (
        <>
            <div className="GetInTouchContainer">
                <div className="GetInTouchLeftSide">
                    <p className="GetInTouchHint">
                        Get In Touch
                    </p>
                    <h2 className="GetInTouchTitle">
                        Reach Out and Grow Your Financial Potential
                    </h2>
                    <p className="GetInTouchText">
                        Ready to Cultivate Your Financial Growth? Contact Us Today and Unlock the Potential of Agriculture Finance!
                    </p>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="form">
                        <label htmlFor="name" className="label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="input"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="email" className="label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="input"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="message" className="label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="input"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button type="submit" className="submit">Register</button>
                    </form>
                </div>

                <div className="GetInTouchRightSide">
                    <h4 className="GetInTouchVisitUsTitle"> Visit Us</h4>
                    <div className="GetInTouchMap">
                        <GetInTouchMap />
                    </div>
                </div>
            </div>
        </>
    );
};

export default GetInTouch;
