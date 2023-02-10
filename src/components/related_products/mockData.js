const mockId = 1111;

const mockProduct = {
  name: 'mockName',
  category: 'mockCategory'
};

const mockRelated = [112, 113, 114];

const mockStyle = {
  results: [
    { 
      name: 'mockStyle1',
      original_price: '100',
      sale_price: null,
      photos: [{
        thumbnail_url: 'https://mock-image.com',
        url: 'https://mock-image.com'
      }]
    }
  ]
};

const mockReviewMeta = {
  ratings: {
    '1': '100',
    '2': '100',
    '3': '100',
    '4': '100',
    '5': '100'
  }
};


export { mockId, mockProduct, mockRelated, mockStyle, mockReviewMeta };
