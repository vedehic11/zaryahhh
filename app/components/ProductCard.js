'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Verified, Play, Star, MapPin, ShoppingBag, Gift, Package, Scale, Sparkles } from 'lucide-react'
import { InstantDeliveryBadge, DeliveryTimeEstimate } from './InstantDeliveryBadge'
import { useCart } from '../contexts/CartContext'
import Link from 'next/link'

export const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [showQuickAdd, setShowQuickAdd] = useState(false)
  const { addToCart } = useCart()

  const handleQuickAdd = () => {
    addToCart(product)
  }

  const handleGiftAdd = () => {
    addToCart(product, { giftPackaging: true })
  }

  return (
    <Link href={`/product/${product.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8 }}
        className="bg-cream-50 rounded-2xl shadow-soft border border-primary-100 overflow-hidden flex flex-col h-full p-2 sm:p-4 lg:p-8 hover:shadow-medium transition-all duration-300"
        onHoverStart={() => setShowQuickAdd(true)}
        onHoverEnd={() => setShowQuickAdd(false)}
      >
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-32 sm:h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700 rounded-lg"
          />
          
          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Feature Badges */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 flex flex-col gap-2">
            {/* Instant Delivery Badge */}
            <InstantDeliveryBadge product={product} />
            
            {/* Customization Badge */}
            {product.customisable && (
              <div className="bg-secondary-600/90 backdrop-blur-sm text-white px-2 py-1 rounded-full shadow-soft flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span className="text-xs font-medium">Custom</span>
              </div>
            )}
          </div>

          {/* Weight Badge */}
          {product.weight && (
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
              <div className="bg-charcoal-700/80 backdrop-blur-sm text-white px-2 py-1 rounded-full shadow-soft flex items-center space-x-1">
                <Scale className="w-3 h-3" />
                <span className="text-xs font-medium">{product.weight}g</span>
              </div>
            </div>
          )}

          {/* Video Badge */}
          {product.videoUrl && (
            <div className="absolute top-12 right-2 sm:top-16 sm:right-4">
              <div className="bg-primary-700/80 backdrop-blur-sm text-white p-2.5 rounded-full shadow-soft">
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
          )}

          {/* Like Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-primary-100 hover:bg-primary-200 p-2 sm:p-3 rounded-full transition-all shadow-soft border border-primary-200 ${isLiked ? 'bg-primary-600 hover:bg-primary-700' : ''}`}
          >
            <Heart 
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                isLiked ? 'text-white fill-current' : 'text-primary-600'
              }`} 
            />
          </motion.button>

          {/* Quick Add Buttons - Hidden on mobile, shown on hover for desktop */}
          <AnimatePresence>
            {showQuickAdd && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 hidden lg:flex space-x-2"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleQuickAdd}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all shadow-soft border border-primary-700 flex items-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4 text-white" />
                  <span className="hidden sm:inline">Add to Cart</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGiftAdd}
                  className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all shadow-soft border border-secondary-700 flex items-center space-x-2"
                >
                  <Gift className="w-4 h-4 text-white" />
                  <span className="hidden sm:inline">Gift</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Info */}
        <div className="p-2 sm:p-4 lg:p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-bold text-charcoal-800 text-sm sm:text-base lg:text-lg line-clamp-2 leading-tight flex-1 mr-2 font-serif">
              {product.name}
            </h3>
            <span className="text-sm sm:text-lg lg:text-xl font-bold text-primary-700 whitespace-nowrap">
              ₹{product.price.toLocaleString()}
            </span>
          </div>

          {/* Seller Info */}
          <div className="flex items-center space-x-1 mb-2">
            <span className="text-xs sm:text-sm font-semibold text-charcoal-700">{product.sellerName}</span>
          </div>

          <p className="text-charcoal-600 text-xs sm:text-sm mb-3 line-clamp-2 leading-snug">
            {product.description}
          </p>

          {/* Product Specifications */}
          <div className="mb-3 space-y-2">
            {/* Section and Weight Row */}
            <div className="flex items-center justify-between text-xs">
              {product.section && (
                <div className="flex items-center space-x-1 text-charcoal-600">
                  <Package className="w-3 h-3" />
                  <span>{product.section}</span>
                </div>
              )}
              {product.weight && (
                <div className="flex items-center space-x-1 text-charcoal-600">
                  <Scale className="w-3 h-3" />
                  <span>{product.weight}g</span>
                </div>
              )}
            </div>

            {/* Stock Information */}
            {product.stock !== undefined && (
              <div className="text-xs text-charcoal-600">
                <span className="font-medium">Stock:</span> {product.stock} units available
              </div>
            )}

            {/* Customization Features */}
            {product.customisable && (
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-1 bg-secondary-100 text-secondary-800 text-xs px-2 py-1 rounded-full font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Customisable</span>
                </div>
                
                {product.customQuestions && product.customQuestions.length > 0 && (
                  <div className="text-xs text-charcoal-700 bg-cream-100 p-2 rounded-lg border border-cream-200">
                    <div className="font-medium text-charcoal-800 mb-1">Customization Options:</div>
                    <ul className="space-y-1">
                      {product.customQuestions.slice(0, 2).map((question, idx) => (
                        <li key={idx} className="flex items-start space-x-1">
                          <span className="text-secondary-600 mt-0.5">•</span>
                          <span className="text-charcoal-700">{question}</span>
                        </li>
                      ))}
                      {product.customQuestions.length > 2 && (
                        <li className="text-charcoal-500 italic">
                          +{product.customQuestions.length - 2} more options
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Delivery Time */}
          <div className="mb-3">
            <DeliveryTimeEstimate product={product} />
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex items-center space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 ${
                    i < 4 ? 'text-warm-500 fill-current' : 'text-charcoal-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-charcoal-700 font-semibold">(4.8)</span>
            <span className="text-xs text-charcoal-500 hidden sm:inline">• 24 reviews</span>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-1 sm:space-x-2 mt-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleQuickAdd}
              className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-soft border border-primary-700 flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
            >
              <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              <span>Add</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGiftAdd}
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-2 sm:px-4 py-2 sm:py-3 rounded-lg transition-all duration-300 shadow-soft border border-secondary-700 flex items-center justify-center"
            >
              <Gift className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}