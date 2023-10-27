import './BoardPostList';

const BoardPagination = ({total, limit, page, setPage}) => {
    const numPages = Math.ceil( total / limit);

    return (
        <>
        <nav className="board_page">
            <button onClick={() => setPage( page - 1 )} disabled={page === 1}>&lt;</button>
            {Array(numPages).fill().map((_, i) => (<button key={i + 1} onClick={() => setPage( i + 1 ) } aria-current={page === i + 1 ? "page" : undefined}>{ i + 1 }</button>))}
            <button onClick={() => setPage(page + 1)} disabled={page === numPages}>&gt;</button>
        </nav>
        </>
    );
}

export default BoardPagination;