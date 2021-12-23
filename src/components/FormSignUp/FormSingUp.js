import { Checkbox } from '../../common/Checkbox';
import {Input} from '../../common/Input';
import {Form, Button} from '../FormSignIn/FormSignIn.view';
import {MdLockOutline} from 'react-icons/md';
import {Link} from 'react-router-dom';

export default function FormSignUp(){
    return(
        <Form.Wrapper>
            <Form.Header>
                <Form.Icon>
                    <MdLockOutline />
                </Form.Icon>
                <Form.Title>
                    Sing Up
                </Form.Title>
            </Form.Header>
            <Form.InputWrapper>
                <Input
                    type="text"
                    placeholder="First Name *"
                    minlength="3"
                />
                <Input
                    type="text"
                    placeholder="Last Name *"
                    minlength="3"
                />
            </Form.InputWrapper>
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
            <Checkbox label="I want to receive inspiration, marketing promotions and updates via email."></Checkbox>
            <Button>
                Sign Up
            </Button>
            <Form.LinkWrapper justify="flex-end">
                <Link to="/sign-in">Already have an account? Sign In</Link>
            </Form.LinkWrapper>
            <Form.Paragraph>Copyright @ Your Website 2021</Form.Paragraph>
        </Form.Wrapper>
    );
}