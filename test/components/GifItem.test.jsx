import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe("Pruebas de <GifItem.jsx />", () => {

    const title = 'Naruto';
    const url   = 'https://localhost/algo.jpg';

    test("debe de hacer match con el snapshot", () => {        

        const {container}=  render(<GifItem  title={title} url={url}/>);
        expect (container).toMatchSnapshot();
        
    });


    test('debe mostrar la imagen con el URL y al alt indicado', () => {

        render( <GifItem title= {title} url={url} />);

        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);


    });

    test('Debe de mostrar el titulo en el componente', () => { 
        render( <GifItem title= {title} url={url} />);
        expect(screen.getByAltText(title)).toBeTruthy();


     })


})