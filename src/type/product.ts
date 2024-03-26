export type coverResponseList = {
  coverName: string;
  diseaseName: string;
  coverPrice: string;
};

export type Product = {
  productName: string;
  coverResponseList: coverResponseList[];
  productType: 'LIFE' | 'DISEASE';
  productPrice: number;
  productDate: string;
  productExp: number;
  age: string;
  productEtc: string;
  renewYn: boolean;
  aiText: string;
};
