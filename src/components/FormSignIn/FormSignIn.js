import { Checkbox } from '../../common/Checkbox';
import {Input} from '../../common/Input';
import {Form, Button} from './FormSignIn.view';
import {MdLockOutline} from 'react-icons/md';
import {Link} from 'react-router-dom';

export default function FormSignIn(){

    return(
        <Form.Wrapper>
            <Form.Header>
                <Form.Icon>
                    <MdLockOutline />
                </Form.Icon>
                <Form.Title>
                    Sing In
                </Form.Title>
            </Form.Header>
            <Input 
                type="email"
                name="email"
                placeholder="Email Address *"
            />
            <Input 
                type="password"
                name="password"
                placeholder="Password *"
            />
            <Checkbox top="0" label="Remember me"></Checkbox>
            <Button>
                Sign In
            </Button>
            <Form.LinkWrapper>
                <Form.Link href="#">Forgot password?</Form.Link>
                <Link to="/reactjs-styled-components/sign-up">Don't have an account? Sign Up</Link>
            </Form.LinkWrapper>
            <Form.Paragraph>Copyright @ Your Website 2021</Form.Paragraph>
        </Form.Wrapper>
    );
}