import React, { createContext, useContext, useEffect, useState } from "react";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setData(data.data));
    }, []);

    const value = { data };

    return <PRODUCT_CONTEXT.Provider value={value}>{children}</PRODUCT_CONTEXT.Provider>;
};

export const useProducts = () => {
    const data = useContext(PRODUCT_CONTEXT);
    return data;
};

export default ProductProvider;
