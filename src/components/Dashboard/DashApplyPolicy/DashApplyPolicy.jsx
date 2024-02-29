import React, { useState, useEffect } from 'react';
import './DashApplyPolicy.css';
import DashPageTitleDiv from '../DashPageTitleDiv/DashPageTitleDiv';

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

    // Fetch user profile data on component mount
    useEffect(() => {
        const fetchUserProfile = async () => {
            // Replace with your logic to fetch user profile data after login
            const userProfile = await fetch('/api/user/profile');
            const profileData = await userProfile.json();
            setFormData({
                farmerName: profileData.name,
                emailAddress: profileData.email,
                // ... set other profile data as needed
            });
        };
        fetchUserProfile();
    }, []); // Empty dependency array ensures useEffect runs only once on mount

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
        const file = event.target.files[0];
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
    return (
        <>
            <div className="ApplyPolicy-main-container">
                <DashPageTitleDiv title="Apply Policy" />

                {/* Forms start from here */}
                <form className="apply-policy-form" onSubmit={(e) => e.preventDefault()}>
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
                        <label htmlFor="formEvidence">Form Evidence:<span>*</span></label>
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
