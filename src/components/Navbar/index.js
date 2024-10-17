import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Navbar = () =>{
    const [showMenu, setMenu] = useState(true);
    const onClickMenu = () => {
        setMenu(prevState => !prevState)
    }
    console.log(showMenu)
    return (
        <nav class="nav-cont">
            <div className="md-logo">
                <h1 className='header-logo'>A I . G E N</h1>
            </div>
            <div class="lg-items">
                <h1 className='header-logo'>A I . G E N</h1>
                <hr class="br-line"/>
                <a class="item" href="#home">Features</a>
                <hr class="br-line"/>
                <a class="item" href="#about">Roadmap</a>
                <hr class="br-line"/>
                <a class="item" href="#skills">Tokenomics</a>
                <hr class="br-line"/>
            </div>
          <div>
            <button onClick={onClickMenu} className="menu-btn">
            {showMenu ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 128 128"
                    >
                        <path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z" />
                        <path
                        fill="#444b54"
                        d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"
                        />
                        <path
                        fill="#444b54"
                        d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"
                        />
                        <path
                        fill="#444b54"
                        d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3 3-3h45c1.7,0 3,1.3 3,3S88.2,82,86.5,82z"
                        />
                    </svg>
                    ) : (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 255.99345 255.99345"
    >
        <g
        fill="#000000"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        style={{ mixBlendMode: 'normal' }}
        >
        <path d="M0,255.99345v-255.99345h255.99345v255.99345z" />
        </g>
        <g
        fill="#ffffff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        style={{ mixBlendMode: 'normal' }}
        >
        <g transform="scale(5.12,5.12)">
            <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z" />
        </g>
        </g>
    </svg>
                    )
                }
            </button>
            <div class="lg-items">
                <button class="button-1">White appear</button>
                <button class="button-2">Get Started</button>
            </div>
          </div>
          <div class={showMenu ? "items-list-cont2" : "items-list-cont"}>
          <hr class="br-line"/>
          <a class="item" href="#home">Features</a>
          <hr class="br-line"/>
          <a class="item" href="#about">Roadmap</a>
          <hr class="br-line"/>
          <a class="item" href="#skills">Tokenomics</a>
          <hr class="br-line"/>
      </div>
      </nav>
    )
} 

export default Navbar