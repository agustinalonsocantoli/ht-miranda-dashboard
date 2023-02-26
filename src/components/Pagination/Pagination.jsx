// Styled
import { PaginationBox, List } from './PaginationStyled';

export const Pagination = ({page, setPage, max}) => {
    
    let count = [1];
    const paginate = (page, max) => {
        if (!page || !max){
            return null;
        }

        if (page === 1 && max === 1){
            return {count};
        }
        if (page > 3){
            count.push('...');
        }

        let dots = 1;
        let firstDot = page - dots;
        let lastDot = page + dots;
        
        for (let i = firstDot > 2 ? firstDot : 2; i <= Math.min(max, lastDot); i++){
            count.push(i);
        }

        if (lastDot + 1 < max){ 
            count.push('...');
        }

        if (lastDot < max){
            count.push(max);
        }

        return {count};
      };

    const countPages = paginate(page, max);


    const pageNumbers = countPages && countPages.count.map((item, index) => (
        <List key={index} onClick={() => setPage(item)} active={page} item={item}>
            {item}
        </List>  
    ))

    return(
        <PaginationBox>
            <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>

            <ul>
                {pageNumbers}
            </ul>

            <button disabled={page >= max} onClick={() => setPage(page + 1)}>Next</button>
        </PaginationBox>
    );
}