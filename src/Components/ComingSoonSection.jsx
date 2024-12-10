export default function ComingSoonSection({data:carouselData}){
    return(
        <div>
            <h1>COMING SOON</h1>
            {carouselData.map((movies,index)=>{
                return (
                    <img src={movies.src} alt={movies.alt} key={index}/>
                )
                
            })}
        </div>
    )
}