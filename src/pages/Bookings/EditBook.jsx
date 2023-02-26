// Styled
import { EditBox, BtnBox } from './EditStyled';

export const EditBook = ({ currentBook, handleInput, handleSubmit, setEdit }) => {
    return(
        <EditBox>
            <h1>Edit Book</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                e.target.reset();
            }}>
                <label>Name</label>
                <input name='name' value={currentBook.name} type="text" onChange={handleInput}/>

                <label>Check In Date</label>
                <input name='checkinDate' value={currentBook.checkinDate} type="text" onChange={handleInput}/>

                <label>Check In Time</label>
                <input name='checkinTime' value={currentBook.checkinTime} type="text" onChange={handleInput}/>

                <label>Check Out Date</label>
                <input name='checkoutDate' value={currentBook.checkoutDate} type="text" onChange={handleInput}/>

                <select name="type" value={currentBook.type} onChange={handleInput}>
                    <option value="Single 210">Single 210</option>
                    <option value="Single 220">Single 220</option>
                    <option value="Deluxe 110">Deluxe 110</option>
                    <option value="Deluxe 120">Deluxe 120</option>
                    <option value="Deluxe 310">Deluxe 310</option>
                    <option value="Deluxe 320">Deluxe 320</option>
                    <option value="Deluxe 410">Deluxe 410</option>
                    <option value="Deluxe 420">Deluxe 420</option>
                    <option value="Suite 001">Suite 001</option>
                    <option value="Suite 002">Suite 002</option>
                </select>

                <select name='status' value={currentBook.status} onChange={handleInput}>
                    <option value='Progress'>Progress</option>
                    <option value='Booked'>Booked</option>
                    <option value='Refund'>Refund</option>
                </select>

                <BtnBox>
                    <button type='submit'>Save</button>
                    <button onClick={(e) => {e.preventDefault(); setEdit(false)}}>Cancel</button>
                </BtnBox>
            </form>
        </EditBox>
    );
}