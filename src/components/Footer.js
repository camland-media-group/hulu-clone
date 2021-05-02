import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="footer">
            <p>
                Copyright &copy; {year} by 
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://github.com/Mridul2820">
                    Mridul
                </a> 
                . This is a Clone Version, Made with 
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://www.themoviedb.org/">
                    The TMDB API
                </a>  
            </p>
        </div>
    )
}

export default Footer
