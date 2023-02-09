import React, { useState } from 'react';
import ProductCarousel from './ProductCarousel';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';
import useFetch from './useFetch';

export default function RelatedProduct({ id, setId, handleTrackClick }) {
  const [modal, setModal] = useState({ show: false, onClickProduct: null })
  const [outfits, setOutfits] = useState(new Set([-1]));
  const { data: currentProduct, loading, error } = useFetch(id);

  // this can be decorated or refactored
  if (!currentProduct) return <p>{ loading || error }</p>;

  // At top level, we only need these information, thus it should be refactored
  const { relatedProducts, name, features } = currentProduct;

  // ### Below are all callbacks function closured to top-level component
  function toggleModal(onClickProduct) {
    if (!modal.show) setModal({ show: true, onClickProduct });
    else setModal({ show: false, onClickProduct: null });
  }

  function addOutfit() {
    setOutfits(new Set([...outfits, id]));
  }

  function removeOutfit(event) {
    setOutfits(new Set([...outfits].filter(o_id => o_id !== id)));
  }

  // ## Three kinds of card: (1)related (2)outfit (3)add
  // RELATED PRODUCT card list
  const relatedCardList = relatedProducts.map(productId => {
    const relatedCardProps = {
      type: 'related',
      key: productId,
      id: productId,
      cardCallback: () => setId(productId),
      buttonCallback: toggleModal // this one should have arguments
    };

    return <ProductCard { ...relatedCardProps } />;
  });

  // YOUR OUTFIT card list
  const outfitCardList = [...outfits].map(productId => {
    // The 1st card is an Adder Card
    if (productId === -1) {
      const adderCardProps = {
        type: 'adder',
        key: 'adder',
        cardCallback: addOutfit
      };

      return <ProductCard { ...adderCardProps } />;
    }

    const outfitCardProps = {
      type: 'outfit',
      key: productId,
      id: productId,
      cardCallback: () => setId(productId),
      buttonCallback: removeOutfit
    };

    return <ProductCard { ...outfitCardProps } />;
  });

  const modalProps = {
    closeModal: toggleModal, // this one no arguments
    onClickProduct: modal.onClickProduct,
    currentProduct
  };

  return (
    <section className='widget__related-product' onClick={(e) => handleTrackClick(e, 'Related Products')} id="RPScroll">
      <ProductCarousel title='related product'>
        { relatedCardList }
      </ProductCarousel>
      <ProductCarousel title='your outfit'>
        { outfitCardList }
      </ProductCarousel>
      { modal.show ? <ProductModal { ...modalProps } /> : null }
    </section>
  );
};
