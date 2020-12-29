# Clothes Store SDA/DB Project

> **Project by:**
> k181198 Mubeen
> k180258 Moiz Adil
> Students of FAST NUCES - KHI

We made an ecommerce platform to buy clothes and an admin panel to manage website and database with simple CRUD operations on the database.
> 
This is a semester project for Fall 2020 SDA / DB course, a web application made on MERN Stack.

## Technologies:
The website is built on MERN Stack:
![enter image description here](https://www.codeimmersives.com/wp-content/uploads/2018/06/MERN-Logo-4-pack.jpg)
Redux is used for State Management![enter image description here](https://redux.js.org/img/redux-logo-landscape.png)

## Functionilities:
 - A new user can register on the website.
 - A customer can see details of the product present in the cart .
 - A customer can view his order history.
 - A customer can add or delete a product from the cart.
 - Admin can view the products purchased on particular date.
 - Admin can view number of products sold on a particular date.
 - A customer can view the total price of product present in the cart unpurchased.
 - A customer can search for a product.
 - A user can change his own account information.
 - A customer can pay through Paypal or credit card.
 - Admin can manage all users on the website.
## Home Screen Screenshot:
![enter image description here](https://github.com/MubeenKodvavi/ClothesStore-MERN/blob/master/screenshots/HomeScreen.png?raw=true)
## Install Dependencies for frontend and backend:
Open terminal and make sure you have node and npm installed then run:

    npm install
    cd frontend
    npm install
    cd ..
   ## Environment Variables:
   Create file named '.env' in root and enter mongo URI and paypal client ID of your account.

    NODE_ENV = development
    PORT = 5000
    MONGO_URI = Enter mongoDB connection URI
    JWT_SECRET = 'abc123'
    PAYPAL_CLIENT_ID = Enter paypal client ID
Firstly, add database, you can seed sample data into database with the following command in terminal:

    # Import data
    npm run data:import
  and also destroy data to initialize it with your own data.

    # Destroy data
     npm run data:destroy

## Sample users login:

    admin@example.com	123456	(Admin user)
    mubeenk@example.com	123456
    moiz@example.com	123456

## Running the project:
Run the following command to launch both front end and backend. Project uses port 3000 and 5000 by default, make sure these ports are free or change them manually:

    npm run dev
## License

The MIT License
