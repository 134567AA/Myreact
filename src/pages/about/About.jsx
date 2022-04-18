import './about.css'
import Posts from '../../comp/posts/Posts';
import Sidebar from '../../comp/sidebar/Sidebar';

export default function About(){
    return(
        <>
        <div className='about container'>
            <div className='noticebox'>
            <h2>공지사항</h2>
                <ul className='notice'>
                    <li className='firstnotice'><a href="#" >📌 신규회원 필독사항 📌</a></li>
                    <li><a href="#">2022년 04월 11일 공지시항입니다.</a></li>
                    <li><a href="#">집에 가고싶을 때는 어떻게 해야 하나요?</a></li>
                    <li><a href="#">아니 그냥 가고싶다고...</a></li>
                </ul>
            </div>
            <div className='popualrbox'>
                <h2>인기글</h2>
                <div className='popular'>
                <Posts />
                <Posts />
                <Posts />
                </div>
            </div>
            <Sidebar />

        </div>
        
        </>
    )
}