import './about.css'
import Posts from '../../comp/posts/Posts';
import Sidebar from '../../comp/sidebar/Sidebar';

export default function About(){
    return(
        <>
        <div className='about container'>
            <div className='noticebox'>
            <h2>κ³΅μ§μ¬ν­</h2>
                <ul className='notice'>
                    <li className='firstnotice'><a href="#" >π μ κ·νμ νλμ¬ν­ π</a></li>
                    <li><a href="#">2022λ 04μ 11μΌ κ³΅μ§μν­μλλ€.</a></li>
                    <li><a href="#">μ§μ κ°κ³ μΆμ λλ μ΄λ»κ² ν΄μΌ νλμ?</a></li>
                    <li><a href="#">μλ κ·Έλ₯ κ°κ³ μΆλ€κ³ ...</a></li>
                </ul>
            </div>
            <div className='popualrbox'>
                <h2>μΈκΈ°κΈ</h2>
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