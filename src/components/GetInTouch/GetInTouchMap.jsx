import React from 'react';

const GetInTouchMap = () => {
    return (
        <div className="GetInTouchMap">
            {/* Google Map Embed */}
            <iframe
                title="The University of Agriculture Faisalabad"
                width="100%"
                height="500"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105497.96400771542!2d73.01599373326763!3d31.44956777466982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922ef31507ebfeb%3A0x4ef55aa22c98697f!2sUniversity%20of%20Agriculture%20Faisalabad!5e0!3m2!1sen!2s!4v1644268601569!5m2!1sen!2s"
            ></iframe>
        </div>
    );
};

export default GetInTouchMap;
