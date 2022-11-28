import styled from "styled-components";
import {useState} from "react";
import Flex from "./components/Flex";
import Button from "./components/Button";
import Alert from "./components/Alert";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: #f3f3f3;
  font-family: 'Nunito Sans', sans-serif;
`;

function App() {
    const [isOpenedAlert, setOpenedAlert] = useState(false);

    const handleOpen = () => setOpenedAlert(true);

    const handleClose = () => setOpenedAlert(false);
    return (
        <AppWrapper>
            <Flex>
                <Flex direction="row">
                    <Button color="primary">Primary button</Button>
                    <Button color="primary" size="large">Primary large button</Button>
                    <Button color="secondary">Secondary button</Button>
                    <Button color="primary" disabled>Disabled button</Button>
                </Flex>
                <Flex>
                    {isOpenedAlert &&
                        <Alert color="primary" onClose={handleClose}>Join Tripma today and save up to 20% on your flight
                            using code TRAVEL at checkout. Promotion valid for new users only.</Alert>}
                    <Button color="primary" onClick={handleOpen}>Open alert</Button>
                </Flex>
            </Flex>
        </AppWrapper>
    );
}

export default App;