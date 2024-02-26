import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';


//1. 전체상품페이지, 로그인, 상품상세페이지
//1-1. 네비게이션 바 만들기
//2. 전체상품페이지: 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안되있을경우에는 로그인페이지로 먼저 나온다.
//5. 로그인이 되어있을경우에는 상품디테일페이지를 볼 수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃이 된다. => 상품디테일페이지를 볼 수 없다. => 다시 로그인 페이지가 보인다.
//7. 로그인하면 로그아웃UI가 보이고, 로그아웃하면 로그인UI가 보인다.
//8. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(()=>{
    console.log('authenticate: ', authenticate);
  },[authenticate])

  return (
    <div>
      <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll/>}></Route>
        <Route path='login' element={<Login setAuthenticate={setAuthenticate}/>}></Route>
        <Route path='product/:id' element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
