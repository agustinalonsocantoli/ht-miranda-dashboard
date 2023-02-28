import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from '../components/Pagination/Pagination';
import userEvent from '@testing-library/user-event';

describe('Clicking the button Next', () => {

    test('Button exists in the document', () => {
        render(<Pagination />);
        const button = screen.getByRole('button', {name: /Next/i})
        
        expect(button).toBeInTheDocument()
    });

    test('Button is enable', () => {
        render(<Pagination page={1}/>);
        const button = screen.getByRole('button', {name: /Next/i})

        expect(button).toBeEnabled()
    });

    test('Button is disabled', () => {
        render(<Pagination max={5} page={5}/>);
        const button = screen.getByRole('button', {name: /Next/i})

        expect(button).toBeDisabled()
    });

    // test('When you click on the button, you go to the next page', () => {
    //     render(<Pagination page={1}/>);
    //     const button = screen.getByRole('button', {name: /Next/i})
    //     const setPage = jest.fn()

    //     userEvent.click(button)

    //     expect(page).toBe(2)
    // })
});

describe('Clicking the button Prev', () => {

    test('Button exists in the document', () => {
        render(<Pagination />);
        const button = screen.getByRole('button', {name: /Prev/i})

        expect(button).toBeInTheDocument()
    })

    test('Button is enable', () => {
        render(<Pagination page={2}/>);
        const button = screen.getByRole('button', {name: /Prev/i})

        expect(button).toBeEnabled()
    });

    test('Button is disabled', () => {
        render(<Pagination page={1}/>);
        const button = screen.getByRole('button', {name: /Prev/i})

        expect(button).toBeDisabled()
    });


    // test('When you click on the button, you go back to the previous page', () => {
    //     render(<Pagination page={1}/>);
    //     const button = screen.getByRole('button', {name: /Prev/i})

    //     userEvent.click(button)

    // })
})




