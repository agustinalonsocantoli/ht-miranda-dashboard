// Styled
import { PaginationBox } from './PaginationStyled';

export const Pagination = ({page, setPage, max}) => {

    const countPages = [];

    for(let i = 1; i <= max; i++) {
        countPages.push(i);
    }

    return(
        <PaginationBox  active={page}>
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>

            {countPages.map(item=> (
                <p key={item} onClick={() => setPage(item)}>
                    {item}
                </p>
            ))}

            <button disabled={page >= max} onClick={() => setPage(page + 1)}>Next</button>
        </PaginationBox>
    );
}