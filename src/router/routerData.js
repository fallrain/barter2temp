import Nav from '@/views/Nav';
import Test from '@/views/home/Test';


const data = [
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      title: '测试'
    }
  }
];
if (process.env.NODE_ENV !== 'production') {
  data.unshift({
    path: '/nav',
    name: 'Nav',
    component: Nav,
    meta: {
      title: '导航'
    }
  });
}
export default { data };
