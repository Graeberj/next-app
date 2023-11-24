"use client";
import React from "react";

const AddToCartButton = () => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => console.log("click")}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
