import React, { useState, useRef, useEffect } from "react";

const Activities = () => {
    const [Visibility, setVisibility] = useState(false)
    const [tableHeight, setTableHeight] = useState(0);
    const tableRef = useRef(null);

    useEffect(() => {
        if (Visibility) {
            // Set the max-height to the actual height of the table when it's visible
            setTableHeight(tableRef.current.scrollHeight);
        } else {
            // Reset max-height when hiding the table
            
            setTableHeight(0);
        }
    }, [Visibility]);

    const isVisible = () => {
        setVisibility(!Visibility)
    }
    return (
        <div className="w-100 mb-1">
            <div className="border-red d-flex justify-content-around">
                <div className="d-flex justify-content-around w-60 align-items-center ">

                    <div className=" ">Name</div>
                    <div className=" ">01/01/2024</div>
                    <div className="">Activity type</div>
                    <div className="">Item:<span>40</span></div>
                </div>

                <div className="d-flex align-items-center ">
                    <button className="button" onClick={isVisible} >Info</button>
                    <span>Icon</span>
                </div>
            </div>

            
                <div className="dis"  style={{ maxHeight: tableHeight }}>
                    <table ref={tableRef}>
                        <thead>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </thead>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                        <tr>
                            <td>Ernst Handel</td>
                            <td>Roland Mendel</td>
                            <td>Austria</td>
                        </tr>
                        <tr>
                            <td>Island Trading</td>
                            <td>Helen Bennett</td>
                            <td>UK</td>
                        </tr>
                        <tr>
                            <td>Laughing Bacchus Winecellars</td>
                            <td>Yoshi Tannamuri</td>
                            <td>Canada</td>
                        </tr>
                        <tr>
                            <td>Magazzini Alimentari Riuniti</td>
                            <td>Giovanni Rovelli</td>
                            <td>Italy</td>
                        </tr>
                    </table>
                </div> 




        </div>
    );
};

export default Activities;