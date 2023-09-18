import PropTypes from 'prop-types'

function Link({route}) {
  return (
    <li className='hover:bg-yellow-400 p-2'>
        <a href={route.path}>{route.name}</a>
    </li>
  )
}

Link.propTypes = {
    route: PropTypes.object,
}

export default Link
