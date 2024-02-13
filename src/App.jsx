import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <divc className="sidebar">
        <div className="logo">
          <a href="#">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Logo" />
          </a>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="fa fa-home"></span>
                <span>Home</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="fa fa-search"></span>
                <span>Search</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="fa fas fa-book"></span>
                <span>Your Library</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="fa fas fa-plus-square"></span>
                <span>Create Playlist</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span className="fa fas fa-heart"></span>
                <span>Liked Songs</span>
              </a>
            </li>
          </ul>
        </div>


        <div className="policies">
          <ul>
            <li>
              <a href="#">Legal</a><span style={{ margin: "10px" }}><a href="#"> Privacy Center</a></span><span style={{ margin: "10px" }}><a href="#">Privacy Policy</a></span>
            </li>
            <li>
              <a href="#">Cookies</a><span style={{ margin: "10px" }}><a href="#"> About Ads</a></span><span style={{ margin: "10px" }}><a href="#">Accessibility</a></span>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </divc>

      <div className="main-container">
        <div className="topbar starting">
          <div className="prev-next-buttons">
            <button type="button" className="fa fas fa-chevron-left"></button>
            <button type="button" className="fa fas fa-chevron-right"></button>
          </div>


          <div className="navbar">
            <ul>
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li className="divider">|</li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
            <button type="button">Log In</button>
          </div>
        </div>

        <div className="spotify-playlists">
          <h2 className='starting'>Zzzzzzz</h2>

          <div className="list">
            <div className="item starting">
              <img src="https://i.scdn.co/image/ab67706f0000000281722192322800ae99c2ed06" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Sleep</h4>
              <p>Gentle Ambient piano to help you fall asleep. </p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f000000028998614b3281e12596844039" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Night Rain</h4>
              <p>Sleep with sounds of pouring rain and occas...</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f000000027e858e4098c8a256ca51d770" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>lofi sleep</h4>
              <p>Instrumental beats for a restful night's sleep.</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Deep Sleep</h4>
              <p>Soothing, minimalist ambient for deep sleep.</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e02ae10485d194d9990c83734ae" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Isolate</h4>
              <p>Soothing, minimalist ambient for deep sleep.</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f00000002e3c324443862abeb46220f00" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>White Noise 10 Hours</h4>
              <p>Ten hours long continuous white noise to help you... </p>
            </div>

          </div>
        </div>

        <div className="spotify-playlists">
          <h2 className='starting'>Focus</h2>
          <div className="list">
            <div className="item starting">
              <img src="https://i.scdn.co/image/ab67706f00000002af84f7c3b22912a280832c0b" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Peaceful Piano</h4>
              <p>Relax and indulge with beautiful piano pieces</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f00000002f3ce4c5b615e345331a22830" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Deep Focus</h4>
              <p>Keep calm and focus with ambient and pos...</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f000000027da11e4e02c0da2f543ea20f" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Deep Sleep</h4>
              <p>Soothing, minimalist ambient for deep sleep.</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f0000000273dc8d3bb78ad5cae7382c1a" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Instrumental Study</h4>
              <p>Focus with soft study music in the...</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f0000000274fff2139c75c7083370e10c" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>chill lofi study beats</h4>
              <p>The perfect study beats, twenty four...</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Coding Mode</h4>
              <p>Dedicated to all the programmers out there.</p>
            </div>

          </div>
        </div>

        <div className="spotify-playlists">
          <h2 className='starting'>Mood</h2>
          <div className="list">
            <div className="item starting">
              <img src="https://i.scdn.co/image/ab67616d00001e024a5cab23ea0c01901874699a" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Mood Booster</h4>
              <p>Get happy with today's dose of feel-good...</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e0284c53fa832dfa265192419c5"/>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Mood (feat. iann dior)</h4>
              <p>Soothing, minimalist ambient for deep sleep.</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e02c6ad2b2b62b581a23a7c1759" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Feelin' Good</h4>
              <p>Feel good with this positively timeless...</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f0000000286bcb2887768d506cded7cd3" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Dark & Stormy</h4>
              <p>Beautifully dark, dramatic tracks.</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67706f00000002babce216b8b6f1bc9e5e88a7" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Feel Good Piano</h4>
              <p>Happy vibes for an upbeat morning.</p>
            </div>

            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e02937640d81924760d9fd8d003" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Feelin' Myself</h4>
              <p>The hip-hop playlist that's a whole mood...</p>
            </div>

          </div>

          {/* footer */}

          <div className='starting'>
            <div style={{ height: "300px" }} className="container mt-5 w-100">
              <div className="footer-content d-flex justify-content-between">
                
                <div className="links d-flex flex-column">
                  <h5 className='mb-3'>Company</h5>
                              
                
                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>About</a>
                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>Jobs</a>
                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>For the Record</a>

                </div>
                <div className="guides d-flex flex-column">
                  <h5 className='mb-3'>Communities</h5>

                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>For Artists</a>
                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>Developers</a>
                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>Advertising </a>
                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>Investors </a>
                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>Vendors </a>

                </div>

                <div className="contact d-flex flex-column">


                  <h5 className='mb-3'>Useful links</h5>
                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>Support</a>
                  <a href='/' target='_blank' style={{ textDecoration: "none", color: "white" }}>Free Mobile App</a>
                  
                </div>
                <div className="guides d-flex flex-column">
                  
                </div>

                <div className="guides d-flex flex-column">
                  
                  <div className='d-flex me-5 mt-4' style={{fontSize:"25px"}}>
                  <i class="bg-create fa-brands fa-instagram  me-5"></i>
                  <i class="bg-create fa-brands fa-twitter  me-5"></i>
                  <i class="bg-create fa-brands fa-facebook "></i>
                  </div>

                </div>

              </div>
              <hr />
              <p className='mt-5'>© 2024 Spotify AB</p>

            </div>


          </div>

          {/* footer-end */}
        </div>

        <div className="preview">
          <div className="text">
            <h6>Preview of Spotify</h6>
            <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
          </div>
          <div className="button">
            <button type="button">Sign up free</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
