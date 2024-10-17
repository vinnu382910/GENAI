import React, { useEffect, useRef, useState } from 'react';
import { Tilt } from 'react-tilt';
import Navbar from '../Navbar';
import './index.css';

const Home = () => {
    const imageRef = useRef(null);
    const section4Ref = useRef(null); // Ref for "section-4" container
    const sectionRef = useRef(null);
    const roadmapImageRef = useRef(null); // Ref for the roadmap image
    const [isMoved, setIsMoved] = useState(false);

    // Observer for section visibility
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    imageRef.current.classList.add('scale-up-ver-bottom');
                } else {
                    imageRef.current.classList.remove('scale-up-ver-bottom'); // Optional: remove to reset animation
                }
            });
        }, {
            threshold: 0.5, // Adjust visibility percentage before triggering
        });

        const currentSection = sectionRef.current;

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    // Scroll event for section-4
    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < window.innerHeight && sectionTop > 0) {
                setIsMoved(true); // Trigger animation
            } else {
                setIsMoved(false); // Reset animation when out of view
            }
        };

        const section = sectionRef.current;
        section.addEventListener('scroll', handleScroll);

        return () => {
            section.removeEventListener('scroll', handleScroll);
        };
    }, []); 

        // Observer for roadmap image visibility // Initialize the ref

        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === sectionRef.current) {
                            setIsMoved(true); // Trigger animation for section-4
                        }
    
                        if (entry.target === roadmapImageRef.current) {
                            // Trigger animation for roadmap image
                            roadmapImageRef.current.classList.add('scale-up-hor-left');
                        }
                    } else {
                        if (entry.target === sectionRef.current) {
                            setIsMoved(false); // Reset animation when out of view
                        }
    
                        if (entry.target === roadmapImageRef.current) {
                            roadmapImageRef.current.classList.remove('scale-up-hor-left'); // Optional: remove animation
                        }
                    }
                });
            }, {
                threshold: 0.5, // Adjust visibility percentage before triggering
            });
    
            const currentSection = sectionRef.current;
            const currentRoadmapImage = roadmapImageRef.current;
    
            if (currentSection) {
                observer.observe(currentSection);
            }
    
            if (currentRoadmapImage) {
                observer.observe(currentRoadmapImage);
            }
    
            return () => {
                if (currentSection) {
                    observer.unobserve(currentSection);
                }
                if (currentRoadmapImage) {
                    observer.unobserve(currentRoadmapImage);
                }
            };
        }, []);
    
    return (
        <section className='home'>
            <Navbar />
            <div className='section-1'>
                <div className='desc-cont'>
                    <div className='box-1'>
                        <p className='para'>&#x1F389; New in AI.GEN: Real Time Interaction</p>
                    </div>
                    <h1 className='heading'>
                        IOTA polygon serum ipsum <br /> WAX terraUSD gala THETA.
                    </h1>
                    <p className='content'>Chiliz serum TRON dash aave cardano crypto celo. Golem <br /> ankr bancor horizen ethereum quant bitcoin.</p>
                    <button className="button-2">
                        Get in touch
                        <div className="hoverEffect">
                            <div></div>
                        </div>
                    </button>
                </div>
                <div className='image-cont'>
                    <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1728998109/0JleJ8rPrDUZXoO1OSbzdPVXxcI.png-1_pzidbg.png" alt="leaders" className='main-image' />
                </div>
            </div>
            <div className='section-2'>
                <div className='box-2'>
                    <p className='section2-text'> <span className='section2-span-text'>Create, customize, and publish your</span><br /> digital persona to life effortlessly.</p>
                </div>
            </div>
            <div className='section-3' ref={sectionRef}>
                <div className='box-3'>
                    <div>
                        <img
                            src="https://s3-alpha-sig.figma.com/img/e16c/a06f/9164d79c6c5519475e7b5e0a4762ea0d?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NsuKsY1-b0U4Piy0gwmnHuYnosVK6Ggl5jQ6sSrI9fEo-75y7F8I6asaGNNSTE8GkDmcOvw3FRr5ffKKx~9jI4p1oRK0HD169I~EX~yD9zmI1VlxCcXtLCR4O7LMzk-lSbnDumSTeq2aHvoPwztDrUSIFwDjPbclr7CPwrbMPnXR2k2zlueRO5M-MVqoqThBjynor6OE-siEwSFgi2LKVc4ReRmaTBOTQZjVRJZq~IDU0ZntdFkF4RF92UD2VzAehYFaCuz~3ICJturyte3O1uW1bmADH0d0yV3T0ZneuR1EYP10eQ0N7lo0DJqNMOi8nGk~McpsXCVYUVlO9LyZ3w__"
                            alt="girl-image"
                            className='section3-image'
                            ref={imageRef} // Reference for the image
                        />
                    </div>
                    <div className="headings">
                        <h2 className='section3-main-heading'>How it Works</h2>
                        <h1>Select an Avtar</h1>
                        <h1>Create or Genrate Script</h1>
                        <h1>Select AI Voices</h1>
                        <h1>Publish</h1>
                    </div>
                </div>
            </div>
            <div className='section-4' ref={section4Ref}> {/* Make section-4 scrollable */}
                <div className="container" /*style={{ overflowY: 'auto', maxHeight: '400px' }}*/>
                    <div className={`main-box ${isMoved ? 'move-left' : ''}`} id="box1">
                        <div className="inner-box inner-box1">Avtar</div>
                        <div className="inner-box inner-box2">Technology</div>
                        <div className="inner-box inner-box3">Design</div>
                        <div className="inner-box inner-box4">Artificial Intelligence</div>
                        <div className="inner-box inner-box5">AI Chat Bot</div>
                        <div className="inner-box inner-box6">Customisable</div>
                        <div className="inner-box inner-box7">3D Model</div>
                        <div className="inner-box inner-box8">Engineering</div>
                    </div>
                    <div className={`main-box main-box-1 ${isMoved ? 'move-right' : ''}`} id="box2">
                        <div className="inner-box inner-box8">Avtar</div>
                        <div className="inner-box inner-box7">Technology</div>
                        <div className="inner-box inner-box6">Design</div>
                        <div className="inner-box inner-box5">Artificial Intelligence</div>
                        <div className="inner-box inner-box4">AI Chat Bot</div>
                        <div className="inner-box inner-box3">Customisable</div>
                        <div className="inner-box inner-box2">3D Model</div>
                        <div className="inner-box inner-box1">Engineering</div>
                    </div>
                </div>
            </div>
            <div className='section-5'>
                <div className='section5-cards-container'>
                    <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}
                        style={{ height: 400, width: 400, }} className="tilt-style">
                        <div class="container-10">
                            <h1 className='section5-content'>AI <br /> Outfits</h1>
                            <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729054152/IqcSLQmU6S3LAkdIXKj3OsrYBEE.png_t0mcia.png" alt="shoes-image" className='section5-image' />
                        </div>
                    </Tilt> 
                    <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}
                        style={{ height: 400, width: 400, }}>
                        <div class="container-10">
                        <h1 className='section5-content'>Realistic AI <br /> Avatar</h1>
                            <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729054166/CJ3ScV4rAlNNF6B194Y2LYy3Yk.png_k9khzu.png" alt="shoes-image" className='section5-image' />
                        </div>
                    </Tilt> 
                    <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}
                        style={{ height: 400, width: 400,}}>
                        <div class="container-10">
                        <h1 className='section5-content'>Generate or Write your <br /> Script</h1>
                            <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729055697/zkpXYjJGOWWUsn7WWpWoQE19dhs.png_fu15tp.png" alt="shoes-image" className='section5-image' />
                        </div>
                    </Tilt>
                    <Tilt options={{ max: 25, scale: 1.05, speed: 400 }}
                        style={{ height: 400, width: 400, }}>
                        <div class="container-10">
                            <h1 className='section5-content'>AI-Powered Voice <br /> Genrator</h1>
                            <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729058455/9qNX5HraxuRB6kIHb4x9u9jDkk.png_kxefj6.png" alt="shoes-image" className='section5-image' />
                        </div>
                    </Tilt> 
                </div>    
                <div className='section5-cards-container2'>
                    <div class="container-10">
                        <h1 className='section5-content'>AI <br /> Outfits</h1>
                        <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729054152/IqcSLQmU6S3LAkdIXKj3OsrYBEE.png_t0mcia.png" alt="shoes-image" className='section5-image' />
                    </div>
                    <div class="container-10">
                        <h1 className='section5-content'>Realistic AI <br /> Avatar</h1>
                        <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729054166/CJ3ScV4rAlNNF6B194Y2LYy3Yk.png_k9khzu.png" alt="shoes-image" className='section5-image' />
                    </div>
                    <div class="container-10">
                        <h1 className='section5-content'>Generate or Write your <br /> Script</h1>
                        <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729055697/zkpXYjJGOWWUsn7WWpWoQE19dhs.png_fu15tp.png" alt="shoes-image" className='section5-image' />
                    </div>
                    <div class="container-10">
                        <h1 className='section5-content'>AI-Powered Voice <br /> Genrator</h1>
                        <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729058455/9qNX5HraxuRB6kIHb4x9u9jDkk.png_kxefj6.png" alt="shoes-image" className='section5-image' />
                    </div>
                </div>        
            </div>
            <div className='section-6'>
                <h1 className='section6-heading'>Tokenomics</h1>
                <div className='info-connt'>
                    <div>
                        <table class="styled-table">
                            <tr>
                                <th>Name</th>
                                <th>   : AI GEN</th>
                            </tr>
                            <tr>
                                <th>Total Supply</th>
                                <th>  : 1B</th>
                            </tr>
                            <tr>
                                <th>Contract</th>
                                <th>: Lorem ipsum dolor sit amet consectetur</th>
                            </tr>
                        </table>
                    </div>
                    <div>
                        <table class="styled-table">
                            <tr>
                                <th>Token Name</th>
                                <th>: $AIGEN</th>
                            </tr>
                            <tr>
                                <th>Circulating Supply</th>
                                <th>: 1B</th>
                            </tr>
                            <tr>
                                <th>Chain</th>
                                <th>: Ethereum</th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='dash-bar-cont'>
                    <div>
                        <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729064718/Donut_c1wi6m.png" alt="bar" className='bar-image' />
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729065638/Holder_jc010e.png" alt="bar-image" className='bar-image'/>
                    </div>
                </div>
            </div>
            <div className='roadmap-main-cont' > 
                <h1 className='roadmap-heading'>Roadmap</h1>
                <div className='phase1-cont'>
                    <div className='phase1-box'>
                        <h1 className='phase1-heading'>PHASE 1</h1>
                        <ul className='unordered-list'>
                            <li>Horizen dai dai harmony dogecoin waves nexo.</li>
                            <li>Flow horizen waves dash tether zcash waves dash terraUSD.</li>
                            <li>Quant harmony amp cosmos PancakeSwap decentraland decred.</li>
                            <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
                        </ul>
                    </div>
                    <div className='at-container'>
                        <div className='at-item'>
                            <img 
                                src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729070912/UIpzsWjsEP9vnVhXCCTAw9fPY.webp-1_seq4cq.png" 
                                alt="phase1-image" 
                                className='phase1-image' 
                                ref={roadmapImageRef} // Roadmap image reference
                            />
                        </div>
                    </div>
                </div>
                <div className='phase1-cont'>
                    <div className='phase1-box'>
                        <h1 className='phase1-heading'>PHASE 1</h1>
                        <ul className='unordered-list'>
                            <li>Horizen dai dai harmony dogecoin waves nexo.</li>
                            <li>Flow horizen waves dash tether zcash waves dash terraUSD.</li>
                            <li>Quant harmony amp cosmos PancakeSwap decentraland decred.</li>
                            <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
                        </ul>
                    </div>
                    <div className='at-container'>
                        <div className='at-item'>
                            <img 
                                src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729077730/4tbP2BbCx80JPRs6PkI8gHiJqY8.png_yrjctq.png" 
                                alt="phase1-image" 
                                className='phase1-image' 
                                ref={roadmapImageRef} // Roadmap image reference
                            />
                        </div>
                    </div>
                </div>
                <div className='phase1-cont'>
                    <div className='phase1-box'>
                        <h1 className='phase1-heading'>PHASE 1</h1>
                        <ul className='unordered-list'>
                            <li>Horizen dai dai harmony dogecoin waves nexo.</li>
                            <li>Flow horizen waves dash tether zcash waves dash terraUSD.</li>
                            <li>Quant harmony amp cosmos PancakeSwap decentraland decred.</li>
                            <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar.</li>
                        </ul>
                    </div>
                    <div className='at-container'>
                        <div className='at-item'>
                            <img 
                                src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1729077787/PCuVUcMVjxjC5kAuPqNGvzjS7Xw.png_jsaawo.png" 
                                alt="phase1-image" 
                                className='phase1-image' 
                                ref={roadmapImageRef} // Roadmap image reference
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-section'>
                <button class="cssbuttons-io-button">
                Get started
                <div class="icon">
                    <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
                    </svg>
                </div>
                </button>
                <div className='submit-cont'>
                    <div>
                        <p className='submit-content'>Dash dash terraUSD neo uniswap <br /> kadena helium avalanche polymath <br /> bancor.</p>
                    </div>
                    <div className='help-cont'>
                        <p className='submit-para'>Looking for help?</p>
                        <div className='submit-input-cont'>
                            <input placeholder="Enter your Email..." className="input" name="text" type="text" />
                            <button class="submit-button">
                                <span>Submit</span>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='line' />
                    <div className='footer-socialmedia-cont'>
                        <div>
                            <h1 className='footer-logo'>A I . G E N</h1>
                        </div>
                        <div>
                            <div class="flex">
                                <button class="button bg-facebook" type="button">Facebook</button>
                                <button class="button bg-youtube" type="button">YouTube</button>
                                <button class="button bg-twitter" type="button">Twitter</button>
                                <button class="button bg-instagram" type="button">Instagram</button>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
}

export default Home;
