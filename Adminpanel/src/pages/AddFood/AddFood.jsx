import React,{ useState} from 'react'
import { assets } from '../../assets/assets'
import { addFood } from '../../services/foodService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddFood = () => {
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name : '',
        description : '',
        price : '',
        category : 'Biryani'
    });
    const onChangeHandler = ( e ) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({
            ...data,
            [name]: value
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!image) {
            toast.error('Please upload an image');
            return;
        }

        try {
            await addFood(data, image);
            toast.success('Food added successfully');
            setData({
                name: '',
                description: '',
                price: '',
                category: 'Biryani'
            });
            setImage(false);
        } catch (error) {
            toast.error('Error adding food');
        }
        
    }
  return (
    <div className="container mt-2">
    <div className="row justify-content-center">
        <div className="card col-md-4 col-lg-6">
            <form className="card-body" onSubmit={handleSubmit}>
                <h2 className="text-center mb-4">Add Food</h2>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                        <img src={ image ? URL.createObjectURL(image) : assets.upload} alt=""height={98} width={98} />
                    </label>
                    <input type="file" className="form-control" id="image" hidden onChange={ (e) => setImage( e.target.files[0] ) } />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder='Chicken Biryani' required onChange={onChangeHandler} value={data.name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" className="form-control" id="description" name="description" placeholder='Write content here...' required onChange={onChangeHandler} value={data.description}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <select name="category" id="category" className='form-select' onChange={onChangeHandler} value={data.category}>
                        <option value="Biryani">Biryani</option>
                        <option value="Burger">Burger</option>
                        <option value="Cake">Cake</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Salad">Salad</option>
                        <option value="Ice Cream">Ice Cream</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <textarea type="number" className="form-control" id="price" placeholder='&#8377;200' name="price" required onChange={onChangeHandler} value={data.price} />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Save</button>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddFood