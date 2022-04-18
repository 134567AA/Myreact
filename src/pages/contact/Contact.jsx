import './contact.css'
import {Link} from 'react-router-dom'


export default function Contact(){
    return(
     <>
        <div className='contact container'>
            <ul className="joinhello">
                <h3>CONTACT</h3>
                <ul className='helloTitle'>
              <li className="hellot">글 제목</li>
              <li className="hellot">작성자</li>
              <li className="hellot">게시일</li>
            </ul>
            <ul className="helloList">              
                        <li className='hello'>
                            <a href="#">안녕하세요!</a>
                            <span>나능야</span>
                            <span>2019.02.05</span>
                            </li>
                            <li className='hello'>
                            <a href="#">안녕하세요!</a>
                            <span>폭군</span>
                            <span>2019.02.05</span>
                            </li>
                            <li className='hello'>
                            <a href="#">안녕하세요!</a>
                            <span>티라노사우르스</span>
                            <span>2019.02.05</span>
                            </li> <li className='hello'>
                            <a href="#">안녕하세요!</a>
                            <span>몸길이 15m</span>
                            <span>2019.02.05</span>
                            </li> <li className='hello'>
                            <a href="#">안녕하세요!</a>
                            <span>키는 5m</span>
                            <span>2019.02.05</span>
                            </li>   
                      </ul>   
        </ul>
        {/* 페이지넘버 */}
        <div className='container pagenum'>
            <a href="#" className='number'><i class="fa-solid fa-angles-left"></i></a>
            <a href="#" className='numbers'>1</a>
            <a href="#" className='numbers'>2</a>
            <a href="#" className='numbers'>3</a>
            <a href="#" className='numbers'>4</a>
            <a href="#" className='numbers'>5</a>
            <a href="#" className='numbers'>6</a>
            <a href="#" className='numbers'>7</a>
            <a href="#" className='number'><i class="fa-solid fa-angles-right"></i></a>
        </div>

        </div>
        </>
)
}