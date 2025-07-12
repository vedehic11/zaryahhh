'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Package, 
  Plus, 
  TrendingUp, 
  Eye, 
  Edit,
  Trash2,
  DollarSign,
  ShoppingBag,
  X
} from 'lucide-react'

export const SellerDashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Handcrafted Ceramic Vase',
      price: 1299,
      status: 'approved',
      views: 156,
      sales: 12,
      image: 'https://images.pexels.com/photos/5553045/pexels-photo-5553045.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      name: 'Artisan Soy Candles',
      price: 599,
      status: 'pending',
      views: 89,
      sales: 8,
      image: 'https://images.pexels.com/photos/5624983/pexels-photo-5624983.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ])

  const [showAddProduct, setShowAddProduct] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    categories: [], // New field for multiple categories
    images: [],
    customisable: false,
    customQuestions: [],
    instantDeliveryEligible: false,
    weight: ''
  })
  const [dragActive, setDragActive] = useState(false)
  const [newQuestion, setNewQuestion] = useState('')

  // Define available categories
  const availableCategories = [
    { id: 'for-him', label: 'For Him', icon: '👨' },
    { id: 'for-her', label: 'For Her', icon: '👩' },
    { id: 'for-kids', label: 'For Kids', icon: '👶' },
    { id: 'home-decor', label: 'Home Decor', icon: '🏠' },
    { id: 'wellness', label: 'Wellness', icon: '🧘' },
    { id: 'jewelry', label: 'Jewelry', icon: '💍' },
    { id: 'textiles', label: 'Textiles', icon: '🧵' },
    { id: 'candles', label: 'Candles', icon: '🕯️' },
    { id: 'art-crafts', label: 'Art & Crafts', icon: '🎨' },
    { id: 'personalized', label: 'Personalized Gifts', icon: '🎁' },
    { id: 'occasion', label: 'Occasion Specific', icon: '🎉' },
    { id: 'seasonal', label: 'Seasonal', icon: '🌿' }
  ]

  const stats = [
    { title: 'Total Products', value: '12', icon: Package, color: 'bg-primary-600' },
    { title: 'Total Sales', value: '₹24,580', icon: DollarSign, color: 'bg-mint-600' },
    { title: 'Orders This Month', value: '18', icon: ShoppingBag, color: 'bg-secondary-600' },
    { title: 'Profile Views', value: '342', icon: Eye, color: 'bg-warm-600' }
  ]

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'products', label: 'My Products', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag }
  ]

  const handleAddProduct = (e) => {
    e.preventDefault()
    const product = {
      id: Date.now().toString(),
      ...newProduct,
      price: parseInt(newProduct.price),
      weight: parseInt(newProduct.weight),
      status: 'pending',
      views: 0,
      sales: 0,
      image: newProduct.images[0] || 'https://images.pexels.com/photos/1030303/pexels-photo-1030303.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
    setProducts(prev => [...prev, product])
    setNewProduct({ 
      name: '', 
      price: '', 
      description: '', 
      category: '', 
      categories: [],
      images: [],
      customisable: false,
      customQuestions: [],
      instantDeliveryEligible: false,
      weight: ''
    })
    setNewQuestion('')
    setShowAddProduct(false)
    alert('Product added successfully! It will be reviewed by admin.')
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      const imageFiles = files.filter(file => file.type.startsWith('image/'))
      
      imageFiles.forEach(file => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setNewProduct(prev => ({
            ...prev,
            images: [...prev.images, e.target.result]
          }))
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      const files = Array.from(e.target.files)
      const imageFiles = files.filter(file => file.type.startsWith('image/'))
      
      imageFiles.forEach(file => {
        const reader = new FileReader()
        reader.onload = (e) => {
          setNewProduct(prev => ({
            ...prev,
            images: [...prev.images, e.target.result]
          }))
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const removeImage = (index) => {
    setNewProduct(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const addCustomQuestion = () => {
    if (newQuestion.trim()) {
      setNewProduct(prev => ({
        ...prev,
        customQuestions: [...prev.customQuestions, newQuestion.trim()]
      }))
      setNewQuestion('')
    }
  }

  const removeCustomQuestion = (index) => {
    setNewProduct(prev => ({
      ...prev,
      customQuestions: prev.customQuestions.filter((_, i) => i !== index)
    }))
  }

  const handleCategoryToggle = (categoryId) => {
    setNewProduct(prev => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter(id => id !== categoryId)
        : [...prev.categories, categoryId]
    }))
  }

  const deleteProduct = (productId) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(prev => prev.filter(p => p.id !== productId))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-primary-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-charcoal-900 font-serif">Seller Dashboard</h1>
          <p className="text-charcoal-600 mt-2">Manage your products and track your sales</p>
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
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
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
                      <p className="text-sm text-charcoal-600">Handcrafted Ceramic Vase</p>
                    </div>
                    <span className="text-sm text-charcoal-500">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-cream-50 rounded-lg border border-cream-200">
                    <div>
                      <p className="font-medium text-charcoal-900">Product approved</p>
                      <p className="text-sm text-charcoal-600">Artisan Soy Candles</p>
                    </div>
                    <span className="text-sm text-charcoal-500">1 day ago</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-charcoal-900">My Products</h3>
                  <button
                    onClick={() => setShowAddProduct(true)}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Product</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-soft border border-primary-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold text-charcoal-900 mb-2">{product.name}</h4>
                        <p className="text-lg font-bold text-primary-700 mb-2">₹{product.price}</p>
                        <div className="flex items-center justify-between text-sm text-charcoal-600 mb-3">
                          <span>{product.views} views</span>
                          <span>{product.sales} sales</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.status === 'approved' 
                              ? 'bg-mint-100 text-mint-800'
                              : 'bg-warm-100 text-warm-800'
                          }`}>
                            {product.status}
                          </span>
                          <div className="flex space-x-2">
                            <button className="p-1 text-charcoal-400 hover:text-primary-600 transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => deleteProduct(product.id)}
                              className="p-1 text-charcoal-400 hover:text-error-600 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-charcoal-900">Recent Orders</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg border border-primary-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-charcoal-900">Order #12345</h4>
                      <span className="text-sm text-charcoal-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-charcoal-600 mb-2">Handcrafted Ceramic Vase</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary-700">₹1,299</span>
                      <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">Processing</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Add Product Modal */}
        {showAddProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-charcoal-900">Add New Product</h2>
                  <button
                    onClick={() => setShowAddProduct(false)}
                    className="text-charcoal-400 hover:text-charcoal-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleAddProduct} className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">Product Name</label>
                      <input
                        type="text"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">Price (₹)</label>
                      <input
                        type="number"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, price: e.target.value }))}
                        className="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Description</label>
                    <textarea
                      value={newProduct.description}
                      onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">Category</label>
                      <select
                        value={newProduct.category}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select Primary Category</option>
                        <option value="Home Decor">Home Decor</option>
                        <option value="Candles">Candles</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Jewelry">Jewelry</option>
                        <option value="Art & Crafts">Art & Crafts</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-700 mb-2">Weight (g)</label>
                      <input
                        type="number"
                        value={newProduct.weight}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, weight: e.target.value }))}
                        className="w-full px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-3">
                      Product Categories (Select all that apply)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {availableCategories.map((category) => (
                        <label
                          key={category.id}
                          className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                            newProduct.categories.includes(category.id)
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-primary-200 bg-white hover:border-primary-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={newProduct.categories.includes(category.id)}
                            onChange={() => handleCategoryToggle(category.id)}
                            className="rounded border-primary-300 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-lg">{category.icon}</span>
                          <span className="text-sm font-medium text-charcoal-700">{category.label}</span>
                        </label>
                      ))}
                    </div>
                    {newProduct.categories.length > 0 && (
                      <div className="mt-3 p-2 bg-cream-50 rounded-lg border border-cream-200">
                        <p className="text-xs text-charcoal-600">
                          <span className="font-medium">Selected categories:</span> {
                            newProduct.categories
                              .map(id => availableCategories.find(cat => cat.id === id)?.label)
                              .join(', ')
                          }
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Image Upload */}
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">Product Images</label>
                    <div
                      className={`border-2 border-dashed rounded-lg p-6 text-center ${
                        dragActive ? 'border-primary-500 bg-primary-50' : 'border-primary-300'
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileInput}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="text-charcoal-600">
                          <p>Drag and drop images here, or click to select</p>
                          <p className="text-sm text-charcoal-500 mt-1">Upload up to 5 images</p>
                        </div>
                      </label>
                    </div>
                    
                    {/* Preview Images */}
                    {newProduct.images.length > 0 && (
                      <div className="mt-4 grid grid-cols-5 gap-2">
                        {newProduct.images.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-20 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-error-500 text-white rounded-full p-1 hover:bg-error-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Customization Options */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="customisable"
                        checked={newProduct.customisable}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, customisable: e.target.checked }))}
                        className="rounded border-primary-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="customisable" className="text-sm font-medium text-charcoal-700">
                        This product can be personalized
                      </label>
                    </div>

                    {newProduct.customisable && (
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-2">Custom Questions</label>
                        <div className="space-y-2">
                          {newProduct.customQuestions.map((question, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <input
                                type="text"
                                value={question}
                                onChange={(e) => {
                                  const updatedQuestions = [...newProduct.customQuestions]
                                  updatedQuestions[index] = e.target.value
                                  setNewProduct(prev => ({ ...prev, customQuestions: updatedQuestions }))
                                }}
                                className="flex-1 px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                placeholder="e.g., What color would you prefer?"
                              />
                              <button
                                type="button"
                                onClick={() => removeCustomQuestion(index)}
                                className="p-2 text-error-600 hover:bg-error-100 rounded-lg"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              value={newQuestion}
                              onChange={(e) => setNewQuestion(e.target.value)}
                              className="flex-1 px-3 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                              placeholder="Add a custom question..."
                            />
                            <button
                              type="button"
                              onClick={addCustomQuestion}
                              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="instantDelivery"
                        checked={newProduct.instantDeliveryEligible}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, instantDeliveryEligible: e.target.checked }))}
                        className="rounded border-primary-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="instantDelivery" className="text-sm font-medium text-charcoal-700">
                        Eligible for instant delivery
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setShowAddProduct(false)}
                      className="px-6 py-2 border border-primary-300 text-charcoal-700 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Add Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}