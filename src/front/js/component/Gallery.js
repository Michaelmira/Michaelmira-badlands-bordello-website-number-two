import React from "react";

export const Gallery = () => {
    const imageUrls = [
        "https://i.ibb.co/F3KJ03P/10-Wavelink4.jpg",
        "https://i.ibb.co/L82LC25/8-Frontage-And-Wavelink.jpg",
        "https://i.ibb.co/NZHMBKp/3-Wavelink1.jpg",
        "https://i.ibb.co/qpz2DD6/4-Interiorparty.jpg",
        "https://i.ibb.co/fNYnQYq/5photoOp.jpg",
        "https://i.ibb.co/ryXdZnX/6-Wavelink2.jpg",
        "https://i.ibb.co/kyBS1dY/7-Wavelink3.jpg",
        "https://i.ibb.co/YjqzBD0/2groupphoto2017.jpg",
        "https://i.ibb.co/Y23Vcnb/9-Interior1.jpg",
        "https://i.ibb.co/fX4M85f/1frontage2017.jpg",
        "https://i.ibb.co/z7QPcBN/11-Interior2.jpg",
        "https://i.ibb.co/bvYrFWX/12-Wavelink5.jpg",
        "https://i.ibb.co/nRk87X1/13-Interior3.jpg",
        "https://i.ibb.co/h977Gf6/14-Waveline-And-Disco-Fish.jpg",
        "https://i.ibb.co/9VpP4BC/15-Door-Solo.jpg",
        "https://i.ibb.co/1XZXgd8/16-Interior4.jpg",
        "https://i.ibb.co/C1ywVGz/17-interior5.jpg",
        "https://i.ibb.co/0hMfBWJ/18interior6.jpg",
        "https://i.ibb.co/J3MWb4L/19interior7.jpg",
        "https://i.ibb.co/26HWv5x/20people.jpg",
        "https://i.ibb.co/wK6fN3v/21people2.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138812/IMG_1660_jlilaq.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138812/IMG_1663_hml11r.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138812/IMG_1661_s8nclx.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138813/IMG_1662_rzvjzy.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138813/IMG_1664_djustj.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138813/IMG_1666_wk0sep.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138813/IMG_1665_czdtd7.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138813/IMG_1667_buyy5m.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138813/IMG_1668_cum3m6.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138815/IMG_1669_n9o3s1.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138815/IMG_1670_m0mp3z.jpg",
        "https://res.cloudinary.com/dufs8hbca/image/upload/v1716138815/IMG_1672_mx0jqy.jpg"
    ];

    const arraysOfThree = [];

    for (let i = 0; i < imageUrls.length; i += 3) {
        arraysOfThree.push(imageUrls.slice(i, i + 3));
    }

    const generateHtml = (arrays) => {
        return arrays.map(array => (
            <div className="row row-cols-1 row-cols-md-3 d-flex justify-content-center g-4">
                {array.map(url => (
                    <div className="col mb-4">
                        <img className="bbGalleryPic" src={url} alt="gallery" />
                    </div>
                ))}
            </div>
        ));
    };

    
    
    return (
        <>
            {generateHtml(arraysOfThree)}
        </>

    );
}