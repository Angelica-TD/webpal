import '@splidejs/react-splide/css';
import '../styles/MoreDetailsModal.css'
import CarouselWithThumbnails from './CarouselWithThumbnails';


const MoreDetailsModal = ({ product }) => {

  return (

    <>
      <div className="modal fade" id="moreDetailsModal">
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {product && (
                <div className="product-details-modal row" key={product.id}>

                  {product.image_urls && product.image_urls.length > 0 && (
                      <CarouselWithThumbnails imageNames={product.image_urls} />
                  )}

                  <div className="product-details col-md-8">
                    {product.name} - ${product.price}
                    <p>{product.description}</p>
                    <button type="button" className="btn btn-primary add-to-cart">Add to cart</button>
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

