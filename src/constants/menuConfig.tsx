

export type MenuItem = {
  id: number;
  title: string;
  count?: number;
  iconColor: string;
  routeName?: string;
};



export const MAIN_MENU_ITEMS: MenuItem[] = [
  { id: 1, title: 'Каталог', iconColor: '#28677c', routeName: 'Home' },
  { id: 2, title: 'Кошик', count: 0, iconColor: '#28677c', routeName: 'Cart' },
  { id: 3, title: 'Акції', iconColor: '#28677c', routeName: 'Promotions' },
  { id: 4, title: 'Бажання', iconColor: '#28677c', routeName: 'Favorites' },
  { id: 5, title: 'Порівняння', iconColor: '#28677c', routeName: 'Compare' },
];

export const SECONDARY_MENU_ITEMS: MenuItem[] = [
  { id: 6, title: 'Магазини', iconColor: '#607D8B' },
  { id: 7, title: 'Уцінені товари', iconColor: '#607D8B' },
];