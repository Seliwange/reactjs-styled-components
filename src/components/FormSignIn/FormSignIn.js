import { Checkbox } from '../../common/Checkbox';
import {Input} from '../../common/Input';
import {Form, Button} from './FormSignIn.view';
import {MdLockOutline} from 'react-icons/md';
import {Link} from 'react-router-dom';
import { useLocalStorage } from '../../common/useLocalStorage';

export default function FormSignIn(){
    const [email, setEmail] = useLocalStorage("email", "");
    const [password, setPassword] = useLocalStorage("password", "");
    const [checked, setChecked] = useLocalStorage("checked", false);

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Email Address *"
            />
            <Input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Password *"
            />
            <Checkbox 
                label="Remember me"
                checked={checked}
                onChange={(e) => setChecked(e.target.value)} 
                top="0"
            />
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