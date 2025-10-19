const tg = window.Telegram.WebApp;

export default useTelegram = () => {

    const handleClose = () => {
        tg.close();
    };

    const handleToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    };

    const user = tg.initDataUnsave?.user;

    return (
        tg,
        user,
        handleClose,
        handleToggleButton
    );
};
