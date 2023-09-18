import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

function PriceOption({option}) {
    const {name, price, features} = option;
  return (
    <div className='bg-blue-600 text-white p-4 rounded-md  space-y-2 flex flex-col'>
        <h2 className='text-center'>
            <span className='text-4xl font-semibold '>{price}</span>
        </h2>
        <h4 className='text-2xl text-center'>{name}</h4>
        <div className='flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature} />)
            }
        </div>
            <button className='bg-green-700 px-4 py-2 rounded-md hover:bg-green-400'>Buy now</button>
    </div>
  )
}

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption
