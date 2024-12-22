import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from './Product';
import { fetchProductsRequest,
addProduct,
updateProduct,
deleteProduct
} from '../redux/actions/productAction';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

const[productInput, setProductInput]=useState("");
const[editId, setEditId]=useState(null);

  useEffect(() => {
    dispatch(fetchProductsRequest());

  }, [dispatch]);

const handleAddorEdit=()=>{
  if(editId){
    dispatch(updateProduct(editId, {id:editId, name:productInput}));
    setEditId(null);
  }else{
    const newProduct={id:Date.now(), name:productInput};
    dispatch(addProduct(newProduct))
  }
  setProductInput("");
}

const handleEdit=(product)=>{
  setProductInput(product.name);
  setEditId(product.id);
}

const handleDelete=(id)=>{
  dispatch(deleteProduct(id));
}


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list">
      <input type="text" value={productInput} onChange={(e)=>setProductInput(e.target.value)} placeholder='Enter Product Name'/>
     <button onClick={handleAddorEdit}>
      {editId ? "Update Product" : "Add Product"}
     </button>
     <div className='product-list'>
     {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
     </div>
    
    </div>
  );
};

export default ProductList;
