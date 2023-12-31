

// eslint-disable-next-line react/prop-types
const Categories = ({filterItems, categories}) => {
  return (
<div className='container'>
    <div className="row ">
        <div className="col-md-8 mx-auto">
        <div className='category-tabs'>
        {
            // eslint-disable-next-line react/prop-types, no-unused-vars
            categories.map((category, index) =>{
                return (

                    // eslint-disable-next-line react/jsx-key
                    <button className='filterItems' 
                    onClick={() => filterItems(category)}>{category}</button>
                )
                
            })
        }
    </div>
        </div>
    </div>
</div>

  )
}

export default Categories