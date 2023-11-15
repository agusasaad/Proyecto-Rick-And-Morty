import './Card.css'
export default function Card(props) {

   const deleteCard = () => {
      props.onClose(props.id)
   }

   return (
      // <div className='Card'>
      //    <button onClick={deleteCard}>X</button>
      //    <h2 >{props.name}</h2>
      //    <h2>{props.status}</h2>
      //    <h2>{props.species}</h2>
      //    <h2>{props.gender}</h2>
      //    <h2>{props.origin.name}</h2>
      //    <img src={props.image} alt='imagen de rick' />
      // </div>
      <article className="article-wrapper">
         <div className="rounded-lg container-project" onClick={deleteCard}>
            <img src={props.image} alt='imagen de rick' />
         </div>
         <div className="project-info">
            <div className="flex-pr">
               <div className="project-title text-nowrap">{props.name}</div>
               <div className="project-hover">
                  <svg
                     style={{ color: "black" }}
                     xmlns="http://www.w3.org/2000/svg"
                     width="2em"
                     height="2em"
                     color="black"
                     strokeLinejoin="round"
                     strokeLinecap="round"
                     viewBox="0 0 24 24"
                     strokeWidth={2}
                     fill="none"
                     stroke="currentColor"
                  >
                     <line y2={12} x2={19} y1={12} x1={5} />
                     <polyline points="12 5 19 12 12 19" />
                  </svg>
               </div>
            </div>
            <div className="types">
               <span style={{backgroundColor: "rgba(165, 96, 247, 0.43)", color: "rgb(85, 27, 177)"}}className="project-type">{props.species}</span>
               <span className="project-type">{props.status}</span>
               <span style={{backgroundColor: "rgba(165, 96, 247, 0.43)", color: "rgb(85, 27, 177)"}}className="project-type">{props.origin}</span>
               <span className="project-type">{props.gender}</span>
            </div>
         </div>
      </article>

   )
}