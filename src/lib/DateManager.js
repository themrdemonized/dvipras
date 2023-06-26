export default class DateManager
{
    static getStringHumanDateTimeFromString(dateStr)
    {
        const date = new Date(dateStr);

        const options = {
            day: 'numeric',
            month: 'long'
        };

        return `${date.toLocaleString('ru-RU', options)} ${date.getFullYear()}`;
    }
}