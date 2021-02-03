// Seleccionamos solo required, email y max de todas las validaciones/reglas posibles que contiene la librería

import { required, max } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'
import { i18n } from './plugins/i18n'

/*
   Indicamos que para estas tres validaciones haga una traducción del texto según el idioma seleccionado. Estas traducciones las
   tiene la propia librería de vee-validate
*/
extend('required', { ...required, message: i18n.t('validations.messages.required') })
extend('max', { ...max, message: i18n.t('validations.messages.max') })
