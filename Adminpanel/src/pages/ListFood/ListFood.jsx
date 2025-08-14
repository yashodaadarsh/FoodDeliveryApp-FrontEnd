import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react'
import { toast } from 'react-toastify';
import './ListFood.css'
import { deleteFood, getFoodList } from '../../services/foodService';


const ListFood = () => {
  const [list,setList] = useState([]);

  const fetchList = async () => {
    try {
      const data = await getFoodList();
      setList(data);
    } catch (error) {
      toast.error('Error while fetching the foods.');
    }
    
  }

  const removeFood = async ( foodId ) => {
    try {
      const success = await deleteFood(foodId);
      if(success){
        await fetchList();
        toast.success('Food removed.')
      }else{
        toast.error('Error occured while removing the food.')
      }
    } catch (error) {
      toast.error('Error occured while removing the food.')
    }

  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="py-5 row justify-content-center text-center">
      <div className="col-11 card">
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map( (item,index) => {
                return(
                  <tr key={index}>
                    <td>
                      <img src={item.imageUrl} alt="" height={48} width={48} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>&#8377;{item.price}.00</td>
                    <td className='text-danger'>
                      <i className='bi bi-x-circle-fill' onClick={ () => removeFood(item.id) }></i>
                    </td>
                  </tr>
                )
              } )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListFood