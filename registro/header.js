document.addEventListener('DOMContentLoaded', function () {

    const headerContainer = document.createElement('div');

    headerContainer.innerHTML = `
        <div class="headerGOV">
            <img src="../assets/img-govco.svg" alt="Logo GOV">
        </div>
        <div class="LogoADRES">
            <img src="../assets/logo-adres.png" alt="Logo ADRES">
        </div>
        <div class="menu">
            <nav>
                <ul id="menu"></ul>
            </nav>
        </div>
    `;

    document.body.insertBefore(headerContainer, document.body.firstChild);

    const footerContainer = document.querySelector('.footer');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <img src="../assets/logo-cocolombia.png" alt="Logo Colombia">
            <img src="../assets/img-govco.svg" alt="Logo GOV">
        `;
    }
});
