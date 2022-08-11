export const getUniqueKey = (pre?: string) => `${pre}. ${Math.random()}`

export const addSpaces = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
