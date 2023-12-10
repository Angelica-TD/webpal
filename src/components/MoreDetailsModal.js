import '@splidejs/react-splide/css';
import '../styles/MoreDetailsModal.css'
import CarouselWithThumbnails from './CarouselWithThumbnails';
import AddToCartForm from './AddToCartForm';


const MoreDetailsModal = ({ product }) => {

  return (

    <>
      <div className="modal fade" id="moreDetailsModal">
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {product && (
                <div className="product-details-modal row row-cols-1" key={product.id}>

                  {product.image_urls && product.image_urls.length > 0 && (
                      <CarouselWithThumbnails imageNames={product.image_urls} />
                  )}

                  <div className="product-details col-md-8">
                    <div className="row row-cols-1">
                      <div className="col d-flex flex-column gap-lg-3">
                        <div className="product-name">
                          <h3>{product.name}</h3>
                        </div>
                        <div className="product-price">
                          <span className="fs-4">${product.price}</span><span className="small"> inc. GST</span>
                        </div>
                        
                          <AddToCartForm />
                        
                        
                      </div>

                      <div className="col">
                        {product.description}
                      </div>
                    </div>
                    
                                 
                  
                  </div>

                </div>
              )}
            </div>
            
          </div>
        </div>

      </div>

    </>

  )
};

export default MoreDetailsModal;

