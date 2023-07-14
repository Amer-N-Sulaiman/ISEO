/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-material-ui-carousel'



const Reviews = () => {
    return(
        <>
            <Carousel>
                <img style={{margin: '0 auto'}} alt="seo-review" src='/reviews/review1.png' />
                <img style={{margin: '0 auto'}} alt="seo-review" src='/reviews/review2.png' />
                <img style={{margin: '0 auto'}} alt="seo-review" src='/reviews/review3.png' />
            </Carousel>
        </>
    )
}

export default Reviews;