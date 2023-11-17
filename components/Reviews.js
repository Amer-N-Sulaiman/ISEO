/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


const Reviews = () => {
    return(
        <Box sx={{width: {xs: "100%", md: "90%"}, margin: "0 auto"}}>
            <h3 className="text-3xl mb-5 font-semibold leading-normal" style={{color: '#1976D2'}}>
                  A word from some of our clients.
            </h3>
            <Carousel>
                <img style={{margin: '0 auto'}} alt="seo-review" src='/reviews/review1.JPG' />
                <img style={{margin: '0 auto'}} alt="seo-review" src='/reviews/review2.JPG' />
                <img style={{margin: '0 auto'}} alt="seo-review" src='/reviews/review3.JPG' />
            </Carousel>
            <Link href="https://business.is-great.org/imperium-seo" underline="none"
                target="_blank"
                rel="noreferrer"
                style={{
                    margin: '20px auto',
                }}
            >
                Read More Reviews ...
            </Link>
        </Box>
    )
}

export default Reviews;