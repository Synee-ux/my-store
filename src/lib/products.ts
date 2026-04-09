// 产品类型定义
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  materials?: string;
  size?: string;
  inStock: boolean;
  stockCount?: number;
}

// 示例产品数据
export const products: Product[] = [
  {
    id: '1',
    name: '天然翡翠平安扣',
    description: '精选缅甸天然翡翠，雕刻平安扣造型，寓意平安吉祥。玉质细腻通透，色泽温润，是传统与时尚结合的经典配饰。',
    price: 1299,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1615655114865-4cc1bda71d97?w=800',
      'https://images.unsplash.com/photo-1615655406736-b37c4fabf923?w=800',
    ],
    category: '翡翠',
    materials: '天然翡翠',
    size: '直径30mm',
    inStock: true,
    stockCount: 5,
  },
  {
    id: '2',
    name: '和田玉手镯',
    description: '新疆和田籽料白玉手镯，质地细腻油润，色泽均匀。手工打磨抛光，佩戴舒适，彰显优雅气质。',
    price: 3880,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1602751584552-8ba43d99d4a4?w=800',
    ],
    category: '和田玉',
    materials: '和田白玉',
    size: '内径56mm',
    inStock: true,
    stockCount: 3,
  },
  {
    id: '3',
    name: '925纯银月光石戒指',
    description: '奥地利进口月光石，泛蓝光晕彩效应。纯银戒托，简约设计，适合日常佩戴或搭配礼服。',
    price: 459,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800',
    ],
    category: '银饰',
    materials: '925纯银+月光石',
    size: '活口可调',
    inStock: true,
    stockCount: 12,
  },
  {
    id: '4',
    name: '天然紫水晶项链',
    description: '巴西紫水晶，晶体通透，颜色浓郁。镀金链条配饰，优雅大方，适合送礼或自戴。',
    price: 688,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800',
    ],
    category: '水晶',
    materials: '天然紫水晶',
    size: '链长40cm',
    inStock: true,
    stockCount: 8,
  },
  {
    id: '5',
    name: '手工刺绣香囊',
    description: '纯手工苏绣香囊，选用优质丝绸面料，内含天然草本香料。可佩戴于衣襟或置于衣柜、车内。',
    price: 168,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800',
    ],
    category: '手工',
    materials: '丝绸+棉线',
    size: '8x12cm',
    inStock: true,
    stockCount: 20,
  },
  {
    id: '6',
    name: '蜜蜡水滴吊坠',
    description: '波罗的海天然蜜蜡，呈现温润的蜜黄色。手工编织绳链，佩戴舒适，长期佩戴可滋养皮肤。',
    price: 899,
    currency: 'CNY',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800',
    ],
    category: '蜜蜡',
    materials: '天然蜜蜡',
    size: '约25mm',
    inStock: true,
    stockCount: 6,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
