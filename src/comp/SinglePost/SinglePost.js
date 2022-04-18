import './singlePost.css'
import {Link} from 'react-router-dom'
export default function SinglePost(){
    return(
    <div className='single'>
        <div className='singlePostWrapper'>
            <img src = "images/dd.jpg" alt='post01' className='singlePostImg' />
            <h1 className='singlePost'>
                스위스 여행은 이렇게 하는거다.
                <div className='singlePostEdit'>
               <Link to="/write"><i className="singlePostIcon fa-solid fa-pen"></i></Link> 
                <Link to="/settings"><i className="singlePostIcon fa-solid fa-trash-can"></i></Link>
                </div>
            </h1>
            <div className='singlePostInfo'>
                <span className='singlePostDate'>1 hours age</span>
            
            <p>사랑의 가슴에 눈에 있다. 대고, 별과 이상은 무엇을 아니다. 수 용감하고 얼음이 커다란 방황하였으며, 굳세게 같으며, 것이다. 사랑의 위하여 것은 관현악이며, 때문이다. </p>
            <p>사랑의 가슴에 눈에 있다. 대고, 별과 이상은 무엇을 아니다. 수 용감하고 얼음이 커다란 방황하였으며, 굳세게 같으며, 것이다. 사랑의 위하여 것은 관현악이며, 때문이다. </p>
            <p>사랑의 가슴에 눈에 있다. 대고, 별과 이상은 무엇을 아니다. 수 용감하고 얼음이 커다란 방황하였으며, 굳세게 같으며, 것이다. 사랑의 위하여 것은 관현악이며, 때문이다.  <p>사랑의 가슴에 눈에 있다. 대고, 별과 이상은 무엇을 아니다. 수 용감하고 얼음이 커다란 방황하였으며, 굳세게 같으며, 것이다. 사랑의 위하여 것은 관현악이며, 때문이다. </p> </p>
            <p>사랑의 가슴에 눈에 있다. 대고, 별과 이상은 무엇을 아니다. 수 용감하고 얼음이 커다란 방황하였으며, 굳세게 같으며, 것이다. 사랑의 위하여 것은 관현악이며, 때문이다. </p>
</div>
        </div>
    </div>       
    )
}