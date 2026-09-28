const key = 12

export function Enc(value){
    const val = value.toString(key);
    return val
}

export function Dec(value){
    const val = parseInt(value, key);
    return val
}