export default function MenuFormatComp({ children, pos_x, pos_y, closeFunc }) {

    const closeMenu = () => closeFunc()

    return (

        <>

            {
                close
                    ? <div className='full absolute z-index' onMouseDown={closeMenu}></div>
                    : null
            }

            <div
                className='row absolute z-index bkg-dark-primary light-border md-py'
                style={{
                    left: pos_x + 'px',
                    top: pos_y + 'px',
                    width: 200
                }}
            >
                {children}
            </div>

        </>

    )

}