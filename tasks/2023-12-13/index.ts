const REGEX = /{{ ([^}]*) }}/g;

function cipherRot13(str: string) {
    return str.replace(/[a-z]/g, rot13);

    function rot13(correspondance: string) {
        const charCode = correspondance.charCodeAt(0);
        //a = 97, z = 122
        return String.fromCharCode(
            ((charCode + 13) <= 122) ? charCode + 13
                : (charCode + 13) % 122 + 96
        );

    }
}

function convertMessage(message: string): string {
    if (message === undefined) {
        return '';
    }

    var [decodeType, value] = message.split(':');
    switch (decodeType) {
        case "b64": {
            return Buffer.from(value, 'base64').toString()
        }
        case "c13": {
            return cipherRot13(value)
        }
        case "uri": {
            return decodeURIComponent(value);
        }
        default: {
            return '';
        }
    }
}

export function decodeMessage(template: string, values: Record<string, string>): string {
    let message = template;
    const regexResults = [...template.matchAll(REGEX)];

    regexResults.forEach((result) => {
        const key = result[1];
        const value = values[key];
        message = message.replace(result[0], convertMessage(value));

    });
    return message;
}