import './About.css'
import img_aboutMe from '../../../public/img/aboutMe.jpeg'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div className='aboutMe-container'>
            <div className="aboutMe">
                <img className="img" src={img_aboutMe} />
                <span>About Me</span>
                <p className="info">
                    Por ahora: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nesciunt quis veniam. Ex cum iusto temporibus nesciunt dolores recusandae dolore aliquid optio ducimus aspernatur? Dolores aut doloremque ipsum illum asperiores.
                    Nam delectus ratione aperiam voluptates in quis, id, eius atque veritatis nisi voluptate reprehenderit eaque, ex nihil! In voluptatem, nam itaque ipsam aperiam libero quibusdam minus odio, rerum hic voluptates.
                </p>
                <div className="share">
                    <Link to='https://github.com/agusasaad' >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            style={{ color: 'white' }}
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </Link>
                    <Link to='https://twitter.com/agusasaad2'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            style={{ color: 'white' }}
                            fill="currentColor"
                            className="bi bi-twitter"
                            viewBox="0 0 16 16"
                        >
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </Link>
                    <Link to='https://www.linkedin.com/in/agust%C3%ADn-asaad/'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        width={16}
                        height={16}
                        viewBox="0 0 448 512"
                        >
                            <style dangerouslySetInnerHTML={{ __html: "svg{fill:#ffffff}" }} />
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default About
