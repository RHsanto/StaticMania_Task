import Image from 'next/image';
import image1 from '../../images/Apple Podcast.png'
import image2 from '../../images/Sound Cloud.png'
import image3 from '../../images/Google Podcast.png'
import image4 from '../../images/Spotify.png'

const Podcast = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="block lg:flex justify-between gap-10 text-center px-10 lg:px-0">
      <h3 className='mb-5 lg:mb-0'>Podcast Available On</h3>
      <Image src={image1} alt="img" />
      <Image className='my-5 lg:my-0' src={image2} alt="img" />
      <Image className='my-5 lg:my-0' src={image3} alt="img" />
      <Image src={image4} alt="img" />
      </div>
    </div>
  );
};

export default Podcast;