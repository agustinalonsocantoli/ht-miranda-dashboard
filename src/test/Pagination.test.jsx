import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from '../components/Pagination/Pagination';


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
})

describe('Render buttons with page numbers', () => {
    
    beforeEach(() => {})

    test('Number one exists in the document', () => {

        render(<Pagination page={1} max={5}/>);

        const  numberPage = screen.getByText('1')
        
        expect(numberPage).toBeInTheDocument()
    })

    test('Replace page number with ellipsis', () => {

        render(<Pagination page={1} max={5}/>);

        const  numberPage = screen.getByText('...')
        
        expect(numberPage).toBeInTheDocument()
    })

    test('if the page is active, the color is...', () => {
        const background = '#135846';
        const color = '#FFFFFF';

        render(<Pagination color={color} background={background} page={1} max={5}/>);

        const  numberPage = screen.getByText('1')
        
        expect(numberPage).toHaveStyle("background: #135846")
        expect(numberPage).toHaveStyle("color: #FFFFFF")
    })

    test('if the page is active, the color is not...', () => {
        const background = '#135846';
        const color = '#FFFFFF';

        render(<Pagination color={color} background={background} page={1} max={5}/>);

        const  numberPage = screen.getByText('1')
        
        expect(numberPage).not.toHaveStyle("background: transparent")
        expect(numberPage).not.toHaveStyle("color: #393939")
    })

    test('if the page is not active, the color is...', () => {
        const background = '#transparent';
        const color = '#393939';

        render(<Pagination color={color} background={background} page={2} max={5}/>);

        const  numberPage = screen.getByText('1')
        
        expect(numberPage).toHaveStyle("background: transparent")
        expect(numberPage).toHaveStyle("color: #393939")
    })

    test('if the page is not active, the color is not...', () => {
        const background = '#transparent';
        const color = '#393939';

        render(<Pagination color={color} background={background} page={2} max={5}/>);

        const  numberPage = screen.getByText('1')
        
        expect(numberPage).not.toHaveStyle("background: #135846")
        expect(numberPage).not.toHaveStyle("color: #FFFFFF")
    })

})