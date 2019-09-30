$(document).ready ( () => {
    // document event listeners
    $(document).on('click', '.btn-okdialog', clickOkDialog)
    $(document).on('click', '.btn-logout', clickLogout)


    function clickOkDialog(event) {
        event.preventDefault();
        let redirectPage = $('#btn-okdialog').attr('redirect-location');    
        window.location.href = redirectPage;
    }

    function clickLogout(event) {
        event.preventDefault();
        let redirectPage = $('#btn-logout').attr('redirect-location');
        localStorage.removeItem('userKey');
        window.location.href = redirectPage;
    }


});