import Vue from 'vue'
import VueI18n from 'vue-i18n'
import validationMessagesEn from 'vee-validate/dist/locale/en'
import validationMessagesEs from 'vee-validate/dist/locale/es'
import validationMessagesFr from 'vee-validate/dist/locale/fr'
Vue.use(VueI18n)

const messages = {
  es: {
    spanish: 'Español',
    english: 'Inglés',
    french: 'Francés',
    myData: 'Mis datos',
    textMyData: 'Revisa los datos y completa aquellos pendientes antes de continuar con el proceso',
    name: 'Nombre',
    continue: 'Continuar',
    previous: 'Anterior',
    surnames: 'Apellidos',
    productPayment: 'Pago del producto',
    textProductPayment: 'Una vez efectuado el pago del producto, recibirás un email con los detalles de la compra',
    creditCard: 'Tarjeta crédito',
    textCreditCard: 'Se redigirá a una plataforma de pago. Se trata de un proceso seguro. Puede que la validación del pago tarde 24 horas en completarse.',
    pay: 'Pagar',
    congratulations: 'Enhorabuena',
    endedProcess: 'Proceso finalizado',
    textChangeLanguageTo: 'Ha cambiado el idioma a',
    help: 'Ayuda',
    signIn: 'Registrarse',
    language: 'Idioma',
    close: 'Cerrar',
    required: 'El campo no puede estar vacío111',
    validations: validationMessagesEs
  },
  en: {
    spanish: 'Spanish',
    english: 'English',
    french: 'French',
    myData: 'My data',
    textMyData: 'Review the data and complete those pending before continuing with the process',
    name: 'Name',
    continue: 'Continue',
    previous: 'Previous',
    surnames: 'Surnames',
    productPayment: 'Product payment',
    textProductPayment: 'Once the payment of the product has been made, you will receive an email with the details of the purchase',
    creditCard: 'Credit card',
    textCreditCard: 'It will be redirected to a payment platform. It is a safe process. Payment validation may take 24 hours to complete.',
    pay: 'Pay',
    congratulations: 'Congratulations',
    endedProcess: 'Ended process',
    textChangeLanguageTo: 'You have changed the language to',
    help: 'Help',
    signIn: 'Sign in',
    language: 'Language',
    close: 'Close',
    required: 'The field cannot be empty',
    validations: validationMessagesEn
  },
  fr: {
    spanish: 'Espagnol',
    english: 'Anglais',
    french: 'Français',
    myData: 'Mes données',
    textMyData: 'Passez en revue les données et complétez celles en attente avant de poursuivre le processus',
    name: 'Nom',
    continue: 'Continuer',
    previous: 'Précédent',
    surnames: 'Noms de famille',
    productPayment: 'Paiement du produit',
    textProductPayment: "Une fois le paiement du produit effectué, vous recevrez un email avec les détails de l'achat'",
    creditCard: 'Carte de crédit',
    textCreditCard: "Il sera redirigé vers une plateforme de paiement. C'est un processus sûr. La validation du paiement peut prendre 24 heures.",
    pay: 'Payer',
    congratulations: 'Toutes nos félicitations',
    endedProcess: 'Processus terminé',
    textChangeLanguageTo: 'Vous avez changé la langue en',
    help: 'Aidez-moi',
    signIn: 'Enregistreur',
    language: 'Langage',
    close: 'Fermer',
    required: 'Le champ ne peut pas être vide',
    validations: validationMessagesFr
  }
}

export const i18n = new VueI18n({
  locale: 'es',
  fallbackLocale: 'en', // De esta forma indicamos que si no encuentra el texto en español lo muestre en inglés
  messages
})
