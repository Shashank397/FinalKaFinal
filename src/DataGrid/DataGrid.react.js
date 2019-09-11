import React from 'react';

import './DataGrid.css';

const DataGrid = (props) => {
    return (
        <div >
            <table className='table table-striped'>
                <thead>
                {props.children}
                <h1>Hi</h1>
                </thead>
                <tbody>
                {
                        props.donorList.map((eachDonor, index)=>{
                            return <tr key={index}>
                                        <td>{eachDonor.donor_id}</td>
                                        <td>{eachDonor.email}</td>
                                        <td>{eachDonor.blood_group}</td>
                                    </tr>
                        })
                    }        
                </tbody>
            </table>
        </div>
    );

}

export default DataGrid;