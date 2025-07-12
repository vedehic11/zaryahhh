# Zaryah - Your Path to Meaningful Gifts

A Next.js e-commerce platform for handmade gifts from passionate artisans.

## Features

- 🎁 Handmade gift marketplace
- 👨‍🎨 Artisan profiles and stories
- 🛒 Shopping cart with gift packaging
- 🚚 Instant delivery options
- 📱 Responsive design
- 🔐 User authentication
- 📊 Admin dashboard
- 🎯 Gift suggester tool
- 📦 Hamper builder

## Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API
- **Notifications**: React Hot Toast

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
app/
├── components/          # React components
├── contexts/           # React context providers
├── admin/              # Admin dashboard pages
├── seller/             # Seller dashboard pages
├── shop/               # Shop pages
├── product/            # Product detail pages
├── login/              # Authentication pages
├── register/           # Registration pages
└── globals.css         # Global styles
```

## Demo Accounts

- **Buyer**: buyer@demo.com / password123
- **Seller**: seller@demo.com / password123
- **Admin**: admin@demo.com / password123

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
