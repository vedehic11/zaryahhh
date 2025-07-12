'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Package, 
  TrendingUp, 
  Settings,
  Eye,
  Check,
  X,
  Edit,
  Trash2,
  MessageSquare,
  ShoppingCart,
  Gift,
  Clock,
  MapPin,
  Star,
  CreditCard,
  CheckCircle,
  Instagram,
  Phone,
  FileText,
  Camera
} from 'lucide-react'

export const AdminDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Handcrafted Ceramic Vase',
      sellerName: 'Priya Sharma',
      price: 1299,
      status: 'pending',
      image: 'https://images.pexels.com/photos/5553045/pexels-photo-5553045.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful handcrafted ceramic vase with traditional designs',
      section: 'Home & Living',
      weight: 850,
      customisable: true,
      customQuestions: ['What color would you prefer?', 'Any specific message to engrave?'],
      instantDelivery: true,
      rating: 4.8,
      reviews: 24,
      stock: 15
    },
    {
      id: '2',
      name: 'Artisan Soy Candles',
      sellerName: 'Ravi Kumar',
      price: 599,
      status: 'approved',
      image: 'https://images.pexels.com/photos/5624983/pexels-photo-5624983.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Natural soy candles with essential oils',
      section: 'Wellness',
      weight: 200,
      customisable: false,
      customQuestions: [],
      instantDelivery: false,
      rating: 4.6,
      reviews: 18,
      stock: 8
    },
    {
      id: '3',
      name: 'Personalized Wooden Photo Frame',
      sellerName: 'Anita Patel',
      price: 899,
      status: 'approved',
      image: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom wooden photo frame with laser engraving',
      section: 'Personalized Gifts',
      weight: 300,
      customisable: true,
      customQuestions: ['What text would you like engraved?', 'Preferred wood finish?', 'Frame size?'],
      instantDelivery: false,
      rating: 4.9,
      reviews: 32,
      stock: 12
    }
  ])

  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      customerName: 'John Doe',
      customerEmail: 'john@example.com',
      customerPhone: '+91 98765 43210',
      orderDate: '2024-01-15',
      status: 'processing',
      total: 1898,
      items: [
        {
          productId: '1',
          name: 'Handcrafted Ceramic Vase',
          price: 1299,
          quantity: 1,
          personalization: {
            color: 'Blue',
            message: 'Happy Birthday!'
          }
        },
        {
          productId: '2',
          name: 'Artisan Soy Candles',
          price: 599,
          quantity: 1,
          personalization: null
        }
      ],
      shippingAddress: {
        street: '123 Main Street',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001'
      },
      deliveryType: 'standard',
      paymentMethod: 'online'
    },
    {
      id: 'ORD002',
      customerName: 'Jane Smith',
      customerEmail: 'jane@example.com',
      customerPhone: '+91 87654 32109',
      orderDate: '2024-01-14',
      status: 'shipped',
      total: 899,
      items: [
        {
          productId: '3',
          name: 'Personalized Wooden Photo Frame',
          price: 899,
          quantity: 1,
          personalization: {
            text: 'Forever Together',
            finish: 'Walnut',
            size: '8x10'
          }
        }
      ],
      shippingAddress: {
        street: '456 Oak Avenue',
        city: 'Delhi',
        state: 'Delhi',
        pincode: '110001'
      },
      deliveryType: 'express',
      paymentMethod: 'cod'
    },
    {
      id: 'ORD003',
      customerName: 'Mike Johnson',
      customerEmail: 'mike@example.com',
      customerPhone: '+91 76543 21098',
      orderDate: '2024-01-13',
      status: 'delivered',
      total: 2598,
      items: [
        {
          productId: '1',
          name: 'Handcrafted Ceramic Vase',
          price: 1299,
          quantity: 2,
          personalization: {
            color: 'Green',
            message: 'Congratulations!'
          }
        }
      ],
      shippingAddress: {
        street: '789 Pine Road',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001'
      },
      deliveryType: 'instant',
      paymentMethod: 'online'
    }
  ])

  const [sellers, setSellers] = useState([
    {
      id: '1',
      name: 'Priya Sharma',
      email: 'priya@example.com',
      businessName: 'Priya Ceramics',
      status: 'verified',
      productsCount: 5,
      termsAccepted: true,
      privacyPolicyAccepted: true,
      sellerAgreementAccepted: true,
      termsAcceptedDate: '2024-01-15T10:30:00.000Z',
      verificationData: {
        idNumber: '1234-5678-9012',
        idType: 'aadhar',
        instagramHandle: '@priya_ceramics',
        facebookHandle: 'Priya Ceramics Official',
        twitterHandle: '@priyaceramics',
        linkedinHandle: 'priya-sharma-ceramics',
        alternateMobile: '9876543210',
        businessAddress: '123 Craft Street, Mumbai, Maharashtra 400001',
        gstNumber: '22AAAAA0000A1Z5',
        panNumber: 'ABCDE1234F',
        bankAccountNumber: '1234567890',
        ifscCode: 'SBIN0001234',
        accountHolderName: 'Priya Sharma',
        uploadedFiles: {
          idDocument: {
            name: 'aadhar_card.pdf',
            size: 2048576,
            type: 'application/pdf'
          },
          businessDocuments: [
            {
              name: 'gst_certificate.pdf',
              size: 1536000,
              type: 'application/pdf'
            },
            {
              name: 'business_license.jpg',
              size: 1024000,
              type: 'image/jpeg'
            }
          ]
        }
      }
    },
    {
      id: '2',
      name: 'Ravi Kumar',
      email: 'ravi@example.com',
      businessName: 'Natural Candles Co',
      status: 'pending',
      productsCount: 3,
      termsAccepted: true,
      privacyPolicyAccepted: true,
      sellerAgreementAccepted: true,
      termsAcceptedDate: '2024-01-16T14:20:00.000Z',
      verificationData: {
        idNumber: '9876-5432-1098',
        idType: 'pan',
        instagramHandle: '@natural_candles',
        facebookHandle: '',
        twitterHandle: '',
        linkedinHandle: 'ravi-kumar-candles',
        alternateMobile: '8765432109',
        businessAddress: '456 Aroma Lane, Delhi, Delhi 110001',
        gstNumber: '',
        panNumber: 'FGHIJ5678K',
        bankAccountNumber: '0987654321',
        ifscCode: 'HDFC0001234',
        accountHolderName: 'Ravi Kumar',
        uploadedFiles: {
          idDocument: {
            name: 'pan_card.jpg',
            size: 1536000,
            type: 'image/jpeg'
          },
          businessDocuments: []
        }
      }
    },
    {
      id: '3',
      name: 'Anita Patel',
      email: 'anita@example.com',
      businessName: 'Anita\'s Woodcraft',
      status: 'pending',
      productsCount: 0,
      termsAccepted: true,
      privacyPolicyAccepted: true,
      sellerAgreementAccepted: true,
      termsAcceptedDate: '2024-01-17T09:15:00.000Z',
      verificationData: {
        idNumber: '5678-9012-3456',
        idType: 'driving_license',
        instagramHandle: '@anita_woodcraft',
        facebookHandle: 'Anita Woodcraft',
        twitterHandle: '',
        linkedinHandle: '',
        alternateMobile: '7654321098',
        businessAddress: '789 Wood Street, Bangalore, Karnataka 560001',
        gstNumber: '29BBBBB0000B2Z6',
        panNumber: 'KLMNO9012P',
        bankAccountNumber: '1122334455',
        ifscCode: 'ICIC0001234',
        accountHolderName: 'Anita Patel',
        uploadedFiles: {
          idDocument: {
            name: 'driving_license.pdf',
            size: 2560000,
            type: 'application/pdf'
          },
          businessDocuments: [
            {
              name: 'gst_certificate.pdf',
              size: 2048000,
              type: 'application/pdf'
            }
          ]
        }
      }
    }
  ])

  const [selectedSeller, setSelectedSeller] = useState(null)
  const [showVerificationModal, setShowVerificationModal] = useState(false)

  const [supportQueries, setSupportQueries] = useState([
    {
      id: 'q1',
      buyer: 'John Doe',
      email: 'john@example.com',
      status: 'open',
      messages: [
        { from: 'buyer', text: 'I have an issue with my order #12345', time: '2 hours ago' },
        { from: 'admin', text: 'Hi John, can you describe the issue?', time: '1 hour ago' },
        { from: 'buyer', text: 'The product arrived damaged.', time: '1 hour ago' }
      ]
    },
    {
      id: 'q2',
      buyer: 'Jane Smith',
      email: 'jane@example.com',
      status: 'open',
      messages: [
        { from: 'buyer', text: 'How do I track my shipment?', time: '3 hours ago' }
      ]
    }
  ])
  const [activeSupportId, setActiveSupportId] = useState(null)
  const [adminReply, setAdminReply] = useState('')

  const updateProductStatus = (productId, newStatus) => {
    setProducts(prev => prev.map(product =>
      product.id === productId ? { ...product, status: newStatus } : product
    ))
  }

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const updateSellerStatus = (sellerId, newStatus) => {
    setSellers(prev => prev.map(seller =>
      seller.id === sellerId ? { ...seller, status: newStatus } : seller
    ))
  }

  const handleSendReply = () => {
    if (!adminReply.trim() || !activeSupportId) return
    setSupportQueries(prev => prev.map(q =>
      q.id === activeSupportId
        ? { ...q, messages: [...q.messages, { from: 'admin', text: adminReply.trim(), time: 'Just now' }] }
        : q
    ))
    setAdminReply('')
  }
  const handleResolve = (id) => {
    setSupportQueries(prev => prev.map(q =>
      q.id === id ? { ...q, status: 'resolved' } : q
    ))
    setActiveSupportId(null)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-warm-100 text-warm-800'
      case 'processing': return 'bg-primary-100 text-primary-800'
      case 'shipped': return 'bg-secondary-100 text-secondary-800'
      case 'delivered': return 'bg-mint-100 text-mint-800'
      case 'cancelled': return 'bg-error-100 text-error-800'
      default: return 'bg-neutral-100 text-neutral-800'
    }
  }

  const stats = [
    { title: 'Total Products', value: '156', icon: Package, color: 'bg-primary-600' },
    { title: 'Active Sellers', value: '23', icon: Users, color: 'bg-mint-600' },
    { title: 'Total Orders', value: '89', icon: ShoppingCart, color: 'bg-secondary-600' },
    { title: 'Monthly Revenue', value: '₹45,230', icon: TrendingUp, color: 'bg-warm-600' }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'sellers', label: 'Sellers', icon: Users },
    { id: 'verification', label: 'Verification', icon: CheckCircle },
    { id: 'support', label: 'Support', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) {
      return <Camera className="w-4 h-4 text-primary-600" />
    }
    return <FileText className="w-4 h-4 text-secondary-600" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-primary-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-charcoal-900 font-serif">Admin Dashboard</h1>
          <p className="text-charcoal-600 mt-2">Manage your marketplace</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-soft border border-primary-100"
              >
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg shadow-soft`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-charcoal-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-charcoal-900">{stat.value}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-soft border border-primary-100">
          <div className="border-b border-primary-200">
            <nav className="flex space-x-8 px-6 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-primary-600 text-primary-700'
                        : 'border-transparent text-charcoal-500 hover:text-charcoal-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-cream-50 rounded-lg border border-cream-200">
                    <div>
                      <p className="font-medium text-charcoal-900">New order received</p>
                      <p className="text-sm text-charcoal-600">Order #ORD004 from Sarah Wilson</p>
                    </div>
                    <span className="text-sm text-charcoal-500">1 hour ago</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-cream-50 rounded-lg border border-cream-200">
                    <div>
                      <p className="font-medium text-charcoal-900">New seller registration</p>
                      <p className="text-sm text-charcoal-600">Ravi Kumar applied to join</p>
                    </div>
                    <span className="text-sm text-charcoal-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-cream-50 rounded-lg border border-cream-200">
                    <div>
                      <p className="font-medium text-charcoal-900">Product submitted for review</p>
                      <p className="text-sm text-charcoal-600">Handcrafted Ceramic Vase</p>
                    </div>
                    <span className="text-sm text-charcoal-500">5 hours ago</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Order Management</h3>
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-primary-200 rounded-lg p-6 bg-gradient-to-r from-cream-50 to-primary-50">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-lg text-charcoal-900">Order #{order.id}</h4>
                          <p className="text-sm text-charcoal-600">{order.customerName} • {order.customerEmail}</p>
                          <p className="text-sm text-charcoal-600">{order.customerPhone}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary-700">₹{order.total.toLocaleString()}</p>
                          <p className="text-sm text-charcoal-600">{order.orderDate}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div className="mb-4">
                        <h5 className="font-medium mb-2 text-charcoal-900">Items:</h5>
                        <div className="space-y-3">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-primary-100">
                              <div className="flex-1">
                                <p className="font-medium text-charcoal-900">{item.name}</p>
                                <p className="text-sm text-charcoal-600">Qty: {item.quantity} × ₹{item.price}</p>
                                {item.personalization && (
                                  <div className="mt-2">
                                    <p className="text-sm font-medium text-primary-700">Personalization:</p>
                                    <div className="text-sm text-charcoal-700">
                                      {Object.entries(item.personalization).map(([key, value]) => (
                                        <div key={key}><span className="font-medium">{key}:</span> {value}</div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Shipping Info */}
                      <div className="mb-4">
                        <h5 className="font-medium mb-2 text-charcoal-900">Shipping Address:</h5>
                        <div className="text-sm text-charcoal-700">
                          <p>{order.shippingAddress.street}</p>
                          <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}</p>
                        </div>
                      </div>

                      {/* Order Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-charcoal-600">
                          <span className="flex items-center space-x-1">
                            <Package className="w-4 h-4" />
                            <span>{order.deliveryType}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <CreditCard className="w-4 h-4" />
                            <span>{order.paymentMethod}</span>
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          {order.status === 'processing' && (
                            <>
                              <button
                                onClick={() => updateOrderStatus(order.id, 'shipped')}
                                className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors"
                              >
                                Mark Shipped
                              </button>
                            </>
                          )}
                          {order.status === 'shipped' && (
                            <button
                              onClick={() => updateOrderStatus(order.id, 'delivered')}
                              className="px-4 py-2 bg-mint-600 text-white rounded-lg text-sm hover:bg-mint-700 transition-colors"
                            >
                              Mark Delivered
                            </button>
                          )}
                          <button className="px-4 py-2 border border-primary-300 rounded-lg text-sm hover:bg-primary-50 transition-colors text-charcoal-700">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Product Management</h3>
                <div className="space-y-6">
                  {products.map((product) => (
                    <div key={product.id} className="border border-primary-200 rounded-lg p-6 bg-gradient-to-r from-cream-50 to-primary-50">
                      <div className="flex items-start space-x-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-24 h-24 rounded-lg object-cover border border-primary-200"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-lg text-charcoal-900">{product.name}</h4>
                              <p className="text-sm text-charcoal-600">by {product.sellerName}</p>
                              <p className="text-sm text-charcoal-700">{product.description}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-primary-700">₹{product.price.toLocaleString()}</p>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                                product.status === 'approved' 
                                  ? 'bg-mint-100 text-mint-800'
                                  : product.status === 'pending'
                                  ? 'bg-warm-100 text-warm-800'
                                  : 'bg-error-100 text-error-800'
                              }`}>
                                {product.status}
                              </span>
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-sm">
                              <span className="font-medium text-charcoal-600">Section:</span>
                              <p className="text-charcoal-800">{product.section}</p>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium text-charcoal-600">Weight:</span>
                              <p className="text-charcoal-800">{product.weight}g</p>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium text-charcoal-600">Stock:</span>
                              <p className="text-charcoal-800">{product.stock} units</p>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium text-charcoal-600">Rating:</span>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-warm-500 fill-current" />
                                <span className="text-charcoal-800">{product.rating} ({product.reviews})</span>
                              </div>
                            </div>
                          </div>

                          {/* Categories */}
                          {(product.category || (product.categories && product.categories.length > 0)) && (
                            <div className="mb-4">
                              <p className="text-sm font-medium text-charcoal-600 mb-2">Categories:</p>
                              <div className="flex flex-wrap gap-2">
                                {product.category && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                                    {product.category}
                                  </span>
                                )}
                                {product.categories && product.categories.map((cat, index) => {
                                  const categoryLabels = {
                                    'for-him': 'For Him',
                                    'for-her': 'For Her',
                                    'for-kids': 'For Kids',
                                    'home-decor': 'Home Decor',
                                    'wellness': 'Wellness',
                                    'jewelry': 'Jewelry',
                                    'textiles': 'Textiles',
                                    'candles': 'Candles',
                                    'art-crafts': 'Art & Crafts',
                                    'personalized': 'Personalized Gifts',
                                    'occasion': 'Occasion Specific',
                                    'seasonal': 'Seasonal'
                                  }
                                  return (
                                    <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                                      {categoryLabels[cat] || cat}
                                    </span>
                                  )
                                })}
                              </div>
                            </div>
                          )}

                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.customisable && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                                <Gift className="w-3 h-3 mr-1" />
                                Customisable
                              </span>
                            )}
                            {product.instantDelivery && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-mint-100 text-mint-800">
                                <Clock className="w-3 h-3 mr-1" />
                                Instant Delivery
                              </span>
                            )}
                          </div>

                          {/* Custom Questions */}
                          {product.customisable && product.customQuestions && product.customQuestions.length > 0 && (
                            <div className="mb-4">
                              <p className="text-sm font-medium text-charcoal-600 mb-2">Custom Questions:</p>
                              <ul className="text-sm text-charcoal-700 space-y-1">
                                {product.customQuestions.map((question, index) => (
                                  <li key={index} className="flex items-start space-x-2">
                                    <span className="text-primary-600">•</span>
                                    <span>{question}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Actions */}
                          <div className="flex items-center space-x-2">
                            {product.status === 'pending' && (
                              <>
                                <button
                                  onClick={() => updateProductStatus(product.id, 'approved')}
                                  className="px-4 py-2 bg-mint-600 text-white rounded-lg text-sm hover:bg-mint-700 transition-colors flex items-center space-x-1"
                                >
                                  <Check className="w-4 h-4" />
                                  <span>Approve</span>
                                </button>
                                <button
                                  onClick={() => updateProductStatus(product.id, 'rejected')}
                                  className="px-4 py-2 bg-error-600 text-white rounded-lg text-sm hover:bg-error-700 transition-colors flex items-center space-x-1"
                                >
                                  <X className="w-4 h-4" />
                                  <span>Reject</span>
                                </button>
                              </>
                            )}
                            <button className="px-4 py-2 border border-primary-300 rounded-lg text-sm hover:bg-primary-50 transition-colors text-charcoal-700 flex items-center space-x-1">
                              <Edit className="w-4 h-4" />
                              <span>Edit</span>
                            </button>
                            <button className="px-4 py-2 border border-primary-300 rounded-lg text-sm hover:bg-primary-50 transition-colors text-charcoal-700 flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>View</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sellers' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Seller Management</h3>
                <div className="space-y-4">
                  {sellers.map((seller) => (
                    <div key={seller.id} className="border border-primary-200 rounded-lg p-6 bg-gradient-to-r from-cream-50 to-primary-50">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-lg text-charcoal-900">{seller.name}</h4>
                          <p className="text-sm text-charcoal-600">{seller.email}</p>
                          <p className="text-sm text-charcoal-700 font-medium">{seller.businessName}</p>
                          <p className="text-xs text-charcoal-500">{seller.productsCount} products</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            seller.status === 'verified' 
                              ? 'bg-mint-100 text-mint-800'
                              : seller.status === 'pending'
                              ? 'bg-warm-100 text-warm-800'
                              : 'bg-error-100 text-error-800'
                          }`}>
                            {seller.status}
                          </span>
                          <button
                            onClick={() => {
                              setSelectedSeller(seller)
                              setShowVerificationModal(true)
                            }}
                            className="px-3 py-1 border border-primary-300 rounded-lg text-sm hover:bg-primary-50 transition-colors text-charcoal-700 flex items-center space-x-1"
                          >
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                          </button>
                        </div>
                      </div>

                      {/* Quick Verification Info */}
                      {seller.verificationData && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                          <div>
                            <span className="font-medium text-charcoal-600">ID Type:</span>
                            <p className="text-charcoal-800 capitalize">{seller.verificationData.idType.replace('_', ' ')}</p>
                          </div>
                          <div>
                            <span className="font-medium text-charcoal-600">Social Media:</span>
                            <p className="text-charcoal-800">
                              {seller.verificationData.instagramHandle || seller.verificationData.facebookHandle || seller.verificationData.twitterHandle ? 'Provided' : 'Missing'}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-charcoal-600">Bank Details:</span>
                            <p className="text-charcoal-800">
                              {seller.verificationData.bankAccountNumber ? 'Complete' : 'Incomplete'}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-charcoal-600">Address:</span>
                            <p className="text-charcoal-800">
                              {seller.verificationData.businessAddress ? 'Provided' : 'Missing'}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center space-x-2">
                        {seller.status === 'pending' && (
                          <>
                            <button
                              onClick={() => updateSellerStatus(seller.id, 'verified')}
                              className="px-4 py-2 bg-mint-600 text-white rounded-lg text-sm hover:bg-mint-700 transition-colors flex items-center space-x-1"
                            >
                              <Check className="w-4 h-4" />
                              <span>Verify</span>
                            </button>
                            <button
                              onClick={() => updateSellerStatus(seller.id, 'rejected')}
                              className="px-4 py-2 bg-error-600 text-white rounded-lg text-sm hover:bg-error-700 transition-colors flex items-center space-x-1"
                            >
                              <X className="w-4 h-4" />
                              <span>Reject</span>
                            </button>
                          </>
                        )}
                        <button className="px-4 py-2 border border-primary-300 rounded-lg text-sm hover:bg-primary-50 transition-colors text-charcoal-700 flex items-center space-x-1">
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'verification' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Seller Verification Requests</h3>
                <div className="space-y-6">
                  {sellers.filter(seller => seller.status === 'pending').map((seller) => (
                    <div key={seller.id} className="border border-warm-200 rounded-lg p-6 bg-gradient-to-r from-warm-50 to-cream-50">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-lg text-charcoal-900">{seller.name}</h4>
                          <p className="text-sm text-charcoal-600">{seller.email}</p>
                          <p className="text-sm text-charcoal-700 font-medium">{seller.businessName}</p>
                          <p className="text-xs text-warm-600 bg-warm-100 px-2 py-1 rounded-full inline-block mt-1">
                            Pending Verification
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-charcoal-600">Applied: {new Date().toLocaleDateString()}</p>
                        </div>
                      </div>

                      {seller.verificationData && (
                        <div className="space-y-4">
                          {/* ID Verification */}
                          <div className="bg-white rounded-lg p-4 border border-warm-200">
                            <h5 className="font-medium text-charcoal-900 mb-3 flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-mint-600" />
                              <span>Identity Verification</span>
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-charcoal-600">ID Type:</span>
                                <p className="text-charcoal-800 capitalize">{seller.verificationData.idType.replace('_', ' ')}</p>
                              </div>
                              <div>
                                <span className="font-medium text-charcoal-600">ID Number:</span>
                                <p className="text-charcoal-800 font-mono">{seller.verificationData.idNumber}</p>
                              </div>
                            </div>
                            
                            {/* ID Document Upload */}
                            {seller.verificationData.uploadedFiles?.idDocument && (
                              <div className="mt-4 p-3 bg-mint-50 rounded-lg border border-mint-200">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    {getFileIcon(seller.verificationData.uploadedFiles.idDocument.type)}
                                    <div>
                                      <p className="text-sm font-medium text-charcoal-800">
                                        {seller.verificationData.uploadedFiles.idDocument.name}
                                      </p>
                                      <p className="text-xs text-charcoal-600">
                                        {formatFileSize(seller.verificationData.uploadedFiles.idDocument.size)}
                                      </p>
                                    </div>
                                  </div>
                                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                                    View Document
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Social Media Verification */}
                          <div className="bg-white rounded-lg p-4 border border-warm-200">
                            <h5 className="font-medium text-charcoal-900 mb-3 flex items-center space-x-2">
                              <Instagram className="w-4 h-4 text-pink-500" />
                              <span>Social Media Presence</span>
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              {seller.verificationData.instagramHandle && (
                                <div>
                                  <span className="font-medium text-charcoal-600">Instagram:</span>
                                  <p className="text-charcoal-800">{seller.verificationData.instagramHandle}</p>
                                </div>
                              )}
                              {seller.verificationData.facebookHandle && (
                                <div>
                                  <span className="font-medium text-charcoal-600">Facebook:</span>
                                  <p className="text-charcoal-800">{seller.verificationData.facebookHandle}</p>
                                </div>
                              )}
                              {seller.verificationData.twitterHandle && (
                                <div>
                                  <span className="font-medium text-charcoal-600">Twitter:</span>
                                  <p className="text-charcoal-800">{seller.verificationData.twitterHandle}</p>
                                </div>
                              )}
                              {seller.verificationData.linkedinHandle && (
                                <div>
                                  <span className="font-medium text-charcoal-600">LinkedIn:</span>
                                  <p className="text-charcoal-800">{seller.verificationData.linkedinHandle}</p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Contact Information */}
                          <div className="bg-white rounded-lg p-4 border border-warm-200">
                            <h5 className="font-medium text-charcoal-900 mb-3 flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-primary-600" />
                              <span>Contact Information</span>
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-charcoal-600">Primary Mobile:</span>
                                <p className="text-charcoal-800">{seller.mobile}</p>
                              </div>
                              <div>
                                <span className="font-medium text-charcoal-600">Alternate Mobile:</span>
                                <p className="text-charcoal-800">{seller.verificationData.alternateMobile}</p>
                              </div>
                              <div className="md:col-span-2">
                                <span className="font-medium text-charcoal-600">Business Address:</span>
                                <p className="text-charcoal-800">{seller.verificationData.businessAddress}</p>
                              </div>
                            </div>
                          </div>

                          {/* Business Documents */}
                          <div className="bg-white rounded-lg p-4 border border-warm-200">
                            <h5 className="font-medium text-charcoal-900 mb-3 flex items-center space-x-2">
                              <FileText className="w-4 h-4 text-secondary-600" />
                              <span>Business Documents</span>
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              {seller.verificationData.gstNumber && (
                                <div>
                                  <span className="font-medium text-charcoal-600">GST Number:</span>
                                  <p className="text-charcoal-800 font-mono">{seller.verificationData.gstNumber}</p>
                                </div>
                              )}
                              {seller.verificationData.panNumber && (
                                <div>
                                  <span className="font-medium text-charcoal-600">PAN Number:</span>
                                  <p className="text-charcoal-800 font-mono">{seller.verificationData.panNumber}</p>
                                </div>
                              )}
                            </div>
                            
                            {/* Uploaded Business Documents */}
                            {seller.verificationData.uploadedFiles?.businessDocuments && 
                             seller.verificationData.uploadedFiles.businessDocuments.length > 0 && (
                              <div className="mt-4 space-y-2">
                                <p className="text-sm font-medium text-charcoal-700">Uploaded Documents:</p>
                                {seller.verificationData.uploadedFiles.businessDocuments.map((file, index) => (
                                  <div key={index} className="flex items-center justify-between p-2 bg-secondary-50 rounded-lg border border-secondary-200">
                                    <div className="flex items-center space-x-2">
                                      {getFileIcon(file.type)}
                                      <div>
                                        <p className="text-sm font-medium text-charcoal-800">{file.name}</p>
                                        <p className="text-xs text-charcoal-600">{formatFileSize(file.size)}</p>
                                      </div>
                                    </div>
                                    <button className="text-secondary-600 hover:text-secondary-700 text-sm font-medium">
                                      View
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Bank Details */}
                          <div className="bg-white rounded-lg p-4 border border-warm-200">
                            <h5 className="font-medium text-charcoal-900 mb-3 flex items-center space-x-2">
                              <CreditCard className="w-4 h-4 text-mint-600" />
                              <span>Bank Account Details</span>
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium text-charcoal-600">Account Holder:</span>
                                <p className="text-charcoal-800">{seller.verificationData.accountHolderName}</p>
                              </div>
                              <div>
                                <span className="font-medium text-charcoal-600">Account Number:</span>
                                <p className="text-charcoal-800 font-mono">{seller.verificationData.bankAccountNumber}</p>
                              </div>
                              <div>
                                <span className="font-medium text-charcoal-600">IFSC Code:</span>
                                <p className="text-charcoal-800 font-mono">{seller.verificationData.ifscCode}</p>
                              </div>
                            </div>
                          </div>

                          {/* Terms and Conditions Acceptance */}
                          <div className="bg-white rounded-lg p-4 border border-warm-200">
                            <h5 className="font-medium text-charcoal-900 mb-3 flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Terms and Agreements</span>
                            </h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center justify-between">
                                <span className="text-charcoal-600">Terms & Conditions:</span>
                                <span className="text-green-600 font-medium">✓ Accepted</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-charcoal-600">Privacy Policy:</span>
                                <span className="text-green-600 font-medium">✓ Accepted</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-charcoal-600">Seller Agreement:</span>
                                <span className="text-green-600 font-medium">✓ Accepted</span>
                              </div>
                              <div className="pt-2 border-t border-gray-200">
                                <span className="text-charcoal-600">Accepted on:</span>
                                <p className="text-charcoal-800 font-medium">
                                  {new Date(seller.termsAcceptedDate).toLocaleDateString('en-IN', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Verification Actions */}
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-warm-200">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => updateSellerStatus(seller.id, 'verified')}
                            className="px-6 py-2 bg-mint-600 text-white rounded-lg font-medium hover:bg-mint-700 transition-colors flex items-center space-x-2"
                          >
                            <Check className="w-4 h-4" />
                            <span>Approve Verification</span>
                          </button>
                          <button
                            onClick={() => updateSellerStatus(seller.id, 'rejected')}
                            className="px-6 py-2 bg-error-600 text-white rounded-lg font-medium hover:bg-error-700 transition-colors flex items-center space-x-2"
                          >
                            <X className="w-4 h-4" />
                            <span>Reject</span>
                          </button>
                        </div>
                        <button className="px-4 py-2 border border-primary-300 rounded-lg text-sm hover:bg-primary-50 transition-colors text-charcoal-700">
                          Request More Info
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  {sellers.filter(seller => seller.status === 'pending').length === 0 && (
                    <div className="text-center py-12">
                      <CheckCircle className="w-12 h-12 text-mint-600 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-charcoal-900 mb-2">No Pending Verifications</h3>
                      <p className="text-charcoal-600">All seller verification requests have been processed.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'support' && (
              <div className="flex flex-col md:flex-row gap-6">
                {/* Query List */}
                <div className="md:w-1/3">
                  <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Support Queries</h3>
                  <div className="space-y-3">
                    {supportQueries.length === 0 && <div className="text-charcoal-500">No queries.</div>}
                    {supportQueries.map(q => (
                      <button
                        key={q.id}
                        onClick={() => setActiveSupportId(q.id)}
                        className={`w-full text-left p-4 rounded-lg border transition-colors ${activeSupportId === q.id ? 'border-primary-500 bg-primary-50' : 'border-primary-200 bg-white hover:bg-cream-50'}`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-charcoal-800">{q.buyer}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${q.status === 'resolved' ? 'bg-mint-100 text-mint-700' : 'bg-warm-100 text-warm-700'}`}>{q.status}</span>
                        </div>
                        <div className="text-xs text-charcoal-500">{q.email}</div>
                        <div className="text-sm text-charcoal-700 mt-1 line-clamp-1">{q.messages[q.messages.length-1]?.text}</div>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Chat Panel */}
                <div className="md:w-2/3 bg-gradient-to-br from-cream-50 to-primary-50 rounded-xl p-6 min-h-[300px] flex flex-col border border-primary-200">
                  {activeSupportId ? (
                    <>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="font-bold text-primary-700">{supportQueries.find(q => q.id === activeSupportId)?.buyer}</span>
                          <span className="ml-2 text-xs text-charcoal-500">{supportQueries.find(q => q.id === activeSupportId)?.email}</span>
                        </div>
                        <button
                          onClick={() => handleResolve(activeSupportId)}
                          className="bg-mint-100 text-mint-700 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-mint-200 transition-colors"
                        >
                          Mark as Resolved
                        </button>
                      </div>
                      <div className="flex-1 overflow-y-auto mb-4 space-y-2">
                        {supportQueries.find(q => q.id === activeSupportId)?.messages.map((msg, idx) => (
                          <div key={idx} className={`flex ${msg.from === 'admin' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.from === 'admin' ? 'bg-primary-600 text-white' : 'bg-white border border-primary-200'}`}>
                              <div className="text-sm">{msg.text}</div>
                              <div className="text-xs text-gray-300 mt-1 text-right">{msg.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-2">
                        <input
                          type="text"
                          value={adminReply}
                          onChange={e => setAdminReply(e.target.value)}
                          className="flex-1 px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Type your reply..."
                          onKeyDown={e => e.key === 'Enter' && handleSendReply()}
                        />
                        <button
                          type="button"
                          onClick={handleSendReply}
                          className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                        >
                          Send
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 flex items-center justify-center text-charcoal-400">Select a query to view and reply</div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Platform Settings</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Platform Commission (%)
                    </label>
                    <input
                      type="number"
                      defaultValue="10"
                      className="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Minimum Order Value
                    </label>
                    <input
                      type="number"
                      defaultValue="100"
                      className="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}