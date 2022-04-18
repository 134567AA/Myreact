import './login.css';

import {Link} from 'react-router-dom'

export default function Login(){
    return(
        <>
      <div className='settings container'>
            <div>
                <form action="setting">
                    <h1> 로그인</h1>
                    <div>
                    <label htmlFor="id" className='loginId'>아이디</label>
                    <input type="id" placeholder="아이디를 입력하세요" />   
                    </div>
                    <div>
                    <label htmlFor="password" className='loginPw'>비밀번호</label>
                    <input type="password" placeholder='비밀번호를 입력하세요' />   
                    </div>
                    <div className='login-btn'>
                   
                   <button className='myButton loginBtn'>아이디 찾기</button>
                   <button className='myButton loginBtn'>비밀번호 찾기</button>
                  <Link to="/">
                  <button className='mybutton loginBtn'>로그인</button></Link>
                    </div>

                </form>
            </div>
        </div>
    </>
    )
   
}
