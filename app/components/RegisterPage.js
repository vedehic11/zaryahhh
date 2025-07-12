'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  MapPin, 
  Building, 
  FileText, 
  Phone,
  Sparkles,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Camera,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Upload,
  X,
  File
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import Link from 'next/link'

export const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer',
    city: 'Mumbai',
    businessName: '',
    description: '',
    mobile: '',
    verificationDoc: '',
    // New verification fields
    idNumber: '',
    idType: 'aadhar',
    instagramHandle: '',
    facebookHandle: '',
    twitterHandle: '',
    linkedinHandle: '',
    alternateMobile: '',
    businessAddress: '',
    gstNumber: '',
    panNumber: '',
    bankAccountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    // Terms and conditions
    acceptTerms: false,
    acceptPrivacyPolicy: false,
    acceptSellerAgreement: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [uploadedFiles, setUploadedFiles] = useState({
    idDocument: null,
    businessDocuments: []
  })
  const [isDragOver, setIsDragOver] = useState(false)
  const { register, isLoading } = useAuth()
  const router = useRouter()

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad']
  const idTypes = [
    { value: 'aadhar', label: 'Aadhar Card' },
    { value: 'pan', label: 'PAN Card' },
    { value: 'driving_license', label: 'Driving License' },
    { value: 'passport', label: 'Passport' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateCurrentStep = () => {
    const newErrors = {}

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required'
      }
      if (!formData.email) {
        newErrors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email'
      }
      if (!formData.password) {
        newErrors.password = 'Password is required'
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters'
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
      if (!formData.acceptTerms) {
        newErrors.acceptTerms = 'You must accept the Terms and Conditions'
      }
      if (!formData.acceptPrivacyPolicy) {
        newErrors.acceptPrivacyPolicy = 'You must accept the Privacy Policy'
      }
      if (formData.role === 'seller' && !formData.acceptSellerAgreement) {
        newErrors.acceptSellerAgreement = 'You must accept the Seller Agreement'
      }
    }

    if (currentStep === 2 && formData.role === 'seller') {
      if (!formData.businessName.trim()) {
        newErrors.businessName = 'Business name is required for sellers'
      }
      if (!formData.mobile.trim()) {
        newErrors.mobile = 'Mobile number is required for sellers'
      } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
        newErrors.mobile = 'Please enter a valid 10-digit mobile number'
      }
      if (!formData.description.trim()) {
        newErrors.description = 'Business description is required for sellers'
      }
      if (!formData.businessAddress.trim()) {
        newErrors.businessAddress = 'Business address is required'
      }
    }

    if (currentStep === 3 && formData.role === 'seller') {
      if (!formData.idNumber.trim()) {
        newErrors.idNumber = 'ID number is required for verification'
      }
      if (!uploadedFiles.idDocument) {
        newErrors.idDocument = 'ID document upload is required'
      }
      if (!formData.alternateMobile.trim()) {
        newErrors.alternateMobile = 'Alternate mobile number is required'
      } else if (!/^[0-9]{10}$/.test(formData.alternateMobile)) {
        newErrors.alternateMobile = 'Please enter a valid 10-digit mobile number'
      }
      if (!formData.instagramHandle.trim() && !formData.facebookHandle.trim() && !formData.twitterHandle.trim()) {
        newErrors.socialMedia = 'At least one social media handle is required for verification'
      }
      if (!formData.bankAccountNumber.trim()) {
        newErrors.bankAccountNumber = 'Bank account number is required for payments'
      }
      if (!formData.ifscCode.trim()) {
        newErrors.ifscCode = 'IFSC code is required'
      }
      if (!formData.accountHolderName.trim()) {
        newErrors.accountHolderName = 'Account holder name is required'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateCurrentStep()) {
      if (formData.role === 'buyer' || currentStep === 3) {
        handleSubmit()
      } else {
        setCurrentStep(prev => prev + 1)
      }
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()
    
    if (!validateCurrentStep()) return

    const success = await register(
      formData.email,
      formData.password,
      formData.name,
      formData.role,
      formData.city,
      formData.businessName,
      formData.description,
      formData.mobile,
      formData.verificationDoc,
      // Additional verification data
      {
        idNumber: formData.idNumber,
        idType: formData.idType,
        instagramHandle: formData.instagramHandle,
        facebookHandle: formData.facebookHandle,
        twitterHandle: formData.twitterHandle,
        linkedinHandle: formData.linkedinHandle,
        alternateMobile: formData.alternateMobile,
        businessAddress: formData.businessAddress,
        gstNumber: formData.gstNumber,
        panNumber: formData.panNumber,
        bankAccountNumber: formData.bankAccountNumber,
        ifscCode: formData.ifscCode,
        accountHolderName: formData.accountHolderName,
        uploadedFiles: uploadedFiles
      }
    )
    
    if (success) {
      router.push('/')
    }
  }

  // File upload handlers
  const handleFileUpload = useCallback((file, type) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (!allowedTypes.includes(file.type)) {
      setErrors(prev => ({
        ...prev,
        [type]: 'Please upload a valid file (JPEG, PNG, or PDF)'
      }))
      return
    }

    if (file.size > maxSize) {
      setErrors(prev => ({
        ...prev,
        [type]: 'File size should be less than 5MB'
      }))
      return
    }

    if (type === 'idDocument') {
      setUploadedFiles(prev => ({
        ...prev,
        idDocument: file
      }))
    } else if (type === 'businessDocuments') {
      setUploadedFiles(prev => ({
        ...prev,
        businessDocuments: [...prev.businessDocuments, file]
      }))
    }

    // Clear error
    if (errors[type]) {
      setErrors(prev => ({
        ...prev,
        [type]: ''
      }))
    }
  }, [errors])

  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e, type) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileUpload(files[0], type)
    }
  }, [handleFileUpload])

  const handleFileInput = useCallback((e, type) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      handleFileUpload(files[0], type)
    }
  }, [handleFileUpload])

  const removeFile = useCallback((type, index = null) => {
    if (type === 'idDocument') {
      setUploadedFiles(prev => ({
        ...prev,
        idDocument: null
      }))
    } else if (type === 'businessDocuments' && index !== null) {
      setUploadedFiles(prev => ({
        ...prev,
        businessDocuments: prev.businessDocuments.filter((_, i) => i !== index)
      }))
    }
  }, [])

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const getFileIcon = (fileType) => {
    if (fileType.startsWith('image/')) {
      return <Camera className="w-5 h-5 text-primary-600" />
    }
    return <File className="w-5 h-5 text-secondary-600" />
  }

  const renderStepIndicator = () => {
    if (formData.role === 'buyer') return null

    const steps = [
      { number: 1, title: 'Basic Info', icon: User },
      { number: 2, title: 'Business Info', icon: Building },
      { number: 3, title: 'Verification', icon: CheckCircle }
    ]

    return (
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.number
            const isCompleted = currentStep > step.number
            
            return (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  isActive 
                    ? 'bg-primary-600 border-primary-600 text-white' 
                    : isCompleted 
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  isActive ? 'text-primary-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderStep1 = () => (
    <div className="space-y-6">
      {/* Role Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          I want to join as:
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className="relative">
            <input
              type="radio"
              name="role"
              value="buyer"
              checked={formData.role === 'buyer'}
              onChange={handleInputChange}
              className="sr-only"
            />
            <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
              formData.role === 'buyer'
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="text-center">
                <User className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                <h3 className="font-semibold">Buyer</h3>
                <p className="text-sm text-gray-600">Discover and purchase unique gifts</p>
              </div>
            </div>
          </label>
          <label className="relative">
            <input
              type="radio"
              name="role"
              value="seller"
              checked={formData.role === 'seller'}
              onChange={handleInputChange}
              className="sr-only"
            />
            <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
              formData.role === 'seller'
                ? 'border-primary-500 bg-primary-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="text-center">
                <Building className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                <h3 className="font-semibold">Seller</h3>
                <p className="text-sm text-gray-600">Share your creations with the world</p>
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your email"
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Password Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              className={`block w-full pl-10 pr-10 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.password ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Create a password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className={`block w-full pl-10 pr-10 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Confirm your password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="space-y-4 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-900">Terms and Agreements</h3>
        
        <div className="space-y-3">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                acceptTerms: e.target.checked
              }))}
              className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <div className="flex-1">
              <span className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  Terms and Conditions
                </a>
                {' '}of Zaryah *
              </span>
              {errors.acceptTerms && (
                <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>
              )}
            </div>
          </label>

          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              type="checkbox"
              name="acceptPrivacyPolicy"
              checked={formData.acceptPrivacyPolicy}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                acceptPrivacyPolicy: e.target.checked
              }))}
              className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <div className="flex-1">
              <span className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium underline">
                  Privacy Policy
                </a>
                {' '}and consent to the processing of my personal data *
              </span>
              {errors.acceptPrivacyPolicy && (
                <p className="mt-1 text-sm text-red-600">{errors.acceptPrivacyPolicy}</p>
              )}
            </div>
          </label>

          {formData.role === 'seller' && (
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="acceptSellerAgreement"
                checked={formData.acceptSellerAgreement}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  acceptSellerAgreement: e.target.checked
                }))}
                className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <div className="flex-1">
                <span className="text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium underline">
                    Seller Agreement
                  </a>
                  {' '}and understand my responsibilities as a seller *
                </span>
                {errors.acceptSellerAgreement && (
                  <p className="mt-1 text-sm text-red-600">{errors.acceptSellerAgreement}</p>
                )}
              </div>
            </label>
          )}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-600">
            By creating an account, you acknowledge that you have read, understood, and agree to be bound by our terms and policies. 
            {formData.role === 'seller' && ' As a seller, you also agree to maintain accurate product information, handle customer inquiries promptly, and comply with all applicable laws and regulations.'}
          </p>
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-2">
          <Building className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-primary-700">Business Information</h3>
        </div>
        <p className="text-sm text-primary-600 mt-1">Please provide details about your business to help us verify your seller account.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
            Business Name *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="businessName"
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleInputChange}
              className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.businessName ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Your business name"
            />
          </div>
          {errors.businessName && (
            <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
          )}
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
            Primary Mobile Number *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.mobile ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="10-digit mobile number"
            />
          </div>
          {errors.mobile && (
            <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-2">
          Business Address *
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="businessAddress"
            name="businessAddress"
            rows={3}
            value={formData.businessAddress}
            onChange={handleInputChange}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
              errors.businessAddress ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Complete business address including street, city, state, and PIN code"
          />
        </div>
        {errors.businessAddress && (
          <p className="mt-1 text-sm text-red-600">{errors.businessAddress}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Business Description *
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 pointer-events-none">
            <FileText className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleInputChange}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none ${
              errors.description ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Tell us about your business, the products you create, your experience, and what makes your creations unique..."
          />
        </div>
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700 mb-2">
            GST Number (Optional)
          </label>
          <input
            id="gstNumber"
            name="gstNumber"
            type="text"
            value={formData.gstNumber}
            onChange={handleInputChange}
            className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="22AAAAA0000A1Z5"
          />
        </div>

        <div>
          <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700 mb-2">
            PAN Number (Optional)
          </label>
          <input
            id="panNumber"
            name="panNumber"
            type="text"
            value={formData.panNumber}
            onChange={handleInputChange}
            className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="ABCDE1234F"
          />
        </div>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
        <div className="flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-amber-600" />
          <h3 className="text-lg font-semibold text-amber-700">Verification Required</h3>
        </div>
        <p className="text-sm text-amber-600 mt-1">This information helps us verify your identity and ensure a secure marketplace for all users.</p>
      </div>

      {/* ID Verification */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="idType" className="block text-sm font-medium text-gray-700 mb-2">
            ID Type *
          </label>
          <select
            id="idType"
            name="idType"
            value={formData.idType}
            onChange={handleInputChange}
            className="block w-full px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          >
            {idTypes.map(type => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-2">
            ID Number *
          </label>
          <input
            id="idNumber"
            name="idNumber"
            type="text"
            value={formData.idNumber}
            onChange={handleInputChange}
            className={`block w-full px-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
              errors.idNumber ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your ID number"
          />
          {errors.idNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.idNumber}</p>
          )}
        </div>
      </div>

      {/* ID Document Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Upload ID Document *
        </label>
        <div
          className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
            isDragOver 
              ? 'border-primary-500 bg-primary-50' 
              : errors.idDocument 
              ? 'border-red-300 bg-red-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'idDocument')}
        >
          {uploadedFiles.idDocument ? (
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2 text-primary-600">
                {getFileIcon(uploadedFiles.idDocument.type)}
                <span className="font-medium">{uploadedFiles.idDocument.name}</span>
              </div>
              <p className="text-sm text-gray-600">
                Size: {formatFileSize(uploadedFiles.idDocument.size)}
              </p>
              <button
                type="button"
                onClick={() => removeFile('idDocument')}
                className="inline-flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm"
              >
                <X className="w-4 h-4" />
                <span>Remove</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <Upload className="w-12 h-12 mx-auto text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Drag and drop your ID document here, or{' '}
                  <label className="text-primary-600 hover:text-primary-700 cursor-pointer">
                    browse
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileInput(e, 'idDocument')}
                    />
                  </label>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Supported formats: JPEG, PNG, PDF (Max 5MB)
                </p>
              </div>
            </div>
          )}
        </div>
        {errors.idDocument && (
          <p className="mt-1 text-sm text-red-600">{errors.idDocument}</p>
        )}
      </div>

      {/* Business Documents Upload (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Business Documents (Optional)
        </label>
        <div
          className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
            isDragOver 
              ? 'border-secondary-500 bg-secondary-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'businessDocuments')}
        >
          <Upload className="w-12 h-12 mx-auto text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-700">
              Drag and drop business documents here, or{' '}
              <label className="text-secondary-600 hover:text-secondary-700 cursor-pointer">
                browse
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files)
                    files.forEach(file => handleFileUpload(file, 'businessDocuments'))
                  }}
                />
              </label>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              GST certificate, business license, etc. (Max 5MB each)
            </p>
          </div>
        </div>

        {/* Display uploaded business documents */}
        {uploadedFiles.businessDocuments.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-gray-700">Uploaded Documents:</p>
            {uploadedFiles.businessDocuments.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  {getFileIcon(file.type)}
                  <div>
                    <p className="text-sm font-medium text-gray-700">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile('businessDocuments', index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Social Media Handles */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Social Media Handles (At least one required) *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="instagramHandle" className="block text-sm font-medium text-gray-600 mb-2">
              Instagram Handle
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Instagram className="h-5 w-5 text-pink-500" />
              </div>
              <input
                id="instagramHandle"
                name="instagramHandle"
                type="text"
                value={formData.instagramHandle}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="@your_handle"
              />
            </div>
          </div>

          <div>
            <label htmlFor="facebookHandle" className="block text-sm font-medium text-gray-600 mb-2">
              Facebook Page/Profile
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Facebook className="h-5 w-5 text-blue-600" />
              </div>
              <input
                id="facebookHandle"
                name="facebookHandle"
                type="text"
                value={formData.facebookHandle}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Your Facebook page URL"
              />
            </div>
          </div>

          <div>
            <label htmlFor="twitterHandle" className="block text-sm font-medium text-gray-600 mb-2">
              Twitter Handle
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Twitter className="h-5 w-5 text-blue-400" />
              </div>
              <input
                id="twitterHandle"
                name="twitterHandle"
                type="text"
                value={formData.twitterHandle}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="@your_handle"
              />
            </div>
          </div>

          <div>
            <label htmlFor="linkedinHandle" className="block text-sm font-medium text-gray-600 mb-2">
              LinkedIn Profile
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Linkedin className="h-5 w-5 text-blue-700" />
              </div>
              <input
                id="linkedinHandle"
                name="linkedinHandle"
                type="text"
                value={formData.linkedinHandle}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                placeholder="Your LinkedIn profile URL"
              />
            </div>
          </div>
        </div>
        {errors.socialMedia && (
          <p className="mt-1 text-sm text-red-600">{errors.socialMedia}</p>
        )}
      </div>

      {/* Additional Contact */}
      <div>
        <label htmlFor="alternateMobile" className="block text-sm font-medium text-gray-700 mb-2">
          Alternate Mobile Number *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="alternateMobile"
            name="alternateMobile"
            type="tel"
            value={formData.alternateMobile}
            onChange={handleInputChange}
            className={`block w-full pl-10 pr-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
              errors.alternateMobile ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="10-digit alternate mobile number"
          />
        </div>
        {errors.alternateMobile && (
          <p className="mt-1 text-sm text-red-600">{errors.alternateMobile}</p>
        )}
      </div>

      {/* Bank Details */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
        <h4 className="text-md font-semibold text-gray-700 mb-4">Bank Account Details (for payments) *</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700 mb-2">
              Account Holder Name *
            </label>
            <input
              id="accountHolderName"
              name="accountHolderName"
              type="text"
              value={formData.accountHolderName}
              onChange={handleInputChange}
              className={`block w-full px-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.accountHolderName ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Name as per bank records"
            />
            {errors.accountHolderName && (
              <p className="mt-1 text-sm text-red-600">{errors.accountHolderName}</p>
            )}
          </div>

          <div>
            <label htmlFor="bankAccountNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Account Number *
            </label>
            <input
              id="bankAccountNumber"
              name="bankAccountNumber"
              type="text"
              value={formData.bankAccountNumber}
              onChange={handleInputChange}
              className={`block w-full px-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.bankAccountNumber ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Bank account number"
            />
            {errors.bankAccountNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.bankAccountNumber}</p>
            )}
          </div>

          <div>
            <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700 mb-2">
              IFSC Code *
            </label>
            <input
              id="ifscCode"
              name="ifscCode"
              type="text"
              value={formData.ifscCode}
              onChange={handleInputChange}
              className={`block w-full px-3 py-3 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
                errors.ifscCode ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="e.g., SBIN0001234"
            />
            {errors.ifscCode && (
              <p className="mt-1 text-sm text-red-600">{errors.ifscCode}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-primary-600 p-3 rounded-xl">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-bold text-primary-700 font-serif">Zaryah</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
          <p className="mt-2 text-gray-600">Create your account and start your journey with meaningful gifts</p>
        </div>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
          onSubmit={handleSubmit}
        >
          {/* Render current step */}
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            {currentStep > 1 && formData.role === 'seller' ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={prevStep}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </motion.button>
            ) : (
              <div></div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={nextStep}
              disabled={isLoading}
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {formData.role === 'buyer' || currentStep === 3 ? 'Create Account' : 'Next Step'}
              </span>
              {formData.role === 'seller' && currentStep < 3 && (
                <ArrowRight className="w-4 h-4" />
              )}
            </motion.button>
          </div>

          {/* Links */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign in here
              </Link>
            </p>
          </div>
        </motion.form>
      </motion.div>
    </div>
  )
}