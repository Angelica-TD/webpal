import '../styles/MoreDetailsModal.css'

const MoreDetailsModal = ({ product }) => {

  return (

    <>
      <div className="modal fade" id="moreDetailsModal">
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title">Product name</p>
              <p>Price</p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <ul>
                {product && (
                  <li key={product.id}>
                    {product.image_urls && product.image_urls.length > 0 && (
                      <div>
                        {product.image_urls.map((imageUrl, index) => (
                          <img
                            key={index}
                            src={`http://localhost:3000/uploads/${imageUrl}`}
                            alt={`${product.name} - ${index}`}
                            style={{ width: '50px', height: '50px' }}
                          />
                        ))}
                      </div>
                    )}
                    {product.name} - ${product.price}
                  </li>
                )}
              </ul>
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary add-to-cart">Add to cart</button>
            </div>
          </div>
        </div>

      </div>

    </>

  )
};

export default MoreDetailsModal;

