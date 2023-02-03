import React from 'react';

export default function ProductModal(props) {
  const { closeModal, currentProduct, onClickProduct } = props;

  const tableHeader = (
    <tr key='header'>
      <th>{ currentProduct.name }</th>
      <th>Characteristic</th>
      <th>{ onClickProduct.name }</th>
    </tr>
  );

  // key => feature; value => [currentVal, clickedVal]
  const map = new Map;
  currentProduct.features.forEach(({ feature, value }) => {
    map.set(feature, [value, '']);
  });
  onClickProduct.features.forEach(({ feature, value }) => {
    if (map.has(feature)) map.get(feature)[1] = value;
    else map.set(feature, ['', value]);
  });

  // turn map into an array of <tr>
  const tableContent = [];
  // checkpoint unicode symbol
  const check = <span>&#10003;</span>;
  // values => [currentValue, clickedValue]
  map.forEach((values, feature) => {
    const row = (
      <tr key={ feature }>
        <td>{ values[0] === null ? check : values[0] }</td>
        <td>{ feature }</td>
        <td>{ values[1] === null ? check : values[1] }</td>
      </tr>
    );
    tableContent.push(row);
  });

  function onClickModal(event) {
    if (!event.target.closest('table')) closeModal();
  }

  return (
    <section className='product__modal' onClick={ onClickModal }>
      <table>
        <caption>COMPARING</caption>
        <thead>{ tableHeader }</thead>
        <tbody>{ tableContent }</tbody>
      </table>
    </section>
  );
};
