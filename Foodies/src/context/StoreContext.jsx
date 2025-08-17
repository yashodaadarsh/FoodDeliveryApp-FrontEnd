import { use } from "react";
import { createContext , useState , useEffect } from "react";
import { fetchFoodList } from "../service/foodService";

export const StoreContext = createContext(null);

export const StoreProvider = (props) => {
    // console.log(props);
    const [foodList , setFoodList ] = useState([]);


    const contextValue ={
        foodList    
    };

    useEffect( () => {
        async function loadData() {
            const data = await fetchFoodList();
            setFoodList(data);
        }
        loadData();
    }, []);

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}