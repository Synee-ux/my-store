'use client';

import Image from 'next/image';
import { useCartStore } from '@/lib/cart';
import Header from '@/components/Header';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react';
import { useState, useEffect, use } from 'react';
import { getProduct } from '@/lib/products';

export default function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params);
  const product = getProduct(params.id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!product) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 mb-6">
            <ArrowLeft className="w-4 h-4" />
            返回商城
          </Link>
          <p>商品不存在</p>
        </div>
      </>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!mounted) {
    return (
      <>
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">加载中...</div>
      </>
    );
  }

  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          返回商城
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <p className="text-amber-600 font-medium mb-2">{product.category}</p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <div className="text-3xl font-bold text-amber-600 mb-6">¥{product.price}</div>

            {/* Details */}
            <div className="space-y-3 mb-8">
              {product.materials && (
                <div className="flex">
                  <span className="text-gray-500 w-20">材质</span>
                  <span className="text-gray-800">{product.materials}</span>
                </div>
              )}
              {product.size && (
                <div className="flex">
                  <span className="text-gray-500 w-20">尺寸</span>
                  <span className="text-gray-800">{product.size}</span>
                </div>
              )}
              <div className="flex">
                <span className="text-gray-500 w-20">库存</span>
                <span className={product.inStock ? 'text-green-600' : 'text-red-500'}>
                  {product.inStock ? `有货 (${product.stockCount || 0}件)` : '已售罄'}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="font-semibold text-gray-800 mb-2">商品描述</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>天然正品</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>顺丰包邮</span>
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                <span>7天无理由退换</span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-3 min-w-[60px] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-colors ${
                  added 
                    ? 'bg-green-500 text-white' 
                    : 'bg-amber-600 text-white hover:bg-amber-700 disabled:bg-gray-300'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {added ? '已加入购物车' : '加入购物车'}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <p>© 2026 玉石坊 All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
