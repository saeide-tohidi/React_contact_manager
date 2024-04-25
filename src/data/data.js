const books = [
    {
        'name': 'لیبرالیسم',
        'number': 10,
        'amount': '10,000',
        'due': '2024/01/02',

    },
    {
        'name': 'اخلاق لیبرالیسم',
        'number': 20,
        'amount': '40,000',
        'due': '2022/01/02',

    },
    {
        'name': 'صد سال تنهایی',
        'number': 40,
        'amount': '100,000',
        'due': '1900/01/02',

    }
]


export function getBooks() {
    return books;
}

export const getBook = (number) => {
    return books.find(book => book.number === number);
}