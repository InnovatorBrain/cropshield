import React, { useState, useEffect } from 'react';
import './DashApplyPolicy.css';
import DashPageTitleDiv from '../DashPageTitleDiv/DashPageTitleDiv';
import axios from 'axios';

const DashApplyPolicy = () => {
    const [formData, setFormData] = useState({
        farmerName: '',
        farmerCNIC: '',
        contactNumber: '',
        emailAddress: '',
        farmAddress: '',
        farmSize: '',
        farmLocation: {
            latitude: '',
            longitude: '',
        },
        policyId: '',
        cnicPicture: null,
        formEvidence: null,
        agreeTerms: false,
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/auth/profile/');
                const profileData = response.data;
                setFormData({
                    farmerName: profileData.name,
                    emailAddress: profileData.email,
                });
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchUserProfile();
    }, []);

    const handleChange = (event) => {
        if (event.target.name === 'farmLocation') {
            setFormData({
                ...formData,
                farmLocation: {
                    ...formData.farmLocation,
                    [event.target.id]: event.target.value,
                },
            });
        } else if (event.target.name === 'cnicPicture' || event.target.name === 'formEvidence') {
            setFormData({
                ...formData,
                [event.target.name]: event.target.files[0],
            });
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files && event.target.files[0];
        if (!file) {
            // No file selected, handle accordingly
            console.error('No file selected');
            return;
        }
        // Implement file validation (size, type, etc.) here
        if (file.size > 1024 * 1024 * 5) { // 5 MB limit
            alert('File size too large, maximum 5 MB allowed!');
            return;
        }
        setFormData({
            ...formData,
            [event.target.name]: file,
        });
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('YOUR_API_ENDPOINT', formData);
            console.log('Form submitted successfully:', response.data);
            // Reset form fields after successful submission if needed
            setFormData({
                farmerName: '',
                farmerCNIC: '',
                contactNumber: '',
                emailAddress: '',
                farmAddress: '',
                farmSize: '',
                farmLocation: {
                    latitude: '',
                    longitude: '',
                },
                policyId: '',
                cnicPicture: null,
                formEvidence: null,
                agreeTerms: false,
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <div className="ApplyPolicy-main-container">
                <DashPageTitleDiv title="Apply Policy" />
                <form className="apply-policy-form" onSubmit={handleSubmit}>
                    <div className="form-group farmer-info">
                        <p className='apply-policy-form-section-headings'>Farmer Information</p>
                        <label htmlFor="farmerName">Farmer Name <span>*</span></label>
                        <input
                            type="text"
                            name="farmerName"
                            id="farmerName"
                            value={formData.farmerName}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="farmerCNIC">Farmer CNIC <span>*</span></label>
                        <input
                            type="text"
                            name="farmerCNIC"
                            id="farmerCNIC"
                            value={formData.farmerCNIC}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="contactNumber">Contact Number <span>*</span></label>
                        <input
                            type="tel"
                            name="contactNumber"
                            id="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="emailAddress">Email Address <span>*</span></label>
                        <input
                            type="email"
                            name="emailAddress"
                            id="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group farm-info">
                        <p className='apply-policy-form-section-headings'>Farm Information</p>
                        <label htmlFor="farmAddress">Farm Address <span>*</span></label>
                        <textarea
                            name="farmAddress"
                            id="farmAddress"
                            value={formData.farmAddress}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="farmSize">Farm Size (in acres)<span>*</span></label>
                        <input
                            type="number"
                            name="farmSize"
                            id="farmSize"
                            value={formData.farmSize}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="latitude">Latitude <span>*</span></label>
                        <input
                            type="number"
                            name="farmLocation"
                            id="latitude"
                            placeholder="Latitude"
                            value={formData.farmLocation.latitude}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="longitude">Longitude <span>*</span></label>
                        <input
                            type="number"
                            name="farmLocation"
                            id="longitude"
                            placeholder="Longitude"
                            value={formData.farmLocation.longitude}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group policy-info">
                        <p className='apply-policy-form-section-headings'>Policy Selection </p>
                        <label htmlFor="policyId">Policy ID <span>*</span></label>
                        <select name="policyId" id="policyId" value={formData.policyId} onChange={handleChange} required>
                            {/* Add options for available policies here */}
                            <option value="">Select a Policy</option>
                            <option value="wheate">wheate</option>
                            {/* ... */}
                        </select>
                    </div>
                    <div className="form-group document-uploads">
                        <p className='apply-policy-form-section-headings'>Document Uploads</p>
                        <label htmlFor="cnicPicture">CNIC Picture:<span>*</span></label>
                        <input
                            type="file"
                            name="cnicPicture"
                            id="cnicPicture"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <label htmlFor="formEvidence">Form Evidence:<span>*</span> (e.g, .pdf,.doc,.docx)</label>
                        <input
                            type="file"
                            name="formEvidence"
                            id="formEvidence"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="form-group terms-and-conditions" >
                        <p className='apply-policy-form-section-headings'>Terms and Conditions <span>*</span></p>
                        <div id="apply-policy-checkbox" className="apply-policy-checkbox">
                            <span
                                className={`checkbox ${formData.agreeTerms ? 'checked' : ''}`}
                                onClick={() => setFormData({ ...formData, agreeTerms: !formData.agreeTerms })}
                            >
                                {formData.agreeTerms ? '✔' : ''}
                            </span>
                            <label htmlFor="agreeTerms" className="applypolicycheckboxlabel">
                                I agree to the terms and conditions
                            </label>
                        </div>
                    </div>
                    <button type="submit">Apply</button>
                </form>
            </div>
        </>
    );
};

export default DashApplyPolicy;
