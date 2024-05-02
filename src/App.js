import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품, 로그인, 상품상세 페이지
//    1-1. 네비게이션 바
// 2. 전체상품 페이지 : 전체 상품을 볼 수 있다.
// 3. 로그인 버튼 -> 로그인 페이지
//    상품디테일 -> 로그인 X ? -> 로그인 페이지
// 4. 로그인되어 있는 경우 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 클릭 -> 로그아웃 -> 상품디테일 X, 로그인 페이지가 보인다
// 6. 로그인시 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
