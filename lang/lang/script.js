const textVersions = {
    nav: {
        docs: {
            pt: 'Documentação',
            en: 'Documentation',
        },
        prices: {
            pt: 'Preços',
            en: 'Princing',
        },
        contact: {
            pt: 'Contato',
            en: 'Contact',
        },
    },
    div: {
        sign_in: {
            pt: 'Entrar',
            en: 'Sign in'
        },
        sign_up: {
            pt: 'Registrar',
            en: 'Sign up',
        },
    },
}

const docs = window.document.querySelector('#docs')
const prices = window.document.querySelector('#prices')
const contact = window.document.querySelector('#contact')
const sign_in = window.document.querySelector('#sign-in')
const sign_up = window.document.querySelector('#sign-up')

let selectedLanguage = 'pt'

function handleChangeSelectedLanguageToPt() {
    selectedLanguage = 'pt'
    updateTexts()
}

function handleChangeSelectedLanguageToEn() {
    selectedLanguage = 'en'
    updateTexts()
}

function updateTexts() {
    if (selectedLanguage === 'pt') {
        docs.innerHTML = textVersions.nav.docs.pt;
        prices.innerHTML = textVersions.nav.prices.pt;
        contact.innerHTML = textVersions.nav.contact.pt;
        sign_in.innerHTML = textVersions.div.sign_in.pt;
        sign_up.innerHTML = textVersions.div.sign_up.pt;
    } else {
        docs.innerHTML = textVersions.nav.docs.en;
        prices.innerHTML = textVersions.nav.prices.en;
        contact.innerHTML = textVersions.nav.contact.en;
        sign_in.innerHTML = textVersions.div.sign_in.en;
        sign_up.innerHTML = textVersions.div.sign_up.en;
    }
}

updateTexts()
