'use client'

import React, { useState } from 'react'
import { FileText, Download, Clock, Users, Flame, Download as DownloadIcon, Share2, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PrescriptionRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])

  const recipes = [
    {
      id: 1,
      title: 'Heart-Healthy Salmon Bowl',
      image: '🐟',
      category: 'Cardiology',
      doctor: 'Dr. Fatima Ali',
      servings: 2,
      time: '30 min',
      calories: 450,
      ingredients: [
        'Salmon fillet - 200g',
        'Quinoa - 1 cup cooked',
        'Broccoli - 1 cup',
        'Olive oil - 1 tbsp',
        'Lemon - 1',
        'Garlic - 2 cloves',
        'Salt & pepper to taste'
      ],
      instructions: [
        'Preheat oven to 180°C',
        'Season salmon with lemon, garlic, salt and pepper',
        'Bake for 15 minutes until cooked',
        'Cook quinoa according to package',
        'Steam broccoli for 5 minutes',
        'Assemble bowl with all components',
        'Drizzle with olive oil and serve'
      ],
      benefits: 'Rich in Omega-3, supports heart health, reduces inflammation'
    },
    {
      id: 2,
      title: 'Diabetic-Friendly Green Smoothie',
      image: '🥗',
      category: 'Endocrinology',
      doctor: 'Dr. Ahmed Hassan',
      servings: 1,
      time: '10 min',
      calories: 180,
      ingredients: [
        'Spinach - 1 cup',
        'Banana (small) - 1',
        'Almond milk - 1 cup',
        'Almond butter - 1 tbsp',
        'Chia seeds - 1 tsp',
        'Ginger - 1/2 tsp',
        'Ice - 1 cup'
      ],
      instructions: [
        'Add spinach to blender',
        'Add banana and almond milk',
        'Add almond butter and chia seeds',
        'Add ginger for flavor',
        'Blend until smooth',
        'Add ice and blend again',
        'Serve immediately'
      ],
      benefits: 'Low glycemic index, high fiber, nutrient-dense, great for blood sugar control'
    },
    {
      id: 3,
      title: 'Anti-Inflammatory Turmeric Rice',
      image: '🍚',
      category: 'Rheumatology',
      doctor: 'Dr. Sarah Miller',
      servings: 4,
      time: '25 min',
      calories: 320,
      ingredients: [
        'Brown rice - 1.5 cups',
        'Turmeric - 1 tsp',
        'Ginger - 1 tbsp fresh',
        'Coconut oil - 1 tbsp',
        'Garlic - 3 cloves',
        'Vegetable broth - 3 cups',
        'Black pepper - 1/4 tsp'
      ],
      instructions: [
        'Heat coconut oil in pot',
        'Sauté garlic and ginger',
        'Add brown rice and stir',
        'Add vegetable broth and turmeric',
        'Bring to boil then simmer',
        'Cook for 20 minutes covered',
        'Add black pepper and serve'
      ],
      benefits: 'Anti-inflammatory properties, supports joint health, aids digestion'
    },
    {
      id: 4,
      title: 'Lung-Supporting Vegetable Soup',
      image: '🥣',
      category: 'Pulmonology',
      doctor: 'Dr. Mohammed Samir',
      servings: 6,
      time: '45 min',
      calories: 120,
      ingredients: [
        'Carrots - 2 medium',
        'Celery - 2 stalks',
        'Onion - 1 large',
        'Garlic - 4 cloves',
        'Kale - 2 cups',
        'Vegetable broth - 6 cups',
        'Thyme - 1 tsp',
        'Salt & pepper - to taste'
      ],
      instructions: [
        'Chop all vegetables',
        'Heat broth in large pot',
        'Add onion, celery, and carrots',
        'Simmer for 15 minutes',
        'Add garlic and thyme',
        'Add kale and cook 10 minutes more',
        'Season with salt and pepper',
        'Serve hot'
      ],
      benefits: 'Rich in antioxidants, supports respiratory health, boosting immunity'
    }
  ]

  const selectedRecipeData = recipes.find(r => r.id === selectedRecipe)

  const toggleFavorite = (id: number) => {
    setFavorites(favorites.includes(id) ? favorites.filter(f => f !== id) : [...favorites, id])
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-blue-50 to-cyan-50 dark:from-background dark:via-slate-900 dark:to-slate-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Doctor-Prescribed Recipes
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Healthy recipes recommended by healthcare professionals for specific conditions
          </p>
        </motion.div>

        {!selectedRecipe ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {recipes.map((recipe, idx) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedRecipe(recipe.id)}
                className="group cursor-pointer bg-card border-2 border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-blue-400"
              >
                {/* Recipe Image */}
                <div className="h-48 bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform">
                  {recipe.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                        {recipe.title}
                      </h3>
                      <p className="text-sm text-muted">{recipe.category}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleFavorite(recipe.id)
                      }}
                      className={`text-2xl transition-transform ${favorites.includes(recipe.id) ? 'scale-125' : ''}`}
                    >
                      {favorites.includes(recipe.id) ? '❤️' : '🤍'}
                    </motion.button>
                  </div>

                  <p className="text-sm text-muted mb-4">By {recipe.doctor}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-border">
                    <div className="text-center">
                      <p className="text-xs text-muted">Servings</p>
                      <p className="font-bold text-foreground">{recipe.servings}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted">Time</p>
                      <p className="font-bold text-foreground">{recipe.time}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-muted">Calories</p>
                      <p className="font-bold text-green-600">{recipe.calories}</p>
                    </div>
                  </div>

                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-4">{recipe.benefits}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.button
              onClick={() => setSelectedRecipe(null)}
              className="mb-8 px-4 py-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              ← Back to Recipes
            </motion.button>

            <div className="bg-card border-2 border-border rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="h-64 bg-linear-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center text-9xl">
                {selectedRecipeData?.image}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">{selectedRecipeData?.title}</h1>
                    <p className="text-muted text-lg">Recommended by {selectedRecipeData?.doctor}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    onClick={() => selectedRecipeData && toggleFavorite(selectedRecipeData.id)}
                    className="text-5xl"
                  >
                    {selectedRecipeData && favorites.includes(selectedRecipeData.id) ? '❤️' : '🤍'}
                  </motion.button>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-4 gap-4 py-6 border-b border-border mb-6">
                  {[
                    { icon: Users, label: 'Servings', value: selectedRecipeData?.servings },
                    { icon: Clock, label: 'Time', value: selectedRecipeData?.time },
                    { icon: Flame, label: 'Calories', value: selectedRecipeData?.calories },
                    { icon: FileText, label: 'Category', value: selectedRecipeData?.category }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <item.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-xs text-muted">{item.label}</p>
                      <p className="font-bold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Ingredients */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">📋 Ingredients</h2>
                  <div className="space-y-2">
                    {selectedRecipeData?.ingredients.map((ingredient, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="text-foreground">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instructions */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">👨‍🍳 Instructions</h2>
                  <div className="space-y-3">
                    {selectedRecipeData?.instructions.map((instruction, idx) => (
                      <div key={idx} className="flex gap-4 p-4 bg-background rounded-lg">
                        <div className="shrink-0 w-8 h-8 bg-gradient-medical text-white rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-foreground pt-1">{instruction}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-foreground mb-2">💪 Health Benefits</h3>
                  <p className="text-foreground">{selectedRecipeData?.benefits}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-6 py-3 bg-gradient-medical text-white rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <DownloadIcon className="w-5 h-5" />
                    Download Recipe
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Share
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
