### long_drive


### Project Name :-  Long Drive

### Introduction :
Welcome to the Long Drive! A peer-to-peer buy, sale, and rent car platform. This web application allows users to buy new cars from dealers, sell their old cars to potential buyers, and even rent vehicles for short-term use. The platform facilitates the entire process from browsing and transactions to listing and renting.


### Problem Statement :
In today's dynamic automotive landscape, individuals not only seek to buy and sell cars but also explore the convenience of renting vehicles for various purposes. Long Drive aims to provide a comprehensive solution, offering users a seamless experience for buying, selling, and renting cars.



### What are existing similar solutions?

- Zoomcar  https://www.zoomcar.com/
Car rental service in India

- Revv    https://www.revv.co.in/




### Proposed Solution :


Long Drive platform proposes an inclusive solution that encompasses:

- Buying and Selling Cars: Seamless transactions for purchasing new vehicles or selling existing ones.
- Renting Cars: A dedicated feature allowing users to rent cars for short-term needs.
- User Authentication: Robust authentication mechanisms to ensure the integrity of user accounts.
- Efficient Listings: An easy-to-use interface for listing cars with detailed specifications, images, and pricing.
- Powerful Search and Filters: Advanced search and filtering options for users to find the perfect car or rental.


## Key Features :

### Renting Cars

- **Browse Rental Cars:** Users can explore a variety of cars available for short-term rental.
- **Filter and Search:** Filter rental cars based on make, model, availability, and other parameters.
- **Car Details:** View detailed information about each rental car, including images, specifications, and pricing.
- **Rent a Car:** Users can select a rental period, provide payment details, and confirm their car rental.
- **Rental History:** Users can view their past and current car rental history.

### Buying and Selling Cars (Existing Features)

- **Browse and Buy Cars:** Users can browse and purchase new cars from dealers.
- **Sell Cars:** Sellers can list their old cars for sale with details such as make, model, year, images, and pricing.



### For Developers
#### Used Middleware : 
Middleware are functions that run at specific stages of a pipeline.
![](https://cdn-media-1.freecodecamp.org/images/0*iZwmyy25FSxuxXlH.)


#### Used " bcrypt js " for Hashing password:

- bcrypt is used as it provides a high level of security against attacks such as brute force attacks.
- Type of event (‘init’, ‘validate’, ‘save’, ‘remove’)
- A callback that is executed with this referencing the model instance

### Used PostMan  for API Testing and Documentations :
Postman allows you to test APIs using various HTTP methods like GET, POST, PUT etc.,

Documentation Link : https://documenter.getpostman.com/view/32360617/2s9YsT6UPA 



## About Project Structure :

### Server Side : Backend structure
- #### Routes : Admin Side  Route Handling
- Contains all routes related to admin panel.
1. Signin and Signout Routes
2.  Dashboard Route
3. Add rent car route
4.  View All Rented Cars Route
5. Update Car Details Route
6. Delete Car Details Route
7. Add , update and delete sale car informations 

#### Routes : Client/customer side  Route Handling
Contains all routes related to client side requests.
1. User Registration Route
2. User Login Route
3. User Profile Route
4. Search Car Route
5. Book Now Route
6. Payment Intent Route
7. Add to cart for rent and sale car 
8. Show Cart Items Route
9. Remove from cart Route
10. CheckOut Route
11. Update Database after rent and sale car routes


- #### Models : DataBase Interaction
- Contains all database Schemas which are interacted by controllers .
1. UserSchema :  For user authentication (signup & signin)
2. AdminSchema: For admin authentication 
3. RentCarSchema   : For adding new rent cars in the marketplace
4. SalecarSchema:  For Adding New Sale Cars In The Market Place
5. CartSchemas:  For handling shopping carts of users
6. IncomeSchemas:   For tracking income generated through sales and rent
7. ReviewSchemas:  For storing customer reviews about the rental or sale cars

- #### Database : conn.js
Database used is MongoDB atlas, it's a cloud based NoSQL database provided by mongoDB






### Class Test : Deploying server on Render
Github Repo link : https://github.com/its-AbhaySahani/MERN-Basics
Render Live link: https://mern-basics.onrender.com/students