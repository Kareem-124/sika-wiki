import React from "react"
import Activities from "./Activites"
import ProductsWiki from "./products_wiki";
import AddProductForm from "./AddProductForm";

const Nav = (props) => {
    const { NavDisplay, setNavDisplay } = props;
    const display = () => {

        if (NavDisplay == "Activities") {
            return (
                <div className="d-flex flex-column align-items-center w-100">
                    <h1>Header</h1>
                    <Activities />
                    <Activities />
                </div>
            );
        };
        if (NavDisplay == "Sika Wiki") {
            return (
                <div className="d-flex flex-column align-items-center w-100">
                    <h1>Products Wiki</h1>
                    <ProductsWiki />
                </div>
            )
        }
        if (NavDisplay == "AddProduct") {
            return (
                <div className="d-flex flex-column align-items-center w-100">
                    <h1>Add Product Form</h1>
                    <AddProductForm />
                </div>
            )
        }
    }

    const NavigationButton = (e) => {
        setNavDisplay(e.target.value);
        console.log(e.target.value)
        return
    }
    return (
        <div className="vh-100 border border-2 d-flex flex-column align-items-start w-60 top-nav-white">
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-around border border-2 border-warning w-100 vh-15 ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button onClick={NavigationButton} className="button" value={"Activities"}>Activities</button>
                    <button className="button">+ New Orders</button>
                    <button className="button">Pending Orders</button>
                    <button className="button">Records </button>
                    <button onClick={NavigationButton}className="button" value={"AddProduct"}>Add Product </button>
                    <button onClick={NavigationButton} className="button" value={"Sika Wiki"}>Sika Wiki</button>
                </div>
            </nav>
            <div className="d-flex flex-column align-items-center w-100 top-nav-white ">
                {display()}



            </div>
        </div>
    )
}

export default Nav