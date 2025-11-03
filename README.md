# Beast Posters - E-commerce Website

A modern, responsive e-commerce website for selling premium art posters, built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

### Customer-Facing Features
- **Home Page**: Hero section, featured posters, and category browsing
- **Shop Page**: Browse all posters with advanced filtering (category, price, size) and sorting
- **Poster Detail Page**: Large image gallery, size selection, and add to cart functionality
- **Shopping Cart**: View cart items, update quantities, and proceed to checkout
- **Checkout**: Complete order form with shipping information
- **About Us**: Company information and values
- **Contact**: Contact form for customer inquiries

### Admin Panel Features
- **Secure Login**: Authentication with email and password
- **Dashboard**: Overview of posters, orders, categories, and revenue
- **Manage Posters**: Add, edit, and delete posters with image uploads
- **Manage Orders**: View and update order status
- **Manage Categories**: Add, edit, and delete poster categories

## Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Context API**: State management for cart and admin authentication

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **Bcrypt**: Password hashing

## Project Structure

```
/vercel/sandbox/
├── client/                 # Next.js frontend
│   ├── app/               # App router pages
│   │   ├── admin/         # Admin panel pages
│   │   ├── cart/          # Shopping cart
│   │   ├── checkout/      # Checkout page
│   │   ├── poster/[id]/   # Poster detail page
│   │   ├── shop/          # Shop page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Home page
│   │   └── globals.css    # Global styles
│   ├── components/        # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── lib/              # Utilities and data
│   │   ├── CartContext.tsx
│   │   ├── AdminContext.tsx
│   │   └── data.ts
│   └── public/           # Static assets
│
└── server/               # Express backend
    ├── config/          # Configuration files
    │   └── db.js
    ├── middleware/      # Custom middleware
    │   └── auth.js
    ├── models/          # Mongoose models
    │   ├── User.js
    │   ├── Poster.js
    │   ├── Order.js
    │   └── Category.js
    ├── routes/          # API routes
    │   ├── auth.js
    │   ├── posters.js
    │   ├── orders.js
    │   └── categories.js
    ├── uploads/         # Uploaded images
    └── server.js        # Entry point
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd /vercel/sandbox
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Configure Environment Variables**
   
   Create a `.env` file in the `server` directory:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/beast-posters
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

### Running the Application

1. **Start MongoDB**
   ```bash
   mongod
   ```

2. **Start Backend Server**
   ```bash
   cd server
   npm start
   # or for development with auto-reload
   npm run dev
   ```

3. **Start Frontend**
   ```bash
   cd client
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Admin Credentials (Demo)
- **Email**: admin@beastposters.com
- **Password**: admin123

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Posters
- `GET /api/posters` - Get all posters
- `GET /api/posters/:id` - Get single poster
- `POST /api/posters` - Create poster (admin only)
- `PUT /api/posters/:id` - Update poster (admin only)
- `DELETE /api/posters/:id` - Delete poster (admin only)

### Orders
- `GET /api/orders` - Get all orders (admin only)
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order status (admin only)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/:id` - Update category (admin only)
- `DELETE /api/categories/:id` - Delete category (admin only)

## Sample Data

The application comes with 12 sample posters across 6 categories:
- Abstract
- Nature
- Typography
- Minimalist
- Geometric
- Photography

All sample posters use high-quality images from Unsplash.

## Features in Detail

### Shopping Cart
- Persistent cart using localStorage
- Add/remove items
- Update quantities
- Real-time total calculation
- Cart count badge in navbar

### Admin Panel
- Secure authentication with JWT
- CRUD operations for posters
- Order management
- Category management
- Dashboard with statistics

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface
- Optimized images

## Build for Production

### Frontend
```bash
cd client
npm run build
npm start
```

### Backend
```bash
cd server
NODE_ENV=production npm start
```

## Future Enhancements

- Payment gateway integration (Stripe/PayPal)
- Email notifications for orders
- User accounts and order history
- Product reviews and ratings
- Wishlist functionality
- Advanced search with filters
- Image upload for admin panel
- Inventory management
- Discount codes and promotions

## License

This project is open source and available under the MIT License.

## Support

For support or questions, please contact: support@beastposters.com

---

Built with ❤️ using the MERN stack
