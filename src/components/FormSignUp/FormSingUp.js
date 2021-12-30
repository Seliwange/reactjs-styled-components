import { Checkbox } from '../../common/Checkbox';
import {Input} from '../../common/Input';
import {Form, Button} from '../FormSignIn/FormSignIn.view';
import {MdLockOutline} from 'react-icons/md';
import {Link} from 'react-router-dom';
import { useLocalStorage } from '../../common/useLocalStorage';

export default function FormSignUp(){
    const [email, setEmail] = useLocalStorage("email", "");
    const [password, setPassword] = useLocalStorage("password", "");

    return(
        <Form.Wrapper onSubmit={e => e.preventDefault()}>
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
                    pattern=".{3,}" 
                    title="At least three characters"
                />
                <Input
                    type="text"
                    placeholder="Last Name *"
                    pattern=".{3,}" 
                    title="At least three characters"
                />
            </Form.InputWrapper>
            <Input 
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address *"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <Input 
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password *"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Eight or more characters, at least one number, one uppercase and lowercase letter"
            />
            <Checkbox label="I want to receive inspiration, marketing promotions and updates via email."></Checkbox>
            <Button>
                Sign Up
            </Button>
            <Form.LinkWrapper justify="flex-end">
                <Link to="/reactjs-styled-components/sign-in">Already have an account? Sign In</Link>
            </Form.LinkWrapper>
            <Form.Paragraph>Copyright @ Your Website 2021</Form.Paragraph>
        </Form.Wrapper>
    );
}