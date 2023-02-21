// Icons
import { RxCrossCircled } from "react-icons/rx";
import { RxCheckCircled } from "react-icons/rx";
// Images
import user1 from '../../assets/img/user11.png';
import user2 from '../../assets/img/user12.png';
import user3 from '../../assets/img/user13.png';
// Styled
import { MsgBox, MsgContent, Icons, UserInfo } from './MsgStyled';


export const Msg = () => {
    return(
        <MsgBox>
            <MsgContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>

                <UserInfo>
                    <img src={user1} alt="img/name" />

                    <div>
                        <h4>Kusnaidi Anderson</h4>
                        <h5>kanderson@gmail.com</h5>
                        <h5>+34 623 455 928</h5>
                    </div>
                </UserInfo>

                <Icons>
                    <RxCheckCircled />
                    <RxCrossCircled /> 
                </Icons>
            </MsgContent>

            <MsgContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>

                <UserInfo>
                    <img src={user2} alt="img/name" />

                    <div>
                        <h4>Kusnaidi Anderson</h4>
                        <h5>kanderson@gmail.com</h5>
                        <h5>+34 623 455 928</h5>
                    </div>
                </UserInfo>

                <Icons>
                    <RxCheckCircled />
                    <RxCrossCircled /> 
                </Icons>
            </MsgContent>

            <MsgContent>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>

                <UserInfo>
                    <img src={user3} alt="img/name" />

                    <div>
                        <h4>Kusnaidi Anderson</h4>
                        <h5>kanderson@gmail.com</h5>
                        <h5>+34 623 455 928</h5>
                    </div>
                </UserInfo>

                <Icons>
                    <RxCheckCircled />
                    <RxCrossCircled /> 
                </Icons>
            </MsgContent>
        </MsgBox>
    );
}