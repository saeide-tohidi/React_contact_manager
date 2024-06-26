import { ORANGE, CURRENTLINE, PURPLE, RED } from "../../helpers/colors";
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { getBook, deleteBook } from "../../data/data"




export default function Book() {
    const params = useParams();
    const naviagate = useNavigate();
    const location = useLocation();
    const book = getBook(parseInt(params.bookId))
    if (book) {
        return (


            <div className="col-md-6">
                <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
                    <div className="card-body">
                        <div className="row align-items-center d-flex justify-content-around">
                            <div className="col-md-4 col-sm-4">
                                <img
                                    src="https://via.placeholder.com/200"
                                    alt=""
                                    style={{ border: `1px solid ${PURPLE}` }}
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="col-md-7 col-sm-7">
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-dark">
                                        نام کتاب:{"  "}
                                        <span className="fw-bold">
                                            {book.name}
                                        </span>
                                    </li>

                                    <li className="list-group-item list-group-item-dark">
                                        تاریخ انتشار:{"  "}
                                        <span className="fw-bold">
                                            {book.due}
                                        </span>
                                    </li>

                                    <li className="list-group-item list-group-item-dark">
                                        قیمت:{"  "}
                                        <span className="fw-bold">
                                            {book.amount}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">

                                <button
                                    className="btn my-1"
                                    style={{ backgroundColor: RED }}
                                    onClick={() => {
                                        deleteBook(book.number)
                                        naviagate('/books' + location.search)
                                    }}

                                >
                                    <i className="fa fa-trash" />
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        )

    } else {
        return (
            <div className="text-center py-5 px-5">
                <p className="h3" style={{ color: ORANGE }}> کتاب با این شناسه موجود نیست</p>
            </div>)

    }
}

