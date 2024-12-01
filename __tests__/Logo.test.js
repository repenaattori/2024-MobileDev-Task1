import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from '../App';
import Logo from "../components/Logo";


describe('Testing logos', () => {
    it('Is there a text component', () => {
        const doc = render(<Logo/>).toJSON();
        
        expect(screen.getByText('Amazing music services')).toBeOnTheScreen();
       
    });
    it('Is there an image component', () => {
        const doc = render(<Logo/>).toJSON();
        
        const img = doc.children.find(e=>e.type == 'Image')
        
        console.log(JSON.stringify(img).includes('band.png'));
        

        if(!img){
            throw new Error('Image component not found');
        }else if(!JSON.stringify(img).includes('band.png')){
            throw new Error('No correct image source set');
        }
    
    });
    it('Is there a button component with correct text', () => {
        const doc = render(<Logo/>).toJSON();
    
        expect( screen.getByRole('button')).toHaveTextContent('REGISTER');
    });
});


