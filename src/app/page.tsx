'use client';

import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function Home() {
  const categories = ['全部', '翡翠', '和田玉', '银饰', '水晶', '手工', '蜜蜡'];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-stone-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            天然玉石 · 手工珠宝
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            精选天然翡翠、和田玉、水晶蜜蜡，手工打造每一件艺术品
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm">✅ 天然正品</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm">📦 顺丰包邮</span>
            <span className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm">🔒 7天无理由</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === '全部'
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p>暂无商品</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">关于我们</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">品牌故事</a></li>
                <li><a href="#" className="hover:text-white">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">客户服务</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">配送说明</a></li>
                <li><a href="#" className="hover:text-white">退换货政策</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">支付方式</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">微信支付</a></li>
                <li><a href="#" className="hover:text-white">支付宝</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">关注我们</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">微信公众号</a></li>
                <li><a href="#" className="hover:text-white">小红书</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© 2026 玉石坊 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
