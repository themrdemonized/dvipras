import 'imask/esm/masked/dynamic';

const imaskRussianPhoneMask = {
    mask: [
        {
            mask: '+7 (0000) 00-00-00',
            startsWith: '_4212'
        },
        {
            mask: '+7 (000) 000-00-00',
            startsWith: '_'
        },
        {
            mask: '0 (0000) 00-00-00',
            startsWith: '84212'
        },
        {
            mask: '+0 (0000) 00-00-00',
            startsWith: '74212'
        },
        {
            mask: '+0 (0000) 00-00-00',
            startsWith: '+74212'
        },
        {
            mask: '0 (000) 000-00-00',
            startsWith: '8'
        },
        {
            mask: '+0 (000) 000-00-00',
            startsWith: '7'
        },
        {
            mask: '+0 (000) 000-00-00',
            startsWith: '+7'
        },
        {
            mask: '+7',
            startsWith: '+'
        }
    ],
    dispatch: function (appended, dynamicMasked) {
        const number = (dynamicMasked.value + appended).replace(/ /g,'').replace(/\(/g,'').replace(/\)/g,'');

        return dynamicMasked.compiledMasks.find(function (m) {
            if(m.startsWith[0] === '_' && number.length > 0)
            {
                if(number[0] !== '8' && number[0].match(/^\d+$/))
                {
                    return number.indexOf(number[0] + m.startsWith.substring(1)) === 0;
                }
                else if(number[0] === '+' && number.length > 1)
                {
                    return number.indexOf(number[0] + number[1] + m.startsWith.substring(1)) === 0;
                }
                else
                {
                    return false;
                }
            }

            return number.indexOf(m.startsWith) === 0;
        });
    }
};

export default imaskRussianPhoneMask;