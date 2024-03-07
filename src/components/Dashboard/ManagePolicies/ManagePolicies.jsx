// ManagePolicies.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import './ManagePolicies.css';

const ManagePolicies = () => {
    // Dummy policies data
    const policies = [
        { id: 1, name: 'Policy A', status: 'Active' },
        { id: 2, name: 'Policy B', status: 'Pending Renewal' },
        { id: 3, name: 'Policy C', status: 'Cancelled' },
    ];

    // Dummy functions for actions
    const handleRenew = (policy) => {
        console.log(`Renewing policy: ${policy.name}`);
    };

    const handleModifyCoverage = (policy) => {
        console.log(`Modifying coverage for policy: ${policy.name}`);
    };

    const handleCancelPolicy = (policy) => {
        console.log(`Cancelling policy: ${policy.name}`);
    };

    return (
        <div className="manage-policies-container">
            <h2 className="manage-policies-heading">Manage Policies</h2>
            <div className="table-container">
                <table className="policy-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {policies.map((policy) => (
                            <tr key={policy.id}>
                                <td>{policy.id}</td>
                                <td>{policy.name}</td>
                                <td>{policy.status}</td>
                                <td className="action-buttons">
                                    <button onClick={() => handleRenew(policy)}>Renew</button>
                                    <button onClick={() => handleModifyCoverage(policy)}>
                                        Modify  <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <button onClick={() => handleCancelPolicy(policy)}>Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePolicies;
