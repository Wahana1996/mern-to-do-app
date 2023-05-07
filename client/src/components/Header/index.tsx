import React from 'react'

import LogoSvgComponents from 'assets/svg/logo'

const Header: React.FC = () => {
    return(
        <nav className="flex justify-center items-center w-full box-border shadow-xl bg-darkPurple mb-10">
            <LogoSvgComponents height="80px"/>
        </nav>
    )
}
export default Header