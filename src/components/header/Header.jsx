import React from 'react';

const Header = () => {

    const tg = window.Telegram.WebApp;

    const handleClose = () => {
        tg.close();
    };

    return (
        <div className="header">
            <Button onClick = {handleClose}>Закрыть</Button>
            <span className='username'>{tg.initDataUnsave?.user?.username}</span>
        </div>
    );
}
 
export default Header;
