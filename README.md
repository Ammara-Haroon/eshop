# eShop in React JS
https://ammara-haroon.github.io/eshop/
## Project Description

The goal of the project is to build an e-commerce website in react with firebase as backend.

## Project Requirements

- A home page containing a carousel for featured products
- A product grid
- A product page that allows buyers to add products to cart and select variants
- All products should be stored in Firestore with the following information:
  - quantity
  - variants
  - price per unit
  - name
  - image URL
  - favourited or not

## Tools Used:

React JS

## Features

### Home Page

Home page contains carousel for featured products, animated ad banner and products grid.

##### Carousel

Carousel automatically displays the products like a slide show. The carousel component uses setTimeOut to achieve this effect. It selects all products from firebase that have featured value equal to true.
![alt text](image.png)

#### Sale Banner

The sale banner is animated via CSS animation.

#### Product Grid

The products grid contains all products displayed as a grid of 4 elements per row. 20 products are displayed per page.

### Category Pages

![alt text](image-1.png)
Bags have different categories. All these categories are displayed on the same page that reads the search params from url using searchParams hook and queries the database to get filtered results.

#### Page Selector

The page comes with an option to select next, previous or any page number.

#### Sorting

The page products can be sorted by selecting from drop down options. This is achieved by changing the navigation state in useNavigate hook. This keeps track of the selected option when the user moves away from the page.

### Wish List

![alt text](image-3.png)
Whenever the user clicks on the heart icon, the item's favourite status is updated in the database and is added to the wish list page.

### Cart

![alt text](image-4.png)
Items can be added or removed from the cart. The grand total is displayed at the bottom. The cart is saved in session storage. Whenever an item is added to the cart a message is displayed that item has been added to the cart.

### Product Page

![alt text](image-5.png)
Product Page shows the details of the product and the user can use this page to add variants to the cart.

### Out of Stock

![alt text](image-6.png)
When an item is ordered beyond its stock limit out of stock message is displayed to the user and he is not allowed to add the product no matter which page is used. The product card in grid is also covered with an overlay and add to cart button is disabled.

### Discount Badge

![alt text](image-7.png)
Each product card displays a discount badge if the discount is more than 50%.

### Navigation

![alt text](image-2.png)
There is a mobile menu and a navbar depending on the screen size. There are two icons for wish list and cart at the top right corner. The icons also display number of items in the cart and wish list. The cart numbers are updated immediately as cart is in session storage but the wish list count updates after a delay because the count is coming from the database.
