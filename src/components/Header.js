import PropTypes from 'prop-types'
import Button from './Button'

// destructuring props title
function Header({title, onAdd , showAdd}) {
    return (
	    <header className='header'>
	    <h1 style={headingStyle}>{title}
	</h1>
	    <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}
	onClick={onAdd}
	    />      
	    </header>
    )
}


// default props
Header.defaultProps = {
    title: 'Task Tracker'
}


// type check 
Header.propTypes ={
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color:'red',
    backgroundColor:'black',
}

export default Header


