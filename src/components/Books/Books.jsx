import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getBooks } from "../../data/data"
import { PINK } from '../../helpers/colors';


const Books = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const books = getBooks();
    return (
        <div style={{ display: "flex" }}>
            <nav style={{ borderLeft: "solid 1px", padding: "1rem", borderColor: PINK }}>
                <input type="text" placeholder="جستجوی کتاب"
                    value={searchParams.get('filter') || ''}
                    onChange={event => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter })
                        } else {
                            setSearchParams({})
                        }

                    }}
                />
                {
                    books.filter((book) => {
                        let filter = searchParams.get('filter');
                        if (!filter) return true;
                        let name = book.name.toLowerCase()
                        return name.startsWith(filter.toLowerCase())
                    })
                        .map((book) => (
                            <Link
                                style={{ display: "block" }}
                                to={`/books/${book.number}${location.search}`}
                                key={book.number}
                            >
                                {book.name}
                            </Link>
                        ))
                }
            </nav>
            <Outlet />
        </div>
    );
}

export default Books