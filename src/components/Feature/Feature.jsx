import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';


function Feature({feature}) {
  return (
    <div>
        <p className='flex items-center gap-2'><AiFillCheckCircle  className='text-green-500'/> 
        {feature}</p>
    </div>
  )
}

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature
