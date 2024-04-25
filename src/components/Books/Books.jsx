import { Link, Outlet } from 'react-router-dom';
import { Fragment } from "react"
import { getBooks } from "../../data/data"
import { PINK } from '../../helpers/colors';


const Books = () => {
    const books = getBooks();
    return (
        <div style={{ display: "flex" }}>
            <nav style={{ borderLeft: "solid 1px", padding: "1rem", borderColor: PINK }}>
                <input type="text" placeholder="جستجوی کتاب" />
                {books.map((book) => (
                    <Link
                        style={{ display: "block" }}
                        to={`/books/${book.number}`}
                        key={book.number}
                    >
                        {book.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}

export default Books