# FEC

## Related Projects

## Table of Contents
* [Usage](#usage)
* [Requirements](#requirements)
* [Features](#features)
  - [Overview](#overview)
  - [Related Products](#related-products)
  - [Questions and Answers](#questions-and-answers)
  - [Ratings and Reviews](#ratings-and-reviews)

## Usage

## Requirements

## Features

### Overview:

In the product overview, site visitors can:

![alt text](https://github.com/gbb1/FEC/blob/main/overviewGifs/ImagesGif.gif)
- Navigate through multiple images via an image carousel
- View and zoom in on images of different clothing items
  - In the expanded view, zooming will follow mouse movement
---

![alt text](https://github.com/gbb1/FEC/blob/main/overviewGifs/thumbnailGif.gif)
- Preview images in the carousel with scrollable thumbnails
  - Buttons will dynamically render that allow users to scroll up and down through the thumbnails
  - Thumbnail scroll will track the user's most relevant recent interaction, whether it's with the style options, image carousel, or other thumbnails
---

![alt text](http://g.recordit.co/cdWYH2w1cs.gif)
- Explore different styles, and see which items are on sale
---

![alt text](http://g.recordit.co/pwhRT0bewT.gif)
- Checkout by choosing a size and quantity of items
  - all size and quantity options are specific to the selected item
- Favorite an item
---

![alt text](http://g.recordit.co/u37ynXMQfC.gif)
- View the page in dark mode
---

### Related Products:

- View and navigate related products and their outfits
  - All products are designed as card, and contained in a carousel
  - The carousel will always scroll to the exact edge at the last card, in both directions
  - The carousel is reponsive to window resize, debounced to prevent unnecessary state change
  - The appearance and hover effect change corresponding to the dark mode
  
- Interect with any related product
  - The comparison table will show up when the star button at the top right corner of the card is clicked
  - The comparison table juxtapose features between current product and the related product clicked
  - The comparison table will close when mouse clicked on anywhere besides it
  - When any product card is clicked, the carousel will reset position and webpage will re-render correspondingly
  - Comparison table change its look corresponding to the dark mode

- Manipulate the "My Outfit" section
  - User may add the current product by pressing the first unique "Add to Outfit" card
  - User may remove any previously added product by click the "X" button at the top right corner of the card
  - "My outfit" is synced to each user's LocalStorage, so upon refresh or browser restart, data will persist

### Questions and Answers:


### Ratings and Reviews:
