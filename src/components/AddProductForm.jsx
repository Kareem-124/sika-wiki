import React from "react";


const AddProductForm = () => {
    return (
        <div>
            <form action="" className="d-flex flex-column align-items-center ">
                <div className="d-flex justify-content-center border-black mb-2">
                    <label htmlFor="">Product Name</label>
                    <input className="Bg-white ml-3" type="text" />
                </div>

                <div className="d-flex justify-content-center border-black mb-2">
                    <label htmlFor="">Product Barcode</label>
                    <input className="Bg-white ml-3" type="number" />
                </div>

                <div className="d-flex flex-column border-red w-80">
                    <h2>Description</h2>
                    <div className="d-flex flex-column align-items-center mb-2 border-black w-100">
                        <label htmlFor="">Brief</label>
                        <textarea className="Bg-white w-60" name="" id="" cols="10" rows="10"></textarea>
                    </div>
                    <div className="d-flex flex-column align-items-center mb-2">
                        <label htmlFor="">Where dose it apply ? "اين تستخدم؟"</label>
                        <textarea className="Bg-white w-60" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="d-flex flex-column align-items-center mb-2">
                        <label htmlFor="">consumption "كم تغطي المادة؟"</label>
                        <textarea className="Bg-white w-60" name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div className="d-flex flex-column align-items-center mb-2">
                        <label htmlFor="">How to Apply it? "كيفية الاستخدام"</label>
                        <textarea className="Bg-white w-60" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    
                    <div className="d-flex flex-column align-items-center mb-2">
                        <label htmlFor="">Notes</label>
                        <textarea className="Bg-white w-60" name="" id="" cols="30" rows="10"></textarea>
                    </div>

                </div>
                <button className="mb-2 w-40">Add Product</button>

            </form >
        </div >
    )

}

export default AddProductForm