import { atom } from 'recoil';
import { Product } from '@/type/product';

export const insuranceProductState = atom<Product>({
  key: 'insuranceProductState',
  default: {
    // 초기값 설정
    productName: '',
    coverResponseList: [],
    productPrice: 0,
    productDate: '',
    productExp: 0,
    age: '',
    productType: 'LIFE',
    productEtc: '',
    renewYn: false,
    aiText: '',
  },
});
