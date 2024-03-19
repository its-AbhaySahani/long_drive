### long_drive


### Project Name :-  Long Drive : peer-to-peer vehicle rental  platform

## Table of Contents
1. [Introduction](#introduction)
2. [Problem Statement](#problem-statement)
3. [Proposed Solution](#proposed-solution)
4. [Key Features](#key-features)
5. [Project Structure](#project-structure)
6. [API Testing](#api-testing)
7. [Important Links](#important-links)


### Class Test : Deploying server on Render
Github Repo link : https://github.com/its-AbhaySahani/MERN-Basics
Render Live link: https://mern-basics.onrender.com/students


### Introduction :
Welcome to Long Drive! Long Drive is a peer-to-peer Vehicle rental platform designed to provide users with a convenient solution for renting vehicles. This web application allows users to explore a variety of cars available for short-term rental, facilitating the entire process from browsing and transactions to booking and renting.


### Problem Statement :
In today's dynamic automotive landscape, individuals seek the convenience of renting vehicles for various purposes. Long Drive aims to provide a comprehensive solution, offering users a seamless experience for renting cars/Bikes.



### What are existing similar solutions?

- Zoomcar  https://www.zoomcar.com/
Car rental service in India

- Revv    https://www.revv.co.in/




### Proposed Solution :


Long Drive platform proposes an inclusive solution that encompasses:

- Long Drive proposes an inclusive solution that focuses solely on car/bike rentals, providing users with features like browsing rental cars, bikes,  filtering and searching based on various parameters, viewing detailed car information, and managing rental history.
- User also give with the feature of earning Money by giving thier car on rent which make the app more unique.

## Key Features :

### Renting Cars

- **Browse Rental Cars:** Users can explore a variety of cars available for short-term rental.
- **Filter and Search:** Filter rental cars based on make, model, availability, and other parameters.
- **Car Details:** View detailed information about each rental car, including images, specifications, and pricing.
- **Rent a Car/Bike:** Users can select a rental period, provide payment details, and confirm their car rental.
- **Rental History:** Users can view their past and current car rental history.

### Renting User's Car Feature ( Earn Money): 
- **Add Car:** User can add their vehicle on rent ing platform by providing necessary details like VIN number, Make, Model etc.



### For Developers
#### Used Middleware : 
Middleware are functions that run at specific stages of a pipeline.
![](https://cdn-media-1.freecodecamp.org/images/0*iZwmyy25FSxuxXlH.)


#### Used " bcrypt js " for Hashing password:

- bcrypt is used as it provides a high level of security against attacks such as brute force attacks.
- Type of event (‘init’, ‘validate’, ‘save’, ‘remove’)
- A callback that is executed with this referencing the model instance

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

## API Testing
Used PostMan for API Testing and Documentations.
[Documentation Link](https://documenter.getpostman.com/view/32360617/2s9YsT6UPA)

## Important Links
- [Netlify Link](https://longdrive.netlify.app/)
- [Figma Link](https://www.figma.com/file/vLmZi6o35G3naNwTovaxiB/LongDrive?type=design&node-id=0%3A1&mode=design&t=TiCNMu5MSFDYYs1r-1)
- [PostMan Documentation](https://documenter.getpostman.com/view/32360617/2s9YsT6UPA)
- [Youtube Demo](https://www.youtube.com/watch?v=NLOMU4ItkOs)






