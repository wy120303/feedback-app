import PropTypes from 'prop-types'

function Header( { 
    text = 'Feedback UI',
    bgColor = 'black',
    textColor= 'red',
}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header style = {headerStyles}>
            <div className='container'>
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.propTypes = {
    text: PropTypes.string
}
export default Header