import { Pipe, PipeTransform } from '@angular/core'
import messages from './messages-bundle'

const localeId = 'en'

@Pipe({ name: "i18n" })
export class I18nPipe implements PipeTransform {
    transform(key: String, ...replacements: String[]) {
        let result = messages.get(`${key}.${localeId}`) || ''
        replacements.forEach((replaceBy) => {
            if (replaceBy != undefined) {
                result = result.replace("${}", replaceBy.toString())
            } else {
                result = result.replace("${}", '-----')
            }
        })
        return result
    }
}