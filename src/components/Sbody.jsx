import React from "react";
import Activities from "./Activites";
import AddProductForm from "./AddProductForm";





const Sbody = (props) => {
    const { navButton, setNavButton } = props;
    const checkContent = () => {
        if (navButton == "Activities") {
            // Activities Tap Content
            return (
                <>
                    <Activities />
                    <Activities />
                    <Activities />
                    <Activities />
                    <Activities />
                    <Activities />
                    <Activities />
                    <Activities />
                </>
            )
        }
        // Orders Tap Content
        if (navButton == "Orders") {
            return (
                <>
                    <Activities />
                    <Activities />
                    <Activities />
                    <Activities />
                </>
            )
        }
        // Add Products Tap Content
        if (navButton == "addProducts") {
            return (
                <>
                    <AddProductForm/>
                </>
            )
        }
        // Sika Wiki Tap Content
        if (navButton == "sikaWiki") {
            return (
                <>
                    <Activities />
                </>
            )
        }
    }

    const selectNav = (e) => {
        // console.log(setNavButton);
        setNavButton(e.target.value)
    }
    return (
        <div className="sbody-container w-60">
            <h2> This is the heady of the Sub Body</h2>
            <div>
                <ul className="border-black d-flex justify-content-around nav">
                    <li><button onClick={selectNav} value={"Activities"}>Activities</button></li>
                    <li><button onClick={selectNav} value={"Orders"}>Orders</button></li>
                    <li><button onClick={selectNav} value={"addProducts"}>Add Products</button></li>
                    <li><button onClick={selectNav} value={"sikaWiki"}>Sika Wiki</button></li>
                </ul>
            </div>
            {checkContent()}



        </div>
    )
}

export default Sbody;