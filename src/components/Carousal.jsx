import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import city1 from '../images/city1.jpg'
import drive1 from '../images/carousal2.jpg'
import city3 from '../images/carousal10.jpg'
import bannner from '../images/banner5.jpg'


const Carousal = () => {
    const data =
        [
            {
                "image": 'caursal1.avif',
                "title": "Subtracting from your list of priorities is as important as adding to it",
                "subTitle": "ddssfsfs"
            },
            {
                "image": 'caursal2.jpg',
                "title": "Each day I will accomplish one thing on my to do list",
                "subTitle": "tryrtyr"
            },
            {
                "image": 'caursal4.jpeg',
                "title": "We need to do a better job of putting ourselves higher on our own to do list.",
                "subTitle": "ddssfsfs"
            }
        ]
    return (
        <>
            <Carousel>

                {data.map((dt) => (
                    <Carousel.Item key={dt.image}>
                        {/* {console.log(dt, "images")} */}
                        <img style={{ height: '74vh', backgroundSize: 'cover' }}
                            src={dt.image}
                            className='d-block w-100'
                            alt={dt.title}
                        />
                        <Carousel.Caption>
                            <h3>{dt.title} </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default Carousal
