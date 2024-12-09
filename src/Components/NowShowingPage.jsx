export default function NowShowingPage({data:carouselData}){
    return(
        <div>
            <h1>Now Showing</h1>
            {carouselData.map((movies,index)=>{
                return (
                    <img src={movies.src} alt={movies.alt} key={index}/>
                )
                
            })}
        </div>
    )
}