import './header.css';

export default function Header() {
  return (
    <div className="header">
         <div className="headerTitles">
             <span className="headerTitleSm">Travel & Challenge</span>
             <span className="headerTitleLg">Blog</span>
         </div>
         <img className="headerImg" 
              src="images/ha.jpg" alt="banner" />
    </div>
  )
}
