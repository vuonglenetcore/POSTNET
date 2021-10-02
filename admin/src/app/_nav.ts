import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    title: true,
    name: 'QUẢN LÝ'
  },
  {
    name: 'Danh mục bài viết',
    url: '/danh-muc-bai-viet',
    icon: 'icon-cursor'
  },
  {
    name: 'Bài viết',
    url: '/bai-viet',
    icon: 'icon-cursor'
  }
  ,{
    name: 'Hiển thị danh mục',
    url: '/hien-thi-danh-muc',
    icon: 'icon-cursor'
  }
  ,{
    name: 'Hiển thị bài viết',
    url: '/hien-thi-bai-viet',
    icon: 'icon-cursor'
  },
  {
    name: 'Test chức năng',
    url: '/test-chuc-nang',
    icon: 'icon-cursor'
  },
  {
    name: 'Thống kê',
    url: '/charts',
    icon: 'icon-pie-chart'
  }
];
