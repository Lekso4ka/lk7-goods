/*
    Функция возвращает данные аргумента action внутрь reducer
*/
const changeWord = (newWord) => {
    return {
        type: "CHANGEWORD",
        payload: newWord
    }
}
export {changeWord};